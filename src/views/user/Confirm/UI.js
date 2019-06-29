import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { List, Radio } from 'antd-mobile';
import { ActionSheet } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Com extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }

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

  showActionSheet = () => {
    const BUTTONS = [ 'Cancel'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: 'title',
      message: 'I am description, description, description',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
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
        <footer className = "foot">
            <div className="box">
              <div className = "add">
                <div className="add-l">
                  <p>实付款<span>￥199.00</span></p>
                </div>
                <div className="add-r" to="/users/confirm">
                  <p onClick={this.showActionSheet}>提交订单</p>
                </div>
              </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default Com;