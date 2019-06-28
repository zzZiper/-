import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "order">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >我的订单</NavBar>
        </div>
        <div className="content">
          <ul>
            <li>
              <img src={require('@/images/全部.png')} alt=""/>
              <span>全部</span>
            </li>
            <li>
              <img src={require('@/images/待收款.png')} alt=""/>
              <span>待付款</span>
            </li>
            <NavLink to= "/users/receiving">
              <img src={require('@/images/待收货.png')} alt=""/>
              <span>待收货</span>
            </NavLink>
            <li>
              <img src={require('@/images/待发货.png')} alt=""/>
              <span>代发货</span>
            </li>
            <li>
              <img src={require('@/images/已完成.png')} alt=""/>
              <span>已完成</span>
            </li>
            <li>
              <img src={require('@/images/评价.png')} alt=""/>
              <span>评价</span>
            </li>
            <li>
              <img src={require('@/images/售后.png')} alt=""/>
              <span>退款/售后</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Com;