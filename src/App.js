import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, useRouterHistory} from 'react-router';
import { createHistory } from 'history'

import Main from './components/common/main.component';
import Grid from './components/grid/grid.component';
import GridDetail from './components/grid/grid_detail.component';
import About from './components/about/about.component';

class BlogApp extends Component {
  constructor() {
		super();
		this.state = {
			posts: [
				{
					title: "Post Title 1",
					type: "svg",
          date: "February 19th, 2017",
          previewMedia: "http://placehold.it/250x250",
          previewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
        {
					title: "Post Title 2",
					type: "svg",
          date: "February 22nd, 2017",
          previewMedia: "http://placehold.it/250x250",
          previewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
        {
					title: "Post Title 3",
					type: "drawing",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 4",
					type: "drawing",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 5",
					type: "video",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 6",
					type: "svg",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 7",
					type: "svg",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 8",
					type: "drawing",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 9",
					type: "drawing",
          previewMedia: "http://placehold.it/250x250",
				},
        {
					title: "Post Title 10",
					type: "video",
          previewMedia: "http://placehold.it/250x250",
				}
			],
			filterBy: "latest"
    };
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
          <Route path="/svg" component={Grid}
            gridItems={gridItems}
            filterBy="svg"
          />
          <Route path="/drawing" component={Grid}
            gridItems={gridItems}
            filterBy="drawing"
          />
          <Route path="/video" component={Grid}
            gridItems={gridItems}
            filterBy="video"
          />
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
