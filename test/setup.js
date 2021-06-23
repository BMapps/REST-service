const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);
jest.setTimeout(1000000);

global.jestExpect = global.expect;
global.expect = chai.expect;
