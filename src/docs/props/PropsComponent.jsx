import React from 'react';


const PropsComponent = (props) => {

    const {name, age} = props

    return (
        <div>
            {name}
            {age}
        </div>
    );
};

export default PropsComponent;