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
        </div>
        <div className = "content">
          <div className = "top">
            <ul>
              <li>
                <input type="checkbox"/>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <dl>
                  <dt>6层纯棉纱布浴巾/盖毯/包巾</dt>
                  <dd>A类品质，无荧光，无甲醛</dd>
                  <dd>尺码：100*99cm 颜色：蓝色</dd>
                  <dd>￥199.8<span>x3</span></dd>
                </dl>
              </li>
              <li>
                <input type="checkbox"/>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <dl>
                  <dt>6层纯棉纱布浴巾/盖毯/包巾</dt>
                  <dd>A类品质，无荧光，无甲醛</dd>
                  <dd>尺码：100*99cm 颜色：蓝色</dd>
                  <dd>￥199.8<span>x3</span></dd>
                </dl>
              </li>
            </ul>
          </div>
          <div className = "center">
            <h3>宝宝可能还需要</h3>
            <ul>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
              <li>
                <div className = "img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1532692218,53578615&fm=26&gp=0.jpg" alt=""/>
                </div>
                <p>快吸秒干的拉拉裤</p>
                <span>会员价￥1999</span>
              </li>
            </ul>
          </div>
          <footer className = "footer">
            <div className="box">
              <label><input type="checkbox"/>全选 </label>
              {/* <div className = "add">
                <p>合计: 0</p>
                <span>结算(0)</span>
              </div> */}
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Com;