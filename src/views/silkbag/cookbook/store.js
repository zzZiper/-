const reducer = (state = {
  memberBannerList: [1,2]
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeMemberBannerList':
      return Object.assign(state, { memberBannerList: data });
    default:
      return state;
  }
}

export default reducer;