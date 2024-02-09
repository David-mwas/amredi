import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between w-full px-4 py-2 md:py-4 lg:px-6 lg:py-4">
        <nav className="hidden space-x-4 text-sm font-medium lg:flex">
          <a
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
          >
            Features
          </a>
          <a
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
          >
            Screenshots
          </a>
          <a
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
          >
            Testimonials
          </a>
        </nav>
      </header>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Download Amredi App</h1>
          <p className="text-gray-500 dark:text-gray-400">
            The best app for all your needs
          </p>
        </div>
        <button className="mx-auto bg-pink-500 px-12 rounded-md py-2" size="lg">
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
