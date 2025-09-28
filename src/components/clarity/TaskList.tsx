import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { useTaskStore } from '@/stores/useTaskStore';
import { TaskItem } from './TaskItem';
export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filter);
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  if (filteredTasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-4 space-y-4"
      >
        <CheckSquare className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600" />
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">All Clear!</h3>
        <p className="text-muted-foreground">
          {filter === 'completed' ? "No completed tasks yet." : "Looks like you're all caught up."}
        </p>
      </motion.div>
    );
  }
  return (
    <div className="bg-card rounded-lg border shadow-sm">
      <ul className="list-none p-0 m-0">
        <AnimatePresence>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}