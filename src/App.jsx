import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';

import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="flex min-h-screen bg-[#F4F8F9]">
        {/* Sidebar for Desktop */}
        <div className="hidden md:block">
           <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:ml-72 relative min-h-screen transition-all duration-300">
           {/* Mobile Header - Visible only on small screens */}
           <div className="md:hidden">
              <Header />
           </div>

           <main className="flex-1 bg-[#F4F8F9]">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/initiatives" element={<Initiatives />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
           </main>
           
           <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;