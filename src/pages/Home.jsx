import Hero from '../components/home/Hero'
import FeaturedCourses from '../components/home/FeaturedCourses'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home