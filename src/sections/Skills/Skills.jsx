/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YyjkaWwoaMt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the technologies I'm proficient in as a software engineer.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <HashIcon className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm dark:text-gray-400 font-medium">HTML</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <RssIcon className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">CSS</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <ChromeIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">JavaScript</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <RedoDotIcon className="w-8 h-8 text-cyan-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">React</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <ViewIcon className="w-8 h-8 text-green-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">Vue.js</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <LeafIcon className="w-8 h-8 text-green-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">Node.js</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <TypeIcon className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">TypeScript</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <GitGraphIcon className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">Git</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <CloudIcon className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">AWS</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <ContainerIcon className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">Docker</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <CloudIcon className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">Kubernetes</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gray-100 rounded-full p-4 dark:bg-gray-800">
              <FigmaIcon className="w-8 h-8 text-pink-500" />
            </div>
            <span className="text-sm font-medium dark:text-gray-400">Figma</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function ContainerIcon(props) {
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
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  )
}


function FigmaIcon(props) {
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}


function GitGraphIcon(props) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function HashIcon(props) {
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
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function RedoDotIcon(props) {
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
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}


function RssIcon(props) {
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
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}


function TypeIcon(props) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function ViewIcon(props) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}