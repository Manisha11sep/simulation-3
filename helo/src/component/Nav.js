import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
           <p> Inside Nav</p>

<Link to="/dashboard"><h2> dashboard</h2></Link>

            </div>

    );
};

export default Nav;