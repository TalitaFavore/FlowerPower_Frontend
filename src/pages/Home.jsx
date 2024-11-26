import Hero from "../components/Hero"
import Instructions from "../components/Instructions"
import Navbar from "../components/NavBar"
import Info from "../components/Info"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <div>
        <Navbar/>
      <Hero/>
      <Instructions/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default Home
