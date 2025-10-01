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
                solve complex problems. I have extensive experience working with AI tools 
                and design programs like Figma in an agile environment, collaborating with 
                cross-functional teams to deliver exceptional user experiences. I believe in 
                writing clean, maintainable code and creating intuitive user interfaces.
              </p>
              
              <p className="mb-8">
                When I&apos;m not coding, you can find me exploring and enjoying the great outdoors of Bend, Oregon.
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
                  'PHP/Laravel',
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
        
          </div>

          {/* Visual Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Lauren Bullen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}