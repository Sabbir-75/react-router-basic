import React, { use } from 'react';

const LoaderFun = ({fetcher}) => {

    const user = use(fetcher)
    console.log(user);
    return (
        <div className='text-center'>
            <h1 className='text-6xl text-black py-8 font-bold bg-fuchsia-800'>This is loader Function page</h1>
        </div>
    );
};

export default LoaderFun;