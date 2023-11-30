import React from 'react';

export const AddChannel = ({ setCreateType, setIsCreating, setIsEditing, setToggleContainer, type }) => (
    <svg 
    width='14'
    height='14'
    onClick={() => {
      setCreateType(type);
      setIsCreating((prevState) => !prevState);
      setIsEditing(false);
      if(setToggleContainer) setToggleContainer((prevState) => !prevState) 
    }}
    clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm6.75 6.752h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg>

);

  // <svg
  //   width='14'
  //   height='14'
  //   viewBox='0 0 14 14'
  //   fill='none'
  //   xmlns='http://www.w3.org/2000/svg'
  //   onClick={() => {
  //     setCreateType(type);
  //     setIsCreating((prevState) => !prevState);
  //     setIsEditing(false);
  //     if(setToggleContainer) setToggleContainer((prevState) => !prevState) 
  //   }}
  // >
  //   <path
  //     d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM11 7.5H7.5V11H6.5V7.5H3V6.5H6.5V3H7.5V6.5H11V7.5Z'
  //     fill='white'
  //     fillOpacity='0.66'
  //   />
  // </svg>