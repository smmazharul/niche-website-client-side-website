import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Bg from '../../../../images/Login-page-car.jpg'

import useAuth from '../../../../Hooks/useAuth';
const BannerBg = {
    background: `url(${Bg})`,
    height: "100%",
    backgroundPosition:"center"
    
}
const ReviewPages = () => {
    const {user}=useAuth()
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/reviewCollactions',data)
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
        <h2 className='text-warning '>GIVE US RATING</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <input readOnly className='addSeervice' defaultValue={user.displayName}  {...register("titile",  { required: true, maxLength: 50 } )} />
            <input readOnly className='addSeervice' defaultValue={user.email}  {...register("email",  )} placeholder='Email' />
            <textarea className='addSeervice' {...register("descrption", )}  placeholder='Please Give Us Your Valuabe FeedBack'/>
            <input className='addSeervice' type='number' {...register("rating", { required: true, maxLength: 5 } )}  placeholder='Please Give us Rating Out of 5'/>
            <input  className='bg-warning text-dark fw-bold addSeervice' type="submit" value='GIVE US RATING' />
        </form>

        
    </div>
    );
};

export default ReviewPages;