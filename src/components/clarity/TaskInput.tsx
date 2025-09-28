import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTaskStore } from '@/stores/useTaskStore';
export function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText.trim());
      setTaskText('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-1 h-12 text-lg px-4 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background"
      />
      <Button
        type="submit"
        size="lg"
        className="h-12 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 active:scale-95"
        aria-label="Add Task"
        disabled={!taskText.trim()}
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Task
      </Button>
    </form>
  );
}