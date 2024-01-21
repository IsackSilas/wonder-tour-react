import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Typography from "./pages/Typography"
import ContactUs from "./pages/ContactUs"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/typography" element={<Typography />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
