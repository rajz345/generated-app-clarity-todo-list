import { TaskInput } from '@/components/clarity/TaskInput';
import { TaskList } from '@/components/clarity/TaskList';
import { TaskFilters } from '@/components/clarity/TaskFilters';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black -z-10" />
      <main className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
            Clarity
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            A minimalist todo app for focus and simplicity.
          </p>
        </div>
        <div className="space-y-8">
          <TaskInput />
          <TaskList />
          <TaskFilters />
        </div>
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>Built with ❤️ at Cloudflare</p>
        </footer>
      </main>
    </div>
  );
}