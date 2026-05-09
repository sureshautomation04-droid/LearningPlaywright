import { BASE_URL as url_util, formatTestName } from "../utils.js";
import { BASE_URL as url_testtul, formatUpperCaseString } from "../testutil.js";

console.log(url_util) // https://api.staging.com
console.log(url_testtul) // https://app.vwo.com
console.log(formatTestName("login")) // TC_LOGIN