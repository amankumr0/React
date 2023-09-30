import { useState } from 'react';
import UserContext from './UserContext';

// eslint-disable-next-line react/prop-types
const UserContextProvide = ({ children }) => {
    console.log((children))
    const [data, setData] = useState(null);
    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvide;
