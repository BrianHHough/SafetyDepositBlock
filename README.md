# SafetyDepositBlock

[![Netlify Status](https://api.netlify.com/api/v1/badges/a56afe12-e66a-485c-b998-55286790c310/deploy-status)](https://app.netlify.com/sites/safetydepositblock/deploys)

Filebase & Akash Network Hackathon

Focused on providing mobile data portability and encrypted file storage for the decentralized web.

## Tech Stack

Front-End: ReactJS
API Layer: Axios
File Storage: Filebase
Deployment: Akash Network

## Project Commands

**Important:** need to use yarn and there needs to be no warnings during deployment

**START:** `yarn start`
**BUILD:** `yarn build`

**INSTALL DEPENDENCY:** `yarn add ____`

## Helpful Documentation

### React-DropZone Package

- npm package link: https://www.npmjs.com/package/react-dropzone
- long page of documentation: https://react-dropzone.js.org/

How to add different types of files:

- GitHub issue on this: https://github.com/felixrieseberg/React-Dropzone-Component/issues/164
- use `application/pdf` or

### React-Dropzone-Uploader Package

- npm package link: https://www.npmjs.com/package/react-dropzone-uploader

Really helpful guide:
https://www.freakyjolly.com/react-upload-files-using-react-dropzone/

### html5-file-selector Package

`npm install html5-file-selector`

# Debugging

## If you get this error: `Unhandled Rejection (TypeError): moralis__WEBPACK_IMPORTED_MODULE_1__.Moralis.start is not a function`

See my forum post on this: https://forum.moralis.io/t/unhandled-rejection-typeerror-moralis-start-is-not-a-function-moralis-version-0-6-08-doesnt-fix-it/3390

This might be the `package.json` by default:

```json
"moralis": "^0.0.60",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-dropzone": "^11.4.2",
    "react-dropzone-uploader": "^2.11.0",
    "react-moralis": "^0.2.4",
```

Please try updating the npm package and try running it. The latest versions would look like this:

```json
    "moralis": "^0.0.88",
    "react-moralis": "^0.2.6",
```
