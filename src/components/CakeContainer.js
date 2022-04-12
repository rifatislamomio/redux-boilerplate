import React from 'react';
import { buyCake } from '../redux'
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Without Hooks</h2>
            <h2>Number of Cakes -{'>'} {props.cake.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cake: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
