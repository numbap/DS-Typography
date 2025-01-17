[![Build and Deploy Storybook](https://github.com/DTS-STN/Service-Canada-Design-System/actions/workflows/build-publish.yml/badge.svg)](https://github.com/DTS-STN/Service-Canada-Design-System/actions/workflows/build-publish.yml)
![Version](https://img.shields.io/github/package-json/v/dts-stn/service-canada-design-system)
[![Documentation Tool](https://img.shields.io/badge/Documentation%20Tool-storybook-pink)](https://dts-stn.github.io/Service-Canada-Design-System/main)

# DECD Design System Component Library

This repository contains the source code for the React component library which corresponds to DECD designs following the [canada.ca guidelines](https://www.canada.ca/en/government/about/design-system.html). This library contains reusable components that are accessible and can be used across DECD products in order to ensure brand and design consistency and to speed up development through reusability.

## Install

**Step 1:** Install the package using this command

```bash
$ npm install --save @dts-stn/service-canada-design-system
```

**Step 2:** You can now import the components you wish to use anywhere in your project

```js
import { Component } from "@dts-stn/service-canada-design-system";
```

**Note:** The package is hosted in [npm public registry](https://www.npmjs.com/package/@dts-stn/service-canada-design-system). There are pre-release versions available as well, which are created based on volume of changes.

To see available components please refer to our storybook page [DECD Design System Storybook](https://dts-stn.github.io/Service-Canada-Design-System/main). Make sure to view the **Doc tab** of each component to see important information about how to use components and the props you can pass into them.

## Contribution

### Getting Started

[Install Nodes.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```bash
# Install Packages
$ npm install
```

### Developing and Documenting Components 📝

This project uses [storybook](https://storybook.js.org/) to document and provide a playground to visually see components in action while you are developing them. To run storybook, run the command below from the root directory

```bash
# Start dev environment
$ npm run storybook
```

### New Features

Feature branches should be created from `main` and Pull Requests should be submitted with the base set as the `develop` branch. Ensure that you've linted and tested your changes locally before publishing any PRs.

#### Commit Messages

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification is enforced as a `commit-msg` git hook. For more information on the possible `type` of commit that are allowed, take a look at `/git-conventional-commits.json` in the codebase.

Every new release will automatically include a new `CHANGELOG.md` depending on all commit messages filed against the new version of the code in its git history.

### Testing Strategies 🧪

This project uses Jest and the React Testing Library for testing. We've decided to use Jest as it is a widely used testing tool and provides sufficient resources for testing a component library. The React Testing Library provides useful helpers to further push the flexibility of the jest testing tool. Some example test cases include;

- Testing components with multiple styles (ex. button component with different button styles) [src/components/ActionButton.test.js](src/components/ActionButton.test.js)
- Components styles are correctly rendered (Dimensions, Color, Fontstyle, Fontsize, etc) line 12 [src/components/Banner.test.js](src/components/Banner.test.js)
- Clickable components (ex. button component has an onclick prop) line 17 [src/components/Menu.test.js](src/components/Menu.test.js)
- Rendering with different input props line 19 [src/components/TextField.test.js](src/components/TextField.testjs)

To manually run tests simply use the following command in the root directory

```bash
# run tests
$ npm run test
```

The test script is automatically run when creating a new pull request.

For more information on tools and resources refer to our [wiki page](https://github.com/DTS-STN/Service-Canada-Design-System/wiki#testing-documentation)

### Accessibility Testing Strategies

**Important Note:** we are testing for [WCAG 2.1 Level AA compliance](https://www.w3.org/TR/WCAG21/) according to the [Standard on Web Accessibility](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=23601)

We are using multiple tools and steps to do accessibility testing, as no one tool is capable of checking for all accessibility concerns.

1. We are using the [Storybook Accessibility Addon](https://storybook.js.org/blog/accessibility-testing-with-storybook/) as our main tool for accessibility testing. The Addon uses the Axe accessibility engine developed by Deque Systems. Axe is run on each component in Storybook and the addon will provide a list of accessibility violations, vulnerabilities and links to documentaion to help fix the violations. To use, simply run Storybook locally.

2. We are also preforming manual tests to check for accessibility concerns. The following manual tests should be completed on each component:

   - Zoom content to 200% to ensure it is readable
   - Tab through content using keyboard only
   - Verify new content using at least 1 screen reader tool from the following list: https://dequeuniversity.com/screenreaders/

3. Jest-axe is ran along with other unit tests. Jest-axe is time efficient but only covers about 30% of unit test cases. To run unit tests follow instructions listed under the [Testing Strategies 🧪](#Testing-Strategies-🧪) section. The following is an example test case:

   - Passing the Action Button Props through jest-axe tool line 73 [src/components/ActionButton.test.js](src/components/ActionButton.test.js)

For more information on accessibility tools and resources refer to our [wiki page](https://github.com/DTS-STN/Service-Canada-Design-System/wiki#accessibility-documentation)

### Browser & Device Testing

We will be building components for mobile first, but also supporting web browsers and all screen sizes.

Testing will be done manually, to confirm components are displaying correctly on different web browsers. Based on data collected, we will be supporting and testing on the following 3 most used browsers (Make sure to test on atleast one of the given versions listed under each web browser);

- Google Chrome
  - Version 80, 81, 85
- Safari
  - Version 12.1, 13, 13.1, 14
- Internet Explorer
  - Version 11
- Edge
  - Version 17, 18, 87, 89

### Linting

We are using eslint a11y plugin to check for any accessibility errors and Prettier formatter to clean up/format our code. We use Husky to automate these two processes during the commit process, so we can ensure that our code is checked before pushing any of our work to the repo. These are the most commonly used tools for formatting react projects and have many use cases confirming their reliability.

Whenever any files are committed, prettier formatter will be ran to format and clean up the files before comfirming the commit. Eslint will also automatically be ran at the same point in the process to check for any a11y concerns.

To manually run eslinting and check for accessibility errors run the following command in the root directory

```bash
$ npm run eslint
```

To manually run linting on all files (Prettier formatting) run the following command in the root directory

```bash
$ npm run lint
```

### Building the Package 👷🏽‍♀️👷🏽

This package uses babel and rollup to transpile and create production bundles which are generated in the `/dist` folder at the root level of the project. To build the production bundle at any time simply run the following command

```bash
$ npm run build
```

Rollup looks at the following file [src/index.js](src/index.js) to determine what it should include in the production bundle... as such only import and export things in this file that you want to be included, otherwise do not touch this file.

### Testing Package Locally

Sometimes it's helpful to test a component your working on in an actual application to test it's import or see it being rendered in the browser. There are a couple of ways you can test our package locally:

You can create a tarball file based on your local branch to simulate what the service-canada-design-system package would look like with your new code. To create a tarball file run the following command in the top most folder in your local branch

```bash
$ npm pack
```

This will create a dts-stn-service-canada-design-system-0.0.0.tgz which you can `npm install`.

### Branching Strategy

| Branch  | Description                                                                                                                                                                                                                                                                                   | Associated Github Actions                                               |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| main    | Production branch. Triggers a build to Storybook & publishes a new npm package release.                                                                                                                                                                                                       | Publish Stable Package; Build and Deploy Storybook; Test                |
| release | Final culmination of all branches that will be used to test beta versions of the new release. After testing is complete, release will be merged into main.                                                                                                                                    | Publishing Dev Package; Create Pre-release notes PR for `release`; Test |
| develop | Culmination of feature branches                                                                                                                                                                                                                                                               | Test                                                                    |
| \*      | Created off of `main` to work on new features locally that are intended for the next potential release. Each feature branch should be prefixed by the relevant Jira issue and component ID (if applicable), eg. DS-56-A003-Footer. Feature branches should be merged into develop using a PR. | Test                                                                    |

### Release Process

Github Actions drive all workflow of testing and publishing artifacts on the [npm registry](https://www.npmjs.com/package/@dts-stn/service-canada-design-system). Besides testing and code analysis actions taking place, as outlined in the [Branching Strategy](#branching-strategy), the following automated steps are also taken by Github based on the branch code is committed to:

- `release` - A dev package publish to the npm registry, which will allow for pre-release testing by devs. Also a PR will automatically be created that generates a new CHANGELOG.md and version bumps the library based on previous commits for the new potential release.
- `main` - A stable package is released autoamatically to NPM.

### Tech Stack

| Layer                 | Stragety                                      |
| :-------------------- | :-------------------------------------------- |
| Web Client Tech       | HTML, CSS, JS/TS                              |
| Framework             | React                                         |
| Version Control       | Git                                           |
| Pre-commit Git Hooks  | Husky                                         |
| JS Linter             | ESLint                                        |
| Code Formatter        | Prettier                                      |
| JS Compiler           | Babel                                         |
| Task Runner           | NPM Scripts                                   |
| Module Bundler        | Rollup                                        |
| CSS & JS Integration  | PostCSS & Tailwind CSS                        |
| Packaging Stragety    | NPM Packages                                  |
| Dev Environment       | Storybook                                     |
| Unit & React Testing  | Jest (React Testing Library)                  |
| Accessibility Testing | Jest-axe, Storybook Accessibility Addon (axe) |
| CI/CD Pipeline        | Github Actions                                |

### License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distrubuted under the [MIT](https://github.com/DTS-STN/Service-Canada-Design-System/blob/main/LICENSE.md).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law. No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program. For more information, see [Federal identity requirements](https://www.canada.ca/en/treasury-board-secretariat/topics/government-communications/federal-identity-requirements.html).

All content of the Design System Library is available under the [Open Government Licence - Canada](https://open.canada.ca/en/open-government-licence-canada).
