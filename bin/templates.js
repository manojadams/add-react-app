
const REACT_TEMPLATES = [
    "evergreen"
];

const REPO_NAME = {
    DEFAULT: "react-templates",
    REACT_TEMPLATES: "react-templates",
    REACT_DASHBORAD: "react-dashboard"
};

const USERNAME = "manojadams";

const REPO_TEMPLATE = {
    [REPO_NAME.DEFAULT]: `https://github.com/${USERNAME}/react-templates.git`,
    [REPO_NAME.REACT_TEMPLATES]: `https://github.com/${USERNAME}/react-templates.git`,
    [REPO_NAME.REACT_DASHBORAD]: `https://github.com/${USERNAME}/react-dashboard.git`
};

exports.REPO_NAME = REPO_NAME;
exports.REPO_TEMPLATE = REPO_TEMPLATE;
exports.REACT_TEMPLATES = REACT_TEMPLATES;
