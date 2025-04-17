import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {

    const userInfo = useLoaderData()
    const navigation = useNavigate()
    const param = useParams()

    return (
        <div className='text-center'>

            <h1 className='text-6xl mb-4 text-tomato text-black py-8 font-bold bg-fuchsia-200'>User Details</h1>
            <div className='border-2 inline-block border-red-600 p-4 text-black bg-emerald-600 '>
                <h1>Id : {param.loaderId}</h1>
                <h1>Id : {userInfo.id}</h1>
                <h1 className='font-semibold text-lg'>Name: {userInfo.name}</h1>
                <h1 className='font-semibold text-lg'>Website: {userInfo.website}</h1>
                <button onClick={() => navigation(-1)} className="btn btn-success mt-8">Go Back</button>
            </div>
        </div>
    );
};

export default UserDetails;