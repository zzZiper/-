import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import SilkBag from '@/views/silkbag';
import Life from '@/views/life';
import Time from '@/views/time';
import Msg from '@/views/msg';
import User from '@/views/user';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/silkbag" component = { SilkBag } />
      <Route path = "/life" component = { Life } />
      <Route path = "/time" component = { Time } />
      <Route path = "/msg" component = { Msg } />
      <Route path = "/user" component = { User } />
      <Redirect to = "/silkbag"/>
    </Switch>
    <footer className = "footer">
      <ul>
        <NavLink to = "/silkbag">
          <span></span>
          <p>锦囊</p>
        </NavLink>
        <NavLink to = "/life">
          <span></span>
          <p>生活</p>
        </NavLink>
        <NavLink to = "/time">
          <span></span>
          <p>时光记</p>
        </NavLink>
        <NavLink to = "/msg">
          <span></span>
          <p>消息</p>
        </NavLink>
        <NavLink to = "/user">
          <span></span>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default Com;