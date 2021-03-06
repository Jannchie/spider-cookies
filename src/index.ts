export function parseCookies(cookies: string) {
  const cookiesMap = new Map<string, string>();
  const cookieList = cookies.split(";");
  cookieList.forEach((cookie) => {
    const kv = cookie.split("=");
    const k = kv[0].trim();
    if (k !== "") cookiesMap.set(k, kv[1]);
  });
  return cookiesMap;
}

export function stringifyCookies(cookiesMap: Map<string, string>) {
  let cookiesString = ``;
  for (const e of cookiesMap.entries()) {
    const [k, v] = e;
    if (v != undefined) {
      cookiesString += `${k}=${v}; `;
    }
  }
  cookiesString = cookiesString.replace(/(?:;\s)+$/, "");
  return cookiesString;
}
