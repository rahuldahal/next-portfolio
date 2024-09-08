import { Suspense } from 'react';
import Header from '../../components/Header';
// import { Repository } from '../../types/githubGql';
// import ProjectsList from '../../components/ProjectsList';
// import { fetchPinnedRepositories } from '../../lib/projects';
import Showcase from '@/components/Showcase';

export default async function Projects() {
  // const projects: Repository[] = await fetchPinnedRepositories();

  return (
    <>
      <Header activeNav="projects" />
      <Suspense fallback={<p>Loading...</p>}>
        {/* <ProjectsList projects={projects} /> */}
        <Showcase />
      </Suspense>
    </>
  );
}
