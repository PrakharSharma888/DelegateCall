const { expect } = require('chai')
const { ethers } = require('hardhat')

describe("Attack", ()=> {
    it("Should change the owner of the smart contract", async() => {
        const [owner] = await ethers.getSigners()
        console.log(owner.address)
        
        const helperContract = await ethers.getContractFactory("Helper");
        const dehelperContract = await helperContract.deploy()
        await dehelperContract.deployed()
        console.log("Helper Contract Deplyed :", dehelperContract.address)

        const goodContract = await ethers.getContractFactory("Good");
        const deGoodContract = await goodContract.deploy(dehelperContract.address)
        await deGoodContract.deployed()
        console.log("Good Contract Deplyed :", deGoodContract.address)

        const attackContract = await ethers.getContractFactory("Attack");
        const deAttackContract = await attackContract.deploy(deGoodContract.address)
        await deAttackContract.deployed()
        console.log("Attack Contract Deplyed :", deAttackContract.address)

        const tx = await deAttackContract.attack()
        await tx.wait()

        expect(await deGoodContract.owner()).to.equal(deAttackContract.address)
    })
})