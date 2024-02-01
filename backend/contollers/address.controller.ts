
import express from 'express';
import { AddressDetails,ERC20Details,NativeDetails } from "../models/address.model.js";
import {getTransactionData,getERC20Balance,getNativeBalance} from "../getmoralisdata/index.js";



export const addTransactionToDb=async (req: express.Request, res: express.Response)=>{
    try {
        const {address}=req.body
        let arr:{}[]=[]
        const response=await getTransactionData(address)
        
        response?.forEach((v)=>(
            arr.push(v)
        ))
        
        const existedAddress = await AddressDetails.findOne({address})
      
        if (existedAddress) {
            res.status(409).json("Address is already present")
        }

        if(!response){
            res.status(500).json("Something Went Wrong")
        }
        
        const details=AddressDetails.create({
            address:address,
            any:[...arr]
        })
        return res.status(201).json({
            details, "Address registered Successfully":String})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({error})
    }
    
}

export const addERC20ToDb=async (req: express.Request, res: express.Response)=>{
    try {
        const {address}=req.body
        let arr:{}[]=[]
        const response=await getERC20Balance(address)
        response?.forEach((v)=>(
            arr.push(v)
        ))
        
        const existedAddress = await ERC20Details.findOne({address})
      
        if (existedAddress) {
            res.status(409).json("Address is already present")
        }

        if(!response){
            res.status(500).json("Something Went Wrong")
        }
        
        const details=ERC20Details.create({
            address:address,
            any:[...arr]
        })
        return res.status(201).json({
            details, "Address registered Successfully":String})
    } catch (error) {
        console.log(error);   
        res.status(500).json({error})
    }   
}

export const addNativeToDb=async (req: express.Request, res: express.Response)=>{
    try {
        const {address}=req.body
        const response=await getNativeBalance(address)
        const existedAddress = await NativeDetails.findOne({address})
        
        
        if (existedAddress) {
            res.status(409).json("Address is already present")
        }

        if(!response){
            res.status(500).json("Something Went Wrong")
        }
        
        const details=NativeDetails.create({
            address:address,
            balance:response
        })
        return res.status(201).json({
            details, "Address registered Successfully":String})
    } catch (error) {
         
        res.status(500).json({error})
    }   
}


export const getTransactionsFromDb=async (req: express.Request, res: express.Response)=>{
    try {
        const {address} = req.params
        if (!address) {
            res.status(400).json({message:"Please Provide address"})
            return
        }
        const address_details=await AddressDetails.findOne({address:address}).select("-_id -address")

        if (!address_details){
            res.status(404).send("No Transactions details Present,Please check your Address")
            return
        }
        res.status(200).json({address_details,"Transactions successfully fetched":String})

    } catch (error) {
        console.log(error);   
        res.status(500).json({error})
    }
}
    
export const getERC20BalanceFromDb=async (req: express.Request, res: express.Response)=>{
    try {
        const {address} = req.params
        if (!address) {
            res.status(400).send("Please Provide address")
            return
        }
        const balance_details=await ERC20Details.findOne({address:address}).select("-_id -address")

        if (!balance_details){
            res.status(404).send("No balance details Present ,Please check your Address")
            return
        }
        res.status(200).json({balance_details,"Balance successfully fetched":String})

    } catch (error) {
        console.log(error);   
        res.status(500).json({error})
    }
}

export const getNativeBalanceFromDb=async (req: express.Request, res: express.Response)=>{
    try {
        const {address} = req.params
        if (!address) {
            res.status(400).send("Please Provide address")
            return 
        }
        const balance_details=await NativeDetails.findOne({address:address}).select("-_id -address")

        if (!balance_details){
            res.status(404).send("No balance details Present ,Please check your Address")
            return
        }
        res.status(200).json({balance_details,"Balance successfully fetched":String})

    } catch (error) {
        console.log(error);   
        res.status(500).json({error})
    }
}
