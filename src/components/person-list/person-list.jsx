import React from 'react';
import PropTypes from 'prop-types';

const PersonList = (props) => {
    const {people} = props; 

    const listItem = people.map(
        p => <li key={p.id}>{p.firstname} {p.lastname}</li>
    );

    return (
        <ul>
            {listItem}
        </ul>
    );
}

PersonList.defaultProps = {
    people: []
}

PersonList.propTypes = {
    people: PropTypes.array
}

export default PersonList;