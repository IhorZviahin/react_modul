import React from 'react';

import Dog from "../Dog/Dog";

const Dogs = ({dogs, getDogid}) => {
    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} getDogid={getDogid}/>)}
        </div>
    );
};

export default Dogs;