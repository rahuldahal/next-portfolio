import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const projects = [
  {
    title: 'Project 1',
    description:
      'A responsive web application built with React, NextJS, and Tailwind CSS.',
    tools: ['React', 'NextJS', 'Tailwind CSS', 'Vercel'],
    learnings: [
      'Learned how to use NextJS for server-side rendering and static site generation.',
      'Gained experience with Tailwind CSS for rapid UI development.',
      'Improved my skills in responsive design and mobile-first development.',
    ],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 2',
    description:
      'A full-stack web application built with React, Node.js, and MongoDB.',
    tools: ['React', 'Node.js', 'MongoDB', 'Express', 'Heroku'],
    learnings: [
      'Learned how to build a full-stack web application using the MERN stack.',
      'Gained experience with MongoDB and Mongoose for database management.',
      'Improved my skills in building RESTful APIs and handling server-side logic.',
    ],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 3',
    description:
      'A mobile-first web application built with React Native and Firebase.',
    tools: ['React Native', 'Firebase', 'Expo', 'Google Play Store'],
    learnings: [
      'Learned how to build a mobile-first web application using React Native.',
      'Gained experience with Firebase for authentication, database, and hosting.',
      'Improved my skills in creating responsive and cross-platform user interfaces.',
    ],
    demoLink: '#',
    githubLink: '#',
  },
];

export default function Showcase() {
  return (
    <section className="container mx-auto px-4 pt-40 pb-20 md:pb-10">
      <div className="mx-auto">
        <Tabs defaultValue="all">
          <TabsList className="mb-8 text-base">
            <TabsTrigger
              value="all"
              className="px-4 py-2 text-gray-800 hover:bg-primary-400 hover:text-gray-200 rounded-lg transition duration-300"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              className="px-4 py-2 text-gray-800 hover:bg-primary-400 hover:text-gray-200 rounded-lg transition duration-300"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="px-4 py-2 text-gray-800 hover:bg-primary-400 hover:text-gray-200 rounded-lg transition duration-300"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="fullstack"
              className="px-4 py-2 text-gray-800 hover:bg-primary-400 hover:text-gray-200 rounded-lg transition duration-300"
            >
              Full-stack
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="flex flex-col bg-white rounded-lg shadow-lg"
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base text-gray-700">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center mb-4 gap-4">
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="text-primary-500 hover:underline"
                        prefetch={false}
                      >
                        Live Demo
                      </Link>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="text-primary-500 hover:underline"
                        prefetch={false}
                      >
                        GitHub
                      </Link>
                    </div>
                    <Tabs defaultValue="tools">
                      <TabsList className="mb-4 text-base">
                        <TabsTrigger
                          value="tools"
                          className="px-4 py-2 active:bg-primary-400 text-gray-800 hover:bg-primary-400 hover:text-gray-200 rounded-lg transition duration-300"
                        >
                          Tools/Technologies
                        </TabsTrigger>
                        <TabsTrigger
                          value="learnings"
                          className="px-4 py-2 text-gray-800 hover:bg-primary-400 hover:text-gray-200 rounded-lg transition duration-300"
                        >
                          Learnings
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="tools">
                        <div className="space-y-2">
                          {project.tools.map((tool, toolIndex) => (
                            <Badge
                              key={toolIndex}
                              variant="secondary"
                              className="bg-gray-200 text-base text-gray-800 mr-4"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="learnings">
                        <div className="space-y-2 text-base">
                          {project.learnings.map((learning, learningIndex) => (
                            <p key={learningIndex} className="text-gray-700">
                              {learning}
                            </p>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* Add similar TabsContent components for "frontend", "backend", and "fullstack" if needed */}
          <TabsContent value="frontend">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
          </TabsContent>
          <TabsContent value="backend">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
          </TabsContent>
          <TabsContent value="fullstack">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
