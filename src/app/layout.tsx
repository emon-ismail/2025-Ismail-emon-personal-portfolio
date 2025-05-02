import { Inter, Poppins, Fira_Code } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Mohammad Ismail Emon - Digital Ops Manager & Marketing Specialist',
  description: 'Digital Operations Manager specializing in Facebook Ads, Social Media Growth, and E-commerce Marketing. Expert in digital marketing automation and front-end development.',
  keywords: ['Digital Marketing', 'Facebook Ads', 'SEO', 'Front-end Development', 'E-commerce Marketing', 'Social Media Growth', 'Marketing Automation'],
  authors: [{ name: 'Mohammad Ismail Emon' }],
  creator: 'Mohammad Ismail Emon',
  publisher: 'Mohammad Ismail Emon',
  robots: 'index, follow',
  verification: {
    google: 'hWJa3yp80Hyr--6tTsiSsKYIZv74-v9vM5blGkGS9LI',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Mohammad Ismail Emon Portfolio',
    title: 'Mohammad Ismail Emon - Digital Marketing & Development Expert',
    description: 'Digital Operations Manager with expertise in Facebook Ads, Social Media Growth, and E-commerce Marketing',
    images: [
      {
        url: '/ismail-emon.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohammad Ismail Emon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Ismail Emon - Digital Marketing Specialist',
    description: 'Digital Operations Manager specializing in Facebook Ads and Marketing Automation',
    images: ['/ismail-emon.jpg'],
    creator: '@yourtwitterhandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${firaCode.variable} scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="4hTFfooTNRBLALh642EB5qMdkSpjOrrn4fPIf0ZhjEk" />
        <link rel="canonical" href="https://ismailemon.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ismail-emon-logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohammad Ismail Emon",
              "url": "https://ismailemon.com",
              "image": "https://ismailemon.com/ismail-emon.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/ismailemon",
                "https://github.com/ismailemon"
              ],
              "jobTitle": "Digital Operations Manager",
              "worksFor": {
                "@type": "Organization",
                "name": "Oasis Outfit || Zii Zii Island"
              },
              "description": "Digital Operations Manager, Marketing & SEO Specialist with expertise in Facebook Ads and E-commerce Marketing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chattogram",
                "addressCountry": "Bangladesh"
              },
             
            })
          }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
} 