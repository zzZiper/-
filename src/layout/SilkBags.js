import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CookBook from '@/views/silkbag/cookbook';
const SilkCom = () => (
  <div className = "container">
    <Switch>
      <Route path = "/silkbags/cookbook" component = { CookBook } />
    </Switch>
  </div>
)
export default SilkCom;