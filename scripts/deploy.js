const { ethers } = require("hardhat");

const main = async() => {
    const accounts = await hre.ethers.getSigners();
    const owner = accounts[0];
    const getDomains = await hre.ethers.getContractFactory("Domains");
    const domains = await getDomains.deploy("shine");
    console.log(domains.address);

    //await domains.connect(accounts[1]).register("ishani",{value: 1000000000000000});
    
    let txn = await domains.register("siya", {value: hre.ethers.utils.parseEther('0.3')});
    await txn.wait();
    let balance = await hre.ethers.provider.getBalance(domains.address);
    console.log("contract balance:",hre.ethers.utils.formatEther(balance));
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});

