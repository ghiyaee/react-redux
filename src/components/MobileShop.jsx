import React from 'react'
import { connect } from 'react-redux'
import { buyMobileAppel, buyMobileSamsung,buyTabletIpad,buyTabletSamsung } from "../REDUX";
function MobileShop(props) {
  console.log(props);
    return (
      <>
        <p>MobileShop APPEL:{props.appel}</p>
        <p>MobileShop samsung:{props.samsung}</p>
        <p>MobileShop IPAD:{props.ipad}</p>
        <p>MobileShop TabletSamsung:{props.tabletSam}</p>
        <button onClick={props.buyMobileAppel}>DECRIMENT appel</button>
        <button onClick={props.buyMobileSamsung}>DECRIMENT samsung</button>
        <button onClick={props.buyTabletIpad}>DECRIMENT Tablet IPAD</button>
        <button onClick={props.buyTabletSamsung}>DECRIMENT Tablet SAMSUNG</button>
      </>
    );
}

const mapStateToProps = (state => {
  return {
    appel: state.appel,
    samsung: state.samsung,
    ipad: state.ipad,
    tabletSam: state.tabletSam,
  };
})

const mapDispatchToProps = (dispatch => {
  return {
    buyMobileAppel: () => dispatch(buyMobileAppel()),
    buyMobileSamsung: () => dispatch(buyMobileSamsung()),
    buyTabletIpad: () => dispatch(buyTabletIpad()),
    buyTabletSamsung:()=> dispatch(buyTabletSamsung())
  };
})

export default  connect(mapStateToProps,mapDispatchToProps)( MobileShop)