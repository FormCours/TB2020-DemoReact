import React from 'react';
import PropTypes from 'prop-types';

const Condition = (props) => {
    const {visible, message} = props; 

    
    return (  
        <div>
            {visible ? (
                <h1>{message ?? 'Aucun message'}</h1>
            ) : (
                <h1>Message caché</h1>
            )}
        </div>
    );
}

Condition.defaultProps = {
    visible: true,
    message: null
}

Condition.propTypes = {
    visible: PropTypes.bool,
    message: PropTypes.string
}

export default Condition;