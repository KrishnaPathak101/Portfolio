/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Kbe0kHfpJPw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import image from './images/ecommerce.png'
import tax from './images/taxcal.png'

export default function Project() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white shadow-md ">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Project 1 Thumbnail"
                className="h-full w-full object-cover object-center"
                height="192"
                src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                style={{
                  aspectRatio: "340/192",
                  objectFit: "cover",
                }}
                width="340"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Project 1</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                A brief description of Project 1, showcasing its key features and functionalities.
              </p>
              <div className="flex items-center justify-between">
                <a
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
                  href="#"
                >
                  Live Demo
                </a>
                <a className="text-sm font-medium text-gray-900 hover:underline " href="#">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md ">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Project 2 Thumbnail"
                className="h-full w-full object-cover object-center"
                height="192"
                src={tax}
                style={{
                  aspectRatio: "340/192",
                  objectFit: "cover",
                }}
                width="340"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Project 2</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                A brief description of Project 2, showcasing its key features and functionalities.
              </p>
              <div className="flex items-center justify-between">
                <a
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
                  href="https://taxcalculatorr123.netlify.app/"
                >
                  Live Demo
                </a>
                <a className="text-sm font-medium text-gray-900 hover:underline " href="#">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md ">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Project 3 Thumbnail"
                className="h-full w-full object-cover object-center"
                height="192"
                src={image}
                style={{
                  aspectRatio: "340/192",
                  objectFit: "cover",
                }}
                width="340"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Project 3</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                A brief description of Project 3, showcasing its key features and functionalities.
              </p>
              <div className="flex items-center justify-between">
                <a
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
                  href="https://mern-ecommerce-mu-five.vercel.app/"
                >
                  Live Demo
                </a>
                <a className="text-sm font-medium text-gray-900 hover:underline " href="https://github.com/gitkrishnapathak/mern-ecommerce">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}