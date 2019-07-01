import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import SilkBanner from '@/components/common/users/detailbanner';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "detail">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >商品详情</NavBar>
        </div>
        <div className="show">
          <div className="ban">
            <SilkBanner />
          </div>
          <div className="about">
            <div className="about-l">
              <h3>49元2件  69元3件 | 纯棉T恤</h3>
              <h4>全场50余款可选</h4>
              <p>直供价<span>￥29.9</span><strike>￥39.9</strike></p>
            </div>
            <div className="about-r">
              <span>1-6岁适用</span>
            </div>
          </div>
          <div className="Discount">
            <p>优惠<span>不限量</span>40元两件  69元3件<b>></b></p>
            <p>领券<span>福利</span>10元现金券；30元优惠券<b>></b></p>
            <p className="te">服务<span>·满58包邮·30天退货·48小时退款</span><b>></b></p>
          </div>
        </div>
        <div className="evaluate">
          <h3>宝妈们评价(38014)<span>更多</span></h3>
          <div className="box">
            <div className="">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;