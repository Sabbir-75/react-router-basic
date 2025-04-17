import React, { Suspense, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import InnerDetails from './InnerDetails';

const User = ({ user }) => {

    

    const [handledetail, setHandledetail] = useState(false)

    const [goHome, setGoHome] = useState(false)

   
 

    const navigate = useNavigate()

    const userDetailsHandler = () => {
        navigate(`/loader/${id}`)
    }

    if(goHome){
        return <Navigate to="/"></Navigate>
      }

    

    const { id, name, username, email } = user
    const newfetch = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    // const location = useLocation()
    // console.log(location);
    return (
        <div className='p-4 border-2 rounded-[10px] border-b-emerald-700 space-y-2 bg-fuchsia-600 text-white text-2xl font-semibold'>
            <h1>Name: {name}</h1>
            <h1>Username: {username}</h1>
            <h1>Email: {email}</h1>
            <div className='flex gap-5 justify-center mt-8'>
                <Link className='py-2 px-4 text-lg text-black bg-white rounded-4xl'
                    to={`/loader/${id}`}>Users Details</Link>
                <button onClick={userDetailsHandler} className="btn text-lg rounded-3xl btn-secondary">Users Details</button>
            </div>
            
            <div className='flex gap-5 justify-center mt-8'>
            <button onClick={() => setHandledetail(!handledetail)} className="btn bg-black text-white text-xl rounded-3xl btn-secondary"> {handledetail ? 'Hide' : 'Show'} Details</button>
            <button onClick={() => setGoHome(true)} className="btn bg-black text-white text-xl rounded-3xl btn-secondary"> Go Home</button>
            </div>
            
            {
                handledetail && <Suspense fallback={<h1>Loading ....Wait please</h1>}>
                    <InnerDetails newfetch={newfetch}></InnerDetails>
                </Suspense>

            }
        </div>
    );
};

export default User;