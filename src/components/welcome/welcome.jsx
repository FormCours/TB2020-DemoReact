import React from 'react';
import PropTypes from 'prop-types';
import style from './welcome.module.css';


export const Welcome = (props) => {
    const {firstname, lastname, nombre} = props;

    
    return (
        <div>
            <h1 className={style.title}>Hello {firstname} {lastname}</h1>
            <h2>Le nombre choisi est <span className={style.number}>{nombre}</span></h2>
        </div>
    );
} 

Welcome.defaultProps = {
    nombre: 42
}

Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    nombre: PropTypes.number
}


export default Welcome;