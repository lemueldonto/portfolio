import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

// The content canvas is a light, cool off-white — so the deep-blue hero and
// contact read as anchors and the page flows dark → light → dark.
const CANVAS =
  'radial-gradient(55% 40% at 88% 6%, rgba(42,92,240,0.07), transparent 62%),' +
  'radial-gradient(50% 35% at 6% 40%, rgba(42,92,240,0.05), transparent 60%),' +
  'linear-gradient(180deg, #f5f7fd 0%, #eef2fb 48%, #e9eef8 100%)'

export default function App() {
  return (
    // Full-bleed: hero, light body and contact run edge to edge, no outer frame.
    <div className="relative min-h-screen overflow-hidden" style={{ background: CANVAS }}>
      <Nav />
      <main>
        <Hero />
        {/* Light content zone — blue ink on an off-white canvas */}
        <div className="zone-light text-ink">
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </main>
      <Contact />
    </div>
  )
}
