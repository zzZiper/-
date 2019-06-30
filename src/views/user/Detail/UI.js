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
        </div>
      </div>
    )
  }
}

export default Com;