import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Carusal = () => {
    return (
        <div>
           <Carousel  autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img className='h-[400px]'  src="https://img.freepik.com/free-photo/long-exposure-pier_1401-392.jpg?t=st=1651425825~exp=1651426425~hmac=d0f67e6a70221d317984ef00f239cc2d092e21dfe0d1df3835f3bc327efee182&w=1380" alt='' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className='h-[400px]' src="https://img.freepik.com/free-photo/zadorozhne-ukraine-july-28-2019-people-having-fun-summer-lake-jumping-from-tower-copy-space_259348-8993.jpg?w=1380" alt='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className='h-[400px]' src="https://img.freepik.com/free-photo/road-with-yellow-lines_1112-907.jpg?t=st=1651425825~exp=1651426425~hmac=86c7f95d88459a88098bf0fc990e3469f410bacfbafaa0c89307607c3cd71c4e&w=1380" alt=''/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 
        </div>
    );
};

export default Carusal;