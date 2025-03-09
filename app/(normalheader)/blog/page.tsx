import Feed from '@app/components/Feed';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-16 text-white">Blog</h1>

      <div className="flex flex-col space-y-8">
        <Feed />
      </div>
    </div>
  );
};

export default About;
