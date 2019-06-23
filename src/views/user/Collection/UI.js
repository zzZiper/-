import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "collection">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >我的收藏</NavBar>
        </div>
        <div className = "show">
          <div className = "list">
            <ul>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <div className = "box">
                  <h3>小坚果大能量</h3>
                  <p>2019.10.2</p>
                  <span className = "iconfont icon02"></span>
                </div>
              </li>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <div className = "box">
                  <h3>小坚果大能量</h3>
                  <p>2019.10.2</p>
                  <span className = "iconfont icon02"></span>
                </div>
              </li>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <div className = "box">
                  <h3>小坚果大能量</h3>
                  <p>2019.10.2</p>
                  <span className = "iconfont icon02"></span>
                </div>
              </li>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <div className = "box">
                  <h3>小坚果大能量</h3>
                  <p>2019.10.2</p>
                  <span className = "iconfont icon02"></span>
                </div>
              </li>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <div className = "box">
                  <h3>小坚果大能量</h3>
                  <p>2019.10.2</p>
                  <span className = "iconfont icon02"></span>
                </div>
              </li>
              <li>
                <div className = "img">
                  <img src = "http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt = ""/>
                </div>
                <div className = "box">
                  <h3>小坚果大能量</h3>
                  <p>2019.10.2</p>
                  <span className = "iconfont icon02"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;