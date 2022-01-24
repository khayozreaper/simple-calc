import {Link} from 'react-router-dom'

const Welcome = () => {
    return (  
        <div className="welcome">
           
          
               
               <div><Link to="/prorata" >Prorata</Link></div>
               <div><Link to="/tax" >Tax</Link></div> 
              
               <div><Link to="/discount" >Discount</Link></div> 
               <div><Link to="/cashcount" >Cash Counter</Link></div> 
               <div><Link to="/upipay" >UPI Pay</Link></div> 
             
            
          
        </div>
    );
}
 export default Welcome