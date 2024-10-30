import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactPage from "./views/ContactPage"
import Home from "./views/Home"
import Header from './components/Header'
import Footer from './components/Footer'
import Features from "./views/Features"
import SignInUp from "./views/SignInUp"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/signinup" element={<SignInUp />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App