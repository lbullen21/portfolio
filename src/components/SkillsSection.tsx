import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiPhp, 
  SiCss3, 
  SiTailwindcss, 
  SiGit 
} from 'react-icons/si';
import { PiCpuFill } from 'react-icons/pi';

export default function SkillsSection() {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'AI', icon: PiCpuFill },
    { name: 'PHP/Laravel', icon: SiPhp },
    { name: 'CSS/SCSS', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Git', icon: SiGit },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Skills & Technologies
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-gray-100 dark:bg-gray-800 py-3 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2"
            >
              <IconComponent className="text-xl text-gray-900 dark:text-white" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}