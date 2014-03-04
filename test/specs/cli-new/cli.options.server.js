var defaultConfig = require("../../../lib/default-config");
var cli = require("../../../lib/cli");
var options = cli.options;
var _ = require("lodash");

var assert = require("chai").assert;

describe("Merging Server Options", function () {
    var defaultValue;
    beforeEach(function () {
        defaultValue = false;
    });
    it("should merge default + command line options", function () {
        var arg = true;
        var actual = options._mergeServerOption(defaultValue, arg);
        var expected = {
            baseDir: "./"
        };
        assert.deepEqual(actual, expected);
    });
    it("should set the base dir if given", function () {
        var arg = "app";
        var actual = options._mergeServerOption(defaultValue, arg);
        var expected = {
            baseDir: "app"
        };
        assert.deepEqual(actual, expected);
    });
    it("should set the base dir if given", function () {
        var arg = "app/dist";
        var argv = {
            index: "index.htm"
        };
        var actual = options._mergeServerOption(defaultValue, arg, argv);
        var expected = {
            baseDir: "app/dist",
            index: "index.htm"
        };
        assert.deepEqual(actual, expected);
    });
    it("should set the base dir if given", function () {
        var arg = true;
        var argv = {
            index: "index.htm"
        };
        var actual = options._mergeServerOption(defaultValue, arg, argv);
        var expected = {
            baseDir: "./",
            index: "index.htm"
        };
        assert.deepEqual(actual, expected);
    });
});
