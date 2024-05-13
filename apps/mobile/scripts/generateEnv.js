/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
const isProduction = process.argv.indexOf("--production") !== -1;
const isStage = process.argv.indexOf("--stage") !== -1;
const isDev = !isStage && !isProduction;
const envPath = isDev
  ? ".env.development"
  : isStage
  ? ".env.test"
  : ".env.production";

const { parsed } = dotenv.config({ path: envPath });
const EXPO_PUBLIC_API_URL = `"${parsed.EXPO_PUBLIC_API_URL}"`;

fs.writeFileSync(
  resolvePath("../env.js"),
  `
  var __STAGE__ = ${isStage};
  var __DEVELOP__ = ${isDev};
  var __PRODUCTION__ = ${isProduction};
  var __PLATFORM__ = "native";
  var EXPO_PUBLIC_API_URL =${EXPO_PUBLIC_API_URL};

  global.__STAGE__ = __STAGE__;
  global.__DEVELOP__ = __DEVELOP__;
  global.__PRODUCTION__ = __PRODUCTION__;
  global.__PLATFORM__ = __PLATFORM__;
  global.EXPO_PUBLIC_API_URL = EXPO_PUBLIC_API_URL;

`
);
