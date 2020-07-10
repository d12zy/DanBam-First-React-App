import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Beranda, Tentang, Booking } from './views';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let menuRef;

  const dispatch = useDispatch();
  const menus = useSelector(state => state.menus);

  const _handleNewMenu = (e) => {
    let newMenu = menuRef.value;
    dispatch({
      type: 'ADD MENU',
      menu: newMenu
    })

    e.preventDefault();
    menuRef.value = '';
  }

  return (
    <Router>
      <div className="App">
        <header className="Section-Beranda" id="Beranda">
          <div className="Foto">
            <nav className="Main-Nav">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/Tentang">Tentang</Link></li>
              <li><Link to="/Booking">Booking</Link></li>
            </nav>
            <h1 className="Centered">DanBam Restaurant</h1>
          </div>
        </header>

        <div className="App-Menu">
          <div>Anda juga boleh request untuk menu baru</div>
          <form onSubmit={_handleNewMenu}>
            <label>Menu Baru <input ref={input => menuRef = input} /></label>
          </form>
          <ul className="Menu-Baru">{menus.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>

        <Switch>
          <Route exact path="/" >
            <Beranda />
          </Route>
          <Route exact path="/Tentang">
            <Tentang />
          </Route>
          <Route exact path="/Booking" >
            <Booking />
          </Route>
        </Switch>

          <div id="Kontak" className="Section-Footer">
            <h2 className="Title-dua">Kontak Kami</h2>
            <p>
              Gresik Kota Baru, Kota Gresik
              <br/>
              Gresik, 11052
            </p>
            <p>
              Phone : +6285604187770
              <br/>
              Instagram : @Danbam.resto
              <br/>
              Facebook : DadanBam
              <br/>
              &copy;
              DanBam Restaurant Ofc.
            </p>
          </div>
      </div>
    </Router>  
  );
}

export default App;
