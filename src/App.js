import './App.css';
import {
  Achieve,
  Blogs,
  Clients,
  CTA,
  Footer,
  Header,
  Info,
  Navbar,
  Social,
} from './containers';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Info />
      <Achieve />
      <CTA />
      <Social />
      <Blogs />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
