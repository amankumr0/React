import React, { useContext } from 'react';
import UserContext from './context/UserContext';

const Card = () => {
    const { data } = useContext(UserContext);
    if (!data) return <h4>please login</h4>
    return (
        <div>
            <h3>{data.username}</h3>
            <h3>{data.password}</h3>
        </div>
    );
}

export default Card;
