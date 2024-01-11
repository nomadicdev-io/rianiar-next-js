import RMain from '@/components/common/RMain';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import '@/styles/app.scss';
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'RianAir-The Sky is Ours | Professional Pilot Training | Aviators for the Future',
  description: 'RianAir Aviation is an organization put together by highly experienced professionals within the aviation industry. The Instructors have all attained the standard of excellence required in their field and are passionate about the success of their clients. RIAN AIR Aviation knows the aviation industry thoroughly, the training and professionalism necessary to succeed. They relate to the best flight schools in the world, which ensures their students become the world’s best pilots, with amazingly successful careers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>

          <Header />
          
          <RMain>{children}</RMain>

          <Footer />

      </body>
    </html>
  )
} 
