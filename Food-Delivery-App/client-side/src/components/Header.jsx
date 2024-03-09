import React from "react";

export default function Header() {
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page">
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Team
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
