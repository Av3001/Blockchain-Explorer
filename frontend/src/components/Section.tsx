import { useState, useEffect } from 'react';
import axios from 'axios';
import { JsonView, allExpanded,defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
interface Transaction {
  [key:string]:any;
    
}

interface TokenBalance {
    [key:string]:any;
}
const Section = () => {
  const baseUrl:string="https://block-expo.onrender.com/api/v1"
  const address:string = '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326'; 
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([]);
  const [NativeBalance, setNativeBalance] = useState("")

  useEffect(() => {
    const fetchAddressDetails = async () => {
      try {
        // Fetch transactions for the given address
        const transactionsResponse = await axios.get(`${baseUrl}/getTransactions/${address}`);
        setTransactions(transactionsResponse.data.address_details.any);
        
        // Fetch token balances for the given address
        const tokenBalancesResponse = await axios.get(`${baseUrl}/getERC20/${address}`);
        setTokenBalances(tokenBalancesResponse.data.balance_details.any);
        
        // Fetch token balances for the given address
        const NativeBalance = await axios.get(`${baseUrl}/getNative/${address}`);
        setNativeBalance(NativeBalance.data.balance_details.balance); 
      } catch (error:any) {
        console.error('Error fetching address details:', error.message);
      }
    };

    if (address) {
      fetchAddressDetails();
    }
  }, [address]);
    
  
  return (
      <div className="container mx-auto mt-8 flex ">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-4">Address Details</h2>
        <p className="text-lg mb-2"><b> Address: </b>{address}</p>
        <p className="text-lg mb-2"><b> Native Balance:</b> {NativeBalance}</p>

        <div>
          <h3 className="text-xl font-bold mb-2">Transaction History</h3>
          <JsonView data={transactions} shouldExpandNode={allExpanded} style={defaultStyles} />
        </div>
      </div>

      <div className="w-1/2 pl-4">
        <h2 className="text-2xl font-bold mb-4">ERC20 Tokens</h2>

        <div>
        <JsonView data={tokenBalances} shouldExpandNode={allExpanded} style={defaultStyles} />
        </div>
      </div>
    </div>
  );
};

export default Section;