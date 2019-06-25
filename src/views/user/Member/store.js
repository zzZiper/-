const reducer = (state = {
  memberBannerList: [1,2],
  memberProList: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeMemberBannerList':
      return Object.assign(state, { memberBannerList: data });
    case 'changeMemberProList':
        return Object.assign({}, state, { memberProList: data });
    default:
      return state;
  }
}

export default reducer;