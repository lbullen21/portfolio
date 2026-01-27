export default function Work() {
  const projects = [
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      subtitle: 'Real-time weather insights',
      description: 'A responsive weather dashboard with location search using Google Maps Places API and real-time weather data from OpenWeather API, featuring beautiful data visualizations and forecasts.',
      gradient: 'from-gray-600 to-gray-800',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      ),
      features: [
        'Real-time weather data',
        'Location search',
        'Beautiful visualizations'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API', 'Google Maps API'],
      liveUrl: 'https://weather-dash-mauve.vercel.app/',
      githubUrl: 'https://github.com/lbullen21/weather-dash'
    },
    {
      id: 'planit',
      title: 'PlanIT Trip Planning',
      subtitle: 'Trip planning made simple',
      description: 'A comprehensive trip planning application that helps users create detailed itineraries, manage travel plans, and organize trips with MongoDB for data persistence and real-time updates.',
      gradient: 'from-gray-700 to-gray-900',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m-6 3l6-3"
        />
      ),
      features: [
        'Trip creation & management',
        'Data persistence with MongoDB',
        'Real-time trip updates'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Mongoose'],
      liveUrl: 'https://trip-planner-lp.vercel.app/',
      githubUrl: 'https://github.com/lbullen21/trip-planner'
    },
    {
      id: 'bookify',
      title: 'Bookify',
      subtitle: 'Music to books connection',
      description: 'An innovative application that connects Spotify users with personalized book recommendations using OpenAI. Analyzes your music taste to suggest books you\'ll love and provides direct Amazon links for easy purchasing.',
      gradient: 'from-gray-500 to-gray-700',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      features: [
        'Spotify integration',
        'AI-powered recommendations',
        'Amazon purchase links'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Spotify API'],
      liveUrl: 'https://bookify-taupe-sigma.vercel.app',
      githubUrl: 'https://github.com/lbullen21/bookify'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-left lg:text-center">
            Featured Projects
          </h2>
          
          {/* Grid for multiple projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Project Hero */}
                <div className={`bg-gradient-to-br ${project.gradient} h-64 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <svg
                      className="w-20 h-20 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {project.icon}
                    </svg>
                    <h3 className="text-2xl font-bold">{project.title.split(' ')[0]}</h3>
                    <p className="text-lg opacity-90">{project.subtitle}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100/60 dark:bg-gray-700/30 text-gray-800/80 dark:text-gray-300 text-sm font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500/80 hover:bg-cyan-600/80 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Live Demo
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <div className="text-left lg:text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            More Projects Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m always working on new and exciting projects. Check back soon for more!
          </p>
        </div>
      </div>
    </div>
  );
}