const reducer = (state = {
  memberBannerList: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeMemberBannerList':
      return Object.assign({}, state, { memberBannerList });
    default:
      return state;
  }
}

export default reducer;