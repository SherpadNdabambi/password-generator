# Changelog

All notable changes to the Password Generator template will be documented in this file.

The format is based on [Keep a Changelog][Keep a Changelog url], and this project adheres to [Semantic Versioning][Semantic Versioning url].

## [Unreleased]

## [1.1.0] (4 September 2025)

### Added

- Automated deployment to GitHub Pages using GitHub Actions workflow.
- New CI/CD pipeline with Node.js 18, TypeScript build, and manual `gh-pages` push.
- Favicon support in `index.html` with `./assets/img/user-password-svgrepo-com.png`.
- Enhanced UI with `container-fluid`, `form` structure, and `output` class in CSS.

### Changed

- Restructured project assets from `css/`, `img/`, `js/`, `ts/` to `assets/css/`, `assets/img/`, `assets/js/`, `assets/ts/`.
- Updated `README.md` image paths to use `./assets/img/`.
- Refactored `ts/scripts.ts` to use TypeScript type assertions and modern clipboard API.
- Updated `tsconfig.json` to output to `./dist` with `rootDir: ./assets/ts`.
- Moved and enhanced `styles.css` to `assets/css/styles.css` with additional styling.

### Removed

- Outdated `tsc` dependency from `package.json`.

## [1.0.0] (26 June 2023)

<!-- References -->

[Keep a Changelog url]: https://keepachangelog.com/en/1.0.0/
[Semantic Versioning url]: https://semver.org/spec/v2.0.0.html
[reference style links url]: https://www.markdownguide.org/basic-syntax/#reference-style-links
[1.1.0]: https://github.com/SherpadNdabambi/password-generator/releases/tag/v1.1.0
[1.0.0]: https://github.com/SherpadNdabambi/password-generator/releases/tag/v1.0.0
