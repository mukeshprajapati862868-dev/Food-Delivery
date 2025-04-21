import React from 'react';
import './Header.css'; 

const Header = () => {
    
    return (
        <div className='relative h-[34vw] w-[90vw] mx-auto mt-8 bg-cover bg-center rounded-xl' style={{ backgroundImage: "url('/header_img.png')" }}>
            <div className="absolute flex flex-col items-center gap-[1.5vw] max-w-[90%] sm:max-w-[70%] md:max-w-[50%] bottom-[10%] left-[30%] transform -translate-x-1/2 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    Order your favourite food here
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg leading-6 max-w-[90%] sm:max-w-[80%]">
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise to elevate your dining experience one delicious meal at a time.
                </p>
                <button className="mt-6 py-3 px-8 bg-[#eaefea] text-black text-lg rounded-[30px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FF4500] hover:scale-105">
                    View Menu
                </button>
            </div>
        </div>
    );
}

export default Header;
