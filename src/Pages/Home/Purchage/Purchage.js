import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyPurchage from './MyPurchage';
import Navigation from '../../Shared/Navigation/Navigation';
// import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";

const Purchage = ({ service }) => {
    const { user } = useAuth();
    console.log(user);
    // const { displayName, email } = user
    const [purchages, setPurchages] = useState([])
    const [isDeleted,setIsDeleted]=useState(null)
    const [isconfirm]=useState(null)
    useEffect(()=>{
        fetch(`http://localhost:5000/purchage?email=${user.email}`)
        .then(res=>res.json())


        .then(data=>setPurchages(data))
    },[isDeleted,isconfirm,user.email])
    console.log(purchages.length);



    
    return (
        <div className=''>
            <Navigation></Navigation>
            
            {
                purchages?.map(pr => <MyPurchage
                    key={pr._id}
                    pr={pr}
                    isDeleted={isDeleted}
                    setIsDeleted={setIsDeleted}
                ></MyPurchage>)
            }
           
           </div>
    );
};

export default Purchage;