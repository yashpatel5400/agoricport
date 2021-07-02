const { expect } = require("chai");

describe("Token contract", function() {
    it("Deployment should assign total to deployer", async function() {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("PriceConsumerV3");

        const hardhatToken = await Token.deploy();
    });
});