import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';

const mapStateToProps = (state) => ({
  memberBannerList: state.member.memberBannerList,
  memberProList: state.member.memberProList
})

const mapDispatchToProps = (dispatch) => ({
  getMemberBannerListData () {
    api.reqGetData('http://rap2api.taobao.org/app/mock/222582/banner').then(data => {
      console.log('');
      dispatch({
        type: 'changeMemberBannerList',
        data
      })
    })
  },
  getMemberProListData () {
    api.reqGetData('http://rap2api.taobao.org/app/mock/222582/banner').then(data => {
      console.log('');
      dispatch({
        type: 'changeMemberProList',
        data
      })
    })
  }
})

const Com = connect(mapStateToProps, mapDispatchToProps)(UI)

export default Com;