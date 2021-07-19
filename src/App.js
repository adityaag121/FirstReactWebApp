import logo from "./logo.svg";
import "./App.css";
import Header from "./MYComponents/Header";
import {Home} from './MYComponents/Home'
import { PostFeed } from "./MYComponents/PostFeed";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header title="MYpage" />
      <Home/>
    </Router>
  );
}

export default App;
