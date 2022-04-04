import React, { useState } from 'react';
import useRivewData from '../Hook/RivewData';
import RiviewDatals from '../RiviewDatals/RiviewDatals';

const Riview = () => {
  const [riview, setriview] = useRivewData([])
    return (
        <div className="flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 justify-item-center w-full">
         {
           riview.map( rivew=> <RiviewDatals key={rivew.id} rivew={rivew}></RiviewDatals>)
         }
        </div>
    );
};

export default Riview;