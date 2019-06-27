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
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>全部</span>
            </li>
            <li>
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>待付款</span>
            </li>
            <NavLink to= "/users/receiving">
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>待收货</span>
            </NavLink>
            <li>
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>代发货</span>
            </li>
            <li>
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>已完成</span>
            </li>
            <li>
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>评价</span>
            </li>
            <li>
              <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
              <span>退款/售后</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Com;