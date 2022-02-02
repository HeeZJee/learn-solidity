// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import {
  Sum,
  Sum__factory as SumFactory,
} from "../typechain";

async function main() {

  const Sum: SumFactory = await ethers.getContractFactory("Sum");
  const sum: Sum = await Sum.deploy("Hello, Sum!");
  await sum.deployed();
  const add = await sum.getSum(2, 5);
  console.log("sum deployed to:", sum.address);
  console.log("sum is:", add.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
