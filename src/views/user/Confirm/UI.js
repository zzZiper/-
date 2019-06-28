import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { List, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

class Com extends Component {
  state = {
    value: 0
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };

  componentDidMount () {

  }

  render () {
    const { value } = this.state;
    const data = [
      { value: 0, label: '支付宝支付' },
      { value: 1, label: '微信支付' },
    ];
    return (
      <div className = "confirm">
        <div className = "top">
          <NavBar
          icon={<Icon type="left" onClick = { () => (this.props.history.go(-1)) }/> }
          >确认订单</NavBar>
        </div>
        <div className="center">
          <div className="address">
            <div className="box">公司</div>
            <span className="te">梦想之家<b>&gt;</b></span>
            <span className="te1">阿萨的<b>1234567890</b></span>
          </div>
          <div className="goods">
            <h3>时光记旗舰店</h3>
            <div className="list">
              <div className = "img">
                <img src={require('@/images/cart1.png')} alt=""/>
              </div>
              <div className="shop">
                <p className="p1">益智不倒翁玩具<span>￥19.9</span></p>
                <p className="p2">规格：套装<span>x1</span></p>
              </div>
            </div>
            <div className="list">
              <div className = "img">
                <img src={require('@/images/cart1.png')} alt=""/>
              </div>
              <div className="shop">
                <p className="p1">益智不倒翁玩具<span>￥19.9</span></p>
                <p className="p2">规格：套装<span>x1</span></p>
              </div>
            </div>
            <div className="all">
              <div className="box">
                <span>运费:￥0.00</span>
                <p>共2件商品<span>合计:￥139.0</span></p>
              </div>
            </div>
          </div>
          <div className="pay">
            <h3>支付方式</h3>
            <List>
              {data.map(i => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                   {i.label}
                </RadioItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;