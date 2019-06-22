import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Banner from '@/components/common/memberBanner';
import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "member">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >会员中心</NavBar>
        </div>
        <Banner />
        <div className = "show">
          <div className = "top">
            <ul>
              <li>
                <div className = "img">
                  <img src="" alt="" />
                </div>
                <span>我的积分</span>
              </li>
              <li>
                <div className = "img">
                  <img src="" alt="" />
                </div>
                <span>每日签到</span>
              </li>
              <li>
                <div className = "img">
                  <img src="" alt="" />
                </div>
                <span>我的奖品</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;