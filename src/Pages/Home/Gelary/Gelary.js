
import React from 'react';

import gelary1 from '../../../images/gelary1.jpg'
import gelary2 from '../../../images/gelary2.jpg'
import gelary3 from '../../../images/gelary3.jpg'
import gelary4 from '../../../images/car3.jpg'
import gelary5 from '../../../images/car2.jpg'
import gelary6 from '../../../images/Login-page-car.jpg'
const Gelary = () => {
    return (
        <div className=' container mb-5 bg-dark p-2  rounded'>
            <h2 className='text-warning'> OUR GALLERY</h2>
            <div className="container ">

                <div className="row p-0 m-0">
                <div className="col-md-4 pb-3 pl-2 ">
                    <img className="w-100 h-100 rounded" src={gelary1} alt="" />
                </div>
                <div className="col-md-5 pb-3 pl-2 ">
                    <img className="w-100 h-100 rounded" src={gelary2} alt="" />
                </div>
                <div className="col-md-3 pb-3 pl-2 ">
                    <img className="w-100 h-100 rounded" src={gelary3} alt="" />
                </div>

                    </div>
                    
                    {/* second row */}
                <div className="row p-0 m-0">
                <div className="col-md-4 pb-3 pl-2 ">
                    <img className="w-100 h-100 rounded" src={gelary4} alt="" />
                </div>
                <div className="col-md-3 pb-3 pl-2 ">
                    <img className="w-100 h-100 rounded" src={gelary2} alt="" />
                </div>
                <div className="col-md-5 pb-3 pl-2 ">
                    <img className="w-100 h-100 rounded" src={gelary6} alt="" />
                </div>

                </div>

                    

                </div>
        </div>
    );
};

export default Gelary;