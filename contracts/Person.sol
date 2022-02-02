//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Person {
    uint8 public age; // accesible from outside contract but can't be udapted except internal function
    uint16 private height; // neither accesible from outside contract nor be udapted
    uint16 internal weight; // can be access with child contracts

    function updateAge(uint8 _age) public {
            age = _age;
    }
}

contract Person2 is Person{
    
    function updateWeight(uint8 _weight) public {
            weight = _weight;
    }
}