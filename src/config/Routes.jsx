import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Catalog from '../pages/Catalog';

const Routes = () => {
   return (
      <Switch>
         <Route path="/:category/search/:keyword" component={Catalog} />
         <Route path="/:category/:id" component={Detail} />
         <Route path="/:category" component={Catalog} />
         <Route path="/" component={Home} exact />
      </Switch>
   );
};

export default Routes;
