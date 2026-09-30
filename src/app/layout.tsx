import AdSense from '@/components/analytics/AdSense';
import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import Providers from '@/components/common/Providers';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { JsonLd } from '@/components/seo/JsonLd';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = {
  ...getMetadata('/'),
  other: {
    'google-adsense-account': 'ca-pub-2824416968186037',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body lang="en" className="font-hanken-grotesk antialiased bg-grid">
          <JsonLd />
          <Providers>
            <ReactLenis root>
              <Navbar />
              {children}
              <OnekoCat />
              <Quote />
              <Footer />
              <ChatBubble />
              <UmamiAnalytics />
            <AdSense />
            </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
