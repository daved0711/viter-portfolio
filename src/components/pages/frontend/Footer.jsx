import React from "react";
import {
  Facebook,
  Instagram,
  MessagesSquare,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="  gap-10 center-all  py-10 text-black text-[20px] flex flex-col">
        <div className="flex flex-row gap-10 group ">
          <ul className="flex gap-5   hover:bg-opacity-20 cursor-pointer">
            <li>
              <Youtube />
            </li>
            <li>
              <Facebook />
            </li>
            <li>
              <MessagesSquare />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
          <p className="font-bold">Sitio Maligaya, Candelaria Quezon 4323</p>
        </div>
        <div className=" text-[15px] border-t border-line w-full text-center py-5">
          Powered By JDMA
        </div>
      </footer>
    </>
  );
};

export default Footer;
