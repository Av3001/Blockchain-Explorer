import Moralis from 'moralis';

export const getTransactionData= async(address:string)=>{
  try {
    
    const response = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
      "chain": "0x1",
      "address": "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
      "include":"internal_transactions"
    });
  
    return response.toJSON().result;
  } catch (e) {
    
    throw new Error(`${e}`)
  }
}


export const getERC20Balance=async(address:string)=>{

  try {
    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      "chain": "0x1",
      "address": address
    });
    console.log(response);
    
    return response.toJSON()
  } catch (e) {
    throw new Error(`${e}`)
  }
}

export const getNativeBalance=async(address:string)=>{

  try {
    const response = await Moralis.EvmApi.balance.getNativeBalance({
      "chain": "0x1",
      "address": address
    });
  
    return response.toJSON().balance
  } catch (e) {
    throw new Error(`${e}`)
  }
}

