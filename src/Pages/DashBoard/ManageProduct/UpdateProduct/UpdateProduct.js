import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Bg from '../../../../images/Login-page-car.jpg'
import '../../AddService/AddService.css'
const BannerBg = {
    background: `url(${Bg})`,
    height: "100%",
    backgroundPosition:"center"
    
}
const UpdateProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [update,setUpdate]=useState({});
    const {id}=useParams()

    useEffect(()=>{
        const url=`http://localhost:5000/services/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUpdate(data))
        },[])
        const {name, img, description, price, duretion}=update

        const handleNameChange = e => {
            const updatedName = e.target.value;
            console.log(updatedName);
            const updatedPackage = { name: updatedName, description:description, price:price, duretion:duretion, img:img  };
            setUpdate(updatedPackage);
        }

        const handledescriptionChange = e => {
            const updatedDiscription = e.target.value;
            const updatedPackage = { name: name, description:updatedDiscription, price:price, duretion:duretion, img:img  };
            setUpdate(updatedPackage);
        }
        const handlePriceChange = e => {
            const updatedprice = e.target.value;
            const updatedPackage = { name: name, description:description, price:updatedprice, duretion:duretion, img:img  };
            setUpdate(updatedPackage);
        }
        const handleDuretionChange = e => {
            const updatedDuretion = e.target.value;
            const updatedPackage = { name: name, description:description, price:price, duretion:updatedDuretion, img:img  };
            setUpdate(updatedPackage);
        }
        const handleUrlChange = e => {
            const updatedImg = e.target.value;
            const updatedPackage = { name: name, description:description, price:price, duretion:duretion, img:updatedImg  };
            setUpdate(updatedPackage);
        }

        const handleUpdateUser  = e => {
            const url = `/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        setUpdate({});
                        e.target.reset();
                    }
                })

            e.preventDefault();
        }


    return (
        <div className='container mt-3 '>
                <div>
                {/* <Card className='updt-crd' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-dark fw-normal'>
                        {description}
                    </Card.Text>
                </Card.Body>
                </Card> */}
                </div>
                <div>


       
        <div className="add-seervice p-5" style={BannerBg}>
            <h2 className='text-warning '>UpDate Product</h2>
            
            <form onSubmit={handleSubmit(handleUpdateUser)}>
                <input className='addSeervice' {...register("titile",  { required: true, maxLength: 50 } )}  placeholder='Titile'/>
                <textarea className='addSeervice' {...register("description",  )} placeholder='description' />
                <input className='addSeervice' {...register("img", )}  placeholder='img url'/>
                <input className='addSeervice' {...register("time", )}  placeholder='delivery time'/>
                <input className='addSeervice' type="number" {...register("price", )}  placeholder='price'/>
                <input  className='bg-warning text-dark fw-bold addSeervice' type="submit" value='Add Service' />
            </form>

            <Link to='/dashboard' >
                <button  className='bg-danger text-dark addSeervice' >Dashboard</button>
            </Link>
        </div>
        

                </div>
                
                
                
                
        </div>
    );
};

export default UpdateProduct;