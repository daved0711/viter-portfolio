import { imgPath } from '@/helpers/functions-general'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 h-[75px] py-5 text-white ">
      <div className="container text-body ">
        <div className="flex flex-row justify-between">
          <div>
            <img
              src={`${imgPath}/logo.png`}
              alt=""
              className="h-[40px] rounded-full"
            />
          </div>

          <div className="center-all text-white">
            <ul className="flex gap-5 text-[20px]  ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
