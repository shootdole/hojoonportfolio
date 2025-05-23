'use client';

const skills = ['JS', 'TS', 'React', 'Tailwindcss', 'Premierepro'];

const getGradientClass = (index: number) => {
  const gradients = [
    'from-yellow-400 to-orange-500',
    'from-blue-400 to-indigo-500',
    'from-cyan-400 to-blue-500',
    'from-teal-400 to-emerald-500',
    'from-purple-400 to-pink-500'
  ];
  return gradients[index % gradients.length];
};

export default function TechSkill() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-emerald-500/20">
      <h2 className="text-xl font-semibold mb-6 text-white bg-gradient-to-r from-emerald-500 to-teal-500 inline-block text-transparent bg-clip-text">
        Tech Skill
      </h2>
      <div className="bg-gray-700/50 rounded-lg p-6 border border-emerald-500/20">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${getGradientClass(index)} 
                shadow-lg hover:scale-105 transition-transform cursor-default`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 