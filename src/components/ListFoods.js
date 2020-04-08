import React from 'react';
import Image from './Image';

const ListFoods = ({resultFoods}) => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                {resultFoods.map(food => (
                    <Image 
                        key = {food.id}
                        food = {food}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default ListFoods;