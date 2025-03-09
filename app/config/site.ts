export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
};

export const siteConfig: SiteConfig = {
  name: 'The Queer Gaze Magazine',
  description: 'LITERARY MAGAZINE EST 2023',
  url: 'http://thequeergazedemo.vercel.app',
  ogImage: 'http://thequeergazedemo.vercel.app/manifest/og.png',
};
