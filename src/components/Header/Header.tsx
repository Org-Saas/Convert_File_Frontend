import CloudIcon from "@mui/icons-material/Cloud";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-around p-4">
        <div className="flex gap-4 items-center hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200">
          <CloudIcon sx={{ width: 40, height: 40, color: "blue" }} />
          <h1 className="text-xl text-blue-800 font-semibold">CloudLoader</h1>
        </div>

        <div>
          <nav>
            <ul className="flex items-center gap-10">
              <li className="hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200">
                <a
                  href=""
                  className="font-semibold  hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200"
                >
                  Home
                </a>
              </li>
              <li className="hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200">
                <a href="" className="font-semibold ">
                  Services
                </a>
              </li>
              <li className="hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200">
                <a href="" className="font-semibold">
                  Contact
                </a>
              </li>
              <li className="hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200">
                <a href="" className="font-semibold">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <Button className="bg-blue-600 text-white hover:cursor-pointer hover: transform hover:scale-105  hover:ease-in-out duration-200">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};
