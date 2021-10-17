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

To Run App:

**Important:** need to use yarn and there needs to be no warnings during deployment

**START:** `yarn start`
**BUILD:** `yarn build`

**INSTALL DEPENDENCY:** `yarn add ____`

To Run Server:
**RUN SERVER (from server):** `npm run start`

## Styles

### For editing the React-Dropzone-Uploader package, you have to edit the /node_modules folder...here is the file for doing that:

Edit this file: `./node_modules/react-dropzone-uploader/dist/styles.css`
...
With this:

---

Helpful StackBlitz: https://stackblitz.com/edit/react-dropzone-uploader-customized?file=Uploader.js

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

How React Dropzone Uploader works with S3 and presigned URLs: https://react-dropzone-uploader.js.org/docs/s3

### html5-file-selector Package

`npm install html5-file-selector`

### React-Spinners

`yarn add react-spinners`

Link: https://www.npmjs.com/package/react-spinners

YouTube Tutorial: https://www.youtube.com/watch?v=SR8755C0bME

Information on spinners: https://www.davidhu.io/react-spinners/

GitHub repo: https://github.com/davidhu2000/react-spinners

### React-Loadable

Link: https://www.digitalocean.com/community/tutorials/react-react-loadable

### React-Loader-Spinner

`yarn add react-loader-spinner`

NPM Package: https://www.npmjs.com/package/react-loader-spinner

### AWS-SDK

To add to project: `yarn add aws-sdk`

### React-Helmet

For adding external js scripts as html to React Functional Components

NPM package link: https://www.npmjs.com/package/react-helmet

Article that helped: https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668

### dotenv

npmjs link: https://www.npmjs.com/package/dotenv

# Debugging`

## If you get this error: `Unhandled Rejection (TypeError): moralis__WEBPACK_IMPORTED_MODULE_1__.Moralis.start is not a function`

The solution is: update Moralis to the latest package

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

## Need AppId for <ProviderMoralis /> and/or error: react evironment variables .env return undefined

Use `process.env` for how to get environmental variables for appId and serverUrl: https://forum.moralis.io/t/react-moralis-errors/248/7

the variable should be prefixed with REACT*APP*
eg: REACT_APP_WEBSITE_NAME=hello
and
you need to restart server for changes to be reflected
https://stackoverflow.com/questions/53237293/react-evironment-variables-env-return-undefined

## You need to avoid unecessary concatenation of strings

Great article from ESLint docs on this and why you need to be careful when combining integers with concatenated strings or using template literals in JavaScript with strings: https://eslint.org/docs/rules/no-useless-concat

## Fetch data via an API

Digital Ocean guide on Fetch: https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
