"use strict";
/* global assert isVowel*/
describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });

    it("z is not vowel", test7);

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });

    function test7 () {
        assert.equal(isVowel("z"), false);
    }

});