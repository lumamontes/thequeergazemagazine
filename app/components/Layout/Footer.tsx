import './footer.css';
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
    alt: "Instagram",
    Icon: InstagramIcon,
    href: "www.instagram.com/queergazemag",
  },
  {
    alt: "Tiktok",
    Icon: TiktokIcon,
    href: "www.tiktok.com/queergazemag",
  },
  {
    alt: "Bluesky",
    Icon: TwitterIcon,
    href: "https://bsky.app/profile/queergazemag.bsky.social",
  },
  {
    alt: "Email",
    Icon: EmailIcon,
    href: "mailto:thequeergazelitmag@gmail.com",
  },
];

const Footer = () => (
  <footer
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <nav>
      <ul className="flex justify-center items-center gap-4">
        {links.map(({ href, Icon, alt }, index) => (
          <li key={index} className="list-none">
            <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
              <Image 
                src={Icon}
                alt={alt}
                width={24}
                height={24}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
