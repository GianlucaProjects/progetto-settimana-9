import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/SideBar';
import MainComponent from './components/MainComponent';
import PlayerComponent from './components/PlayerComponent';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <MainComponent />
      </div>
      <PlayerComponent />
    </div>
  );
}

export default App;
