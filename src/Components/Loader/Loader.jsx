import React from 'react';
import { useLoaderData } from 'react-router';
import User from './user';

const Loader = () => {

    const users = useLoaderData()
    return (
        <div className='text-center'>
            <h1 className='text-6xl text-black py-8 font-bold bg-fuchsia-500'>This is loader page</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Loader;