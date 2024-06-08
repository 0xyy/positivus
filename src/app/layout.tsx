import type { Metadata } from 'next';
import { spaceGrotesk } from '~styles/font';
import Layout from '~templates/Layout/Layout';
import '~styles/styles.scss';

export const metadata: Metadata = {
  title: 'Positivus',
  description: `Positivus is perfect for digital marketing agencies of all sizes and styles. Whether you're a startup looking to establish your online presence or an established agency in need of a fresh design, Positivus is the perfect choice. Try it out today and take your agency's online presence to the next level!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
