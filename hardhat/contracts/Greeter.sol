// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract Greeter {
  string public text;




  function setMessage(string memory _text) public  {
   text = _text;
  }


  function getMessage() public view returns(string memory) {
       return text;
  }
}
