import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '@/css/user.scss';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "photo">
        <div className = "top">
          <NavBar
            icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >制作相册</NavBar>
        </div>
        <div className = "show">
          <div className = "list">
            <ul>
              <li>
                <div className = "box">
                  <h3>宝宝成长相册</h3>
                  <p>￥199.9<span className = "iconfont icon02"></span></p>
                </div>
              </li>
              <li>
                <div className = "box">
                  <h3>宝宝成长相册</h3>
                  <p>￥199.9<span className = "iconfont icon02"></span></p>
                </div>
              </li>
              <li>
                <div className = "box">
                  <h3>宝宝成长相册</h3>
                  <p>￥199.9<span className = "iconfont icon02"></span></p>
                </div>
              </li>
              <li>
                <div className = "box">
                  <h3>宝宝成长相册</h3>
                  <p>￥199.9<span className = "iconfont icon02"></span></p>
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