import home from 'Home/client/routes';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

const routes = {
  childRoutes: [
    home,
  ],
};

Meteor.startup(() => {
  ReactDOM.render((
    <Router routes={routes} history={browserHistory} />
  ), document.getElementById("render-target"));
});
