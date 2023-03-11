import React from 'react';
import "../css/errors.css";
import error_img from '../pics/surprised_shark.png';


export function NotFound() {
    return (
        <div class="error_block">
            <h2>Error: page not found</h2>
            <img src={error_img} alt="surprised shark"/>
        </div>
    );
}

export default NotFound;
