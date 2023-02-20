import React from 'react';

const UserCircle = ({image, name, position, email, number}) => {

    return (
        <div>
            <div>
                <img src={image} alt="logo"/>
                <div>{name}</div>
                <div>{position}</div>
                <div>{email}</div>
                <div>{number}</div>
            </div>
        </div>
    );
};

export default UserCircle;