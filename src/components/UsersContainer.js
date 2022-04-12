import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux'


function UsersContainer(props) {

    useEffect(() => {
        props.fetchUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h2>USERS LIST</h2>
            {props.usersData.loading && <h2>Loading...</h2>}
            {props.usersData.error && <h2>{props.usersData.errorMsg}</h2>}
            {!props.usersData.loading && !props.usersData.error &&
                (<div>{props.usersData.data.map((data) =>
                    <li key={data.id}> {data.name} </li>)}
                </div>)}
        </div >
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersData: () => dispatch(fetchUsers())
    }
}

const mapStateToProps = state => {
    return {
        usersData: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);