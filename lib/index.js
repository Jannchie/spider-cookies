var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyCookies = exports.parseCookies = void 0;
function parseCookies(cookies) {
    cookies = cookies.trimLeft();
    var cookiesMap = new Map();
    var cookieList = cookies.split(";");
    cookieList.forEach(function (cookie) {
        var kv = cookie.split("=");
        cookiesMap.set(kv[0].trim(), kv[1]);
    });
    return cookiesMap;
}
exports.parseCookies = parseCookies;
function stringifyCookies(cookiesMap) {
    var e_1, _a;
    var cookiesString = "";
    try {
        for (var _b = __values(cookiesMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var e = _c.value;
            var _d = __read(e, 2), k = _d[0], v = _d[1];
            if (v != undefined) {
                cookiesString += k + "=" + v + "; ";
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    cookiesString = cookiesString.replace(/(?:;\s)+$/, "");
    return cookiesString;
}
exports.stringifyCookies = stringifyCookies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixZQUFZLENBQUMsT0FBZTtJQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBQzdDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07UUFDeEIsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFURCxvQ0FTQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLFVBQStCOztJQUM5RCxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7O1FBQ3ZCLEtBQWdCLElBQUEsS0FBQSxTQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtZQUFqQyxJQUFNLENBQUMsV0FBQTtZQUNKLElBQUEsS0FBQSxPQUFTLENBQUMsSUFBQSxFQUFULENBQUMsUUFBQSxFQUFFLENBQUMsUUFBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDbEIsYUFBYSxJQUFPLENBQUMsU0FBSSxDQUFDLE9BQUksQ0FBQzthQUNoQztTQUNGOzs7Ozs7Ozs7SUFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQVZELDRDQVVDIn0=