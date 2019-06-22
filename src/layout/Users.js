import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '@/views/user/Cart';
import Collection from '@/views/user/Collection';
import Coupon from '@/views/user/Coupon';
import Member from '@/views/user/Member';
import Order from '@/views/user/Order';
import Photo from '@/views/user/Photo';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/users/cart" component = { Cart } />
      <Route path = "/users/colection" component = { Collection } />
      <Route path = "/users/coupon" component = { Coupon } />
      <Route path = "/users/member" component = { Member } />
      <Route path = "/users/order" component = { Order } />
      <Route path = "/users/photo" component = { Photo } />
    </Switch>
  </div>
)

export default Com;