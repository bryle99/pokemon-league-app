import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/pages/Home';
import { Fragment } from 'react';

const App = () => {
  return (
    <div>
      <Router>
        <Fragment>
          <AppNavbar />
          <div className='container mt-5'>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
