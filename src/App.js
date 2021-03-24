import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import 'bulma/css/bulma.css';

import './App.css';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading....</div>

  return (
    <div className="App">
      <Router >
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
