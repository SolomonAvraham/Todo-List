
# Todo List Application

This project is a simple and intuitive Todo List application built with React, TypeScript, and CSS Modules. It allows users to add, update, and remove tasks, with completed tasks being displayed separately. The application also uses local storage to persist data between sessions.

## Features

- **Add Todo**: Add new tasks to your todo list.
- **Update Status**: Mark tasks as complete or incomplete.
- **Remove Todo**: Remove tasks from your list.
- **Persist Data**: Data is saved to local storage, ensuring your tasks are available even after refreshing the page.
- **Error Handling**: Prevent adding empty tasks with user-friendly error messages.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that enhances developer productivity.
- **CSS Modules**: Scoped CSS to prevent class name collisions and keep styles maintainable.
- **Local Storage**: Web storage API to persist data across sessions.

## Project Structure

```
src/
  components/
    AddTodo.tsx
    AddTodo.module.css
    ToDoList.tsx
    ToDoList.module.css
  types/
    index.ts
  App.tsx
  App.module.css
  index.tsx
```

- **components/**: Contains the `AddTodo` and `ToDoList` components along with their respective styles.
- **types/**: Contains TypeScript type definitions.
- **App.tsx**: The main application component.
- **App.module.css**: Scoped styles for the main application component.
- **index.tsx**: Entry point of the React application.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

### Running the Application

To start the development server, run:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

The optimized build will be output to the `build` directory.

## Usage

### Add a Todo

1. Type your task into the input field.
2. Click the "Add" button or press `Enter`.
3. Your task will appear in the list.

### Mark a Task as Complete

1. Click the "DONE" button next to the task.
2. The task will move to the "Completed" section.

### Remove a Task

1. Click the "REMOVE" button next to the task.
2. The task will be removed from the list.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature/your-feature`).
3. **Commit your changes** (`git commit -m 'Add your feature'`).
4. **Push to the branch** (`git push origin feature/your-feature`).
5. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
