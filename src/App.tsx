import './App.css';
import Items from './Panels/Items/Items';
import Player from './Panels/Player/Player';
import Footer from './Panels/Footer/Footer';

function App() {
  return (
    <>
      <div className='bg-img'></div>
      <div id='inventory-main'>
        <div id='main-top'>
          <Items />
          <Player />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
