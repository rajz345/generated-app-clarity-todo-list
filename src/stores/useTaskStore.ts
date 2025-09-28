import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Task, Filter } from '@/types';
interface TaskState {
  tasks: Task[];
  filter: Filter;
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTaskText: (id: string, text: string) => void;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
}
export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      filter: 'all',
      addTask: (text: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: uuidv4(), text, completed: false },
          ],
        })),
      toggleTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      updateTaskText: (id: string, text: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, text } : task
          ),
        })),
      setFilter: (filter: Filter) => set({ filter }),
      clearCompleted: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        })),
    }),
    {
      name: 'clarity-task-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);