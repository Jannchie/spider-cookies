import { parseCookies, stringifyCookies } from "../src/index";

test("Parse Test", () => {
  let cookiesMap = parseCookies("test=value");
  expect(cookiesMap.get("test")).toBe("value");
  expect(cookiesMap.get("test2")).toBe(undefined);

  cookiesMap = parseCookies("test=");
  expect(cookiesMap.get("test")).toBe("");

  cookiesMap = parseCookies("test=;a=1;b=2; c=3; d=4");
  expect(cookiesMap.get("a")).toBe("1");
  expect(cookiesMap.get("b")).toBe("2");
  expect(cookiesMap.get("c")).toBe("3");
  expect(cookiesMap.get("d")).toBe("4");

  cookiesMap = parseCookies("   test=");
  expect(cookiesMap.get("test")).toBe("");

  cookiesMap = parseCookies("");
  expect(cookiesMap.has("")).toBeFalsy();
});

test("Stringify Test", () => {
  let cookiesMap = parseCookies("test=value");
  let cookiesString = stringifyCookies(cookiesMap);
  expect(cookiesString).toBe("test=value");

  cookiesMap = parseCookies("test=value; ");
  cookiesString = stringifyCookies(cookiesMap);
  expect(cookiesString).toBe("test=value");

  cookiesMap = parseCookies("test=value;  ");
  cookiesString = stringifyCookies(cookiesMap);
  expect(cookiesString).toBe("test=value");
});

test("Update Test", () => {
  let cookiesMap = parseCookies("test=value;name=spider-cookies");
  cookiesMap.set("test", "new_value");
  const cookiesString = stringifyCookies(cookiesMap);
  expect(cookiesString).toBe("test=new_value; name=spider-cookies");
});
