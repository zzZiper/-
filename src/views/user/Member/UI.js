import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import  MemberBanner from '@/components/common/MemberBanner';

import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {
    this.props.getMemberBannerListData();
    this.props.getMemberProListData();
  }

  render () {
    let showlist =this.props.memberProList.data ? this.props.memberProList.data : []
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
              {
                showlist.map((item,index) => (
                <li key={index}>
                  <div className = "img">
                    <img src = { item.list.src } alt = ""/>
                  </div>
                  <h4>{ item.list.title }</h4>
                  <p>{ item.list.smallTitle }</p>
                  <b>￥ { item.list.money }</b>
                </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;