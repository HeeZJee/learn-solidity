//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Sum {
    string private sum;

    constructor(string memory _sum) {
        console.log("Deploying a Greeter with greeting:", _sum);
        sum = _sum;
    }


    function getSum(uint8 a, uint8 b) public pure returns(uint){
        uint result = a + b;
        return result;
    }
}
