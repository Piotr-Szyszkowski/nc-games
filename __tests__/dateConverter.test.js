const { dateConverter } = require("../src/Utils/dateConverter");
describe(`dateConverter`, () => {
  it(`Should accept a string and return a string`, () => {
    const result = dateConverter("2021-012-22T11:35:07.936Z");
    expect(typeof result).toBe("string");
  });
  it(`Should return a different string than one passed`, () => {
    const testStr = "2020-06-22T11:55:05.936Z";
    const result = dateConverter(testStr);
    expect(result).not.toEqual(testStr);
  });
  it(`Should return a nicely converted date`, () => {
    const uglyDate01 = "2021-01-22T11:35:05.936Z";
    const result = dateConverter(uglyDate01);
    expect(dateConverter(uglyDate01)).toEqual("22-Jan-2021 at 11:35");
  });
});
