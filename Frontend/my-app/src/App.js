import './App.css';
import Forms from './Forms.js';
import Footer from './Footer.js';

function App() {
  return (
      <div className="App">
        <h1>
          Startup Success Predictor
        </h1>
        <p>
          Will this startup be successful? Enter the company's details here and find out! 
          </p>
        <Forms />
        <Footer />
      </div>
  );
}

export default App;
