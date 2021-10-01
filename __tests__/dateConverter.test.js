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
  it(`T-01 - Should return a nicely converted date`, () => {
    const uglyDate01 = "2021-01-22T11:35:05.936Z";
    expect(dateConverter(uglyDate01)).toEqual("22-Jan-2021 at 11:35");
  });
  it(`T-02 - Should return a nicely converted date`, () => {
    const uglyDate01 = "2021-01-18T10:01:41.251Z";
    const uglyDate02 = "1970-01-10T02:56:38.400Z";
    const uglyDate03 = "2020-09-13T15:19:28.077Z";
    const uglyDate04 = "2021-02-05T11:27:26.563Z";
    expect(dateConverter(uglyDate01)).toEqual("18-Jan-2021 at 10:01");
    expect(dateConverter(uglyDate02)).toEqual("10-Jan-1970 at 02:56");
    expect(dateConverter(uglyDate03)).toEqual("13-Sep-2020 at 15:19");
    expect(dateConverter(uglyDate04)).toEqual("05-Feb-2021 at 11:27");
  });
});
