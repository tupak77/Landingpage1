import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Features />
        <SignupForm />
      </main>
      <Footer />
    </div>
  )
}
