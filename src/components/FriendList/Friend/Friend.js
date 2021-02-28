import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Friend = (props) => {
    const {name, email, img, salary} = props.info;
    return (
        <div>
            <img src={img} alt=""/>
            <h1>Name: {name}</h1>
            <h3>Salary: {salary}</h3>
            <p>Email: {email}</p>
            <button><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
        </div>
    );
};

export default Friend;