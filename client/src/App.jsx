import { Navbar, Welcome, Services, Transactions, Footer } from './components';

const App = () => {
  return (
    <div className="App">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App