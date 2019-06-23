import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import  MemberBanner from '@/components/common/MemberBanner';

import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {
    this.props.getMemberBannerListData();
  }

  render () {
    
    return (
      <div className = "member">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >会员中心</NavBar>
        </div>
        <MemberBanner memberbannerlist = { this.props.memberBannerList.data ? this.props.memberBannerList.data : []  }/>
        <div className = "show">
          <div className = "top">
            <ul>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt="" />
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
          <div className = "list">
            <h3>时光会员 专享好货</h3>
            <ul>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <h4>宝宝爬行垫折叠</h4>
                <p>萌宝摔倒不疼</p>
                <b>￥ 199.00</b>
              </li>
              <li>
                <div className = "img">
                  <img src = "" alt = ""/>
                </div>
                <h4>宝宝爬行垫折叠</h4>
                <p>萌宝摔倒不疼</p>
                <b>￥ 199.00</b>
              </li>
              <li>
                <div className = "img">
                  <img src = "" alt = ""/>
                </div>
                <h4>宝宝爬行垫折叠</h4>
                <p>萌宝摔倒不疼</p>
                <b>￥ 199.00</b>
              </li>
              <li>
                <div className = "img">
                  <img src = "" alt = ""/>
                </div>
                <h4>宝宝爬行垫折叠</h4>
                <p>萌宝摔倒不疼</p>
                <b>￥ 199.00</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;