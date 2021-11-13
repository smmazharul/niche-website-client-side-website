import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './AddService.css'
import Bg from '../../../images/test-monial-bg.jpg'

import { Link } from 'react-router-dom';
const BannerBg = {
    background: `url(${Bg})`,
    height: "100%",
    backgroundPosition:"center"
    
}
const AddService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://boiling-refuge-39527.herokuapp.com/services',data)
        .then(res=>{
            console.log(res)
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();

            }
        })
    };
    
    return (
       <div className="add-seervice p-5" style={BannerBg}>
            <h2 className='text-warning '>ADD SERVICE</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='addSeervice' {...register("titile",  { required: true, maxLength: 50 } )}  placeholder='Titile'/>
                <textarea className='addSeervice' {...register("description", { required: true, maxLength: 120, }  )} placeholder='description maxlength is 120 ' />
                <input className='addSeervice' {...register("img", )}  placeholder='img url'/>
                <input className='addSeervice' {...register("time", )}  placeholder='delivery time'/>
                <input className='addSeervice' type="number" {...register("price", )}  placeholder='price'/>
                <input  className='bg-warning text-dark fw-bold addSeervice' type="submit" value='Add Service' />
            </form>

            <Link to='/dashboard' >
                <button  className='bg-danger text-dark addSeervice' >Dashboard</button>
            </Link>
        </div>
    );
};

export default AddService;