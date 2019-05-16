import React from 'react';
export const ModalContext= React.createContext({
  showModal:false,
  itemName:null,
  setItemName:()=>{},
  toggleModal:()=>{}
}
);
