const reducer = (state = {
  homeBannerList: [1, 2]
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeHomeBannerList':
    console.log(2)
      return Object.assign({}, state, { homeBannerList: data });
    default:
      return state;
  }
}

export default reducer;