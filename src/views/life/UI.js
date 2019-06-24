import React, { Component } from 'react';
import '@/css/life.scss'
var Mock = require('mockjs')
var data = Mock.mock({
 
    'list|12': [{
        'id|+1': 1,
        'name':'模拟数据'
    }]
})
class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className = "box">
        <header className = "header">
          生活头部
        </header>
        <div className = "content">
            <ul className = "list">
              <li>关注</li>
              <li>社区</li>
              <li>优品</li>
            </ul>
            <div className = "hobby">关注你感兴趣的人</div>
            <ul className = "focusbox">
              {
                data.list.map((item,index) =>{
                  return(
                    <li key = {item.id}>
                      <p>{item.name}</p>
                    </li>
                  )
                })
              }
              <div className = "focustotle">一键关注</div>
            </ul>
        </div>
      </div>
    )
  }
}

export default Com;