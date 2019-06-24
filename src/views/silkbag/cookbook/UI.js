import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import MemberBanner from '@/components/common/MemberBanner';
import '@/scss/silkbag/public.scss';
import '@/scss/silkbag/cookbook/cookbook.scss';


class SilkCom extends Component {
  render () {
    return (
      <div className = "box">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >食谱</NavBar>
        </div>
        <div className = "content">
          <div className = "cookbanner">
          <MemberBanner memberbannerlist = { this.props.memberBannerList.data ? this.props.memberBannerList.data : []  }/>
          </div>
          <div className = "cooklist">
            <ul>
              <li><img src="https://img.alicdn.com/imgextra/i2/31442024/O1CN01A9VbvC1Qp2Aw2d6fq_!!0-saturn_solar.jpg_220x220.jpg_.webp" alt="" />营养食谱</li>
              <li><img src="https://img.alicdn.com/imgextra/i2/31442024/O1CN01A9VbvC1Qp2Aw2d6fq_!!0-saturn_solar.jpg_220x220.jpg_.webp" alt="" />能不能吃</li>
              <li><img src="https://img.alicdn.com/imgextra/i2/31442024/O1CN01A9VbvC1Qp2Aw2d6fq_!!0-saturn_solar.jpg_220x220.jpg_.webp" alt="" />我的收藏</li>
            </ul>
          </div>
          <div className = "cookmain">
            <div className = "img">
              <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
            </div>
            <div className = "cookdetails">
              <h3>清蒸卤熊掌</h3>
              <p>上课讲的是空间的三考试</p>
              <div className = "cookyear">
                <span>适宜年龄</span>
                <span>18个月以上</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SilkCom;