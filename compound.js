const { ethers } = require("ethers");
const {comet}= require("./comet/contracts/Comet.sol")

const contractAddress="0x1055bE4bf7338C7606d9EFDCf80593F180BA043e";
const abiJson = [{"constant":true,"inputs":[],"name":"moneyMarket","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"targetAccount","type":"address"},{"name":"assetBorrow","type":"address"},{"name":"assetCollateral","type":"address"},{"name":"requestedAmountClose","type":"uint256"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"moneyMarket_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"targetAccount","type":"address"},{"indexed":false,"name":"assetBorrow","type":"address"},{"indexed":false,"name":"borrowBalanceBefore","type":"uint256"},{"indexed":false,"name":"borrowBalanceAccumulated","type":"uint256"},{"indexed":false,"name":"amountRepaid","type":"uint256"},{"indexed":false,"name":"borrowBalanceAfter","type":"uint256"},{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"assetCollateral","type":"address"},{"indexed":false,"name":"collateralBalanceBefore","type":"uint256"},{"indexed":false,"name":"collateralBalanceAccumulated","type":"uint256"},{"indexed":false,"name":"amountSeized","type":"uint256"},{"indexed":false,"name":"collateralBalanceAfter","type":"uint256"}],"name":"BorrowLiquidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"}]
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d77bfce408d14c8e9e191ae00c131a10');

const comet1 = new ethers.Contract(contractAddress, abiJson, provider);
const infoObject =  comet.callStatic;
// const baseBalance = comet.callStatic.baseBalanceOf('0x21C849C7B1D523fA81e88E118D56940B33641c58');

// const comet = Comet()
//("0x1c6d7f15935D275a1521D3457dF3b9B7ee89d6Ca");
console.log(comet);


// console.log(comet, "Check");
//console.log("Base bal", infoObject);

// const isLiquidatable =  comet.callStatic.isLiquidatable();

// comet.callStatic.totalSupply(contractAddress)

// console.log(isLiquidatable)