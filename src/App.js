import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, useRouterHistory} from 'react-router';
import { createHistory } from 'history'

import Main from './components/common/main.component';
import Grid from './components/grid/grid.component';
import GridDetail from './components/grid/grid_detail.component';
import About from './components/about/about.component';

import ContentData from './data/content.data';
import CollectionList from './data/collection.data';

class BlogApp extends Component {
  constructor() {
		super();
		this.state = {
			posts: ContentData,
			filterBy: "content stream"
    };
	}

  generateCollectionRoutes(gridItems) {
    const collectionRoutes = CollectionList.map((item, i) => {
			let linkRef = "/collections/" + item.replace(/\s+/g, '-').toLowerCase();
			return (
        <Route key={i} path={linkRef} component={Grid}
          gridItems={gridItems}
          filterBy={item}
        />
			)
		});
		return collectionRoutes;
  }

  render() {
    const gridItems = this.state.posts;
    const filterBy = this.state.filterBy;
    const history = useRouterHistory(createHistory)({
      basename: '/blog-dev'
    })

    return (
      <Router history={history}>
        <Route component={Main} filterBy={filterBy}>
          <Route path="/" component={Grid}
            gridItems={gridItems}
            filterBy={filterBy}
          />
          {this.generateCollectionRoutes(gridItems)}
          <Route path="/:id" component={GridDetail}
            gridItems={gridItems}
          />
          <Route path="/about" component={About}/>
        </Route>
      </Router>
		)
	}
}

export default BlogApp;
