import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Features from "./components/Features"
import AboutUs from "./components/AboutUs"
import Pricing from "./components/Pricing"
import Faq from "./components/Faq"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <AboutUs />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
