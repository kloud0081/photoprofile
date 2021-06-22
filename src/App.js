import './App.css';
import "./Style.css"
import Photo from "./component/Profile/ProfilePhoto"
import Name from "./component/Profile/FullName"
import Adress from "./component/Profile/Address"


function App() {
  return (
    <div className="App">
    <Photo/>
    <Name name="khaled" lastname="bouazizi"></Name>
    <Adress adresse="Tunis cite Elkhadra"></Adress>

    </div>
  );
}

export default App;
