import React from 'react';

import Cat from "../Cat/Cat";

const Cats = ({cats, getCatid}) => {
    return (
        <div>
            {cats.map(cat => <Cat key={cat.id} cat={cat} getCatid={getCatid}/>)}
        </div>
    );
};

export default Cats;