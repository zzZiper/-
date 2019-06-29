import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "coupon">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >优惠券</NavBar>
        </div>
        <div className = "list">
          <div className="box">
              <p>108元优惠券</p>
              <b>有效期至2019.07.14</b>
            <div className="rig">
              <p className="p1">￥<span>108</span></p>
              <span className="p2">安全座椅专享券</span>
            </div>
          </div>
          <div className="box">
              <p>108元优惠券</p>
              <b>有效期至2019.07.14</b>
            <div className="rig">
              <p className="p1">￥<span>108</span></p>
              <span className="p2">安全座椅专享券</span>
            </div>
          </div>
          <div className="box">
              <p>108元优惠券</p>
              <b>有效期至2019.07.14</b>
            <div className="rig">
              <p className="p1">￥<span>108</span></p>
              <span className="p2">安全座椅专享券</span>
            </div>
          </div>
          <div className="box">
              <p>108元优惠券</p>
              <b>有效期至2019.07.14</b>
            <div className="rig">
              <p className="p1">￥<span>108</span></p>
              <span className="p2">安全座椅专享券</span>
            </div>
          </div>
          <div className="box">
              <p>108元优惠券</p>
              <b>有效期至2019.07.14</b>
            <div className="rig">
              <p className="p1">￥<span>108</span></p>
              <span className="p2">安全座椅专享券</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;