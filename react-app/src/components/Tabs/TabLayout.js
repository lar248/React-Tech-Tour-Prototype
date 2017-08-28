import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Link,
} from 'react-router-dom';

import TabContainer from './TabContainer';
import MerchantItem from '../Merchants/MerchantItem';

// first our route components
const Merchants = ({ routes, match }) => (
  <div>
    <h1>{match.path}</h1>
    <TabContainer
      filter = 'SHOW_MERCHANTS'
      tabName = 'Merchants'
      match = { match }
    >
    </TabContainer>
  </div>
);

const Purchases = ({ match }) => (
  <div>
    <h1>{match.path}</h1>
    <TabContainer
      filter = 'SHOW_PURCHASES'
      tabName = 'Purchases'
      match = { match }
    >
    </TabContainer>
  </div>
);

// then our route config
const routes = [
  { path:"/",
    exact: true,
    component: () => <Redirect to="/merchants"/>
  },
  { path: '/merchants',
    component: Merchants
  },
  { path: '/purchases',
    component: Purchases
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const RouteLayout = () => (
    <div>
      <ul>
        <li><Link to="/merchants">Merchants</Link></li>
        <li><Link to="/purchases">Purchases</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
);

export default RouteLayout;