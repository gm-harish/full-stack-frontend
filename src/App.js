import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            {/* if we dont use switch then all the paths which satisfy , will be rendered, so to avoid that probelm 
            we use switch to rendered the componets whose path matches first. so we have kept the not found page at the last */}
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
