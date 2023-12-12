import './App.css';
import Forms from './Forms.js';
import Footer from './Footer.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
    return (
        <div className="App">
            <div className="content">
                <h1 style={{ fontWeight: 'bold' }}>
                    Startup Success Predictor
                </h1>
                <p style={{ fontSize: 'large' }}>
                    Will your startup be successful? Enter the company's details here and find out!
                </p>

                <Forms />
            </div>
            <Footer />
        </div>
    );
}

export default App;
