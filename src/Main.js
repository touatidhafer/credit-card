import React,{Component} from 'react';
import './App.css';
import Card from './img/card.png';
import Sim from './img/sim.png';
import Logo from './img/logo.png';
class Main extends Component {
        render() { 
        return ( 
            <div>

          <div className="Main">
               <img className='bck'src={Card} alt='background'/>
               <h1 className='title'>CREDIT CARD</h1> 
               <img className='sim' src={Sim} alt='sim'/>     
          </div>
          <div className='card-number'>
            <h2 className='number'>7253 3256 7896 1245</h2>
          <div className='card-validation'>
                <div className='pin-container'>
                   <h2 className='card-pin'>5422</h2>
                   <h2 className='card-holder'>CARD HOLDER</h2>
                </div>
                <div className='logo-container'>
                   <h4 className='card-validity'>MONTH/YEAR<br/>11/50</h4>
                  <img className='logo'src={Logo} alt='logo'/>
                </div>
          </div>
     </div>
    </div>      
        );
    }
}
 
export default Main;
