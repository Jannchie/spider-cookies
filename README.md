# SPIDER-COOKIES

## Summary

The CookieJar is so complicated! I configured half a day Leng is not configured successfully! All I want is to update the original cookies based on the Set-Cookie field in the response header! I just want to write a crawler. I don't want to worry about domin, path, expiration time. So I wrote this library.

## Usage

``` ts
import { parseCookies, stringifyCookies } from "spider-cookies";
cookies = "test=value; name=spider-cookies";
let cookiesMap = parseCookies(cookies);
cookiesMap.set("test", "new_value");
const cookiesString = stringifyCookies(cookiesMap);

// jest
expect(cookiesString).toBe("test=new_value; name=spider-cookies");
```
