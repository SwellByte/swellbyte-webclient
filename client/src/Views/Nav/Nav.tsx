import * as React from 'react';
// import './Nav.css';

type Props = {

};
export const Nav = (props: Props) => {
  return (
    <div className=" inline-flex justify-evenly align-middle  w-full h-10 bg-blue-400">
     <div className="logo text-2xl text-center">SwellByte</div>

     <div className=" flex-auto">Regions</div>

     <div className="search flex-row justify-center">
       <div>SEARCH SPOTS</div>
     </div>


    </div>
  );
};