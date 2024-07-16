/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vhP9VBkJZjq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Experience() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A brief overview of my professional journey and the valuable experiences I've gained along the way.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Acme Inc.</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                As a Software Engineer at Acme Inc., I was responsible for developing and maintaining complex web
                applications using cutting-edge technologies. I collaborated closely with cross- functional teams to
                deliver high-quality, user-centric solutions that exceeded client expectations.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Intern</h3>
                  <p className="text-gray-500 dark:text-gray-400">Globex Corporation</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Summer 2019</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                During my internship at Globex Corporation, I gained valuable experience in full-stack web development. I
                worked on building and optimizing web applications, and participated in agile development practices.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Stark Industries</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                As a Web Developer at Stark Industries, I was responsible for designing and implementing responsive,
                user-friendly web applications. I collaborated with cross-functional teams to deliver innovative solutions
                that drove business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }