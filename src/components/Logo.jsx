import React from "react";
import { Cloudy } from "lucide-react";

const Logo = () => {
  return (
    <div className="w-fit mx-auto border-2 border-white rounded-md shadow-sky-400 shadow-2xl">
      <div className="rounded-md border-2 border-sky-600 p-1 bg-linear-to-tl from-sky-400 to-sky-600">
        <Cloudy className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Logo;
