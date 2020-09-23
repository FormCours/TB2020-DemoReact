import React from 'react';
import PropTypes from 'prop-types';

const Condition = (props) => {
    const {visible, message} = props; 

    if(visible) {
        return (
            <div>
                <h1>{message ?? 'Aucun message'}</h1>
            </div>
        );
    }
    
    return (  
        <div>
            <h1>Message caché</h1>
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