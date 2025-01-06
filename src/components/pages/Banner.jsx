import { imgPath } from '@/helpers/functions-general';
import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="container pb-10">
        <div>
          <p className="font-bold text-[40px] flex text-center justify-center pt-10 ">
            About me
          </p>
          <div className="grid grid-cols-2 pt-10">
            <div className="flex items-center justify-center">
              <img
                src={`${imgPath}/pf-1.jpg`}
                alt=""
                className="h-[600px] rounded-full "
              />
            </div>
            <div className="flex gap-5 flex-col text-black">
              <p className="font-bold text-[50px]">Hi Im Daved</p>
              <p className=" font-semibold text-[40px]">Front-End Web meow</p>
              <p className=" font-semibold text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                incidunt ratione aspernatur voluptatum molestiae harum
                consequatur, nulla labore laborum quidem. Exercitationem modi
                doloremque, id itaque sit ea ad. Atque, pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner
