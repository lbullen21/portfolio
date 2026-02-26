import Link from "next/link";
import { LocationSvg, EmailSvg, LinkedInSvg, GitHubSvg } from "@/components/icons";
import SkillsSection from "@/components/SkillsSection";
import ProfilePic from "@/components/ProfilePic";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left lg:text-left">
              {/* Main Content */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Lauren Peña
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Software Engineer | Frontend Web Developer 
              </h2>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {/* Location */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                    <LocationSvg className="w-5 h-5 text-blue-500/80 dark:text-cyan-400/80" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Bend, Oregon
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Available for remote work
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                    <EmailSvg className="w-5 h-5 text-blue-500/80 dark:text-cyan-400/80" />
                  </div>
                  <div>
                    <a 
                      href="mailto:lauren.e.bullen@gmail.com"
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-cyan-600/80 dark:hover:text-cyan-400/80 transition-colors duration-200"
                    >
                      lauren.e.bullen@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                    <LinkedInSvg className="w-5 h-5 text-blue-500/80 dark:text-cyan-400/80" />
                  </div>
                  <div>
                    <a 
                      href="https://linkedin.com/in/lauren-bullen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-cyan-600/80 dark:hover:text-cyan-400/80 transition-colors duration-200"
                    >
                      linkedin.com/in/lauren-bullen
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                    <GitHubSvg className="w-5 h-5 text-blue-500/80 dark:text-cyan-400/80" />
                  </div>
                  <div>
                    <a 
                      href="https://github.com/lbullen21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-cyan-600/80 dark:hover:text-cyan-400/80 transition-colors duration-200"
                    >
                      github.com/lbullen21
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-500/80 hover:bg-cyan-600/80 transition-colors duration-200"
                >
                  View My Work
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <ProfilePic />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkillsSection />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-start">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Hi, I&apos;m Lauren Peña, a passionate frontend developer with a love for creating 
              intuitive and efficient web applications. I enjoy working with modern technologies 
              and constantly learning new tools to solve complex problems.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              My journey in web development started with a curiosity about how things work 
              behind the scenes. Since then, I&apos;ve developed expertise in frontend technologies, 
              with a particular focus on React, Next.js, and TypeScript.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I&apos;m also experienced with AI tools and love integrating them into my workflow 
              to enhance productivity and create smarter solutions. When I&apos;m not coding, 
              you can find me exploring the outdoors or learning about new technologies.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach 
              out if you&apos;d like to work together or just chat about technology!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
