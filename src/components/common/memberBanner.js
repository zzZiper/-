// import React from 'react';
// import { Carousel } from 'antd-mobile';

// const Com = ({ memberbannerlist }) => (
  // state = {
  //   data: [1, 2, 3],
  //   imgHeight: '2rem',
  // }
  // render() {
  //   return (
  //     <Carousel
  //       autoplay
  //       infinite
  //     >
  //       {this.state.data.map(val => (
  //         <a
  //           key={val}
  //           href="http://www.alipay.com"
  //           style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
  //         >
  //           <img
  //             src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
  //             alt=""
  //             style={{ width: '100%', verticalAlign: 'top' }}
  //           />
  //         </a>
  //       ))}
  //     </Carousel>
  //   );
  // }
// )
// class Com extends React.Component {
//   state = {
//     data: [1, 2, 3],
//     imgHeight: '2rem',
//   }
//   render() {
//     return (
//       <Carousel
//         autoplay
//         infinite
//       >
//         {this.state.data.map(val => (
//           <a
//             key={val}
//             href="http://www.alipay.com"
//             style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
//           >
//             <img
//               src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
//               alt=""
//               style={{ width: '100%', verticalAlign: 'top' }}
//             />
//           </a>
//         ))}
//       </Carousel>
//     );
//   }
// }

// export default Com;

import React from 'react';
import { Carousel } from 'antd-mobile';

const Com = ({ memberbannerlist }) => (
  <Carousel
    autoplay
    infinite
  >
    {memberbannerlist.map((val, index) => (
      <a
        key={index}
        href="http://www.alipay.com"
        style={{ display: 'inline-block', width: '100%'}}
      >
        <img
          src={'http://rap2api.taobao.org/app/mock/222582' + val}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))}
  </Carousel>
)

export default Com;