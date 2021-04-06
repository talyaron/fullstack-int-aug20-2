import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav navbar navbar-expand-lg navbar-light bg-light'>
          <div className="container-fluid">
            <button className="navbar-brand btn">Welcome</button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='nav-link btn' to="/">World</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/spain">Spain</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/uk">UK</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/france">France</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/italy">Italy</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/greece">Greece</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/sweden">Sweden</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/brazil">Brazil</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link btn' to="/argentina">Argentina</Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/spain">
            <Spain />
          </Route>
          <Route path="/uk">
            <UK />
          </Route>
          <Route path="/france">
            <France />
          </Route>
          <Route path="/italy">
            <Italy />
          </Route>
          <Route path="/greece">
            <Greece />
          </Route>
          <Route path="/sweden">
            <Sweden />
          </Route>
          <Route path="/brazil">
            <Brazil />
          </Route>
          <Route path="/argentina">
            <Argentina />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

const Home = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Just pick a country.</h5>
      </div>
      <img src="https://www.netclipart.com/pp/m/71-719126_world-map-transparent-png-transparent-background-maps-of.png" className="card-img-top img" alt="..." />
    </div>
  )
}
const Spain = () => {

  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Spain</h5>
      </div>
      <img src="https://www.fodors.com/wp-content/uploads/2018/08/Hero-Ultimate-Thing-To-Do-Spain-shutterstock_362200070.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}
const UK = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">United Kingdom</h5>
      </div>
      <img src="https://s30876.pcdn.co/wp-content/uploads/london-1170x630.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}
const France = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">France</h5>
      </div>
      <img src="https://www.counterpointresearch.com/wp-content/uploads/2019/05/France-Smartphone-Market.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}
const Italy = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Italy</h5>
      </div>
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/170606121206-italy---travel-destination---shutterstock-517522957.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}
const Greece = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Greece</h5>
      </div>
      <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e3794a0b646d638627afb626bf9ee46f472feb1/big-0bb2a2bea537c680f141d40cb484d888.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}
const Sweden = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Sweden</h5>
      </div>
      <img src="https://www.planetware.com/wpimages/2020/02/sweden-in-pictures-beautiful-places-to-photograph.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}
const Brazil = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Brazil</h5>
      </div>
      <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2019/06/17/thumbs_b_c_e8c3f43bbfaacbbd2735b686d95466b5.jpg?v=100829" className="card-img-top img" alt="..." />
    </div>
  )
}
const Argentina = () => {
  return (
    <div className="card" style={{ width: '50%' }}>
      <div className="card-body">
        <h5 className="card-title">Argentina</h5>
      </div>
      <img src="https://www.planetware.com/wpimages/2020/02/argentina-in-pictures-beautiful-places-to-photograph-perito-moreno-glacier.jpg" className="card-img-top img" alt="..." />
    </div>
  )
}

export default App;
