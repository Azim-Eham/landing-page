import React from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layouts/Footer'
import {Provider} from 'react-redux'
import { store } from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <Menu />
            <About />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
