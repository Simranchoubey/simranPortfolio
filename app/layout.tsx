import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://simranchoubey.dev'
const FULL_NAME = 'Simran Choubey'
const TITLE = 'Simran Choubey — Full Stack Developer & CSE Student'
const DESC =
  'Full Stack Developer and Computer Science Engineering student at Gujarat Technological University. Building scalable web apps with React.js, Node.js, and Express.js. 600+ DSA problems solved, 1600+ LeetCode rating.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${FULL_NAME}` },
  description: DESC,
  keywords: [
    'Simran Choubey','Full Stack Developer','React Developer','Node.js Developer',
    'Software Engineer','CSE Student Gujarat','Next.js Portfolio','LeetCode','DSA',
    'Gujarat Technological University','InterviewMate AI','Web Developer India',
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website', locale: 'en_IN', url: SITE_URL,
    siteName: `${FULL_NAME} — Portfolio`, title: TITLE, description: DESC,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image', title: TITLE, description: DESC,
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#04080f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FULL_NAME,
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  description: DESC,
  email: 'simrankchoubey@gmail.com',
  telephone: '+91-9430225355',
  sameAs: ['https://github.com/Simranchoubey','https://linkedin.com/in/simran-5124692a6'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Gujarat Technological University' },
  knowsAbout: ['React.js','Node.js','Next.js','Express.js','MongoDB','PostgreSQL','TypeScript','Data Structures & Algorithms','Full Stack Development','System Design'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
