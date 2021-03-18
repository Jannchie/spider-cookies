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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixZQUFZLENBQUMsT0FBZTtJQUMxQyxJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUM3QyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1FBQ3hCLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBUkQsb0NBUUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxVQUErQjs7SUFDOUQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDOztRQUN2QixLQUFnQixJQUFBLEtBQUEsU0FBQSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7WUFBakMsSUFBTSxDQUFDLFdBQUE7WUFDSixJQUFBLEtBQUEsT0FBUyxDQUFDLElBQUEsRUFBVCxDQUFDLFFBQUEsRUFBRSxDQUFDLFFBQUssQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2xCLGFBQWEsSUFBTyxDQUFDLFNBQUksQ0FBQyxPQUFJLENBQUM7YUFDaEM7U0FDRjs7Ozs7Ozs7O0lBQ0QsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFWRCw0Q0FVQyJ9