import * as array from "./array.js";

const args = process.argv.slice(2);

switch (args[0]) {
    case 'array':
        array.run()
        break;
    case 'object':
        // object.run()
        break;
    default:
        console.log('No default option available.');
}
