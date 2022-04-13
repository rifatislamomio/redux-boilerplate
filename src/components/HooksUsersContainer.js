import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux'

function HooksUsersContainer() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [usersData, setUsersData] = useState(users);

    useEffect(() => {
        dispatch(() => fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        setUsersData(users);
    }, [users]);

    return (
        <div>
            <h2>USERS LIST</h2>
            {usersData.loading && <h2>Loading...</h2>}
            {usersData.error && <h2>{usersData.errorMsg}</h2>}
            {!usersData.loading && !usersData.error &&
                (<div>{usersData.data.map((data) =>
                    <li key={data.id}> {data.name} </li>)}
                </div>)}
        </div >
    );
}


export default HooksUsersContainer;