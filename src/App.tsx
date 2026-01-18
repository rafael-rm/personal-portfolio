import { LanguageProvider } from '@/context/LanguageContext'
import { Header, Hero, About, Skills, Experience, Projects, Contact, Footer } from '@/features'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
