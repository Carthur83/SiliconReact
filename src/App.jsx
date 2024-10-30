import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Header from './components/Header'
import Footer from './components/Footer'
import AppFeatures from "./views/AppFeatures"
import SignInUp from "./views/SignInUp"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appfeatures" element={<AppFeatures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signinup" element={<SignInUp />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App