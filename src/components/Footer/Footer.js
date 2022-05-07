import React from "react";

import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";


const Footer = () => {
  return (
   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto 	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)  px-4 sm:px-6 lg:px-8 container bg-black text-white my-5" >
    <div className="my-5">
      <h2 className="text-2xl text-red-400">Newsleter</h2>
      <p>
      By subscribing to our company newsletter you will always be up-to-date on our
      latest promotions, deals and vehicle inventory!
      </p>
      <input className="text-center" type="text" name="" placeholder="Enter your email address" id="" />
      <br/>
      <button className="mt-2 focus:outline-none text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Subscribe</button>
    </div>
    <div className="my-5">
      <h2 className="text-2xl text-red-400">Twitter Feed</h2>
      <p>
      Check out our latest theme release 'Landscaping' - themeforest.net/item/landscapi…
      </p>
      <p>
      @MrSamHughes Probably the easiest way is to send an email to sales@themesuite.com,
       or through our ThemeForest 
      </p>
    </div>
    <div className="my-5">
      <h2 className="text-2xl text-red-400">
      Contact Us
      </h2>
      <p className="flex">
        <span className="mr-2 mt-1"><HiLocationMarker /></span>
        <span>Address:1234 Street Name, City
      </span>
      </p>
      <p className="flex">
        <span className="mr-2 mt-1"><HiPhone /></span>
        <span>Phone:1-800-123-4567</span>
      </p>
      <p className="flex">
        <span className="mr-2 mt-1"><HiMail /></span>
        <span>Email:sales@company.com
      </span>
      </p>
      </div>
  </div>
  );
};

export default Footer;
