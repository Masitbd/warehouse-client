import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import FirstCar from '../../images/1.png';
import { Carousel } from 'react-responsive-carousel';
const Carusal = () => {
    return (
        <div>
           <Carousel  autoPlay infiniteLoop showThumbs={false}>
                <div>
                    
                  <img className='h-96 w-full object-cover object-center'  src="https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&ga=GA1.2.914706891.1651424576" alt='' />
                   
                    
                </div>
                <div>
                    
                    <img className='h-96 w-full object-cover object-center'  src="https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?size=626&ext=jpg&ga=GA1.2.914706891.1651424576" alt='' />
                 
                      
                  </div>
                <div>
                    <img className='h-96 w-full object-cover object-center' src="https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?size=626&ext=jpg&ga=GA1.2.914706891.1651424576" alt=''/>
                   {/*  <p className="legend">Legend 3</p> */}
                </div>
            </Carousel> 
        </div>
    );
};

export default Carusal;