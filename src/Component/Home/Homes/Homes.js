import React from 'react';
import Navigation from '../Navigation/Navigation';
import Show from '../Show/Show';
import './Homes.css'

const Homes = () => {
    return (
        <div className='show'>
            <Navigation></Navigation>
           <Show></Show>
        </div>
    );
};

export default Homes;