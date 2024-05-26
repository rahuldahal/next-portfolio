'use client';

import { useEffect } from 'react';
import { handleLoader } from '../utils/loader';

export default function ProjectsList({ projects }) {
  useEffect(() => {
    handleLoader({ show: false });
  }, []);

  return (
    <section className="container mx-auto px-4 pt-40 pb-20 md:pb-10">
      <h1 className="text-3xl text-primary-400 font-bold">
        Projects I&apos;d like to showcase
      </h1>
      <p className="text-sm text-gray-700 mt-1 mb-3">
        <em>
          *These are open-source projects, I cannot show the commercial
          projects.
        </em>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-xl font-bold mb-2 capitalize">
              {project.name}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-600 mb-4 block"
            >
              View Repository
            </a>
            <p className="text-gray-600 mb-2">
              Language:{' '}
              <strong className="font-semibold">
                {project.primaryLanguage ? project.primaryLanguage.name : 'N/A'}
              </strong>
            </p>
            {project.repositoryTopics.nodes.length > 0 && (
              <p className="text-gray-600 mb-2">
                Topics:{' '}
                <span className="font-semibold">
                  {project.repositoryTopics.nodes
                    .map((node) => node.topic.name)
                    .join(', ')}
                </span>
              </p>
            )}
            {project.homepageUrl && (
              <a
                href={project.homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-600"
              >
                Deployed URL
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
