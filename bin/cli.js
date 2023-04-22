#!/usr/bin/env node
const {REPO_TEMPLATE} = require("./templates");
const {getRepoName, runCommand, validate}  = require("./utils");

const repoName = getRepoName(process.argv);
if (!validate(repoName)) {
    console.log("unknown option");
    return;
}
const gitCheckoutCommand = `git clone ${REPO_TEMPLATE[repoName]}`;
const installCommand = `cd ${repoName} && npm install`;

// Step 1: Checkout
console.log(`Cloning ${repoName}`);
const checkoutResponse = runCommand(gitCheckoutCommand);
if (!checkoutResponse) {
    process.exit(-1); 
}

// Step 2: Install dependencies
console.log(`Installing dependencies for ${repoName}`);
const installCommandResponse = runCommand(installCommand);
if (!installCommandResponse) {
    process.exit(-1);
}

console.log(`Setup completed. Go into the directory(using cd <dir_name>) of ${repoName} and run command npm start`)

