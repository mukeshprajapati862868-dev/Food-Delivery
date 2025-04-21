import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className="footer bg-gray-800 text-white py-8" id="footer">
            <div className="footer-content container mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="footer-content-left flex flex-col items-center sm:items-start">
                        <img src={assets.logo_logo} alt="Logo" className="mb-4 w-36" />
                        <p className="text-center sm:text-left max-w-xs sm:max-w-md">
                            Lelit. Quo est dolores alias illo dignissimos culpa, obcaecati eius dolore vitae adipisci porro corporis blanditiis nulla exercitationem repudiandae sequi consequatur aliquid ducimus.
                        </p>
                        <div className="footer-social-icon flex space-x-4 mt-4">
                            <img
                                src={assets.facebook_icon}
                                alt="Facebook"
                                className="h-6 cursor-pointer"
                            />
                            <img
                                src={assets.twitter_icon}
                                alt="Twitter"
                                className="h-6 cursor-pointer"
                            />
                            <img
                                src={assets.linkedin_icon}
                                alt="LinkedIn"
                                className="h-6 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="footer-content-center flex flex-col items-center sm:items-start">
                        <h2 className="text-lg font-bold mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Delivery</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="footer-content-right flex flex-col items-center sm:items-start">
                        <h2 className="text-lg font-bold mb-4">GET IN TOUCH</h2>
                        <ul className="space-y-2">
                            <li className="cursor-pointer">+91-9651404659</li>
                            <li className="cursor-pointer">mukeshprajapati862868@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 my-8" />
            <p className="footer-copyright text-center text-sm">
                Copyright 2025 @ tomato.com All rights Reserved
            </p>
        </div>
    );
}

export default Footer;
