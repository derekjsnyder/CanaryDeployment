import React, {useEffect,useState} from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import Admin from "./Admin";
import {themeBuilder } from './feature/ThemeFeature';
import { FeatureContextProvider, useFeatureData } from "./feature/FeatureContext";

// eslint-disable-next-line react/display-name
const withHooksHOC = Component => props => {
  const [features, refresh] = useFeatureData();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    refresh();
  }, []);


  useEffect(() => {
    setTheme(themeBuilder(features));
  }, [features]);

  return <Component {...props} featureTheme={theme} />
};

const DetailsHooks = withHooksHOC(Details);

const App = () => {

  return (
      <FeatureContextProvider>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <DetailsHooks path="/details/:id" />
            <Admin path="/admin" />
          </Router>
        </div>
      </FeatureContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
