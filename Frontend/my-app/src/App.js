import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        Startup Success Predictor
      </h1>
      <p>
          Will this startup be successful? Enter the company's details here and find out! 
      </p>
      <form className="form">
        <label>
          Total Funding:
          <input type="text" name="total_funding" />
        </label>
        <label>
          Country:
          <input type="text" name="country" />
        </label>
        <label>
          Founded Year:
          <input type="text" name="founded_year" />
        </label>
        <input 
          type="submit" 
          value="Submit"
       />
      </form>
{/*       
      <h3>
        This startup will...
      </h3> */}

        <a
          className="App-link"
          href="http://shiyanboxer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By: Shiyan Boxer
        </a>
      </header>
    </div>
  );
}

export default App;
