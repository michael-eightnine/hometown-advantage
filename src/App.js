import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

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
          previewMedia: "http://placehold.it/250x250",

				},
        {
					title: "Post Title 2",
					type: "svg",
          previewMedia: "http://placehold.it/250x250",
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
			filterBy: "all"
    };
	}

  render() {
    const gridItems = this.state.posts;
    const filterBy = this.state.filterBy;

    return (
      <Router history={browserHistory}>
        <Route component={Main}>
          <Route path="/" component={Grid}
            gridItems={gridItems}
            filterBy={filterBy}
          />
          <Route path="/svg" component={Grid}
            gridItems={gridItems}
            filterBy="svg"
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
