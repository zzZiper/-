import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';

const mapStateToProps = (state) => ({
  memberBannerList: state.member.memberBannerList
})

const mapDispatchToProps = (dispatch) => ({
  getMemberBannerListData () {
    api.reqGetData('/banner').then(data => {
      console.log('');
      dispatch({
        type: 'changeMemberBannerList',
        data
      })
    })
  }
})

const Com = connect(mapStateToProps, mapDispatchToProps)(UI)

export default Com;