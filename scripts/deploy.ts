// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Age, Age__factory as AgeFactory } from "../typechain";

async function main() {
  const Age: AgeFactory = await ethers.getContractFactory("Age");
  const age: Age = await Age.deploy();
  await age.deployed();

  const currentAge = await age.age();
  console.log("Age is:", currentAge);

  const upadatedAge = await age.updateAge(23);

  await upadatedAge.wait();

  console.log("Now age is:", await age.age());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
