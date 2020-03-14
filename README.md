# @itemizecorp/configure-tooling

### What it Does

This package will install all necessary linting, formatting, and git-hook tooling dependencies.
After the dependencies are installed, respective configuration files are generated in your repository to complete the tooling configuration.

### Usage

Install the dependency

```
npm install --save-dev @itemizecorp/configure-tooling
```

Run the configuration script

```
npx configure-tooling --platform=[ node | react | react-native ]
```
