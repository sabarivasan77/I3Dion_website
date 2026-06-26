import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import CompanyIdentity from './pages/CompanyIdentity';
import About from './pages/About';
import WhyChoose from './pages/WhyChoose';
import Services from './pages/Services';
import Product from './pages/Product';
import CompanyRoadmap from './pages/CompanyRoadmap';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const SinglePageLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CompanyIdentity />
        <About />
        <WhyChoose />
        <Services />
        <Product />
        <CompanyRoadmap />
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
