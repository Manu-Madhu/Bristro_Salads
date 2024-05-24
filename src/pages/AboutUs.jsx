import AboutBanner from '../components/AboutUs/AboutBanner.jsx'
import AboutContent from '../components/AboutUs/AboutContent.jsx'


const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <AboutBanner/>
      <AboutContent/>
    </div>
  )
}

export default AboutUs