import Explore from "../../components/Explore"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import CardContainer from "../../components/CardContainer"
import Footer from "../../components/Footer"
import './Home.module.css'

function Home() {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Explore/>
        <CardContainer/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home
