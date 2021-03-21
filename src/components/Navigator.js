import React from 'react';
import {Link} from 'react-router-dom';
import './Navigator.css';

class Navigator extends React.Component {
    render () {
        return (
            <div className="navigator"> 
                <p><Link to="/" >Home</Link></p>
                <p><Link to="/about" >about</Link></p>
            </div>
        );
    }
}

export default Navigator;
