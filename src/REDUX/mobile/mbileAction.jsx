import {BUY_MOBILE_APPEL,BUY_MOBILE_SAMSUNG,BUY_TABLET_IPAD,BUY_TABLET_SAMSUNG} from './mobileTypes'
export const buyMobileAppel = () => {
    return {
      type: BUY_MOBILE_APPEL,
    };
}
export const buyMobileSamsung = () => {
  return {
    type: BUY_MOBILE_SAMSUNG,
  };
};
export const buyTabletIpad= () => {
  return {
    type: BUY_TABLET_IPAD,
  };
};
export const buyTabletSamsung = () => {
  return {
    type: BUY_TABLET_SAMSUNG,
  };
};