import Image from 'next/image';
import SkillsSection from '../../components/SkillsSection';

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

            <SkillsSection />
        
          </div>

          {/* Visual Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="text-center">
                {/* Gradient border circle around image */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <div className="w-full h-full overflow-hidden rounded-full relative">
                    <Image
                      src="/profile.jpeg"
                      alt="Lauren Bullen"
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
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