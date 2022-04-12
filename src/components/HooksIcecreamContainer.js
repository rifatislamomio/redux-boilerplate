import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from '../redux';


function HooksIcecreamContainer(props) {
    const totalIcecrems = useSelector(state => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div> <h2>[With Hooks]</h2>
            <h2>Number of Icecreams -{'>'} {totalIcecrems}</h2>
            <button onClick={() => dispatch(buyIcecream())}>
                Buy Icecream
            </button>
        </div>
    );
}

export default HooksIcecreamContainer;