import React from 'react';

const Cat = ({cat:{id, namecat},getCatid}) => {
    return (
        <div>
            <div className={'block'}>
                <div>
                    <div>namecat - {namecat}</div>
                </div>
                <button onClick={()=>getCatid(id)}>DelateCat</button>
            </div>
        </div>
    );
};

export default Cat;