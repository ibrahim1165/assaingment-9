import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
         
         <div className="flex gap-4 text-xl text-center justify-center my-5">
               <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/riview">Riview</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/about">About</CustomLink>
     
        </div>
        </div>
    );
};

export default Header;