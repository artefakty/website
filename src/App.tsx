import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/404'
import Projects from './pages/Projects'
import Events from './pages/Events'
import EventShowMore from './components/events/EventShowMore'
import Contact from './pages/Contact'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventShowMore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App