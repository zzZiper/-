import { Carousel, WingBlank } from 'antd-mobile';
import '@/scss/silkbag/banner.scss';
import React from 'react';
class SilkCom extends React.Component {
  state = {
    data: ['1', '2', '3'],
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'TekJlZRVCjLFexlOCuWn', 'TekJlZRVCjLFexlOCuWn'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={22}
          slideWidth={0.8}
          dots = "false"  
          autoplay
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
          >
          {this.state.data.map((val, index) => (
            <b
            key={val}
            style={{
              display: 'block',
              position: 'relative',
              top: this.state.slideIndex === index ? -10 : 0,
              height: this.state.imgHeight,
            }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                dots = "false"
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </b>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
export default SilkCom;