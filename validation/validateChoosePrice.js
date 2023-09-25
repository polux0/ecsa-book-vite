import { ethers } from 'ethers';

let periphery = import.meta.env.VITE_PERIPHERY_PRICE;
let peripheryBookPrice = import.meta.env.VITE_PERIPHERY_BOOK_PRICE;
let imperialCorePrice = import.meta.env.VITE_IMPERIAL_CORE_PRICE;
let imperialCoreBookPrice = import.meta.env.VITE_IMPERIAL_CORE_BOOK_PRICE;

const validateChoosePrice = (choosenPriceWei) => {
    if(choosenPriceWei != periphery || choosenPriceWei != periphery + peripheryBookPrice || choosenPriceWei != imperialCorePrice || choosenPriceWei != imperialCorePrice + imperialCoreBookPrice){
      choosenPriceWei = periphery;
    }
    if(choosenPriceWei == periphery){
      choosenPriceWei = ethers.parseEther(periphery.toString());
    }
    if(choosenPriceWei == periphery + peripheryBookPrice){
      choosenPriceWei = ethers.parseEther(peripheryBookPrice.toString());
    }
    if(choosenPriceWei == imperialCorePrice){
      choosenPriceWei = ethers.parseEther(imperialCorePrice.toString());
    }
    if(choosenPriceWei == imperialCorePrice + imperialCoreBookPrice){
      choosenPriceWei = ethers.parseEther(imperialCoreBookPrice.toString());
    }
    return choosenPriceWei;
};
export {validateChoosePrice};