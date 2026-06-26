import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Product from './pages/Product';
import Technology from './pages/Technology';
import Features from './pages/Features';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const SinglePageLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Product />
        <Technology />
        <Features />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<SinglePageLayout />} />
          <Route path="/admin" element={
            <>
              <Navbar />
              <Dashboard />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
