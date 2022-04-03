import React from 'react';


const Home = () => {
    return (
        <div className="flex items-center justify-center cols md:cols-2 px-12">
           <div>
               <h2 className="text-3xl px-5 py-2 text-gray-800"> <p>Smart Android Led Tv</p> Monitor</h2>
               <p className="font-medium px-5 py-3 font-bold font-size-10 text-gray-500">The latest price of Starex 32” <br/>
               Smart Android Led Tv Monitor in Bangladesh is 15,000৳.<br/> 
               You can buy the Starex 32” <br/>
                Smart Android Led Tv Monitor at best price <br/>
                from our website or visit any of our showrooms.</p>
                <button className=" rounded-full px-4 py-1 px-5 text-white mx-16 bg-cyan-600 sm:w-auto"> Demu </button>
           </div>
          <div className="w-80 h-80 px-5 py-5 mx-auto">
              <img src="https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-File.png" alt="" />
          </div>  
        </div>
    );
};

export default Home;