var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function St(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var $e = { exports: {} };
const Et = {}, xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), Ce = /* @__PURE__ */ St(xt);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", s = n ? window : {};
    s.JS_MD5_NO_WINDOW && (n = !1);
    var a = !n && typeof self == "object", u = !s.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    u ? s = wt : a && (s = self);
    var f = !s.JS_MD5_NO_COMMON_JS && !0 && t.exports, m = !s.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", h = "0123456789abcdef".split(""), p = [128, 32768, 8388608, -2147483648], b = [0, 8, 16, 24], T = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), w = [], R;
    if (m) {
      var S = new ArrayBuffer(68);
      R = new Uint8Array(S), w = new Uint32Array(S);
    }
    var F = Array.isArray;
    (s.JS_MD5_NO_NODE_JS || !F) && (F = function(o) {
      return Object.prototype.toString.call(o) === "[object Array]";
    });
    var _ = ArrayBuffer.isView;
    m && (s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !_) && (_ = function(o) {
      return typeof o == "object" && o.buffer && o.buffer.constructor === ArrayBuffer;
    });
    var P = function(o) {
      var c = typeof o;
      if (c === "string")
        return [o, !0];
      if (c !== "object" || o === null)
        throw new Error(e);
      if (m && o.constructor === ArrayBuffer)
        return [new Uint8Array(o), !1];
      if (!F(o) && !_(o))
        throw new Error(e);
      return [o, !1];
    }, k = function(o) {
      return function(c) {
        return new C(!0).update(c)[o]();
      };
    }, N = function() {
      var o = k("hex");
      u && (o = M(o)), o.create = function() {
        return new C();
      }, o.update = function(i) {
        return o.create().update(i);
      };
      for (var c = 0; c < T.length; ++c) {
        var l = T[c];
        o[l] = k(l);
      }
      return o;
    }, M = function(o) {
      var c = Ce, l = Ce.Buffer, i;
      l.from && !s.JS_MD5_NO_BUFFER_FROM ? i = l.from : i = function(g) {
        return new l(g);
      };
      var E = function(g) {
        if (typeof g == "string")
          return c.createHash("md5").update(g, "utf8").digest("hex");
        if (g == null)
          throw new Error(e);
        return g.constructor === ArrayBuffer && (g = new Uint8Array(g)), F(g) || _(g) || g.constructor === l ? c.createHash("md5").update(i(g)).digest("hex") : o(g);
      };
      return E;
    }, I = function(o) {
      return function(c, l) {
        return new te(c, !0).update(l)[o]();
      };
    }, J = function() {
      var o = I("hex");
      o.create = function(i) {
        return new te(i);
      }, o.update = function(i, E) {
        return o.create(i).update(E);
      };
      for (var c = 0; c < T.length; ++c) {
        var l = T[c];
        o[l] = I(l);
      }
      return o;
    };
    function C(o) {
      if (o)
        w[0] = w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0, this.blocks = w, this.buffer8 = R;
      else if (m) {
        var c = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(c), this.blocks = new Uint32Array(c);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    C.prototype.update = function(o) {
      if (this.finalized)
        throw new Error(r);
      var c = P(o);
      o = c[0];
      for (var l = c[1], i, E = 0, g, y = o.length, x = this.blocks, B = this.buffer8; E < y; ) {
        if (this.hashed && (this.hashed = !1, x[0] = x[16], x[16] = x[1] = x[2] = x[3] = x[4] = x[5] = x[6] = x[7] = x[8] = x[9] = x[10] = x[11] = x[12] = x[13] = x[14] = x[15] = 0), l)
          if (m)
            for (g = this.start; E < y && g < 64; ++E)
              i = o.charCodeAt(E), i < 128 ? B[g++] = i : i < 2048 ? (B[g++] = 192 | i >>> 6, B[g++] = 128 | i & 63) : i < 55296 || i >= 57344 ? (B[g++] = 224 | i >>> 12, B[g++] = 128 | i >>> 6 & 63, B[g++] = 128 | i & 63) : (i = 65536 + ((i & 1023) << 10 | o.charCodeAt(++E) & 1023), B[g++] = 240 | i >>> 18, B[g++] = 128 | i >>> 12 & 63, B[g++] = 128 | i >>> 6 & 63, B[g++] = 128 | i & 63);
          else
            for (g = this.start; E < y && g < 64; ++E)
              i = o.charCodeAt(E), i < 128 ? x[g >>> 2] |= i << b[g++ & 3] : i < 2048 ? (x[g >>> 2] |= (192 | i >>> 6) << b[g++ & 3], x[g >>> 2] |= (128 | i & 63) << b[g++ & 3]) : i < 55296 || i >= 57344 ? (x[g >>> 2] |= (224 | i >>> 12) << b[g++ & 3], x[g >>> 2] |= (128 | i >>> 6 & 63) << b[g++ & 3], x[g >>> 2] |= (128 | i & 63) << b[g++ & 3]) : (i = 65536 + ((i & 1023) << 10 | o.charCodeAt(++E) & 1023), x[g >>> 2] |= (240 | i >>> 18) << b[g++ & 3], x[g >>> 2] |= (128 | i >>> 12 & 63) << b[g++ & 3], x[g >>> 2] |= (128 | i >>> 6 & 63) << b[g++ & 3], x[g >>> 2] |= (128 | i & 63) << b[g++ & 3]);
        else if (m)
          for (g = this.start; E < y && g < 64; ++E)
            B[g++] = o[E];
        else
          for (g = this.start; E < y && g < 64; ++E)
            x[g >>> 2] |= o[E] << b[g++ & 3];
        this.lastByteIndex = g, this.bytes += g - this.start, g >= 64 ? (this.start = g - 64, this.hash(), this.hashed = !0) : this.start = g;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, C.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var o = this.blocks, c = this.lastByteIndex;
        o[c >>> 2] |= p[c & 3], c >= 56 && (this.hashed || this.hash(), o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), o[14] = this.bytes << 3, o[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, C.prototype.hash = function() {
      var o, c, l, i, E, g, y = this.blocks;
      this.first ? (o = y[0] - 680876937, o = (o << 7 | o >>> 25) - 271733879 << 0, i = (-1732584194 ^ o & 2004318071) + y[1] - 117830708, i = (i << 12 | i >>> 20) + o << 0, l = (-271733879 ^ i & (o ^ -271733879)) + y[2] - 1126478375, l = (l << 17 | l >>> 15) + i << 0, c = (o ^ l & (i ^ o)) + y[3] - 1316259209, c = (c << 22 | c >>> 10) + l << 0) : (o = this.h0, c = this.h1, l = this.h2, i = this.h3, o += (i ^ c & (l ^ i)) + y[0] - 680876936, o = (o << 7 | o >>> 25) + c << 0, i += (l ^ o & (c ^ l)) + y[1] - 389564586, i = (i << 12 | i >>> 20) + o << 0, l += (c ^ i & (o ^ c)) + y[2] + 606105819, l = (l << 17 | l >>> 15) + i << 0, c += (o ^ l & (i ^ o)) + y[3] - 1044525330, c = (c << 22 | c >>> 10) + l << 0), o += (i ^ c & (l ^ i)) + y[4] - 176418897, o = (o << 7 | o >>> 25) + c << 0, i += (l ^ o & (c ^ l)) + y[5] + 1200080426, i = (i << 12 | i >>> 20) + o << 0, l += (c ^ i & (o ^ c)) + y[6] - 1473231341, l = (l << 17 | l >>> 15) + i << 0, c += (o ^ l & (i ^ o)) + y[7] - 45705983, c = (c << 22 | c >>> 10) + l << 0, o += (i ^ c & (l ^ i)) + y[8] + 1770035416, o = (o << 7 | o >>> 25) + c << 0, i += (l ^ o & (c ^ l)) + y[9] - 1958414417, i = (i << 12 | i >>> 20) + o << 0, l += (c ^ i & (o ^ c)) + y[10] - 42063, l = (l << 17 | l >>> 15) + i << 0, c += (o ^ l & (i ^ o)) + y[11] - 1990404162, c = (c << 22 | c >>> 10) + l << 0, o += (i ^ c & (l ^ i)) + y[12] + 1804603682, o = (o << 7 | o >>> 25) + c << 0, i += (l ^ o & (c ^ l)) + y[13] - 40341101, i = (i << 12 | i >>> 20) + o << 0, l += (c ^ i & (o ^ c)) + y[14] - 1502002290, l = (l << 17 | l >>> 15) + i << 0, c += (o ^ l & (i ^ o)) + y[15] + 1236535329, c = (c << 22 | c >>> 10) + l << 0, o += (l ^ i & (c ^ l)) + y[1] - 165796510, o = (o << 5 | o >>> 27) + c << 0, i += (c ^ l & (o ^ c)) + y[6] - 1069501632, i = (i << 9 | i >>> 23) + o << 0, l += (o ^ c & (i ^ o)) + y[11] + 643717713, l = (l << 14 | l >>> 18) + i << 0, c += (i ^ o & (l ^ i)) + y[0] - 373897302, c = (c << 20 | c >>> 12) + l << 0, o += (l ^ i & (c ^ l)) + y[5] - 701558691, o = (o << 5 | o >>> 27) + c << 0, i += (c ^ l & (o ^ c)) + y[10] + 38016083, i = (i << 9 | i >>> 23) + o << 0, l += (o ^ c & (i ^ o)) + y[15] - 660478335, l = (l << 14 | l >>> 18) + i << 0, c += (i ^ o & (l ^ i)) + y[4] - 405537848, c = (c << 20 | c >>> 12) + l << 0, o += (l ^ i & (c ^ l)) + y[9] + 568446438, o = (o << 5 | o >>> 27) + c << 0, i += (c ^ l & (o ^ c)) + y[14] - 1019803690, i = (i << 9 | i >>> 23) + o << 0, l += (o ^ c & (i ^ o)) + y[3] - 187363961, l = (l << 14 | l >>> 18) + i << 0, c += (i ^ o & (l ^ i)) + y[8] + 1163531501, c = (c << 20 | c >>> 12) + l << 0, o += (l ^ i & (c ^ l)) + y[13] - 1444681467, o = (o << 5 | o >>> 27) + c << 0, i += (c ^ l & (o ^ c)) + y[2] - 51403784, i = (i << 9 | i >>> 23) + o << 0, l += (o ^ c & (i ^ o)) + y[7] + 1735328473, l = (l << 14 | l >>> 18) + i << 0, c += (i ^ o & (l ^ i)) + y[12] - 1926607734, c = (c << 20 | c >>> 12) + l << 0, E = c ^ l, o += (E ^ i) + y[5] - 378558, o = (o << 4 | o >>> 28) + c << 0, i += (E ^ o) + y[8] - 2022574463, i = (i << 11 | i >>> 21) + o << 0, g = i ^ o, l += (g ^ c) + y[11] + 1839030562, l = (l << 16 | l >>> 16) + i << 0, c += (g ^ l) + y[14] - 35309556, c = (c << 23 | c >>> 9) + l << 0, E = c ^ l, o += (E ^ i) + y[1] - 1530992060, o = (o << 4 | o >>> 28) + c << 0, i += (E ^ o) + y[4] + 1272893353, i = (i << 11 | i >>> 21) + o << 0, g = i ^ o, l += (g ^ c) + y[7] - 155497632, l = (l << 16 | l >>> 16) + i << 0, c += (g ^ l) + y[10] - 1094730640, c = (c << 23 | c >>> 9) + l << 0, E = c ^ l, o += (E ^ i) + y[13] + 681279174, o = (o << 4 | o >>> 28) + c << 0, i += (E ^ o) + y[0] - 358537222, i = (i << 11 | i >>> 21) + o << 0, g = i ^ o, l += (g ^ c) + y[3] - 722521979, l = (l << 16 | l >>> 16) + i << 0, c += (g ^ l) + y[6] + 76029189, c = (c << 23 | c >>> 9) + l << 0, E = c ^ l, o += (E ^ i) + y[9] - 640364487, o = (o << 4 | o >>> 28) + c << 0, i += (E ^ o) + y[12] - 421815835, i = (i << 11 | i >>> 21) + o << 0, g = i ^ o, l += (g ^ c) + y[15] + 530742520, l = (l << 16 | l >>> 16) + i << 0, c += (g ^ l) + y[2] - 995338651, c = (c << 23 | c >>> 9) + l << 0, o += (l ^ (c | ~i)) + y[0] - 198630844, o = (o << 6 | o >>> 26) + c << 0, i += (c ^ (o | ~l)) + y[7] + 1126891415, i = (i << 10 | i >>> 22) + o << 0, l += (o ^ (i | ~c)) + y[14] - 1416354905, l = (l << 15 | l >>> 17) + i << 0, c += (i ^ (l | ~o)) + y[5] - 57434055, c = (c << 21 | c >>> 11) + l << 0, o += (l ^ (c | ~i)) + y[12] + 1700485571, o = (o << 6 | o >>> 26) + c << 0, i += (c ^ (o | ~l)) + y[3] - 1894986606, i = (i << 10 | i >>> 22) + o << 0, l += (o ^ (i | ~c)) + y[10] - 1051523, l = (l << 15 | l >>> 17) + i << 0, c += (i ^ (l | ~o)) + y[1] - 2054922799, c = (c << 21 | c >>> 11) + l << 0, o += (l ^ (c | ~i)) + y[8] + 1873313359, o = (o << 6 | o >>> 26) + c << 0, i += (c ^ (o | ~l)) + y[15] - 30611744, i = (i << 10 | i >>> 22) + o << 0, l += (o ^ (i | ~c)) + y[6] - 1560198380, l = (l << 15 | l >>> 17) + i << 0, c += (i ^ (l | ~o)) + y[13] + 1309151649, c = (c << 21 | c >>> 11) + l << 0, o += (l ^ (c | ~i)) + y[4] - 145523070, o = (o << 6 | o >>> 26) + c << 0, i += (c ^ (o | ~l)) + y[11] - 1120210379, i = (i << 10 | i >>> 22) + o << 0, l += (o ^ (i | ~c)) + y[2] + 718787259, l = (l << 15 | l >>> 17) + i << 0, c += (i ^ (l | ~o)) + y[9] - 343485551, c = (c << 21 | c >>> 11) + l << 0, this.first ? (this.h0 = o + 1732584193 << 0, this.h1 = c - 271733879 << 0, this.h2 = l - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + o << 0, this.h1 = this.h1 + c << 0, this.h2 = this.h2 + l << 0, this.h3 = this.h3 + i << 0);
    }, C.prototype.hex = function() {
      this.finalize();
      var o = this.h0, c = this.h1, l = this.h2, i = this.h3;
      return h[o >>> 4 & 15] + h[o & 15] + h[o >>> 12 & 15] + h[o >>> 8 & 15] + h[o >>> 20 & 15] + h[o >>> 16 & 15] + h[o >>> 28 & 15] + h[o >>> 24 & 15] + h[c >>> 4 & 15] + h[c & 15] + h[c >>> 12 & 15] + h[c >>> 8 & 15] + h[c >>> 20 & 15] + h[c >>> 16 & 15] + h[c >>> 28 & 15] + h[c >>> 24 & 15] + h[l >>> 4 & 15] + h[l & 15] + h[l >>> 12 & 15] + h[l >>> 8 & 15] + h[l >>> 20 & 15] + h[l >>> 16 & 15] + h[l >>> 28 & 15] + h[l >>> 24 & 15] + h[i >>> 4 & 15] + h[i & 15] + h[i >>> 12 & 15] + h[i >>> 8 & 15] + h[i >>> 20 & 15] + h[i >>> 16 & 15] + h[i >>> 28 & 15] + h[i >>> 24 & 15];
    }, C.prototype.toString = C.prototype.hex, C.prototype.digest = function() {
      this.finalize();
      var o = this.h0, c = this.h1, l = this.h2, i = this.h3;
      return [
        o & 255,
        o >>> 8 & 255,
        o >>> 16 & 255,
        o >>> 24 & 255,
        c & 255,
        c >>> 8 & 255,
        c >>> 16 & 255,
        c >>> 24 & 255,
        l & 255,
        l >>> 8 & 255,
        l >>> 16 & 255,
        l >>> 24 & 255,
        i & 255,
        i >>> 8 & 255,
        i >>> 16 & 255,
        i >>> 24 & 255
      ];
    }, C.prototype.array = C.prototype.digest, C.prototype.arrayBuffer = function() {
      this.finalize();
      var o = new ArrayBuffer(16), c = new Uint32Array(o);
      return c[0] = this.h0, c[1] = this.h1, c[2] = this.h2, c[3] = this.h3, o;
    }, C.prototype.buffer = C.prototype.arrayBuffer, C.prototype.base64 = function() {
      for (var o, c, l, i = "", E = this.array(), g = 0; g < 15; )
        o = E[g++], c = E[g++], l = E[g++], i += O[o >>> 2] + O[(o << 4 | c >>> 4) & 63] + O[(c << 2 | l >>> 6) & 63] + O[l & 63];
      return o = E[g], i += O[o >>> 2] + O[o << 4 & 63] + "==", i;
    };
    function te(o, c) {
      var l, i = P(o);
      if (o = i[0], i[1]) {
        var E = [], g = o.length, y = 0, x;
        for (l = 0; l < g; ++l)
          x = o.charCodeAt(l), x < 128 ? E[y++] = x : x < 2048 ? (E[y++] = 192 | x >>> 6, E[y++] = 128 | x & 63) : x < 55296 || x >= 57344 ? (E[y++] = 224 | x >>> 12, E[y++] = 128 | x >>> 6 & 63, E[y++] = 128 | x & 63) : (x = 65536 + ((x & 1023) << 10 | o.charCodeAt(++l) & 1023), E[y++] = 240 | x >>> 18, E[y++] = 128 | x >>> 12 & 63, E[y++] = 128 | x >>> 6 & 63, E[y++] = 128 | x & 63);
        o = E;
      }
      o.length > 64 && (o = new C(!0).update(o).array());
      var B = [], Fe = [];
      for (l = 0; l < 64; ++l) {
        var _e = o[l] || 0;
        B[l] = 92 ^ _e, Fe[l] = 54 ^ _e;
      }
      C.call(this, c), this.update(Fe), this.oKeyPad = B, this.inner = !0, this.sharedMemory = c;
    }
    te.prototype = new C(), te.prototype.finalize = function() {
      if (C.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var o = this.array();
        C.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(o), C.prototype.finalize.call(this);
      }
    };
    var Q = N();
    Q.md5 = Q, Q.md5.hmac = J(), f ? t.exports = Q : s.md5 = Q;
  })();
})($e);
var Rt = $e.exports;
const At = /* @__PURE__ */ bt(Rt);
function He(t, e) {
  const r = Tt(t, e);
  return At(r).toUpperCase();
}
function Re(t, e) {
  return He(t, e);
}
function Tt(t, e) {
  const r = {};
  Object.keys(t).forEach((a) => {
    const u = t[a];
    u != null && u !== "" && (r[a] = String(u));
  });
  const n = Object.keys(r).sort();
  let s = "";
  return n.forEach((a) => {
    s += a + r[a];
  }), e + s + e;
}
function Ot(t, e) {
  const { sign: r, ...n } = t, s = Re(n, e);
  return r === s;
}
function Ve(t, e) {
  const r = { ...t };
  return r.sign = Re(r, e), r;
}
function Ft() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function Je(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: _t } = Object.prototype, { getPrototypeOf: Ae } = Object, { iterator: ae, toStringTag: We } = Symbol, ue = /* @__PURE__ */ ((t) => (e) => {
  const r = _t.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (t) => (t = t.toLowerCase(), (e) => ue(e) === t), ce = (t) => (e) => typeof e === t, { isArray: W } = Array, X = ce("undefined");
function Ct(t) {
  return t !== null && !X(t) && t.constructor !== null && !X(t.constructor) && U(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ke = j("ArrayBuffer");
function Pt(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ke(t.buffer), e;
}
const Dt = ce("string"), U = ce("function"), Qe = ce("number"), le = (t) => t !== null && typeof t == "object", Nt = (t) => t === !0 || t === !1, re = (t) => {
  if (ue(t) !== "object")
    return !1;
  const e = Ae(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(We in t) && !(ae in t);
}, vt = j("Date"), Bt = j("File"), Ut = j("Blob"), Lt = j("FileList"), kt = (t) => le(t) && U(t.pipe), jt = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || U(t.append) && ((e = ue(t)) === "formdata" || // detect form-data instance
  e === "object" && U(t.toString) && t.toString() === "[object FormData]"));
}, Mt = j("URLSearchParams"), [It, qt, zt, $t] = ["ReadableStream", "Request", "Response", "Headers"].map(j), Ht = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Y(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, s;
  if (typeof t != "object" && (t = [t]), W(t))
    for (n = 0, s = t.length; n < s; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), u = a.length;
    let f;
    for (n = 0; n < u; n++)
      f = a[n], e.call(null, t[f], f, t);
  }
}
function Ge(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], e === s.toLowerCase())
      return s;
  return null;
}
const $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xe = (t) => !X(t) && t !== $;
function ge() {
  const { caseless: t } = Xe(this) && this || {}, e = {}, r = (n, s) => {
    const a = t && Ge(e, s) || s;
    re(e[a]) && re(n) ? e[a] = ge(e[a], n) : re(n) ? e[a] = ge({}, n) : W(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Y(arguments[n], r);
  return e;
}
const Vt = (t, e, r, { allOwnKeys: n } = {}) => (Y(e, (s, a) => {
  r && U(s) ? t[a] = Je(s, r) : t[a] = s;
}, { allOwnKeys: n }), t), Jt = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Wt = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Kt = (t, e, r, n) => {
  let s, a, u;
  const f = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      u = s[a], (!n || n(u, t, e)) && !f[u] && (e[u] = t[u], f[u] = !0);
    t = r !== !1 && Ae(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Qt = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Gt = (t) => {
  if (!t) return null;
  if (W(t)) return t;
  let e = t.length;
  if (!Qe(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Xt = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ae(Uint8Array)), Yt = (t, e) => {
  const n = (t && t[ae]).call(t);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    e.call(t, a[0], a[1]);
  }
}, Zt = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, er = j("HTMLFormElement"), tr = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Pe = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), rr = j("RegExp"), Ye = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Y(r, (s, a) => {
    let u;
    (u = e(s, a, t)) !== !1 && (n[a] = u || s);
  }), Object.defineProperties(t, n);
}, nr = (t) => {
  Ye(t, (e, r) => {
    if (U(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (U(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, sr = (t, e) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return W(t) ? n(t) : n(String(t).split(e)), r;
}, or = () => {
}, ir = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function ar(t) {
  return !!(t && U(t.append) && t[We] === "FormData" && t[ae]);
}
const ur = (t) => {
  const e = new Array(10), r = (n, s) => {
    if (le(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const a = W(n) ? [] : {};
        return Y(n, (u, f) => {
          const m = r(u, s + 1);
          !X(m) && (a[f] = m);
        }), e[s] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, cr = j("AsyncFunction"), lr = (t) => t && (le(t) || U(t)) && U(t.then) && U(t.catch), Ze = ((t, e) => t ? setImmediate : e ? ((r, n) => ($.addEventListener("message", ({ source: s, data: a }) => {
  s === $ && a === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), $.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  U($.postMessage)
), fr = typeof queueMicrotask < "u" ? queueMicrotask.bind($) : typeof process < "u" && process.nextTick || Ze, dr = (t) => t != null && U(t[ae]), d = {
  isArray: W,
  isArrayBuffer: Ke,
  isBuffer: Ct,
  isFormData: jt,
  isArrayBufferView: Pt,
  isString: Dt,
  isNumber: Qe,
  isBoolean: Nt,
  isObject: le,
  isPlainObject: re,
  isReadableStream: It,
  isRequest: qt,
  isResponse: zt,
  isHeaders: $t,
  isUndefined: X,
  isDate: vt,
  isFile: Bt,
  isBlob: Ut,
  isRegExp: rr,
  isFunction: U,
  isStream: kt,
  isURLSearchParams: Mt,
  isTypedArray: Xt,
  isFileList: Lt,
  forEach: Y,
  merge: ge,
  extend: Vt,
  trim: Ht,
  stripBOM: Jt,
  inherits: Wt,
  toFlatObject: Kt,
  kindOf: ue,
  kindOfTest: j,
  endsWith: Qt,
  toArray: Gt,
  forEachEntry: Yt,
  matchAll: Zt,
  isHTMLForm: er,
  hasOwnProperty: Pe,
  hasOwnProp: Pe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ye,
  freezeMethods: nr,
  toObjectSet: sr,
  toCamelCase: tr,
  noop: or,
  toFiniteNumber: ir,
  findKey: Ge,
  global: $,
  isContextDefined: Xe,
  isSpecCompliantForm: ar,
  toJSONObject: ur,
  isAsyncFn: cr,
  isThenable: lr,
  setImmediate: Ze,
  asap: fr,
  isIterable: dr
};
function A(t, e, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
d.inherits(A, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const et = A.prototype, tt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  tt[t] = { value: t };
});
Object.defineProperties(A, tt);
Object.defineProperty(et, "isAxiosError", { value: !0 });
A.from = (t, e, r, n, s, a) => {
  const u = Object.create(et);
  return d.toFlatObject(t, u, function(m) {
    return m !== Error.prototype;
  }, (f) => f !== "isAxiosError"), A.call(u, t.message, e, r, n, s), u.cause = t, u.name = t.name, a && Object.assign(u, a), u;
};
const hr = null;
function we(t) {
  return d.isPlainObject(t) || d.isArray(t);
}
function rt(t) {
  return d.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function De(t, e, r) {
  return t ? t.concat(e).map(function(s, a) {
    return s = rt(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : e;
}
function pr(t) {
  return d.isArray(t) && !t.some(we);
}
const mr = d.toFlatObject(d, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function fe(t, e, r) {
  if (!d.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, S) {
    return !d.isUndefined(S[R]);
  });
  const n = r.metaTokens, s = r.visitor || p, a = r.dots, u = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(e);
  if (!d.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null) return "";
    if (d.isDate(w))
      return w.toISOString();
    if (!m && d.isBlob(w))
      throw new A("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(w) || d.isTypedArray(w) ? m && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function p(w, R, S) {
    let F = w;
    if (w && !S && typeof w == "object") {
      if (d.endsWith(R, "{}"))
        R = n ? R : R.slice(0, -2), w = JSON.stringify(w);
      else if (d.isArray(w) && pr(w) || (d.isFileList(w) || d.endsWith(R, "[]")) && (F = d.toArray(w)))
        return R = rt(R), F.forEach(function(P, k) {
          !(d.isUndefined(P) || P === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? De([R], k, a) : u === null ? R : R + "[]",
            h(P)
          );
        }), !1;
    }
    return we(w) ? !0 : (e.append(De(S, R, a), h(w)), !1);
  }
  const b = [], T = Object.assign(mr, {
    defaultVisitor: p,
    convertValue: h,
    isVisitable: we
  });
  function O(w, R) {
    if (!d.isUndefined(w)) {
      if (b.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      b.push(w), d.forEach(w, function(F, _) {
        (!(d.isUndefined(F) || F === null) && s.call(
          e,
          F,
          d.isString(_) ? _.trim() : _,
          R,
          T
        )) === !0 && O(F, R ? R.concat(_) : [_]);
      }), b.pop();
    }
  }
  if (!d.isObject(t))
    throw new TypeError("data must be an object");
  return O(t), e;
}
function Ne(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function Te(t, e) {
  this._pairs = [], t && fe(t, this, e);
}
const nt = Te.prototype;
nt.append = function(e, r) {
  this._pairs.push([e, r]);
};
nt.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Ne);
  } : Ne;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function yr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function st(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || yr;
  d.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let a;
  if (s ? a = s(e, r) : a = d.isURLSearchParams(e) ? e.toString() : new Te(e, r).toString(n), a) {
    const u = t.indexOf("#");
    u !== -1 && (t = t.slice(0, u)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class ve {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    d.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const ot = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gr = typeof URLSearchParams < "u" ? URLSearchParams : Te, wr = typeof FormData < "u" ? FormData : null, br = typeof Blob < "u" ? Blob : null, Sr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gr,
    FormData: wr,
    Blob: br
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Oe = typeof window < "u" && typeof document < "u", be = typeof navigator == "object" && navigator || void 0, Er = Oe && (!be || ["ReactNative", "NativeScript", "NS"].indexOf(be.product) < 0), xr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Rr = Oe && window.location.href || "http://localhost", Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Oe,
  hasStandardBrowserEnv: Er,
  hasStandardBrowserWebWorkerEnv: xr,
  navigator: be,
  origin: Rr
}, Symbol.toStringTag, { value: "Module" })), v = {
  ...Ar,
  ...Sr
};
function Tr(t, e) {
  return fe(t, new v.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return v.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Or(t) {
  return d.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Fr(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function it(t) {
  function e(r, n, s, a) {
    let u = r[a++];
    if (u === "__proto__") return !0;
    const f = Number.isFinite(+u), m = a >= r.length;
    return u = !u && d.isArray(s) ? s.length : u, m ? (d.hasOwnProp(s, u) ? s[u] = [s[u], n] : s[u] = n, !f) : ((!s[u] || !d.isObject(s[u])) && (s[u] = []), e(r, n, s[u], a) && d.isArray(s[u]) && (s[u] = Fr(s[u])), !f);
  }
  if (d.isFormData(t) && d.isFunction(t.entries)) {
    const r = {};
    return d.forEachEntry(t, (n, s) => {
      e(Or(n), s, r, 0);
    }), r;
  }
  return null;
}
function _r(t, e, r) {
  if (d.isString(t))
    try {
      return (e || JSON.parse)(t), d.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Z = {
  transitional: ot,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = d.isObject(e);
    if (a && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))
      return s ? JSON.stringify(it(e)) : e;
    if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e) || d.isReadableStream(e))
      return e;
    if (d.isArrayBufferView(e))
      return e.buffer;
    if (d.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let f;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Tr(e, this.formSerializer).toString();
      if ((f = d.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return fe(
          f ? { "files[]": e } : e,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), _r(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Z.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (d.isResponse(e) || d.isReadableStream(e))
      return e;
    if (e && d.isString(e) && (n && !this.responseType || s)) {
      const u = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (f) {
        if (u)
          throw f.name === "SyntaxError" ? A.from(f, A.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: v.classes.FormData,
    Blob: v.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Z.headers[t] = {};
});
const Cr = d.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Pr = (t) => {
  const e = {};
  let r, n, s;
  return t && t.split(`
`).forEach(function(u) {
    s = u.indexOf(":"), r = u.substring(0, s).trim().toLowerCase(), n = u.substring(s + 1).trim(), !(!r || e[r] && Cr[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Be = Symbol("internals");
function G(t) {
  return t && String(t).trim().toLowerCase();
}
function ne(t) {
  return t === !1 || t == null ? t : d.isArray(t) ? t.map(ne) : String(t);
}
function Dr(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Nr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function pe(t, e, r, n, s) {
  if (d.isFunction(n))
    return n.call(this, e, r);
  if (s && (e = r), !!d.isString(e)) {
    if (d.isString(n))
      return e.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(e);
  }
}
function vr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Br(t, e) {
  const r = d.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(s, a, u) {
        return this[n].call(this, e, s, a, u);
      },
      configurable: !0
    });
  });
}
let L = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const s = this;
    function a(f, m, h) {
      const p = G(m);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const b = d.findKey(s, p);
      (!b || s[b] === void 0 || h === !0 || h === void 0 && s[b] !== !1) && (s[b || m] = ne(f));
    }
    const u = (f, m) => d.forEach(f, (h, p) => a(h, p, m));
    if (d.isPlainObject(e) || e instanceof this.constructor)
      u(e, r);
    else if (d.isString(e) && (e = e.trim()) && !Nr(e))
      u(Pr(e), r);
    else if (d.isObject(e) && d.isIterable(e)) {
      let f = {}, m, h;
      for (const p of e) {
        if (!d.isArray(p))
          throw TypeError("Object iterator must return a key-value pair");
        f[h = p[0]] = (m = f[h]) ? d.isArray(m) ? [...m, p[1]] : [m, p[1]] : p[1];
      }
      u(f, r);
    } else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = G(e), e) {
      const n = d.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Dr(s);
        if (d.isFunction(r))
          return r.call(this, s, n);
        if (d.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = G(e), e) {
      const n = d.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || pe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let s = !1;
    function a(u) {
      if (u = G(u), u) {
        const f = d.findKey(n, u);
        f && (!r || pe(n, n[f], f, r)) && (delete n[f], s = !0);
      }
    }
    return d.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || pe(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const r = this, n = {};
    return d.forEach(this, (s, a) => {
      const u = d.findKey(n, a);
      if (u) {
        r[u] = ne(s), delete r[a];
        return;
      }
      const f = e ? vr(a) : String(a).trim();
      f !== a && delete r[a], r[f] = ne(s), n[f] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = e && d.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[Be] = this[Be] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(u) {
      const f = G(u);
      n[f] || (Br(s, u), n[f] = !0);
    }
    return d.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(L.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(L);
function me(t, e) {
  const r = this || Z, n = e || r, s = L.from(n.headers);
  let a = n.data;
  return d.forEach(t, function(f) {
    a = f.call(r, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function at(t) {
  return !!(t && t.__CANCEL__);
}
function K(t, e, r) {
  A.call(this, t ?? "canceled", A.ERR_CANCELED, e, r), this.name = "CanceledError";
}
d.inherits(K, A, {
  __CANCEL__: !0
});
function ut(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new A(
    "Request failed with status code " + r.status,
    [A.ERR_BAD_REQUEST, A.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ur(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Lr(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let s = 0, a = 0, u;
  return e = e !== void 0 ? e : 1e3, function(m) {
    const h = Date.now(), p = n[a];
    u || (u = h), r[s] = m, n[s] = h;
    let b = a, T = 0;
    for (; b !== s; )
      T += r[b++], b = b % t;
    if (s = (s + 1) % t, s === a && (a = (a + 1) % t), h - u < e)
      return;
    const O = p && h - p;
    return O ? Math.round(T * 1e3 / O) : void 0;
  };
}
function kr(t, e) {
  let r = 0, n = 1e3 / e, s, a;
  const u = (h, p = Date.now()) => {
    r = p, s = null, a && (clearTimeout(a), a = null), t.apply(null, h);
  };
  return [(...h) => {
    const p = Date.now(), b = p - r;
    b >= n ? u(h, p) : (s = h, a || (a = setTimeout(() => {
      a = null, u(s);
    }, n - b)));
  }, () => s && u(s)];
}
const oe = (t, e, r = 3) => {
  let n = 0;
  const s = Lr(50, 250);
  return kr((a) => {
    const u = a.loaded, f = a.lengthComputable ? a.total : void 0, m = u - n, h = s(m), p = u <= f;
    n = u;
    const b = {
      loaded: u,
      total: f,
      progress: f ? u / f : void 0,
      bytes: m,
      rate: h || void 0,
      estimated: h && f && p ? (f - u) / h : void 0,
      event: a,
      lengthComputable: f != null,
      [e ? "download" : "upload"]: !0
    };
    t(b);
  }, r);
}, Ue = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Le = (t) => (...e) => d.asap(() => t(...e)), jr = v.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, v.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(v.origin),
  v.navigator && /(msie|trident)/i.test(v.navigator.userAgent)
) : () => !0, Mr = v.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, s, a) {
      const u = [t + "=" + encodeURIComponent(e)];
      d.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()), d.isString(n) && u.push("path=" + n), d.isString(s) && u.push("domain=" + s), a === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ir(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function qr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ct(t, e, r) {
  let n = !Ir(e);
  return t && (n || r == !1) ? qr(t, e) : e;
}
const ke = (t) => t instanceof L ? { ...t } : t;
function V(t, e) {
  e = e || {};
  const r = {};
  function n(h, p, b, T) {
    return d.isPlainObject(h) && d.isPlainObject(p) ? d.merge.call({ caseless: T }, h, p) : d.isPlainObject(p) ? d.merge({}, p) : d.isArray(p) ? p.slice() : p;
  }
  function s(h, p, b, T) {
    if (d.isUndefined(p)) {
      if (!d.isUndefined(h))
        return n(void 0, h, b, T);
    } else return n(h, p, b, T);
  }
  function a(h, p) {
    if (!d.isUndefined(p))
      return n(void 0, p);
  }
  function u(h, p) {
    if (d.isUndefined(p)) {
      if (!d.isUndefined(h))
        return n(void 0, h);
    } else return n(void 0, p);
  }
  function f(h, p, b) {
    if (b in e)
      return n(h, p);
    if (b in t)
      return n(void 0, h);
  }
  const m = {
    url: a,
    method: a,
    data: a,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: f,
    headers: (h, p, b) => s(ke(h), ke(p), b, !0)
  };
  return d.forEach(Object.keys(Object.assign({}, t, e)), function(p) {
    const b = m[p] || s, T = b(t[p], e[p], p);
    d.isUndefined(T) && b !== f || (r[p] = T);
  }), r;
}
const lt = (t) => {
  const e = V({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: u, auth: f } = e;
  e.headers = u = L.from(u), e.url = st(ct(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), f && u.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))
  );
  let m;
  if (d.isFormData(r)) {
    if (v.hasStandardBrowserEnv || v.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((m = u.getContentType()) !== !1) {
      const [h, ...p] = m ? m.split(";").map((b) => b.trim()).filter(Boolean) : [];
      u.setContentType([h || "multipart/form-data", ...p].join("; "));
    }
  }
  if (v.hasStandardBrowserEnv && (n && d.isFunction(n) && (n = n(e)), n || n !== !1 && jr(e.url))) {
    const h = s && a && Mr.read(a);
    h && u.set(s, h);
  }
  return e;
}, zr = typeof XMLHttpRequest < "u", $r = zr && function(t) {
  return new Promise(function(r, n) {
    const s = lt(t);
    let a = s.data;
    const u = L.from(s.headers).normalize();
    let { responseType: f, onUploadProgress: m, onDownloadProgress: h } = s, p, b, T, O, w;
    function R() {
      O && O(), w && w(), s.cancelToken && s.cancelToken.unsubscribe(p), s.signal && s.signal.removeEventListener("abort", p);
    }
    let S = new XMLHttpRequest();
    S.open(s.method.toUpperCase(), s.url, !0), S.timeout = s.timeout;
    function F() {
      if (!S)
        return;
      const P = L.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), N = {
        data: !f || f === "text" || f === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: P,
        config: t,
        request: S
      };
      ut(function(I) {
        r(I), R();
      }, function(I) {
        n(I), R();
      }, N), S = null;
    }
    "onloadend" in S ? S.onloadend = F : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(F);
    }, S.onabort = function() {
      S && (n(new A("Request aborted", A.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new A("Network Error", A.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || ot;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), n(new A(
        k,
        N.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
        t,
        S
      )), S = null;
    }, a === void 0 && u.setContentType(null), "setRequestHeader" in S && d.forEach(u.toJSON(), function(k, N) {
      S.setRequestHeader(N, k);
    }), d.isUndefined(s.withCredentials) || (S.withCredentials = !!s.withCredentials), f && f !== "json" && (S.responseType = s.responseType), h && ([T, w] = oe(h, !0), S.addEventListener("progress", T)), m && S.upload && ([b, O] = oe(m), S.upload.addEventListener("progress", b), S.upload.addEventListener("loadend", O)), (s.cancelToken || s.signal) && (p = (P) => {
      S && (n(!P || P.type ? new K(null, t, S) : P), S.abort(), S = null);
    }, s.cancelToken && s.cancelToken.subscribe(p), s.signal && (s.signal.aborted ? p() : s.signal.addEventListener("abort", p)));
    const _ = Ur(s.url);
    if (_ && v.protocols.indexOf(_) === -1) {
      n(new A("Unsupported protocol " + _ + ":", A.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(a || null);
  });
}, Hr = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), s;
    const a = function(h) {
      if (!s) {
        s = !0, f();
        const p = h instanceof Error ? h : this.reason;
        n.abort(p instanceof A ? p : new K(p instanceof Error ? p.message : p));
      }
    };
    let u = e && setTimeout(() => {
      u = null, a(new A(`timeout ${e} of ms exceeded`, A.ETIMEDOUT));
    }, e);
    const f = () => {
      t && (u && clearTimeout(u), u = null, t.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(a) : h.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((h) => h.addEventListener("abort", a));
    const { signal: m } = n;
    return m.unsubscribe = () => d.asap(f), m;
  }
}, Vr = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + e, yield t.slice(n, s), n = s;
}, Jr = async function* (t, e) {
  for await (const r of Wr(t))
    yield* Vr(r, e);
}, Wr = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, je = (t, e, r, n) => {
  const s = Jr(t, e);
  let a = 0, u, f = (m) => {
    u || (u = !0, n && n(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: h, value: p } = await s.next();
        if (h) {
          f(), m.close();
          return;
        }
        let b = p.byteLength;
        if (r) {
          let T = a += b;
          r(T);
        }
        m.enqueue(new Uint8Array(p));
      } catch (h) {
        throw f(h), h;
      }
    },
    cancel(m) {
      return f(m), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, de = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ft = de && typeof ReadableStream == "function", Kr = de && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), dt = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Qr = ft && dt(() => {
  let t = !1;
  const e = new Request(v.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Me = 64 * 1024, Se = ft && dt(() => d.isReadableStream(new Response("").body)), ie = {
  stream: Se && ((t) => t.body)
};
de && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !ie[e] && (ie[e] = d.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new A(`Response type '${e}' is not supported`, A.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Gr = async (t) => {
  if (t == null)
    return 0;
  if (d.isBlob(t))
    return t.size;
  if (d.isSpecCompliantForm(t))
    return (await new Request(v.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (d.isArrayBufferView(t) || d.isArrayBuffer(t))
    return t.byteLength;
  if (d.isURLSearchParams(t) && (t = t + ""), d.isString(t))
    return (await Kr(t)).byteLength;
}, Xr = async (t, e) => {
  const r = d.toFiniteNumber(t.getContentLength());
  return r ?? Gr(e);
}, Yr = de && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: s,
    cancelToken: a,
    timeout: u,
    onDownloadProgress: f,
    onUploadProgress: m,
    responseType: h,
    headers: p,
    withCredentials: b = "same-origin",
    fetchOptions: T
  } = lt(t);
  h = h ? (h + "").toLowerCase() : "text";
  let O = Hr([s, a && a.toAbortSignal()], u), w;
  const R = O && O.unsubscribe && (() => {
    O.unsubscribe();
  });
  let S;
  try {
    if (m && Qr && r !== "get" && r !== "head" && (S = await Xr(p, n)) !== 0) {
      let N = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), M;
      if (d.isFormData(n) && (M = N.headers.get("content-type")) && p.setContentType(M), N.body) {
        const [I, J] = Ue(
          S,
          oe(Le(m))
        );
        n = je(N.body, Me, I, J);
      }
    }
    d.isString(b) || (b = b ? "include" : "omit");
    const F = "credentials" in Request.prototype;
    w = new Request(e, {
      ...T,
      signal: O,
      method: r.toUpperCase(),
      headers: p.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: F ? b : void 0
    });
    let _ = await fetch(w);
    const P = Se && (h === "stream" || h === "response");
    if (Se && (f || P && R)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((C) => {
        N[C] = _[C];
      });
      const M = d.toFiniteNumber(_.headers.get("content-length")), [I, J] = f && Ue(
        M,
        oe(Le(f), !0)
      ) || [];
      _ = new Response(
        je(_.body, Me, I, () => {
          J && J(), R && R();
        }),
        N
      );
    }
    h = h || "text";
    let k = await ie[d.findKey(ie, h) || "text"](_, t);
    return !P && R && R(), await new Promise((N, M) => {
      ut(N, M, {
        data: k,
        headers: L.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: t,
        request: w
      });
    });
  } catch (F) {
    throw R && R(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
      new A("Network Error", A.ERR_NETWORK, t, w),
      {
        cause: F.cause || F
      }
    ) : A.from(F, F && F.code, t, w);
  }
}), Ee = {
  http: hr,
  xhr: $r,
  fetch: Yr
};
d.forEach(Ee, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ie = (t) => `- ${t}`, Zr = (t) => d.isFunction(t) || t === null || t === !1, ht = {
  getAdapter: (t) => {
    t = d.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const s = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let u;
      if (n = r, !Zr(r) && (n = Ee[(u = String(r)).toLowerCase()], n === void 0))
        throw new A(`Unknown adapter '${u}'`);
      if (n)
        break;
      s[u || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([f, m]) => `adapter ${f} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = e ? a.length > 1 ? `since :
` + a.map(Ie).join(`
`) : " " + Ie(a[0]) : "as no adapter specified";
      throw new A(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ee
};
function ye(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new K(null, t);
}
function qe(t) {
  return ye(t), t.headers = L.from(t.headers), t.data = me.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ht.getAdapter(t.adapter || Z.adapter)(t).then(function(n) {
    return ye(t), n.data = me.call(
      t,
      t.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return at(n) || (ye(t), n && n.response && (n.response.data = me.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const pt = "1.9.0", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  he[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ze = {};
he.transitional = function(e, r, n) {
  function s(a, u) {
    return "[Axios v" + pt + "] Transitional option '" + a + "'" + u + (n ? ". " + n : "");
  }
  return (a, u, f) => {
    if (e === !1)
      throw new A(
        s(u, " has been removed" + (r ? " in " + r : "")),
        A.ERR_DEPRECATED
      );
    return r && !ze[u] && (ze[u] = !0, console.warn(
      s(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, u, f) : !0;
  };
};
he.spelling = function(e) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function en(t, e, r) {
  if (typeof t != "object")
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], u = e[a];
    if (u) {
      const f = t[a], m = f === void 0 || u(f, a, t);
      if (m !== !0)
        throw new A("option " + a + " must be " + m, A.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new A("Unknown option " + a, A.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: en,
  validators: he
}, q = se.validators;
let H = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new ve(),
      response: new ve()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = V(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && se.assertOptions(n, {
      silentJSONParsing: q.transitional(q.boolean),
      forcedJSONParsing: q.transitional(q.boolean),
      clarifyTimeoutError: q.transitional(q.boolean)
    }, !1), s != null && (d.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: q.function,
      serialize: q.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), se.assertOptions(r, {
      baseUrl: q.spelling("baseURL"),
      withXsrfToken: q.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let u = a && d.merge(
      a.common,
      a[r.method]
    );
    a && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete a[w];
      }
    ), r.headers = L.concat(u, a);
    const f = [];
    let m = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(r) === !1 || (m = m && R.synchronous, f.unshift(R.fulfilled, R.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(R) {
      h.push(R.fulfilled, R.rejected);
    });
    let p, b = 0, T;
    if (!m) {
      const w = [qe.bind(this), void 0];
      for (w.unshift.apply(w, f), w.push.apply(w, h), T = w.length, p = Promise.resolve(r); b < T; )
        p = p.then(w[b++], w[b++]);
      return p;
    }
    T = f.length;
    let O = r;
    for (b = 0; b < T; ) {
      const w = f[b++], R = f[b++];
      try {
        O = w(O);
      } catch (S) {
        R.call(this, S);
        break;
      }
    }
    try {
      p = qe.call(this, O);
    } catch (w) {
      return Promise.reject(w);
    }
    for (b = 0, T = h.length; b < T; )
      p = p.then(h[b++], h[b++]);
    return p;
  }
  getUri(e) {
    e = V(this.defaults, e);
    const r = ct(e.baseURL, e.url, e.allowAbsoluteUrls);
    return st(r, e.params, e.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(e) {
  H.prototype[e] = function(r, n) {
    return this.request(V(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, u, f) {
      return this.request(V(f || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: u
      }));
    };
  }
  H.prototype[e] = r(), H.prototype[e + "Form"] = r(!0);
});
let tn = class mt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const u = new Promise((f) => {
        n.subscribe(f), a = f;
      }).then(s);
      return u.cancel = function() {
        n.unsubscribe(a);
      }, u;
    }, e(function(a, u, f) {
      n.reason || (n.reason = new K(a, u, f), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new mt(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function rn(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function nn(t) {
  return d.isObject(t) && t.isAxiosError === !0;
}
const xe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(xe).forEach(([t, e]) => {
  xe[e] = t;
});
function yt(t) {
  const e = new H(t), r = Je(H.prototype.request, e);
  return d.extend(r, H.prototype, e, { allOwnKeys: !0 }), d.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(s) {
    return yt(V(t, s));
  }, r;
}
const D = yt(Z);
D.Axios = H;
D.CanceledError = K;
D.CancelToken = tn;
D.isCancel = at;
D.VERSION = pt;
D.toFormData = fe;
D.AxiosError = A;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = rn;
D.isAxiosError = nn;
D.mergeConfig = V;
D.AxiosHeaders = L;
D.formToJSON = (t) => it(d.isHTMLForm(t) ? new FormData(t) : t);
D.getAdapter = ht.getAdapter;
D.HttpStatusCode = xe;
D.default = D;
const {
  Axios: yn,
  AxiosError: gn,
  CanceledError: wn,
  isCancel: bn,
  CancelToken: Sn,
  VERSION: En,
  all: xn,
  Cancel: Rn,
  isAxiosError: An,
  spread: Tn,
  toFormData: On,
  AxiosHeaders: Fn,
  HttpStatusCode: _n,
  formToJSON: Cn,
  getAdapter: Pn,
  mergeConfig: Dn
} = D, sn = {
  baseURL: "https://api.polyv.net/ai-public",
  timeout: 1e4,
  signatureMethod: "MD5"
};
class ee {
  /**
   * 构造函数
   * @param {Object} config - 配置对象
   * @param {string} [config.appId] - 应用ID
   * @param {string} [config.appSecret] - 应用密钥
   * @param {Function} [config.getSignature] - 获取签名的函数，参数为请求参数对象，返回包含签名的参数对象
   * @param {string} [config.baseURL] - API基础URL
   * @param {number} [config.timeout] - 请求超时时间（毫秒）
   * @param {string} [config.signatureMethod] - 签名方法 'MD5'
   */
  constructor(e) {
    if (!e)
      throw new Error("配置对象是必需的");
    if (!e.getSignature && (!e.appId || !e.appSecret))
      throw new Error("必须提供 getSignature 函数或者 appId 和 appSecret");
    this.config = {
      ...sn,
      ...e
    }, this.httpClient = D.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        "Content-Type": "application/json"
      }
    }), this.httpClient.interceptors.response.use(
      (r) => r.data,
      (r) => {
        var s, a;
        const n = {
          message: r.message,
          status: "fail",
          code: ((s = r.response) == null ? void 0 : s.status) || 500,
          data: null
        };
        return (a = r.response) != null && a.data ? Promise.resolve(r.response.data) : Promise.resolve(n);
      }
    );
  }
  /**
   * 构建请求参数（添加签名）
   * @param {Object} params - 请求参数
   * @returns {Promise<Object>} 包含签名的参数对象
   */
  async buildRequestParams(e) {
    if (e.appId = e.appId || this.config.appId, e.timestamp = e.timestamp || Date.now(), this.config.getSignature && typeof this.config.getSignature == "function")
      try {
        const n = await this.config.getSignature(e);
        return {
          ...e,
          sign: n
        };
      } catch (n) {
        throw new Error(`获取签名失败: ${n.message}, 参数: ${JSON.stringify(e)}`);
      }
    const r = {
      ...e
    };
    return Ve(r, this.config.appSecret, this.config.signatureMethod);
  }
  /**
   * 公共参数验证
   * @private
   */
  _validateCommonParams(e) {
    return !e || !e.vid ? {
      message: "vid 参数是必需的",
      status: "fail",
      code: 400,
      data: null
    } : null;
  }
  /**
   * 公共处理生成中状态
   * @private
   */
  _handleGeneratingStatus(e, r) {
    if (e && typeof e == "object") {
      const { status: n, code: s, message: a } = e, u = /生成中|正在生成|processing/i.test(a || "");
      if ((s === 400 || s === 500) && u)
        return {
          message: a || r,
          status: "processing",
          code: s,
          data: null
        };
      if (n === "error")
        return {
          message: a || "请求失败",
          status: "fail",
          code: s || 500,
          data: null
        };
    }
    return null;
  }
  /**
   * 创建错误响应
   * @private
   */
  _createErrorResponse(e, r = 500) {
    return {
      message: e || "请求失败",
      status: "fail",
      code: r,
      data: null
    };
  }
  /**
   * 构建基础请求参数
   * @private
   */
  async _buildBaseParams(e, r, n = {}) {
    const s = {
      vid: e,
      timestamp: Date.now(),
      ...r !== void 0 && { appId: r },
      ...n
    };
    return await this.buildRequestParams(s);
  }
  /**
   * 根据视频ID获取推荐问题
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应
   */
  async getSuggestQuestionsByVid(e) {
    const r = this._validateCommonParams(e);
    if (r)
      return r;
    const { vid: n, size: s, appId: a } = e;
    try {
      const u = await this._buildBaseParams(n, a, s !== void 0 ? { size: s } : {}), f = await this.httpClient.get("/v1/knowledges/suggest-questions-by-vid", { params: u }), m = this._handleGeneratingStatus(f, "推荐问题生成中，请稍后");
      return m || f;
    } catch (u) {
      return this._createErrorResponse(u.message || "请求失败");
    }
  }
  /**
   * 根据视频ID获取视频摘要
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @returns {Promise<Object>} API响应
   */
  async getSummaryByVid(e) {
    const r = this._validateCommonParams(e);
    if (r)
      return r;
    const { vid: n, appId: s } = e;
    try {
      const a = await this._buildBaseParams(n, s);
      return await this.httpClient.get("/v1/knowledges/summary-by-vid", { params: a });
    } catch (a) {
      return this._createErrorResponse(a.message || "请求失败");
    }
  }
  /**
   * 根据视频ID获取视频摘要（异步V2版本）
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @returns {Promise<Object>} API响应，包含三种状态：success、processing、fail
   */
  async getSummaryByVidV2(e) {
    const r = this._validateCommonParams(e);
    if (r)
      return r;
    const { vid: n, appId: s } = e;
    try {
      const a = await this._buildBaseParams(n, s), u = await this.httpClient.get("/v1/knowledges/v3/summary-by-vid", { params: a }), f = this._handleGeneratingStatus(u, "智能大纲生成中，请稍后");
      return f || u;
    } catch (a) {
      return this._createErrorResponse(a.message || "请求失败");
    }
  }
  /**
   * 根据视频ID获取推荐问题（异步V2版本）
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应，包含三种状态：success、processing、fail
   */
  async getSuggestQuestionsByVidV2(e) {
    const r = this._validateCommonParams(e);
    if (r)
      return r;
    const { vid: n, size: s, appId: a } = e;
    try {
      const u = await this._buildBaseParams(n, a, s !== void 0 ? { size: s } : {}), f = await this.httpClient.get("/v1/knowledges/v3/suggest-questions-by-vid", { params: u }), m = this._handleGeneratingStatus(f, "推荐问题生成中，请稍后");
      return m || f;
    } catch (u) {
      return this._createErrorResponse(u.message || "请求失败");
    }
  }
}
function on(t) {
  return new ee(t);
}
async function an(t, e) {
  return new ee(t).getSuggestQuestionsByVid(e);
}
async function un(t, e) {
  return new ee(t).getSummaryByVid(e);
}
function gt(t, e = !1) {
  if (typeof t != "number" || t < 0)
    return e ? "00:00:00" : "00:00";
  const r = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), s = Math.floor(t % 60);
  return r > 0 || e ? `${r.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : `${n.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
function cn(t) {
  if (typeof t != "string")
    return 0;
  const e = t.split(":").map((r) => parseInt(r, 10));
  if (e.length === 2) {
    const [r, n] = e;
    return (r || 0) * 60 + (n || 0);
  } else if (e.length === 3) {
    const [r, n, s] = e;
    return (r || 0) * 3600 + (n || 0) * 60 + (s || 0);
  }
  return 0;
}
function ln(t, e) {
  return typeof t != "number" || typeof e != "number" ? 0 : Math.max(0, e - t);
}
function z(t) {
  if (!t) return null;
  if (t.includes(",") && (t = t.split(",")[0]), t.includes(".") && t.split(".").length === 2) {
    const r = t.split(".");
    r[1].length === 3 && (t = r[0]);
  }
  return /^\d{2}:\d{2}:\d{2}$/.test(t) || isNaN(t) ? t : gt(t, !0);
}
class fn {
  constructor(e) {
    this.apiClient = new ee(e), this.cache = /* @__PURE__ */ new Map();
  }
  /**
   * 获取视频完整数据（摘要 + 推荐问题）
   * @param {string} vid - 视频ID
   * @param {Object} options - 选项
   * @returns {Promise<Object>} 处理后的视频数据
   */
  async getVideoData(e, r = {}) {
    const { useCache: n = !0, questionsSize: s = 10, appId: a } = r, u = `video_${e}`;
    if (n && this.cache.has(u))
      return this.cache.get(u);
    try {
      const [f, m] = await Promise.allSettled([
        this.apiClient.getSummaryByVid({ vid: e, appId: a }),
        this.apiClient.getSuggestQuestionsByVid({ vid: e, size: s, appId: a })
      ]), h = this.processApiResponses(f, m);
      return n && this.cache.set(u, h), h;
    } catch (f) {
      throw console.error("获取视频数据失败:", f), new Error(`获取视频数据失败: ${f.message}`);
    }
  }
  /**
   * 仅获取视频摘要
   * @param {Object} params.vid - 视频ID
   * @param {Object} params.appId - 应用ID
   * @returns {Promise<Object>} 摘要数据
   */
  async getVideoSummary(e) {
    try {
      const r = await this.apiClient.getSummaryByVid(e);
      if (r.status === "success")
        return this.processSummaryData(r.data);
      throw new Error(r.message || "获取摘要失败");
    } catch (r) {
      throw console.error("获取视频摘要失败:", r), r;
    }
  }
  /**
   * 仅获取推荐问题
   * @param {string} vid - 视频ID
   * @param {number} size - 问题数量
   * @param {Object} params.appId - 应用ID
   * @returns {Promise<Array>} 推荐问题列表
   */
  async getSuggestQuestions(e) {
    var r;
    try {
      const n = await this.apiClient.getSuggestQuestionsByVid(e);
      if (n.status === "success")
        return ((r = n.data) == null ? void 0 : r.questions) || [];
      throw new Error(n.message || "获取推荐问题失败");
    } catch (n) {
      throw console.error("获取推荐问题失败:", n), n;
    }
  }
  /**
   * 异步获取推荐问题（支持轮询）
   * @param {Object} params
   * @param {string} params.vid
   * @param {string} [params.appId]
   * @param {number} [params.size] 默认5
   * @param {Object} [options]
   * @param {number} [options.pollInterval] 默认10秒
   * @param {number} [options.maxPollTime] 默认5分钟
   * @param {Function} [options.onStatusChange]
   */
  async getSuggestQuestionsAsync(e, r = {}) {
    var m;
    const {
      pollInterval: n = 1e4,
      maxPollTime: s = 3e5,
      onStatusChange: a
    } = r, u = Date.now();
    let f = 0;
    for (; ; )
      try {
        const h = await this.apiClient.getSuggestQuestionsByVidV2({
          vid: e.vid,
          size: e.size ?? 10,
          appId: e.appId
        });
        switch (f++, a && a(h.status, h.message, f), h.status) {
          case "success":
            return {
              success: !0,
              questions: (((m = h.data) == null ? void 0 : m.questions) || []).map((T) => ({
                ...T,
                startTime: z(T.startTime),
                endTime: z(T.endTime)
              })),
              errors: [],
              pollCount: f,
              totalTime: Date.now() - u
            };
          case "processing": {
            if (Date.now() - u >= s)
              return {
                success: !1,
                questions: [],
                errors: ["AI问答生成超时，请稍后刷新重试"],
                pollCount: f,
                totalTime: Date.now() - u
              };
            await new Promise((p) => setTimeout(p, n));
            break;
          }
          case "fail":
          default:
            return {
              success: !1,
              questions: [],
              errors: [h.message || "AI问答生成失败"],
              pollCount: f,
              totalTime: Date.now() - u
            };
        }
      } catch (h) {
        return {
          success: !1,
          questions: [],
          errors: [`获取推荐问题失败: ${h.message}`],
          pollCount: f,
          totalTime: Date.now() - u
        };
      }
  }
  /**
   * 异步获取视频摘要（V2版本，支持轮询）
   * @param {Object} params - 请求参数
   * @param {string} params.vid - 视频ID
   * @param {string} [params.appId] - 应用ID
   * @param {Object} [options] - 轮询选项
   * @param {number} [options.pollInterval] - 轮询间隔（毫秒），默认10秒
   * @param {number} [options.maxPollTime] - 最大轮询时间（毫秒），默认5分钟
   * @param {Function} [options.onStatusChange] - 状态变化回调函数
   * @param {Function} [options.onCancel] - 取消轮询的回调函数
   * @returns {Promise<Object>} 处理后的视频数据
   */
  async getVideoSummaryAsync(e, r = {}) {
    const {
      pollInterval: n = 1e4,
      // 10秒
      maxPollTime: s = 3e5,
      // 5分钟
      onStatusChange: a,
      onCancel: u
    } = r, f = Date.now();
    let m = 0, h = !1;
    for (u && u(() => {
      h = !0;
    }); ; ) {
      if (h)
        return {
          success: !1,
          videoData: null,
          outlineData: [],
          introduction: "",
          suggestQuestions: [],
          errors: ["轮询已取消"],
          pollCount: m,
          totalTime: Date.now() - f
        };
      try {
        const p = await this.apiClient.getSummaryByVidV2(e);
        switch (m++, a && a(p.status, p.message, m), p.status) {
          case "success":
            const b = this.processSummaryData(p.data);
            return {
              success: !0,
              outlineData: b.outlineData,
              introduction: b.introduction,
              suggestQuestions: [],
              errors: [],
              pollCount: m,
              totalTime: Date.now() - f
            };
          case "processing":
            if (Date.now() - f >= s)
              return {
                success: !1,
                outlineData: [],
                introduction: "",
                suggestQuestions: [],
                errors: ["大纲生成超时，请稍后刷新重试"],
                pollCount: m,
                totalTime: Date.now() - f
              };
            await new Promise((T) => setTimeout(T, n));
            break;
          case "fail":
          default:
            return {
              success: !1,
              outlineData: [],
              introduction: "",
              suggestQuestions: [],
              errors: [p.message || "大纲生成失败，请重试"],
              pollCount: m,
              totalTime: Date.now() - f
            };
        }
      } catch (p) {
        return console.error("轮询过程中发生错误:", p), {
          success: !1,
          outlineData: [],
          introduction: "",
          suggestQuestions: [],
          errors: [`轮询失败: ${p.message}`],
          pollCount: m,
          totalTime: Date.now() - f
        };
      }
    }
  }
  /**
   * 处理API响应结果
   * @private
   */
  processApiResponses(e, r) {
    var s, a, u;
    const n = {
      success: !1,
      outlineData: [],
      suggestQuestions: [],
      introduction: "",
      // 添加介绍字段
      errors: []
    };
    if (e.status === "fulfilled" && e.value.status === "success") {
      const f = this.processSummaryData(e.value.data);
      n.outlineData = f.outlineData, n.introduction = f.introduction, n.success = !0;
    } else {
      const f = e.reason || ((s = e.value) == null ? void 0 : s.message) || "获取摘要失败";
      n.errors.push(`摘要接口: ${f}`);
    }
    if (r.status === "fulfilled" && r.value.status === "success")
      n.suggestQuestions = ((a = r.value.data) == null ? void 0 : a.questions) || [], n.suggestQuestions = n.suggestQuestions.map((f) => ({
        ...f,
        startTime: z(f.startTime),
        endTime: z(f.endTime)
      }));
    else {
      const f = r.reason || ((u = r.value) == null ? void 0 : u.message) || "获取推荐问题失败";
      n.errors.push(`推荐问题接口: ${f}`);
    }
    return n;
  }
  /**
   * 处理摘要数据
   * @private
   */
  processSummaryData(e) {
    if (!e)
      throw new Error("摘要数据为空");
    let r = [];
    return e.list && Array.isArray(e.list) ? r = e.list.map((n, s) => ({
      id: n.id || `outline_${s + 1}`,
      title: n.title || `分段 ${s + 1}`,
      startTime: z(n.startTime) || "00:00:00",
      endTime: z(n.endTime) || "00:00:00",
      summary: this.normalizeSummary(n.summary),
      keywords: n.keywords || []
    })) : e.outline && Array.isArray(e.outline) ? r = e.outline.map((n, s) => ({
      id: n.id || `outline_${s + 1}`,
      title: n.title || `分段 ${s + 1}`,
      startTime: z(n.startTime) || "00:00:00",
      endTime: z(n.endTime) || "00:00:00",
      summary: this.normalizeSummary(n.summary),
      keywords: n.keywords || []
    })) : e.segments && Array.isArray(e.segments) && (r = e.segments.map((n, s) => ({
      id: n.id || `segment_${s + 1}`,
      title: n.title || `分段 ${s + 1}`,
      startTime: z(n.start) || "00:00:00",
      endTime: z(n.end) || "00:00:00",
      summary: this.normalizeSummary(n.summary),
      keywords: n.keywords || []
    }))), {
      outlineData: r,
      introduction: e.introduction || ""
    };
  }
  /**
   * 清除缓存
   */
  clearCache(e = null) {
    e ? this.cache.delete(`video_${e}`) : this.cache.clear();
  }
  /**
   * 获取缓存状态
   */
  getCacheInfo() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
  /**
   * 标准化摘要内容 - summary必定为数组，转换为字符串
   * @private
   * @param {Array} summary - 摘要内容数组
   * @returns {string} 标准化的摘要字符串
   */
  normalizeSummary(e) {
    return e ? Array.isArray(e) ? e.length === 0 ? "" : e.map((r, n) => {
      if (typeof r == "string")
        return r.trim();
      if (typeof r == "object" && r !== null) {
        const s = r.text || r.content || r.summary || r.description || "";
        return String(s).trim();
      } else
        return String(r).trim();
    }).filter((r) => r.length > 0).map((r, n) => `${n + 1}. ${r}`).join(`
`) : (console.warn("Expected summary to be an array, but got:", typeof e, e), String(e)) : "";
  }
}
function dn(t) {
  return new fn(t);
}
const hn = {
  baseURL: "https://api.polyv.net/ai-public",
  timeout: 3e4,
  signatureMethod: "MD5"
}, Nn = {
  // 签名工具
  generateMD5Sign: He,
  generateSign: Re,
  verifySign: Ot,
  addSignToParams: Ve,
  generateNonce: Ft,
  // API工具
  VodAiApiClient: ee,
  createApiClient: on,
  getSuggestQuestionsByVid: an,
  getSummaryByVid: un,
  // 服务层
  createVideoService: dn,
  DEFAULT_API_CONFIG: hn,
  // 时间工具
  formatTime: gt,
  parseTime: cn,
  calculateDuration: ln
};
export {
  hn as DEFAULT_API_CONFIG,
  ee as VodAiApiClient,
  Ve as addSignToParams,
  ln as calculateDuration,
  on as createApiClient,
  dn as createVideoService,
  Nn as default,
  gt as formatTime,
  He as generateMD5Sign,
  Ft as generateNonce,
  Re as generateSign,
  an as getSuggestQuestionsByVid,
  un as getSummaryByVid,
  Nn as outlineLogic,
  cn as parseTime,
  Ot as verifySign
};
