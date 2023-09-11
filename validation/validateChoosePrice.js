import { ethers } from 'ethers';
const validateChoosePrice = (choosenPriceWei, price1, price2) => {
    if(choosenPriceWei != price1 || choosenPriceWei != price2){
      choosenPriceWei = price2;
    }
    if(choosenPriceWei == price1){
      choosenPriceWei = ethers.parseEther(price1.toString());
    }
    if(choosenPriceWei == price2){
      choosenPriceWei = ethers.parseEther(price2.toString());
    }
    return choosenPriceWei;
};
export {validateChoosePrice};

