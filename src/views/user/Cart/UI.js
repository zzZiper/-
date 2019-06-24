import React, { Component } from 'react';
import { NavBar, Icon, Checkbox } from 'antd-mobile';
import '@/css/user.scss';

const AgreeItem = Checkbox.AgreeItem;

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "cart">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >购物车</NavBar>
        </div>
        <div className = "content">
          <div className = "cartcont">
            <ul>
              <li>
                <AgreeItem>
                  <div className = "img">
                    <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                  </div>
                  <dl>
                    <dt>6层纯棉纱布浴巾/盖毯/包巾</dt>
                    <dd>A类品质，无荧光，无甲醛</dd>
                    <dd>尺码：100*99cm 颜色：蓝色</dd>
                    <dd>￥199.8<span>x3</span></dd>
                  </dl>
                </AgreeItem>
              </li>
              <li>
                <AgreeItem>
                  <div className = "img">
                    <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                  </div>
                  <dl>
                    <dt>6层纯棉纱布浴巾/盖毯/包巾</dt>
                    <dd>A类品质，无荧光，无甲醛</dd>
                    <dd>尺码：100*99cm 颜色：蓝色</dd>
                    <dd>￥199.8<span>x2</span></dd>
                  </dl>
                </AgreeItem>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;