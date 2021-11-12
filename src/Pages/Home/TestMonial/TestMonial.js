import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import testBg from'../../../images/test-monial-bg.jpg'
import './TestMonial.css'

const BannerBg = {
    background: `url(${testBg})`,
    height: "100%",
    backgroundPosition:"center"
    
}
const TestMonial = () => {
    return (
        <div className=' mt-5 mb-5 p-3 '  style={BannerBg}>
            <h2 className="text-center text-warning fw-bold ">OUR TESTIMONIAL</h2>
             <div className='container d-flex justify-content-center  mt-5'>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col testMonial-card">
                    <div className="card text-center">
                    <img src={people1} className="card-img-top w-25 "  alt="..."/>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Somalia Silva<span className="text-warning">--Manager</span></h5>
                        <p className="card-text">But I must explain to you how all this mistake denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={people2} className="card-img-top w-25" alt="..."/>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Somalia Silva<span className="text-warning">--Consultent</span></h5>
                        <p className="card-text">But I must explain to you how all this mistake denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={people3} className="card-img-top w-25" alt="..."/>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Somalia Silva<span className="text-warning">--Designer</span></h5>
                        <p className="card-text">But I must explain to you how all this mistake denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>
                    </div>
                    </div>
                </div>
 
            </div>

        </div>
       </div>
    );
};

export default TestMonial;