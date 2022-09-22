import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todos from "./pages/Todos";
import About from "./pages/About";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Switch>
          <Route path="/" exact component={Todos} />  
          <Route path="/about" exact component={About} />
          <Route path="/about/about-app" exact component={AboutApp} />
          <Route path="/about/about-author" exact component={AboutAuthor} />
          <Route path="*" component={NotFound} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;