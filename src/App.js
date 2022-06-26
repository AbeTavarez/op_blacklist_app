import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
