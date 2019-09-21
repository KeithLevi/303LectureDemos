
describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel('a'), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel('e'), true);
    });

    it("z is not vowel", function () {
        assert.equal(isVowel('z'), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel('5'), false);
    });

});