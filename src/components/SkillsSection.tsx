import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiPhp, 
  SiCss3, 
  SiTailwindcss, 
  SiGit,
  SiMongodb
} from 'react-icons/si';
import { PiCpuFill } from 'react-icons/pi';

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'PHP', icon: SiPhp },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'AI', icon: PiCpuFill },
];

const SkillsSection = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The tools and technologies I work with
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <IconComponent className="w-8 h-8 mb-3 text-gray-900 dark:text-white" />
              <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;