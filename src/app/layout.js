import PageLoader from '@/components/common/PageLoader';
import RMain from '@/components/common/RMain';
import Footer from '@/components/footer/Footer';
import { FormLoaderController } from '@/components/forms/FormLoaderController';
import RHeader from '@/components/header/RHeader';
import RModalController from '@/components/modal/RModalController';
import '@/styles/app.scss';
import { Gabarito } from 'next/font/google'

const fontGabarito = Gabarito({ 
  subsets: ['latin'],
  weight: [ '400', '500', '600', '800'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://rianair.in'),
  title: 'RianAir-The Sky is Ours | Professional Pilot Training | Aviators for the Future',
  description: 'RianAir Aviation is an organization put together by highly experienced professionals within the aviation industry. The Instructors have all attained the standard of excellence required in their field and are passionate about the success of their clients. RIAN AIR Aviation knows the aviation industry thoroughly, the training and professionalism necessary to succeed. They relate to the best flight schools in the world, which ensures their students become the world’s best pilots, with amazingly successful careers.',
  openGraph: {
    title: 'RianAir-The Sky is Ours | Professional Pilot Training | Aviators for the Future',
    description: 'RianAir Aviation is an organization put together by highly experienced professionals within the aviation industry. The Instructors have all attained the standard of excellence required in their field and are passionate about the success of their clients.',
    siteName: 'RianAir',
    images: [
      {
        url: 'https://ciersten.sirv.com/rianiar/r-og-image.jpg',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website', 
  }
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={fontGabarito.className}>

          {/*<PageLoader />*/}

          <RHeader />
          
          <RMain>{children}</RMain>

          <Footer />

          <RModalController />
          <FormLoaderController />
      </body>
    </html>
  )
} 
