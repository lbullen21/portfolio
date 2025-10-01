import Link from 'next/link';
import { LocationSvg } from '../components/icons';
import GeometricDesign from '../components/GeometricDesign';
import RecentWork from '../components/RecentWork';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600/80 to-purple-600/80">
                  Lauren Peña
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                Software Engineer - Frontend Web Developer
              </p>
              
              <div className="flex items-center justify-center lg:justify-start mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100/60 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                    <LocationSvg className="w-5 h-5 text-cyan-500/80 dark:text-cyan-400/80" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">Bend, Oregon</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <GeometricDesign />
          </div>
        </div>
      </section>

      <RecentWork />
    </div>
  );
}
  