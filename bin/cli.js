#!/usr/bin/env node
const {execSync} = require('child_process');
const runCommand = command => {
    try {
        execSync(`${command}`, {studio: 'inherit'});
    } catch(error) {
        console.error(`Failed to run command ${command} with error`, error);
        return false;
    }
    return true;
}
const gitCheckoutCommand = `git clone https://github.com/manojgetwealthy/react-templates.git`;
const installCommand = `cd react-templates && npm install`;

console.log('Cloning react templates');

const checkoutResponse = runCommand(gitCheckoutCommand);
if (!checkoutResponse) {
    process.exit(-1); 
}

console.log('Installing dependencies for react-templates');
const installCommandResponse = runCommand(installCommand);
if (!installCommandResponse) {
    process.exit(-1);
}

console.log('Setup completed. Go into the directory(using cd <dir_name>) of react-templates and run command `npm start`')

