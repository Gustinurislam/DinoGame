import React from 'react';

const Decors = () => {
  return (
    <div>
      <div className=" absolute w-5 h-5 bg-gray-400 top-0 left-0">
        <div className="w-3 h-3 bg-slate-100" />
      </div>
      <div className=" absolute w-5 h-5 bg-gray-400 top-0 right-0">
        <div className="w-3 h-3 bg-slate-100 absolute right-0" />
      </div>
      <div className=" absolute w-5 h-5 bg-gray-400 bottom-0 right-0">
        <div className="w-3 h-3 bg-slate-100 absolute bottom-0 right-0" />
      </div>
      <div className=" absolute w-5 h-5 bg-gray-400 bottom-0 left-0">
        <div className="w-3 h-3 bg-slate-100 absolute bottom-0 left-0" />
      </div>
    </div>
  );
};

export default Decors;
