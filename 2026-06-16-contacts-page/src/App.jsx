import './App.css';
import Header from './components/Header';
import Photo from './components/Photo';
import Contacts from './components/Contacts';

function App() {
  return (
      <div className="app">
        <Header />
        <Photo />
        <Contacts />
      </div>
  );
}

export default App;