export default function SkillsSection() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PHP/Laravel',
    'CSS/SCSS',
    'Tailwind CSS',
    'Git',
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Skills & Technologies
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}