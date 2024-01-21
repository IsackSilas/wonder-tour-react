import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

function PageNotFound() {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <h1>404: Page Not Found</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default PageNotFound