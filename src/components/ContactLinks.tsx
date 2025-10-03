import { EmailSvg, LinkedInSvg, GitHubSvg } from './icons';

export default function ContactLinks() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Contact Information */}
      <div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Empty left column */}
          <div></div>
          
          {/* Center column with contact content */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                  <EmailSvg className="w-6 h-6 text-blue-500/80 dark:text-cyan-400/80" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <a 
                  href="mailto:lauren.e.bullen@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-600/80 dark:hover:text-cyan-400/80 transition-colors duration-200 whitespace-nowrap"
                >
                  lauren.e.bullen@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                  <LinkedInSvg className="w-6 h-6 text-blue-500/80 dark:text-cyan-400/80" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/lauren-bullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-600/80 dark:hover:text-cyan-400/80 transition-colors duration-200 whitespace-nowrap"
                >
                  linkedin.com/in/lauren-bullen
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                  <GitHubSvg className="w-6 h-6 text-blue-500/80 dark:text-cyan-400/80" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
                <a 
                  href="https://github.com/lbullen21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-600/80 dark:hover:text-cyan-400/80 transition-colors duration-200 whitespace-nowrap"
                >
                  github.com/lbullen21
                </a>
              </div>
            </div>
          </div>
          
          {/* Empty right column */}
          <div></div>
        </div>
      </div>
    </div>
  );
}