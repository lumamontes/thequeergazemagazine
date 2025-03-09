import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items.query('Our-Projects').find();

  return (
    <div className="bg-black text-white min-h-screen">
    <main className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-16" data-testid={testIds.PROJECTS_PAGE.HEADER}>
      Issues
    </h1>

    {items.map((issue) => (
      <div 
        key={issue._id} 
        className="mb-24" 
        data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CONTAINER}
      >
        <div className="flex justify-center mb-6">
        <div className="flex justify-center mb-6">
              {issue.cover ? (
                <WixMediaImage
                  media={issue.cover}
                  width={800}
                  height={400}
                  className="shadow-lg object-fill"
                  alt={`${issue.title} Cover`}
                />
              ) : (
                <div className="bg-gray-800 flex items-center justify-center w-72 h-96 shadow-lg">
                  <p className="text-gray-400">Cover image not available</p>
                </div>
              )}
            </div>
        </div>
        <h2 className="text-center text-xl">
          <Link 
            href={`/issues/${issue.slug || issue._id}`} 
            className="hover:underline" 
            data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CTA}
          >
            {issue.title}
          </Link>
        </h2>
      </div>
    ))}

    {/* Show a message if no issues are available */}
    {items.length === 0 && (
      <div className="text-center py-10">
        <p>No issues available at the moment. Check back soon!</p>
      </div>
    )}
    </main>
    </div>
  );
}
