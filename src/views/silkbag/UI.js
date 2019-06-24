import React, { Component } from 'react';
import SilkBanner from '@/components/common/indexsilk/silkbanner';
import SilkTitle from '@/components/common/indexsilk/silktitle';
import SilkMain from '@/components/common/indexsilk/silkmain';
import SilkSearch from '@/components/common/indexsilk/silksearch';

class SilkCom extends Component {
  render () {
    return (
      <div className = "box">
        <header className = "header">
          <SilkSearch/>
        </header>
        <div className = "content">
          <div className = "silkbanner">
            <SilkBanner />
          </div>
          <SilkTitle />
          <SilkMain />
        </div>
      </div>
    )
  }
}
export default SilkCom;