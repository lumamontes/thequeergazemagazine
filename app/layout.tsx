import './globals.css';
import { Oswald, Inter, Milonga, Roboto } from 'next/font/google';

// Load Google Fonts (Milonga + Oswald)
const milonga = Milonga({ subsets: ['latin'], weight: ["400"], display: "swap", variable: '--font-cursive' });
const roboto = Roboto(
  { 
    subsets: ['latin'], weight: ["400", "700"],
    display: "swap",
    variable: '--font-sans',
  }
  );

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Combine the font classes
  return (
    <html lang="en">
      <head>
        <title>The Queer Gaze Magazine</title>
        <meta
          name="description"
          content="The Queer Gaze Magazine is a literary magazine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🏳️‍🌈</text></svg>"></link>      </head>
      <body className={`${milonga.className} ${roboto.className}`}>
        {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
          <main className="bg-white min-h-[600px]">{children}</main>
        ) : (
          <div className="bg-white min-h-[600px] max-w-5xl mx-auto p-5">
            Page not available. Please add an environment variable called
            NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
            deployment provider.
          </div>
        )}
      </body>
    </html>
  );
}
