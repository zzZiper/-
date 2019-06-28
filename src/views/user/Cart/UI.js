import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '@/css/user.scss';

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
          {/* <b>编辑</b> */}
        </div>
        <div className = "content">
          <div className="top">
            <h3><i className="iconfont icondui" href=""></i>时光优品<span>共2件</span></h3>
            <div className="cont">
              <i className="iconfont icondui"></i>
              <div className = "img">
                <img src={require('@/images/cart1.png')} alt=""/>
              </div>
              <div className="shop">
                <p className="p1">益智不倒翁玩具</p>
                <p className="p2">规格：套装</p>
                <div className="about">
                  <span>￥199</span>
                  <div className="num">
                    <span>-</span>
                    <span className="te">2</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cont">
              <i className="iconfont icondui"></i>
              <div className = "img">
                <img src={require('@/images/cart1.png')} alt=""/>
              </div>
              <div className="shop">
                <p className="p1">益智不倒翁玩具</p>
                <p className="p2">规格：套装</p>
                <div className="about">
                  <span>￥199</span>
                  <div className="num">
                    <span>-</span>
                    <span className="te">2</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "center">
            <h3>宝宝可能还需要</h3>
            <ul>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>宝宝学步车</p>
                <span>￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src={require('@/images/cart2.png')} alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
            </ul>
          </div>
          <footer className = "footer">
            <div className="box">
              <i className="iconfont icondui"><span>全选</span></i>
              <div className = "add">
                <div className="add-l">
                  <p>不含运费<span>￥0</span></p>
                </div>
                <div className="add-r">
                  <p>结算<span>(0)</span></p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Com;