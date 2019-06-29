import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "deceiving">
        <div className = "top" style={{
            backgroundImage: `url(${require('@/images/map.png')})`,
            backgroundSize: '100%'
          }}>
          <span onClick = { () => (this.props.history.go(-1)) } >&lt;</span>
        </div>
        <div className = "center">
          <div className="time">
            <p>已用时48小时</p>
          </div>
          <div className="time1">
            <h3>预计明日到达</h3>
            <span>配送员 张师傅 正在配送</span>
          </div>
          <div className="time3">
            <span>取消订单</span>
            <span>联系配送员</span>
            <span>催单</span>
          </div>
        </div>
        <div className="show">
          <h3>商品信息</h3>
          <div className="about">
            <div className="img">
              <img src={require('@/images/show.png')} alt=""/>
              <img src={require('@/images/show.png')} alt=""/>
            </div>
            <p>订单总价<span>￥199.00</span></p>
            <p>配送费<span>免运费</span></p>
            <p>运费险<span>卖家赠送</span></p>
            <b>总计: ￥199.00</b>
          </div>
        </div>
        <div className="msg">
          <h4>商品信息</h4>
          <p>订单号<span>17837052369447113441</span></p>
        </div>
      </div>
    )
  }
}

export default Com;