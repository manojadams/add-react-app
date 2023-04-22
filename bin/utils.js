const {execSync} = require('child_process');
const { log } = require('console');
const { REPO_TEMPLATE } = require('./templates');

const getRepoName = (args) => {
    const templateArg = args.length > 2 ? args[2] : "";
    if (templateArg) {
        const templateNames = templateArg.split("=");
        if (templateNames.length > 1) {
            return templateNames[1];
        }
    }
    return "";
}

const runCommand = command => {
    try {
        execSync(`${command}`, {studio: 'inherit'});
    } catch(error) {
        console.error(`Failed to run command ${command} with error`, error);
        return false;
    }
    return true;
}

const validate = repoName => {
    if (REPO_TEMPLATE[repoName]) {
        return true;
    }
    return false;
}

exports.getRepoName = getRepoName;
exports.runCommand = runCommand;
exports.validate = validate;
