import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className="explore-menu flex flex-col gap-5 py-16 px-6" id="explore-menu">
            <h1 className="text-3xl font-bold text-[#262622] ml-9">Explore our menu</h1>
            <p className="explore-menu-text max-w-[60%] text-[#808080] ml-9">
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise to elevate your dining experience one delicious meal at a time.
            </p>
            <div className="explore-menu-list flex justify-center items-center gap-[50px] mt-5 overflow-x-auto scrollbar-hide">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            key={index}
                            className="explore-menu-list-item flex-shrink-0 text-center"
                        >
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className={`w-[7.5vw] min-w-[80px] rounded-full cursor-pointer transition duration-200 
                                ${category === item.menu_name ? "border-4 border-[#FF6347]" : "border-4 border-transparent"}`}
                            />
                            <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr className="my-4 h-[2px] bg-[#e2e2e2] border-none" />
        </div>
    );
};

export default ExploreMenu;
