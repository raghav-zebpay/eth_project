const { ethers } = require("ethers");
const hre = require('hardhat');
//const {comet}= require("./comet/contracts/Comet.sol")
const net = hre.config.cometInstance;
const contractAddress="0x1055bE4bf7338C7606d9EFDCf80593F180BA043e";
const abiJson = [{"constant":true,"inputs":[],"name":"moneyMarket","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"targetAccount","type":"address"},{"name":"assetBorrow","type":"address"},{"name":"assetCollateral","type":"address"},{"name":"requestedAmountClose","type":"uint256"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"moneyMarket_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"targetAccount","type":"address"},{"indexed":false,"name":"assetBorrow","type":"address"},{"indexed":false,"name":"borrowBalanceBefore","type":"uint256"},{"indexed":false,"name":"borrowBalanceAccumulated","type":"uint256"},{"indexed":false,"name":"amountRepaid","type":"uint256"},{"indexed":false,"name":"borrowBalanceAfter","type":"uint256"},{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"assetCollateral","type":"address"},{"indexed":false,"name":"collateralBalanceBefore","type":"uint256"},{"indexed":false,"name":"collateralBalanceAccumulated","type":"uint256"},{"indexed":false,"name":"amountSeized","type":"uint256"},{"indexed":false,"name":"collateralBalanceAfter","type":"uint256"}],"name":"BorrowLiquidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"}]
const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/d77bfce408d14c8e9e191ae00c131a10');
const myContractAbi = [
  'function getTvl() public view returns (uint)',
];
const cometAddress = "0x3EE77595A8459e93C2888b13aDB354017B198188"
// const cometAddress = "0xAAD4992D949f9214458594dF92B44165Fb84dC19";
const cometAbi = [
'function isLiquidatable(address account) virtual public view returns (bool)',
  'function numAssets() returns (uint8)',
  'function getAssetInfo(uint8 i) public view returns (tuple(uint8 offset, address asset, address priceFeed, uint64 scale, uint64 borrowCollateralFactor, uint64 liquidateCollateralFactor, uint64 liquidationFactor, uint128 supplyCap) memory)',
  'function totalsCollateral(address) returns (uint128 totalSupplyAsset, uint128 _reserved)',
  'function totalSupply() returns (uint)',
  'function decimals() returns (uint8)',
  'function baseTokenPriceFeed() returns (address)',
  'function getPrice(address) public view returns (uint128)',
];
 const comet = new ethers.Contract(cometAddress, cometAbi, provider);
//const comet1 = new ethers.Contract(contractAddress, abiJson, provider);
// console.log(comet);

module.exports.checkisLiquidatable=async function(add){
    return new Promise(async(resolve, reject) => {
        try{    
            // console.log("I am here")
            // return;
            var res=await comet.isLiquidatable('0x032e76a97513d6Fba413B9AA908B663424727e05');
            // console.log(res)
            resolve(res)
        }catch(err){
            reject(err)
        }
    })
}

// const test =  comet.isLiquidatable("0x032e76a97513d6Fba413B9AA908B663424727e05").then(
//     (res)=> {
//     console.log(res);
//     }
// ).catch((err)=> {
//     console.log(err);
// });
// console.log(test);
// const baseBalance = comet.callStatic.baseBalanceOf('0x21C849C7B1D523fA81e88E118D56940B33641c58');
// const comet = Comet()
//("0x1c6d7f15935D275a1521D3457dF3b9B7ee89d6Ca");
// console.log(comet, "Check");
//console.log("Base bal", infoObject);
// const isLiquidatable =  comet.callStatic.isLiquidatable();
// comet.callStatic.totalSupply(contractAddress)



















