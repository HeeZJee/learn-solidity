// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Person, Person__factory as PersonFactory } from "../typechain";

async function main() {
  const Person: PersonFactory = await ethers.getContractFactory("Person");
  const person: Person = await Person.deploy();
  await person.deployed();

  // const currentAge = await person.age();
  // console.log("Age is:", currentAge);

  const upadatedAge = await person.updateAge(23);
  await upadatedAge.wait();
  console.log("Age is:", await person.age());

  const fullName = await person.getFullName("Hafeez", "Ghanchi");
  console.log("Full name is:", fullName);

  await person.pushSkills("Solidity");
  await person.pushSkills("TypeScript");
  const skills = await person.getSkills();
  console.log("Skillset:", skills);

  await person.setGender(0);
  const gender = await person.gender();
  console.log("Gender:", gender);

  await person.updateEducation(
    "Karachi University",
    "BS",
    "Space Science",
    2019,
    true
  );
  await person.updateEducation(
    "Stanford University",
    "MS",
    "Cybersecurity",
    2022,
    true
  );
  const educations = await person.getEducations();
  console.log("Education:", educations);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
