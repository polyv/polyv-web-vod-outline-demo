var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var He = { exports: {} };
const xt = {}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Ne = /* @__PURE__ */ St(Et);
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
    var a = !n && typeof self == "object", l = !s.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    l ? s = gt : a && (s = self);
    var d = !s.JS_MD5_NO_COMMON_JS && !0 && t.exports, g = !s.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", h = "0123456789abcdef".split(""), m = [128, 32768, 8388608, -2147483648], b = [0, 8, 16, 24], O = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), w = [], R;
    if (g) {
      var S = new ArrayBuffer(68);
      R = new Uint8Array(S), w = new Uint32Array(S);
    }
    var F = Array.isArray;
    (s.JS_MD5_NO_NODE_JS || !F) && (F = function(o) {
      return Object.prototype.toString.call(o) === "[object Array]";
    });
    var _ = ArrayBuffer.isView;
    g && (s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !_) && (_ = function(o) {
      return typeof o == "object" && o.buffer && o.buffer.constructor === ArrayBuffer;
    });
    var N = function(o) {
      var u = typeof o;
      if (u === "string")
        return [o, !0];
      if (u !== "object" || o === null)
        throw new Error(e);
      if (g && o.constructor === ArrayBuffer)
        return [new Uint8Array(o), !1];
      if (!F(o) && !_(o))
        throw new Error(e);
      return [o, !1];
    }, k = function(o) {
      return function(u) {
        return new C(!0).update(u)[o]();
      };
    }, v = function() {
      var o = k("hex");
      l && (o = M(o)), o.create = function() {
        return new C();
      }, o.update = function(i) {
        return o.create().update(i);
      };
      for (var u = 0; u < O.length; ++u) {
        var c = O[u];
        o[c] = k(c);
      }
      return o;
    }, M = function(o) {
      var u = Ne, c = Ne.Buffer, i;
      c.from && !s.JS_MD5_NO_BUFFER_FROM ? i = c.from : i = function(y) {
        return new c(y);
      };
      var x = function(y) {
        if (typeof y == "string")
          return u.createHash("md5").update(y, "utf8").digest("hex");
        if (y == null)
          throw new Error(e);
        return y.constructor === ArrayBuffer && (y = new Uint8Array(y)), F(y) || _(y) || y.constructor === c ? u.createHash("md5").update(i(y)).digest("hex") : o(y);
      };
      return x;
    }, I = function(o) {
      return function(u, c) {
        return new te(u, !0).update(c)[o]();
      };
    }, V = function() {
      var o = I("hex");
      o.create = function(i) {
        return new te(i);
      }, o.update = function(i, x) {
        return o.create(i).update(x);
      };
      for (var u = 0; u < O.length; ++u) {
        var c = O[u];
        o[c] = I(c);
      }
      return o;
    };
    function C(o) {
      if (o)
        w[0] = w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0, this.blocks = w, this.buffer8 = R;
      else if (g) {
        var u = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(u), this.blocks = new Uint32Array(u);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    C.prototype.update = function(o) {
      if (this.finalized)
        throw new Error(r);
      var u = N(o);
      o = u[0];
      for (var c = u[1], i, x = 0, y, p = o.length, E = this.blocks, B = this.buffer8; x < p; ) {
        if (this.hashed && (this.hashed = !1, E[0] = E[16], E[16] = E[1] = E[2] = E[3] = E[4] = E[5] = E[6] = E[7] = E[8] = E[9] = E[10] = E[11] = E[12] = E[13] = E[14] = E[15] = 0), c)
          if (g)
            for (y = this.start; x < p && y < 64; ++x)
              i = o.charCodeAt(x), i < 128 ? B[y++] = i : i < 2048 ? (B[y++] = 192 | i >>> 6, B[y++] = 128 | i & 63) : i < 55296 || i >= 57344 ? (B[y++] = 224 | i >>> 12, B[y++] = 128 | i >>> 6 & 63, B[y++] = 128 | i & 63) : (i = 65536 + ((i & 1023) << 10 | o.charCodeAt(++x) & 1023), B[y++] = 240 | i >>> 18, B[y++] = 128 | i >>> 12 & 63, B[y++] = 128 | i >>> 6 & 63, B[y++] = 128 | i & 63);
          else
            for (y = this.start; x < p && y < 64; ++x)
              i = o.charCodeAt(x), i < 128 ? E[y >>> 2] |= i << b[y++ & 3] : i < 2048 ? (E[y >>> 2] |= (192 | i >>> 6) << b[y++ & 3], E[y >>> 2] |= (128 | i & 63) << b[y++ & 3]) : i < 55296 || i >= 57344 ? (E[y >>> 2] |= (224 | i >>> 12) << b[y++ & 3], E[y >>> 2] |= (128 | i >>> 6 & 63) << b[y++ & 3], E[y >>> 2] |= (128 | i & 63) << b[y++ & 3]) : (i = 65536 + ((i & 1023) << 10 | o.charCodeAt(++x) & 1023), E[y >>> 2] |= (240 | i >>> 18) << b[y++ & 3], E[y >>> 2] |= (128 | i >>> 12 & 63) << b[y++ & 3], E[y >>> 2] |= (128 | i >>> 6 & 63) << b[y++ & 3], E[y >>> 2] |= (128 | i & 63) << b[y++ & 3]);
        else if (g)
          for (y = this.start; x < p && y < 64; ++x)
            B[y++] = o[x];
        else
          for (y = this.start; x < p && y < 64; ++x)
            E[y >>> 2] |= o[x] << b[y++ & 3];
        this.lastByteIndex = y, this.bytes += y - this.start, y >= 64 ? (this.start = y - 64, this.hash(), this.hashed = !0) : this.start = y;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, C.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var o = this.blocks, u = this.lastByteIndex;
        o[u >>> 2] |= m[u & 3], u >= 56 && (this.hashed || this.hash(), o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), o[14] = this.bytes << 3, o[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, C.prototype.hash = function() {
      var o, u, c, i, x, y, p = this.blocks;
      this.first ? (o = p[0] - 680876937, o = (o << 7 | o >>> 25) - 271733879 << 0, i = (-1732584194 ^ o & 2004318071) + p[1] - 117830708, i = (i << 12 | i >>> 20) + o << 0, c = (-271733879 ^ i & (o ^ -271733879)) + p[2] - 1126478375, c = (c << 17 | c >>> 15) + i << 0, u = (o ^ c & (i ^ o)) + p[3] - 1316259209, u = (u << 22 | u >>> 10) + c << 0) : (o = this.h0, u = this.h1, c = this.h2, i = this.h3, o += (i ^ u & (c ^ i)) + p[0] - 680876936, o = (o << 7 | o >>> 25) + u << 0, i += (c ^ o & (u ^ c)) + p[1] - 389564586, i = (i << 12 | i >>> 20) + o << 0, c += (u ^ i & (o ^ u)) + p[2] + 606105819, c = (c << 17 | c >>> 15) + i << 0, u += (o ^ c & (i ^ o)) + p[3] - 1044525330, u = (u << 22 | u >>> 10) + c << 0), o += (i ^ u & (c ^ i)) + p[4] - 176418897, o = (o << 7 | o >>> 25) + u << 0, i += (c ^ o & (u ^ c)) + p[5] + 1200080426, i = (i << 12 | i >>> 20) + o << 0, c += (u ^ i & (o ^ u)) + p[6] - 1473231341, c = (c << 17 | c >>> 15) + i << 0, u += (o ^ c & (i ^ o)) + p[7] - 45705983, u = (u << 22 | u >>> 10) + c << 0, o += (i ^ u & (c ^ i)) + p[8] + 1770035416, o = (o << 7 | o >>> 25) + u << 0, i += (c ^ o & (u ^ c)) + p[9] - 1958414417, i = (i << 12 | i >>> 20) + o << 0, c += (u ^ i & (o ^ u)) + p[10] - 42063, c = (c << 17 | c >>> 15) + i << 0, u += (o ^ c & (i ^ o)) + p[11] - 1990404162, u = (u << 22 | u >>> 10) + c << 0, o += (i ^ u & (c ^ i)) + p[12] + 1804603682, o = (o << 7 | o >>> 25) + u << 0, i += (c ^ o & (u ^ c)) + p[13] - 40341101, i = (i << 12 | i >>> 20) + o << 0, c += (u ^ i & (o ^ u)) + p[14] - 1502002290, c = (c << 17 | c >>> 15) + i << 0, u += (o ^ c & (i ^ o)) + p[15] + 1236535329, u = (u << 22 | u >>> 10) + c << 0, o += (c ^ i & (u ^ c)) + p[1] - 165796510, o = (o << 5 | o >>> 27) + u << 0, i += (u ^ c & (o ^ u)) + p[6] - 1069501632, i = (i << 9 | i >>> 23) + o << 0, c += (o ^ u & (i ^ o)) + p[11] + 643717713, c = (c << 14 | c >>> 18) + i << 0, u += (i ^ o & (c ^ i)) + p[0] - 373897302, u = (u << 20 | u >>> 12) + c << 0, o += (c ^ i & (u ^ c)) + p[5] - 701558691, o = (o << 5 | o >>> 27) + u << 0, i += (u ^ c & (o ^ u)) + p[10] + 38016083, i = (i << 9 | i >>> 23) + o << 0, c += (o ^ u & (i ^ o)) + p[15] - 660478335, c = (c << 14 | c >>> 18) + i << 0, u += (i ^ o & (c ^ i)) + p[4] - 405537848, u = (u << 20 | u >>> 12) + c << 0, o += (c ^ i & (u ^ c)) + p[9] + 568446438, o = (o << 5 | o >>> 27) + u << 0, i += (u ^ c & (o ^ u)) + p[14] - 1019803690, i = (i << 9 | i >>> 23) + o << 0, c += (o ^ u & (i ^ o)) + p[3] - 187363961, c = (c << 14 | c >>> 18) + i << 0, u += (i ^ o & (c ^ i)) + p[8] + 1163531501, u = (u << 20 | u >>> 12) + c << 0, o += (c ^ i & (u ^ c)) + p[13] - 1444681467, o = (o << 5 | o >>> 27) + u << 0, i += (u ^ c & (o ^ u)) + p[2] - 51403784, i = (i << 9 | i >>> 23) + o << 0, c += (o ^ u & (i ^ o)) + p[7] + 1735328473, c = (c << 14 | c >>> 18) + i << 0, u += (i ^ o & (c ^ i)) + p[12] - 1926607734, u = (u << 20 | u >>> 12) + c << 0, x = u ^ c, o += (x ^ i) + p[5] - 378558, o = (o << 4 | o >>> 28) + u << 0, i += (x ^ o) + p[8] - 2022574463, i = (i << 11 | i >>> 21) + o << 0, y = i ^ o, c += (y ^ u) + p[11] + 1839030562, c = (c << 16 | c >>> 16) + i << 0, u += (y ^ c) + p[14] - 35309556, u = (u << 23 | u >>> 9) + c << 0, x = u ^ c, o += (x ^ i) + p[1] - 1530992060, o = (o << 4 | o >>> 28) + u << 0, i += (x ^ o) + p[4] + 1272893353, i = (i << 11 | i >>> 21) + o << 0, y = i ^ o, c += (y ^ u) + p[7] - 155497632, c = (c << 16 | c >>> 16) + i << 0, u += (y ^ c) + p[10] - 1094730640, u = (u << 23 | u >>> 9) + c << 0, x = u ^ c, o += (x ^ i) + p[13] + 681279174, o = (o << 4 | o >>> 28) + u << 0, i += (x ^ o) + p[0] - 358537222, i = (i << 11 | i >>> 21) + o << 0, y = i ^ o, c += (y ^ u) + p[3] - 722521979, c = (c << 16 | c >>> 16) + i << 0, u += (y ^ c) + p[6] + 76029189, u = (u << 23 | u >>> 9) + c << 0, x = u ^ c, o += (x ^ i) + p[9] - 640364487, o = (o << 4 | o >>> 28) + u << 0, i += (x ^ o) + p[12] - 421815835, i = (i << 11 | i >>> 21) + o << 0, y = i ^ o, c += (y ^ u) + p[15] + 530742520, c = (c << 16 | c >>> 16) + i << 0, u += (y ^ c) + p[2] - 995338651, u = (u << 23 | u >>> 9) + c << 0, o += (c ^ (u | ~i)) + p[0] - 198630844, o = (o << 6 | o >>> 26) + u << 0, i += (u ^ (o | ~c)) + p[7] + 1126891415, i = (i << 10 | i >>> 22) + o << 0, c += (o ^ (i | ~u)) + p[14] - 1416354905, c = (c << 15 | c >>> 17) + i << 0, u += (i ^ (c | ~o)) + p[5] - 57434055, u = (u << 21 | u >>> 11) + c << 0, o += (c ^ (u | ~i)) + p[12] + 1700485571, o = (o << 6 | o >>> 26) + u << 0, i += (u ^ (o | ~c)) + p[3] - 1894986606, i = (i << 10 | i >>> 22) + o << 0, c += (o ^ (i | ~u)) + p[10] - 1051523, c = (c << 15 | c >>> 17) + i << 0, u += (i ^ (c | ~o)) + p[1] - 2054922799, u = (u << 21 | u >>> 11) + c << 0, o += (c ^ (u | ~i)) + p[8] + 1873313359, o = (o << 6 | o >>> 26) + u << 0, i += (u ^ (o | ~c)) + p[15] - 30611744, i = (i << 10 | i >>> 22) + o << 0, c += (o ^ (i | ~u)) + p[6] - 1560198380, c = (c << 15 | c >>> 17) + i << 0, u += (i ^ (c | ~o)) + p[13] + 1309151649, u = (u << 21 | u >>> 11) + c << 0, o += (c ^ (u | ~i)) + p[4] - 145523070, o = (o << 6 | o >>> 26) + u << 0, i += (u ^ (o | ~c)) + p[11] - 1120210379, i = (i << 10 | i >>> 22) + o << 0, c += (o ^ (i | ~u)) + p[2] + 718787259, c = (c << 15 | c >>> 17) + i << 0, u += (i ^ (c | ~o)) + p[9] - 343485551, u = (u << 21 | u >>> 11) + c << 0, this.first ? (this.h0 = o + 1732584193 << 0, this.h1 = u - 271733879 << 0, this.h2 = c - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + o << 0, this.h1 = this.h1 + u << 0, this.h2 = this.h2 + c << 0, this.h3 = this.h3 + i << 0);
    }, C.prototype.hex = function() {
      this.finalize();
      var o = this.h0, u = this.h1, c = this.h2, i = this.h3;
      return h[o >>> 4 & 15] + h[o & 15] + h[o >>> 12 & 15] + h[o >>> 8 & 15] + h[o >>> 20 & 15] + h[o >>> 16 & 15] + h[o >>> 28 & 15] + h[o >>> 24 & 15] + h[u >>> 4 & 15] + h[u & 15] + h[u >>> 12 & 15] + h[u >>> 8 & 15] + h[u >>> 20 & 15] + h[u >>> 16 & 15] + h[u >>> 28 & 15] + h[u >>> 24 & 15] + h[c >>> 4 & 15] + h[c & 15] + h[c >>> 12 & 15] + h[c >>> 8 & 15] + h[c >>> 20 & 15] + h[c >>> 16 & 15] + h[c >>> 28 & 15] + h[c >>> 24 & 15] + h[i >>> 4 & 15] + h[i & 15] + h[i >>> 12 & 15] + h[i >>> 8 & 15] + h[i >>> 20 & 15] + h[i >>> 16 & 15] + h[i >>> 28 & 15] + h[i >>> 24 & 15];
    }, C.prototype.toString = C.prototype.hex, C.prototype.digest = function() {
      this.finalize();
      var o = this.h0, u = this.h1, c = this.h2, i = this.h3;
      return [
        o & 255,
        o >>> 8 & 255,
        o >>> 16 & 255,
        o >>> 24 & 255,
        u & 255,
        u >>> 8 & 255,
        u >>> 16 & 255,
        u >>> 24 & 255,
        c & 255,
        c >>> 8 & 255,
        c >>> 16 & 255,
        c >>> 24 & 255,
        i & 255,
        i >>> 8 & 255,
        i >>> 16 & 255,
        i >>> 24 & 255
      ];
    }, C.prototype.array = C.prototype.digest, C.prototype.arrayBuffer = function() {
      this.finalize();
      var o = new ArrayBuffer(16), u = new Uint32Array(o);
      return u[0] = this.h0, u[1] = this.h1, u[2] = this.h2, u[3] = this.h3, o;
    }, C.prototype.buffer = C.prototype.arrayBuffer, C.prototype.base64 = function() {
      for (var o, u, c, i = "", x = this.array(), y = 0; y < 15; )
        o = x[y++], u = x[y++], c = x[y++], i += T[o >>> 2] + T[(o << 4 | u >>> 4) & 63] + T[(u << 2 | c >>> 6) & 63] + T[c & 63];
      return o = x[y], i += T[o >>> 2] + T[o << 4 & 63] + "==", i;
    };
    function te(o, u) {
      var c, i = N(o);
      if (o = i[0], i[1]) {
        var x = [], y = o.length, p = 0, E;
        for (c = 0; c < y; ++c)
          E = o.charCodeAt(c), E < 128 ? x[p++] = E : E < 2048 ? (x[p++] = 192 | E >>> 6, x[p++] = 128 | E & 63) : E < 55296 || E >= 57344 ? (x[p++] = 224 | E >>> 12, x[p++] = 128 | E >>> 6 & 63, x[p++] = 128 | E & 63) : (E = 65536 + ((E & 1023) << 10 | o.charCodeAt(++c) & 1023), x[p++] = 240 | E >>> 18, x[p++] = 128 | E >>> 12 & 63, x[p++] = 128 | E >>> 6 & 63, x[p++] = 128 | E & 63);
        o = x;
      }
      o.length > 64 && (o = new C(!0).update(o).array());
      var B = [], _e = [];
      for (c = 0; c < 64; ++c) {
        var Ce = o[c] || 0;
        B[c] = 92 ^ Ce, _e[c] = 54 ^ Ce;
      }
      C.call(this, u), this.update(_e), this.oKeyPad = B, this.inner = !0, this.sharedMemory = u;
    }
    te.prototype = new C(), te.prototype.finalize = function() {
      if (C.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var o = this.array();
        C.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(o), C.prototype.finalize.call(this);
      }
    };
    var Q = v();
    Q.md5 = Q, Q.md5.hmac = V(), d ? t.exports = Q : s.md5 = Q;
  })();
})(He);
var Rt = He.exports;
const At = /* @__PURE__ */ bt(Rt);
function Je(t, e) {
  const r = Ot(t, e);
  return At(r).toUpperCase();
}
function Re(t, e) {
  return Je(t, e);
}
function Ot(t, e) {
  const r = {};
  Object.keys(t).forEach((a) => {
    const l = t[a];
    l != null && l !== "" && (r[a] = String(l));
  });
  const n = Object.keys(r).sort();
  let s = "";
  return n.forEach((a) => {
    s += a + r[a];
  }), e + s + e;
}
function Tt(t, e) {
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
function We(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: _t } = Object.prototype, { getPrototypeOf: Ae } = Object, { iterator: ae, toStringTag: Ke } = Symbol, ue = /* @__PURE__ */ ((t) => (e) => {
  const r = _t.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (t) => (t = t.toLowerCase(), (e) => ue(e) === t), ce = (t) => (e) => typeof e === t, { isArray: W } = Array, G = ce("undefined");
function Ct(t) {
  return t !== null && !G(t) && t.constructor !== null && !G(t.constructor) && U(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Qe = j("ArrayBuffer");
function Nt(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Qe(t.buffer), e;
}
const Pt = ce("string"), U = ce("function"), Xe = ce("number"), le = (t) => t !== null && typeof t == "object", vt = (t) => t === !0 || t === !1, re = (t) => {
  if (ue(t) !== "object")
    return !1;
  const e = Ae(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ke in t) && !(ae in t);
}, Dt = j("Date"), Bt = j("File"), Ut = j("Blob"), Lt = j("FileList"), kt = (t) => le(t) && U(t.pipe), jt = (t) => {
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
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), l = a.length;
    let d;
    for (n = 0; n < l; n++)
      d = a[n], e.call(null, t[d], d, t);
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
const $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ye = (t) => !G(t) && t !== $;
function we() {
  const { caseless: t } = Ye(this) && this || {}, e = {}, r = (n, s) => {
    const a = t && Ge(e, s) || s;
    re(e[a]) && re(n) ? e[a] = we(e[a], n) : re(n) ? e[a] = we({}, n) : W(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Y(arguments[n], r);
  return e;
}
const Jt = (t, e, r, { allOwnKeys: n } = {}) => (Y(e, (s, a) => {
  r && U(s) ? t[a] = We(s, r) : t[a] = s;
}, { allOwnKeys: n }), t), Vt = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Wt = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Kt = (t, e, r, n) => {
  let s, a, l;
  const d = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      l = s[a], (!n || n(l, t, e)) && !d[l] && (e[l] = t[l], d[l] = !0);
    t = r !== !1 && Ae(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Qt = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Xt = (t) => {
  if (!t) return null;
  if (W(t)) return t;
  let e = t.length;
  if (!Xe(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Gt = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ae(Uint8Array)), Yt = (t, e) => {
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
), Pe = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), rr = j("RegExp"), Ze = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Y(r, (s, a) => {
    let l;
    (l = e(s, a, t)) !== !1 && (n[a] = l || s);
  }), Object.defineProperties(t, n);
}, nr = (t) => {
  Ze(t, (e, r) => {
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
  return !!(t && U(t.append) && t[Ke] === "FormData" && t[ae]);
}
const ur = (t) => {
  const e = new Array(10), r = (n, s) => {
    if (le(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const a = W(n) ? [] : {};
        return Y(n, (l, d) => {
          const g = r(l, s + 1);
          !G(g) && (a[d] = g);
        }), e[s] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, cr = j("AsyncFunction"), lr = (t) => t && (le(t) || U(t)) && U(t.then) && U(t.catch), et = ((t, e) => t ? setImmediate : e ? ((r, n) => ($.addEventListener("message", ({ source: s, data: a }) => {
  s === $ && a === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), $.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  U($.postMessage)
), fr = typeof queueMicrotask < "u" ? queueMicrotask.bind($) : typeof process < "u" && process.nextTick || et, dr = (t) => t != null && U(t[ae]), f = {
  isArray: W,
  isArrayBuffer: Qe,
  isBuffer: Ct,
  isFormData: jt,
  isArrayBufferView: Nt,
  isString: Pt,
  isNumber: Xe,
  isBoolean: vt,
  isObject: le,
  isPlainObject: re,
  isReadableStream: It,
  isRequest: qt,
  isResponse: zt,
  isHeaders: $t,
  isUndefined: G,
  isDate: Dt,
  isFile: Bt,
  isBlob: Ut,
  isRegExp: rr,
  isFunction: U,
  isStream: kt,
  isURLSearchParams: Mt,
  isTypedArray: Gt,
  isFileList: Lt,
  forEach: Y,
  merge: we,
  extend: Jt,
  trim: Ht,
  stripBOM: Vt,
  inherits: Wt,
  toFlatObject: Kt,
  kindOf: ue,
  kindOfTest: j,
  endsWith: Qt,
  toArray: Xt,
  forEachEntry: Yt,
  matchAll: Zt,
  isHTMLForm: er,
  hasOwnProperty: Pe,
  hasOwnProp: Pe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ze,
  freezeMethods: nr,
  toObjectSet: sr,
  toCamelCase: tr,
  noop: or,
  toFiniteNumber: ir,
  findKey: Ge,
  global: $,
  isContextDefined: Ye,
  isSpecCompliantForm: ar,
  toJSONObject: ur,
  isAsyncFn: cr,
  isThenable: lr,
  setImmediate: et,
  asap: fr,
  isIterable: dr
};
function A(t, e, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
f.inherits(A, Error, {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const tt = A.prototype, rt = {};
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
  rt[t] = { value: t };
});
Object.defineProperties(A, rt);
Object.defineProperty(tt, "isAxiosError", { value: !0 });
A.from = (t, e, r, n, s, a) => {
  const l = Object.create(tt);
  return f.toFlatObject(t, l, function(g) {
    return g !== Error.prototype;
  }, (d) => d !== "isAxiosError"), A.call(l, t.message, e, r, n, s), l.cause = t, l.name = t.name, a && Object.assign(l, a), l;
};
const hr = null;
function ge(t) {
  return f.isPlainObject(t) || f.isArray(t);
}
function nt(t) {
  return f.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ve(t, e, r) {
  return t ? t.concat(e).map(function(s, a) {
    return s = nt(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : e;
}
function pr(t) {
  return f.isArray(t) && !t.some(ge);
}
const mr = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function fe(t, e, r) {
  if (!f.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, S) {
    return !f.isUndefined(S[R]);
  });
  const n = r.metaTokens, s = r.visitor || m, a = r.dots, l = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(e);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null) return "";
    if (f.isDate(w))
      return w.toISOString();
    if (!g && f.isBlob(w))
      throw new A("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(w) || f.isTypedArray(w) ? g && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function m(w, R, S) {
    let F = w;
    if (w && !S && typeof w == "object") {
      if (f.endsWith(R, "{}"))
        R = n ? R : R.slice(0, -2), w = JSON.stringify(w);
      else if (f.isArray(w) && pr(w) || (f.isFileList(w) || f.endsWith(R, "[]")) && (F = f.toArray(w)))
        return R = nt(R), F.forEach(function(N, k) {
          !(f.isUndefined(N) || N === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ve([R], k, a) : l === null ? R : R + "[]",
            h(N)
          );
        }), !1;
    }
    return ge(w) ? !0 : (e.append(ve(S, R, a), h(w)), !1);
  }
  const b = [], O = Object.assign(mr, {
    defaultVisitor: m,
    convertValue: h,
    isVisitable: ge
  });
  function T(w, R) {
    if (!f.isUndefined(w)) {
      if (b.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      b.push(w), f.forEach(w, function(F, _) {
        (!(f.isUndefined(F) || F === null) && s.call(
          e,
          F,
          f.isString(_) ? _.trim() : _,
          R,
          O
        )) === !0 && T(F, R ? R.concat(_) : [_]);
      }), b.pop();
    }
  }
  if (!f.isObject(t))
    throw new TypeError("data must be an object");
  return T(t), e;
}
function De(t) {
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
function Oe(t, e) {
  this._pairs = [], t && fe(t, this, e);
}
const st = Oe.prototype;
st.append = function(e, r) {
  this._pairs.push([e, r]);
};
st.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, De);
  } : De;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function yr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ot(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || yr;
  f.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let a;
  if (s ? a = s(e, r) : a = f.isURLSearchParams(e) ? e.toString() : new Oe(e, r).toString(n), a) {
    const l = t.indexOf("#");
    l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Be {
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
    f.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const it = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, wr = typeof URLSearchParams < "u" ? URLSearchParams : Oe, gr = typeof FormData < "u" ? FormData : null, br = typeof Blob < "u" ? Blob : null, Sr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: wr,
    FormData: gr,
    Blob: br
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Te = typeof window < "u" && typeof document < "u", be = typeof navigator == "object" && navigator || void 0, xr = Te && (!be || ["ReactNative", "NativeScript", "NS"].indexOf(be.product) < 0), Er = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Rr = Te && window.location.href || "http://localhost", Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Te,
  hasStandardBrowserEnv: xr,
  hasStandardBrowserWebWorkerEnv: Er,
  navigator: be,
  origin: Rr
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...Ar,
  ...Sr
};
function Or(t, e) {
  return fe(t, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return D.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Tr(t) {
  return f.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
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
function at(t) {
  function e(r, n, s, a) {
    let l = r[a++];
    if (l === "__proto__") return !0;
    const d = Number.isFinite(+l), g = a >= r.length;
    return l = !l && f.isArray(s) ? s.length : l, g ? (f.hasOwnProp(s, l) ? s[l] = [s[l], n] : s[l] = n, !d) : ((!s[l] || !f.isObject(s[l])) && (s[l] = []), e(r, n, s[l], a) && f.isArray(s[l]) && (s[l] = Fr(s[l])), !d);
  }
  if (f.isFormData(t) && f.isFunction(t.entries)) {
    const r = {};
    return f.forEachEntry(t, (n, s) => {
      e(Tr(n), s, r, 0);
    }), r;
  }
  return null;
}
function _r(t, e, r) {
  if (f.isString(t))
    try {
      return (e || JSON.parse)(t), f.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Z = {
  transitional: it,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = f.isObject(e);
    if (a && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return s ? JSON.stringify(at(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
      return e;
    if (f.isArrayBufferView(e))
      return e.buffer;
    if (f.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let d;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Or(e, this.formSerializer).toString();
      if ((d = f.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return fe(
          d ? { "files[]": e } : e,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), _r(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Z.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (f.isResponse(e) || f.isReadableStream(e))
      return e;
    if (e && f.isString(e) && (n && !this.responseType || s)) {
      const l = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (d) {
        if (l)
          throw d.name === "SyntaxError" ? A.from(d, A.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
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
f.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Z.headers[t] = {};
});
const Cr = f.toObjectSet([
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
]), Nr = (t) => {
  const e = {};
  let r, n, s;
  return t && t.split(`
`).forEach(function(l) {
    s = l.indexOf(":"), r = l.substring(0, s).trim().toLowerCase(), n = l.substring(s + 1).trim(), !(!r || e[r] && Cr[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Ue = Symbol("internals");
function X(t) {
  return t && String(t).trim().toLowerCase();
}
function ne(t) {
  return t === !1 || t == null ? t : f.isArray(t) ? t.map(ne) : String(t);
}
function Pr(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const vr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function pe(t, e, r, n, s) {
  if (f.isFunction(n))
    return n.call(this, e, r);
  if (s && (e = r), !!f.isString(e)) {
    if (f.isString(n))
      return e.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(e);
  }
}
function Dr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Br(t, e) {
  const r = f.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(s, a, l) {
        return this[n].call(this, e, s, a, l);
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
    function a(d, g, h) {
      const m = X(g);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const b = f.findKey(s, m);
      (!b || s[b] === void 0 || h === !0 || h === void 0 && s[b] !== !1) && (s[b || g] = ne(d));
    }
    const l = (d, g) => f.forEach(d, (h, m) => a(h, m, g));
    if (f.isPlainObject(e) || e instanceof this.constructor)
      l(e, r);
    else if (f.isString(e) && (e = e.trim()) && !vr(e))
      l(Nr(e), r);
    else if (f.isObject(e) && f.isIterable(e)) {
      let d = {}, g, h;
      for (const m of e) {
        if (!f.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        d[h = m[0]] = (g = d[h]) ? f.isArray(g) ? [...g, m[1]] : [g, m[1]] : m[1];
      }
      l(d, r);
    } else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = X(e), e) {
      const n = f.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Pr(s);
        if (f.isFunction(r))
          return r.call(this, s, n);
        if (f.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = X(e), e) {
      const n = f.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || pe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let s = !1;
    function a(l) {
      if (l = X(l), l) {
        const d = f.findKey(n, l);
        d && (!r || pe(n, n[d], d, r)) && (delete n[d], s = !0);
      }
    }
    return f.isArray(e) ? e.forEach(a) : a(e), s;
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
    return f.forEach(this, (s, a) => {
      const l = f.findKey(n, a);
      if (l) {
        r[l] = ne(s), delete r[a];
        return;
      }
      const d = e ? Dr(a) : String(a).trim();
      d !== a && delete r[a], r[d] = ne(s), n[d] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = e && f.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Ue] = this[Ue] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(l) {
      const d = X(l);
      n[d] || (Br(s, l), n[d] = !0);
    }
    return f.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(L.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
f.freezeMethods(L);
function me(t, e) {
  const r = this || Z, n = e || r, s = L.from(n.headers);
  let a = n.data;
  return f.forEach(t, function(d) {
    a = d.call(r, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function ut(t) {
  return !!(t && t.__CANCEL__);
}
function K(t, e, r) {
  A.call(this, t ?? "canceled", A.ERR_CANCELED, e, r), this.name = "CanceledError";
}
f.inherits(K, A, {
  __CANCEL__: !0
});
function ct(t, e, r) {
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
  let s = 0, a = 0, l;
  return e = e !== void 0 ? e : 1e3, function(g) {
    const h = Date.now(), m = n[a];
    l || (l = h), r[s] = g, n[s] = h;
    let b = a, O = 0;
    for (; b !== s; )
      O += r[b++], b = b % t;
    if (s = (s + 1) % t, s === a && (a = (a + 1) % t), h - l < e)
      return;
    const T = m && h - m;
    return T ? Math.round(O * 1e3 / T) : void 0;
  };
}
function kr(t, e) {
  let r = 0, n = 1e3 / e, s, a;
  const l = (h, m = Date.now()) => {
    r = m, s = null, a && (clearTimeout(a), a = null), t.apply(null, h);
  };
  return [(...h) => {
    const m = Date.now(), b = m - r;
    b >= n ? l(h, m) : (s = h, a || (a = setTimeout(() => {
      a = null, l(s);
    }, n - b)));
  }, () => s && l(s)];
}
const oe = (t, e, r = 3) => {
  let n = 0;
  const s = Lr(50, 250);
  return kr((a) => {
    const l = a.loaded, d = a.lengthComputable ? a.total : void 0, g = l - n, h = s(g), m = l <= d;
    n = l;
    const b = {
      loaded: l,
      total: d,
      progress: d ? l / d : void 0,
      bytes: g,
      rate: h || void 0,
      estimated: h && d && m ? (d - l) / h : void 0,
      event: a,
      lengthComputable: d != null,
      [e ? "download" : "upload"]: !0
    };
    t(b);
  }, r);
}, Le = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, ke = (t) => (...e) => f.asap(() => t(...e)), jr = D.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, D.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(D.origin),
  D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
) : () => !0, Mr = D.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, s, a) {
      const l = [t + "=" + encodeURIComponent(e)];
      f.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), f.isString(n) && l.push("path=" + n), f.isString(s) && l.push("domain=" + s), a === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function lt(t, e, r) {
  let n = !Ir(e);
  return t && (n || r == !1) ? qr(t, e) : e;
}
const je = (t) => t instanceof L ? { ...t } : t;
function J(t, e) {
  e = e || {};
  const r = {};
  function n(h, m, b, O) {
    return f.isPlainObject(h) && f.isPlainObject(m) ? f.merge.call({ caseless: O }, h, m) : f.isPlainObject(m) ? f.merge({}, m) : f.isArray(m) ? m.slice() : m;
  }
  function s(h, m, b, O) {
    if (f.isUndefined(m)) {
      if (!f.isUndefined(h))
        return n(void 0, h, b, O);
    } else return n(h, m, b, O);
  }
  function a(h, m) {
    if (!f.isUndefined(m))
      return n(void 0, m);
  }
  function l(h, m) {
    if (f.isUndefined(m)) {
      if (!f.isUndefined(h))
        return n(void 0, h);
    } else return n(void 0, m);
  }
  function d(h, m, b) {
    if (b in e)
      return n(h, m);
    if (b in t)
      return n(void 0, h);
  }
  const g = {
    url: a,
    method: a,
    data: a,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: d,
    headers: (h, m, b) => s(je(h), je(m), b, !0)
  };
  return f.forEach(Object.keys(Object.assign({}, t, e)), function(m) {
    const b = g[m] || s, O = b(t[m], e[m], m);
    f.isUndefined(O) && b !== d || (r[m] = O);
  }), r;
}
const ft = (t) => {
  const e = J({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: l, auth: d } = e;
  e.headers = l = L.from(l), e.url = ot(lt(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), d && l.set(
    "Authorization",
    "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))
  );
  let g;
  if (f.isFormData(r)) {
    if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((g = l.getContentType()) !== !1) {
      const [h, ...m] = g ? g.split(";").map((b) => b.trim()).filter(Boolean) : [];
      l.setContentType([h || "multipart/form-data", ...m].join("; "));
    }
  }
  if (D.hasStandardBrowserEnv && (n && f.isFunction(n) && (n = n(e)), n || n !== !1 && jr(e.url))) {
    const h = s && a && Mr.read(a);
    h && l.set(s, h);
  }
  return e;
}, zr = typeof XMLHttpRequest < "u", $r = zr && function(t) {
  return new Promise(function(r, n) {
    const s = ft(t);
    let a = s.data;
    const l = L.from(s.headers).normalize();
    let { responseType: d, onUploadProgress: g, onDownloadProgress: h } = s, m, b, O, T, w;
    function R() {
      T && T(), w && w(), s.cancelToken && s.cancelToken.unsubscribe(m), s.signal && s.signal.removeEventListener("abort", m);
    }
    let S = new XMLHttpRequest();
    S.open(s.method.toUpperCase(), s.url, !0), S.timeout = s.timeout;
    function F() {
      if (!S)
        return;
      const N = L.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), v = {
        data: !d || d === "text" || d === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: N,
        config: t,
        request: S
      };
      ct(function(I) {
        r(I), R();
      }, function(I) {
        n(I), R();
      }, v), S = null;
    }
    "onloadend" in S ? S.onloadend = F : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(F);
    }, S.onabort = function() {
      S && (n(new A("Request aborted", A.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new A("Network Error", A.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const v = s.transitional || it;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), n(new A(
        k,
        v.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
        t,
        S
      )), S = null;
    }, a === void 0 && l.setContentType(null), "setRequestHeader" in S && f.forEach(l.toJSON(), function(k, v) {
      S.setRequestHeader(v, k);
    }), f.isUndefined(s.withCredentials) || (S.withCredentials = !!s.withCredentials), d && d !== "json" && (S.responseType = s.responseType), h && ([O, w] = oe(h, !0), S.addEventListener("progress", O)), g && S.upload && ([b, T] = oe(g), S.upload.addEventListener("progress", b), S.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (m = (N) => {
      S && (n(!N || N.type ? new K(null, t, S) : N), S.abort(), S = null);
    }, s.cancelToken && s.cancelToken.subscribe(m), s.signal && (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
    const _ = Ur(s.url);
    if (_ && D.protocols.indexOf(_) === -1) {
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
        s = !0, d();
        const m = h instanceof Error ? h : this.reason;
        n.abort(m instanceof A ? m : new K(m instanceof Error ? m.message : m));
      }
    };
    let l = e && setTimeout(() => {
      l = null, a(new A(`timeout ${e} of ms exceeded`, A.ETIMEDOUT));
    }, e);
    const d = () => {
      t && (l && clearTimeout(l), l = null, t.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(a) : h.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((h) => h.addEventListener("abort", a));
    const { signal: g } = n;
    return g.unsubscribe = () => f.asap(d), g;
  }
}, Jr = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + e, yield t.slice(n, s), n = s;
}, Vr = async function* (t, e) {
  for await (const r of Wr(t))
    yield* Jr(r, e);
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
}, Me = (t, e, r, n) => {
  const s = Vr(t, e);
  let a = 0, l, d = (g) => {
    l || (l = !0, n && n(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: h, value: m } = await s.next();
        if (h) {
          d(), g.close();
          return;
        }
        let b = m.byteLength;
        if (r) {
          let O = a += b;
          r(O);
        }
        g.enqueue(new Uint8Array(m));
      } catch (h) {
        throw d(h), h;
      }
    },
    cancel(g) {
      return d(g), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, de = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", dt = de && typeof ReadableStream == "function", Kr = de && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), ht = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Qr = dt && ht(() => {
  let t = !1;
  const e = new Request(D.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ie = 64 * 1024, Se = dt && ht(() => f.isReadableStream(new Response("").body)), ie = {
  stream: Se && ((t) => t.body)
};
de && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !ie[e] && (ie[e] = f.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new A(`Response type '${e}' is not supported`, A.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Xr = async (t) => {
  if (t == null)
    return 0;
  if (f.isBlob(t))
    return t.size;
  if (f.isSpecCompliantForm(t))
    return (await new Request(D.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (f.isArrayBufferView(t) || f.isArrayBuffer(t))
    return t.byteLength;
  if (f.isURLSearchParams(t) && (t = t + ""), f.isString(t))
    return (await Kr(t)).byteLength;
}, Gr = async (t, e) => {
  const r = f.toFiniteNumber(t.getContentLength());
  return r ?? Xr(e);
}, Yr = de && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: s,
    cancelToken: a,
    timeout: l,
    onDownloadProgress: d,
    onUploadProgress: g,
    responseType: h,
    headers: m,
    withCredentials: b = "same-origin",
    fetchOptions: O
  } = ft(t);
  h = h ? (h + "").toLowerCase() : "text";
  let T = Hr([s, a && a.toAbortSignal()], l), w;
  const R = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let S;
  try {
    if (g && Qr && r !== "get" && r !== "head" && (S = await Gr(m, n)) !== 0) {
      let v = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), M;
      if (f.isFormData(n) && (M = v.headers.get("content-type")) && m.setContentType(M), v.body) {
        const [I, V] = Le(
          S,
          oe(ke(g))
        );
        n = Me(v.body, Ie, I, V);
      }
    }
    f.isString(b) || (b = b ? "include" : "omit");
    const F = "credentials" in Request.prototype;
    w = new Request(e, {
      ...O,
      signal: T,
      method: r.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: F ? b : void 0
    });
    let _ = await fetch(w);
    const N = Se && (h === "stream" || h === "response");
    if (Se && (d || N && R)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((C) => {
        v[C] = _[C];
      });
      const M = f.toFiniteNumber(_.headers.get("content-length")), [I, V] = d && Le(
        M,
        oe(ke(d), !0)
      ) || [];
      _ = new Response(
        Me(_.body, Ie, I, () => {
          V && V(), R && R();
        }),
        v
      );
    }
    h = h || "text";
    let k = await ie[f.findKey(ie, h) || "text"](_, t);
    return !N && R && R(), await new Promise((v, M) => {
      ct(v, M, {
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
}), xe = {
  http: hr,
  xhr: $r,
  fetch: Yr
};
f.forEach(xe, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const qe = (t) => `- ${t}`, Zr = (t) => f.isFunction(t) || t === null || t === !1, pt = {
  getAdapter: (t) => {
    t = f.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const s = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let l;
      if (n = r, !Zr(r) && (n = xe[(l = String(r)).toLowerCase()], n === void 0))
        throw new A(`Unknown adapter '${l}'`);
      if (n)
        break;
      s[l || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([d, g]) => `adapter ${d} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = e ? a.length > 1 ? `since :
` + a.map(qe).join(`
`) : " " + qe(a[0]) : "as no adapter specified";
      throw new A(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: xe
};
function ye(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new K(null, t);
}
function ze(t) {
  return ye(t), t.headers = L.from(t.headers), t.data = me.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), pt.getAdapter(t.adapter || Z.adapter)(t).then(function(n) {
    return ye(t), n.data = me.call(
      t,
      t.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return ut(n) || (ye(t), n && n.response && (n.response.data = me.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const mt = "1.9.0", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  he[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const $e = {};
he.transitional = function(e, r, n) {
  function s(a, l) {
    return "[Axios v" + mt + "] Transitional option '" + a + "'" + l + (n ? ". " + n : "");
  }
  return (a, l, d) => {
    if (e === !1)
      throw new A(
        s(l, " has been removed" + (r ? " in " + r : "")),
        A.ERR_DEPRECATED
      );
    return r && !$e[l] && ($e[l] = !0, console.warn(
      s(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, l, d) : !0;
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
    const a = n[s], l = e[a];
    if (l) {
      const d = t[a], g = d === void 0 || l(d, a, t);
      if (g !== !0)
        throw new A("option " + a + " must be " + g, A.ERR_BAD_OPTION_VALUE);
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
      request: new Be(),
      response: new Be()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = J(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && se.assertOptions(n, {
      silentJSONParsing: q.transitional(q.boolean),
      forcedJSONParsing: q.transitional(q.boolean),
      clarifyTimeoutError: q.transitional(q.boolean)
    }, !1), s != null && (f.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: q.function,
      serialize: q.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), se.assertOptions(r, {
      baseUrl: q.spelling("baseURL"),
      withXsrfToken: q.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = a && f.merge(
      a.common,
      a[r.method]
    );
    a && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete a[w];
      }
    ), r.headers = L.concat(l, a);
    const d = [];
    let g = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(r) === !1 || (g = g && R.synchronous, d.unshift(R.fulfilled, R.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(R) {
      h.push(R.fulfilled, R.rejected);
    });
    let m, b = 0, O;
    if (!g) {
      const w = [ze.bind(this), void 0];
      for (w.unshift.apply(w, d), w.push.apply(w, h), O = w.length, m = Promise.resolve(r); b < O; )
        m = m.then(w[b++], w[b++]);
      return m;
    }
    O = d.length;
    let T = r;
    for (b = 0; b < O; ) {
      const w = d[b++], R = d[b++];
      try {
        T = w(T);
      } catch (S) {
        R.call(this, S);
        break;
      }
    }
    try {
      m = ze.call(this, T);
    } catch (w) {
      return Promise.reject(w);
    }
    for (b = 0, O = h.length; b < O; )
      m = m.then(h[b++], h[b++]);
    return m;
  }
  getUri(e) {
    e = J(this.defaults, e);
    const r = lt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return ot(r, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  H.prototype[e] = function(r, n) {
    return this.request(J(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, l, d) {
      return this.request(J(d || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: l
      }));
    };
  }
  H.prototype[e] = r(), H.prototype[e + "Form"] = r(!0);
});
let tn = class yt {
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
      const l = new Promise((d) => {
        n.subscribe(d), a = d;
      }).then(s);
      return l.cancel = function() {
        n.unsubscribe(a);
      }, l;
    }, e(function(a, l, d) {
      n.reason || (n.reason = new K(a, l, d), r(n.reason));
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
      token: new yt(function(s) {
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
  return f.isObject(t) && t.isAxiosError === !0;
}
const Ee = {
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
Object.entries(Ee).forEach(([t, e]) => {
  Ee[e] = t;
});
function wt(t) {
  const e = new H(t), r = We(H.prototype.request, e);
  return f.extend(r, H.prototype, e, { allOwnKeys: !0 }), f.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(s) {
    return wt(J(t, s));
  }, r;
}
const P = wt(Z);
P.Axios = H;
P.CanceledError = K;
P.CancelToken = tn;
P.isCancel = ut;
P.VERSION = mt;
P.toFormData = fe;
P.AxiosError = A;
P.Cancel = P.CanceledError;
P.all = function(e) {
  return Promise.all(e);
};
P.spread = rn;
P.isAxiosError = nn;
P.mergeConfig = J;
P.AxiosHeaders = L;
P.formToJSON = (t) => at(f.isHTMLForm(t) ? new FormData(t) : t);
P.getAdapter = pt.getAdapter;
P.HttpStatusCode = Ee;
P.default = P;
const {
  Axios: wn,
  AxiosError: gn,
  CanceledError: bn,
  isCancel: Sn,
  CancelToken: xn,
  VERSION: En,
  all: Rn,
  Cancel: An,
  isAxiosError: On,
  spread: Tn,
  toFormData: Fn,
  AxiosHeaders: _n,
  HttpStatusCode: Cn,
  formToJSON: Nn,
  getAdapter: Pn,
  mergeConfig: vn
} = P, sn = {
  baseURL: "https://api.polyv.net/ai-public",
  timeout: 3e4,
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
    }, this.httpClient = P.create({
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
   * 根据视频ID获取推荐问题
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应
   */
  async getSuggestQuestionsByVid(e) {
    if (!e || !e.vid)
      return {
        message: "vid 参数是必需的",
        status: "fail",
        code: 400,
        data: null
      };
    const { vid: r, size: n, appId: s } = e;
    if (typeof r != "string" || r.length === 0 || r.length > 100)
      return {
        message: "vid 长度必须在1-100字符之间",
        status: "fail",
        code: 400,
        data: null
      };
    if (n !== void 0 && (typeof n != "number" || n < 1 || n > 50))
      return {
        message: "size 范围必须在1-50之间",
        status: "fail",
        code: 400,
        data: null
      };
    try {
      const a = await this.buildRequestParams({ vid: r, ...n !== void 0 && { size: n }, ...s !== void 0 && { appId: s }, timestamp: Date.now() });
      return console.log("getSuggestQuestionsByVid", a), await this.httpClient.get("/v1/knowledges/suggest-questions-by-vid", { params: a });
    } catch (a) {
      return {
        message: a.message || "请求失败",
        status: "fail",
        code: 500,
        data: null
      };
    }
  }
  /**
   * 根据视频ID获取视频摘要
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @returns {Promise<Object>} API响应
   */
  async getSummaryByVid(e) {
    if (!e || !e.vid)
      return {
        message: "vid 参数是必需的",
        status: "fail",
        code: 400,
        data: null
      };
    const { vid: r, appId: n } = e;
    if (typeof r != "string" || r.length === 0 || r.length > 100)
      return {
        message: "vid 长度必须在1-100字符之间",
        status: "fail",
        code: 400,
        data: null
      };
    try {
      const s = await this.buildRequestParams({ vid: r, appId: n, timestamp: Date.now() });
      return await this.httpClient.get("/v1/knowledges/summary-by-vid", { params: s });
    } catch (s) {
      return {
        message: s.message || "请求失败",
        status: "fail",
        code: 500,
        data: null
      };
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
function Fe(t, e = !1) {
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
  return /^\d{2}:\d{2}:\d{2}$/.test(t) || isNaN(t) ? t : Fe(t, !0);
}
function fn(t) {
  return !t && t !== 0 ? null : typeof t == "string" && t.includes(":") ? t : Fe(t, !0);
}
class dn {
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
    const { useCache: n = !0, questionsSize: s = 10, appId: a } = r, l = `video_${e}`;
    if (n && this.cache.has(l))
      return this.cache.get(l);
    try {
      const [d, g] = await Promise.allSettled([
        this.apiClient.getSummaryByVid({ vid: e, appId: a }),
        this.apiClient.getSuggestQuestionsByVid({ vid: e, size: s, appId: a })
      ]), h = this.processApiResponses(d, g);
      return n && this.cache.set(l, h), h;
    } catch (d) {
      throw console.error("获取视频数据失败:", d), new Error(`获取视频数据失败: ${d.message}`);
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
   * 处理API响应结果
   * @private
   */
  processApiResponses(e, r) {
    var s, a, l;
    const n = {
      success: !1,
      videoData: null,
      outlineData: [],
      suggestQuestions: [],
      introduction: "",
      // 添加介绍字段
      errors: []
    };
    if (e.status === "fulfilled" && e.value.status === "success") {
      const d = this.processSummaryData(e.value.data);
      n.videoData = d.videoData, n.outlineData = d.outlineData, n.introduction = d.introduction, n.success = !0;
    } else {
      const d = e.reason || ((s = e.value) == null ? void 0 : s.message) || "获取摘要失败";
      n.errors.push(`摘要接口: ${d}`);
    }
    if (r.status === "fulfilled" && r.value.status === "success")
      n.suggestQuestions = ((a = r.value.data) == null ? void 0 : a.questions) || [], n.suggestQuestions = n.suggestQuestions.map((d) => ({
        ...d,
        startTime: z(d.startTime),
        endTime: z(d.endTime)
      }));
    else {
      const d = r.reason || ((l = r.value) == null ? void 0 : l.message) || "获取推荐问题失败";
      n.errors.push(`推荐问题接口: ${d}`);
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
    const r = {
      title: e.title || "未知标题",
      host: e.host || e.author || "未知主持人",
      status: e.status || e.liveStatus || "已结束",
      viewers: e.viewers || e.viewCount || 0,
      duration: fn(e.duration) || "00:00:00",
      description: e.introduction || e.description || "",
      publishTime: e.publishTime || e.createTime || null
    };
    let n = [];
    return e.list && Array.isArray(e.list) ? n = e.list.map((s, a) => ({
      id: s.id || `outline_${a + 1}`,
      title: s.title || `分段 ${a + 1}`,
      startTime: z(s.startTime) || "00:00:00",
      endTime: z(s.endTime) || "00:00:00",
      summary: this.normalizeSummary(s.summary),
      keywords: s.keywords || []
    })) : e.outline && Array.isArray(e.outline) ? n = e.outline.map((s, a) => ({
      id: s.id || `outline_${a + 1}`,
      title: s.title || `分段 ${a + 1}`,
      startTime: z(s.startTime) || "00:00:00",
      endTime: z(s.endTime) || "00:00:00",
      summary: this.normalizeSummary(s.summary),
      keywords: s.keywords || []
    })) : e.segments && Array.isArray(e.segments) && (n = e.segments.map((s, a) => ({
      id: s.id || `segment_${a + 1}`,
      title: s.title || `分段 ${a + 1}`,
      startTime: z(s.start) || "00:00:00",
      endTime: z(s.end) || "00:00:00",
      summary: this.normalizeSummary(s.summary),
      keywords: s.keywords || []
    }))), {
      videoData: r,
      outlineData: n,
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
function hn(t) {
  return new dn(t);
}
const pn = {
  baseURL: "https://api.polyv.net/ai-public",
  timeout: 3e4,
  signatureMethod: "MD5"
}, Dn = {
  // 签名工具
  generateMD5Sign: Je,
  generateSign: Re,
  verifySign: Tt,
  addSignToParams: Ve,
  generateNonce: Ft,
  // API工具
  VodAiApiClient: ee,
  createApiClient: on,
  getSuggestQuestionsByVid: an,
  getSummaryByVid: un,
  // 服务层
  createVideoService: hn,
  DEFAULT_API_CONFIG: pn,
  // 时间工具
  formatTime: Fe,
  parseTime: cn,
  calculateDuration: ln
};
export {
  pn as DEFAULT_API_CONFIG,
  ee as VodAiApiClient,
  Ve as addSignToParams,
  ln as calculateDuration,
  on as createApiClient,
  hn as createVideoService,
  Dn as default,
  Fe as formatTime,
  Je as generateMD5Sign,
  Ft as generateNonce,
  Re as generateSign,
  an as getSuggestQuestionsByVid,
  un as getSummaryByVid,
  Dn as outlineLogic,
  cn as parseTime,
  Tt as verifySign
};
