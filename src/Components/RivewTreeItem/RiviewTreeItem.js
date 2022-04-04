import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'

const RiviewTreeItem = ({rivew}) => {
    const {name,image,comment,Rating}= rivew;
    return (
    <div>
          <div className="shadow-lg rounded w-full items-center py-2">
        <div className=" w-full h-full px-4">
            <img className="w-25 h-25" src={image} alt="" />
        </div>
        <div className="mx-3 my-3 px-6 font-medium">
            <p>Name:{name}</p>
            <p> Comment:<small className="text-sm text-gray-600">{comment}</small> </p>
            <p className="text-cyan-400 text-sm ">Rating: <span>{Rating}</span></p>
        </div>
</div>
    </div>
        
    );
};

export default RiviewTreeItem;