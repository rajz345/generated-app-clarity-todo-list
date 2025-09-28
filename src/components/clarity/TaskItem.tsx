import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useTaskStore } from '@/stores/useTaskStore';
import { Task } from '@/types';
import { cn } from '@/lib/utils';
interface TaskItemProps {
  task: Task;
}
export function TaskItem({ task }: TaskItemProps) {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center p-4 border-b border-border last:border-b-0"
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={() => toggleTask(task.id)}
        className="h-6 w-6 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
        aria-label={`Mark task as ${task.completed ? 'incomplete' : 'complete'}`}
      />
      <label
        htmlFor={`task-${task.id}`}
        className={cn(
          "flex-1 ml-4 text-lg text-foreground transition-all duration-300 cursor-pointer",
          task.completed && "line-through text-muted-foreground"
        )}
      >
        {task.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTask(task.id)}
        className="h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-destructive"
        aria-label="Delete task"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </motion.li>
  );
}