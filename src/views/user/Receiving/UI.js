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
            <div className="left">取消订单</div>
            <div className="cen">联系配送员</div>
            <div className="right">催单</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;