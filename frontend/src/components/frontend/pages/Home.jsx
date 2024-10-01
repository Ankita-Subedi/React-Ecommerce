import BestSeller from '../layouts/BestSeller'
import Hero from '../layouts/Hero'
import LatestCollection from '../layouts/LatestCollection'
import NewsletterBox from '../layouts/NewsletterBox'
import OurPolicy from '../layouts/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
