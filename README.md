# Clarity: A Minimalist Todo App

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/rajz345/generated-app-clarity-todo-list)

Clarity is a visually stunning, minimalist todo list application designed for focus and simplicity. It provides a serene and distraction-free environment for managing daily tasks. The application's core is a single, clean interface where users can add, view, edit, complete, and delete tasks. The design emphasizes whitespace, clean typography, and subtle, delightful animations to make task management a calming experience. The app persists tasks in the browser's local storage.

## Key Features

- **Minimalist Interface**: A clean, distraction-free UI to help you focus.
- **Core Task Management**: Add, edit, complete, and delete tasks with ease.
- **Task Filtering**: View tasks by 'All', 'Active', or 'Completed' status.
- **Persistent State**: Your tasks are saved in your browser's local storage, so they're there when you come back.
- **Smooth Animations**: Built with Framer Motion for delightful and subtle micro-interactions.
- **Responsive Design**: Flawless experience on desktop, tablet, and mobile devices.
- **Clear Completed**: Quickly clear all completed tasks to tidy up your list.

## Technology Stack

- **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: [uuid](https://github.com/uuidjs/uuid) for unique ID generation
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/clarity_todo.git
    cd clarity_todo
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Run the development server:**
    ```bash
    bun run dev
    ```

The application should now be running on `http://localhost:3000`.

## Usage

- **Add a task**: Type your task into the input field at the top and press `Enter` or click the "Add Task" button.
- **Complete a task**: Click the checkbox next to a task to mark it as complete.
- **Delete a task**: Hover over a task and click the trash icon that appears.
- **Filter tasks**: Use the filter buttons in the footer to switch between "All", "Active", and "Completed" views.
- **Clear completed tasks**: Click the "Clear Completed" button to remove all completed tasks from your list.

## Development Scripts

- `bun run dev`: Starts the Vite development server with hot reloading.
- `bun run build`: Compiles and bundles the application for production.
- `bun run preview`: Serves the production build locally to preview it before deployment.
- `bun run lint`: Runs ESLint to check for code quality and style issues.

## Deployment

This project is configured for easy deployment to Cloudflare Pages.

1.  **Log in to Cloudflare:**
    If you haven't already, log in to your Cloudflare account using the Wrangler CLI.
    ```bash
    npx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script. This will build the application and deploy it to your Cloudflare account.
    ```bash
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository using the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/rajz345/generated-app-clarity-todo-list)

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.