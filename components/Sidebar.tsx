import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
} from "react-icons/ai";

import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

function Sidebar() {
  return (
    <div>
      <img
        src="https://i.ibb.co/gzhkXnH/Ml-ZRk-II1-400x400.jpg"
        alt="profile pic"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-oswald">
        <span>Matthew </span>
        Evans
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href=""
        download="name"
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* //social icons */}
      <div className="flex justify-around my-5 text-green-500 w-9/12 mx-auto md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillCodepenCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div className="my-5 py-4 bg-gray-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Irwin, PA</span>
        </div>
        <p className="my-2">maevans724@gmail.com</p>
        <p className="my-2">724-771-1111</p>
      </div>
      {/* //email button */}
      <button className=" bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
        Email Me
      </button>
      <button className=" bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
        Light UI
      </button>
    </div>
  );
}

export default Sidebar;
