import "./css/index.css";
import Homepage from "./components/Homepage/Homepage";
import Example from "./components/Example/Example";
import { HashRouter, Route } from "react-router-dom";
import Practice from "./components/Practice/Practice";

function App(): JSX.Element {
  // return <Homepage />;
  // return <Example/>

  return (
    <HashRouter basename="/">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/example" component={Example} />
      <Route path="/practice/:encodedUrl" component={Practice} />
    </HashRouter>
  );
}

export default App;
