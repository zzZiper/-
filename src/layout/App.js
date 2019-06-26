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
          <img src={require("@/images/锦囊-1.png")} alt=""/>
          <p>锦囊</p>
        </NavLink>
        <NavLink to = "/life">
          <img src={require("@/images/生活-1.png")} alt=""/>
          <p>生活</p>
        </NavLink>
        <NavLink to = "/time">
          <img src={require("@/images/时光机-1.png")} alt=""/>
          <p>时光记</p>
        </NavLink>
        <NavLink to = "/msg">
          <img src={require("@/images/消息-1.png")} alt=""/>
          <p>消息</p>
        </NavLink>
        <NavLink to = "/user">
          <img src={require("@/images/我的-1.png")} alt=""/>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default Com;