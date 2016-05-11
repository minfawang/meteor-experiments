import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import home from 'Home/client/routes';

const routes = {
  childRoutes: [
    home,
  ],
};

Meteor.startup(() => {
  ReactDOM.render((
    <Router routes={routes} history={browserHistory} />
  ), document.getElementById('render-target'));
});
