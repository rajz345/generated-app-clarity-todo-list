import React from 'react';
import { Button } from '@/components/ui/button';
import { useTaskStore } from '@/stores/useTaskStore';
import { Filter } from '@/types';
import { cn } from '@/lib/utils';
export function TaskFilters() {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);
  const clearCompleted = useTaskStore((state) => state.clearCompleted);
  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;
  const filters: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-card rounded-lg border shadow-sm text-sm text-muted-foreground space-y-4 sm:space-y-0">
      <span>{activeCount} {activeCount === 1 ? 'item' : 'items'} left</span>
      <div className="flex items-center space-x-2">
        {filters.map(({ label, value }) => (
          <Button
            key={value}
            variant="ghost"
            size="sm"
            onClick={() => setFilter(value)}
            className={cn(
              "transition-colors",
              filter === value ? 'bg-accent text-blue-500 hover:text-blue-600' : 'hover:bg-accent'
            )}
          >
            {label}
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={clearCompleted}
        disabled={completedCount === 0}
        className="hover:text-destructive disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Clear Completed
      </Button>
    </div>
  );
}