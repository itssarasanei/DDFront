/* eslint-disable @next/next/no-page-custom-font */

import '@/styles/overrides.scss';

import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Layout } from '@/components/Head';

export const metadata: Metadata = {
  authors: [{ name: 'Alireza Shahmoradi' }],
  creator: 'Alireza Shahmoradi',
  description: `سایت مشابه دکتردکتر`,
  title: `دکتردکتر`
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        {/* Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
