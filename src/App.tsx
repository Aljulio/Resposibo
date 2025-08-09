import Header from './components/Header';
import MainContent from './components/MainContent';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="container my-5">
        <MainContent />
        <CardSection />
      </main>
      <Footer />
    </>
  );
}

export default App;