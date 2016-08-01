
'use strict';
const InitAction = require('../../postApp/actions/InitAction');
describe("init", function () {
    let initAction = new InitAction();
    it("should return zipcode", function () {
        let cmd = "1";
        let result = initAction.doAction(cmd);
        let expectResult = "zipcode";
        expect(result).toEqual(expectResult);
    });
    it("should return barcode", function () {
        let cmd = "2";
        let result = initAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should to end", function () {
        let cmd = "3";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = initAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
    it("should return init", function () {
        let cmd = "5";
        spyOn(console, 'log');
        let result = initAction.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
});