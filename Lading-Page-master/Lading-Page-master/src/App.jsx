import React, { useState, useEffect, useRef } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Introduction from "./Components/Introduction/Introduction"
import Fincas from "./Components/Fincas/Fincas"
import Cotizacion from "./Components/Cotizacion/Cotizacion"
import Services from "./Components/Services/Services"
import History from "./Components/History/History"
import Footer from "./Components/Footer/Footer"
import WhatsAppButton from "./Components/whatsappBtn/WhatsappButton"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const homeRef = useRef(null);
  const about = useRef(null);
  const cotizacion = useRef(null);
  const fincas = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <Navbar isMobile={isMobile}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={about}
        cotizacionRef={cotizacion}
        fincasRef={fincas}
      />
      <Home isMobile={isMobile} ref={homeRef} />
      <Introduction isMobile={isMobile} />
      <Fincas isMobile={isMobile} ref={fincas}/>
      <Cotizacion isMobile={isMobile} ref={cotizacion} />
      <Services isMobile={isMobile} />
      <History isMobile={isMobile} ref={about} />
      <Footer isMobile={isMobile} />
      <WhatsAppButton />
    </>
  )
}

export default App
