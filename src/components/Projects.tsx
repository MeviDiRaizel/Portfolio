import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Octokit } from '@octokit/rest';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projects, setProjects] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      const octokit = new Octokit();
      try {
        const response = await octokit.repos.listForUser({
          username: 'MeviDiRaizel',
          sort: 'updated',
          per_page: 6
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e2024_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description || 'No description available'}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View on GitHub →
                  </a>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">
                      ⭐ {project.stargazers_count}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;