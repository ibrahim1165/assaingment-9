import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import useRivewData from '../Hook/RivewData';
import RiviewTreeItem from '../RivewTreeItem/RiviewTreeItem';

const RiviewHome = () => {
    const [riview ,setriview] = useRivewData([])
    return (
       <div>
         <div className="text-3xl flex items-center justify-center mt-20">
         <h2> Riview Product(3)</h2>
         </div>
            <div className="flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 justify-item-center w-full">
            {
                riview.slice(0,3).map( rivew=> <RiviewTreeItem 
                key={rivew.id}
                    rivew={rivew}
                ></RiviewTreeItem>)
            }
            <div>
            <Link  className=" flex items-center justify-center mt-5 mb-4 text-white  bg-cyan-600" to="/riview"> See All More</Link>
            </div>
        </div>
       </div>
    );
};

export default RiviewHome;