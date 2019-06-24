import React from 'react';
import '@/scss/silkbag/title.scss';
import { NavLink } from 'react-router-dom';

class SilkCom extends React.Component{
  render () {
    return (
      <div className = "silktitle">
        <ul>
          <li><NavLink to = "/silkbags/cookbook">食谱</NavLink></li>
          <li>百科</li>
          <li>问答</li>
        </ul>
      </div>
    )
  }
}
export default SilkCom;