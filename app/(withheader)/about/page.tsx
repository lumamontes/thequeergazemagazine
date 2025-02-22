'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getWixClient } from '@app/hooks/useWixClientServer';

const QuotedText = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="text-xl font-light italic mx-auto max-w-3xl">
    {children}
  </blockquote>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-center mt-10">{children}</h2>
);

const TeamMemberCard = ({ name, image, about, email }: any) => (
  <div className="p-4 relative">
    <div className="w-[300px] h-[220px] relative">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
    <div className="bg-white sm:mt-[-48px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
      <h3 className="mb-10 font-site">{name}</h3>
      <p className="text-sm mb-6">{about}</p>
      <span>{email}</span>
    </div>
  </div>
);

const About = () => {
  const [team, setTeam] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const wixClient = await getWixClient();
      const { items: teamData } = await wixClient.items.query('Our-Team').find();
      const { items: volunteerData } = await wixClient.items.query('Volunteers').find();
      
      setTeam(teamData);
      setVolunteers(volunteerData);
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div className={`transition-all duration-700 ${isLoaded ? 'bg-pink-500' : 'bg-transparent'} px-6 sm:px-12 py-8`}>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
        <Image
          src="/images/about/logo.png"
          alt="The Queer Gaze Magazine"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </section>

      {/* About Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 sm:px-12 py-16 text-center bg-black text-white rounded-lg shadow-lg"
      >
        <QuotedText>
          The Queer Gaze is an experimental fusion of the eccentric and eclectic, embracing literary sensibility with a forefront telos of innovative storytelling.
        </QuotedText>

        <Image
          src="/images/about/crash.png"
          alt="The Queer Gaze Magazine"
          objectFit="cover"
          objectPosition="center"
          width={400}
          height={400}

        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 sm:px-12 py-16 text-center text-white rounded-lg shadow-lg"
      >
        <QuotedText>
          The Queer Gaze is an experimental fusion of the eccentric and eclectic, embracing literary sensibility with a forefront telos of innovative storytelling.
        </QuotedText>

        <Image
          src="/images/about/divine.png"
          alt="The Queer Gaze Magazine"
          objectFit="cover"
          objectPosition="center"
          width={400}
          height={400}

        />
      </motion.section>

      {/* Mission */}
      <motion.section>
        <p className="text-center text-lg text-black mt-10">
          <strong>Our mission is</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur fugiat odio assumenda nihil quae asperiores nemo rem sequi cumque. Necessitatibus voluptatum eligendi soluta doloribus eveniet inventore, nam laborum totam eum?
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section>
        <div className="relative">
          <div className="w-full h-[400px] relative">
            <Image
              src="/images/about/team-bg.jpg"
              alt="Team"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
            <SectionTitle>Our Team</SectionTitle>
            <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
              ChoosEquality is more than an organization. It is a family of passionate and dedicated people who share a common vision and mission of improving education for everyone. Meet some of our amazing team members below and learn more about their roles and stories.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 grid-flow-row mt-10">
              {team.map((item) => (
                <TeamMemberCard
                  key={item._id}
                  name={item.name}
                  image={item.image}
                  about={item.about}
                  email={item.email}
                />
              ))}
            </div>

            <SectionTitle>Our Volunteers</SectionTitle>
            <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
              ChoosEquality is powered by the passion and dedication of our volunteers, who are the heart and soul of our organization. Our volunteers are people from all walks of life, who share our vision and mission of improving education for everyone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 grid-flow-row mt-10">
              {volunteers.map((item) => (
                <TeamMemberCard
                  key={item._id}
                  name={item.name}
                  image={item.image}
                  about={item.about}
                  email={item.email}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
