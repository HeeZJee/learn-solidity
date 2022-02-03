//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Person {
  uint8 public age; // accesible from outside contract, immutable except by internal function
  uint16 private height; // neither accesible from outside contract nor be udapted
  uint16 internal weight; // can be access with child contracts

  function updateAge(uint8 _age) public {
    age = _age;
  }

  function updateWeight(uint8 _weight) public returns (uint256) {
    weight = _weight;

    return weight;
  }

  function getFullNameInStr(string memory _firstName, string memory _lastName)
    public
    pure
    returns (string memory)
  {
    string memory fullName = string(abi.encodePacked(_firstName," ", _lastName));
    return fullName;
  }
}
