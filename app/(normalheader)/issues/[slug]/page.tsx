import { getWixClient } from '@app/hooks/useWixClientServer';
import Issue from '@app/components/Issue';
import { siteConfig } from '@app/config/site';

// Define the params interface
interface ProjectPageParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const wixClient = await getWixClient();
  const { items } = await wixClient.items.query('Our-Projects').find();

  const project = items.filter((item) => item.slug === slug)[0];

  if (!project) {
    return {
      title: 'Not found!',
      description: 'The register was not found.',
    };
  }

  return {
    title: project.title,
    description: project.short_description,
    openGraph: {
      title: project.title,
      description: project.short_description,
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
        },
      ],
      url: `${siteConfig.url}/issues/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.short_description,
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: ProjectPageParams;
}) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items.query('Our-Projects').find();

  const slug = params.slug;
  const project = items.filter((item) => item.slug === slug)[0];

  if (!project) {
    throw new Error('Project not found');
  }

  return <Issue initialProject={project} />;
}
