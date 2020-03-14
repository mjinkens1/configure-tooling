#!/usr/bin/env node
const { dirname } = require("path");
const { platform } = require("yargs").argv;
const { earth } = require("cli-spinners");
const ora = require("ora");

const createFile = require("./src/createFile");
const formatFile = require("./src/formatFile");
const getConfigPaths = require("./src/getConfigPaths");
const installDeps = require("./src/installDeps");

const commonDeps = [
  "husky",
  "mjinkens1/eslint-config",
  "mjinkens1/husky-config",
  "mjinkens1/prettier-config",
  "prettier",
  "pretty-quick"
];

const reactDeps = ["mjinkens1/eslint-plugin-react"];

const dependencies = [
  ...commonDeps,
  ...((platform || "").includes("react") ? reactDeps : [])
];

const configPaths = getConfigPaths(platform);

const configurations = [
  {
    name: "eslint ✅",
    filename: ".eslintrc.js",
    configPath: configPaths.eslint
  },
  {
    name: "husky 🐕",
    filename: ".huskyrc.js",
    configPath: configPaths.husky
  },
  {
    name: "prettier 📖",
    filename: ".prettierrc.js",
    configPath: "@itemizecorp/prettier-config"
  }
];

const rootPath = dirname(require.main.filename).split("/node_modules")[0];

const createConfigFiles = configs => {
  configs.forEach(({ name, filename, configPath }) => {
    const spinner = ora({
      isEnabled: true,
      prefixText: `Creating ${name} config file`,
      spinner: earth
    });

    spinner.start();
    createFile(rootPath, name, filename, configPath);
    formatFile(filename);
    spinner.succeed();
  });
};

const spinner = ora({
  isEnabled: true,
  prefixText: "Installing dependencies",
  spinner: earth
});

spinner.start();
installDeps(dependencies, rootPath);
spinner.succeed();
createConfigFiles(configurations);
