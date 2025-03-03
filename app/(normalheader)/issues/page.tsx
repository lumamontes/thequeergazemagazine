import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import Image from 'next/image';

export default async function Projects() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items.query('Our-Projects').find();

  return (
    <div className="relative">
      {/* Header Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/header3.png"
          alt="Projects Header"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 py-12 shadow-lg rounded-lg">
        {/* Page Header */}
        <h1 className="text-center text-3xl font-bold py-6" data-testid={testIds.PROJECTS_PAGE.HEADER}>
          Issues
        </h1>
        <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          At ChoosEquality, we are always working on projects to improve the quality and accessibility of education for everyone. 
          Take a look at some of our current and past projects.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10" data-testid={testIds.PROJECTS_PAGE.PROJECT_LIST}>
          {items!.map((item) => (
            <div
              key={item._id}
              className="group p-4 relative transition-transform duration-300 hover:scale-105"
              data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CONTAINER}
            >
              {/* Project Image */}
              <div className="w-[370px] h-[320px] relative mx-auto rounded-lg overflow-hidden shadow-md">
                <WixMediaImage
                  media={item.cover}
                  alt={item.title}
                  objectFit="cover"
                  className="w-full h-full rounded-lg"
                />
              </div>

              {/* Project Description */}
              <div className="bg-white sm:mt-[-50px] border-t-4 border-pink-site text-center p-6 rounded-lg shadow-md relative z-10">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm mt-2 mb-4">{item.shortDescription}</p>
                <a
                  data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CTA}
                  href={`/issues/${item.slug}`}
                  className="text-purple-site font-medium transition-all duration-300 hover:underline hover:text-purple-700"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
