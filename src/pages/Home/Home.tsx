import CreateSection from './components/CreateSection'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import SectionOne from './components/SectionOne'

const Home = () => {
  return (
    <>
      <Hero />
      {/* <SectionOne /> */}
      <CreateSection />
      <ProjectSection />
    </>
  )
}

export default Home
