//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Person {
  uint8 public age; // accesible from outside contract, immutable except by internal function
  uint16 private height; // neither accesible from outside contract nor be udapted
  uint16 internal weight; // can be access with child contracts
  string[] public skills;

  enum Gender {
    MALE,
    FEMALE
  }
  Gender public gender;

  struct Education {
    string institute;
    string program;
    string major;
    uint16 year;
    bool graduated;
  }
  Education[] public educations;

  function updateAge(uint8 _age) public {
    age = _age;
  }

  function updateWeight(uint8 _weight) public returns (uint256) {
    weight = _weight;

    return weight;
  }

  function getFullName(string memory _firstName, string memory _lastName)
    public
    pure
    returns (string memory)
  {
    string memory fullName = string(
      abi.encodePacked(_firstName, " ", _lastName)
    );

    return fullName;
  }

  function pushSkills(string memory _skill) public {
    skills.push(_skill);
  }

  function getSkills() public view returns (string[] memory) {
    return skills;
  }

  function setGender(Gender _gender) public {
    gender = _gender == Gender.MALE ? Gender.MALE : Gender.FEMALE;
  }

  function updateEducation(
    string memory _institute,
    string memory _program,
    string memory _major,
    uint16 _year,
    bool _graduated
  ) public {
    educations.push(Education(_institute, _program, _major, _year, _graduated));
  }

  function getEducations() public view returns (Education[] memory) {
    return educations;
  }
}
