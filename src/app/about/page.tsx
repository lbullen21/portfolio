export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            
            <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none">
              <p className="mb-6">
                Hi, I&apos;m Lauren Bullen, a passionate software engineer with a focus on 
                frontend development. I love creating beautiful and functional digital 
                experiences using modern web technologies and have a keen eye for user-centered design.
              </p>
              
              <p className="mb-6">
                With a background in both front-end and back-end development, I enjoy 
                working on projects that challenge me to learn new technologies and 
                solve complex problems. I believe in writing clean, maintainable code 
                and creating intuitive user interfaces.
              </p>
              
              <p className="mb-8">
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying the great outdoors.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Python',
                  'CSS/SCSS',
                  'Tailwind CSS',
                  'Git',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience Highlights
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Software Engineer - Frontend
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    2022 - Present
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developing responsive web applications with a focus on frontend 
                    technologies and exceptional user experiences.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Frontend Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    2020 - 2022
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialized in creating responsive and accessible user interfaces 
                    with React and modern CSS frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}