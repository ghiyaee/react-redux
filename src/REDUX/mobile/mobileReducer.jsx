import {BUY_MOBILE_APPEL,BUY_MOBILE_SAMSUNG,BUY_TABLET_SAMSUNG,BUY_TABLET_IPAD} from './mobileTypes'
const initailMobile = {
    appel: 5,
    samsung:10
}
const initailTablet= {
  ipad: 5,
  tabletSam: 10,
};

const mobilesReducer = (state=initailMobile,action) => {
    switch (action.type) {
        case BUY_MOBILE_APPEL :
            return {
                ...state,appel:state.appel > 0 ? state.appel - 1 : 0
            }
        case BUY_MOBILE_SAMSUNG:
            return {
                ...state,samsung: state.samsung > 0 ? state.samsung - 1 : 0
            }
        default :return state
    }
}
 const tabletReducer = (state = initailTablet, action) => {
  switch (action.type) {
    case BUY_TABLET_IPAD:
      return {
        ...state,
        ipad: state.ipad > 0 ? state.ipad - 1 : 0,
      }
    case BUY_TABLET_SAMSUNG:
      return {
        ...state,
        tabletSam: state.tabletSam > 0 ? state.tabletSam - 1 : 0,
      }
    default:
      return state;
  }
};
 export  { mobilesReducer,tabletReducer}