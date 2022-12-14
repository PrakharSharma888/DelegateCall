<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Delegatecall()" />

  &#xa0;

  <!-- <a href="https://delegatecall().netlify.app">Demo</a> -->
</div>

<h1 align="center">Delegatecall()</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/PrakharSharma888/delegateCall?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/PrakharSharma888/delegateCall?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/delegatecall()?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/delegatecall()?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/delegatecall()?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Delegatecall() 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/PrakharSharma888" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

.delegatecall() is a method in Solidity used to call a function in a target contract from an original contract. However, unlike other methods, when the function is executed in the target contract using .delegatecall(), the context is passed from the original contract i.e. the code executes in the target contract, but variables get modified in the original contract.

# Good.sol :
It will contain the address of the Helper contract, and a variable called owner. The function setNum will do a delegatecall() to the Helper contract.

# Helper.sol :
This is a simple contract which updates the value of num through the setNum function. Since it only has one variable, the variable will always point to Slot 0. When used with delegatecall, it will modify the value at Slot 0 of the original contract.

# Attack.sol :
This contract attacks on good.sol makes its address as the helper address in place of the actual helper contract address

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) and [Hardhat](https://hardhat.org/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/PrakharSharma888/delegatecall()

# Access
$ cd delegatecall()

# Install dependencies
$ npm init

# Start Project
$ npx hardhat test

```

Made with :heart: by <a href="https://github.com/PrakharSharma888" target="_blank">Prakhar Sharma</a>

&#xa0;

<a href="#top">Back to top</a>
