'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getWixClient } from '@app/hooks/useWixClientServer';
import Image from 'next/image';


const QuotedText = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="text-4xl mx-auto max-w-2xl text-center flex flex-col">
    <Image
      src={'/images/about/leftquote.png'}
      alt="Left quote icon"
      width={24}
      height={24}
    />
    <div className="p-4">{children}</div>
    <Image
      src={'/images/about/rightquote.png'}
      alt="Right quote icon"
      className="self-end"
      width={24}
      height={24}
    />
  </blockquote>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-center mt-10 mb-6">{children}</h2>
);

const TeamMemberCard = ({ name, image, about, position }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-4 relative"
  >
    <div className="w-full h-[220px] relative  overflow-hidden">
      <Image
        src={'/images/placeholder.jpg'}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center"
      />
    </div>
    <div className="bg-white sm:mt-[-48px] border-t-4 relative mx-6 px-4 pt-6 pb-4 border-pink-site text-center  shadow-md">
      <h3 className="mb-4 font-site text-xl">{name}</h3>
      <p className="text-sm mb-4">{about}</p>
      <span className="text-blue-500">{position}</span>
    </div>
  </motion.div>
);

const About = () => {
  const [team, setTeam] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const wixClient = await getWixClient();
      const { items: teamData } = await wixClient.items
        .query('Our-Team')
        .find();

      setTeam(teamData);
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        isLoaded ? 'bg-pink-site' : 'bg-black'
      } py-8`}
    >
      {/* About Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto px-6 sm:px-12  mt-16 text-center bg-black text-white  shadow-lg"
      >
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <div className="w-full pt-4 md:pt-0 md:w-1/2 ">
            <QuotedText>
              The Queer Gaze is a non-profit indie magazine for the queers with
              overlined lips, gender-benders in ripped fishnet stockings,
              androgynous royalties with their stunted crowns, nonbinary rebels
              flaunting red-lipstick drama, dreamers with rainbow mirages on
              their eyelids, black swans with wings tipped in silver, misfits in
              platform heels, and everyone in-between, in-tragedy, and
              in-wreckage against the norm.
            </QuotedText>
          </div>
          {/* Right Image Section */}
          <div className="w-full md:w-1/2 h-96 md:h-full  flex">
            <div className=" w-full  md:h-full flex">
              <Image
                src="/images/about/divine.png"
                alt="The Queer Gaze Magazine"
                objectFit="cover"
                className=""
                width={1200}
                height={1200}
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto px-6 sm:px-12 py-12 md:py-6 text-center bg-pink-site text-white  shadow-lg"
      >
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about/about.png"
              alt="The Queer Gaze Magazine"
              objectFit="cover"
              className=""
              width={1200}
              height={1200}
            />
          </div>
          {/* Right Image Section */}
          <div className="w-full md:w-1/2 md:h-full flex">
            <div className=" w-full  md:h-full flex">
              <p className="text-base md:text-2xl">
                The
                <span className="font-cursive"> Queer Gaze </span>
                is an experimental fusion of the eccentric and eclectic,
                emblazoning literary sensibility with a forefront telos of
                innovative storytelling. True to its name, queer, it splatters
                contrast against irony, crafting a paradoxical presence that
                broadens writing into innovative ubiquitousness. Its gaze
                refracts into neon colors, scattering mirrorball
                effervescence—saccharine, vicious, dauntless, and vulnerable. It
                trembles. It seethes with rage and fangs. It tiptoes into an
                arabesque of nuance. It is rainbowy flamboyance with a mercurial
                wink. It’s the grind of teeth against shards. The Queer Gaze
                aims to be magnified in its whole unapologetic queerness and
                acerbic glam.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full py-16 bg-black text-white px-6 sm:px-12"
      >
        {/* Main Container */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row relative">
          {/* Left Content */}
          <div className="w-full md:w-2/3 z-10 relative">
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-left">Our mission</h3>
              <Image
                src={'/images/about/underline.svg'}
                alt="Underline image"
                width={120}
                height={20}
                className="mt-1"
              />
            </div>

            {/* Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="max-w-[450px] text-sm leading-relaxed">
                The Queer Gaze was originally titled Legibitiqua, a coined
                pop-culture slang with a French-esque, morphological play on
                LGBTQ+. Its initial aim was to evoke the token celebratory
                moments of queer joy and LGBTQ+-centered narratives. It set out
                to explore the political spaces of queer provocation, social
                commentaries from third-gendered individuals, the complexities
                of having rainbows tattooed on your identity, and all the
                splinters and shatters that collectively form *queerness*.
              </p>
              <p className="max-w-[450px] text-sm leading-relaxed">
                Legibitiqua eventually metamorphosed into The Queer Gaze, a
                decision of expansion—a meteorite awakening, rummaging through
                the diverse stories of minorities and the marginalized. This
                evolution signaled a realization: despite the façade of
                conformity, society still brands queerness as something
                monstrous. The only way to understand this lived experience is
                by looking through the queer gaze.
              </p>
              <p className="max-w-[450px] text-sm leading-relaxed">
                Our literary magazine aims to exemplify spectral voices,
                champion inclusivity in all its facets, and unearth stories
                waiting to sprout from dormancy. It is a punk-Frankenstein with
                a surging heart for binary disruption, redefining what it means
                to be queer. It strives to amplify empowerment, yanking robust
                literary existence from minoritized communities and marginalized
                spaces.
              </p>
              <p className="max-w-[450px] text-sm leading-relaxed">
                Inspired by trailblazing theories of gender and identity, The
                Queer Gaze aspires to be ferocious shrapnel against the
                barricades of oppression—a glitter-spiked voice for the
                underrepresented. It is a quiver of individuality, a seismic
                force igniting revolutionary dialogues.
              </p>
            </div>
          </div>

          {/* Right Image (Gloves) */}
          <div className="w-full md:w-1/3 relative">
          <motion.div
  initial={{ y: 20, scale: 1.1 }}
  whileInView={{ y: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative w-full h-[500px] overflow-hidden"
>
  <Image
    src="/images/about/gloves.png"
    alt="Gloves Image"
    width={600}
    height={800}
    className="absolute right-0 top-1/2 -translate-y-1/2 scale-125"
  />
</motion.div>

          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="w-full h-[400px] relative">
          <Image
            src="/images/texture.jpg"
            alt="Team"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 py-12  shadow-lg">
          <SectionTitle>Our team</SectionTitle>
          <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
            Meet the staff
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {team.map((item) => (
              <TeamMemberCard
                key={item._id}
                name={item.name}
                image={item.image}
                about={item.about}
                position={item.position}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
