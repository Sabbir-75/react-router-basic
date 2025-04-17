import React, { use } from 'react';

const InnerDetails = ({newfetch}) => {
    const user = use(newfetch)
    return (
        <div>
            <h1>Name : {user.name}</h1>
        </div>
    );
};

export default InnerDetails;