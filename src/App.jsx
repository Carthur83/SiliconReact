import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Logotypes from './components/Logotypes'
import Features from './components/Features'
import Slider from './components/Slider'
import FeaturesTwo from './components/FeaturesTwo'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  const [isDarkmodeOn, setIsDarkmodeOn] = useState(false);
  
  function switchToDark() {
    console.log(isDarkmodeOn)
    return setIsDarkmodeOn(value => !value);
  }

  return (
    <div className={`${isDarkmodeOn ? 'darkmode' : '' }`}>
      <Header  switchToDark={switchToDark}/>
      <main>
        <Hero />
        <Logotypes />
        <Features />
        <Slider />
        <FeaturesTwo />
        <Testimonials />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App