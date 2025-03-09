import { getWixClient } from '@app/hooks/useWixClientServer';
import Issue from '@app/components/Issue';

// Define the params interface
interface ProjectPageParams {
  slug: string;
}

export default async function ProjectPage({ params }: { params: ProjectPageParams }) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items
    .query('Our-Projects')
    .find();

  const slug = params.slug;
  const project = items.filter(item => item.slug === slug)[0];

  if (!project) {
    throw new Error('Project not found');
  }

  return <Issue initialProject={project} />;
}