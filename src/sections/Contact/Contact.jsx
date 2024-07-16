import React from 'react';

export default function Contact() {
  return (
    <section className="container mx-auto px-5  py-5 md:py-5">
      <div className="grid grid-cols-1  gap-8 md:gap-12">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">Connect with Me</h2>
          <p className="text-gray-500 dark:text-gray-400">Find me on the following platforms:</p>
          <div className="flex flex-col gap-4">
            <a
              className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <LinkedinIcon className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <TwitterIcon className="h-6 w-6" />
              <span>Twitter</span>
            </a>
            <a
              className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <GithubIcon className="h-6 w-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 dark:text-gray-400">Have a project in mind? Let's chat.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block  w-full px-3 py-2 text-black bg-white  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full text-black bg-white  px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                className=" dark:bg-slate-900 text-black bg-white  mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
