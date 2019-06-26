import React, { Component } from 'react';
import { NavBar, } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "box">
        <div className = "content">
          <header className = "top">
            <NavBar mode="light" rightContent={[
                <span style={{color:'#333'}} key="">设置</span>
              ]}
            >我的</NavBar>
          </header>
          <div className = "mine" >
            <div className = "box">
              <div className = "pic">
                <div className = "img">
                  <img src="https://img.alicdn.com/imgextra/i2/31442024/O1CN01A9VbvC1Qp2Aw2d6fq_!!0-saturn_solar.jpg_220x220.jpg_.webp" alt="" />
                </div>
              </div>
              <p>爱上了健康的哈</p>
              <span>生活大人</span>
            </div>
          </div>
          <div className = "list">
              <div className = "top">
                <ul>
                  <li>
                    <p>10</p>
                    <span>关注</span>
                  </li>
                  <li>
                    <p>9999</p>
                    <span>粉丝</span>
                  </li>
                </ul>
              </div>
              <div className = "kind">
                <div className = "box1">
                  <NavLink to = "/users/member">
                  <img src={require("@/images/会员.png")} alt=""/>
                  会员中心</NavLink>
                </div>
                <div className = "box2">
                  <NavLink to = "/users/photo">
                  <img src={require("@/images/制作相册.png")} alt=""/>制作相册</NavLink>
                  <NavLink to = "/users/collection">
                  <img src={require("@/images/收藏.png")} alt=""/>我的收藏</NavLink>
                </div>
                <div className = "box3">
                  <NavLink to = "/users/cart">
                  <img src={require("@/images/购物车.png")} alt=""/>购物车</NavLink>
                  <NavLink to = "/users/order">
                  <img src={require("@/images/订单.png")} alt=""/>我的订单</NavLink>
                  <NavLink to = "/users/coupon">
                  <img src={require("@/images/优惠券.png")} alt=""/>优惠卷</NavLink>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;