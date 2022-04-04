import React, { useState } from 'react';
import riviewData from '../../FackData/reviewData';
import Home from '../Home/Home';
import RiviewDatals from '../RiviewDatals/RiviewDatals';

const Riview = () => {
  const [riview, setriview] =useState(riviewData)
    return (
        <div className="flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 justify-item-center w-full">
         {
           riview.map( rivew=> <RiviewDatals key={rivew.id} rivew={rivew}></RiviewDatals>)
         }
         {
           riview.slice(0,3).map(revew=> <Home key={revew.id} rivew={revew}></Home>)
         }
        </div>
    );
};

export default Riview;