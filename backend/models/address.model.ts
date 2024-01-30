import mongoose ,{Schema}from "mongoose";

// const logSchema = new mongoose.Schema({
//   address: String,
//   block_number: String,
//   block_hash: String,
//   block_timestamp: String,
//   data: String,
//   log_index: String,
//   transaction_hash: String,
//   transaction_index: String,
//   transaction_value:String,
//   topic0: String,
//   topic1: String,
//   topic2: String,
//   topic3: String,
//   decoded_event: {
//     label: String,
//     signature: String,
//     type: String,
//     params: [
//       {
//         name: String,
//         type: String,
//         value: String,
//       }
//     ]
//   }
// });

// const internalTransactionSchema = new mongoose.Schema({
//   transaction_hash: String,
//   block_number: Number,
//   block_hash: String,
//   type: String,
//   from: String,
//   to: String,
//   value: String,
//   gas: String,
//   gas_used: String,
//   input: String,
//   output: String,
// });

// const transactionSchema = new mongoose.Schema({
//   hash: String,
//   nonce: String,
//   transaction_index: String,
//   from_address: String,
//   from_address_label: String,
//   to_address: String,
//   to_address_label: String,
//   value: String,
//   gas: String,
//   gas_price: String,
//   input: String,
//   receipt_cumulative_gas_used: String,
//   receipt_gas_used: String,
//   receipt_contract_address: String,
//   receipt_root: String,
//   receipt_status: String,
//   block_timestamp: String,
//   block_number: String,
//   block_hash: String,
//   logs: [logSchema],
//   decoded_call: {
//     label: String,
//     signature: String,
//     type: String,
//     params: [
//       {
//         name: String,
//         value: String,
//         type: String,
//       }
//     ]
//   },
//   internal_transactions: [internalTransactionSchema],
// });
// var Any = new Schema({ any: Schema.Types.Mixed });
const addressDetailsSchema = new mongoose.Schema(
  { address:String,
    any: Schema.Types.Mixed 
  }
,{
  timestamps:true
});

const tokenERC20Balance = new mongoose.Schema(
  { address:String,
    any: Schema.Types.Mixed 
  }
,{
  timestamps:true
});

const tokenNativeBalance = new mongoose.Schema(
  { address:String,
    balance:String
  }
,{
  timestamps:true
});

export const AddressDetails = mongoose.model('AddressDetails', addressDetailsSchema)
export const ERC20Details = mongoose.model('ERC20Balance', tokenERC20Balance)
export const NativeDetails = mongoose.model('NativeBalance', tokenNativeBalance)