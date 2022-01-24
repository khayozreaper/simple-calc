import React from "react";

import  qrcode from '../../img/qrcode.svg'

const UpiPayment = () => {
    return (
<div className="Upipayment">
<img src={qrcode} className="svg" alt="upipayment.svg"
width="100%" 
height="100%"
objectFit="contain"
/>

</div>
    );
}

export default UpiPayment;