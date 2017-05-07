import React, { Component } from 'react';
import {Router, Route, useRouterHistory} from 'react-router';
import { createHistory } from 'history'
import './scss/main.min.css';

import Splash from './components/splash/splash.component';
import Main from './components/common/main.component';
import Grid from './components/grid/grid.component';
import About from './components/about/about.component';

import ContentData from './data/content.data';
import CollectionList from './data/collection.data';
import gridOptions from './data/options.data';

class BlogApp extends Component {
  constructor() {
		super();
		this.state = {
			posts: ContentData,
			filterBy: "content stream"
    };
	}

  componentWillMount() {
    if(gridOptions.nightMode) {
      const currentTime = new Date().getHours();
      // if(currentTime > 20 || currentTime < 7)
        document.body.classList.add("night-mode");
    }
  }

  generateCollectionRoutes(gridItems) {
    const collectionRoutes = CollectionList.map((item, i) => {
			let linkRef = "/collections/" + item.name.replace(/\s+/g, '-').toLowerCase();
			return (
        <Route key={i} path={linkRef} component={Grid}
          gridItems={gridItems}
          filterBy={item.name}
          isCollection={true}
          isGridCollection={item.isGrid}
          collectionComponentName={item.componentName}
        />
			)
		});
		return collectionRoutes;
  }

  render() {
    const gridItems = this.state.posts;
    const filterBy = this.state.filterBy;
    const history = useRouterHistory(createHistory)({
      basename: '/'
    })

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={Splash} />
        <Route component={Main} filterBy={filterBy}>
          <Route path="/stream" component={Grid}
            gridItems={gridItems}
            filterBy={filterBy}
            isGridCollection={true}
          />
          {this.generateCollectionRoutes(gridItems)}
          <Route path="/the-advantage" component={About}/>
        </Route>
        {/* CATCH ALL FOR 404's/NON PAGES */}
        <Route path="*" component={Splash} />
      </Router>
		)
	}
}

export default BlogApp;
