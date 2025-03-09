'use client';

import { motion } from 'framer-motion';
import testIds from '@app/utils/test-ids';
import Image from "next/image";
import Link from "next/link";

import InstagramIcon from "@statics/social/mdi_instagram.svg";
import TwitterIcon from "@statics/social/mdi_twitter.svg";
import EmailIcon from "@statics/social/ic_baseline-email.svg";
import TiktokIcon from "@statics/social/ic_baseline-tiktok.svg";

type SocialLink = {
  alt: string;
  Icon: string;
  href: string;
};

const links: SocialLink[] = [
  {
    alt: "Email",
    Icon: EmailIcon,
    href: "mailto:thequeergazelitmag@gmail.com",
  },
  {
    alt: "Bluesky",
    Icon: TwitterIcon,
    href: "https://bsky.app/profile/queergazemag.bsky.social",
  },
  {
    alt: "Tiktok",
    Icon: TiktokIcon,
    href: "https://www.tiktok.com/@queergazemag",
  },
  {
    alt: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/queergazemag",
  },
];

const Footer = () => {
  const iconVariants = {
    initial: { opacity: 0.7, scale: 1 },
    hover: { opacity: 1, scale: 1.1 }
  };

  return (
    <footer
      data-testid={testIds.LAYOUT.FOOTER}
      className="py-8 bg-black text-white"
    >
      <nav>
        <ul className="flex justify-center items-center gap-8">
          {links.map(({ href, Icon, alt }, index) => (
            <li key={index} className="list-none">
              <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  variants={iconVariants}
                  transition={{ duration: 0.2 }}
                >
                  <Image 
                    src={Icon}
                    alt={alt}
                    width={28}
                    height={28}
                    className=""
                  />
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;