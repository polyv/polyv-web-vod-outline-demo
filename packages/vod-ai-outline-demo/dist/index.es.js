var fa = { NODE_ENV: "production" };
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var wt = Object.freeze({}), j = Array.isArray;
function k(i) {
  return i == null;
}
function b(i) {
  return i != null;
}
function nt(i) {
  return i === !0;
}
function Mc(i) {
  return i === !1;
}
function Yi(i) {
  return typeof i == "string" || typeof i == "number" || // $flow-disable-line
  typeof i == "symbol" || typeof i == "boolean";
}
function J(i) {
  return typeof i == "function";
}
function gt(i) {
  return i !== null && typeof i == "object";
}
var wr = Object.prototype.toString;
function Lt(i) {
  return wr.call(i) === "[object Object]";
}
function Tc(i) {
  return wr.call(i) === "[object RegExp]";
}
function rh(i) {
  var t = parseFloat(String(i));
  return t >= 0 && Math.floor(t) === t && isFinite(i);
}
function As(i) {
  return b(i) && typeof i.then == "function" && typeof i.catch == "function";
}
function bc(i) {
  return i == null ? "" : Array.isArray(i) || Lt(i) && i.toString === wr ? JSON.stringify(i, Nc, 2) : String(i);
}
function Nc(i, t) {
  return t && t.__v_isRef ? t.value : t;
}
function Di(i) {
  var t = parseFloat(i);
  return isNaN(t) ? i : t;
}
function Ut(i, t) {
  for (var e = /* @__PURE__ */ Object.create(null), n = i.split(","), s = 0; s < n.length; s++)
    e[n[s]] = !0;
  return t ? function(r) {
    return e[r.toLowerCase()];
  } : function(r) {
    return e[r];
  };
}
Ut("slot,component", !0);
var Sc = Ut("key,ref,slot,slot-scope,is");
function ge(i, t) {
  var e = i.length;
  if (e) {
    if (t === i[e - 1]) {
      i.length = e - 1;
      return;
    }
    var n = i.indexOf(t);
    if (n > -1)
      return i.splice(n, 1);
  }
}
var Lc = Object.prototype.hasOwnProperty;
function yt(i, t) {
  return Lc.call(i, t);
}
function He(i) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    var s = t[n];
    return s || (t[n] = i(n));
  };
}
var Ac = /-(\w)/g, Re = He(function(i) {
  return i.replace(Ac, function(t, e) {
    return e ? e.toUpperCase() : "";
  });
}), Dc = He(function(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}), Oc = /\B([A-Z])/g, Xi = He(function(i) {
  return i.replace(Oc, "-$1").toLowerCase();
});
function Rc(i, t) {
  function e(n) {
    var s = arguments.length;
    return s ? s > 1 ? i.apply(t, arguments) : i.call(t, n) : i.call(t);
  }
  return e._length = i.length, e;
}
function Ic(i, t) {
  return i.bind(t);
}
var ah = Function.prototype.bind ? Ic : Rc;
function Ds(i, t) {
  t = t || 0;
  for (var e = i.length - t, n = new Array(e); e--; )
    n[e] = i[e + t];
  return n;
}
function Q(i, t) {
  for (var e in t)
    i[e] = t[e];
  return i;
}
function oh(i) {
  for (var t = {}, e = 0; e < i.length; e++)
    i[e] && Q(t, i[e]);
  return t;
}
function st(i, t, e) {
}
var nn = function(i, t, e) {
  return !1;
}, hh = function(i) {
  return i;
};
function Ie(i, t) {
  if (i === t)
    return !0;
  var e = gt(i), n = gt(t);
  if (e && n)
    try {
      var s = Array.isArray(i), r = Array.isArray(t);
      if (s && r)
        return i.length === t.length && i.every(function(h, l) {
          return Ie(h, t[l]);
        });
      if (i instanceof Date && t instanceof Date)
        return i.getTime() === t.getTime();
      if (!s && !r) {
        var a = Object.keys(i), o = Object.keys(t);
        return a.length === o.length && a.every(function(h) {
          return Ie(i[h], t[h]);
        });
      } else
        return !1;
    } catch {
      return !1;
    }
  else return !e && !n ? String(i) === String(t) : !1;
}
function lh(i, t) {
  for (var e = 0; e < i.length; e++)
    if (Ie(i[e], t))
      return e;
  return -1;
}
function bn(i) {
  var t = !1;
  return function() {
    t || (t = !0, i.apply(this, arguments));
  };
}
function zc(i, t) {
  return i === t ? i === 0 && 1 / i !== 1 / t : i === i || t === t;
}
var pa = "data-server-rendered", Xn = ["component", "directive", "filter"], ch = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
  "renderTracked",
  "renderTriggered"
], Ft = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: !1,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: fa.NODE_ENV !== "production",
  /**
   * Whether to enable devtools
   */
  devtools: fa.NODE_ENV !== "production",
  /**
   * Whether to record perf
   */
  performance: !1,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: nn,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: nn,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: nn,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: st,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: hh,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: nn,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: !0,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: ch
}, Fc = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function dh(i) {
  var t = (i + "").charCodeAt(0);
  return t === 36 || t === 95;
}
function le(i, t, e, n) {
  Object.defineProperty(i, t, {
    value: e,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
var kc = new RegExp("[^".concat(Fc.source, ".$_\\d]"));
function Pc(i) {
  if (!kc.test(i)) {
    var t = i.split(".");
    return function(e) {
      for (var n = 0; n < t.length; n++) {
        if (!e)
          return;
        e = e[t[n]];
      }
      return e;
    };
  }
}
var Bc = "__proto__" in {}, Tt = typeof window < "u", Pt = Tt && window.navigator.userAgent.toLowerCase(), li = Pt && /msie|trident/.test(Pt), ci = Pt && Pt.indexOf("msie 9.0") > 0, uh = Pt && Pt.indexOf("edge/") > 0;
Pt && Pt.indexOf("android") > 0;
var $c = Pt && /iphone|ipad|ipod|ios/.test(Pt), ma = Pt && Pt.match(/firefox\/(\d+)/), Os = {}.watch, fh = !1;
if (Tt)
  try {
    var ga = {};
    Object.defineProperty(ga, "passive", {
      get: function() {
        fh = !0;
      }
    }), window.addEventListener("test-passive", null, ga);
  } catch {
  }
var sn, di = function() {
  return sn === void 0 && (!Tt && typeof global < "u" ? sn = global.process && global.process.env.VUE_ENV === "server" : sn = !1), sn;
}, Nn = Tt && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function ri(i) {
  return typeof i == "function" && /native code/.test(i.toString());
}
var Vi = typeof Symbol < "u" && ri(Symbol) && typeof Reflect < "u" && ri(Reflect.ownKeys), Oi;
typeof Set < "u" && ri(Set) ? Oi = Set : Oi = /** @class */
function() {
  function i() {
    this.set = /* @__PURE__ */ Object.create(null);
  }
  return i.prototype.has = function(t) {
    return this.set[t] === !0;
  }, i.prototype.add = function(t) {
    this.set[t] = !0;
  }, i.prototype.clear = function() {
    this.set = /* @__PURE__ */ Object.create(null);
  }, i;
}();
var Kt = null;
function ce(i) {
  i === void 0 && (i = null), i || Kt && Kt._scope.off(), Kt = i, i && i._scope.on();
}
var At = (
  /** @class */
  function() {
    function i(t, e, n, s, r, a, o, h) {
      this.tag = t, this.data = e, this.children = n, this.text = s, this.elm = r, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = h, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }
    return Object.defineProperty(i.prototype, "child", {
      // DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      get: function() {
        return this.componentInstance;
      },
      enumerable: !1,
      configurable: !0
    }), i;
  }()
), Ne = function(i) {
  i === void 0 && (i = "");
  var t = new At();
  return t.text = i, t.isComment = !0, t;
};
function Ze(i) {
  return new At(void 0, void 0, void 0, String(i));
}
function Rs(i) {
  var t = new At(
    i.tag,
    i.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    i.children && i.children.slice(),
    i.text,
    i.elm,
    i.context,
    i.componentOptions,
    i.asyncFactory
  );
  return t.ns = i.ns, t.isStatic = i.isStatic, t.key = i.key, t.isComment = i.isComment, t.fnContext = i.fnContext, t.fnOptions = i.fnOptions, t.fnScopeId = i.fnScopeId, t.asyncMeta = i.asyncMeta, t.isCloned = !0, t;
}
var Hc = 0, vn = [], Uc = function() {
  for (var i = 0; i < vn.length; i++) {
    var t = vn[i];
    t.subs = t.subs.filter(function(e) {
      return e;
    }), t._pending = !1;
  }
  vn.length = 0;
}, de = (
  /** @class */
  function() {
    function i() {
      this._pending = !1, this.id = Hc++, this.subs = [];
    }
    return i.prototype.addSub = function(t) {
      this.subs.push(t);
    }, i.prototype.removeSub = function(t) {
      this.subs[this.subs.indexOf(t)] = null, this._pending || (this._pending = !0, vn.push(this));
    }, i.prototype.depend = function(t) {
      i.target && i.target.addDep(this);
    }, i.prototype.notify = function(t) {
      for (var e = this.subs.filter(function(a) {
        return a;
      }), n = 0, s = e.length; n < s; n++) {
        var r = e[n];
        r.update();
      }
    }, i;
  }()
);
de.target = null;
var yn = [];
function ui(i) {
  yn.push(i), de.target = i;
}
function fi() {
  yn.pop(), de.target = yn[yn.length - 1];
}
var ph = Array.prototype, Sn = Object.create(ph), jc = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
jc.forEach(function(i) {
  var t = ph[i];
  le(Sn, i, function() {
    for (var n = [], s = 0; s < arguments.length; s++)
      n[s] = arguments[s];
    var r = t.apply(this, n), a = this.__ob__, o;
    switch (i) {
      case "push":
      case "unshift":
        o = n;
        break;
      case "splice":
        o = n.slice(2);
        break;
    }
    return o && a.observeArray(o), a.dep.notify(), r;
  });
});
var va = Object.getOwnPropertyNames(Sn), mh = {}, Er = !0;
function ue(i) {
  Er = i;
}
var Gc = {
  notify: st,
  depend: st,
  addSub: st,
  removeSub: st
}, ya = (
  /** @class */
  function() {
    function i(t, e, n) {
      if (e === void 0 && (e = !1), n === void 0 && (n = !1), this.value = t, this.shallow = e, this.mock = n, this.dep = n ? Gc : new de(), this.vmCount = 0, le(t, "__ob__", this), j(t)) {
        if (!n)
          if (Bc)
            t.__proto__ = Sn;
          else
            for (var s = 0, r = va.length; s < r; s++) {
              var a = va[s];
              le(t, a, Sn[a]);
            }
        e || this.observeArray(t);
      } else
        for (var o = Object.keys(t), s = 0; s < o.length; s++) {
          var a = o[s];
          ze(t, a, mh, void 0, e, n);
        }
    }
    return i.prototype.observeArray = function(t) {
      for (var e = 0, n = t.length; e < n; e++)
        te(t[e], !1, this.mock);
    }, i;
  }()
);
function te(i, t, e) {
  if (i && yt(i, "__ob__") && i.__ob__ instanceof ya)
    return i.__ob__;
  if (Er && (e || !di()) && (j(i) || Lt(i)) && Object.isExtensible(i) && !i.__v_skip && !kt(i) && !(i instanceof At))
    return new ya(i, t, e);
}
function ze(i, t, e, n, s, r, a) {
  a === void 0 && (a = !1);
  var o = new de(), h = Object.getOwnPropertyDescriptor(i, t);
  if (!(h && h.configurable === !1)) {
    var l = h && h.get, c = h && h.set;
    (!l || c) && (e === mh || arguments.length === 2) && (e = i[t]);
    var d = s ? e && e.__ob__ : te(e, !1, r);
    return Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var f = l ? l.call(i) : e;
        return de.target && (o.depend(), d && (d.dep.depend(), j(f) && vh(f))), kt(f) && !s ? f.value : f;
      },
      set: function(f) {
        var m = l ? l.call(i) : e;
        if (zc(m, f)) {
          if (c)
            c.call(i, f);
          else {
            if (l)
              return;
            if (!s && kt(m) && !kt(f)) {
              m.value = f;
              return;
            } else
              e = f;
          }
          d = s ? f && f.__ob__ : te(f, !1, r), o.notify();
        }
      }
    }), o;
  }
}
function Cr(i, t, e) {
  if (!Vn(i)) {
    var n = i.__ob__;
    return j(i) && rh(t) ? (i.length = Math.max(i.length, t), i.splice(t, 1, e), n && !n.shallow && n.mock && te(e, !1, !0), e) : t in i && !(t in Object.prototype) ? (i[t] = e, e) : i._isVue || n && n.vmCount ? e : n ? (ze(n.value, t, e, void 0, n.shallow, n.mock), n.dep.notify(), e) : (i[t] = e, e);
  }
}
function gh(i, t) {
  if (j(i) && rh(t)) {
    i.splice(t, 1);
    return;
  }
  var e = i.__ob__;
  i._isVue || e && e.vmCount || Vn(i) || yt(i, t) && (delete i[t], e && e.dep.notify());
}
function vh(i) {
  for (var t = void 0, e = 0, n = i.length; e < n; e++)
    t = i[e], t && t.__ob__ && t.__ob__.dep.depend(), j(t) && vh(t);
}
function yh(i) {
  return Wc(i, !0), le(i, "__v_isShallow", !0), i;
}
function Wc(i, t) {
  Vn(i) || te(
    i,
    t,
    di()
    /* ssr mock reactivity */
  );
}
function _n(i) {
  return Vn(i) ? _n(i.__v_raw) : !!(i && i.__ob__);
}
function _a(i) {
  return !!(i && i.__v_isShallow);
}
function Vn(i) {
  return !!(i && i.__v_isReadonly);
}
function kt(i) {
  return !!(i && i.__v_isRef === !0);
}
function Is(i, t, e) {
  Object.defineProperty(i, e, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      var n = t[e];
      if (kt(n))
        return n.value;
      var s = n && n.__ob__;
      return s && s.dep.depend(), n;
    },
    set: function(n) {
      var s = t[e];
      kt(s) && !kt(n) ? s.value = n : t[e] = n;
    }
  });
}
var Mr = "watcher", Yc = "".concat(Mr, " getter"), Xc = "".concat(Mr, " cleanup");
function Vc(i, t) {
  return qc(i, null, { flush: "post" });
}
function qc(i, t, e) {
  var n = e === void 0 ? wt : e;
  n.immediate;
  var s = n.deep, r = n.flush, a = r === void 0 ? "pre" : r;
  n.onTrack, n.onTrigger;
  var o = Kt, h = function(f, m, v) {
    v === void 0 && (v = null);
    var x = ee(f, null, v, o, m);
    return s && x && x.__ob__ && x.__ob__.dep.depend(), x;
  }, l;
  kt(i) ? (l = function() {
    return i.value;
  }, _a(i)) : _n(i) ? (l = function() {
    return i.__ob__.dep.depend(), i;
  }, s = !0) : j(i) ? (i.some(function(f) {
    return _n(f) || _a(f);
  }), l = function() {
    return i.map(function(f) {
      if (kt(f))
        return f.value;
      if (_n(f))
        return f.__ob__.dep.depend(), Ii(f);
      if (J(f))
        return h(f, Yc);
    });
  }) : J(i) ? l = function() {
    if (!(o && o._isDestroyed))
      return c && c(), h(i, Mr, [d]);
  } : l = st;
  var c, d = function(f) {
    c = g.onStop = function() {
      h(f, Xc);
    };
  };
  if (di())
    return d = st, l(), st;
  var g = new qn(Kt, l, st, {
    lazy: !0
  });
  return g.noRecurse = !0, g.run = function() {
    g.active && g.get();
  }, a === "sync" ? g.update = g.run : a === "post" ? (g.post = !0, g.update = function() {
    return Hs(g);
  }) : g.update = function() {
    if (o && o === Kt && !o._isMounted) {
      var f = o._preWatchers || (o._preWatchers = []);
      f.indexOf(g) < 0 && f.push(g);
    } else
      Hs(g);
  }, a === "post" && o ? o.$once("hook:mounted", function() {
    return g.get();
  }) : g.get(), function() {
    g.teardown();
  };
}
var xt, Kc = (
  /** @class */
  function() {
    function i(t) {
      t === void 0 && (t = !1), this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = xt, !t && xt && (this.index = (xt.scopes || (xt.scopes = [])).push(this) - 1);
    }
    return i.prototype.run = function(t) {
      if (this.active) {
        var e = xt;
        try {
          return xt = this, t();
        } finally {
          xt = e;
        }
      }
    }, i.prototype.on = function() {
      xt = this;
    }, i.prototype.off = function() {
      xt = this.parent;
    }, i.prototype.stop = function(t) {
      if (this.active) {
        var e = void 0, n = void 0;
        for (e = 0, n = this.effects.length; e < n; e++)
          this.effects[e].teardown();
        for (e = 0, n = this.cleanups.length; e < n; e++)
          this.cleanups[e]();
        if (this.scopes)
          for (e = 0, n = this.scopes.length; e < n; e++)
            this.scopes[e].stop(!0);
        if (!this.detached && this.parent && !t) {
          var s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0, this.active = !1;
      }
    }, i;
  }()
);
function Zc(i, t) {
  t === void 0 && (t = xt), t && t.active && t.effects.push(i);
}
function Jc() {
  return xt;
}
function Qc(i) {
  var t = i._provided, e = i.$parent && i.$parent._provided;
  return e === t ? i._provided = Object.create(e) : t;
}
var xa = He(function(i) {
  var t = i.charAt(0) === "&";
  i = t ? i.slice(1) : i;
  var e = i.charAt(0) === "~";
  i = e ? i.slice(1) : i;
  var n = i.charAt(0) === "!";
  return i = n ? i.slice(1) : i, {
    name: i,
    once: e,
    capture: n,
    passive: t
  };
});
function zs(i, t) {
  function e() {
    var n = e.fns;
    if (j(n))
      for (var s = n.slice(), r = 0; r < s.length; r++)
        ee(s[r], null, arguments, t, "v-on handler");
    else
      return ee(n, null, arguments, t, "v-on handler");
  }
  return e.fns = i, e;
}
function _h(i, t, e, n, s, r) {
  var a, o, h, l;
  for (a in i)
    o = i[a], h = t[a], l = xa(a), k(o) || (k(h) ? (k(o.fns) && (o = i[a] = zs(o, r)), nt(l.once) && (o = i[a] = s(l.name, o, l.capture)), e(l.name, o, l.capture, l.passive, l.params)) : o !== h && (h.fns = o, i[a] = h));
  for (a in t)
    k(i[a]) && (l = xa(a), n(l.name, t[a], l.capture));
}
function oe(i, t, e) {
  i instanceof At && (i = i.data.hook || (i.data.hook = {}));
  var n, s = i[t];
  function r() {
    e.apply(this, arguments), ge(n.fns, r);
  }
  k(s) ? n = zs([r]) : b(s.fns) && nt(s.merged) ? (n = s, n.fns.push(r)) : n = zs([s, r]), n.merged = !0, i[t] = n;
}
function td(i, t, e) {
  var n = t.options.props;
  if (!k(n)) {
    var s = {}, r = i.attrs, a = i.props;
    if (b(r) || b(a))
      for (var o in n) {
        var h = Xi(o);
        wa(s, a, o, h, !0) || wa(s, r, o, h, !1);
      }
    return s;
  }
}
function wa(i, t, e, n, s) {
  if (b(t)) {
    if (yt(t, e))
      return i[e] = t[e], s || delete t[e], !0;
    if (yt(t, n))
      return i[e] = t[n], s || delete t[n], !0;
  }
  return !1;
}
function ed(i) {
  for (var t = 0; t < i.length; t++)
    if (j(i[t]))
      return Array.prototype.concat.apply([], i);
  return i;
}
function Tr(i) {
  return Yi(i) ? [Ze(i)] : j(i) ? xh(i) : void 0;
}
function xi(i) {
  return b(i) && b(i.text) && Mc(i.isComment);
}
function xh(i, t) {
  var e = [], n, s, r, a;
  for (n = 0; n < i.length; n++)
    s = i[n], !(k(s) || typeof s == "boolean") && (r = e.length - 1, a = e[r], j(s) ? s.length > 0 && (s = xh(s, "".concat(t || "", "_").concat(n)), xi(s[0]) && xi(a) && (e[r] = Ze(a.text + s[0].text), s.shift()), e.push.apply(e, s)) : Yi(s) ? xi(a) ? e[r] = Ze(a.text + s) : s !== "" && e.push(Ze(s)) : xi(s) && xi(a) ? e[r] = Ze(a.text + s.text) : (nt(i._isVList) && b(s.tag) && k(s.key) && b(t) && (s.key = "__vlist".concat(t, "_").concat(n, "__")), e.push(s)));
  return e;
}
function id(i, t) {
  var e = null, n, s, r, a;
  if (j(i) || typeof i == "string")
    for (e = new Array(i.length), n = 0, s = i.length; n < s; n++)
      e[n] = t(i[n], n);
  else if (typeof i == "number")
    for (e = new Array(i), n = 0; n < i; n++)
      e[n] = t(n + 1, n);
  else if (gt(i))
    if (Vi && i[Symbol.iterator]) {
      e = [];
      for (var o = i[Symbol.iterator](), h = o.next(); !h.done; )
        e.push(t(h.value, e.length)), h = o.next();
    } else
      for (r = Object.keys(i), e = new Array(r.length), n = 0, s = r.length; n < s; n++)
        a = r[n], e[n] = t(i[a], a, n);
  return b(e) || (e = []), e._isVList = !0, e;
}
function nd(i, t, e, n) {
  var s = this.$scopedSlots[i], r;
  s ? (e = e || {}, n && (e = Q(Q({}, n), e)), r = s(e) || (J(t) ? t() : t)) : r = this.$slots[i] || (J(t) ? t() : t);
  var a = e && e.slot;
  return a ? this.$createElement("template", { slot: a }, r) : r;
}
function sd(i) {
  return Rn(this.$options, "filters", i) || hh;
}
function Ea(i, t) {
  return j(i) ? i.indexOf(t) === -1 : i !== t;
}
function rd(i, t, e, n, s) {
  var r = Ft.keyCodes[t] || e;
  return s && n && !Ft.keyCodes[t] ? Ea(s, n) : r ? Ea(r, i) : n ? Xi(n) !== t : i === void 0;
}
function ad(i, t, e, n, s) {
  if (e && gt(e)) {
    j(e) && (e = oh(e));
    var r = void 0, a = function(h) {
      if (h === "class" || h === "style" || Sc(h))
        r = i;
      else {
        var l = i.attrs && i.attrs.type;
        r = n || Ft.mustUseProp(t, l, h) ? i.domProps || (i.domProps = {}) : i.attrs || (i.attrs = {});
      }
      var c = Re(h), d = Xi(h);
      if (!(c in r) && !(d in r) && (r[h] = e[h], s)) {
        var g = i.on || (i.on = {});
        g["update:".concat(h)] = function(f) {
          e[h] = f;
        };
      }
    };
    for (var o in e)
      a(o);
  }
  return i;
}
function od(i, t) {
  var e = this._staticTrees || (this._staticTrees = []), n = e[i];
  return n && !t || (n = e[i] = this.$options.staticRenderFns[i].call(
    this._renderProxy,
    this._c,
    this
    // for render fns generated for functional component templates
  ), wh(n, "__static__".concat(i), !1)), n;
}
function hd(i, t, e) {
  return wh(i, "__once__".concat(t).concat(e ? "_".concat(e) : ""), !0), i;
}
function wh(i, t, e) {
  if (j(i))
    for (var n = 0; n < i.length; n++)
      i[n] && typeof i[n] != "string" && Ca(i[n], "".concat(t, "_").concat(n), e);
  else
    Ca(i, t, e);
}
function Ca(i, t, e) {
  i.isStatic = !0, i.key = t, i.isOnce = e;
}
function ld(i, t) {
  if (t && Lt(t)) {
    var e = i.on = i.on ? Q({}, i.on) : {};
    for (var n in t) {
      var s = e[n], r = t[n];
      e[n] = s ? [].concat(s, r) : r;
    }
  }
  return i;
}
function Eh(i, t, e, n) {
  t = t || { $stable: !e };
  for (var s = 0; s < i.length; s++) {
    var r = i[s];
    j(r) ? Eh(r, t, e) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn);
  }
  return n && (t.$key = n), t;
}
function cd(i, t) {
  for (var e = 0; e < t.length; e += 2) {
    var n = t[e];
    typeof n == "string" && n && (i[t[e]] = t[e + 1]);
  }
  return i;
}
function dd(i, t) {
  return typeof i == "string" ? t + i : i;
}
function Ch(i) {
  i._o = hd, i._n = Di, i._s = bc, i._l = id, i._t = nd, i._q = Ie, i._i = lh, i._m = od, i._f = sd, i._k = rd, i._b = ad, i._v = Ze, i._e = Ne, i._u = Eh, i._g = ld, i._d = cd, i._p = dd;
}
function br(i, t) {
  if (!i || !i.length)
    return {};
  for (var e = {}, n = 0, s = i.length; n < s; n++) {
    var r = i[n], a = r.data;
    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, (r.context === t || r.fnContext === t) && a && a.slot != null) {
      var o = a.slot, h = e[o] || (e[o] = []);
      r.tag === "template" ? h.push.apply(h, r.children || []) : h.push(r);
    } else
      (e.default || (e.default = [])).push(r);
  }
  for (var l in e)
    e[l].every(ud) && delete e[l];
  return e;
}
function ud(i) {
  return i.isComment && !i.asyncFactory || i.text === " ";
}
function Ri(i) {
  return i.isComment && i.asyncFactory;
}
function Li(i, t, e, n) {
  var s, r = Object.keys(e).length > 0, a = t ? !!t.$stable : !r, o = t && t.$key;
  if (!t)
    s = {};
  else {
    if (t._normalized)
      return t._normalized;
    if (a && n && n !== wt && o === n.$key && !r && !n.$hasNormal)
      return n;
    s = {};
    for (var h in t)
      t[h] && h[0] !== "$" && (s[h] = fd(i, e, h, t[h]));
  }
  for (var l in e)
    l in s || (s[l] = pd(e, l));
  return t && Object.isExtensible(t) && (t._normalized = s), le(s, "$stable", a), le(s, "$key", o), le(s, "$hasNormal", r), s;
}
function fd(i, t, e, n) {
  var s = function() {
    var r = Kt;
    ce(i);
    var a = arguments.length ? n.apply(null, arguments) : n({});
    a = a && typeof a == "object" && !j(a) ? [a] : Tr(a);
    var o = a && a[0];
    return ce(r), a && (!o || a.length === 1 && o.isComment && !Ri(o)) ? void 0 : a;
  };
  return n.proxy && Object.defineProperty(t, e, {
    get: s,
    enumerable: !0,
    configurable: !0
  }), s;
}
function pd(i, t) {
  return function() {
    return i[t];
  };
}
function md(i) {
  var t = i.$options, e = t.setup;
  if (e) {
    var n = i._setupContext = gd(i);
    ce(i), ui();
    var s = ee(e, null, [i._props || yh({}), n], i, "setup");
    if (fi(), ce(), J(s))
      t.render = s;
    else if (gt(s))
      if (i._setupState = s, s.__sfc) {
        var a = i._setupProxy = {};
        for (var r in s)
          r !== "__sfc" && Is(a, s, r);
      } else
        for (var r in s)
          dh(r) || Is(i, s, r);
  }
}
function gd(i) {
  return {
    get attrs() {
      if (!i._attrsProxy) {
        var t = i._attrsProxy = {};
        le(t, "_v_attr_proxy", !0), Ln(t, i.$attrs, wt, i, "$attrs");
      }
      return i._attrsProxy;
    },
    get listeners() {
      if (!i._listenersProxy) {
        var t = i._listenersProxy = {};
        Ln(t, i.$listeners, wt, i, "$listeners");
      }
      return i._listenersProxy;
    },
    get slots() {
      return yd(i);
    },
    emit: ah(i.$emit, i),
    expose: function(t) {
      t && Object.keys(t).forEach(function(e) {
        return Is(i, t, e);
      });
    }
  };
}
function Ln(i, t, e, n, s) {
  var r = !1;
  for (var a in t)
    a in i ? t[a] !== e[a] && (r = !0) : (r = !0, vd(i, a, n, s));
  for (var a in i)
    a in t || (r = !0, delete i[a]);
  return r;
}
function vd(i, t, e, n) {
  Object.defineProperty(i, t, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      return e[n][t];
    }
  });
}
function yd(i) {
  return i._slotsProxy || Mh(i._slotsProxy = {}, i.$scopedSlots), i._slotsProxy;
}
function Mh(i, t) {
  for (var e in t)
    i[e] = t[e];
  for (var e in i)
    e in t || delete i[e];
}
function _d(i) {
  i._vnode = null, i._staticTrees = null;
  var t = i.$options, e = i.$vnode = t._parentVnode, n = e && e.context;
  i.$slots = br(t._renderChildren, n), i.$scopedSlots = e ? Li(i.$parent, e.data.scopedSlots, i.$slots) : wt, i._c = function(r, a, o, h) {
    return An(i, r, a, o, h, !1);
  }, i.$createElement = function(r, a, o, h) {
    return An(i, r, a, o, h, !0);
  };
  var s = e && e.data;
  ze(i, "$attrs", s && s.attrs || wt, null, !0), ze(i, "$listeners", t._parentListeners || wt, null, !0);
}
var xn = null;
function xd(i) {
  Ch(i.prototype), i.prototype.$nextTick = function(t) {
    return Nr(t, this);
  }, i.prototype._render = function() {
    var t = this, e = t.$options, n = e.render, s = e._parentVnode;
    s && t._isMounted && (t.$scopedSlots = Li(t.$parent, s.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && Mh(t._slotsProxy, t.$scopedSlots)), t.$vnode = s;
    var r = Kt, a = xn, o;
    try {
      ce(t), xn = t, o = n.call(t._renderProxy, t.$createElement);
    } catch (h) {
      Fe(h, t, "render"), o = t._vnode;
    } finally {
      xn = a, ce(r);
    }
    return j(o) && o.length === 1 && (o = o[0]), o instanceof At || (o = Ne()), o.parent = s, o;
  };
}
function us(i, t) {
  return (i.__esModule || Vi && i[Symbol.toStringTag] === "Module") && (i = i.default), gt(i) ? t.extend(i) : i;
}
function wd(i, t, e, n, s) {
  var r = Ne();
  return r.asyncFactory = i, r.asyncMeta = { data: t, context: e, children: n, tag: s }, r;
}
function Ed(i, t) {
  if (nt(i.error) && b(i.errorComp))
    return i.errorComp;
  if (b(i.resolved))
    return i.resolved;
  var e = xn;
  if (e && b(i.owners) && i.owners.indexOf(e) === -1 && i.owners.push(e), nt(i.loading) && b(i.loadingComp))
    return i.loadingComp;
  if (e && !b(i.owners)) {
    var n = i.owners = [e], s = !0, r = null, a = null;
    e.$on("hook:destroyed", function() {
      return ge(n, e);
    });
    var o = function(d) {
      for (var g = 0, f = n.length; g < f; g++)
        n[g].$forceUpdate();
      d && (n.length = 0, r !== null && (clearTimeout(r), r = null), a !== null && (clearTimeout(a), a = null));
    }, h = bn(function(d) {
      i.resolved = us(d, t), s ? n.length = 0 : o(!0);
    }), l = bn(function(d) {
      b(i.errorComp) && (i.error = !0, o(!0));
    }), c = i(h, l);
    return gt(c) && (As(c) ? k(i.resolved) && c.then(h, l) : As(c.component) && (c.component.then(h, l), b(c.error) && (i.errorComp = us(c.error, t)), b(c.loading) && (i.loadingComp = us(c.loading, t), c.delay === 0 ? i.loading = !0 : r = setTimeout(function() {
      r = null, k(i.resolved) && k(i.error) && (i.loading = !0, o(!1));
    }, c.delay || 200)), b(c.timeout) && (a = setTimeout(function() {
      a = null, k(i.resolved) && l(null);
    }, c.timeout)))), s = !1, i.loading ? i.loadingComp : i.resolved;
  }
}
function Th(i) {
  if (j(i))
    for (var t = 0; t < i.length; t++) {
      var e = i[t];
      if (b(e) && (b(e.componentOptions) || Ri(e)))
        return e;
    }
}
var Cd = 1, bh = 2;
function An(i, t, e, n, s, r) {
  return (j(e) || Yi(e)) && (s = n, n = e, e = void 0), nt(r) && (s = bh), Md(i, t, e, n, s);
}
function Md(i, t, e, n, s) {
  if (b(e) && b(e.__ob__) || (b(e) && b(e.is) && (t = e.is), !t))
    return Ne();
  j(n) && J(n[0]) && (e = e || {}, e.scopedSlots = { default: n[0] }, n.length = 0), s === bh ? n = Tr(n) : s === Cd && (n = ed(n));
  var r, a;
  if (typeof t == "string") {
    var o = void 0;
    a = i.$vnode && i.$vnode.ns || Ft.getTagNamespace(t), Ft.isReservedTag(t) ? r = new At(Ft.parsePlatformTagName(t), e, n, void 0, void 0, i) : (!e || !e.pre) && b(o = Rn(i.$options, "components", t)) ? r = Da(o, e, i, n, t) : r = new At(t, e, n, void 0, void 0, i);
  } else
    r = Da(t, e, i, n);
  return j(r) ? r : b(r) ? (b(a) && Nh(r, a), b(e) && Td(e), r) : Ne();
}
function Nh(i, t, e) {
  if (i.ns = t, i.tag === "foreignObject" && (t = void 0, e = !0), b(i.children))
    for (var n = 0, s = i.children.length; n < s; n++) {
      var r = i.children[n];
      b(r.tag) && (k(r.ns) || nt(e) && r.tag !== "svg") && Nh(r, t, e);
    }
}
function Td(i) {
  gt(i.style) && Ii(i.style), gt(i.class) && Ii(i.class);
}
function Fe(i, t, e) {
  ui();
  try {
    if (t)
      for (var n = t; n = n.$parent; ) {
        var s = n.$options.errorCaptured;
        if (s)
          for (var r = 0; r < s.length; r++)
            try {
              var a = s[r].call(n, i, t, e) === !1;
              if (a)
                return;
            } catch (o) {
              Ma(o, n, "errorCaptured hook");
            }
      }
    Ma(i, t, e);
  } finally {
    fi();
  }
}
function ee(i, t, e, n, s) {
  var r;
  try {
    r = e ? i.apply(t, e) : i.call(t), r && !r._isVue && As(r) && !r._handled && (r.catch(function(a) {
      return Fe(a, n, s + " (Promise/async)");
    }), r._handled = !0);
  } catch (a) {
    Fe(a, n, s);
  }
  return r;
}
function Ma(i, t, e) {
  if (Ft.errorHandler)
    try {
      return Ft.errorHandler.call(null, i, t, e);
    } catch (n) {
      n !== i && Ta(n);
    }
  Ta(i);
}
function Ta(i, t, e) {
  if (Tt && typeof console < "u")
    console.error(i);
  else
    throw i;
}
var Fs = !1, ks = [], Ps = !1;
function rn() {
  Ps = !1;
  var i = ks.slice(0);
  ks.length = 0;
  for (var t = 0; t < i.length; t++)
    i[t]();
}
var Ti;
if (typeof Promise < "u" && ri(Promise)) {
  var bd = Promise.resolve();
  Ti = function() {
    bd.then(rn), $c && setTimeout(st);
  }, Fs = !0;
} else if (!li && typeof MutationObserver < "u" && (ri(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var an = 1, Nd = new MutationObserver(rn), ba = document.createTextNode(String(an));
  Nd.observe(ba, {
    characterData: !0
  }), Ti = function() {
    an = (an + 1) % 2, ba.data = String(an);
  }, Fs = !0;
} else typeof setImmediate < "u" && ri(setImmediate) ? Ti = function() {
  setImmediate(rn);
} : Ti = function() {
  setTimeout(rn, 0);
};
function Nr(i, t) {
  var e;
  if (ks.push(function() {
    if (i)
      try {
        i.call(t);
      } catch (n) {
        Fe(n, t, "nextTick");
      }
    else e && e(t);
  }), Ps || (Ps = !0, Ti()), !i && typeof Promise < "u")
    return new Promise(function(n) {
      e = n;
    });
}
function Sd(i) {
  if (Tt) {
    var t = Kt;
    t && Vc(function() {
      var e = t.$el, n = i(t, t._setupProxy);
      if (e && e.nodeType === 1) {
        var s = e.style;
        for (var r in n)
          s.setProperty("--".concat(r), n[r]);
      }
    });
  }
}
var Ld = "2.7.16", Na = new Oi();
function Ii(i) {
  return wn(i, Na), Na.clear(), i;
}
function wn(i, t) {
  var e, n, s = j(i);
  if (!(!s && !gt(i) || i.__v_skip || Object.isFrozen(i) || i instanceof At)) {
    if (i.__ob__) {
      var r = i.__ob__.dep.id;
      if (t.has(r))
        return;
      t.add(r);
    }
    if (s)
      for (e = i.length; e--; )
        wn(i[e], t);
    else if (kt(i))
      wn(i.value, t);
    else
      for (n = Object.keys(i), e = n.length; e--; )
        wn(i[n[e]], t);
  }
}
var Ad = 0, qn = (
  /** @class */
  function() {
    function i(t, e, n, s, r) {
      Zc(
        this,
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        xt && !xt._vm ? xt : t ? t._scope : void 0
      ), (this.vm = t) && r && (t._watcher = this), s ? (this.deep = !!s.deep, this.user = !!s.user, this.lazy = !!s.lazy, this.sync = !!s.sync, this.before = s.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Ad, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Oi(), this.newDepIds = new Oi(), this.expression = "", J(e) ? this.getter = e : (this.getter = Pc(e), this.getter || (this.getter = st)), this.value = this.lazy ? void 0 : this.get();
    }
    return i.prototype.get = function() {
      ui(this);
      var t, e = this.vm;
      try {
        t = this.getter.call(e, e);
      } catch (n) {
        if (this.user)
          Fe(n, e, 'getter for watcher "'.concat(this.expression, '"'));
        else
          throw n;
      } finally {
        this.deep && Ii(t), fi(), this.cleanupDeps();
      }
      return t;
    }, i.prototype.addDep = function(t) {
      var e = t.id;
      this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, i.prototype.cleanupDeps = function() {
      for (var t = this.deps.length; t--; ) {
        var e = this.deps[t];
        this.newDepIds.has(e.id) || e.removeSub(this);
      }
      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, i.prototype.update = function() {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : Hs(this);
    }, i.prototype.run = function() {
      if (this.active) {
        var t = this.get();
        if (t !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        gt(t) || this.deep) {
          var e = this.value;
          if (this.value = t, this.user) {
            var n = 'callback for watcher "'.concat(this.expression, '"');
            ee(this.cb, this.vm, [t, e], this.vm, n);
          } else
            this.cb.call(this.vm, t, e);
        }
      }
    }, i.prototype.evaluate = function() {
      this.value = this.get(), this.dirty = !1;
    }, i.prototype.depend = function() {
      for (var t = this.deps.length; t--; )
        this.deps[t].depend();
    }, i.prototype.teardown = function() {
      if (this.vm && !this.vm._isBeingDestroyed && ge(this.vm._scope.effects, this), this.active) {
        for (var t = this.deps.length; t--; )
          this.deps[t].removeSub(this);
        this.active = !1, this.onStop && this.onStop();
      }
    }, i;
  }()
);
function Dd(i) {
  i._events = /* @__PURE__ */ Object.create(null), i._hasHookEvent = !1;
  var t = i.$options._parentListeners;
  t && Sh(i, t);
}
var zi;
function Od(i, t) {
  zi.$on(i, t);
}
function Rd(i, t) {
  zi.$off(i, t);
}
function Id(i, t) {
  var e = zi;
  return function n() {
    var s = t.apply(null, arguments);
    s !== null && e.$off(i, n);
  };
}
function Sh(i, t, e) {
  zi = i, _h(t, e || {}, Od, Rd, Id, i), zi = void 0;
}
function zd(i) {
  var t = /^hook:/;
  i.prototype.$on = function(e, n) {
    var s = this;
    if (j(e))
      for (var r = 0, a = e.length; r < a; r++)
        s.$on(e[r], n);
    else
      (s._events[e] || (s._events[e] = [])).push(n), t.test(e) && (s._hasHookEvent = !0);
    return s;
  }, i.prototype.$once = function(e, n) {
    var s = this;
    function r() {
      s.$off(e, r), n.apply(s, arguments);
    }
    return r.fn = n, s.$on(e, r), s;
  }, i.prototype.$off = function(e, n) {
    var s = this;
    if (!arguments.length)
      return s._events = /* @__PURE__ */ Object.create(null), s;
    if (j(e)) {
      for (var r = 0, a = e.length; r < a; r++)
        s.$off(e[r], n);
      return s;
    }
    var o = s._events[e];
    if (!o)
      return s;
    if (!n)
      return s._events[e] = null, s;
    for (var h, l = o.length; l--; )
      if (h = o[l], h === n || h.fn === n) {
        o.splice(l, 1);
        break;
      }
    return s;
  }, i.prototype.$emit = function(e) {
    var n = this, s = n._events[e];
    if (s) {
      s = s.length > 1 ? Ds(s) : s;
      for (var r = Ds(arguments, 1), a = 'event handler for "'.concat(e, '"'), o = 0, h = s.length; o < h; o++)
        ee(s[o], n, r, n, a);
    }
    return n;
  };
}
var Se = null;
function Lh(i) {
  var t = Se;
  return Se = i, function() {
    Se = t;
  };
}
function Fd(i) {
  var t = i.$options, e = t.parent;
  if (e && !t.abstract) {
    for (; e.$options.abstract && e.$parent; )
      e = e.$parent;
    e.$children.push(i);
  }
  i.$parent = e, i.$root = e ? e.$root : i, i.$children = [], i.$refs = {}, i._provided = e ? e._provided : /* @__PURE__ */ Object.create(null), i._watcher = null, i._inactive = null, i._directInactive = !1, i._isMounted = !1, i._isDestroyed = !1, i._isBeingDestroyed = !1;
}
function kd(i) {
  i.prototype._update = function(t, e) {
    var n = this, s = n.$el, r = n._vnode, a = Lh(n);
    n._vnode = t, r ? n.$el = n.__patch__(r, t) : n.$el = n.__patch__(
      n.$el,
      t,
      e,
      !1
      /* removeOnly */
    ), a(), s && (s.__vue__ = null), n.$el && (n.$el.__vue__ = n);
    for (var o = n; o && o.$vnode && o.$parent && o.$vnode === o.$parent._vnode; )
      o.$parent.$el = o.$el, o = o.$parent;
  }, i.prototype.$forceUpdate = function() {
    var t = this;
    t._watcher && t._watcher.update();
  }, i.prototype.$destroy = function() {
    var t = this;
    if (!t._isBeingDestroyed) {
      Ht(t, "beforeDestroy"), t._isBeingDestroyed = !0;
      var e = t.$parent;
      e && !e._isBeingDestroyed && !t.$options.abstract && ge(e.$children, t), t._scope.stop(), t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Ht(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
    }
  };
}
function Pd(i, t, e) {
  i.$el = t, i.$options.render || (i.$options.render = Ne), Ht(i, "beforeMount");
  var n;
  n = function() {
    i._update(i._render(), e);
  };
  var s = {
    before: function() {
      i._isMounted && !i._isDestroyed && Ht(i, "beforeUpdate");
    }
  };
  new qn(
    i,
    n,
    st,
    s,
    !0
    /* isRenderWatcher */
  ), e = !1;
  var r = i._preWatchers;
  if (r)
    for (var a = 0; a < r.length; a++)
      r[a].run();
  return i.$vnode == null && (i._isMounted = !0, Ht(i, "mounted")), i;
}
function Bd(i, t, e, n, s) {
  var r = n.data.scopedSlots, a = i.$scopedSlots, o = !!(r && !r.$stable || a !== wt && !a.$stable || r && i.$scopedSlots.$key !== r.$key || !r && i.$scopedSlots.$key), h = !!(s || // has new static slots
  i.$options._renderChildren || // has old static slots
  o), l = i.$vnode;
  i.$options._parentVnode = n, i.$vnode = n, i._vnode && (i._vnode.parent = n), i.$options._renderChildren = s;
  var c = n.data.attrs || wt;
  i._attrsProxy && Ln(i._attrsProxy, c, l.data && l.data.attrs || wt, i, "$attrs") && (h = !0), i.$attrs = c, e = e || wt;
  var d = i.$options._parentListeners;
  if (i._listenersProxy && Ln(i._listenersProxy, e, d || wt, i, "$listeners"), i.$listeners = i.$options._parentListeners = e, Sh(i, e, d), t && i.$options.props) {
    ue(!1);
    for (var g = i._props, f = i.$options._propKeys || [], m = 0; m < f.length; m++) {
      var v = f[m], x = i.$options.props;
      g[v] = Rr(v, x, t, i);
    }
    ue(!0), i.$options.propsData = t;
  }
  h && (i.$slots = br(s, n.context), i.$forceUpdate());
}
function Ah(i) {
  for (; i && (i = i.$parent); )
    if (i._inactive)
      return !0;
  return !1;
}
function Sr(i, t) {
  if (t) {
    if (i._directInactive = !1, Ah(i))
      return;
  } else if (i._directInactive)
    return;
  if (i._inactive || i._inactive === null) {
    i._inactive = !1;
    for (var e = 0; e < i.$children.length; e++)
      Sr(i.$children[e]);
    Ht(i, "activated");
  }
}
function Dh(i, t) {
  if (!(t && (i._directInactive = !0, Ah(i))) && !i._inactive) {
    i._inactive = !0;
    for (var e = 0; e < i.$children.length; e++)
      Dh(i.$children[e]);
    Ht(i, "deactivated");
  }
}
function Ht(i, t, e, n) {
  n === void 0 && (n = !0), ui();
  var s = Kt, r = Jc();
  n && ce(i);
  var a = i.$options[t], o = "".concat(t, " hook");
  if (a)
    for (var h = 0, l = a.length; h < l; h++)
      ee(a[h], i, null, i, o);
  i._hasHookEvent && i.$emit("hook:" + t), n && (ce(s), r && r.on()), fi();
}
var Jt = [], Lr = [], Dn = {}, Bs = !1, Ar = !1, Je = 0;
function $d() {
  Je = Jt.length = Lr.length = 0, Dn = {}, Bs = Ar = !1;
}
var Oh = 0, $s = Date.now;
if (Tt && !li) {
  var fs = window.performance;
  fs && typeof fs.now == "function" && $s() > document.createEvent("Event").timeStamp && ($s = function() {
    return fs.now();
  });
}
var Hd = function(i, t) {
  if (i.post) {
    if (!t.post)
      return 1;
  } else if (t.post)
    return -1;
  return i.id - t.id;
};
function Ud() {
  Oh = $s(), Ar = !0;
  var i, t;
  for (Jt.sort(Hd), Je = 0; Je < Jt.length; Je++)
    i = Jt[Je], i.before && i.before(), t = i.id, Dn[t] = null, i.run();
  var e = Lr.slice(), n = Jt.slice();
  $d(), Wd(e), jd(n), Uc(), Nn && Ft.devtools && Nn.emit("flush");
}
function jd(i) {
  for (var t = i.length; t--; ) {
    var e = i[t], n = e.vm;
    n && n._watcher === e && n._isMounted && !n._isDestroyed && Ht(n, "updated");
  }
}
function Gd(i) {
  i._inactive = !1, Lr.push(i);
}
function Wd(i) {
  for (var t = 0; t < i.length; t++)
    i[t]._inactive = !0, Sr(
      i[t],
      !0
      /* true */
    );
}
function Hs(i) {
  var t = i.id;
  if (Dn[t] == null && !(i === de.target && i.noRecurse)) {
    if (Dn[t] = !0, !Ar)
      Jt.push(i);
    else {
      for (var e = Jt.length - 1; e > Je && Jt[e].id > i.id; )
        e--;
      Jt.splice(e + 1, 0, i);
    }
    Bs || (Bs = !0, Nr(Ud));
  }
}
function Yd(i) {
  var t = i.$options.provide;
  if (t) {
    var e = J(t) ? t.call(i) : t;
    if (!gt(e))
      return;
    for (var n = Qc(i), s = Vi ? Reflect.ownKeys(e) : Object.keys(e), r = 0; r < s.length; r++) {
      var a = s[r];
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    }
  }
}
function Xd(i) {
  var t = Rh(i.$options.inject, i);
  t && (ue(!1), Object.keys(t).forEach(function(e) {
    ze(i, e, t[e]);
  }), ue(!0));
}
function Rh(i, t) {
  if (i) {
    for (var e = /* @__PURE__ */ Object.create(null), n = Vi ? Reflect.ownKeys(i) : Object.keys(i), s = 0; s < n.length; s++) {
      var r = n[s];
      if (r !== "__ob__") {
        var a = i[r].from;
        if (a in t._provided)
          e[r] = t._provided[a];
        else if ("default" in i[r]) {
          var o = i[r].default;
          e[r] = J(o) ? o.call(t) : o;
        }
      }
    }
    return e;
  }
}
function Dr(i, t, e, n, s) {
  var r = this, a = s.options, o;
  yt(n, "_uid") ? (o = Object.create(n), o._original = n) : (o = n, n = n._original);
  var h = nt(a._compiled), l = !h;
  this.data = i, this.props = t, this.children = e, this.parent = n, this.listeners = i.on || wt, this.injections = Rh(a.inject, n), this.slots = function() {
    return r.$slots || Li(n, i.scopedSlots, r.$slots = br(e, n)), r.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function() {
      return Li(n, i.scopedSlots, this.slots());
    }
  }), h && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = Li(n, i.scopedSlots, this.$slots)), a._scopeId ? this._c = function(c, d, g, f) {
    var m = An(o, c, d, g, f, l);
    return m && !j(m) && (m.fnScopeId = a._scopeId, m.fnContext = n), m;
  } : this._c = function(c, d, g, f) {
    return An(o, c, d, g, f, l);
  };
}
Ch(Dr.prototype);
function Vd(i, t, e, n, s) {
  var r = i.options, a = {}, o = r.props;
  if (b(o))
    for (var h in o)
      a[h] = Rr(h, o, t || wt);
  else
    b(e.attrs) && La(a, e.attrs), b(e.props) && La(a, e.props);
  var l = new Dr(e, a, s, n, i), c = r.render.call(null, l._c, l);
  if (c instanceof At)
    return Sa(c, e, l.parent, r);
  if (j(c)) {
    for (var d = Tr(c) || [], g = new Array(d.length), f = 0; f < d.length; f++)
      g[f] = Sa(d[f], e, l.parent, r);
    return g;
  }
}
function Sa(i, t, e, n, s) {
  var r = Rs(i);
  return r.fnContext = e, r.fnOptions = n, t.slot && ((r.data || (r.data = {})).slot = t.slot), r;
}
function La(i, t) {
  for (var e in t)
    i[Re(e)] = t[e];
}
function On(i) {
  return i.name || i.__name || i._componentTag;
}
var Or = {
  init: function(i, t) {
    if (i.componentInstance && !i.componentInstance._isDestroyed && i.data.keepAlive) {
      var e = i;
      Or.prepatch(e, e);
    } else {
      var n = i.componentInstance = qd(i, Se);
      n.$mount(t ? i.elm : void 0, t);
    }
  },
  prepatch: function(i, t) {
    var e = t.componentOptions, n = t.componentInstance = i.componentInstance;
    Bd(
      n,
      e.propsData,
      // updated props
      e.listeners,
      // updated listeners
      t,
      // new parent vnode
      e.children
      // new children
    );
  },
  insert: function(i) {
    var t = i.context, e = i.componentInstance;
    e._isMounted || (e._isMounted = !0, Ht(e, "mounted")), i.data.keepAlive && (t._isMounted ? Gd(e) : Sr(
      e,
      !0
      /* direct */
    ));
  },
  destroy: function(i) {
    var t = i.componentInstance;
    t._isDestroyed || (i.data.keepAlive ? Dh(
      t,
      !0
      /* direct */
    ) : t.$destroy());
  }
}, Aa = Object.keys(Or);
function Da(i, t, e, n, s) {
  if (!k(i)) {
    var r = e.$options._base;
    if (gt(i) && (i = r.extend(i)), typeof i == "function") {
      var a;
      if (k(i.cid) && (a = i, i = Ed(a, r), i === void 0))
        return wd(a, t, e, n, s);
      t = t || {}, zr(i), b(t.model) && Jd(i.options, t);
      var o = td(t, i);
      if (nt(i.options.functional))
        return Vd(i, o, t, e, n);
      var h = t.on;
      if (t.on = t.nativeOn, nt(i.options.abstract)) {
        var l = t.slot;
        t = {}, l && (t.slot = l);
      }
      Kd(t);
      var c = On(i.options) || s, d = new At(
        // @ts-expect-error
        "vue-component-".concat(i.cid).concat(c ? "-".concat(c) : ""),
        t,
        void 0,
        void 0,
        void 0,
        e,
        // @ts-expect-error
        { Ctor: i, propsData: o, listeners: h, tag: s, children: n },
        a
      );
      return d;
    }
  }
}
function qd(i, t) {
  var e = {
    _isComponent: !0,
    _parentVnode: i,
    parent: t
  }, n = i.data.inlineTemplate;
  return b(n) && (e.render = n.render, e.staticRenderFns = n.staticRenderFns), new i.componentOptions.Ctor(e);
}
function Kd(i) {
  for (var t = i.hook || (i.hook = {}), e = 0; e < Aa.length; e++) {
    var n = Aa[e], s = t[n], r = Or[n];
    s !== r && !(s && s._merged) && (t[n] = s ? Zd(r, s) : r);
  }
}
function Zd(i, t) {
  var e = function(n, s) {
    i(n, s), t(n, s);
  };
  return e._merged = !0, e;
}
function Jd(i, t) {
  var e = i.model && i.model.prop || "value", n = i.model && i.model.event || "input";
  (t.attrs || (t.attrs = {}))[e] = t.model.value;
  var s = t.on || (t.on = {}), r = s[n], a = t.model.callback;
  b(r) ? (j(r) ? r.indexOf(a) === -1 : r !== a) && (s[n] = [a].concat(r)) : s[n] = a;
}
var Qd = st, Vt = Ft.optionMergeStrategies;
function Fi(i, t, e) {
  if (e === void 0 && (e = !0), !t)
    return i;
  for (var n, s, r, a = Vi ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < a.length; o++)
    n = a[o], n !== "__ob__" && (s = i[n], r = t[n], !e || !yt(i, n) ? Cr(i, n, r) : s !== r && Lt(s) && Lt(r) && Fi(s, r));
  return i;
}
function Oa(i, t, e) {
  return e ? function() {
    var s = J(t) ? t.call(e, e) : t, r = J(i) ? i.call(e, e) : i;
    return s ? Fi(s, r) : r;
  } : t ? i ? function() {
    return Fi(J(t) ? t.call(this, this) : t, J(i) ? i.call(this, this) : i);
  } : t : i;
}
Vt.data = function(i, t, e) {
  return e ? Oa(i, t, e) : t && typeof t != "function" ? i : Oa(i, t);
};
function tu(i, t) {
  var e = t ? i ? i.concat(t) : j(t) ? t : [t] : i;
  return e && eu(e);
}
function eu(i) {
  for (var t = [], e = 0; e < i.length; e++)
    t.indexOf(i[e]) === -1 && t.push(i[e]);
  return t;
}
ch.forEach(function(i) {
  Vt[i] = tu;
});
function iu(i, t, e, n) {
  var s = Object.create(i || null);
  return t ? Q(s, t) : s;
}
Xn.forEach(function(i) {
  Vt[i + "s"] = iu;
});
Vt.watch = function(i, t, e, n) {
  if (i === Os && (i = void 0), t === Os && (t = void 0), !t)
    return Object.create(i || null);
  if (!i)
    return t;
  var s = {};
  Q(s, i);
  for (var r in t) {
    var a = s[r], o = t[r];
    a && !j(a) && (a = [a]), s[r] = a ? a.concat(o) : j(o) ? o : [o];
  }
  return s;
};
Vt.props = Vt.methods = Vt.inject = Vt.computed = function(i, t, e, n) {
  if (!i)
    return t;
  var s = /* @__PURE__ */ Object.create(null);
  return Q(s, i), t && Q(s, t), s;
};
Vt.provide = function(i, t) {
  return i ? function() {
    var e = /* @__PURE__ */ Object.create(null);
    return Fi(e, J(i) ? i.call(this) : i), t && Fi(
      e,
      J(t) ? t.call(this) : t,
      !1
      // non-recursive
    ), e;
  } : t;
};
var nu = function(i, t) {
  return t === void 0 ? i : t;
};
function su(i, t) {
  var e = i.props;
  if (e) {
    var n = {}, s, r, a;
    if (j(e))
      for (s = e.length; s--; )
        r = e[s], typeof r == "string" && (a = Re(r), n[a] = { type: null });
    else if (Lt(e))
      for (var o in e)
        r = e[o], a = Re(o), n[a] = Lt(r) ? r : { type: r };
    i.props = n;
  }
}
function ru(i, t) {
  var e = i.inject;
  if (e) {
    var n = i.inject = {};
    if (j(e))
      for (var s = 0; s < e.length; s++)
        n[e[s]] = { from: e[s] };
    else if (Lt(e))
      for (var r in e) {
        var a = e[r];
        n[r] = Lt(a) ? Q({ from: r }, a) : { from: a };
      }
  }
}
function au(i) {
  var t = i.directives;
  if (t)
    for (var e in t) {
      var n = t[e];
      J(n) && (t[e] = { bind: n, update: n });
    }
}
function ke(i, t, e) {
  if (J(t) && (t = t.options), su(t), ru(t), au(t), !t._base && (t.extends && (i = ke(i, t.extends, e)), t.mixins))
    for (var n = 0, s = t.mixins.length; n < s; n++)
      i = ke(i, t.mixins[n], e);
  var r = {}, a;
  for (a in i)
    o(a);
  for (a in t)
    yt(i, a) || o(a);
  function o(h) {
    var l = Vt[h] || nu;
    r[h] = l(i[h], t[h], e, h);
  }
  return r;
}
function Rn(i, t, e, n) {
  if (typeof e == "string") {
    var s = i[t];
    if (yt(s, e))
      return s[e];
    var r = Re(e);
    if (yt(s, r))
      return s[r];
    var a = Dc(r);
    if (yt(s, a))
      return s[a];
    var o = s[e] || s[r] || s[a];
    return o;
  }
}
function Rr(i, t, e, n) {
  var s = t[i], r = !yt(e, i), a = e[i], o = Ia(Boolean, s.type);
  if (o > -1) {
    if (r && !yt(s, "default"))
      a = !1;
    else if (a === "" || a === Xi(i)) {
      var h = Ia(String, s.type);
      (h < 0 || o < h) && (a = !0);
    }
  }
  if (a === void 0) {
    a = ou(n, s, i);
    var l = Er;
    ue(!0), te(a), ue(l);
  }
  return a;
}
function ou(i, t, e) {
  if (yt(t, "default")) {
    var n = t.default;
    return i && i.$options.propsData && i.$options.propsData[e] === void 0 && i._props[e] !== void 0 ? i._props[e] : J(n) && Us(t.type) !== "Function" ? n.call(i) : n;
  }
}
var hu = /^\s*function (\w+)/;
function Us(i) {
  var t = i && i.toString().match(hu);
  return t ? t[1] : "";
}
function Ra(i, t) {
  return Us(i) === Us(t);
}
function Ia(i, t) {
  if (!j(t))
    return Ra(t, i) ? 0 : -1;
  for (var e = 0, n = t.length; e < n; e++)
    if (Ra(t[e], i))
      return e;
  return -1;
}
var re = {
  enumerable: !0,
  configurable: !0,
  get: st,
  set: st
};
function Ir(i, t, e) {
  re.get = function() {
    return this[t][e];
  }, re.set = function(s) {
    this[t][e] = s;
  }, Object.defineProperty(i, e, re);
}
function lu(i) {
  var t = i.$options;
  if (t.props && cu(i, t.props), md(i), t.methods && mu(i, t.methods), t.data)
    du(i);
  else {
    var e = te(i._data = {});
    e && e.vmCount++;
  }
  t.computed && pu(i, t.computed), t.watch && t.watch !== Os && gu(i, t.watch);
}
function cu(i, t) {
  var e = i.$options.propsData || {}, n = i._props = yh({}), s = i.$options._propKeys = [], r = !i.$parent;
  r || ue(!1);
  var a = function(h) {
    s.push(h);
    var l = Rr(h, t, e, i);
    ze(
      n,
      h,
      l,
      void 0,
      !0
      /* shallow */
    ), h in i || Ir(i, "_props", h);
  };
  for (var o in t)
    a(o);
  ue(!0);
}
function du(i) {
  var t = i.$options.data;
  t = i._data = J(t) ? uu(t, i) : t || {}, Lt(t) || (t = {});
  var e = Object.keys(t), n = i.$options.props;
  i.$options.methods;
  for (var s = e.length; s--; ) {
    var r = e[s];
    n && yt(n, r) || dh(r) || Ir(i, "_data", r);
  }
  var a = te(t);
  a && a.vmCount++;
}
function uu(i, t) {
  ui();
  try {
    return i.call(t, t);
  } catch (e) {
    return Fe(e, t, "data()"), {};
  } finally {
    fi();
  }
}
var fu = { lazy: !0 };
function pu(i, t) {
  var e = i._computedWatchers = /* @__PURE__ */ Object.create(null), n = di();
  for (var s in t) {
    var r = t[s], a = J(r) ? r : r.get;
    n || (e[s] = new qn(i, a || st, st, fu)), s in i || Ih(i, s, r);
  }
}
function Ih(i, t, e) {
  var n = !di();
  J(e) ? (re.get = n ? za(t) : Fa(e), re.set = st) : (re.get = e.get ? n && e.cache !== !1 ? za(t) : Fa(e.get) : st, re.set = e.set || st), Object.defineProperty(i, t, re);
}
function za(i) {
  return function() {
    var e = this._computedWatchers && this._computedWatchers[i];
    if (e)
      return e.dirty && e.evaluate(), de.target && e.depend(), e.value;
  };
}
function Fa(i) {
  return function() {
    return i.call(this, this);
  };
}
function mu(i, t) {
  i.$options.props;
  for (var e in t)
    i[e] = typeof t[e] != "function" ? st : ah(t[e], i);
}
function gu(i, t) {
  for (var e in t) {
    var n = t[e];
    if (j(n))
      for (var s = 0; s < n.length; s++)
        js(i, e, n[s]);
    else
      js(i, e, n);
  }
}
function js(i, t, e, n) {
  return Lt(e) && (n = e, e = e.handler), typeof e == "string" && (e = i[e]), i.$watch(t, e, n);
}
function vu(i) {
  var t = {};
  t.get = function() {
    return this._data;
  };
  var e = {};
  e.get = function() {
    return this._props;
  }, Object.defineProperty(i.prototype, "$data", t), Object.defineProperty(i.prototype, "$props", e), i.prototype.$set = Cr, i.prototype.$delete = gh, i.prototype.$watch = function(n, s, r) {
    var a = this;
    if (Lt(s))
      return js(a, n, s, r);
    r = r || {}, r.user = !0;
    var o = new qn(a, n, s, r);
    if (r.immediate) {
      var h = 'callback for immediate watcher "'.concat(o.expression, '"');
      ui(), ee(s, a, [o.value], a, h), fi();
    }
    return function() {
      o.teardown();
    };
  };
}
var yu = 0;
function _u(i) {
  i.prototype._init = function(t) {
    var e = this;
    e._uid = yu++, e._isVue = !0, e.__v_skip = !0, e._scope = new Kc(
      !0
      /* detached */
    ), e._scope.parent = void 0, e._scope._vm = !0, t && t._isComponent ? xu(e, t) : e.$options = ke(zr(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, Fd(e), Dd(e), _d(e), Ht(
      e,
      "beforeCreate",
      void 0,
      !1
      /* setContext */
    ), Xd(e), lu(e), Yd(e), Ht(e, "created"), e.$options.el && e.$mount(e.$options.el);
  };
}
function xu(i, t) {
  var e = i.$options = Object.create(i.constructor.options), n = t._parentVnode;
  e.parent = t.parent, e._parentVnode = n;
  var s = n.componentOptions;
  e.propsData = s.propsData, e._parentListeners = s.listeners, e._renderChildren = s.children, e._componentTag = s.tag, t.render && (e.render = t.render, e.staticRenderFns = t.staticRenderFns);
}
function zr(i) {
  var t = i.options;
  if (i.super) {
    var e = zr(i.super), n = i.superOptions;
    if (e !== n) {
      i.superOptions = e;
      var s = wu(i);
      s && Q(i.extendOptions, s), t = i.options = ke(e, i.extendOptions), t.name && (t.components[t.name] = i);
    }
  }
  return t;
}
function wu(i) {
  var t, e = i.options, n = i.sealedOptions;
  for (var s in e)
    e[s] !== n[s] && (t || (t = {}), t[s] = e[s]);
  return t;
}
function rt(i) {
  this._init(i);
}
_u(rt);
vu(rt);
zd(rt);
kd(rt);
xd(rt);
function Eu(i) {
  i.use = function(t) {
    var e = this._installedPlugins || (this._installedPlugins = []);
    if (e.indexOf(t) > -1)
      return this;
    var n = Ds(arguments, 1);
    return n.unshift(this), J(t.install) ? t.install.apply(t, n) : J(t) && t.apply(null, n), e.push(t), this;
  };
}
function Cu(i) {
  i.mixin = function(t) {
    return this.options = ke(this.options, t), this;
  };
}
function Mu(i) {
  i.cid = 0;
  var t = 1;
  i.extend = function(e) {
    e = e || {};
    var n = this, s = n.cid, r = e._Ctor || (e._Ctor = {});
    if (r[s])
      return r[s];
    var a = On(e) || On(n.options), o = function(l) {
      this._init(l);
    };
    return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = ke(n.options, e), o.super = n, o.options.props && Tu(o), o.options.computed && bu(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, Xn.forEach(function(h) {
      o[h] = n[h];
    }), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = e, o.sealedOptions = Q({}, o.options), r[s] = o, o;
  };
}
function Tu(i) {
  var t = i.options.props;
  for (var e in t)
    Ir(i.prototype, "_props", e);
}
function bu(i) {
  var t = i.options.computed;
  for (var e in t)
    Ih(i.prototype, e, t[e]);
}
function Nu(i) {
  Xn.forEach(function(t) {
    i[t] = function(e, n) {
      return n ? (t === "component" && Lt(n) && (n.name = n.name || e, n = this.options._base.extend(n)), t === "directive" && J(n) && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
    };
  });
}
function ka(i) {
  return i && (On(i.Ctor.options) || i.tag);
}
function on(i, t) {
  return j(i) ? i.indexOf(t) > -1 : typeof i == "string" ? i.split(",").indexOf(t) > -1 : Tc(i) ? i.test(t) : !1;
}
function Pa(i, t) {
  var e = i.cache, n = i.keys, s = i._vnode, r = i.$vnode;
  for (var a in e) {
    var o = e[a];
    if (o) {
      var h = o.name;
      h && !t(h) && Gs(e, a, n, s);
    }
  }
  r.componentOptions.children = void 0;
}
function Gs(i, t, e, n) {
  var s = i[t];
  s && (!n || s.tag !== n.tag) && s.componentInstance.$destroy(), i[t] = null, ge(e, t);
}
var Ba = [String, RegExp, Array], Su = {
  name: "keep-alive",
  abstract: !0,
  props: {
    include: Ba,
    exclude: Ba,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var i = this, t = i.cache, e = i.keys, n = i.vnodeToCache, s = i.keyToCache;
      if (n) {
        var r = n.tag, a = n.componentInstance, o = n.componentOptions;
        t[s] = {
          name: ka(o),
          tag: r,
          componentInstance: a
        }, e.push(s), this.max && e.length > parseInt(this.max) && Gs(t, e[0], e, this._vnode), this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
  },
  destroyed: function() {
    for (var i in this.cache)
      Gs(this.cache, i, this.keys);
  },
  mounted: function() {
    var i = this;
    this.cacheVNode(), this.$watch("include", function(t) {
      Pa(i, function(e) {
        return on(t, e);
      });
    }), this.$watch("exclude", function(t) {
      Pa(i, function(e) {
        return !on(t, e);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var i = this.$slots.default, t = Th(i), e = t && t.componentOptions;
    if (e) {
      var n = ka(e), s = this, r = s.include, a = s.exclude;
      if (
        // not included
        r && (!n || !on(r, n)) || // excluded
        a && n && on(a, n)
      )
        return t;
      var o = this, h = o.cache, l = o.keys, c = t.key == null ? (
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        e.Ctor.cid + (e.tag ? "::".concat(e.tag) : "")
      ) : t.key;
      h[c] ? (t.componentInstance = h[c].componentInstance, ge(l, c), l.push(c)) : (this.vnodeToCache = t, this.keyToCache = c), t.data.keepAlive = !0;
    }
    return t || i && i[0];
  }
}, Lu = {
  KeepAlive: Su
};
function Au(i) {
  var t = {};
  t.get = function() {
    return Ft;
  }, Object.defineProperty(i, "config", t), i.util = {
    warn: Qd,
    extend: Q,
    mergeOptions: ke,
    defineReactive: ze
  }, i.set = Cr, i.delete = gh, i.nextTick = Nr, i.observable = function(e) {
    return te(e), e;
  }, i.options = /* @__PURE__ */ Object.create(null), Xn.forEach(function(e) {
    i.options[e + "s"] = /* @__PURE__ */ Object.create(null);
  }), i.options._base = i, Q(i.options.components, Lu), Eu(i), Cu(i), Mu(i), Nu(i);
}
Au(rt);
Object.defineProperty(rt.prototype, "$isServer", {
  get: di
});
Object.defineProperty(rt.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(rt, "FunctionalRenderContext", {
  value: Dr
});
rt.version = Ld;
var Du = Ut("style,class"), Ou = Ut("input,textarea,option,select,progress"), Ru = function(i, t, e) {
  return e === "value" && Ou(i) && t !== "button" || e === "selected" && i === "option" || e === "checked" && i === "input" || e === "muted" && i === "video";
}, zh = Ut("contenteditable,draggable,spellcheck"), Iu = Ut("events,caret,typing,plaintext-only"), zu = function(i, t) {
  return In(t) || t === "false" ? "false" : (
    // allow arbitrary string value for contenteditable
    i === "contenteditable" && Iu(t) ? t : "true"
  );
}, Fu = Ut("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), Ws = "http://www.w3.org/1999/xlink", Fr = function(i) {
  return i.charAt(5) === ":" && i.slice(0, 5) === "xlink";
}, Fh = function(i) {
  return Fr(i) ? i.slice(6, i.length) : "";
}, In = function(i) {
  return i == null || i === !1;
};
function ku(i) {
  for (var t = i.data, e = i, n = i; b(n.componentInstance); )
    n = n.componentInstance._vnode, n && n.data && (t = $a(n.data, t));
  for (; b(e = e.parent); )
    e && e.data && (t = $a(t, e.data));
  return Pu(t.staticClass, t.class);
}
function $a(i, t) {
  return {
    staticClass: kr(i.staticClass, t.staticClass),
    class: b(i.class) ? [i.class, t.class] : t.class
  };
}
function Pu(i, t) {
  return b(i) || b(t) ? kr(i, Pr(t)) : "";
}
function kr(i, t) {
  return i ? t ? i + " " + t : i : t || "";
}
function Pr(i) {
  return Array.isArray(i) ? Bu(i) : gt(i) ? $u(i) : typeof i == "string" ? i : "";
}
function Bu(i) {
  for (var t = "", e, n = 0, s = i.length; n < s; n++)
    b(e = Pr(i[n])) && e !== "" && (t && (t += " "), t += e);
  return t;
}
function $u(i) {
  var t = "";
  for (var e in i)
    i[e] && (t && (t += " "), t += e);
  return t;
}
var Hu = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
}, Uu = Ut("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Br = Ut("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), kh = function(i) {
  return Uu(i) || Br(i);
};
function ju(i) {
  if (Br(i))
    return "svg";
  if (i === "math")
    return "math";
}
var hn = /* @__PURE__ */ Object.create(null);
function Gu(i) {
  if (!Tt)
    return !0;
  if (kh(i))
    return !1;
  if (i = i.toLowerCase(), hn[i] != null)
    return hn[i];
  var t = document.createElement(i);
  return i.indexOf("-") > -1 ? hn[i] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : hn[i] = /HTMLUnknownElement/.test(t.toString());
}
var Ys = Ut("text,number,password,search,email,tel,url");
function Wu(i) {
  if (typeof i == "string") {
    var t = document.querySelector(i);
    return t || document.createElement("div");
  } else
    return i;
}
function Yu(i, t) {
  var e = document.createElement(i);
  return i !== "select" || t.data && t.data.attrs && t.data.attrs.multiple !== void 0 && e.setAttribute("multiple", "multiple"), e;
}
function Xu(i, t) {
  return document.createElementNS(Hu[i], t);
}
function Vu(i) {
  return document.createTextNode(i);
}
function qu(i) {
  return document.createComment(i);
}
function Ku(i, t, e) {
  i.insertBefore(t, e);
}
function Zu(i, t) {
  i.removeChild(t);
}
function Ju(i, t) {
  i.appendChild(t);
}
function Qu(i) {
  return i.parentNode;
}
function tf(i) {
  return i.nextSibling;
}
function ef(i) {
  return i.tagName;
}
function nf(i, t) {
  i.textContent = t;
}
function sf(i, t) {
  i.setAttribute(t, "");
}
var rf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createElement: Yu,
  createElementNS: Xu,
  createTextNode: Vu,
  createComment: qu,
  insertBefore: Ku,
  removeChild: Zu,
  appendChild: Ju,
  parentNode: Qu,
  nextSibling: tf,
  tagName: ef,
  setTextContent: nf,
  setStyleScope: sf
}), af = {
  create: function(i, t) {
    Qe(t);
  },
  update: function(i, t) {
    i.data.ref !== t.data.ref && (Qe(i, !0), Qe(t));
  },
  destroy: function(i) {
    Qe(i, !0);
  }
};
function Qe(i, t) {
  var e = i.data.ref;
  if (b(e)) {
    var n = i.context, s = i.componentInstance || i.elm, r = t ? null : s, a = t ? void 0 : s;
    if (J(e)) {
      ee(e, n, [r], n, "template ref function");
      return;
    }
    var o = i.data.refInFor, h = typeof e == "string" || typeof e == "number", l = kt(e), c = n.$refs;
    if (h || l) {
      if (o) {
        var d = h ? c[e] : e.value;
        t ? j(d) && ge(d, s) : j(d) ? d.includes(s) || d.push(s) : h ? (c[e] = [s], Ha(n, e, c[e])) : e.value = [s];
      } else if (h) {
        if (t && c[e] !== s)
          return;
        c[e] = a, Ha(n, e, r);
      } else if (l) {
        if (t && e.value !== s)
          return;
        e.value = r;
      }
    }
  }
}
function Ha(i, t, e) {
  var n = i._setupState;
  n && yt(n, t) && (kt(n[t]) ? n[t].value = e : n[t] = e);
}
var he = new At("", {}, []), wi = ["create", "activate", "update", "remove", "destroy"];
function xe(i, t) {
  return i.key === t.key && i.asyncFactory === t.asyncFactory && (i.tag === t.tag && i.isComment === t.isComment && b(i.data) === b(t.data) && of(i, t) || nt(i.isAsyncPlaceholder) && k(t.asyncFactory.error));
}
function of(i, t) {
  if (i.tag !== "input")
    return !0;
  var e, n = b(e = i.data) && b(e = e.attrs) && e.type, s = b(e = t.data) && b(e = e.attrs) && e.type;
  return n === s || Ys(n) && Ys(s);
}
function hf(i, t, e) {
  var n, s, r = {};
  for (n = t; n <= e; ++n)
    s = i[n].key, b(s) && (r[s] = n);
  return r;
}
function lf(i) {
  var t, e, n = {}, s = i.modules, r = i.nodeOps;
  for (t = 0; t < wi.length; ++t)
    for (n[wi[t]] = [], e = 0; e < s.length; ++e)
      b(s[e][wi[t]]) && n[wi[t]].push(s[e][wi[t]]);
  function a(u) {
    return new At(r.tagName(u).toLowerCase(), {}, [], void 0, u);
  }
  function o(u, p) {
    function y() {
      --y.listeners === 0 && h(u);
    }
    return y.listeners = p, y;
  }
  function h(u) {
    var p = r.parentNode(u);
    b(p) && r.removeChild(p, u);
  }
  function l(u, p, y, _, S, C, L) {
    if (b(u.elm) && b(C) && (u = C[L] = Rs(u)), u.isRootInsert = !S, !c(u, p, y, _)) {
      var O = u.data, F = u.children, Y = u.tag;
      b(Y) ? (u.elm = u.ns ? r.createElementNS(u.ns, Y) : r.createElement(Y, u), w(u), m(u, F, p), b(O) && x(u, p), f(y, u.elm, _)) : nt(u.isComment) ? (u.elm = r.createComment(u.text), f(y, u.elm, _)) : (u.elm = r.createTextNode(u.text), f(y, u.elm, _));
    }
  }
  function c(u, p, y, _) {
    var S = u.data;
    if (b(S)) {
      var C = b(u.componentInstance) && S.keepAlive;
      if (b(S = S.hook) && b(S = S.init) && S(
        u,
        !1
        /* hydrating */
      ), b(u.componentInstance))
        return d(u, p), f(y, u.elm, _), nt(C) && g(u, p, y, _), !0;
    }
  }
  function d(u, p) {
    b(u.data.pendingInsert) && (p.push.apply(p, u.data.pendingInsert), u.data.pendingInsert = null), u.elm = u.componentInstance.$el, v(u) ? (x(u, p), w(u)) : (Qe(u), p.push(u));
  }
  function g(u, p, y, _) {
    for (var S, C = u; C.componentInstance; )
      if (C = C.componentInstance._vnode, b(S = C.data) && b(S = S.transition)) {
        for (S = 0; S < n.activate.length; ++S)
          n.activate[S](he, C);
        p.push(C);
        break;
      }
    f(y, u.elm, _);
  }
  function f(u, p, y) {
    b(u) && (b(y) ? r.parentNode(y) === u && r.insertBefore(u, p, y) : r.appendChild(u, p));
  }
  function m(u, p, y) {
    if (j(p))
      for (var _ = 0; _ < p.length; ++_)
        l(p[_], y, u.elm, null, !0, p, _);
    else Yi(u.text) && r.appendChild(u.elm, r.createTextNode(String(u.text)));
  }
  function v(u) {
    for (; u.componentInstance; )
      u = u.componentInstance._vnode;
    return b(u.tag);
  }
  function x(u, p) {
    for (var y = 0; y < n.create.length; ++y)
      n.create[y](he, u);
    t = u.data.hook, b(t) && (b(t.create) && t.create(he, u), b(t.insert) && p.push(u));
  }
  function w(u) {
    var p;
    if (b(p = u.fnScopeId))
      r.setStyleScope(u.elm, p);
    else
      for (var y = u; y; )
        b(p = y.context) && b(p = p.$options._scopeId) && r.setStyleScope(u.elm, p), y = y.parent;
    b(p = Se) && p !== u.context && p !== u.fnContext && b(p = p.$options._scopeId) && r.setStyleScope(u.elm, p);
  }
  function M(u, p, y, _, S, C) {
    for (; _ <= S; ++_)
      l(y[_], C, u, p, !1, y, _);
  }
  function T(u) {
    var p, y, _ = u.data;
    if (b(_))
      for (b(p = _.hook) && b(p = p.destroy) && p(u), p = 0; p < n.destroy.length; ++p)
        n.destroy[p](u);
    if (b(p = u.children))
      for (y = 0; y < u.children.length; ++y)
        T(u.children[y]);
  }
  function A(u, p, y) {
    for (; p <= y; ++p) {
      var _ = u[p];
      b(_) && (b(_.tag) ? (D(_), T(_)) : h(_.elm));
    }
  }
  function D(u, p) {
    if (b(p) || b(u.data)) {
      var y, _ = n.remove.length + 1;
      for (b(p) ? p.listeners += _ : p = o(u.elm, _), b(y = u.componentInstance) && b(y = y._vnode) && b(y.data) && D(y, p), y = 0; y < n.remove.length; ++y)
        n.remove[y](u, p);
      b(y = u.data.hook) && b(y = y.remove) ? y(u, p) : p();
    } else
      h(u.elm);
  }
  function I(u, p, y, _, S) {
    for (var C = 0, L = 0, O = p.length - 1, F = p[0], Y = p[O], X = y.length - 1, lt = y[0], Rt = y[X], ve, ye, _e, Xe, ds = !S; C <= O && L <= X; )
      k(F) ? F = p[++C] : k(Y) ? Y = p[--O] : xe(F, lt) ? ($(F, lt, _, y, L), F = p[++C], lt = y[++L]) : xe(Y, Rt) ? ($(Y, Rt, _, y, X), Y = p[--O], Rt = y[--X]) : xe(F, Rt) ? ($(F, Rt, _, y, X), ds && r.insertBefore(u, F.elm, r.nextSibling(Y.elm)), F = p[++C], Rt = y[--X]) : xe(Y, lt) ? ($(Y, lt, _, y, L), ds && r.insertBefore(u, Y.elm, F.elm), Y = p[--O], lt = y[++L]) : (k(ve) && (ve = hf(p, C, O)), ye = b(lt.key) ? ve[lt.key] : P(lt, p, C, O), k(ye) ? l(lt, _, u, F.elm, !1, y, L) : (_e = p[ye], xe(_e, lt) ? ($(_e, lt, _, y, L), p[ye] = void 0, ds && r.insertBefore(u, _e.elm, F.elm)) : l(lt, _, u, F.elm, !1, y, L)), lt = y[++L]);
    C > O ? (Xe = k(y[X + 1]) ? null : y[X + 1].elm, M(u, Xe, y, L, X, _)) : L > X && A(p, C, O);
  }
  function P(u, p, y, _) {
    for (var S = y; S < _; S++) {
      var C = p[S];
      if (b(C) && xe(u, C))
        return S;
    }
  }
  function $(u, p, y, _, S, C) {
    if (u !== p) {
      b(p.elm) && b(_) && (p = _[S] = Rs(p));
      var L = p.elm = u.elm;
      if (nt(u.isAsyncPlaceholder)) {
        b(p.asyncFactory.resolved) ? tt(u.elm, p, y) : p.isAsyncPlaceholder = !0;
        return;
      }
      if (nt(p.isStatic) && nt(u.isStatic) && p.key === u.key && (nt(p.isCloned) || nt(p.isOnce))) {
        p.componentInstance = u.componentInstance;
        return;
      }
      var O, F = p.data;
      b(F) && b(O = F.hook) && b(O = O.prepatch) && O(u, p);
      var Y = u.children, X = p.children;
      if (b(F) && v(p)) {
        for (O = 0; O < n.update.length; ++O)
          n.update[O](u, p);
        b(O = F.hook) && b(O = O.update) && O(u, p);
      }
      k(p.text) ? b(Y) && b(X) ? Y !== X && I(L, Y, X, y, C) : b(X) ? (b(u.text) && r.setTextContent(L, ""), M(L, null, X, 0, X.length - 1, y)) : b(Y) ? A(Y, 0, Y.length - 1) : b(u.text) && r.setTextContent(L, "") : u.text !== p.text && r.setTextContent(L, p.text), b(F) && b(O = F.hook) && b(O = O.postpatch) && O(u, p);
    }
  }
  function R(u, p, y) {
    if (nt(y) && b(u.parent))
      u.parent.data.pendingInsert = p;
    else
      for (var _ = 0; _ < p.length; ++_)
        p[_].data.hook.insert(p[_]);
  }
  var _t = Ut("attrs,class,staticClass,staticStyle,key");
  function tt(u, p, y, _) {
    var S, C = p.tag, L = p.data, O = p.children;
    if (_ = _ || L && L.pre, p.elm = u, nt(p.isComment) && b(p.asyncFactory))
      return p.isAsyncPlaceholder = !0, !0;
    if (b(L) && (b(S = L.hook) && b(S = S.init) && S(
      p,
      !0
      /* hydrating */
    ), b(S = p.componentInstance)))
      return d(p, y), !0;
    if (b(C)) {
      if (b(O))
        if (!u.hasChildNodes())
          m(p, O, y);
        else if (b(S = L) && b(S = S.domProps) && b(S = S.innerHTML)) {
          if (S !== u.innerHTML)
            return !1;
        } else {
          for (var F = !0, Y = u.firstChild, X = 0; X < O.length; X++) {
            if (!Y || !tt(Y, O[X], y, _)) {
              F = !1;
              break;
            }
            Y = Y.nextSibling;
          }
          if (!F || Y)
            return !1;
        }
      if (b(L)) {
        var lt = !1;
        for (var Rt in L)
          if (!_t(Rt)) {
            lt = !0, x(p, y);
            break;
          }
        !lt && L.class && Ii(L.class);
      }
    } else u.data !== p.text && (u.data = p.text);
    return !0;
  }
  return function(p, y, _, S) {
    if (k(y)) {
      b(p) && T(p);
      return;
    }
    var C = !1, L = [];
    if (k(p))
      C = !0, l(y, L);
    else {
      var O = b(p.nodeType);
      if (!O && xe(p, y))
        $(p, y, L, null, null, S);
      else {
        if (O) {
          if (p.nodeType === 1 && p.hasAttribute(pa) && (p.removeAttribute(pa), _ = !0), nt(_) && tt(p, y, L))
            return R(y, L, !0), p;
          p = a(p);
        }
        var F = p.elm, Y = r.parentNode(F);
        if (l(
          y,
          L,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          F._leaveCb ? null : Y,
          r.nextSibling(F)
        ), b(y.parent))
          for (var X = y.parent, lt = v(y); X; ) {
            for (var Rt = 0; Rt < n.destroy.length; ++Rt)
              n.destroy[Rt](X);
            if (X.elm = y.elm, lt) {
              for (var ve = 0; ve < n.create.length; ++ve)
                n.create[ve](he, X);
              var ye = X.data.hook.insert;
              if (ye.merged)
                for (var _e = ye.fns.slice(1), Xe = 0; Xe < _e.length; Xe++)
                  _e[Xe]();
            } else
              Qe(X);
            X = X.parent;
          }
        b(Y) ? A([p], 0, 0) : b(p.tag) && T(p);
      }
    }
    return R(y, L, C), y.elm;
  };
}
var cf = {
  create: ps,
  update: ps,
  destroy: function(t) {
    ps(t, he);
  }
};
function ps(i, t) {
  (i.data.directives || t.data.directives) && df(i, t);
}
function df(i, t) {
  var e = i === he, n = t === he, s = Ua(i.data.directives, i.context), r = Ua(t.data.directives, t.context), a = [], o = [], h, l, c;
  for (h in r)
    l = s[h], c = r[h], l ? (c.oldValue = l.value, c.oldArg = l.arg, Ei(c, "update", t, i), c.def && c.def.componentUpdated && o.push(c)) : (Ei(c, "bind", t, i), c.def && c.def.inserted && a.push(c));
  if (a.length) {
    var d = function() {
      for (var g = 0; g < a.length; g++)
        Ei(a[g], "inserted", t, i);
    };
    e ? oe(t, "insert", d) : d();
  }
  if (o.length && oe(t, "postpatch", function() {
    for (var g = 0; g < o.length; g++)
      Ei(o[g], "componentUpdated", t, i);
  }), !e)
    for (h in s)
      r[h] || Ei(s[h], "unbind", i, i, n);
}
var uf = /* @__PURE__ */ Object.create(null);
function Ua(i, t) {
  var e = /* @__PURE__ */ Object.create(null);
  if (!i)
    return e;
  var n, s;
  for (n = 0; n < i.length; n++) {
    if (s = i[n], s.modifiers || (s.modifiers = uf), e[ff(s)] = s, t._setupState && t._setupState.__sfc) {
      var r = s.def || Rn(t, "_setupState", "v-" + s.name);
      typeof r == "function" ? s.def = {
        bind: r,
        update: r
      } : s.def = r;
    }
    s.def = s.def || Rn(t.$options, "directives", s.name);
  }
  return e;
}
function ff(i) {
  return i.rawName || "".concat(i.name, ".").concat(Object.keys(i.modifiers || {}).join("."));
}
function Ei(i, t, e, n, s) {
  var r = i.def && i.def[t];
  if (r)
    try {
      r(e.elm, i, e, n, s);
    } catch (a) {
      Fe(a, e.context, "directive ".concat(i.name, " ").concat(t, " hook"));
    }
}
var pf = [af, cf];
function ja(i, t) {
  var e = t.componentOptions;
  if (!(b(e) && e.Ctor.options.inheritAttrs === !1) && !(k(i.data.attrs) && k(t.data.attrs))) {
    var n, s, r, a = t.elm, o = i.data.attrs || {}, h = t.data.attrs || {};
    (b(h.__ob__) || nt(h._v_attr_proxy)) && (h = t.data.attrs = Q({}, h));
    for (n in h)
      s = h[n], r = o[n], r !== s && Ga(a, n, s, t.data.pre);
    (li || uh) && h.value !== o.value && Ga(a, "value", h.value);
    for (n in o)
      k(h[n]) && (Fr(n) ? a.removeAttributeNS(Ws, Fh(n)) : zh(n) || a.removeAttribute(n));
  }
}
function Ga(i, t, e, n) {
  n || i.tagName.indexOf("-") > -1 ? Wa(i, t, e) : Fu(t) ? In(e) ? i.removeAttribute(t) : (e = t === "allowfullscreen" && i.tagName === "EMBED" ? "true" : t, i.setAttribute(t, e)) : zh(t) ? i.setAttribute(t, zu(t, e)) : Fr(t) ? In(e) ? i.removeAttributeNS(Ws, Fh(t)) : i.setAttributeNS(Ws, t, e) : Wa(i, t, e);
}
function Wa(i, t, e) {
  if (In(e))
    i.removeAttribute(t);
  else {
    if (li && !ci && i.tagName === "TEXTAREA" && t === "placeholder" && e !== "" && !i.__ieph) {
      var n = function(s) {
        s.stopImmediatePropagation(), i.removeEventListener("input", n);
      };
      i.addEventListener("input", n), i.__ieph = !0;
    }
    i.setAttribute(t, e);
  }
}
var mf = {
  create: ja,
  update: ja
};
function Ya(i, t) {
  var e = t.elm, n = t.data, s = i.data;
  if (!(k(n.staticClass) && k(n.class) && (k(s) || k(s.staticClass) && k(s.class)))) {
    var r = ku(t), a = e._transitionClasses;
    b(a) && (r = kr(r, Pr(a))), r !== e._prevClass && (e.setAttribute("class", r), e._prevClass = r);
  }
}
var gf = {
  create: Ya,
  update: Ya
}, ms = "__r", gs = "__c";
function vf(i) {
  if (b(i[ms])) {
    var t = li ? "change" : "input";
    i[t] = [].concat(i[ms], i[t] || []), delete i[ms];
  }
  b(i[gs]) && (i.change = [].concat(i[gs], i.change || []), delete i[gs]);
}
var ki;
function yf(i, t, e) {
  var n = ki;
  return function s() {
    var r = t.apply(null, arguments);
    r !== null && Ph(i, s, e, n);
  };
}
var _f = Fs && !(ma && Number(ma[1]) <= 53);
function xf(i, t, e, n) {
  if (_f) {
    var s = Oh, r = t;
    t = r._wrapper = function(a) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        a.target === a.currentTarget || // event is fired after handler attachment
        a.timeStamp >= s || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        a.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        a.target.ownerDocument !== document
      )
        return r.apply(this, arguments);
    };
  }
  ki.addEventListener(i, t, fh ? { capture: e, passive: n } : e);
}
function Ph(i, t, e, n) {
  (n || ki).removeEventListener(
    i,
    //@ts-expect-error
    t._wrapper || t,
    e
  );
}
function vs(i, t) {
  if (!(k(i.data.on) && k(t.data.on))) {
    var e = t.data.on || {}, n = i.data.on || {};
    ki = t.elm || i.elm, vf(e), _h(e, n, xf, Ph, yf, t.context), ki = void 0;
  }
}
var wf = {
  create: vs,
  update: vs,
  // @ts-expect-error emptyNode has actually data
  destroy: function(i) {
    return vs(i, he);
  }
}, ln;
function Xa(i, t) {
  if (!(k(i.data.domProps) && k(t.data.domProps))) {
    var e, n, s = t.elm, r = i.data.domProps || {}, a = t.data.domProps || {};
    (b(a.__ob__) || nt(a._v_attr_proxy)) && (a = t.data.domProps = Q({}, a));
    for (e in r)
      e in a || (s[e] = "");
    for (e in a) {
      if (n = a[e], e === "textContent" || e === "innerHTML") {
        if (t.children && (t.children.length = 0), n === r[e])
          continue;
        s.childNodes.length === 1 && s.removeChild(s.childNodes[0]);
      }
      if (e === "value" && s.tagName !== "PROGRESS") {
        s._value = n;
        var o = k(n) ? "" : String(n);
        Ef(s, o) && (s.value = o);
      } else if (e === "innerHTML" && Br(s.tagName) && k(s.innerHTML)) {
        ln = ln || document.createElement("div"), ln.innerHTML = "<svg>".concat(n, "</svg>");
        for (var h = ln.firstChild; s.firstChild; )
          s.removeChild(s.firstChild);
        for (; h.firstChild; )
          s.appendChild(h.firstChild);
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        n !== r[e]
      )
        try {
          s[e] = n;
        } catch {
        }
    }
  }
}
function Ef(i, t) {
  return (
    //@ts-expect-error
    !i.composing && (i.tagName === "OPTION" || Cf(i, t) || Mf(i, t))
  );
}
function Cf(i, t) {
  var e = !0;
  try {
    e = document.activeElement !== i;
  } catch {
  }
  return e && i.value !== t;
}
function Mf(i, t) {
  var e = i.value, n = i._vModifiers;
  if (b(n)) {
    if (n.number)
      return Di(e) !== Di(t);
    if (n.trim)
      return e.trim() !== t.trim();
  }
  return e !== t;
}
var Tf = {
  create: Xa,
  update: Xa
}, bf = He(function(i) {
  var t = {}, e = /;(?![^(]*\))/g, n = /:(.+)/;
  return i.split(e).forEach(function(s) {
    if (s) {
      var r = s.split(n);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
});
function ys(i) {
  var t = Bh(i.style);
  return i.staticStyle ? Q(i.staticStyle, t) : t;
}
function Bh(i) {
  return Array.isArray(i) ? oh(i) : typeof i == "string" ? bf(i) : i;
}
function Nf(i, t) {
  for (var e = {}, n, s = i; s.componentInstance; )
    s = s.componentInstance._vnode, s && s.data && (n = ys(s.data)) && Q(e, n);
  (n = ys(i.data)) && Q(e, n);
  for (var r = i; r = r.parent; )
    r.data && (n = ys(r.data)) && Q(e, n);
  return e;
}
var Sf = /^--/, Va = /\s*!important$/, qa = function(i, t, e) {
  if (Sf.test(t))
    i.style.setProperty(t, e);
  else if (Va.test(e))
    i.style.setProperty(Xi(t), e.replace(Va, ""), "important");
  else {
    var n = Lf(t);
    if (Array.isArray(e))
      for (var s = 0, r = e.length; s < r; s++)
        i.style[n] = e[s];
    else
      i.style[n] = e;
  }
}, Ka = ["Webkit", "Moz", "ms"], cn, Lf = He(function(i) {
  if (cn = cn || document.createElement("div").style, i = Re(i), i !== "filter" && i in cn)
    return i;
  for (var t = i.charAt(0).toUpperCase() + i.slice(1), e = 0; e < Ka.length; e++) {
    var n = Ka[e] + t;
    if (n in cn)
      return n;
  }
});
function Za(i, t) {
  var e = t.data, n = i.data;
  if (!(k(e.staticStyle) && k(e.style) && k(n.staticStyle) && k(n.style))) {
    var s, r, a = t.elm, o = n.staticStyle, h = n.normalizedStyle || n.style || {}, l = o || h, c = Bh(t.data.style) || {};
    t.data.normalizedStyle = b(c.__ob__) ? Q({}, c) : c;
    var d = Nf(t);
    for (r in l)
      k(d[r]) && qa(a, r, "");
    for (r in d)
      s = d[r], qa(a, r, s ?? "");
  }
}
var Af = {
  create: Za,
  update: Za
}, $h = /\s+/;
function Hh(i, t) {
  if (!(!t || !(t = t.trim())))
    if (i.classList)
      t.indexOf(" ") > -1 ? t.split($h).forEach(function(n) {
        return i.classList.add(n);
      }) : i.classList.add(t);
    else {
      var e = " ".concat(i.getAttribute("class") || "", " ");
      e.indexOf(" " + t + " ") < 0 && i.setAttribute("class", (e + t).trim());
    }
}
function Uh(i, t) {
  if (!(!t || !(t = t.trim())))
    if (i.classList)
      t.indexOf(" ") > -1 ? t.split($h).forEach(function(s) {
        return i.classList.remove(s);
      }) : i.classList.remove(t), i.classList.length || i.removeAttribute("class");
    else {
      for (var e = " ".concat(i.getAttribute("class") || "", " "), n = " " + t + " "; e.indexOf(n) >= 0; )
        e = e.replace(n, " ");
      e = e.trim(), e ? i.setAttribute("class", e) : i.removeAttribute("class");
    }
}
function jh(i) {
  if (i) {
    if (typeof i == "object") {
      var t = {};
      return i.css !== !1 && Q(t, Ja(i.name || "v")), Q(t, i), t;
    } else if (typeof i == "string")
      return Ja(i);
  }
}
var Ja = He(function(i) {
  return {
    enterClass: "".concat(i, "-enter"),
    enterToClass: "".concat(i, "-enter-to"),
    enterActiveClass: "".concat(i, "-enter-active"),
    leaveClass: "".concat(i, "-leave"),
    leaveToClass: "".concat(i, "-leave-to"),
    leaveActiveClass: "".concat(i, "-leave-active")
  };
}), Gh = Tt && !ci, Ke = "transition", _s = "animation", En = "transition", zn = "transitionend", Xs = "animation", Wh = "animationend";
Gh && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (En = "WebkitTransition", zn = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (Xs = "WebkitAnimation", Wh = "webkitAnimationEnd"));
var Qa = Tt ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(i) {
    return i();
  }
);
function Yh(i) {
  Qa(function() {
    Qa(i);
  });
}
function Le(i, t) {
  var e = i._transitionClasses || (i._transitionClasses = []);
  e.indexOf(t) < 0 && (e.push(t), Hh(i, t));
}
function Qt(i, t) {
  i._transitionClasses && ge(i._transitionClasses, t), Uh(i, t);
}
function Xh(i, t, e) {
  var n = Vh(i, t), s = n.type, r = n.timeout, a = n.propCount;
  if (!s)
    return e();
  var o = s === Ke ? zn : Wh, h = 0, l = function() {
    i.removeEventListener(o, c), e();
  }, c = function(d) {
    d.target === i && ++h >= a && l();
  };
  setTimeout(function() {
    h < a && l();
  }, r + 1), i.addEventListener(o, c);
}
var Df = /\b(transform|all)(,|$)/;
function Vh(i, t) {
  var e = window.getComputedStyle(i), n = (e[En + "Delay"] || "").split(", "), s = (e[En + "Duration"] || "").split(", "), r = to(n, s), a = (e[Xs + "Delay"] || "").split(", "), o = (e[Xs + "Duration"] || "").split(", "), h = to(a, o), l, c = 0, d = 0;
  t === Ke ? r > 0 && (l = Ke, c = r, d = s.length) : t === _s ? h > 0 && (l = _s, c = h, d = o.length) : (c = Math.max(r, h), l = c > 0 ? r > h ? Ke : _s : null, d = l ? l === Ke ? s.length : o.length : 0);
  var g = l === Ke && Df.test(e[En + "Property"]);
  return {
    type: l,
    timeout: c,
    propCount: d,
    hasTransform: g
  };
}
function to(i, t) {
  for (; i.length < t.length; )
    i = i.concat(i);
  return Math.max.apply(null, t.map(function(e, n) {
    return eo(e) + eo(i[n]);
  }));
}
function eo(i) {
  return Number(i.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vs(i, t) {
  var e = i.elm;
  b(e._leaveCb) && (e._leaveCb.cancelled = !0, e._leaveCb());
  var n = jh(i.data.transition);
  if (!k(n) && !(b(e._enterCb) || e.nodeType !== 1)) {
    for (var s = n.css, r = n.type, a = n.enterClass, o = n.enterToClass, h = n.enterActiveClass, l = n.appearClass, c = n.appearToClass, d = n.appearActiveClass, g = n.beforeEnter, f = n.enter, m = n.afterEnter, v = n.enterCancelled, x = n.beforeAppear, w = n.appear, M = n.afterAppear, T = n.appearCancelled, A = n.duration, D = Se, I = Se.$vnode; I && I.parent; )
      D = I.context, I = I.parent;
    var P = !D._isMounted || !i.isRootInsert;
    if (!(P && !w && w !== "")) {
      var $ = P && l ? l : a, R = P && d ? d : h, _t = P && c ? c : o, tt = P && x || g, u = P && J(w) ? w : f, p = P && M || m, y = P && T || v, _ = Di(gt(A) ? A.enter : A), S = s !== !1 && !ci, C = $r(u), L = e._enterCb = bn(function() {
        S && (Qt(e, _t), Qt(e, R)), L.cancelled ? (S && Qt(e, $), y && y(e)) : p && p(e), e._enterCb = null;
      });
      i.data.show || oe(i, "insert", function() {
        var O = e.parentNode, F = O && O._pending && O._pending[i.key];
        F && F.tag === i.tag && F.elm._leaveCb && F.elm._leaveCb(), u && u(e, L);
      }), tt && tt(e), S && (Le(e, $), Le(e, R), Yh(function() {
        Qt(e, $), L.cancelled || (Le(e, _t), C || (Kh(_) ? setTimeout(L, _) : Xh(e, r, L)));
      })), i.data.show && (t && t(), u && u(e, L)), !S && !C && L();
    }
  }
}
function qh(i, t) {
  var e = i.elm;
  b(e._enterCb) && (e._enterCb.cancelled = !0, e._enterCb());
  var n = jh(i.data.transition);
  if (k(n) || e.nodeType !== 1)
    return t();
  if (b(e._leaveCb))
    return;
  var s = n.css, r = n.type, a = n.leaveClass, o = n.leaveToClass, h = n.leaveActiveClass, l = n.beforeLeave, c = n.leave, d = n.afterLeave, g = n.leaveCancelled, f = n.delayLeave, m = n.duration, v = s !== !1 && !ci, x = $r(c), w = Di(gt(m) ? m.leave : m), M = e._leaveCb = bn(function() {
    e.parentNode && e.parentNode._pending && (e.parentNode._pending[i.key] = null), v && (Qt(e, o), Qt(e, h)), M.cancelled ? (v && Qt(e, a), g && g(e)) : (t(), d && d(e)), e._leaveCb = null;
  });
  f ? f(T) : T();
  function T() {
    M.cancelled || (!i.data.show && e.parentNode && ((e.parentNode._pending || (e.parentNode._pending = {}))[i.key] = i), l && l(e), v && (Le(e, a), Le(e, h), Yh(function() {
      Qt(e, a), M.cancelled || (Le(e, o), x || (Kh(w) ? setTimeout(M, w) : Xh(e, r, M)));
    })), c && c(e, M), !v && !x && M());
  }
}
function Kh(i) {
  return typeof i == "number" && !isNaN(i);
}
function $r(i) {
  if (k(i))
    return !1;
  var t = i.fns;
  return b(t) ? $r(Array.isArray(t) ? t[0] : t) : (i._length || i.length) > 1;
}
function io(i, t) {
  t.data.show !== !0 && Vs(t);
}
var Of = Tt ? {
  create: io,
  activate: io,
  remove: function(i, t) {
    i.data.show !== !0 ? qh(i, t) : t();
  }
} : {}, Rf = [mf, gf, wf, Tf, Af, Of], If = Rf.concat(pf), zf = lf({ nodeOps: rf, modules: If });
ci && document.addEventListener("selectionchange", function() {
  var i = document.activeElement;
  i && i.vmodel && Hr(i, "input");
});
var Zh = {
  inserted: function(i, t, e, n) {
    e.tag === "select" ? (n.elm && !n.elm._vOptions ? oe(e, "postpatch", function() {
      Zh.componentUpdated(i, t, e);
    }) : no(i, t, e.context), i._vOptions = [].map.call(i.options, Fn)) : (e.tag === "textarea" || Ys(i.type)) && (i._vModifiers = t.modifiers, t.modifiers.lazy || (i.addEventListener("compositionstart", Ff), i.addEventListener("compositionend", ao), i.addEventListener("change", ao), ci && (i.vmodel = !0)));
  },
  componentUpdated: function(i, t, e) {
    if (e.tag === "select") {
      no(i, t, e.context);
      var n = i._vOptions, s = i._vOptions = [].map.call(i.options, Fn);
      if (s.some(function(a, o) {
        return !Ie(a, n[o]);
      })) {
        var r = i.multiple ? t.value.some(function(a) {
          return ro(a, s);
        }) : t.value !== t.oldValue && ro(t.value, s);
        r && Hr(i, "change");
      }
    }
  }
};
function no(i, t, e) {
  so(i, t), (li || uh) && setTimeout(function() {
    so(i, t);
  }, 0);
}
function so(i, t, e) {
  var n = t.value, s = i.multiple;
  if (!(s && !Array.isArray(n))) {
    for (var r, a, o = 0, h = i.options.length; o < h; o++)
      if (a = i.options[o], s)
        r = lh(n, Fn(a)) > -1, a.selected !== r && (a.selected = r);
      else if (Ie(Fn(a), n)) {
        i.selectedIndex !== o && (i.selectedIndex = o);
        return;
      }
    s || (i.selectedIndex = -1);
  }
}
function ro(i, t) {
  return t.every(function(e) {
    return !Ie(e, i);
  });
}
function Fn(i) {
  return "_value" in i ? i._value : i.value;
}
function Ff(i) {
  i.target.composing = !0;
}
function ao(i) {
  i.target.composing && (i.target.composing = !1, Hr(i.target, "input"));
}
function Hr(i, t) {
  var e = document.createEvent("HTMLEvents");
  e.initEvent(t, !0, !0), i.dispatchEvent(e);
}
function qs(i) {
  return i.componentInstance && (!i.data || !i.data.transition) ? qs(i.componentInstance._vnode) : i;
}
var kf = {
  bind: function(i, t, e) {
    var n = t.value;
    e = qs(e);
    var s = e.data && e.data.transition, r = i.__vOriginalDisplay = i.style.display === "none" ? "" : i.style.display;
    n && s ? (e.data.show = !0, Vs(e, function() {
      i.style.display = r;
    })) : i.style.display = n ? r : "none";
  },
  update: function(i, t, e) {
    var n = t.value, s = t.oldValue;
    if (!n != !s) {
      e = qs(e);
      var r = e.data && e.data.transition;
      r ? (e.data.show = !0, n ? Vs(e, function() {
        i.style.display = i.__vOriginalDisplay;
      }) : qh(e, function() {
        i.style.display = "none";
      })) : i.style.display = n ? i.__vOriginalDisplay : "none";
    }
  },
  unbind: function(i, t, e, n, s) {
    s || (i.style.display = i.__vOriginalDisplay);
  }
}, Pf = {
  model: Zh,
  show: kf
}, Jh = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function Ks(i) {
  var t = i && i.componentOptions;
  return t && t.Ctor.options.abstract ? Ks(Th(t.children)) : i;
}
function Qh(i) {
  var t = {}, e = i.$options;
  for (var n in e.propsData)
    t[n] = i[n];
  var s = e._parentListeners;
  for (var n in s)
    t[Re(n)] = s[n];
  return t;
}
function oo(i, t) {
  if (/\d-keep-alive$/.test(t.tag))
    return i("keep-alive", {
      props: t.componentOptions.propsData
    });
}
function Bf(i) {
  for (; i = i.parent; )
    if (i.data.transition)
      return !0;
}
function $f(i, t) {
  return t.key === i.key && t.tag === i.tag;
}
var Hf = function(i) {
  return i.tag || Ri(i);
}, Uf = function(i) {
  return i.name === "show";
}, jf = {
  name: "transition",
  props: Jh,
  abstract: !0,
  render: function(i) {
    var t = this, e = this.$slots.default;
    if (e && (e = e.filter(Hf), !!e.length)) {
      var n = this.mode, s = e[0];
      if (Bf(this.$vnode))
        return s;
      var r = Ks(s);
      if (!r)
        return s;
      if (this._leaving)
        return oo(i, s);
      var a = "__transition-".concat(this._uid, "-");
      r.key = r.key == null ? r.isComment ? a + "comment" : a + r.tag : Yi(r.key) ? String(r.key).indexOf(a) === 0 ? r.key : a + r.key : r.key;
      var o = (r.data || (r.data = {})).transition = Qh(this), h = this._vnode, l = Ks(h);
      if (r.data.directives && r.data.directives.some(Uf) && (r.data.show = !0), l && l.data && !$f(r, l) && !Ri(l) && // #6687 component root is a comment node
      !(l.componentInstance && l.componentInstance._vnode.isComment)) {
        var c = l.data.transition = Q({}, o);
        if (n === "out-in")
          return this._leaving = !0, oe(c, "afterLeave", function() {
            t._leaving = !1, t.$forceUpdate();
          }), oo(i, s);
        if (n === "in-out") {
          if (Ri(r))
            return h;
          var d, g = function() {
            d();
          };
          oe(o, "afterEnter", g), oe(o, "enterCancelled", g), oe(c, "delayLeave", function(f) {
            d = f;
          });
        }
      }
      return s;
    }
  }
}, tl = Q({
  tag: String,
  moveClass: String
}, Jh);
delete tl.mode;
var Gf = {
  props: tl,
  beforeMount: function() {
    var i = this, t = this._update;
    this._update = function(e, n) {
      var s = Lh(i);
      i.__patch__(
        i._vnode,
        i.kept,
        !1,
        // hydrating
        !0
        // removeOnly (!important, avoids unnecessary moves)
      ), i._vnode = i.kept, s(), t.call(i, e, n);
    };
  },
  render: function(i) {
    for (var t = this.tag || this.$vnode.data.tag || "span", e = /* @__PURE__ */ Object.create(null), n = this.prevChildren = this.children, s = this.$slots.default || [], r = this.children = [], a = Qh(this), o = 0; o < s.length; o++) {
      var h = s[o];
      h.tag && h.key != null && String(h.key).indexOf("__vlist") !== 0 && (r.push(h), e[h.key] = h, (h.data || (h.data = {})).transition = a);
    }
    if (n) {
      for (var l = [], c = [], o = 0; o < n.length; o++) {
        var h = n[o];
        h.data.transition = a, h.data.pos = h.elm.getBoundingClientRect(), e[h.key] ? l.push(h) : c.push(h);
      }
      this.kept = i(t, null, l), this.removed = c;
    }
    return i(t, null, r);
  },
  updated: function() {
    var i = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
    !i.length || !this.hasMove(i[0].elm, t) || (i.forEach(Wf), i.forEach(Yf), i.forEach(Xf), this._reflow = document.body.offsetHeight, i.forEach(function(e) {
      if (e.data.moved) {
        var n = e.elm, s = n.style;
        Le(n, t), s.transform = s.WebkitTransform = s.transitionDuration = "", n.addEventListener(zn, n._moveCb = function r(a) {
          a && a.target !== n || (!a || /transform$/.test(a.propertyName)) && (n.removeEventListener(zn, r), n._moveCb = null, Qt(n, t));
        });
      }
    }));
  },
  methods: {
    hasMove: function(i, t) {
      if (!Gh)
        return !1;
      if (this._hasMove)
        return this._hasMove;
      var e = i.cloneNode();
      i._transitionClasses && i._transitionClasses.forEach(function(s) {
        Uh(e, s);
      }), Hh(e, t), e.style.display = "none", this.$el.appendChild(e);
      var n = Vh(e);
      return this.$el.removeChild(e), this._hasMove = n.hasTransform;
    }
  }
};
function Wf(i) {
  i.elm._moveCb && i.elm._moveCb(), i.elm._enterCb && i.elm._enterCb();
}
function Yf(i) {
  i.data.newPos = i.elm.getBoundingClientRect();
}
function Xf(i) {
  var t = i.data.pos, e = i.data.newPos, n = t.left - e.left, s = t.top - e.top;
  if (n || s) {
    i.data.moved = !0;
    var r = i.elm.style;
    r.transform = r.WebkitTransform = "translate(".concat(n, "px,").concat(s, "px)"), r.transitionDuration = "0s";
  }
}
var Vf = {
  Transition: jf,
  TransitionGroup: Gf
};
rt.config.mustUseProp = Ru;
rt.config.isReservedTag = kh;
rt.config.isReservedAttr = Du;
rt.config.getTagNamespace = ju;
rt.config.isUnknownElement = Gu;
Q(rt.options.directives, Pf);
Q(rt.options.components, Vf);
rt.prototype.__patch__ = Tt ? zf : st;
rt.prototype.$mount = function(i, t) {
  return i = i && Tt ? Wu(i) : void 0, Pd(this, i, t);
};
Tt && setTimeout(function() {
  Ft.devtools && Nn && Nn.emit("init", rt);
}, 0);
function Kn(i, t, e, n, s, r, a, o) {
  var h = typeof i == "function" ? i.options : i;
  return t && (h.render = t, h.staticRenderFns = e, h._compiled = !0), r && (h._scopeId = "data-v-" + r), {
    exports: i,
    options: h
  };
}
const Ur = {
  name: "Dialog",
  props: {
    // 是否显示
    visible: {
      type: Boolean,
      default: !1
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 宽度
    width: {
      type: [String, Number],
      default: "90vw"
    },
    // 高度
    height: {
      type: [String, Number],
      default: "80vh"
    },
    // 最大宽度
    maxWidth: {
      type: [String, Number],
      default: "1200px"
    },
    // 最大高度
    maxHeight: {
      type: [String, Number],
      default: "800px"
    },
    // 是否显示关闭按钮
    showCloseBtn: {
      type: Boolean,
      default: !0
    },
    // 是否隐藏头部
    hideHeader: {
      type: Boolean,
      default: !1
    },
    // 是否隐藏底部
    hideFooter: {
      type: Boolean,
      default: !1
    },
    // 是否可以通过点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: !0
    },
    // 自定义内容区域样式
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    // z-index
    zIndex: {
      type: Number,
      default: 1e3
    }
  },
  computed: {
    contentStyle() {
      return {
        width: typeof this.width == "number" ? `${this.width}px` : this.width,
        height: typeof this.height == "number" ? `${this.height}px` : this.height,
        maxWidth: typeof this.maxWidth == "number" ? `${this.maxWidth}px` : this.maxWidth,
        maxHeight: typeof this.maxHeight == "number" ? `${this.maxHeight}px` : this.maxHeight
      };
    }
  },
  watch: {
    visible(i) {
      i ? (document.body.style.overflow = "hidden", this.$emit("open")) : (document.body.style.overflow = "", this.$emit("close"));
    }
  },
  beforeDestroy() {
    document.body.style.overflow = "";
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", !1), this.$emit("close");
    },
    handleMaskClick() {
      this.maskClosable && this.handleClose();
    }
  }
}, ho = () => {
  Sd((i, t) => ({
    "247c4a49": i.zIndex
  }));
}, lo = Ur.setup;
Ur.setup = lo ? (i, t) => (ho(), lo(i, t)) : ho;
const qf = Ur;
var Kf = function() {
  var t = this, e = t._self._c;
  return t.visible ? e("div", { staticClass: "c-dialog", on: { click: function(n) {
    return n.target !== n.currentTarget ? null : t.handleMaskClick.apply(null, arguments);
  } } }, [e("div", { staticClass: "c-dialog__content", style: t.contentStyle, on: { click: function(n) {
    n.stopPropagation();
  } } }, [t.hideHeader ? t._e() : e("div", { staticClass: "c-dialog__header" }, [t._t("header", function() {
    return [e("h3", { staticClass: "c-dialog__title" }, [t._v(t._s(t.title))])];
  }), t.showCloseBtn ? e("button", { staticClass: "c-dialog__close-btn", on: { click: t.handleClose } }, [e("svg", { attrs: { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" } }, [e("path", { attrs: { d: "M15 5L5 15M5 5L15 15", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" } })])]) : t._e()], 2), e("div", { staticClass: "c-dialog__body", style: t.bodyStyle }, [t._t("default")], 2), !t.hideFooter && t.$slots.footer ? e("div", { staticClass: "c-dialog__footer" }, [t._t("footer")], 2) : t._e()])]) : t._e();
}, Zf = [], Jf = /* @__PURE__ */ Kn(
  qf,
  Kf,
  Zf,
  !1,
  null,
  "563f2ea5"
);
const Qf = Jf.exports, E = {
  CHANGE_THEME: "changeTheme",
  CHANGE_LAYOUT: "changeLayout",
  MODE: {
    READONLY: "readonly",
    EDIT: "edit"
  },
  LAYOUT: {
    LOGICAL_STRUCTURE: "logicalStructure",
    LOGICAL_STRUCTURE_LEFT: "logicalStructureLeft",
    MIND_MAP: "mindMap",
    ORGANIZATION_STRUCTURE: "organizationStructure",
    CATALOG_ORGANIZATION: "catalogOrganization",
    TIMELINE: "timeline",
    TIMELINE2: "timeline2",
    FISHBONE: "fishbone",
    FISHBONE2: "fishbone2",
    RIGHT_FISHBONE: "rightFishbone",
    RIGHT_FISHBONE2: "rightFishbone2",
    VERTICAL_TIMELINE: "verticalTimeline",
    VERTICAL_TIMELINE2: "verticalTimeline2",
    VERTICAL_TIMELINE3: "verticalTimeline3"
  },
  DIR: {
    UP: "up",
    LEFT: "left",
    DOWN: "down",
    RIGHT: "right"
  },
  SHAPE: {
    RECTANGLE: "rectangle",
    DIAMOND: "diamond",
    PARALLELOGRAM: "parallelogram",
    ROUNDED_RECTANGLE: "roundedRectangle",
    OCTAGONAL_RECTANGLE: "octagonalRectangle",
    OUTER_TRIANGULAR_RECTANGLE: "outerTriangularRectangle",
    INNER_TRIANGULAR_RECTANGLE: "innerTriangularRectangle",
    ELLIPSE: "ellipse",
    CIRCLE: "circle"
  },
  MOUSE_WHEEL_ACTION: {
    ZOOM: "zoom",
    MOVE: "move"
  },
  INIT_ROOT_NODE_POSITION: {
    LEFT: "left",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    CENTER: "center"
  },
  LAYOUT_GROW_DIR: {
    LEFT: "left",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom"
  },
  CREATE_NEW_NODE_BEHAVIOR: {
    DEFAULT: "default",
    NOT_ACTIVE: "notActive",
    ACTIVE_ONLY: "activeOnly"
  },
  TAG_PLACEMENT: {
    RIGHT: "right",
    BOTTOM: "bottom"
  },
  IMG_PLACEMENT: {
    LEFT: "left",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom"
  }
}, co = {
  [E.INIT_ROOT_NODE_POSITION.LEFT]: 0,
  [E.INIT_ROOT_NODE_POSITION.TOP]: 0,
  [E.INIT_ROOT_NODE_POSITION.RIGHT]: 1,
  [E.INIT_ROOT_NODE_POSITION.BOTTOM]: 1,
  [E.INIT_ROOT_NODE_POSITION.CENTER]: 0.5
}, uo = [
  E.LAYOUT.LOGICAL_STRUCTURE,
  E.LAYOUT.LOGICAL_STRUCTURE_LEFT,
  E.LAYOUT.MIND_MAP,
  E.LAYOUT.CATALOG_ORGANIZATION,
  E.LAYOUT.ORGANIZATION_STRUCTURE,
  E.LAYOUT.TIMELINE,
  E.LAYOUT.TIMELINE2,
  E.LAYOUT.VERTICAL_TIMELINE,
  E.LAYOUT.VERTICAL_TIMELINE2,
  E.LAYOUT.VERTICAL_TIMELINE3,
  E.LAYOUT.FISHBONE,
  E.LAYOUT.FISHBONE2,
  E.LAYOUT.RIGHT_FISHBONE,
  E.LAYOUT.RIGHT_FISHBONE2
], kn = [
  "text",
  "image",
  "imageTitle",
  "imageSize",
  "icon",
  "tag",
  "hyperlink",
  "hyperlinkTitle",
  "note",
  "expand",
  "isActive",
  "generalization",
  "richText",
  "resetRichText",
  // 重新创建富文本内容，去掉原有样式
  "uid",
  "activeStyle",
  "associativeLineTargets",
  "associativeLineTargetControlOffsets",
  "associativeLinePoint",
  "associativeLineText",
  "attachmentUrl",
  "attachmentName",
  "notation",
  "outerFrame",
  "number",
  "range",
  "customLeft",
  "customTop",
  "customTextWidth",
  "checkbox",
  "dir",
  "needUpdate",
  // 重新创建节点内容
  "imgMap",
  "nodeLink"
], ai = {
  READ_CLIPBOARD_ERROR: "read_clipboard_error",
  PARSE_PASTE_DATA_ERROR: "parse_paste_data_error",
  CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR: "custom_handle_clipboard_text_error",
  LOAD_CLIPBOARD_IMAGE_ERROR: "load_clipboard_image_error",
  BEFORE_TEXT_EDIT_ERROR: "before_text_edit_error",
  EXPORT_ERROR: "export_error",
  EXPORT_LOAD_IMAGE_ERROR: "export_load_image_error",
  DATA_CHANGE_DETAIL_EVENT_ERROR: "data_change_detail_event_error"
}, t1 = `
  /* 鼠标hover和激活时渲染的矩形 */
  .smm-hover-node{
    display: none;
    opacity: 0.6;
    stroke-width: 1;
  }

  .smm-node:not(.smm-node-dragging):hover .smm-hover-node{
    display: block;
  }

  .smm-node.active .smm-hover-node, .smm-node-highlight .smm-hover-node{
    display: block;
    opacity: 1;
    stroke-width: 2;
  }

  .smm-text-node-wrap, .smm-expand-btn-text {
    user-select: none;
  }
`, Pn = 1.2, e1 = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "textDecoration",
  "color",
  "textAlign"
];
class i1 {
  //  构造函数
  constructor(t = {}) {
    this.opt = t, this.mindMap = this.opt.mindMap, this.scale = 1, this.sx = 0, this.sy = 0, this.x = 0, this.y = 0, this.firstDrag = !0, this.setTransformData(this.mindMap.opt.viewData), this.bind();
  }
  //  绑定
  bind() {
    this.mindMap.keyCommand.addShortcut("Control+=", () => {
      this.enlarge();
    }), this.mindMap.keyCommand.addShortcut("Control+-", () => {
      this.narrow();
    }), this.mindMap.keyCommand.addShortcut("Control+i", () => {
      this.fit();
    }), this.mindMap.event.on("mousedown", (t) => {
      const { isDisableDrag: e, mousedownEventPreventDefault: n } = this.mindMap.opt;
      e || (n && t.preventDefault(), this.sx = this.x, this.sy = this.y);
    }), this.mindMap.event.on("drag", (t, e) => {
      t.ctrlKey || t.metaKey || this.mindMap.opt.isDisableDrag || (this.firstDrag && (this.firstDrag = !1, this.mindMap.renderer.activeNodeList.length > 0 && this.mindMap.execCommand("CLEAR_ACTIVE_NODE")), this.x = this.sx + e.mousemoveOffset.x, this.y = this.sy + e.mousemoveOffset.y, this.transform());
    }), this.mindMap.event.on("mouseup", () => {
      this.firstDrag = !0;
    }), this.mindMap.event.on("mousewheel", (t, e, n, s) => {
      const {
        customHandleMousewheel: r,
        mousewheelAction: a,
        mouseScaleCenterUseMousePosition: o,
        mousewheelMoveStep: h,
        mousewheelZoomActionReverse: l,
        disableMouseWheelZoom: c,
        translateRatio: d
      } = this.mindMap.opt;
      if (r && typeof r == "function")
        return r(t);
      if (a === E.MOUSE_WHEEL_ACTION.ZOOM || t.ctrlKey || t.metaKey) {
        if (c) return;
        const { x: g, y: f } = this.mindMap.toPos(
          t.clientX,
          t.clientY
        ), m = o ? g : void 0, v = o ? f : void 0;
        switch (s && (e.includes(E.DIR.LEFT) || e.includes(E.DIR.RIGHT)) && (e = e.filter((x) => ![E.DIR.LEFT, E.DIR.RIGHT].includes(x))), !0) {
          case e.includes(E.DIR.UP):
            l ? this.enlarge(m, v, s) : this.narrow(m, v, s);
            break;
          case e.includes(E.DIR.DOWN):
            l ? this.narrow(m, v, s) : this.enlarge(m, v, s);
            break;
        }
      } else {
        let g = 0, f = 0;
        s ? (g = Math.abs(t.wheelDeltaX), f = Math.abs(t.wheelDeltaY)) : g = f = h;
        let m = 0, v = 0;
        e.includes(E.DIR.DOWN) && (v = -f), e.includes(E.DIR.UP) && (v = f), e.includes(E.DIR.LEFT) && (m = g), e.includes(E.DIR.RIGHT) && (m = -g), this.translateXY(m * d, v * d);
      }
    }), this.mindMap.on("resize", () => {
      this.checkNeedMindMapInCanvas() && this.transform();
    });
  }
  //  获取当前变换状态数据
  getTransformData() {
    return {
      transform: this.mindMap.draw.transform(),
      state: {
        scale: this.scale,
        x: this.x,
        y: this.y,
        sx: this.sx,
        sy: this.sy
      }
    };
  }
  //  动态设置变换状态数据
  setTransformData(t) {
    t && (Object.keys(t.state).forEach((e) => {
      this[e] = t.state[e];
    }), this.mindMap.draw.transform({
      ...t.transform
    }), this.mindMap.emit("view_data_change", this.getTransformData()), this.emitEvent("scale"), this.emitEvent("translate"));
  }
  //  平移x,y方向
  translateXY(t, e) {
    t === 0 && e === 0 || (this.x += t, this.y += e, this.transform(), this.emitEvent("translate"));
  }
  //  平移x方向
  translateX(t) {
    t !== 0 && (this.x += t, this.transform(), this.emitEvent("translate"));
  }
  //  平移x方式到
  translateXTo(t) {
    this.x = t, this.transform(), this.emitEvent("translate");
  }
  //  平移y方向
  translateY(t) {
    t !== 0 && (this.y += t, this.transform(), this.emitEvent("translate"));
  }
  //  平移y方向到
  translateYTo(t) {
    this.y = t, this.transform(), this.emitEvent("translate");
  }
  //   应用变换
  transform() {
    try {
      this.limitMindMapInCanvas();
    } catch {
    }
    this.mindMap.draw.transform({
      origin: [0, 0],
      scale: this.scale,
      translate: [this.x, this.y]
    }), this.mindMap.emit("view_data_change", this.getTransformData());
  }
  //  恢复
  reset() {
    const t = this.scale !== 1, e = this.x !== 0 || this.y !== 0;
    this.scale = 1, this.x = 0, this.y = 0, this.transform(), t && this.emitEvent("scale"), e && this.emitEvent("translate");
  }
  //  缩小
  narrow(t, e, n) {
    let { scaleRatio: s, minZoomRatio: r } = this.mindMap.opt;
    s = s / (n ? 5 : 1);
    const a = Math.max(this.scale - s, r / 100);
    this.scaleInCenter(a, t, e), this.transform(), this.emitEvent("scale");
  }
  //  放大
  enlarge(t, e, n) {
    let { scaleRatio: s, maxZoomRatio: r } = this.mindMap.opt;
    s = s / (n ? 5 : 1);
    let a = 0;
    r === -1 ? a = this.scale + s : a = Math.min(this.scale + s, r / 100), this.scaleInCenter(a, t, e), this.transform(), this.emitEvent("scale");
  }
  // 基于指定中心进行缩放，cx，cy 可不指定，此时会使用画布中心点
  scaleInCenter(t, e, n) {
    (e === void 0 || n === void 0) && (e = this.mindMap.width / 2, n = this.mindMap.height / 2);
    const s = this.scale, r = 1 - t / s, a = (e - this.x) * r, o = (n - this.y) * r;
    this.x += a, this.y += o, this.scale = t;
  }
  //  设置缩放
  setScale(t, e, n) {
    e !== void 0 && n !== void 0 ? this.scaleInCenter(t, e, n) : this.scale = t, this.transform(), this.emitEvent("scale");
  }
  // 适应画布大小
  fit(t = () => {
  }, e = !1, n) {
    n = n === void 0 ? this.mindMap.opt.fitPadding : n;
    const s = this.mindMap.draw, r = s.transform(), a = t() || s.rbox(), o = a.width / r.scaleX, h = a.height / r.scaleY, l = o / h;
    let { width: c, height: d } = this.mindMap.elRect;
    c = c - n * 2, d = d - n * 2;
    const g = c / d;
    let f = 0, m = "";
    if (o <= c && h <= d && !e)
      f = 1, m = 1;
    else {
      let M = 0;
      l > g ? (M = c, m = 2) : (M = d * l, m = 3), f = M / o;
    }
    this.setScale(f);
    const v = t() || s.rbox();
    v.x -= this.mindMap.elRect.left, v.y -= this.mindMap.elRect.top;
    let x = 0, w = 0;
    m === 1 ? (x = -v.x + n + (c - v.width) / 2, w = -v.y + n + (d - v.height) / 2) : m === 2 ? (x = -v.x + n, w = -v.y + n + (d - v.height) / 2) : m === 3 && (x = -v.x + n + (c - v.width) / 2, w = -v.y + n), this.translateXY(x, w);
  }
  // 判断是否需要将思维导图限制在画布内
  checkNeedMindMapInCanvas() {
    if (this.mindMap.demonstrate && this.mindMap.demonstrate.isInDemonstrate)
      return !1;
    const { isLimitMindMapInCanvasWhenHasScrollbar: t, isLimitMindMapInCanvas: e } = this.mindMap.opt;
    return this.mindMap.scrollbar ? t : e;
  }
  // 将思维导图限制在画布内
  limitMindMapInCanvas() {
    if (!this.checkNeedMindMapInCanvas()) return;
    let { scale: t, left: e, top: n, right: s, bottom: r } = this.getPositionLimit();
    const a = (this.mindMap.width - this.mindMap.initWidth) / 2 * t, o = (this.mindMap.height - this.mindMap.initHeight) / 2 * t, h = this.scale / t;
    e *= h, s *= h, n *= h, r *= h;
    const l = this.mindMap.width / 2, c = this.mindMap.height / 2, d = this.scale - 1;
    e -= d * l - a, s -= d * l - a, n -= d * c - o, r -= d * c - o, this.x > e && (this.x = e), this.x < s && (this.x = s), this.y > n && (this.y = n), this.y < r && (this.y = r);
  }
  // 计算图形四个方向的位置边界值
  getPositionLimit() {
    const { scaleX: t, scaleY: e } = this.mindMap.draw.transform(), n = this.mindMap.draw.rbox(), s = this.mindMap.renderer.root.group.rbox(), r = this.mindMap.renderer.layout.getRootCenterOffset(
      s.width,
      s.height
    ), a = s.x - n.x - r.x * t, o = s.x - n.x2 - r.x * t, h = s.y - n.y - r.y * e, l = s.y - n.y2 - r.y * e;
    return {
      scale: t,
      left: a,
      right: o,
      top: h,
      bottom: l
    };
  }
  // 派发事件
  emitEvent(t) {
    switch (t) {
      case "scale":
        this.mindMap.emit("scale", this.scale);
      case "translate":
        this.mindMap.emit("translate", this.x, this.y);
    }
  }
}
function n1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var el = { exports: {} };
(function(i) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = !1));
  function s(h, l, c) {
    this.fn = h, this.context = l, this.once = c || !1;
  }
  function r(h, l, c, d, g) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(c, d || h, g), m = e ? e + l : l;
    return h._events[m] ? h._events[m].fn ? h._events[m] = [h._events[m], f] : h._events[m].push(f) : (h._events[m] = f, h._eventsCount++), h;
  }
  function a(h, l) {
    --h._eventsCount === 0 ? h._events = new n() : delete h._events[l];
  }
  function o() {
    this._events = new n(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var l = [], c, d;
    if (this._eventsCount === 0) return l;
    for (d in c = this._events)
      t.call(c, d) && l.push(e ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
  }, o.prototype.listeners = function(l) {
    var c = e ? e + l : l, d = this._events[c];
    if (!d) return [];
    if (d.fn) return [d.fn];
    for (var g = 0, f = d.length, m = new Array(f); g < f; g++)
      m[g] = d[g].fn;
    return m;
  }, o.prototype.listenerCount = function(l) {
    var c = e ? e + l : l, d = this._events[c];
    return d ? d.fn ? 1 : d.length : 0;
  }, o.prototype.emit = function(l, c, d, g, f, m) {
    var v = e ? e + l : l;
    if (!this._events[v]) return !1;
    var x = this._events[v], w = arguments.length, M, T;
    if (x.fn) {
      switch (x.once && this.removeListener(l, x.fn, void 0, !0), w) {
        case 1:
          return x.fn.call(x.context), !0;
        case 2:
          return x.fn.call(x.context, c), !0;
        case 3:
          return x.fn.call(x.context, c, d), !0;
        case 4:
          return x.fn.call(x.context, c, d, g), !0;
        case 5:
          return x.fn.call(x.context, c, d, g, f), !0;
        case 6:
          return x.fn.call(x.context, c, d, g, f, m), !0;
      }
      for (T = 1, M = new Array(w - 1); T < w; T++)
        M[T - 1] = arguments[T];
      x.fn.apply(x.context, M);
    } else {
      var A = x.length, D;
      for (T = 0; T < A; T++)
        switch (x[T].once && this.removeListener(l, x[T].fn, void 0, !0), w) {
          case 1:
            x[T].fn.call(x[T].context);
            break;
          case 2:
            x[T].fn.call(x[T].context, c);
            break;
          case 3:
            x[T].fn.call(x[T].context, c, d);
            break;
          case 4:
            x[T].fn.call(x[T].context, c, d, g);
            break;
          default:
            if (!M) for (D = 1, M = new Array(w - 1); D < w; D++)
              M[D - 1] = arguments[D];
            x[T].fn.apply(x[T].context, M);
        }
    }
    return !0;
  }, o.prototype.on = function(l, c, d) {
    return r(this, l, c, d, !1);
  }, o.prototype.once = function(l, c, d) {
    return r(this, l, c, d, !0);
  }, o.prototype.removeListener = function(l, c, d, g) {
    var f = e ? e + l : l;
    if (!this._events[f]) return this;
    if (!c)
      return a(this, f), this;
    var m = this._events[f];
    if (m.fn)
      m.fn === c && (!g || m.once) && (!d || m.context === d) && a(this, f);
    else {
      for (var v = 0, x = [], w = m.length; v < w; v++)
        (m[v].fn !== c || g && !m[v].once || d && m[v].context !== d) && x.push(m[v]);
      x.length ? this._events[f] = x.length === 1 ? x[0] : x : a(this, f);
    }
    return this;
  }, o.prototype.removeAllListeners = function(l) {
    var c;
    return l ? (c = e ? e + l : l, this._events[c] && a(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, i.exports = o;
})(el);
var s1 = el.exports;
const r1 = /* @__PURE__ */ n1(s1);
class a1 extends r1 {
  //  构造函数
  constructor(t = {}) {
    super(), this.opt = t, this.mindMap = t.mindMap, this.isLeftMousedown = !1, this.isRightMousedown = !1, this.isMiddleMousedown = !1, this.mousedownPos = {
      x: 0,
      y: 0
    }, this.mousemovePos = {
      x: 0,
      y: 0
    }, this.mousemoveOffset = {
      x: 0,
      y: 0
    }, this.bindFn(), this.bind();
  }
  //  绑定函数上下文
  bindFn() {
    this.onBodyMousedown = this.onBodyMousedown.bind(this), this.onBodyClick = this.onBodyClick.bind(this), this.onDrawClick = this.onDrawClick.bind(this), this.onMousedown = this.onMousedown.bind(this), this.onMousemove = this.onMousemove.bind(this), this.onMouseup = this.onMouseup.bind(this), this.onNodeMouseup = this.onNodeMouseup.bind(this), this.onMousewheel = this.onMousewheel.bind(this), this.onContextmenu = this.onContextmenu.bind(this), this.onSvgMousedown = this.onSvgMousedown.bind(this), this.onKeyup = this.onKeyup.bind(this), this.onMouseenter = this.onMouseenter.bind(this), this.onMouseleave = this.onMouseleave.bind(this);
  }
  //  绑定事件
  bind() {
    document.body.addEventListener("mousedown", this.onBodyMousedown), document.body.addEventListener("click", this.onBodyClick), this.mindMap.svg.on("click", this.onDrawClick), this.mindMap.el.addEventListener("mousedown", this.onMousedown), this.mindMap.svg.on("mousedown", this.onSvgMousedown), window.addEventListener("mousemove", this.onMousemove), window.addEventListener("mouseup", this.onMouseup), this.on("node_mouseup", this.onNodeMouseup), this.mindMap.el.addEventListener("wheel", this.onMousewheel), this.mindMap.svg.on("contextmenu", this.onContextmenu), this.mindMap.svg.on("mouseenter", this.onMouseenter), this.mindMap.svg.on("mouseleave", this.onMouseleave), window.addEventListener("keyup", this.onKeyup);
  }
  //  解绑事件
  unbind() {
    document.body.removeEventListener("mousedown", this.onBodyMousedown), document.body.removeEventListener("click", this.onBodyClick), this.mindMap.svg.off("click", this.onDrawClick), this.mindMap.el.removeEventListener("mousedown", this.onMousedown), window.removeEventListener("mousemove", this.onMousemove), window.removeEventListener("mouseup", this.onMouseup), this.off("node_mouseup", this.onNodeMouseup), this.mindMap.el.removeEventListener("wheel", this.onMousewheel), this.mindMap.svg.off("contextmenu", this.onContextmenu), this.mindMap.svg.off("mouseenter", this.onMouseenter), this.mindMap.svg.off("mouseleave", this.onMouseleave), window.removeEventListener("keyup", this.onKeyup);
  }
  //   画布的单击事件
  onDrawClick(t) {
    this.emit("draw_click", t);
  }
  // 页面的鼠标按下事件
  onBodyMousedown(t) {
    this.emit("body_mousedown", t);
  }
  // 页面的单击事件
  onBodyClick(t) {
    this.emit("body_click", t);
  }
  //   svg画布的鼠标按下事件
  onSvgMousedown(t) {
    this.emit("svg_mousedown", t);
  }
  //  鼠标按下事件
  onMousedown(t) {
    t.which === 1 ? this.isLeftMousedown = !0 : t.which === 3 ? this.isRightMousedown = !0 : t.which === 2 && (this.isMiddleMousedown = !0), this.mousedownPos.x = t.clientX, this.mousedownPos.y = t.clientY, this.emit("mousedown", t, this);
  }
  //  鼠标移动事件
  onMousemove(t) {
    let { useLeftKeySelectionRightKeyDrag: e } = this.mindMap.opt;
    this.mousemovePos.x = t.clientX, this.mousemovePos.y = t.clientY, this.mousemoveOffset.x = t.clientX - this.mousedownPos.x, this.mousemoveOffset.y = t.clientY - this.mousedownPos.y, this.emit("mousemove", t, this), (this.isMiddleMousedown || (e ? this.isRightMousedown : this.isLeftMousedown)) && (t.preventDefault(), this.emit("drag", t, this));
  }
  //  鼠标松开事件
  onMouseup(t) {
    this.onNodeMouseup(), this.emit("mouseup", t, this);
  }
  // 节点鼠标松开事件
  onNodeMouseup() {
    this.isLeftMousedown = !1, this.isRightMousedown = !1, this.isMiddleMousedown = !1;
  }
  //  鼠标滚动/触控板滑动
  onMousewheel(t) {
    t.stopPropagation(), t.preventDefault();
    const e = [];
    t.deltaY < 0 && e.push(E.DIR.UP), t.deltaY > 0 && e.push(E.DIR.DOWN), t.deltaX < 0 && e.push(E.DIR.LEFT), t.deltaX > 0 && e.push(E.DIR.RIGHT);
    let n = !1;
    const { customCheckIsTouchPad: s } = this.mindMap.opt;
    typeof s == "function" ? n = s(t) : n = Math.abs(t.deltaY) <= 10, this.emit("mousewheel", t, e, this, n);
  }
  //  鼠标右键菜单事件
  onContextmenu(t) {
    t.preventDefault(), !t.ctrlKey && this.emit("contextmenu", t);
  }
  //  按键松开事件
  onKeyup(t) {
    this.emit("keyup", t);
  }
  // 进入
  onMouseenter(t) {
    this.emit("svg_mouseenter", t);
  }
  // 离开
  onMouseleave(t) {
    this.emit("svg_mouseleave", t);
  }
}
var Bn = function(t) {
  return o1(t) && !h1(t);
};
function o1(i) {
  return !!i && typeof i == "object";
}
function h1(i) {
  var t = Object.prototype.toString.call(i);
  return t === "[object RegExp]" || t === "[object Date]" || d1(i);
}
var l1 = typeof Symbol == "function" && Symbol.for, c1 = l1 ? Symbol.for("react.element") : 60103;
function d1(i) {
  return i.$$typeof === c1;
}
function u1(i) {
  return Array.isArray(i) ? [] : {};
}
function Pi(i, t) {
  var e = t && t.clone === !0;
  return e && Bn(i) ? oi(u1(i), i, t) : i;
}
function fo(i, t, e) {
  var n = i.slice();
  return t.forEach(function(s, r) {
    typeof n[r] > "u" ? n[r] = Pi(s, e) : Bn(s) ? n[r] = oi(i[r], s, e) : i.indexOf(s) === -1 && n.push(Pi(s, e));
  }), n;
}
function f1(i, t, e) {
  var n = {};
  return Bn(i) && Object.keys(i).forEach(function(s) {
    n[s] = Pi(i[s], e);
  }), Object.keys(t).forEach(function(s) {
    !Bn(t[s]) || !i[s] ? n[s] = Pi(t[s], e) : n[s] = oi(i[s], t[s], e);
  }), n;
}
function oi(i, t, e) {
  var n = Array.isArray(t), s = Array.isArray(i), r = e || { arrayMerge: fo }, a = n === s;
  if (a)
    if (n) {
      var o = r.arrayMerge || fo;
      return o(i, t, e);
    } else
      return f1(i, t, e);
  else return Pi(t, e);
}
oi.all = function(t, e) {
  if (!Array.isArray(t) || t.length < 2)
    throw new Error("first argument should be an array with at least two elements");
  return t.reduce(function(n, s) {
    return oi(n, s, e);
  });
};
var $n = oi;
let dn;
const p1 = new Uint8Array(16);
function m1() {
  if (!dn && (dn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !dn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return dn(p1);
}
const dt = [];
for (let i = 0; i < 256; ++i)
  dt.push((i + 256).toString(16).slice(1));
function g1(i, t = 0) {
  return dt[i[t + 0]] + dt[i[t + 1]] + dt[i[t + 2]] + dt[i[t + 3]] + "-" + dt[i[t + 4]] + dt[i[t + 5]] + "-" + dt[i[t + 6]] + dt[i[t + 7]] + "-" + dt[i[t + 8]] + dt[i[t + 9]] + "-" + dt[i[t + 10]] + dt[i[t + 11]] + dt[i[t + 12]] + dt[i[t + 13]] + dt[i[t + 14]] + dt[i[t + 15]];
}
const v1 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), po = {
  randomUUID: v1
};
function y1(i, t, e) {
  if (po.randomUUID && !i)
    return po.randomUUID();
  i = i || {};
  const n = i.random || (i.rng || m1)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, g1(n);
}
function jr(i) {
  this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(i);
}
jr.prototype.init_genrand = function(i) {
  for (this.mt[0] = i >>> 0, this.mti = 1; this.mti < this.N; this.mti++)
    i = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (((i & 4294901760) >>> 16) * 1812433253 << 16) + (i & 65535) * 1812433253 + this.mti, this.mt[this.mti] >>>= 0;
};
jr.prototype.genrand_int32 = function() {
  var i, t = new Array(0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var e;
    for (this.mti == this.N + 1 && this.init_genrand(5489), e = 0; e < this.N - this.M; e++)
      i = this.mt[e] & this.UPPER_MASK | this.mt[e + 1] & this.LOWER_MASK, this.mt[e] = this.mt[e + this.M] ^ i >>> 1 ^ t[i & 1];
    for (; e < this.N - 1; e++)
      i = this.mt[e] & this.UPPER_MASK | this.mt[e + 1] & this.LOWER_MASK, this.mt[e] = this.mt[e + (this.M - this.N)] ^ i >>> 1 ^ t[i & 1];
    i = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ i >>> 1 ^ t[i & 1], this.mti = 0;
  }
  return i = this.mt[this.mti++], i ^= i >>> 11, i ^= i << 7 & 2636928640, i ^= i << 15 & 4022730752, i ^= i >>> 18, i >>> 0;
};
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.2.0
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Mon Jun 12 2023 10:34:51 GMT+0200 (Central European Summer Time)
*/
const Zs = {}, il = [];
function U(i, t) {
  if (Array.isArray(i)) {
    for (const e of i)
      U(e, t);
    return;
  }
  if (typeof i == "object") {
    for (const e in i)
      U(e, i[e]);
    return;
  }
  nl(Object.getOwnPropertyNames(t)), Zs[i] = Object.assign(Zs[i] || {}, t);
}
function bt(i) {
  return Zs[i] || {};
}
function _1() {
  return [...new Set(il)];
}
function nl(i) {
  il.push(...i);
}
function Gr(i, t) {
  let e;
  const n = i.length, s = [];
  for (e = 0; e < n; e++)
    s.push(t(i[e]));
  return s;
}
function x1(i, t) {
  let e;
  const n = i.length, s = [];
  for (e = 0; e < n; e++)
    t(i[e]) && s.push(i[e]);
  return s;
}
function xs(i) {
  return i % 360 * Math.PI / 180;
}
function un(i) {
  return i.toLowerCase().replace(/-(.)/g, function(t, e) {
    return e.toUpperCase();
  });
}
function w1(i) {
  return i.replace(/([A-Z])/g, function(t, e) {
    return "-" + e.toLowerCase();
  });
}
function sl(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function pi(i, t, e, n) {
  return (t == null || e == null) && (n = n || i.bbox(), t == null ? t = n.width / n.height * e : e == null && (e = n.height / n.width * t)), {
    width: t,
    height: e
  };
}
function Js(i, t) {
  const e = i.origin;
  let n = i.ox != null ? i.ox : i.originX != null ? i.originX : "center", s = i.oy != null ? i.oy : i.originY != null ? i.originY : "center";
  e != null && ([n, s] = Array.isArray(e) ? e : typeof e == "object" ? [e.x, e.y] : [e, e]);
  const r = typeof n == "string", a = typeof s == "string";
  if (r || a) {
    const {
      height: o,
      width: h,
      x: l,
      y: c
    } = t.bbox();
    r && (n = n.includes("left") ? l : n.includes("right") ? l + h : l + h / 2), a && (s = s.includes("top") ? c : s.includes("bottom") ? c + o : c + o / 2);
  }
  return [n, s];
}
const Wr = "http://www.w3.org/2000/svg", E1 = "http://www.w3.org/1999/xhtml", fn = "http://www.w3.org/2000/xmlns/", qi = "http://www.w3.org/1999/xlink", C1 = "http://svgjs.dev/svgjs", V = {
  window: typeof window > "u" ? null : window,
  document: typeof document > "u" ? null : document
};
let Yr = class {
  // constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
};
const Ae = {}, Xr = "___SYMBOL___ROOT___";
function Bi(i, t = Wr) {
  return V.document.createElementNS(t, i);
}
function vt(i, t = !1) {
  if (i instanceof Yr) return i;
  if (typeof i == "object")
    return ws(i);
  if (i == null)
    return new Ae[Xr]();
  if (typeof i == "string" && i.charAt(0) !== "<")
    return ws(V.document.querySelector(i));
  const e = t ? V.document.createElement("div") : Bi("svg");
  return e.innerHTML = i, i = ws(e.firstChild), e.removeChild(e.firstChild), i;
}
function it(i, t) {
  return t && t.ownerDocument && t instanceof t.ownerDocument.defaultView.Node ? t : Bi(i);
}
function zt(i) {
  if (!i) return null;
  if (i.instance instanceof Yr) return i.instance;
  if (i.nodeName === "#document-fragment")
    return new Ae.Fragment(i);
  let t = sl(i.nodeName || "Dom");
  return t === "LinearGradient" || t === "RadialGradient" ? t = "Gradient" : Ae[t] || (t = "Dom"), new Ae[t](i);
}
let ws = zt;
function W(i, t = i.name, e = !1) {
  return Ae[t] = i, e && (Ae[Xr] = i), nl(Object.getOwnPropertyNames(i.prototype)), i;
}
function M1(i) {
  return Ae[i];
}
let T1 = 1e3;
function rl(i) {
  return "Svgjs" + sl(i) + T1++;
}
function al(i) {
  for (let t = i.children.length - 1; t >= 0; t--)
    al(i.children[t]);
  return i.id && (i.id = rl(i.nodeName)), i;
}
function G(i, t) {
  let e, n;
  for (i = Array.isArray(i) ? i : [i], n = i.length - 1; n >= 0; n--)
    for (e in t)
      i[n].prototype[e] = t[e];
}
function et(i) {
  return function(...t) {
    const e = t[t.length - 1];
    return e && e.constructor === Object && !(e instanceof Array) ? i.apply(this, t.slice(0, -1)).attr(e) : i.apply(this, t);
  };
}
function b1() {
  return this.parent().children();
}
function N1() {
  return this.parent().index(this);
}
function S1() {
  return this.siblings()[this.position() + 1];
}
function L1() {
  return this.siblings()[this.position() - 1];
}
function A1() {
  const i = this.position();
  return this.parent().add(this.remove(), i + 1), this;
}
function D1() {
  const i = this.position();
  return this.parent().add(this.remove(), i ? i - 1 : 0), this;
}
function O1() {
  return this.parent().add(this.remove()), this;
}
function R1() {
  return this.parent().add(this.remove(), 0), this;
}
function I1(i) {
  i = vt(i), i.remove();
  const t = this.position();
  return this.parent().add(i, t), this;
}
function z1(i) {
  i = vt(i), i.remove();
  const t = this.position();
  return this.parent().add(i, t + 1), this;
}
function F1(i) {
  return i = vt(i), i.before(this), this;
}
function k1(i) {
  return i = vt(i), i.after(this), this;
}
U("Dom", {
  siblings: b1,
  position: N1,
  next: S1,
  prev: L1,
  forward: A1,
  backward: D1,
  front: O1,
  back: R1,
  before: I1,
  after: z1,
  insertBefore: F1,
  insertAfter: k1
});
const ol = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, P1 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, B1 = /rgb\((\d+),(\d+),(\d+)\)/, $1 = /(#[a-z_][a-z0-9\-_]*)/i, H1 = /\)\s*,?\s*/, U1 = /\s/g, mo = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i, go = /^rgb\(/, vo = /^(\s+)?$/, yo = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, j1 = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, ie = /[\s,]+/, Vr = /[MLHVCSQTAZ]/i;
function G1() {
  const i = this.attr("class");
  return i == null ? [] : i.trim().split(ie);
}
function W1(i) {
  return this.classes().indexOf(i) !== -1;
}
function Y1(i) {
  if (!this.hasClass(i)) {
    const t = this.classes();
    t.push(i), this.attr("class", t.join(" "));
  }
  return this;
}
function X1(i) {
  return this.hasClass(i) && this.attr("class", this.classes().filter(function(t) {
    return t !== i;
  }).join(" ")), this;
}
function V1(i) {
  return this.hasClass(i) ? this.removeClass(i) : this.addClass(i);
}
U("Dom", {
  classes: G1,
  hasClass: W1,
  addClass: Y1,
  removeClass: X1,
  toggleClass: V1
});
function q1(i, t) {
  const e = {};
  if (arguments.length === 0)
    return this.node.style.cssText.split(/\s*;\s*/).filter(function(n) {
      return !!n.length;
    }).forEach(function(n) {
      const s = n.split(/\s*:\s*/);
      e[s[0]] = s[1];
    }), e;
  if (arguments.length < 2) {
    if (Array.isArray(i)) {
      for (const n of i) {
        const s = un(n);
        e[n] = this.node.style[s];
      }
      return e;
    }
    if (typeof i == "string")
      return this.node.style[un(i)];
    if (typeof i == "object")
      for (const n in i)
        this.node.style[un(n)] = i[n] == null || vo.test(i[n]) ? "" : i[n];
  }
  return arguments.length === 2 && (this.node.style[un(i)] = t == null || vo.test(t) ? "" : t), this;
}
function K1() {
  return this.css("display", "");
}
function Z1() {
  return this.css("display", "none");
}
function J1() {
  return this.css("display") !== "none";
}
U("Dom", {
  css: q1,
  show: K1,
  hide: Z1,
  visible: J1
});
function Q1(i, t, e) {
  if (i == null)
    return this.data(Gr(x1(this.node.attributes, (n) => n.nodeName.indexOf("data-") === 0), (n) => n.nodeName.slice(5)));
  if (i instanceof Array) {
    const n = {};
    for (const s of i)
      n[s] = this.data(s);
    return n;
  } else if (typeof i == "object")
    for (t in i)
      this.data(t, i[t]);
  else if (arguments.length < 2)
    try {
      return JSON.parse(this.attr("data-" + i));
    } catch {
      return this.attr("data-" + i);
    }
  else
    this.attr("data-" + i, t === null ? null : e === !0 || typeof t == "string" || typeof t == "number" ? t : JSON.stringify(t));
  return this;
}
U("Dom", {
  data: Q1
});
function t0(i, t) {
  if (typeof arguments[0] == "object")
    for (const e in i)
      this.remember(e, i[e]);
  else {
    if (arguments.length === 1)
      return this.memory()[i];
    this.memory()[i] = t;
  }
  return this;
}
function e0() {
  if (arguments.length === 0)
    this._memory = {};
  else
    for (let i = arguments.length - 1; i >= 0; i--)
      delete this.memory()[arguments[i]];
  return this;
}
function i0() {
  return this._memory = this._memory || {};
}
U("Dom", {
  remember: t0,
  forget: e0,
  memory: i0
});
function n0(i) {
  return i.length === 4 ? ["#", i.substring(1, 2), i.substring(1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i;
}
function s0(i) {
  const t = Math.round(i), n = Math.max(0, Math.min(255, t)).toString(16);
  return n.length === 1 ? "0" + n : n;
}
function Ve(i, t) {
  for (let e = t.length; e--; )
    if (i[t[e]] == null)
      return !1;
  return !0;
}
function r0(i, t) {
  const e = Ve(i, "rgb") ? {
    _a: i.r,
    _b: i.g,
    _c: i.b,
    _d: 0,
    space: "rgb"
  } : Ve(i, "xyz") ? {
    _a: i.x,
    _b: i.y,
    _c: i.z,
    _d: 0,
    space: "xyz"
  } : Ve(i, "hsl") ? {
    _a: i.h,
    _b: i.s,
    _c: i.l,
    _d: 0,
    space: "hsl"
  } : Ve(i, "lab") ? {
    _a: i.l,
    _b: i.a,
    _c: i.b,
    _d: 0,
    space: "lab"
  } : Ve(i, "lch") ? {
    _a: i.l,
    _b: i.c,
    _c: i.h,
    _d: 0,
    space: "lch"
  } : Ve(i, "cmyk") ? {
    _a: i.c,
    _b: i.m,
    _c: i.y,
    _d: i.k,
    space: "cmyk"
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: "rgb"
  };
  return e.space = t || e.space, e;
}
function a0(i) {
  return i === "lab" || i === "xyz" || i === "lch";
}
function Es(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * (2 / 3 - e) * 6 : i;
}
class Z {
  constructor(...t) {
    this.init(...t);
  }
  // Test if given value is a color
  static isColor(t) {
    return t && (t instanceof Z || this.isRgb(t) || this.test(t));
  }
  // Test if given value is an rgb object
  static isRgb(t) {
    return t && typeof t.r == "number" && typeof t.g == "number" && typeof t.b == "number";
  }
  /*
  Generating random colors
  */
  static random(t = "vibrant", e, n) {
    const {
      random: s,
      round: r,
      sin: a,
      PI: o
    } = Math;
    if (t === "vibrant") {
      const h = 24 * s() + 57, l = 38 * s() + 45, c = 360 * s();
      return new Z(h, l, c, "lch");
    } else if (t === "sine") {
      e = e ?? s();
      const h = r(80 * a(2 * o * e / 0.5 + 0.01) + 150), l = r(50 * a(2 * o * e / 0.5 + 4.6) + 200), c = r(100 * a(2 * o * e / 0.5 + 2.3) + 150);
      return new Z(h, l, c);
    } else if (t === "pastel") {
      const h = 8 * s() + 86, l = 17 * s() + 9, c = 360 * s();
      return new Z(h, l, c, "lch");
    } else if (t === "dark") {
      const h = 10 + 10 * s(), l = 50 * s() + 86, c = 360 * s();
      return new Z(h, l, c, "lch");
    } else if (t === "rgb") {
      const h = 255 * s(), l = 255 * s(), c = 255 * s();
      return new Z(h, l, c);
    } else if (t === "lab") {
      const h = 100 * s(), l = 256 * s() - 128, c = 256 * s() - 128;
      return new Z(h, l, c, "lab");
    } else if (t === "grey") {
      const h = 255 * s();
      return new Z(h, h, h);
    } else
      throw new Error("Unsupported random color mode");
  }
  // Test if given value is a color string
  static test(t) {
    return typeof t == "string" && (mo.test(t) || go.test(t));
  }
  cmyk() {
    const {
      _a: t,
      _b: e,
      _c: n
    } = this.rgb(), [s, r, a] = [t, e, n].map((g) => g / 255), o = Math.min(1 - s, 1 - r, 1 - a);
    if (o === 1)
      return new Z(0, 0, 0, 1, "cmyk");
    const h = (1 - s - o) / (1 - o), l = (1 - r - o) / (1 - o), c = (1 - a - o) / (1 - o);
    return new Z(h, l, c, o, "cmyk");
  }
  hsl() {
    const {
      _a: t,
      _b: e,
      _c: n
    } = this.rgb(), [s, r, a] = [t, e, n].map((v) => v / 255), o = Math.max(s, r, a), h = Math.min(s, r, a), l = (o + h) / 2, c = o === h, d = o - h, g = c ? 0 : l > 0.5 ? d / (2 - o - h) : d / (o + h), f = c ? 0 : o === s ? ((r - a) / d + (r < a ? 6 : 0)) / 6 : o === r ? ((a - s) / d + 2) / 6 : o === a ? ((s - r) / d + 4) / 6 : 0;
    return new Z(360 * f, 100 * g, 100 * l, "hsl");
  }
  init(t = 0, e = 0, n = 0, s = 0, r = "rgb") {
    if (t = t || 0, this.space)
      for (const d in this.space)
        delete this[this.space[d]];
    if (typeof t == "number")
      r = typeof s == "string" ? s : r, s = typeof s == "string" ? 0 : s, Object.assign(this, {
        _a: t,
        _b: e,
        _c: n,
        _d: s,
        space: r
      });
    else if (t instanceof Array)
      this.space = e || (typeof t[3] == "string" ? t[3] : t[4]) || "rgb", Object.assign(this, {
        _a: t[0],
        _b: t[1],
        _c: t[2],
        _d: t[3] || 0
      });
    else if (t instanceof Object) {
      const d = r0(t, e);
      Object.assign(this, d);
    } else if (typeof t == "string")
      if (go.test(t)) {
        const d = t.replace(U1, ""), [g, f, m] = B1.exec(d).slice(1, 4).map((v) => parseInt(v));
        Object.assign(this, {
          _a: g,
          _b: f,
          _c: m,
          _d: 0,
          space: "rgb"
        });
      } else if (mo.test(t)) {
        const d = (v) => parseInt(v, 16), [, g, f, m] = P1.exec(n0(t)).map(d);
        Object.assign(this, {
          _a: g,
          _b: f,
          _c: m,
          _d: 0,
          space: "rgb"
        });
      } else throw Error("Unsupported string format, can't construct Color");
    const {
      _a: a,
      _b: o,
      _c: h,
      _d: l
    } = this, c = this.space === "rgb" ? {
      r: a,
      g: o,
      b: h
    } : this.space === "xyz" ? {
      x: a,
      y: o,
      z: h
    } : this.space === "hsl" ? {
      h: a,
      s: o,
      l: h
    } : this.space === "lab" ? {
      l: a,
      a: o,
      b: h
    } : this.space === "lch" ? {
      l: a,
      c: o,
      h
    } : this.space === "cmyk" ? {
      c: a,
      m: o,
      y: h,
      k: l
    } : {};
    Object.assign(this, c);
  }
  lab() {
    const {
      x: t,
      y: e,
      z: n
    } = this.xyz(), s = 116 * e - 16, r = 500 * (t - e), a = 200 * (e - n);
    return new Z(s, r, a, "lab");
  }
  lch() {
    const {
      l: t,
      a: e,
      b: n
    } = this.lab(), s = Math.sqrt(e ** 2 + n ** 2);
    let r = 180 * Math.atan2(n, e) / Math.PI;
    return r < 0 && (r *= -1, r = 360 - r), new Z(t, s, r, "lch");
  }
  /*
  Conversion Methods
  */
  rgb() {
    if (this.space === "rgb")
      return this;
    if (a0(this.space)) {
      let {
        x: t,
        y: e,
        z: n
      } = this;
      if (this.space === "lab" || this.space === "lch") {
        let {
          l: f,
          a: m,
          b: v
        } = this;
        if (this.space === "lch") {
          const {
            c: I,
            h: P
          } = this, $ = Math.PI / 180;
          m = I * Math.cos($ * P), v = I * Math.sin($ * P);
        }
        const x = (f + 16) / 116, w = m / 500 + x, M = x - v / 200, T = 16 / 116, A = 8856e-6, D = 7.787;
        t = 0.95047 * (w ** 3 > A ? w ** 3 : (w - T) / D), e = 1 * (x ** 3 > A ? x ** 3 : (x - T) / D), n = 1.08883 * (M ** 3 > A ? M ** 3 : (M - T) / D);
      }
      const s = t * 3.2406 + e * -1.5372 + n * -0.4986, r = t * -0.9689 + e * 1.8758 + n * 0.0415, a = t * 0.0557 + e * -0.204 + n * 1.057, o = Math.pow, h = 31308e-7, l = s > h ? 1.055 * o(s, 1 / 2.4) - 0.055 : 12.92 * s, c = r > h ? 1.055 * o(r, 1 / 2.4) - 0.055 : 12.92 * r, d = a > h ? 1.055 * o(a, 1 / 2.4) - 0.055 : 12.92 * a;
      return new Z(255 * l, 255 * c, 255 * d);
    } else if (this.space === "hsl") {
      let {
        h: t,
        s: e,
        l: n
      } = this;
      if (t /= 360, e /= 100, n /= 100, e === 0)
        return n *= 255, new Z(n, n, n);
      const s = n < 0.5 ? n * (1 + e) : n + e - n * e, r = 2 * n - s, a = 255 * Es(r, s, t + 1 / 3), o = 255 * Es(r, s, t), h = 255 * Es(r, s, t - 1 / 3);
      return new Z(a, o, h);
    } else if (this.space === "cmyk") {
      const {
        c: t,
        m: e,
        y: n,
        k: s
      } = this, r = 255 * (1 - Math.min(1, t * (1 - s) + s)), a = 255 * (1 - Math.min(1, e * (1 - s) + s)), o = 255 * (1 - Math.min(1, n * (1 - s) + s));
      return new Z(r, a, o);
    } else
      return this;
  }
  toArray() {
    const {
      _a: t,
      _b: e,
      _c: n,
      _d: s,
      space: r
    } = this;
    return [t, e, n, s, r];
  }
  toHex() {
    const [t, e, n] = this._clamped().map(s0);
    return `#${t}${e}${n}`;
  }
  toRgb() {
    const [t, e, n] = this._clamped();
    return `rgb(${t},${e},${n})`;
  }
  toString() {
    return this.toHex();
  }
  xyz() {
    const {
      _a: t,
      _b: e,
      _c: n
    } = this.rgb(), [s, r, a] = [t, e, n].map((w) => w / 255), o = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92, h = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92, l = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92, c = (o * 0.4124 + h * 0.3576 + l * 0.1805) / 0.95047, d = (o * 0.2126 + h * 0.7152 + l * 0.0722) / 1, g = (o * 0.0193 + h * 0.1192 + l * 0.9505) / 1.08883, f = c > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, m = d > 8856e-6 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, v = g > 8856e-6 ? Math.pow(g, 1 / 3) : 7.787 * g + 16 / 116;
    return new Z(f, m, v, "xyz");
  }
  /*
  Input and Output methods
  */
  _clamped() {
    const {
      _a: t,
      _b: e,
      _c: n
    } = this.rgb(), {
      max: s,
      min: r,
      round: a
    } = Math, o = (h) => s(0, r(a(h), 255));
    return [t, e, n].map(o);
  }
  /*
  Constructing colors
  */
}
class at {
  // Initialize
  constructor(...t) {
    this.init(...t);
  }
  // Clone point
  clone() {
    return new at(this);
  }
  init(t, e) {
    const n = {
      x: 0,
      y: 0
    }, s = Array.isArray(t) ? {
      x: t[0],
      y: t[1]
    } : typeof t == "object" ? {
      x: t.x,
      y: t.y
    } : {
      x: t,
      y: e
    };
    return this.x = s.x == null ? n.x : s.x, this.y = s.y == null ? n.y : s.y, this;
  }
  toArray() {
    return [this.x, this.y];
  }
  transform(t) {
    return this.clone().transformO(t);
  }
  // Transform point with matrix
  transformO(t) {
    z.isMatrixLike(t) || (t = new z(t));
    const {
      x: e,
      y: n
    } = this;
    return this.x = t.a * e + t.c * n + t.e, this.y = t.b * e + t.d * n + t.f, this;
  }
}
function o0(i, t) {
  return new at(i, t).transformO(this.screenCTM().inverseO());
}
function qe(i, t, e) {
  return Math.abs(t - i) < 1e-6;
}
class z {
  constructor(...t) {
    this.init(...t);
  }
  static formatTransforms(t) {
    const e = t.flip === "both" || t.flip === !0, n = t.flip && (e || t.flip === "x") ? -1 : 1, s = t.flip && (e || t.flip === "y") ? -1 : 1, r = t.skew && t.skew.length ? t.skew[0] : isFinite(t.skew) ? t.skew : isFinite(t.skewX) ? t.skewX : 0, a = t.skew && t.skew.length ? t.skew[1] : isFinite(t.skew) ? t.skew : isFinite(t.skewY) ? t.skewY : 0, o = t.scale && t.scale.length ? t.scale[0] * n : isFinite(t.scale) ? t.scale * n : isFinite(t.scaleX) ? t.scaleX * n : n, h = t.scale && t.scale.length ? t.scale[1] * s : isFinite(t.scale) ? t.scale * s : isFinite(t.scaleY) ? t.scaleY * s : s, l = t.shear || 0, c = t.rotate || t.theta || 0, d = new at(t.origin || t.around || t.ox || t.originX, t.oy || t.originY), g = d.x, f = d.y, m = new at(t.position || t.px || t.positionX || NaN, t.py || t.positionY || NaN), v = m.x, x = m.y, w = new at(t.translate || t.tx || t.translateX, t.ty || t.translateY), M = w.x, T = w.y, A = new at(t.relative || t.rx || t.relativeX, t.ry || t.relativeY), D = A.x, I = A.y;
    return {
      scaleX: o,
      scaleY: h,
      skewX: r,
      skewY: a,
      shear: l,
      theta: c,
      rx: D,
      ry: I,
      tx: M,
      ty: T,
      ox: g,
      oy: f,
      px: v,
      py: x
    };
  }
  static fromArray(t) {
    return {
      a: t[0],
      b: t[1],
      c: t[2],
      d: t[3],
      e: t[4],
      f: t[5]
    };
  }
  static isMatrixLike(t) {
    return t.a != null || t.b != null || t.c != null || t.d != null || t.e != null || t.f != null;
  }
  // left matrix, right matrix, target matrix which is overwritten
  static matrixMultiply(t, e, n) {
    const s = t.a * e.a + t.c * e.b, r = t.b * e.a + t.d * e.b, a = t.a * e.c + t.c * e.d, o = t.b * e.c + t.d * e.d, h = t.e + t.a * e.e + t.c * e.f, l = t.f + t.b * e.e + t.d * e.f;
    return n.a = s, n.b = r, n.c = a, n.d = o, n.e = h, n.f = l, n;
  }
  around(t, e, n) {
    return this.clone().aroundO(t, e, n);
  }
  // Transform around a center point
  aroundO(t, e, n) {
    const s = t || 0, r = e || 0;
    return this.translateO(-s, -r).lmultiplyO(n).translateO(s, r);
  }
  // Clones this matrix
  clone() {
    return new z(this);
  }
  // Decomposes this matrix into its affine parameters
  decompose(t = 0, e = 0) {
    const n = this.a, s = this.b, r = this.c, a = this.d, o = this.e, h = this.f, l = n * a - s * r, c = l > 0 ? 1 : -1, d = c * Math.sqrt(n * n + s * s), g = Math.atan2(c * s, c * n), f = 180 / Math.PI * g, m = Math.cos(g), v = Math.sin(g), x = (n * r + s * a) / l, w = r * d / (x * n - s) || a * d / (x * s + n), M = o - t + t * m * d + e * (x * m * d - v * w), T = h - e + t * v * d + e * (x * v * d + m * w);
    return {
      // Return the affine parameters
      scaleX: d,
      scaleY: w,
      shear: x,
      rotate: f,
      translateX: M,
      translateY: T,
      originX: t,
      originY: e,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }
  // Check if two matrices are equal
  equals(t) {
    if (t === this) return !0;
    const e = new z(t);
    return qe(this.a, e.a) && qe(this.b, e.b) && qe(this.c, e.c) && qe(this.d, e.d) && qe(this.e, e.e) && qe(this.f, e.f);
  }
  // Flip matrix on x or y, at a given offset
  flip(t, e) {
    return this.clone().flipO(t, e);
  }
  flipO(t, e) {
    return t === "x" ? this.scaleO(-1, 1, e, 0) : t === "y" ? this.scaleO(1, -1, 0, e) : this.scaleO(-1, -1, t, e || t);
  }
  // Initialize
  init(t) {
    const e = z.fromArray([1, 0, 0, 1, 0, 0]);
    return t = t instanceof Zt ? t.matrixify() : typeof t == "string" ? z.fromArray(t.split(ie).map(parseFloat)) : Array.isArray(t) ? z.fromArray(t) : typeof t == "object" && z.isMatrixLike(t) ? t : typeof t == "object" ? new z().transform(t) : arguments.length === 6 ? z.fromArray([].slice.call(arguments)) : e, this.a = t.a != null ? t.a : e.a, this.b = t.b != null ? t.b : e.b, this.c = t.c != null ? t.c : e.c, this.d = t.d != null ? t.d : e.d, this.e = t.e != null ? t.e : e.e, this.f = t.f != null ? t.f : e.f, this;
  }
  inverse() {
    return this.clone().inverseO();
  }
  // Inverses matrix
  inverseO() {
    const t = this.a, e = this.b, n = this.c, s = this.d, r = this.e, a = this.f, o = t * s - e * n;
    if (!o) throw new Error("Cannot invert " + this);
    const h = s / o, l = -e / o, c = -n / o, d = t / o, g = -(h * r + c * a), f = -(l * r + d * a);
    return this.a = h, this.b = l, this.c = c, this.d = d, this.e = g, this.f = f, this;
  }
  lmultiply(t) {
    return this.clone().lmultiplyO(t);
  }
  lmultiplyO(t) {
    const e = this, n = t instanceof z ? t : new z(t);
    return z.matrixMultiply(n, e, this);
  }
  // Left multiplies by the given matrix
  multiply(t) {
    return this.clone().multiplyO(t);
  }
  multiplyO(t) {
    const e = this, n = t instanceof z ? t : new z(t);
    return z.matrixMultiply(e, n, this);
  }
  // Rotate matrix
  rotate(t, e, n) {
    return this.clone().rotateO(t, e, n);
  }
  rotateO(t, e = 0, n = 0) {
    t = xs(t);
    const s = Math.cos(t), r = Math.sin(t), {
      a,
      b: o,
      c: h,
      d: l,
      e: c,
      f: d
    } = this;
    return this.a = a * s - o * r, this.b = o * s + a * r, this.c = h * s - l * r, this.d = l * s + h * r, this.e = c * s - d * r + n * r - e * s + e, this.f = d * s + c * r - e * r - n * s + n, this;
  }
  // Scale matrix
  scale(t, e, n, s) {
    return this.clone().scaleO(...arguments);
  }
  scaleO(t, e = t, n = 0, s = 0) {
    arguments.length === 3 && (s = n, n = e, e = t);
    const {
      a: r,
      b: a,
      c: o,
      d: h,
      e: l,
      f: c
    } = this;
    return this.a = r * t, this.b = a * e, this.c = o * t, this.d = h * e, this.e = l * t - n * t + n, this.f = c * e - s * e + s, this;
  }
  // Shear matrix
  shear(t, e, n) {
    return this.clone().shearO(t, e, n);
  }
  shearO(t, e = 0, n = 0) {
    const {
      a: s,
      b: r,
      c: a,
      d: o,
      e: h,
      f: l
    } = this;
    return this.a = s + r * t, this.c = a + o * t, this.e = h + l * t - n * t, this;
  }
  // Skew Matrix
  skew(t, e, n, s) {
    return this.clone().skewO(...arguments);
  }
  skewO(t, e = t, n = 0, s = 0) {
    arguments.length === 3 && (s = n, n = e, e = t), t = xs(t), e = xs(e);
    const r = Math.tan(t), a = Math.tan(e), {
      a: o,
      b: h,
      c: l,
      d: c,
      e: d,
      f: g
    } = this;
    return this.a = o + h * r, this.b = h + o * a, this.c = l + c * r, this.d = c + l * a, this.e = d + g * r - s * r, this.f = g + d * a - n * a, this;
  }
  // SkewX
  skewX(t, e, n) {
    return this.skew(t, 0, e, n);
  }
  // SkewY
  skewY(t, e, n) {
    return this.skew(0, t, e, n);
  }
  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  }
  // Convert matrix to string
  toString() {
    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
  }
  // Transform a matrix into another matrix by manipulating the space
  transform(t) {
    if (z.isMatrixLike(t))
      return new z(t).multiplyO(this);
    const e = z.formatTransforms(t), n = this, {
      x: s,
      y: r
    } = new at(e.ox, e.oy).transform(n), a = new z().translateO(e.rx, e.ry).lmultiplyO(n).translateO(-s, -r).scaleO(e.scaleX, e.scaleY).skewO(e.skewX, e.skewY).shearO(e.shear).rotateO(e.theta).translateO(s, r);
    if (isFinite(e.px) || isFinite(e.py)) {
      const o = new at(s, r).transform(a), h = isFinite(e.px) ? e.px - o.x : 0, l = isFinite(e.py) ? e.py - o.y : 0;
      a.translateO(h, l);
    }
    return a.translateO(e.tx, e.ty), a;
  }
  // Translate matrix
  translate(t, e) {
    return this.clone().translateO(t, e);
  }
  translateO(t, e) {
    return this.e += t || 0, this.f += e || 0, this;
  }
  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }
}
function h0() {
  return new z(this.node.getCTM());
}
function l0() {
  if (typeof this.isRoot == "function" && !this.isRoot()) {
    const i = this.rect(1, 1), t = i.node.getScreenCTM();
    return i.remove(), new z(t);
  }
  return new z(this.node.getScreenCTM());
}
W(z, "Matrix");
function ae() {
  if (!ae.nodes) {
    const i = vt().size(2, 0);
    i.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), i.attr("focusable", "false"), i.attr("aria-hidden", "true");
    const t = i.path().node;
    ae.nodes = {
      svg: i,
      path: t
    };
  }
  if (!ae.nodes.svg.node.parentNode) {
    const i = V.document.body || V.document.documentElement;
    ae.nodes.svg.addTo(i);
  }
  return ae.nodes;
}
function hl(i) {
  return !i.width && !i.height && !i.x && !i.y;
}
function c0(i) {
  return i === V.document || (V.document.documentElement.contains || function(t) {
    for (; t.parentNode; )
      t = t.parentNode;
    return t === V.document;
  }).call(V.document.documentElement, i);
}
class mt {
  constructor(...t) {
    this.init(...t);
  }
  addOffset() {
    return this.x += V.window.pageXOffset, this.y += V.window.pageYOffset, new mt(this);
  }
  init(t) {
    const e = [0, 0, 0, 0];
    return t = typeof t == "string" ? t.split(ie).map(parseFloat) : Array.isArray(t) ? t : typeof t == "object" ? [t.left != null ? t.left : t.x, t.top != null ? t.top : t.y, t.width, t.height] : arguments.length === 4 ? [].slice.call(arguments) : e, this.x = t[0] || 0, this.y = t[1] || 0, this.width = this.w = t[2] || 0, this.height = this.h = t[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
  }
  isNulled() {
    return hl(this);
  }
  // Merge rect box with another, return a new instance
  merge(t) {
    const e = Math.min(this.x, t.x), n = Math.min(this.y, t.y), s = Math.max(this.x + this.width, t.x + t.width) - e, r = Math.max(this.y + this.height, t.y + t.height) - n;
    return new mt(e, n, s, r);
  }
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }
  toString() {
    return this.x + " " + this.y + " " + this.width + " " + this.height;
  }
  transform(t) {
    t instanceof z || (t = new z(t));
    let e = 1 / 0, n = -1 / 0, s = 1 / 0, r = -1 / 0;
    return [new at(this.x, this.y), new at(this.x2, this.y), new at(this.x, this.y2), new at(this.x2, this.y2)].forEach(function(o) {
      o = o.transform(t), e = Math.min(e, o.x), n = Math.max(n, o.x), s = Math.min(s, o.y), r = Math.max(r, o.y);
    }), new mt(e, s, n - e, r - s);
  }
}
function ll(i, t, e) {
  let n;
  try {
    if (n = t(i.node), hl(n) && !c0(i.node))
      throw new Error("Element not in the dom");
  } catch {
    n = e(i);
  }
  return n;
}
function d0() {
  const e = ll(this, (s) => s.getBBox(), (s) => {
    try {
      const r = s.clone().addTo(ae().svg).show(), a = r.node.getBBox();
      return r.remove(), a;
    } catch (r) {
      throw new Error(`Getting bbox of element "${s.node.nodeName}" is not possible: ${r.toString()}`);
    }
  });
  return new mt(e);
}
function u0(i) {
  const n = ll(this, (r) => r.getBoundingClientRect(), (r) => {
    throw new Error(`Getting rbox of element "${r.node.nodeName}" is not possible`);
  }), s = new mt(n);
  return i ? s.transform(i.screenCTM().inverseO()) : s.addOffset();
}
function f0(i, t) {
  const e = this.bbox();
  return i > e.x && t > e.y && i < e.x + e.width && t < e.y + e.height;
}
U({
  viewbox: {
    viewbox(i, t, e, n) {
      return i == null ? new mt(this.attr("viewBox")) : this.attr("viewBox", new mt(i, t, e, n));
    },
    zoom(i, t) {
      let {
        width: e,
        height: n
      } = this.attr(["width", "height"]);
      if ((!e && !n || typeof e == "string" || typeof n == "string") && (e = this.node.clientWidth, n = this.node.clientHeight), !e || !n)
        throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
      const s = this.viewbox(), r = e / s.width, a = n / s.height, o = Math.min(r, a);
      if (i == null)
        return o;
      let h = o / i;
      h === 1 / 0 && (h = Number.MAX_SAFE_INTEGER / 100), t = t || new at(e / 2 / r + s.x, n / 2 / a + s.y);
      const l = new mt(s).transform(new z({
        scale: h,
        origin: t
      }));
      return this.viewbox(l);
    }
  }
});
W(mt, "Box");
class Pe extends Array {
  constructor(t = [], ...e) {
    if (super(t, ...e), typeof t == "number") return this;
    this.length = 0, this.push(...t);
  }
}
G([Pe], {
  each(i, ...t) {
    return typeof i == "function" ? this.map((e, n, s) => i.call(e, e, n, s)) : this.map((e) => e[i](...t));
  },
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
});
const p0 = ["toArray", "constructor", "each"];
Pe.extend = function(i) {
  i = i.reduce((t, e) => (p0.includes(e) || e[0] === "_" || (t[e] = function(...n) {
    return this.each(e, ...n);
  }), t), {}), G([Pe], i);
};
function mi(i, t) {
  return new Pe(Gr((t || V.document).querySelectorAll(i), function(e) {
    return zt(e);
  }));
}
function m0(i) {
  return mi(i, this.node);
}
function g0(i) {
  return zt(this.node.querySelector(i));
}
let v0 = 0;
const cl = {};
function dl(i) {
  let t = i.getEventHolder();
  return t === V.window && (t = cl), t.events || (t.events = {}), t.events;
}
function qr(i) {
  return i.getEventTarget();
}
function y0(i) {
  let t = i.getEventHolder();
  t === V.window && (t = cl), t.events && (t.events = {});
}
function Qs(i, t, e, n, s) {
  const r = e.bind(n || i), a = vt(i), o = dl(a), h = qr(a);
  t = Array.isArray(t) ? t : t.split(ie), e._svgjsListenerId || (e._svgjsListenerId = ++v0), t.forEach(function(l) {
    const c = l.split(".")[0], d = l.split(".")[1] || "*";
    o[c] = o[c] || {}, o[c][d] = o[c][d] || {}, o[c][d][e._svgjsListenerId] = r, h.addEventListener(c, r, s || !1);
  });
}
function ti(i, t, e, n) {
  const s = vt(i), r = dl(s), a = qr(s);
  typeof e == "function" && (e = e._svgjsListenerId, !e) || (t = Array.isArray(t) ? t : (t || "").split(ie), t.forEach(function(o) {
    const h = o && o.split(".")[0], l = o && o.split(".")[1];
    let c, d;
    if (e)
      r[h] && r[h][l || "*"] && (a.removeEventListener(h, r[h][l || "*"][e], n || !1), delete r[h][l || "*"][e]);
    else if (h && l) {
      if (r[h] && r[h][l]) {
        for (d in r[h][l])
          ti(a, [h, l].join("."), d);
        delete r[h][l];
      }
    } else if (l)
      for (o in r)
        for (c in r[o])
          l === c && ti(a, [o, l].join("."));
    else if (h) {
      if (r[h]) {
        for (c in r[h])
          ti(a, [h, c].join("."));
        delete r[h];
      }
    } else {
      for (o in r)
        ti(a, o);
      y0(s);
    }
  }));
}
function _0(i, t, e, n) {
  const s = qr(i);
  return t instanceof V.window.Event || (t = new V.window.CustomEvent(t, {
    detail: e,
    cancelable: !0,
    ...n
  })), s.dispatchEvent(t), t;
}
class Ki extends Yr {
  addEventListener() {
  }
  dispatch(t, e, n) {
    return _0(this, t, e, n);
  }
  dispatchEvent(t) {
    const e = this.getEventHolder().events;
    if (!e) return !0;
    const n = e[t.type];
    for (const s in n)
      for (const r in n[s])
        n[s][r](t);
    return !t.defaultPrevented;
  }
  // Fire given event
  fire(t, e, n) {
    return this.dispatch(t, e, n), this;
  }
  getEventHolder() {
    return this;
  }
  getEventTarget() {
    return this;
  }
  // Unbind event from listener
  off(t, e, n) {
    return ti(this, t, e, n), this;
  }
  // Bind given event to listener
  on(t, e, n, s) {
    return Qs(this, t, e, n, s), this;
  }
  removeEventListener() {
  }
}
W(Ki, "EventTarget");
function _o() {
}
const bi = {
  duration: 400,
  ease: ">",
  delay: 0
}, x0 = {
  // fill and stroke
  "fill-opacity": 1,
  "stroke-opacity": 1,
  "stroke-width": 0,
  "stroke-linejoin": "miter",
  "stroke-linecap": "butt",
  fill: "#000000",
  stroke: "#000000",
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  "stop-opacity": 1,
  "stop-color": "#000000",
  // text
  "text-anchor": "start"
};
class hi extends Array {
  constructor(...t) {
    super(...t), this.init(...t);
  }
  clone() {
    return new this.constructor(this);
  }
  init(t) {
    return typeof t == "number" ? this : (this.length = 0, this.push(...this.parse(t)), this);
  }
  // Parse whitespace separated string
  parse(t = []) {
    return t instanceof Array ? t : t.trim().split(ie).map(parseFloat);
  }
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
  toSet() {
    return new Set(this);
  }
  toString() {
    return this.join(" ");
  }
  // Flattens the array if needed
  valueOf() {
    const t = [];
    return t.push(...this), t;
  }
}
class B {
  // Initialize
  constructor(...t) {
    this.init(...t);
  }
  convert(t) {
    return new B(this.value, t);
  }
  // Divide number
  divide(t) {
    return t = new B(t), new B(this / t, this.unit || t.unit);
  }
  init(t, e) {
    return e = Array.isArray(t) ? t[1] : e, t = Array.isArray(t) ? t[0] : t, this.value = 0, this.unit = e || "", typeof t == "number" ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : typeof t == "string" ? (e = t.match(ol), e && (this.value = parseFloat(e[1]), e[5] === "%" ? this.value /= 100 : e[5] === "s" && (this.value *= 1e3), this.unit = e[5])) : t instanceof B && (this.value = t.valueOf(), this.unit = t.unit), this;
  }
  // Subtract number
  minus(t) {
    return t = new B(t), new B(this - t, this.unit || t.unit);
  }
  // Add number
  plus(t) {
    return t = new B(t), new B(this + t, this.unit || t.unit);
  }
  // Multiply number
  times(t) {
    return t = new B(t), new B(this * t, this.unit || t.unit);
  }
  toArray() {
    return [this.value, this.unit];
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return (this.unit === "%" ? ~~(this.value * 1e8) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
  }
  valueOf() {
    return this.value;
  }
}
const ul = [];
function w0(i) {
  ul.push(i);
}
function E0(i, t, e) {
  if (i == null) {
    i = {}, t = this.node.attributes;
    for (const n of t)
      i[n.nodeName] = yo.test(n.nodeValue) ? parseFloat(n.nodeValue) : n.nodeValue;
    return i;
  } else {
    if (i instanceof Array)
      return i.reduce((n, s) => (n[s] = this.attr(s), n), {});
    if (typeof i == "object" && i.constructor === Object)
      for (t in i) this.attr(t, i[t]);
    else if (t === null)
      this.node.removeAttribute(i);
    else {
      if (t == null)
        return t = this.node.getAttribute(i), t == null ? x0[i] : yo.test(t) ? parseFloat(t) : t;
      t = ul.reduce((n, s) => s(i, n, this), t), typeof t == "number" ? t = new B(t) : Z.isColor(t) ? t = new Z(t) : t.constructor === Array && (t = new hi(t)), i === "leading" ? this.leading && this.leading(t) : typeof e == "string" ? this.node.setAttributeNS(e, i, t.toString()) : this.node.setAttribute(i, t.toString()), this.rebuild && (i === "font-size" || i === "x") && this.rebuild();
    }
  }
  return this;
}
class fe extends Ki {
  constructor(t, e) {
    super(), this.node = t, this.type = t.nodeName, e && t !== e && this.attr(e);
  }
  // Add given element at a position
  add(t, e) {
    return t = vt(t), t.removeNamespace && this.node instanceof V.window.SVGElement && t.removeNamespace(), e == null ? this.node.appendChild(t.node) : t.node !== this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this;
  }
  // Add element to given container and return self
  addTo(t, e) {
    return vt(t).put(this, e);
  }
  // Returns all child elements
  children() {
    return new Pe(Gr(this.node.children, function(t) {
      return zt(t);
    }));
  }
  // Remove all elements in this container
  clear() {
    for (; this.node.hasChildNodes(); )
      this.node.removeChild(this.node.lastChild);
    return this;
  }
  // Clone element
  clone(t = !0, e = !0) {
    this.writeDataToDom();
    let n = this.node.cloneNode(t);
    return e && (n = al(n)), new this.constructor(n);
  }
  // Iterates over all children and invokes a given block
  each(t, e) {
    const n = this.children();
    let s, r;
    for (s = 0, r = n.length; s < r; s++)
      t.apply(n[s], [s, n]), e && n[s].each(t, e);
    return this;
  }
  element(t, e) {
    return this.put(new fe(Bi(t), e));
  }
  // Get first child
  first() {
    return zt(this.node.firstChild);
  }
  // Get a element at the given index
  get(t) {
    return zt(this.node.childNodes[t]);
  }
  getEventHolder() {
    return this.node;
  }
  getEventTarget() {
    return this.node;
  }
  // Checks if the given element is a child
  has(t) {
    return this.index(t) >= 0;
  }
  html(t, e) {
    return this.xml(t, e, E1);
  }
  // Get / set id
  id(t) {
    return typeof t > "u" && !this.node.id && (this.node.id = rl(this.type)), this.attr("id", t);
  }
  // Gets index of given element
  index(t) {
    return [].slice.call(this.node.childNodes).indexOf(t.node);
  }
  // Get the last child
  last() {
    return zt(this.node.lastChild);
  }
  // matches the element vs a css selector
  matches(t) {
    const e = this.node, n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || null;
    return n && n.call(e, t);
  }
  // Returns the parent element instance
  parent(t) {
    let e = this;
    if (!e.node.parentNode) return null;
    if (e = zt(e.node.parentNode), !t) return e;
    do
      if (typeof t == "string" ? e.matches(t) : e instanceof t) return e;
    while (e = zt(e.node.parentNode));
    return e;
  }
  // Basically does the same as `add()` but returns the added element instead
  put(t, e) {
    return t = vt(t), this.add(t, e), t;
  }
  // Add element to given container and return container
  putIn(t, e) {
    return vt(t).add(this, e);
  }
  // Remove element
  remove() {
    return this.parent() && this.parent().removeElement(this), this;
  }
  // Remove a given child
  removeElement(t) {
    return this.node.removeChild(t.node), this;
  }
  // Replace this with element
  replace(t) {
    return t = vt(t), this.node.parentNode && this.node.parentNode.replaceChild(t.node, this.node), t;
  }
  round(t = 2, e = null) {
    const n = 10 ** t, s = this.attr(e);
    for (const r in s)
      typeof s[r] == "number" && (s[r] = Math.round(s[r] * n) / n);
    return this.attr(s), this;
  }
  // Import / Export raw svg
  svg(t, e) {
    return this.xml(t, e, Wr);
  }
  // Return id on string conversion
  toString() {
    return this.id();
  }
  words(t) {
    return this.node.textContent = t, this;
  }
  wrap(t) {
    const e = this.parent();
    if (!e)
      return this.addTo(t);
    const n = e.index(this);
    return e.put(t, n).put(this);
  }
  // write svgjs data to the dom
  writeDataToDom() {
    return this.each(function() {
      this.writeDataToDom();
    }), this;
  }
  // Import / Export raw svg
  xml(t, e, n) {
    if (typeof t == "boolean" && (n = e, e = t, t = null), t == null || typeof t == "function") {
      e = e ?? !0, this.writeDataToDom();
      let o = this;
      if (t != null) {
        if (o = zt(o.node.cloneNode(!0)), e) {
          const h = t(o);
          if (o = h || o, h === !1) return "";
        }
        o.each(function() {
          const h = t(this), l = h || this;
          h === !1 ? this.remove() : h && this !== l && this.replace(l);
        }, !0);
      }
      return e ? o.node.outerHTML : o.node.innerHTML;
    }
    e = e ?? !1;
    const s = Bi("wrapper", n), r = V.document.createDocumentFragment();
    s.innerHTML = t;
    for (let o = s.children.length; o--; )
      r.appendChild(s.firstElementChild);
    const a = this.parent();
    return e ? this.replace(r) && a : this.add(r);
  }
}
G(fe, {
  attr: E0,
  find: m0,
  findOne: g0
});
W(fe, "Dom");
class Zt extends fe {
  constructor(t, e) {
    super(t, e), this.dom = {}, this.node.instance = this, t.hasAttribute("svgjs:data") && this.setData(JSON.parse(t.getAttribute("svgjs:data")) || {});
  }
  // Move element by its center
  center(t, e) {
    return this.cx(t).cy(e);
  }
  // Move by center over x-axis
  cx(t) {
    return t == null ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
  }
  // Move by center over y-axis
  cy(t) {
    return t == null ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
  }
  // Get defs
  defs() {
    const t = this.root();
    return t && t.defs();
  }
  // Relative move over x and y axes
  dmove(t, e) {
    return this.dx(t).dy(e);
  }
  // Relative move over x axis
  dx(t = 0) {
    return this.x(new B(t).plus(this.x()));
  }
  // Relative move over y axis
  dy(t = 0) {
    return this.y(new B(t).plus(this.y()));
  }
  getEventHolder() {
    return this;
  }
  // Set height of element
  height(t) {
    return this.attr("height", t);
  }
  // Move element to given x and y values
  move(t, e) {
    return this.x(t).y(e);
  }
  // return array of all ancestors of given type up to the root svg
  parents(t = this.root()) {
    const e = typeof t == "string";
    e || (t = vt(t));
    const n = new Pe();
    let s = this;
    for (; (s = s.parent()) && s.node !== V.document && s.nodeName !== "#document-fragment" && (n.push(s), !(!e && s.node === t.node || e && s.matches(t))); )
      if (s.node === this.root().node)
        return null;
    return n;
  }
  // Get referenced element form attribute value
  reference(t) {
    if (t = this.attr(t), !t) return null;
    const e = (t + "").match($1);
    return e ? vt(e[1]) : null;
  }
  // Get parent document
  root() {
    const t = this.parent(M1(Xr));
    return t && t.root();
  }
  // set given data to the elements data property
  setData(t) {
    return this.dom = t, this;
  }
  // Set element size to given width and height
  size(t, e) {
    const n = pi(this, t, e);
    return this.width(new B(n.width)).height(new B(n.height));
  }
  // Set width of element
  width(t) {
    return this.attr("width", t);
  }
  // write svgjs data to the dom
  writeDataToDom() {
    return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), super.writeDataToDom();
  }
  // Move over x-axis
  x(t) {
    return this.attr("x", t);
  }
  // Move over y-axis
  y(t) {
    return this.attr("y", t);
  }
}
G(Zt, {
  bbox: d0,
  rbox: u0,
  inside: f0,
  point: o0,
  ctm: h0,
  screenCTM: l0
});
W(Zt, "Element");
const Ci = {
  stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
  fill: ["color", "opacity", "rule"],
  prefix: function(i, t) {
    return t === "color" ? i : i + "-" + t;
  }
};
["fill", "stroke"].forEach(function(i) {
  const t = {};
  let e;
  t[i] = function(n) {
    if (typeof n > "u")
      return this.attr(i);
    if (typeof n == "string" || n instanceof Z || Z.isRgb(n) || n instanceof Zt)
      this.attr(i, n);
    else
      for (e = Ci[i].length - 1; e >= 0; e--)
        n[Ci[i][e]] != null && this.attr(Ci.prefix(i, Ci[i][e]), n[Ci[i][e]]);
    return this;
  }, U(["Element", "Runner"], t);
});
U(["Element", "Runner"], {
  // Let the user set the matrix directly
  matrix: function(i, t, e, n, s, r) {
    return i == null ? new z(this) : this.attr("transform", new z(i, t, e, n, s, r));
  },
  // Map rotation to transform
  rotate: function(i, t, e) {
    return this.transform({
      rotate: i,
      ox: t,
      oy: e
    }, !0);
  },
  // Map skew to transform
  skew: function(i, t, e, n) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: i,
      ox: t,
      oy: e
    }, !0) : this.transform({
      skew: [i, t],
      ox: e,
      oy: n
    }, !0);
  },
  shear: function(i, t, e) {
    return this.transform({
      shear: i,
      ox: t,
      oy: e
    }, !0);
  },
  // Map scale to transform
  scale: function(i, t, e, n) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: i,
      ox: t,
      oy: e
    }, !0) : this.transform({
      scale: [i, t],
      ox: e,
      oy: n
    }, !0);
  },
  // Map translate to transform
  translate: function(i, t) {
    return this.transform({
      translate: [i, t]
    }, !0);
  },
  // Map relative translations to transform
  relative: function(i, t) {
    return this.transform({
      relative: [i, t]
    }, !0);
  },
  // Map flip to transform
  flip: function(i = "both", t = "center") {
    return "xybothtrue".indexOf(i) === -1 && (t = i, i = "both"), this.transform({
      flip: i,
      origin: t
    }, !0);
  },
  // Opacity
  opacity: function(i) {
    return this.attr("opacity", i);
  }
});
U("radius", {
  // Add x and y radius
  radius: function(i, t = i) {
    return (this._element || this).type === "radialGradient" ? this.attr("r", new B(i)) : this.rx(i).ry(t);
  }
});
U("Path", {
  // Get path length
  length: function() {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function(i) {
    return new at(this.node.getPointAtLength(i));
  }
});
U(["Element", "Runner"], {
  // Set font
  font: function(i, t) {
    if (typeof i == "object") {
      for (t in i) this.font(t, i[t]);
      return this;
    }
    return i === "leading" ? this.leading(t) : i === "anchor" ? this.attr("text-anchor", t) : i === "size" || i === "family" || i === "weight" || i === "stretch" || i === "variant" || i === "style" ? this.attr("font-" + i, t) : this.attr(i, t);
  }
});
const C0 = ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].reduce(function(i, t) {
  const e = function(n) {
    return n === null ? this.off(t) : this.on(t, n), this;
  };
  return i[t] = e, i;
}, {});
U("Element", C0);
function M0() {
  return this.attr("transform", null);
}
function T0() {
  return (this.attr("transform") || "").split(H1).slice(0, -1).map(function(t) {
    const e = t.trim().split("(");
    return [e[0], e[1].split(ie).map(function(n) {
      return parseFloat(n);
    })];
  }).reverse().reduce(function(t, e) {
    return e[0] === "matrix" ? t.lmultiply(z.fromArray(e[1])) : t[e[0]].apply(t, e[1]);
  }, new z());
}
function b0(i, t) {
  if (this === i) return this;
  const e = this.screenCTM(), n = i.screenCTM().inverse();
  return this.addTo(i, t).untransform().transform(n.multiply(e)), this;
}
function N0(i) {
  return this.toParent(this.root(), i);
}
function S0(i, t) {
  if (i == null || typeof i == "string") {
    const s = new z(this).decompose();
    return i == null ? s : s[i];
  }
  z.isMatrixLike(i) || (i = {
    ...i,
    origin: Js(i, this)
  });
  const e = t === !0 ? this : t || !1, n = new z(e).transform(i);
  return this.attr("transform", n);
}
U("Element", {
  untransform: M0,
  matrixify: T0,
  toParent: b0,
  toRoot: N0,
  transform: S0
});
class Nt extends Zt {
  flatten(t = this, e) {
    return this.each(function() {
      if (this instanceof Nt)
        return this.flatten().ungroup();
    }), this;
  }
  ungroup(t = this.parent(), e = t.index(this)) {
    return e = e === -1 ? t.children().length : e, this.each(function(n, s) {
      return s[s.length - n - 1].toParent(t, e);
    }), this.remove();
  }
}
W(Nt, "Container");
class Kr extends Nt {
  constructor(t, e = t) {
    super(it("defs", t), e);
  }
  flatten() {
    return this;
  }
  ungroup() {
    return this;
  }
}
W(Kr, "Defs");
let Ot = class extends Zt {
};
W(Ot, "Shape");
function Zr(i) {
  return this.attr("rx", i);
}
function Jr(i) {
  return this.attr("ry", i);
}
function fl(i) {
  return i == null ? this.cx() - this.rx() : this.cx(i + this.rx());
}
function pl(i) {
  return i == null ? this.cy() - this.ry() : this.cy(i + this.ry());
}
function ml(i) {
  return this.attr("cx", i);
}
function gl(i) {
  return this.attr("cy", i);
}
function vl(i) {
  return i == null ? this.rx() * 2 : this.rx(new B(i).divide(2));
}
function yl(i) {
  return i == null ? this.ry() * 2 : this.ry(new B(i).divide(2));
}
var L0 = {
  __proto__: null,
  rx: Zr,
  ry: Jr,
  x: fl,
  y: pl,
  cx: ml,
  cy: gl,
  width: vl,
  height: yl
};
class Zn extends Ot {
  constructor(t, e = t) {
    super(it("ellipse", t), e);
  }
  size(t, e) {
    const n = pi(this, t, e);
    return this.rx(new B(n.width).divide(2)).ry(new B(n.height).divide(2));
  }
}
G(Zn, L0);
U("Container", {
  // Create an ellipse
  ellipse: et(function(i = 0, t = i) {
    return this.put(new Zn()).size(i, t).move(0, 0);
  })
});
W(Zn, "Ellipse");
class _l extends fe {
  constructor(t = V.document.createDocumentFragment()) {
    super(t);
  }
  // Import / Export raw xml
  xml(t, e, n) {
    if (typeof t == "boolean" && (n = e, e = t, t = null), t == null || typeof t == "function") {
      const s = new fe(Bi("wrapper", n));
      return s.add(this.node.cloneNode(!0)), s.xml(!1, n);
    }
    return super.xml(t, !1, n);
  }
}
W(_l, "Fragment");
function xl(i, t) {
  return (this._element || this).type === "radialGradient" ? this.attr({
    fx: new B(i),
    fy: new B(t)
  }) : this.attr({
    x1: new B(i),
    y1: new B(t)
  });
}
function wl(i, t) {
  return (this._element || this).type === "radialGradient" ? this.attr({
    cx: new B(i),
    cy: new B(t)
  }) : this.attr({
    x2: new B(i),
    y2: new B(t)
  });
}
var A0 = {
  __proto__: null,
  from: xl,
  to: wl
};
class Zi extends Nt {
  constructor(t, e) {
    super(it(t + "Gradient", typeof t == "string" ? null : t), e);
  }
  // custom attr to handle transform
  attr(t, e, n) {
    return t === "transform" && (t = "gradientTransform"), super.attr(t, e, n);
  }
  bbox() {
    return new mt();
  }
  targets() {
    return mi("svg [fill*=" + this.id() + "]");
  }
  // Alias string conversion to fill
  toString() {
    return this.url();
  }
  // Update gradient
  update(t) {
    return this.clear(), typeof t == "function" && t.call(this, this), this;
  }
  // Return the fill id
  url() {
    return "url(#" + this.id() + ")";
  }
}
G(Zi, A0);
U({
  Container: {
    // Create gradient element in defs
    gradient(...i) {
      return this.defs().gradient(...i);
    }
  },
  // define gradient
  Defs: {
    gradient: et(function(i, t) {
      return this.put(new Zi(i)).update(t);
    })
  }
});
W(Zi, "Gradient");
class $i extends Nt {
  // Initialize node
  constructor(t, e = t) {
    super(it("pattern", t), e);
  }
  // custom attr to handle transform
  attr(t, e, n) {
    return t === "transform" && (t = "patternTransform"), super.attr(t, e, n);
  }
  bbox() {
    return new mt();
  }
  targets() {
    return mi("svg [fill*=" + this.id() + "]");
  }
  // Alias string conversion to fill
  toString() {
    return this.url();
  }
  // Update pattern by rebuilding
  update(t) {
    return this.clear(), typeof t == "function" && t.call(this, this), this;
  }
  // Return the fill id
  url() {
    return "url(#" + this.id() + ")";
  }
}
U({
  Container: {
    // Create pattern element in defs
    pattern(...i) {
      return this.defs().pattern(...i);
    }
  },
  Defs: {
    pattern: et(function(i, t, e) {
      return this.put(new $i()).update(e).attr({
        x: 0,
        y: 0,
        width: i,
        height: t,
        patternUnits: "userSpaceOnUse"
      });
    })
  }
});
W($i, "Pattern");
let Ue = class extends Ot {
  constructor(t, e = t) {
    super(it("image", t), e);
  }
  // (re)load image
  load(t, e) {
    if (!t) return this;
    const n = new V.window.Image();
    return Qs(n, "load", function(s) {
      const r = this.parent($i);
      this.width() === 0 && this.height() === 0 && this.size(n.width, n.height), r instanceof $i && r.width() === 0 && r.height() === 0 && r.size(this.width(), this.height()), typeof e == "function" && e.call(this, s);
    }, this), Qs(n, "load error", function() {
      ti(n);
    }), this.attr("href", n.src = t, qi);
  }
};
w0(function(i, t, e) {
  return (i === "fill" || i === "stroke") && j1.test(t) && (t = e.root().defs().image(t)), t instanceof Ue && (t = e.root().defs().pattern(0, 0, (n) => {
    n.add(t);
  })), t;
});
U({
  Container: {
    // create image element, load image and set its size
    image: et(function(i, t) {
      return this.put(new Ue()).size(0, 0).load(i, t);
    })
  }
});
W(Ue, "Image");
class pe extends hi {
  // Get bounding box of points
  bbox() {
    let t = -1 / 0, e = -1 / 0, n = 1 / 0, s = 1 / 0;
    return this.forEach(function(r) {
      t = Math.max(r[0], t), e = Math.max(r[1], e), n = Math.min(r[0], n), s = Math.min(r[1], s);
    }), new mt(n, s, t - n, e - s);
  }
  // Move point string
  move(t, e) {
    const n = this.bbox();
    if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e))
      for (let s = this.length - 1; s >= 0; s--)
        this[s] = [this[s][0] + t, this[s][1] + e];
    return this;
  }
  // Parse point string and flat array
  parse(t = [0, 0]) {
    const e = [];
    t instanceof Array ? t = Array.prototype.concat.apply([], t) : t = t.trim().split(ie).map(parseFloat), t.length % 2 !== 0 && t.pop();
    for (let n = 0, s = t.length; n < s; n = n + 2)
      e.push([t[n], t[n + 1]]);
    return e;
  }
  // Resize poly string
  size(t, e) {
    let n;
    const s = this.bbox();
    for (n = this.length - 1; n >= 0; n--)
      s.width && (this[n][0] = (this[n][0] - s.x) * t / s.width + s.x), s.height && (this[n][1] = (this[n][1] - s.y) * e / s.height + s.y);
    return this;
  }
  // Convert array to line object
  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  }
  // Convert array to string
  toString() {
    const t = [];
    for (let e = 0, n = this.length; e < n; e++)
      t.push(this[e].join(","));
    return t.join(" ");
  }
  transform(t) {
    return this.clone().transformO(t);
  }
  // transform points with matrix (similar to Point.transform)
  transformO(t) {
    z.isMatrixLike(t) || (t = new z(t));
    for (let e = this.length; e--; ) {
      const [n, s] = this[e];
      this[e][0] = t.a * n + t.c * s + t.e, this[e][1] = t.b * n + t.d * s + t.f;
    }
    return this;
  }
}
const D0 = pe;
function O0(i) {
  return i == null ? this.bbox().x : this.move(i, this.bbox().y);
}
function R0(i) {
  return i == null ? this.bbox().y : this.move(this.bbox().x, i);
}
function I0(i) {
  const t = this.bbox();
  return i == null ? t.width : this.size(i, t.height);
}
function z0(i) {
  const t = this.bbox();
  return i == null ? t.height : this.size(t.width, i);
}
var Qr = {
  __proto__: null,
  MorphArray: D0,
  x: O0,
  y: R0,
  width: I0,
  height: z0
};
class Hi extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("line", t), e);
  }
  // Get array
  array() {
    return new pe([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
  }
  // Move by left top corner
  move(t, e) {
    return this.attr(this.array().move(t, e).toLine());
  }
  // Overwrite native plot() method
  plot(t, e, n, s) {
    return t == null ? this.array() : (typeof e < "u" ? t = {
      x1: t,
      y1: e,
      x2: n,
      y2: s
    } : t = new pe(t).toLine(), this.attr(t));
  }
  // Set element size to given width and height
  size(t, e) {
    const n = pi(this, t, e);
    return this.attr(this.array().size(n.width, n.height).toLine());
  }
}
G(Hi, Qr);
U({
  Container: {
    // Create a line element
    line: et(function(...i) {
      return Hi.prototype.plot.apply(this.put(new Hi()), i[0] != null ? i : [0, 0, 0, 0]);
    })
  }
});
W(Hi, "Line");
class Hn extends Nt {
  // Initialize node
  constructor(t, e = t) {
    super(it("marker", t), e);
  }
  // Set height of element
  height(t) {
    return this.attr("markerHeight", t);
  }
  orient(t) {
    return this.attr("orient", t);
  }
  // Set marker refX and refY
  ref(t, e) {
    return this.attr("refX", t).attr("refY", e);
  }
  // Return the fill id
  toString() {
    return "url(#" + this.id() + ")";
  }
  // Update marker
  update(t) {
    return this.clear(), typeof t == "function" && t.call(this, this), this;
  }
  // Set width of element
  width(t) {
    return this.attr("markerWidth", t);
  }
}
U({
  Container: {
    marker(...i) {
      return this.defs().marker(...i);
    }
  },
  Defs: {
    // Create marker
    marker: et(function(i, t, e) {
      return this.put(new Hn()).size(i, t).ref(i / 2, t / 2).viewbox(0, 0, i, t).attr("orient", "auto").update(e);
    })
  },
  marker: {
    // Create and attach markers
    marker(i, t, e, n) {
      let s = ["marker"];
      return i !== "all" && s.push(i), s = s.join("-"), i = arguments[1] instanceof Hn ? arguments[1] : this.defs().marker(t, e, n), this.attr(s, i);
    }
  }
});
W(Hn, "Marker");
function ei(i, t) {
  return function(e) {
    return e == null ? this[i] : (this[i] = e, t && t.call(this), this);
  };
}
const F0 = {
  "-": function(i) {
    return i;
  },
  "<>": function(i) {
    return -Math.cos(i * Math.PI) / 2 + 0.5;
  },
  ">": function(i) {
    return Math.sin(i * Math.PI / 2);
  },
  "<": function(i) {
    return -Math.cos(i * Math.PI / 2) + 1;
  },
  bezier: function(i, t, e, n) {
    return function(s) {
      return s < 0 ? i > 0 ? t / i * s : e > 0 ? n / e * s : 0 : s > 1 ? e < 1 ? (1 - n) / (1 - e) * s + (n - e) / (1 - e) : i < 1 ? (1 - t) / (1 - i) * s + (t - i) / (1 - i) : 1 : 3 * s * (1 - s) ** 2 * t + 3 * s ** 2 * (1 - s) * n + s ** 3;
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function(i, t = "end") {
    t = t.split("-").reverse()[0];
    let e = i;
    return t === "none" ? --e : t === "both" && ++e, (n, s = !1) => {
      let r = Math.floor(n * i);
      const a = n * r % 1 === 0;
      return (t === "start" || t === "both") && ++r, s && a && --r, n >= 0 && r < 0 && (r = 0), n <= 1 && r > e && (r = e), r / e;
    };
  }
};
class ta {
  done() {
    return !1;
  }
}
class tr extends ta {
  constructor(t = bi.ease) {
    super(), this.ease = F0[t] || t;
  }
  step(t, e, n) {
    return typeof t != "number" ? n < 1 ? t : e : t + (e - t) * this.ease(n);
  }
}
class Un extends ta {
  constructor(t) {
    super(), this.stepper = t;
  }
  done(t) {
    return t.done;
  }
  step(t, e, n, s) {
    return this.stepper(t, e, n, s);
  }
}
function xo() {
  const i = (this._duration || 500) / 1e3, t = this._overshoot || 0, e = 1e-10, n = Math.PI, s = Math.log(t / 100 + e), r = -s / Math.sqrt(n * n + s * s), a = 3.9 / (r * i);
  this.d = 2 * r * a, this.k = a * a;
}
class k0 extends Un {
  constructor(t = 500, e = 0) {
    super(), this.duration(t).overshoot(e);
  }
  step(t, e, n, s) {
    if (typeof t == "string") return t;
    if (s.done = n === 1 / 0, n === 1 / 0) return e;
    if (n === 0) return t;
    n > 100 && (n = 16), n /= 1e3;
    const r = s.velocity || 0, a = -this.d * r - this.k * (t - e), o = t + r * n + a * n * n / 2;
    return s.velocity = r + a * n, s.done = Math.abs(e - o) + Math.abs(r) < 2e-3, s.done ? e : o;
  }
}
G(k0, {
  duration: ei("_duration", xo),
  overshoot: ei("_overshoot", xo)
});
class P0 extends Un {
  constructor(t = 0.1, e = 0.01, n = 0, s = 1e3) {
    super(), this.p(t).i(e).d(n).windup(s);
  }
  step(t, e, n, s) {
    if (typeof t == "string") return t;
    if (s.done = n === 1 / 0, n === 1 / 0) return e;
    if (n === 0) return t;
    const r = e - t;
    let a = (s.integral || 0) + r * n;
    const o = (r - (s.error || 0)) / n, h = this._windup;
    return h !== !1 && (a = Math.max(-h, Math.min(a, h))), s.error = r, s.integral = a, s.done = Math.abs(r) < 1e-3, s.done ? e : t + (this.P * r + this.I * a + this.D * o);
  }
}
G(P0, {
  windup: ei("_windup"),
  p: ei("P"),
  i: ei("I"),
  d: ei("D")
});
const B0 = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
}, er = {
  M: function(i, t, e) {
    return t.x = e.x = i[0], t.y = e.y = i[1], ["M", t.x, t.y];
  },
  L: function(i, t) {
    return t.x = i[0], t.y = i[1], ["L", i[0], i[1]];
  },
  H: function(i, t) {
    return t.x = i[0], ["H", i[0]];
  },
  V: function(i, t) {
    return t.y = i[0], ["V", i[0]];
  },
  C: function(i, t) {
    return t.x = i[4], t.y = i[5], ["C", i[0], i[1], i[2], i[3], i[4], i[5]];
  },
  S: function(i, t) {
    return t.x = i[2], t.y = i[3], ["S", i[0], i[1], i[2], i[3]];
  },
  Q: function(i, t) {
    return t.x = i[2], t.y = i[3], ["Q", i[0], i[1], i[2], i[3]];
  },
  T: function(i, t) {
    return t.x = i[0], t.y = i[1], ["T", i[0], i[1]];
  },
  Z: function(i, t, e) {
    return t.x = e.x, t.y = e.y, ["Z"];
  },
  A: function(i, t) {
    return t.x = i[5], t.y = i[6], ["A", i[0], i[1], i[2], i[3], i[4], i[5], i[6]];
  }
}, Cs = "mlhvqtcsaz".split("");
for (let i = 0, t = Cs.length; i < t; ++i)
  er[Cs[i]] = /* @__PURE__ */ function(e) {
    return function(n, s, r) {
      if (e === "H") n[0] = n[0] + s.x;
      else if (e === "V") n[0] = n[0] + s.y;
      else if (e === "A")
        n[5] = n[5] + s.x, n[6] = n[6] + s.y;
      else
        for (let a = 0, o = n.length; a < o; ++a)
          n[a] = n[a] + (a % 2 ? s.y : s.x);
      return er[e](n, s, r);
    };
  }(Cs[i].toUpperCase());
function $0(i) {
  const t = i.segment[0];
  return er[t](i.segment.slice(1), i.p, i.p0);
}
function ir(i) {
  return i.segment.length && i.segment.length - 1 === B0[i.segment[0].toUpperCase()];
}
function H0(i, t) {
  i.inNumber && Ee(i, !1);
  const e = Vr.test(t);
  if (e)
    i.segment = [t];
  else {
    const n = i.lastCommand, s = n.toLowerCase(), r = n === s;
    i.segment = [s === "m" ? r ? "l" : "L" : n];
  }
  return i.inSegment = !0, i.lastCommand = i.segment[0], e;
}
function Ee(i, t) {
  if (!i.inNumber) throw new Error("Parser Error");
  i.number && i.segment.push(parseFloat(i.number)), i.inNumber = t, i.number = "", i.pointSeen = !1, i.hasExponent = !1, ir(i) && nr(i);
}
function nr(i) {
  i.inSegment = !1, i.absolute && (i.segment = $0(i)), i.segments.push(i.segment);
}
function U0(i) {
  if (!i.segment.length) return !1;
  const t = i.segment[0].toUpperCase() === "A", e = i.segment.length;
  return t && (e === 4 || e === 5);
}
function j0(i) {
  return i.lastToken.toUpperCase() === "E";
}
function G0(i, t = !0) {
  let e = 0, n = "";
  const s = {
    segment: [],
    inNumber: !1,
    number: "",
    lastToken: "",
    inSegment: !1,
    segments: [],
    pointSeen: !1,
    hasExponent: !1,
    absolute: t,
    p0: new at(),
    p: new at()
  };
  for (; s.lastToken = n, n = i.charAt(e++); )
    if (!(!s.inSegment && H0(s, n))) {
      if (n === ".") {
        if (s.pointSeen || s.hasExponent) {
          Ee(s, !1), --e;
          continue;
        }
        s.inNumber = !0, s.pointSeen = !0, s.number += n;
        continue;
      }
      if (!isNaN(parseInt(n))) {
        if (s.number === "0" || U0(s)) {
          s.inNumber = !0, s.number = n, Ee(s, !0);
          continue;
        }
        s.inNumber = !0, s.number += n;
        continue;
      }
      if (n === " " || n === ",") {
        s.inNumber && Ee(s, !1);
        continue;
      }
      if (n === "-") {
        if (s.inNumber && !j0(s)) {
          Ee(s, !1), --e;
          continue;
        }
        s.number += n, s.inNumber = !0;
        continue;
      }
      if (n.toUpperCase() === "E") {
        s.number += n, s.hasExponent = !0;
        continue;
      }
      if (Vr.test(n)) {
        if (s.inNumber)
          Ee(s, !1);
        else if (ir(s))
          nr(s);
        else
          throw new Error("parser Error");
        --e;
      }
    }
  return s.inNumber && Ee(s, !1), s.inSegment && ir(s) && nr(s), s.segments;
}
function W0(i) {
  let t = "";
  for (let e = 0, n = i.length; e < n; e++)
    t += i[e][0], i[e][1] != null && (t += i[e][1], i[e][2] != null && (t += " ", t += i[e][2], i[e][3] != null && (t += " ", t += i[e][3], t += " ", t += i[e][4], i[e][5] != null && (t += " ", t += i[e][5], t += " ", t += i[e][6], i[e][7] != null && (t += " ", t += i[e][7])))));
  return t + " ";
}
class Be extends hi {
  // Get bounding box of path
  bbox() {
    return ae().path.setAttribute("d", this.toString()), new mt(ae.nodes.path.getBBox());
  }
  // Move path string
  move(t, e) {
    const n = this.bbox();
    if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e))
      for (let s, r = this.length - 1; r >= 0; r--)
        s = this[r][0], s === "M" || s === "L" || s === "T" ? (this[r][1] += t, this[r][2] += e) : s === "H" ? this[r][1] += t : s === "V" ? this[r][1] += e : s === "C" || s === "S" || s === "Q" ? (this[r][1] += t, this[r][2] += e, this[r][3] += t, this[r][4] += e, s === "C" && (this[r][5] += t, this[r][6] += e)) : s === "A" && (this[r][6] += t, this[r][7] += e);
    return this;
  }
  // Absolutize and parse path to array
  parse(t = "M0 0") {
    return Array.isArray(t) && (t = Array.prototype.concat.apply([], t).toString()), G0(t);
  }
  // Resize path string
  size(t, e) {
    const n = this.bbox();
    let s, r;
    for (n.width = n.width === 0 ? 1 : n.width, n.height = n.height === 0 ? 1 : n.height, s = this.length - 1; s >= 0; s--)
      r = this[s][0], r === "M" || r === "L" || r === "T" ? (this[s][1] = (this[s][1] - n.x) * t / n.width + n.x, this[s][2] = (this[s][2] - n.y) * e / n.height + n.y) : r === "H" ? this[s][1] = (this[s][1] - n.x) * t / n.width + n.x : r === "V" ? this[s][1] = (this[s][1] - n.y) * e / n.height + n.y : r === "C" || r === "S" || r === "Q" ? (this[s][1] = (this[s][1] - n.x) * t / n.width + n.x, this[s][2] = (this[s][2] - n.y) * e / n.height + n.y, this[s][3] = (this[s][3] - n.x) * t / n.width + n.x, this[s][4] = (this[s][4] - n.y) * e / n.height + n.y, r === "C" && (this[s][5] = (this[s][5] - n.x) * t / n.width + n.x, this[s][6] = (this[s][6] - n.y) * e / n.height + n.y)) : r === "A" && (this[s][1] = this[s][1] * t / n.width, this[s][2] = this[s][2] * e / n.height, this[s][6] = (this[s][6] - n.x) * t / n.width + n.x, this[s][7] = (this[s][7] - n.y) * e / n.height + n.y);
    return this;
  }
  // Convert array to string
  toString() {
    return W0(this);
  }
}
const El = (i) => {
  const t = typeof i;
  return t === "number" ? B : t === "string" ? Z.isColor(i) ? Z : ie.test(i) ? Vr.test(i) ? Be : hi : ol.test(i) ? B : sr : ea.indexOf(i.constructor) > -1 ? i.constructor : Array.isArray(i) ? hi : t === "object" ? Ui : sr;
};
class Ce {
  constructor(t) {
    this._stepper = t || new tr("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
  }
  at(t) {
    return this._morphObj.morph(this._from, this._to, t, this._stepper, this._context);
  }
  done() {
    return this._context.map(this._stepper.done).reduce(function(e, n) {
      return e && n;
    }, !0);
  }
  from(t) {
    return t == null ? this._from : (this._from = this._set(t), this);
  }
  stepper(t) {
    return t == null ? this._stepper : (this._stepper = t, this);
  }
  to(t) {
    return t == null ? this._to : (this._to = this._set(t), this);
  }
  type(t) {
    return t == null ? this._type : (this._type = t, this);
  }
  _set(t) {
    this._type || this.type(El(t));
    let e = new this._type(t);
    return this._type === Z && (e = this._to ? e[this._to[4]]() : this._from ? e[this._from[4]]() : e), this._type === Ui && (e = this._to ? e.align(this._to) : this._from ? e.align(this._from) : e), e = e.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(e.length)).map(Object).map(function(n) {
      return n.done = !0, n;
    }), e;
  }
}
class sr {
  constructor(...t) {
    this.init(...t);
  }
  init(t) {
    return t = Array.isArray(t) ? t[0] : t, this.value = t, this;
  }
  toArray() {
    return [this.value];
  }
  valueOf() {
    return this.value;
  }
}
class Ji {
  constructor(...t) {
    this.init(...t);
  }
  init(t) {
    return Array.isArray(t) && (t = {
      scaleX: t[0],
      scaleY: t[1],
      shear: t[2],
      rotate: t[3],
      translateX: t[4],
      translateY: t[5],
      originX: t[6],
      originY: t[7]
    }), Object.assign(this, Ji.defaults, t), this;
  }
  toArray() {
    const t = this;
    return [t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY];
  }
}
Ji.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};
const Y0 = (i, t) => i[0] < t[0] ? -1 : i[0] > t[0] ? 1 : 0;
class Ui {
  constructor(...t) {
    this.init(...t);
  }
  align(t) {
    const e = this.values;
    for (let n = 0, s = e.length; n < s; ++n) {
      if (e[n + 1] === t[n + 1]) {
        if (e[n + 1] === Z && t[n + 7] !== e[n + 7]) {
          const o = t[n + 7], h = new Z(this.values.splice(n + 3, 5))[o]().toArray();
          this.values.splice(n + 3, 0, ...h);
        }
        n += e[n + 2] + 2;
        continue;
      }
      if (!t[n + 1])
        return this;
      const r = new t[n + 1]().toArray(), a = e[n + 2] + 3;
      e.splice(n, a, t[n], t[n + 1], t[n + 2], ...r), n += e[n + 2] + 2;
    }
    return this;
  }
  init(t) {
    if (this.values = [], Array.isArray(t)) {
      this.values = t.slice();
      return;
    }
    t = t || {};
    const e = [];
    for (const n in t) {
      const s = El(t[n]), r = new s(t[n]).toArray();
      e.push([n, s, r.length, ...r]);
    }
    return e.sort(Y0), this.values = e.reduce((n, s) => n.concat(s), []), this;
  }
  toArray() {
    return this.values;
  }
  valueOf() {
    const t = {}, e = this.values;
    for (; e.length; ) {
      const n = e.shift(), s = e.shift(), r = e.shift(), a = e.splice(0, r);
      t[n] = new s(a);
    }
    return t;
  }
}
const ea = [sr, Ji, Ui];
function X0(i = []) {
  ea.push(...[].concat(i));
}
function V0() {
  G(ea, {
    to(i) {
      return new Ce().type(this.constructor).from(this.toArray()).to(i);
    },
    fromArray(i) {
      return this.init(i), this;
    },
    toConsumable() {
      return this.toArray();
    },
    morph(i, t, e, n, s) {
      const r = function(a, o) {
        return n.step(a, t[o], e, s[o], s);
      };
      return this.fromArray(i.map(r));
    }
  });
}
class je extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("path", t), e);
  }
  // Get array
  array() {
    return this._array || (this._array = new Be(this.attr("d")));
  }
  // Clear array cache
  clear() {
    return delete this._array, this;
  }
  // Set height of element
  height(t) {
    return t == null ? this.bbox().height : this.size(this.bbox().width, t);
  }
  // Move by left top corner
  move(t, e) {
    return this.attr("d", this.array().move(t, e));
  }
  // Plot new path
  plot(t) {
    return t == null ? this.array() : this.clear().attr("d", typeof t == "string" ? t : this._array = new Be(t));
  }
  // Set element size to given width and height
  size(t, e) {
    const n = pi(this, t, e);
    return this.attr("d", this.array().size(n.width, n.height));
  }
  // Set width of element
  width(t) {
    return t == null ? this.bbox().width : this.size(t, this.bbox().height);
  }
  // Move by left top corner over x-axis
  x(t) {
    return t == null ? this.bbox().x : this.move(t, this.bbox().y);
  }
  // Move by left top corner over y-axis
  y(t) {
    return t == null ? this.bbox().y : this.move(this.bbox().x, t);
  }
}
je.prototype.MorphArray = Be;
U({
  Container: {
    // Create a wrapped path element
    path: et(function(i) {
      return this.put(new je()).plot(i || new Be());
    })
  }
});
W(je, "Path");
function q0() {
  return this._array || (this._array = new pe(this.attr("points")));
}
function K0() {
  return delete this._array, this;
}
function Z0(i, t) {
  return this.attr("points", this.array().move(i, t));
}
function J0(i) {
  return i == null ? this.array() : this.clear().attr("points", typeof i == "string" ? i : this._array = new pe(i));
}
function Q0(i, t) {
  const e = pi(this, i, t);
  return this.attr("points", this.array().size(e.width, e.height));
}
var Cl = {
  __proto__: null,
  array: q0,
  clear: K0,
  move: Z0,
  plot: J0,
  size: Q0
};
class Ge extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("polygon", t), e);
  }
}
U({
  Container: {
    // Create a wrapped polygon element
    polygon: et(function(i) {
      return this.put(new Ge()).plot(i || new pe());
    })
  }
});
G(Ge, Qr);
G(Ge, Cl);
W(Ge, "Polygon");
class Qi extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("polyline", t), e);
  }
}
U({
  Container: {
    // Create a wrapped polygon element
    polyline: et(function(i) {
      return this.put(new Qi()).plot(i || new pe());
    })
  }
});
G(Qi, Qr);
G(Qi, Cl);
W(Qi, "Polyline");
class Dt extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("rect", t), e);
  }
}
G(Dt, {
  rx: Zr,
  ry: Jr
});
U({
  Container: {
    // Create a rect element
    rect: et(function(i, t) {
      return this.put(new Dt()).size(i, t);
    })
  }
});
W(Dt, "Rect");
class Ms {
  constructor() {
    this._first = null, this._last = null;
  }
  // Shows us the first item in the list
  first() {
    return this._first && this._first.value;
  }
  // Shows us the last item in the list
  last() {
    return this._last && this._last.value;
  }
  push(t) {
    const e = typeof t.next < "u" ? t : {
      value: t,
      next: null,
      prev: null
    };
    return this._last ? (e.prev = this._last, this._last.next = e, this._last = e) : (this._last = e, this._first = e), e;
  }
  // Removes the item that was returned from the push
  remove(t) {
    t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._last && (this._last = t.prev), t === this._first && (this._first = t.next), t.prev = null, t.next = null;
  }
  shift() {
    const t = this._first;
    return t ? (this._first = t.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t.value) : null;
  }
}
const q = {
  nextDraw: null,
  frames: new Ms(),
  timeouts: new Ms(),
  immediates: new Ms(),
  timer: () => V.window.performance || V.window.Date,
  transforms: [],
  frame(i) {
    const t = q.frames.push({
      run: i
    });
    return q.nextDraw === null && (q.nextDraw = V.window.requestAnimationFrame(q._draw)), t;
  },
  timeout(i, t) {
    t = t || 0;
    const e = q.timer().now() + t, n = q.timeouts.push({
      run: i,
      time: e
    });
    return q.nextDraw === null && (q.nextDraw = V.window.requestAnimationFrame(q._draw)), n;
  },
  immediate(i) {
    const t = q.immediates.push(i);
    return q.nextDraw === null && (q.nextDraw = V.window.requestAnimationFrame(q._draw)), t;
  },
  cancelFrame(i) {
    i != null && q.frames.remove(i);
  },
  clearTimeout(i) {
    i != null && q.timeouts.remove(i);
  },
  cancelImmediate(i) {
    i != null && q.immediates.remove(i);
  },
  _draw(i) {
    let t = null;
    const e = q.timeouts.last();
    for (; (t = q.timeouts.shift()) && (i >= t.time ? t.run() : q.timeouts.push(t), t !== e); )
      ;
    let n = null;
    const s = q.frames.last();
    for (; n !== s && (n = q.frames.shift()); )
      n.run(i);
    let r = null;
    for (; r = q.immediates.shift(); )
      r();
    q.nextDraw = q.timeouts.first() || q.frames.first() ? V.window.requestAnimationFrame(q._draw) : null;
  }
}, t3 = function(i) {
  const t = i.start, e = i.runner.duration(), n = t + e;
  return {
    start: t,
    duration: e,
    end: n,
    runner: i.runner
  };
}, e3 = function() {
  const i = V.window;
  return (i.performance || i.Date).now();
};
let Ml = class extends Ki {
  // Construct a new timeline on the given element
  constructor(t = e3) {
    super(), this._timeSource = t, this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = !0, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, !1), this._stepImmediate = this._stepFn.bind(this, !0);
  }
  active() {
    return !!this._nextFrame;
  }
  finish() {
    return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
  }
  // Calculates the end of the timeline
  getEndTime() {
    const t = this.getLastRunnerInfo(), e = t ? t.runner.duration() : 0;
    return (t ? t.start : this._time) + e;
  }
  getEndTimeOfTimeline() {
    const t = this._runners.map((e) => e.start + e.runner.duration());
    return Math.max(0, ...t);
  }
  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }
  getRunnerInfoById(t) {
    return this._runners[this._runnerIds.indexOf(t)] || null;
  }
  pause() {
    return this._paused = !0, this._continue();
  }
  persist(t) {
    return t == null ? this._persist : (this._persist = t, this);
  }
  play() {
    return this._paused = !1, this.updateTime()._continue();
  }
  reverse(t) {
    const e = this.speed();
    if (t == null) return this.speed(-e);
    const n = Math.abs(e);
    return this.speed(t ? -n : n);
  }
  // schedules a runner on the timeline
  schedule(t, e, n) {
    if (t == null)
      return this._runners.map(t3);
    let s = 0;
    const r = this.getEndTime();
    if (e = e || 0, n == null || n === "last" || n === "after")
      s = r;
    else if (n === "absolute" || n === "start")
      s = e, e = 0;
    else if (n === "now")
      s = this._time;
    else if (n === "relative") {
      const h = this.getRunnerInfoById(t.id);
      h && (s = h.start + e, e = 0);
    } else if (n === "with-last") {
      const h = this.getLastRunnerInfo();
      s = h ? h.start : this._time;
    } else
      throw new Error('Invalid value for the "when" parameter');
    t.unschedule(), t.timeline(this);
    const a = t.persist(), o = {
      persist: a === null ? this._persist : a,
      start: s + e,
      runner: t
    };
    return this._lastRunnerId = t.id, this._runners.push(o), this._runners.sort((h, l) => h.start - l.start), this._runnerIds = this._runners.map((h) => h.runner.id), this.updateTime()._continue(), this;
  }
  seek(t) {
    return this.time(this._time + t);
  }
  source(t) {
    return t == null ? this._timeSource : (this._timeSource = t, this);
  }
  speed(t) {
    return t == null ? this._speed : (this._speed = t, this);
  }
  stop() {
    return this.time(0), this.pause();
  }
  time(t) {
    return t == null ? this._time : (this._time = t, this._continue(!0));
  }
  // Remove the runner from this timeline
  unschedule(t) {
    const e = this._runnerIds.indexOf(t.id);
    return e < 0 ? this : (this._runners.splice(e, 1), this._runnerIds.splice(e, 1), t.timeline(null), this);
  }
  // Makes sure, that after pausing the time doesn't jump
  updateTime() {
    return this.active() || (this._lastSourceTime = this._timeSource()), this;
  }
  // Checks if we are running and continues the animation
  _continue(t = !1) {
    return q.cancelFrame(this._nextFrame), this._nextFrame = null, t ? this._stepImmediate() : this._paused ? this : (this._nextFrame = q.frame(this._step), this);
  }
  _stepFn(t = !1) {
    const e = this._timeSource();
    let n = e - this._lastSourceTime;
    t && (n = 0);
    const s = this._speed * n + (this._time - this._lastStepTime);
    this._lastSourceTime = e, t || (this._time += s, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
    for (let a = this._runners.length; a--; ) {
      const o = this._runners[a], h = o.runner;
      this._time - o.start <= 0 && h.reset();
    }
    let r = !1;
    for (let a = 0, o = this._runners.length; a < o; a++) {
      const h = this._runners[a], l = h.runner;
      let c = s;
      const d = this._time - h.start;
      if (d <= 0) {
        r = !0;
        continue;
      } else d < c && (c = d);
      if (!l.active()) continue;
      l.step(c).done ? h.persist !== !0 && l.duration() - l.time() + this._time + h.persist < this._time && (l.unschedule(), --a, --o) : r = !0;
    }
    return r && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
  }
};
U({
  Element: {
    timeline: function(i) {
      return i == null ? (this._timeline = this._timeline || new Ml(), this._timeline) : (this._timeline = i, this);
    }
  }
});
class St extends Ki {
  constructor(t) {
    super(), this.id = St.id++, t = t ?? bi.duration, t = typeof t == "function" ? new Un(t) : t, this._element = null, this._timeline = null, this.done = !1, this._queue = [], this._duration = typeof t == "number" && t, this._isDeclarative = t instanceof Un, this._stepper = this._isDeclarative ? t : new tr(), this._history = {}, this.enabled = !0, this._time = 0, this._lastTime = 0, this._reseted = !0, this.transforms = new z(), this.transformId = 1, this._haveReversed = !1, this._reverse = !1, this._loopsDone = 0, this._swing = !1, this._wait = 0, this._times = 1, this._frameId = null, this._persist = this._isDeclarative ? !0 : null;
  }
  static sanitise(t, e, n) {
    let s = 1, r = !1, a = 0;
    return t = t || bi.duration, e = e || bi.delay, n = n || "last", typeof t == "object" && !(t instanceof ta) && (e = t.delay || e, n = t.when || n, r = t.swing || r, s = t.times || s, a = t.wait || a, t = t.duration || bi.duration), {
      duration: t,
      delay: e,
      swing: r,
      times: s,
      wait: a,
      when: n
    };
  }
  active(t) {
    return t == null ? this.enabled : (this.enabled = t, this);
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */
  addTransform(t, e) {
    return this.transforms.lmultiplyO(t), this;
  }
  after(t) {
    return this.on("finished", t);
  }
  animate(t, e, n) {
    const s = St.sanitise(t, e, n), r = new St(s.duration);
    return this._timeline && r.timeline(this._timeline), this._element && r.element(this._element), r.loop(s).schedule(s.delay, s.when);
  }
  clearTransform() {
    return this.transforms = new z(), this;
  }
  // TODO: Keep track of all transformations so that deletion is faster
  clearTransformsFromQueue() {
    (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) && (this._queue = this._queue.filter((t) => !t.isTransform));
  }
  delay(t) {
    return this.animate(0, t);
  }
  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }
  during(t) {
    return this.queue(null, t);
  }
  ease(t) {
    return this._stepper = new tr(t), this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */
  element(t) {
    return t == null ? this._element : (this._element = t, t._prepareRunner(), this);
  }
  finish() {
    return this.step(1 / 0);
  }
  loop(t, e, n) {
    return typeof t == "object" && (e = t.swing, n = t.wait, t = t.times), this._times = t || 1 / 0, this._swing = e || !1, this._wait = n || 0, this._times === !0 && (this._times = 1 / 0), this;
  }
  loops(t) {
    const e = this._duration + this._wait;
    if (t == null) {
      const a = Math.floor(this._time / e), h = (this._time - a * e) / this._duration;
      return Math.min(a + h, this._times);
    }
    const n = Math.floor(t), s = t % 1, r = e * n + this._duration * s;
    return this.time(r);
  }
  persist(t) {
    return t == null ? this._persist : (this._persist = t, this);
  }
  position(t) {
    const e = this._time, n = this._duration, s = this._wait, r = this._times, a = this._swing, o = this._reverse;
    let h;
    if (t == null) {
      const g = function(m) {
        const v = a * Math.floor(m % (2 * (s + n)) / (s + n)), x = v && !o || !v && o, w = Math.pow(-1, x) * (m % (s + n)) / n + x;
        return Math.max(Math.min(w, 1), 0);
      }, f = r * (s + n) - s;
      return h = e <= 0 ? Math.round(g(1e-5)) : e < f ? g(e) : Math.round(g(f - 1e-5)), h;
    }
    const l = Math.floor(this.loops()), c = a && l % 2 === 0;
    return h = l + (c && !o || o && c ? t : 1 - t), this.loops(h);
  }
  progress(t) {
    return t == null ? Math.min(1, this._time / this.duration()) : this.time(t * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */
  queue(t, e, n, s) {
    return this._queue.push({
      initialiser: t || _o,
      runner: e || _o,
      retarget: n,
      isTransform: s,
      initialised: !1,
      finished: !1
    }), this.timeline() && this.timeline()._continue(), this;
  }
  reset() {
    return this._reseted ? this : (this.time(0), this._reseted = !0, this);
  }
  reverse(t) {
    return this._reverse = t ?? !this._reverse, this;
  }
  schedule(t, e, n) {
    if (t instanceof Ml || (n = e, e = t, t = this.timeline()), !t)
      throw Error("Runner cannot be scheduled without timeline");
    return t.schedule(this, e, n), this;
  }
  step(t) {
    if (!this.enabled) return this;
    t = t ?? 16, this._time += t;
    const e = this.position(), n = this._lastPosition !== e && this._time >= 0;
    this._lastPosition = e;
    const s = this.duration(), r = this._lastTime <= 0 && this._time > 0, a = this._lastTime < s && this._time >= s;
    this._lastTime = this._time, r && this.fire("start", this);
    const o = this._isDeclarative;
    this.done = !o && !a && this._time >= s, this._reseted = !1;
    let h = !1;
    return (n || o) && (this._initialise(n), this.transforms = new z(), h = this._run(o ? t : e), this.fire("step", this)), this.done = this.done || h && o, a && this.fire("finished", this), this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */
  time(t) {
    if (t == null)
      return this._time;
    const e = t - this._time;
    return this.step(e), this;
  }
  timeline(t) {
    return typeof t > "u" ? this._timeline : (this._timeline = t, this);
  }
  unschedule() {
    const t = this.timeline();
    return t && t.unschedule(this), this;
  }
  // Run each initialise function in the runner if required
  _initialise(t) {
    if (!(!t && !this._isDeclarative))
      for (let e = 0, n = this._queue.length; e < n; ++e) {
        const s = this._queue[e], r = this._isDeclarative || !s.initialised && t;
        t = !s.finished, r && t && (s.initialiser.call(this), s.initialised = !0);
      }
  }
  // Save a morpher to the morpher list so that we can retarget it later
  _rememberMorpher(t, e) {
    if (this._history[t] = {
      morpher: e,
      caller: this._queue[this._queue.length - 1]
    }, this._isDeclarative) {
      const n = this.timeline();
      n && n.play();
    }
  }
  // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given
  _run(t) {
    let e = !0;
    for (let n = 0, s = this._queue.length; n < s; ++n) {
      const r = this._queue[n], a = r.runner.call(this, t);
      r.finished = r.finished || a === !0, e = e && r.finished;
    }
    return e;
  }
  // do nothing and return false
  _tryRetarget(t, e, n) {
    if (this._history[t]) {
      if (!this._history[t].caller.initialised) {
        const r = this._queue.indexOf(this._history[t].caller);
        return this._queue.splice(r, 1), !1;
      }
      this._history[t].caller.retarget ? this._history[t].caller.retarget.call(this, e, n) : this._history[t].morpher.to(e), this._history[t].caller.finished = !1;
      const s = this.timeline();
      return s && s.play(), !0;
    }
    return !1;
  }
}
St.id = 0;
class jn {
  constructor(t = new z(), e = -1, n = !0) {
    this.transforms = t, this.id = e, this.done = n;
  }
  clearTransformsFromQueue() {
  }
}
G([St, jn], {
  mergeWith(i) {
    return new jn(i.transforms.lmultiply(this.transforms), i.id);
  }
});
const Tl = (i, t) => i.lmultiplyO(t), bl = (i) => i.transforms;
function i3() {
  const t = this._transformationRunners.runners.map(bl).reduce(Tl, new z());
  this.transform(t), this._transformationRunners.merge(), this._transformationRunners.length() === 1 && (this._frameId = null);
}
class n3 {
  constructor() {
    this.runners = [], this.ids = [];
  }
  add(t) {
    if (this.runners.includes(t)) return;
    const e = t.id + 1;
    return this.runners.push(t), this.ids.push(e), this;
  }
  clearBefore(t) {
    const e = this.ids.indexOf(t + 1) || 1;
    return this.ids.splice(0, e, 0), this.runners.splice(0, e, new jn()).forEach((n) => n.clearTransformsFromQueue()), this;
  }
  edit(t, e) {
    const n = this.ids.indexOf(t + 1);
    return this.ids.splice(n, 1, t + 1), this.runners.splice(n, 1, e), this;
  }
  getByID(t) {
    return this.runners[this.ids.indexOf(t + 1)];
  }
  length() {
    return this.ids.length;
  }
  merge() {
    let t = null;
    for (let e = 0; e < this.runners.length; ++e) {
      const n = this.runners[e];
      if (t && n.done && t.done && (!n._timeline || !n._timeline._runnerIds.includes(n.id)) && (!t._timeline || !t._timeline._runnerIds.includes(t.id))) {
        this.remove(n.id);
        const r = n.mergeWith(t);
        this.edit(t.id, r), t = r, --e;
      } else
        t = n;
    }
    return this;
  }
  remove(t) {
    const e = this.ids.indexOf(t + 1);
    return this.ids.splice(e, 1), this.runners.splice(e, 1), this;
  }
}
U({
  Element: {
    animate(i, t, e) {
      const n = St.sanitise(i, t, e), s = this.timeline();
      return new St(n.duration).loop(n).element(this).timeline(s.play()).schedule(n.delay, n.when);
    },
    delay(i, t) {
      return this.animate(0, i, t);
    },
    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(i) {
      this._transformationRunners.clearBefore(i.id);
    },
    _currentTransform(i) {
      return this._transformationRunners.runners.filter((t) => t.id <= i.id).map(bl).reduce(Tl, new z());
    },
    _addRunner(i) {
      this._transformationRunners.add(i), q.cancelImmediate(this._frameId), this._frameId = q.immediate(i3.bind(this));
    },
    _prepareRunner() {
      this._frameId == null && (this._transformationRunners = new n3().add(new jn(new z(this))));
    }
  }
});
const s3 = (i, t) => i.filter((e) => !t.includes(e));
G(St, {
  attr(i, t) {
    return this.styleAttr("attr", i, t);
  },
  // Add animatable styles
  css(i, t) {
    return this.styleAttr("css", i, t);
  },
  styleAttr(i, t, e) {
    if (typeof t == "string")
      return this.styleAttr(i, {
        [t]: e
      });
    let n = t;
    if (this._tryRetarget(i, n)) return this;
    let s = new Ce(this._stepper).to(n), r = Object.keys(n);
    return this.queue(function() {
      s = s.from(this.element()[i](r));
    }, function(a) {
      return this.element()[i](s.at(a).valueOf()), s.done();
    }, function(a) {
      const o = Object.keys(a), h = s3(o, r);
      if (h.length) {
        const c = this.element()[i](h), d = new Ui(s.from()).valueOf();
        Object.assign(d, c), s.from(d);
      }
      const l = new Ui(s.to()).valueOf();
      Object.assign(l, a), s.to(l), r = o, n = a;
    }), this._rememberMorpher(i, s), this;
  },
  zoom(i, t) {
    if (this._tryRetarget("zoom", i, t)) return this;
    let e = new Ce(this._stepper).to(new B(i));
    return this.queue(function() {
      e = e.from(this.element().zoom());
    }, function(n) {
      return this.element().zoom(e.at(n), t), e.done();
    }, function(n, s) {
      t = s, e.to(n);
    }), this._rememberMorpher("zoom", e), this;
  },
  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(i, t, e) {
    if (t = i.relative || t, this._isDeclarative && !t && this._tryRetarget("transform", i))
      return this;
    const n = z.isMatrixLike(i);
    e = i.affine != null ? i.affine : e ?? !n;
    const s = new Ce(this._stepper).type(e ? Ji : z);
    let r, a, o, h, l;
    function c() {
      a = a || this.element(), r = r || Js(i, a), l = new z(t ? void 0 : a), a._addRunner(this), t || a._clearTransformRunnersBefore(this);
    }
    function d(f) {
      t || this.clearTransform();
      const {
        x: m,
        y: v
      } = new at(r).transform(a._currentTransform(this));
      let x = new z({
        ...i,
        origin: [m, v]
      }), w = this._isDeclarative && o ? o : l;
      if (e) {
        x = x.decompose(m, v), w = w.decompose(m, v);
        const T = x.rotate, A = w.rotate, D = [T - 360, T, T + 360], I = D.map((R) => Math.abs(R - A)), P = Math.min(...I), $ = I.indexOf(P);
        x.rotate = D[$];
      }
      t && (n || (x.rotate = i.rotate || 0), this._isDeclarative && h && (w.rotate = h)), s.from(w), s.to(x);
      const M = s.at(f);
      return h = M.rotate, o = new z(M), this.addTransform(o), a._addRunner(this), s.done();
    }
    function g(f) {
      (f.origin || "center").toString() !== (i.origin || "center").toString() && (r = Js(f, a)), i = {
        ...f,
        origin: r
      };
    }
    return this.queue(c, d, g, !0), this._isDeclarative && this._rememberMorpher("transform", s), this;
  },
  // Animatable x-axis
  x(i, t) {
    return this._queueNumber("x", i);
  },
  // Animatable y-axis
  y(i) {
    return this._queueNumber("y", i);
  },
  dx(i = 0) {
    return this._queueNumberDelta("x", i);
  },
  dy(i = 0) {
    return this._queueNumberDelta("y", i);
  },
  dmove(i, t) {
    return this.dx(i).dy(t);
  },
  _queueNumberDelta(i, t) {
    if (t = new B(t), this._tryRetarget(i, t)) return this;
    const e = new Ce(this._stepper).to(t);
    let n = null;
    return this.queue(function() {
      n = this.element()[i](), e.from(n), e.to(n + t);
    }, function(s) {
      return this.element()[i](e.at(s)), e.done();
    }, function(s) {
      e.to(n + new B(s));
    }), this._rememberMorpher(i, e), this;
  },
  _queueObject(i, t) {
    if (this._tryRetarget(i, t)) return this;
    const e = new Ce(this._stepper).to(t);
    return this.queue(function() {
      e.from(this.element()[i]());
    }, function(n) {
      return this.element()[i](e.at(n)), e.done();
    }), this._rememberMorpher(i, e), this;
  },
  _queueNumber(i, t) {
    return this._queueObject(i, new B(t));
  },
  // Animatable center x-axis
  cx(i) {
    return this._queueNumber("cx", i);
  },
  // Animatable center y-axis
  cy(i) {
    return this._queueNumber("cy", i);
  },
  // Add animatable move
  move(i, t) {
    return this.x(i).y(t);
  },
  // Add animatable center
  center(i, t) {
    return this.cx(i).cy(t);
  },
  // Add animatable size
  size(i, t) {
    let e;
    return (!i || !t) && (e = this._element.bbox()), i || (i = e.width / e.height * t), t || (t = e.height / e.width * i), this.width(i).height(t);
  },
  // Add animatable width
  width(i) {
    return this._queueNumber("width", i);
  },
  // Add animatable height
  height(i) {
    return this._queueNumber("height", i);
  },
  // Add animatable plot
  plot(i, t, e, n) {
    if (arguments.length === 4)
      return this.plot([i, t, e, n]);
    if (this._tryRetarget("plot", i)) return this;
    const s = new Ce(this._stepper).type(this._element.MorphArray).to(i);
    return this.queue(function() {
      s.from(this._element.array());
    }, function(r) {
      return this._element.plot(s.at(r)), s.done();
    }), this._rememberMorpher("plot", s), this;
  },
  // Add leading method
  leading(i) {
    return this._queueNumber("leading", i);
  },
  // Add animatable viewbox
  viewbox(i, t, e, n) {
    return this._queueObject("viewbox", new mt(i, t, e, n));
  },
  update(i) {
    return typeof i != "object" ? this.update({
      offset: arguments[0],
      color: arguments[1],
      opacity: arguments[2]
    }) : (i.opacity != null && this.attr("stop-opacity", i.opacity), i.color != null && this.attr("stop-color", i.color), i.offset != null && this.attr("offset", i.offset), this);
  }
});
G(St, {
  rx: Zr,
  ry: Jr,
  from: xl,
  to: wl
});
W(St, "Runner");
class ia extends Nt {
  constructor(t, e = t) {
    super(it("svg", t), e), this.namespace();
  }
  // Creates and returns defs element
  defs() {
    return this.isRoot() ? zt(this.node.querySelector("defs")) || this.put(new Kr()) : this.root().defs();
  }
  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof V.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
  }
  // Add namespaces
  namespace() {
    return this.isRoot() ? this.attr({
      xmlns: Wr,
      version: "1.1"
    }).attr("xmlns:xlink", qi, fn).attr("xmlns:svgjs", C1, fn) : this.root().namespace();
  }
  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr("xmlns:xlink", null, fn).attr("xmlns:svgjs", null, fn);
  }
  // Check if this is a root svg
  // If not, call root() from this element
  root() {
    return this.isRoot() ? this : super.root();
  }
}
U({
  Container: {
    // Create nested svg document
    nested: et(function() {
      return this.put(new ia());
    })
  }
});
W(ia, "Svg", !0);
let na = class extends Nt {
  // Initialize node
  constructor(t, e = t) {
    super(it("symbol", t), e);
  }
};
U({
  Container: {
    symbol: et(function() {
      return this.put(new na());
    })
  }
});
W(na, "Symbol");
function r3(i) {
  return this._build === !1 && this.clear(), this.node.appendChild(V.document.createTextNode(i)), this;
}
function a3() {
  return this.node.getComputedTextLength();
}
function o3(i, t = this.bbox()) {
  return i == null ? t.x : this.attr("x", this.attr("x") + i - t.x);
}
function h3(i, t = this.bbox()) {
  return i == null ? t.y : this.attr("y", this.attr("y") + i - t.y);
}
function l3(i, t, e = this.bbox()) {
  return this.x(i, e).y(t, e);
}
function c3(i, t = this.bbox()) {
  return i == null ? t.cx : this.attr("x", this.attr("x") + i - t.cx);
}
function d3(i, t = this.bbox()) {
  return i == null ? t.cy : this.attr("y", this.attr("y") + i - t.cy);
}
function u3(i, t, e = this.bbox()) {
  return this.cx(i, e).cy(t, e);
}
function f3(i) {
  return this.attr("x", i);
}
function p3(i) {
  return this.attr("y", i);
}
function m3(i, t) {
  return this.ax(i).ay(t);
}
function g3(i) {
  return this._build = !!i, this;
}
var Nl = {
  __proto__: null,
  plain: r3,
  length: a3,
  x: o3,
  y: h3,
  move: l3,
  cx: c3,
  cy: d3,
  center: u3,
  ax: f3,
  ay: p3,
  amove: m3,
  build: g3
};
class ct extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("text", t), e), this.dom.leading = new B(1.3), this._rebuild = !0, this._build = !1;
  }
  // Set / get leading
  leading(t) {
    return t == null ? this.dom.leading : (this.dom.leading = new B(t), this.rebuild());
  }
  // Rebuild appearance type
  rebuild(t) {
    if (typeof t == "boolean" && (this._rebuild = t), this._rebuild) {
      const e = this;
      let n = 0;
      const s = this.dom.leading;
      this.each(function(r) {
        const a = V.window.getComputedStyle(this.node).getPropertyValue("font-size"), o = s * new B(a);
        this.dom.newLined && (this.attr("x", e.attr("x")), this.text() === `
` ? n += o : (this.attr("dy", r ? o + n : 0), n = 0));
      }), this.fire("rebuild");
    }
    return this;
  }
  // overwrite method from parent to set data properly
  setData(t) {
    return this.dom = t, this.dom.leading = new B(t.leading || 1.3), this;
  }
  // Set the text content
  text(t) {
    if (t === void 0) {
      const e = this.node.childNodes;
      let n = 0;
      t = "";
      for (let s = 0, r = e.length; s < r; ++s) {
        if (e[s].nodeName === "textPath") {
          s === 0 && (n = 1);
          continue;
        }
        s !== n && e[s].nodeType !== 3 && zt(e[s]).dom.newLined === !0 && (t += `
`), t += e[s].textContent;
      }
      return t;
    }
    if (this.clear().build(!0), typeof t == "function")
      t.call(this, this);
    else {
      t = (t + "").split(`
`);
      for (let e = 0, n = t.length; e < n; e++)
        this.newLine(t[e]);
    }
    return this.build(!1).rebuild();
  }
}
G(ct, Nl);
U({
  Container: {
    // Create text element
    text: et(function(i = "") {
      return this.put(new ct()).text(i);
    }),
    // Create plain text element
    plain: et(function(i = "") {
      return this.put(new ct()).plain(i);
    })
  }
});
W(ct, "Text");
class Jn extends Ot {
  // Initialize node
  constructor(t, e = t) {
    super(it("tspan", t), e), this._build = !1;
  }
  // Shortcut dx
  dx(t) {
    return this.attr("dx", t);
  }
  // Shortcut dy
  dy(t) {
    return this.attr("dy", t);
  }
  // Create new line
  newLine() {
    this.dom.newLined = !0;
    const t = this.parent();
    if (!(t instanceof ct))
      return this;
    const e = t.index(this), n = V.window.getComputedStyle(this.node).getPropertyValue("font-size"), s = t.dom.leading * new B(n);
    return this.dy(e ? s : 0).attr("x", t.x());
  }
  // Set text content
  text(t) {
    return t == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof t == "function" ? (this.clear().build(!0), t.call(this, this), this.build(!1)) : this.plain(t), this);
  }
}
G(Jn, Nl);
U({
  Tspan: {
    tspan: et(function(i = "") {
      const t = new Jn();
      return this._build || this.clear(), this.put(t).text(i);
    })
  },
  Text: {
    newLine: function(i = "") {
      return this.tspan(i).newLine();
    }
  }
});
W(Jn, "Tspan");
class gi extends Ot {
  constructor(t, e = t) {
    super(it("circle", t), e);
  }
  radius(t) {
    return this.attr("r", t);
  }
  // Radius x value
  rx(t) {
    return this.attr("r", t);
  }
  // Alias radius x value
  ry(t) {
    return this.rx(t);
  }
  size(t) {
    return this.radius(new B(t).divide(2));
  }
}
G(gi, {
  x: fl,
  y: pl,
  cx: ml,
  cy: gl,
  width: vl,
  height: yl
});
U({
  Container: {
    // Create circle element
    circle: et(function(i = 0) {
      return this.put(new gi()).size(i).move(0, 0);
    })
  }
});
W(gi, "Circle");
class rr extends Nt {
  constructor(t, e = t) {
    super(it("clipPath", t), e);
  }
  // Unclip all clipped elements and remove itself
  remove() {
    return this.targets().forEach(function(t) {
      t.unclip();
    }), super.remove();
  }
  targets() {
    return mi("svg [clip-path*=" + this.id() + "]");
  }
}
U({
  Container: {
    // Create clipping element
    clip: et(function() {
      return this.defs().put(new rr());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference("clip-path");
    },
    clipWith(i) {
      const t = i instanceof rr ? i : this.parent().clip().add(i);
      return this.attr("clip-path", "url(#" + t.id() + ")");
    },
    // Unclip element
    unclip() {
      return this.attr("clip-path", null);
    }
  }
});
W(rr, "ClipPath");
class sa extends Zt {
  constructor(t, e = t) {
    super(it("foreignObject", t), e);
  }
}
U({
  Container: {
    foreignObject: et(function(i, t) {
      return this.put(new sa()).size(i, t);
    })
  }
});
W(sa, "ForeignObject");
function v3(i, t) {
  return this.children().forEach((e, n) => {
    let s;
    try {
      s = e.bbox();
    } catch {
      return;
    }
    const r = new z(e), a = r.translate(i, t).transform(r.inverse()), o = new at(s.x, s.y).transform(a);
    e.move(o.x, o.y);
  }), this;
}
function y3(i) {
  return this.dmove(i, 0);
}
function _3(i) {
  return this.dmove(0, i);
}
function x3(i, t = this.bbox()) {
  return i == null ? t.height : this.size(t.width, i, t);
}
function w3(i = 0, t = 0, e = this.bbox()) {
  const n = i - e.x, s = t - e.y;
  return this.dmove(n, s);
}
function E3(i, t, e = this.bbox()) {
  const n = pi(this, i, t, e), s = n.width / e.width, r = n.height / e.height;
  return this.children().forEach((a, o) => {
    const h = new at(e).transform(new z(a).inverse());
    a.scale(s, r, h.x, h.y);
  }), this;
}
function C3(i, t = this.bbox()) {
  return i == null ? t.width : this.size(i, t.height, t);
}
function M3(i, t = this.bbox()) {
  return i == null ? t.x : this.move(i, t.y, t);
}
function T3(i, t = this.bbox()) {
  return i == null ? t.y : this.move(t.x, i, t);
}
var Sl = {
  __proto__: null,
  dmove: v3,
  dx: y3,
  dy: _3,
  height: x3,
  move: w3,
  size: E3,
  width: C3,
  x: M3,
  y: T3
};
let ft = class extends Nt {
  constructor(t, e = t) {
    super(it("g", t), e);
  }
};
G(ft, Sl);
U({
  Container: {
    // Create a group element
    group: et(function() {
      return this.put(new ft());
    })
  }
});
W(ft, "G");
let ji = class extends Nt {
  constructor(t, e = t) {
    super(it("a", t), e);
  }
  // Link target attribute
  target(t) {
    return this.attr("target", t);
  }
  // Link url
  to(t) {
    return this.attr("href", t, qi);
  }
};
G(ji, Sl);
U({
  Container: {
    // Create a hyperlink element
    link: et(function(i) {
      return this.put(new ji()).to(i);
    })
  },
  Element: {
    unlink() {
      const i = this.linker();
      if (!i) return this;
      const t = i.parent();
      if (!t)
        return this.remove();
      const e = t.index(i);
      return t.add(this, e), i.remove(), this;
    },
    linkTo(i) {
      let t = this.linker();
      return t || (t = new ji(), this.wrap(t)), typeof i == "function" ? i.call(t, t) : t.to(i), this;
    },
    linker() {
      const i = this.parent();
      return i && i.node.nodeName.toLowerCase() === "a" ? i : null;
    }
  }
});
W(ji, "A");
class ar extends Nt {
  // Initialize node
  constructor(t, e = t) {
    super(it("mask", t), e);
  }
  // Unmask all masked elements and remove itself
  remove() {
    return this.targets().forEach(function(t) {
      t.unmask();
    }), super.remove();
  }
  targets() {
    return mi("svg [mask*=" + this.id() + "]");
  }
}
U({
  Container: {
    mask: et(function() {
      return this.defs().put(new ar());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference("mask");
    },
    maskWith(i) {
      const t = i instanceof ar ? i : this.parent().mask().add(i);
      return this.attr("mask", "url(#" + t.id() + ")");
    },
    // Unmask element
    unmask() {
      return this.attr("mask", null);
    }
  }
});
W(ar, "Mask");
class Ll extends Zt {
  constructor(t, e = t) {
    super(it("stop", t), e);
  }
  // add color stops
  update(t) {
    return (typeof t == "number" || t instanceof B) && (t = {
      offset: arguments[0],
      color: arguments[1],
      opacity: arguments[2]
    }), t.opacity != null && this.attr("stop-opacity", t.opacity), t.color != null && this.attr("stop-color", t.color), t.offset != null && this.attr("offset", new B(t.offset)), this;
  }
}
U({
  Gradient: {
    // Add a color stop
    stop: function(i, t, e) {
      return this.put(new Ll()).update(i, t, e);
    }
  }
});
W(Ll, "Stop");
function b3(i, t) {
  if (!i) return "";
  if (!t) return i;
  let e = i + "{";
  for (const n in t)
    e += w1(n) + ":" + t[n] + ";";
  return e += "}", e;
}
let or = class extends Zt {
  constructor(t, e = t) {
    super(it("style", t), e);
  }
  addText(t = "") {
    return this.node.textContent += t, this;
  }
  font(t, e, n = {}) {
    return this.rule("@font-face", {
      fontFamily: t,
      src: e,
      ...n
    });
  }
  rule(t, e) {
    return this.addText(b3(t, e));
  }
};
U("Dom", {
  style(i, t) {
    return this.put(new or()).rule(i, t);
  },
  fontface(i, t, e) {
    return this.put(new or()).font(i, t, e);
  }
});
W(or, "Style");
class ra extends ct {
  // Initialize node
  constructor(t, e = t) {
    super(it("textPath", t), e);
  }
  // return the array of the path track element
  array() {
    const t = this.track();
    return t ? t.array() : null;
  }
  // Plot path if any
  plot(t) {
    const e = this.track();
    let n = null;
    return e && (n = e.plot(t)), t == null ? n : this;
  }
  // Get the path element
  track() {
    return this.reference("href");
  }
}
U({
  Container: {
    textPath: et(function(i, t) {
      return i instanceof ct || (i = this.text(i)), i.path(t);
    })
  },
  Text: {
    // Create path for text to run on
    path: et(function(i, t = !0) {
      const e = new ra();
      i instanceof je || (i = this.defs().path(i)), e.attr("href", "#" + i, qi);
      let n;
      if (t)
        for (; n = this.node.firstChild; )
          e.node.appendChild(n);
      return this.put(e);
    }),
    // Get the textPath children
    textPath() {
      return this.findOne("textPath");
    }
  },
  Path: {
    // creates a textPath from this path
    text: et(function(i) {
      return i instanceof ct || (i = new ct().addTo(this.parent()).text(i)), i.path(this);
    }),
    targets() {
      return mi("svg textPath").filter((i) => (i.attr("href") || "").includes(this.id()));
    }
  }
});
ra.prototype.MorphArray = Be;
W(ra, "TextPath");
class Al extends Ot {
  constructor(t, e = t) {
    super(it("use", t), e);
  }
  // Use element as a reference
  use(t, e) {
    return this.attr("href", (e || "") + "#" + t, qi);
  }
}
U({
  Container: {
    // Create a use element
    use: et(function(i, t) {
      return this.put(new Al()).use(i, t);
    })
  }
});
W(Al, "Use");
const ht = vt;
G([ia, na, Ue, $i, Hn], bt("viewbox"));
G([Hi, Qi, Ge, je], bt("marker"));
G(ct, bt("Text"));
G(je, bt("Path"));
G(Kr, bt("Defs"));
G([ct, Jn], bt("Tspan"));
G([Dt, Zn, Zi, St], bt("radius"));
G(Ki, bt("EventTarget"));
G(fe, bt("Dom"));
G(Zt, bt("Element"));
G(Ot, bt("Shape"));
G([Nt, _l], bt("Container"));
G(Zi, bt("Gradient"));
G(St, bt("Runner"));
Pe.extend(_1());
X0([B, Z, mt, z, hi, pe, Be, at]);
V0();
const Dl = {
  // 节点内边距
  paddingX: 15,
  paddingY: 5,
  // 图片显示的最大宽度
  imgMaxWidth: 200,
  // 图片显示的最大高度
  imgMaxHeight: 100,
  // icon的大小
  iconSize: 20,
  // 连线的粗细
  lineWidth: 1,
  // 连线的颜色
  lineColor: "#549688",
  // 连线样式
  lineDasharray: "none",
  // 连线是否开启流动效果，仅在虚线时有效（需要注册LineFlow插件）
  lineFlow: !1,
  // 流动效果一个周期的时间，单位：s
  lineFlowDuration: 1,
  // 流动方向是否是从父节点到子节点
  lineFlowForward: !0,
  // 连线风格
  lineStyle: "straight",
  // 曲线（curve）【仅支持logicalStructure、mindMap、verticalTimeline三种结构】、直线（straight）、直连（direct）【仅支持logicalStructure、mindMap、organizationStructure、verticalTimeline四种结构】
  // 曲线连接时，根节点和其他节点的连接线样式保持统一，默认根节点为 ( 型，其他节点为 { 型，设为true后，都为 { 型。仅支持logicalStructure、mindMap两种结构
  rootLineKeepSameInCurve: !0,
  // 曲线连接时，根节点和其他节点的连线起始位置保持统一，默认根节点的连线起始位置在节点中心，其他节点在节点右侧（或左侧），如果该配置设为true，那么根节点的连线起始位置也会在节点右侧（或左侧）
  rootLineStartPositionKeepSameInCurve: !1,
  // 直线连接(straight)时，连线的圆角大小，设置为0代表没有圆角，仅支持logicalStructure、mindMap、verticalTimeline三种结构
  lineRadius: 5,
  // 连线是否显示标记，目前只支持箭头
  showLineMarker: !1,
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: "#549688",
  // 概要曲线距节点的距离
  generalizationLineMargin: 0,
  // 概要节点距节点的距离
  generalizationNodeMargin: 20,
  // 关联线默认状态的粗细
  associativeLineWidth: 2,
  // 关联线默认状态的颜色
  associativeLineColor: "rgb(51, 51, 51)",
  // 关联线激活状态的粗细
  associativeLineActiveWidth: 8,
  // 关联线激活状态的颜色
  associativeLineActiveColor: "rgba(2, 167, 240, 1)",
  // 关联线样式
  associativeLineDasharray: "6,4",
  // 关联线文字颜色
  associativeLineTextColor: "rgb(51, 51, 51)",
  // 关联线文字大小
  associativeLineTextFontSize: 14,
  // 关联线文字行高
  associativeLineTextLineHeight: 1.2,
  // 关联线文字字体
  associativeLineTextFontFamily: "微软雅黑, Microsoft YaHei",
  // 背景颜色
  backgroundColor: "#fafafa",
  // 背景图片
  backgroundImage: "none",
  // 背景重复
  backgroundRepeat: "no-repeat",
  // 设置背景图像的起始位置
  backgroundPosition: "center center",
  // 设置背景图片大小
  backgroundSize: "cover",
  // 节点使用只有底边横线的样式，仅支持logicalStructure、mindMap、catalogOrganization、organizationStructure四种结构
  nodeUseLineStyle: !1,
  // 根节点样式
  root: {
    shape: "rectangle",
    fillColor: "#549688",
    fontFamily: "微软雅黑, Microsoft YaHei",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    borderColor: "transparent",
    borderWidth: 0,
    borderDasharray: "none",
    borderRadius: 5,
    textDecoration: "none",
    gradientStyle: !1,
    startColor: "#549688",
    endColor: "#fff",
    startDir: [0, 0],
    endDir: [1, 0],
    // 连线标记的位置，start（头部）、end（尾部），该配置在showLineMarker配置为true时生效
    lineMarkerDir: "end",
    // 节点鼠标hover和激活时显示的矩形边框的颜色，主题里不设置，默认会取hoverRectColor实例化选项的值
    hoverRectColor: "",
    // 点鼠标hover和激活时显示的矩形边框的圆角大小
    hoverRectRadius: 5,
    // 文本对齐
    textAlign: "left",
    // right、center、justify、left
    // 图片放置位置，相对于整个文本内容
    imgPlacement: "top",
    // left、right、bottom、top
    // 标签放置位置
    tagPlacement: "right"
    // right（文字右侧）、bottom（文本内容下方）
    // 下列样式也支持给节点设置，用于覆盖最外层的设置
    // paddingX,
    // paddingY,
    // lineWidth,
    // lineColor,
    // lineDasharray,
    // lineFlow,
    // lineFlowDuration,
    // lineFlowForward
    // 关联线的所有样式
  },
  // 二级节点样式
  second: {
    shape: "rectangle",
    marginX: 100,
    marginY: 40,
    fillColor: "#fff",
    fontFamily: "微软雅黑, Microsoft YaHei",
    color: "#565656",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    borderColor: "#549688",
    borderWidth: 1,
    borderDasharray: "none",
    borderRadius: 5,
    textDecoration: "none",
    gradientStyle: !1,
    startColor: "#549688",
    endColor: "#fff",
    startDir: [0, 0],
    endDir: [1, 0],
    lineMarkerDir: "end",
    hoverRectColor: "",
    hoverRectRadius: 5,
    textAlign: "left",
    imgPlacement: "top",
    tagPlacement: "right"
  },
  // 三级及以下节点样式
  node: {
    shape: "rectangle",
    marginX: 50,
    marginY: 0,
    fillColor: "transparent",
    fontFamily: "微软雅黑, Microsoft YaHei",
    color: "#6a6d6c",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    borderDasharray: "none",
    textDecoration: "none",
    gradientStyle: !1,
    startColor: "#549688",
    endColor: "#fff",
    startDir: [0, 0],
    endDir: [1, 0],
    lineMarkerDir: "end",
    hoverRectColor: "",
    hoverRectRadius: 5,
    textAlign: "left",
    imgPlacement: "top",
    tagPlacement: "right"
  },
  // 概要节点样式
  generalization: {
    shape: "rectangle",
    marginX: 100,
    marginY: 40,
    fillColor: "#fff",
    fontFamily: "微软雅黑, Microsoft YaHei",
    color: "#565656",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    borderColor: "#549688",
    borderWidth: 1,
    borderDasharray: "none",
    borderRadius: 5,
    textDecoration: "none",
    gradientStyle: !1,
    startColor: "#549688",
    endColor: "#fff",
    startDir: [0, 0],
    endDir: [1, 0],
    hoverRectColor: "",
    hoverRectRadius: 5,
    textAlign: "left",
    imgPlacement: "top",
    tagPlacement: "right"
  }
}, N3 = [
  "lineWidth",
  "lineColor",
  "lineDasharray",
  "lineStyle",
  "generalizationLineWidth",
  "generalizationLineColor",
  "associativeLineWidth",
  "associativeLineColor",
  "associativeLineActiveWidth",
  "associativeLineActiveColor",
  "associativeLineTextColor",
  "associativeLineTextFontSize",
  "associativeLineTextLineHeight",
  "associativeLineTextFontFamily",
  "backgroundColor",
  "backgroundImage",
  "backgroundRepeat",
  "backgroundPosition",
  "backgroundSize",
  "rootLineKeepSameInCurve",
  "rootLineStartPositionKeepSameInCurve",
  "showLineMarker",
  "lineRadius",
  "hoverRectColor",
  "hoverRectRadius",
  "lineFlow",
  "lineFlowDuration",
  "lineFlowForward",
  "textAlign"
], S3 = (i) => {
  let t = Object.keys(i);
  for (let e = 0; e < t.length; e++)
    if (!N3.find((n) => n === t[e]))
      return !1;
  return !0;
}, hr = [
  "lineColor",
  "lineDasharray",
  "lineWidth",
  "lineMarkerDir",
  "lineFlow",
  "lineFlowDuration",
  "lineFlowForward"
], K = (i, t, e, n, s, r = 0, a = 0, o = []) => {
  let h = !1;
  if (e && (h = e(i, t, s, r, a, o)), !h && i.children && i.children.length > 0) {
    let l = r + 1;
    i.children.forEach((c, d) => {
      K(
        c,
        i,
        e,
        n,
        !1,
        l,
        d,
        [...o, i]
      );
    });
  }
  n && n(i, t, s, r, a, o);
}, L3 = (i, t) => {
  let e = [i], n = !1;
  for (t(i, null) === "stop" && (n = !0); e.length && !n; ) {
    let s = e.shift();
    s.children && s.children.length && s.children.forEach((r) => {
      n || (e.push(r), t(r, s) === "stop" && (n = !0));
    });
  }
}, A3 = (i, t, e, n) => {
  let s = i / t, r = [];
  if (e && n)
    if (i <= e && t <= n)
      r = [i, t];
    else {
      let a = e / n;
      s > a ? r = [e, e / s] : r = [s * n, n];
    }
  else e ? i <= e ? r = [i, t] : r = [e, e / s] : n && (t <= n ? r = [i, t] : r = [s * n, n]);
  return r;
}, D3 = (i) => {
  i = i.replace(/<br>/gim, `
`);
  let t = document.createElement("div");
  return t.innerHTML = i, i = t.textContent, i;
}, $t = (i) => {
  try {
    return JSON.parse(JSON.stringify(i));
  } catch {
    return null;
  }
}, Ol = (i, t, e = !1) => (i.data = $t(t.data), e && (i.data.isActive = !1, Gn(i.data).forEach((s) => {
  s.isActive = !1;
})), i.children = [], t.children && t.children.length > 0 && t.children.forEach((n, s) => {
  i.children[s] = Ol({}, n, e);
}), Object.keys(t).forEach((n) => {
  !["data", "children"].includes(n) && !/^_/.test(n) && (i[n] = t[n]);
}), i), Gi = (i, t, e = !1, n = !0) => {
  const s = t.nodeData ? t.nodeData : t;
  return i.data = $t(s.data), n ? delete i.data.uid : i.data.uid || (i.data.uid = qt()), e && (i.data.isActive = !1), i.children = [], t.children && t.children.length > 0 ? t.children.forEach((r, a) => {
    i.children[a] = Gi({}, r, e, n);
  }) : t.nodeData && t.nodeData.children && t.nodeData.children.length > 0 && t.nodeData.children.forEach((r, a) => {
    i.children[a] = Gi({}, r, e, n);
  }), Object.keys(s).forEach((r) => {
    !["data", "children"].includes(r) && !/^_/.test(r) && (i[r] = s[r]);
  }), i;
}, Rl = (i, t = 300, e) => {
  let n = null;
  return (...s) => {
    n || (n = setTimeout(() => {
      i.call(e, ...s), n = null;
    }, t));
  };
}, O3 = (i, t = 300, e) => {
  let n = null;
  return (...s) => {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, i.apply(e, s);
    }, t);
  };
}, We = (i, t = () => {
}) => {
  let e = 0, n = i.length;
  if (n <= 0)
    return t();
  let s = () => {
    if (e >= n) {
      t();
      return;
    }
    i[e](), setTimeout(() => {
      e++, s();
    }, 0);
  };
  s();
}, ii = (i) => i * (Math.PI / 180), R3 = (i) => i.replace(/([a-z])([A-Z])/g, (...t) => t[1] + "-" + t[2].toLowerCase()), I3 = function(i, t) {
  let e = !1, n = null, s = () => {
    e = !1, t ? i.call(t) : i();
  };
  if (typeof MutationObserver < "u") {
    let r = 1, a = new MutationObserver(s), o = document.createTextNode(r);
    a.observe(o, {
      characterData: !0
      // 设为 true 表示监视指定目标节点或子节点树中节点所包含的字符数据的变化
    }), n = function() {
      r = (r + 1) % 2, o.data = r;
    };
  } else
    n = setTimeout;
  return function() {
    e || (e = !0, n(s, 0));
  };
}, z3 = (i, t, e = 0, n = 0) => {
  let s = i.elRect, { scaleX: r, scaleY: a, translateX: o, translateY: h } = i.draw.transform(), { left: l, top: c, width: d, height: g } = t, f = (l + d) * r + o, m = (c + g) * a + h;
  l = l * r + o, c = c * a + h;
  let v = 0, x = 0;
  return l < 0 + e && (v = -l + e), f > s.width - e && (v = -(f - s.width) - e), c < 0 + n && (x = -c + n), m > s.height - n && (x = -(m - s.height) - n), {
    isOuter: v !== 0 || x !== 0,
    offsetLeft: v,
    offsetTop: x
  };
};
let pn = null;
const Il = (i) => (pn || (pn = document.createElement("div")), pn.innerHTML = i, pn.textContent), F3 = (i) => new Promise((t) => {
  let e = new Image();
  e.src = i, e.onload = () => {
    t({
      width: e.width,
      height: e.height
    });
  }, e.onerror = () => {
    t({
      width: 0,
      height: 0
    });
  };
}), qt = () => y1(), k3 = (i) => new Promise((t, e) => {
  let n = new FileReader();
  n.readAsDataURL(i), n.onload = async (s) => {
    let r = s.target.result, a = await F3(r);
    t({
      url: r,
      size: a
    });
  }, n.onerror = (s) => {
    e(s);
  };
}), Te = (i) => Object.prototype.toString.call(i).slice(8, -1), me = (i) => i == null || i === "";
let mn = null;
const P3 = (i) => {
  mn || (mn = document.createElement("div")), mn.innerHTML = i;
  for (let t = mn.childNodes, e = t.length; e--; )
    if (t[e].nodeType == 1) return !0;
  return !1;
}, zl = (i) => (i = String(i).replace(/\s+/g, ""), ["#fff", "#ffffff", "#FFF", "#FFFFFF", "rgb(255,255,255)"].includes(
  i
) || /rgba\(255,255,255,[^)]+\)/.test(i)), B3 = (i) => (i = String(i).replace(/\s+/g, ""), ["", "transparent"].includes(i) || /rgba\(\d+,\d+,\d+,0\)/.test(i)), $3 = (i) => {
  let { lineColor: t, root: e, second: n, node: s } = i, r = [
    t,
    e.fillColor,
    e.color,
    n.fillColor,
    n.color,
    s.fillColor,
    s.color,
    e.borderColor,
    n.borderColor,
    s.borderColor
  ];
  for (let a = 0; a < r.length; a++) {
    let o = r[a];
    if (!B3(o) && !zl(o))
      return o;
  }
};
let ne = null;
const H3 = (i) => {
  ne || (ne = document.createElement("div")), ne.innerHTML = i;
  const t = ne.querySelectorAll(".ql-formula");
  Array.from(t).forEach((s) => {
    const r = document.createTextNode("$smmformula$");
    s.parentNode.replaceChild(r, s);
  });
  const e = ne.childNodes;
  let n = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    r.nodeType === 1 ? n.push(r.textContent) : r.nodeType === 3 && n.push(r.nodeValue);
  }
  if (i = n.map((s) => `<p><span>${Qn(s)}</span></p>`).join(""), t.length > 0) {
    i = i.replace(/\$smmformula\$/g, '<span class="smmformula"></span>'), ne.innerHTML = i;
    const s = ne.querySelectorAll(".smmformula");
    Array.from(s).forEach((r, a) => {
      r.parentNode.replaceChild(t[a], r);
    }), i = ne.innerHTML;
  }
  return i;
}, U3 = (i, t) => {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const s = i[n], r = t[n];
    if (Te(s) !== Te(r)) {
      e[n] = r;
      return;
    }
    if (Te(s) === "Object") {
      if (JSON.stringify(s) !== JSON.stringify(r)) {
        e[n] = r;
        return;
      }
    } else if (s !== r) {
      e[n] = r;
      return;
    }
  }), e;
}, lr = (i) => /^_/.test(i) ? !1 : !kn.includes(i), j3 = (i) => {
  const t = [...hr], e = Object.keys(i);
  for (let n = 0; n < e.length; n++)
    if (!t.includes(e[n]))
      return !1;
  return !0;
}, G3 = (i) => i.reduce((t, e) => {
  const n = t.find((s) => s.type === e.type);
  return n ? e.list.forEach((s) => {
    const r = n.list.find((a) => a.name === s.name);
    r ? r.icon = s.icon : n.list.push(s);
  }) : t.push({ ...e }), t;
}, []), wo = (i) => {
  let t = [];
  return i.forEach((e) => {
    i.find((n) => n.uid !== e.uid && n.isAncestor(e)) || t.push(e);
  }), t;
}, W3 = (i) => {
  const t = {}, e = {};
  i.forEach((s) => {
    const r = s.parent;
    if (r) {
      const a = r.uid;
      e[a] = r;
      const o = s.getIndexInBrothers(), h = {
        node: s,
        index: o
      };
      t[a] ? t[a].find((l) => l.index === h.index) || t[a].push(h) : t[a] = [h];
    }
  });
  const n = [];
  return Object.keys(t).forEach((s) => {
    if (t[s].length > 1) {
      const r = t[s].map((a) => a.index).sort((a, o) => a - o);
      n.push({
        node: e[s],
        range: [r[0], r[r.length - 1]]
      });
    } else
      n.push({
        node: t[s][0].node
      });
  }), n;
}, Y3 = (i) => {
  let t = window.getSelection(), e = document.createRange();
  e.selectNodeContents(i), e.collapse(), t.removeAllRanges(), t.addRange(e);
}, X3 = (i) => {
  let t = window.getSelection(), e = document.createRange();
  e.selectNodeContents(i), t.removeAllRanges(), t.addRange(e);
}, gn = (i, t = {}) => {
  t = { ...t }, t && t.richText && t.resetRichText && delete t.resetRichText;
  const n = (s) => {
    s.forEach((r) => {
      r.data = {
        ...r.data,
        ...t
      }, r.children && r.children.length > 0 && n(r.children);
    });
  };
  return n(i), i;
}, Ni = (i, t = !1, e = null, n = !1) => {
  const s = (r) => {
    r.forEach((a) => {
      a.data || (a.data = {}), (t || me(a.data.uid)) && (a.data.uid = qt()), n && Gn(a.data).forEach((h) => {
        (t || me(h.uid)) && (h.uid = qt());
      }), e && e(a), a.children && a.children.length > 0 && s(a.children);
    });
  };
  return s(i), i;
}, It = (i) => i ? Array.isArray(i) ? i : [i] : [], Si = (i) => i.parent ? i.parent.nodeData.children.findIndex((t) => t.data.uid === i.uid) : 0, ut = (i, t) => t.findIndex((e) => e.uid === i.uid), Fl = (i) => {
  let t = 0;
  for (let s = 0; s < i.length; s++)
    t = i.charCodeAt(s) + ((t << 5) - t);
  return "hsla(" + new jr(t).genrand_int32() % 360 + ", 50%, 50%, 1)";
}, Qn = (i) => ([
  ["&", "&amp;"],
  ["<", "&lt;"],
  [">", "&gt;"]
].forEach((t) => {
  i = i.replace(new RegExp(t[0], "g"), t[1]);
}), i), cr = (i, t) => {
  const e = Te(i);
  if (e !== Te(t)) return !1;
  if (e === "Object") {
    const n = Object.keys(i), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (let r = 0; r < n.length; r++) {
      const a = n[r];
      if (!s.includes(a) || !cr(i[a], t[a]))
        return !1;
    }
    return !0;
  } else if (e === "Array") {
    if (i.length !== t.length) return !1;
    for (let n = 0; n < i.length; n++) {
      const s = i[n], r = t[n], a = Te(s), o = Te(r);
      if (a !== o || !cr(s, r))
        return !1;
    }
    return !0;
  } else
    return i === t;
}, kl = () => navigator.clipboard && typeof navigator.clipboard.read == "function", Eo = (i) => {
  navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(JSON.stringify(i));
}, V3 = async () => {
  let i = null, t = null;
  if (kl()) {
    const e = await navigator.clipboard.read();
    if (e && e.length > 0)
      for (const n of e)
        for (const s of n.types)
          /^image\//.test(s) ? t = await n.getType(s) : s === "text/plain" && (i = await (await n.getType(s)).text());
  }
  return {
    text: i,
    img: t
  };
}, Ts = (i) => {
  if (!i || !i.parent) return;
  const t = Si(i);
  t !== -1 && i.parent.nodeData.children.splice(t, 1);
}, q3 = (i, t) => {
  if (i.length !== t.length) return !1;
  for (let e = 0; e < i.length; e++)
    if (!t.find((n) => n.uid === i[e].uid))
      return !1;
  return !0;
}, Co = (i) => ({
  simpleMindMap: !0,
  data: i
}), dr = (i) => {
  let t = null;
  if (typeof i == "string")
    try {
      const n = JSON.parse(i);
      typeof n == "object" && n.simpleMindMap && (t = n.data);
    } catch {
    }
  else typeof i == "object" && i.simpleMindMap && (t = i.data);
  const e = !!t;
  return {
    isSmm: e,
    data: e ? t : String(i)
  };
}, Mo = (i, t) => {
  i.preventDefault();
  const e = window.getSelection();
  if (!e.rangeCount) return;
  e.deleteFromDocument(), t = t || i.clipboardData.getData("text"), t = Qn(t), t = Il(t);
  const n = t.split(/\n/g), s = document.createDocumentFragment();
  n.forEach((r, a) => {
    const o = document.createTextNode(r);
    if (s.appendChild(o), a < n.length - 1) {
      const h = document.createElement("br");
      s.appendChild(h);
    }
  }), e.getRangeAt(0).insertNode(s), e.collapseToEnd();
}, To = (i) => {
  const t = {}, e = (n, s) => {
    const r = n.data.uid;
    s && s.children.push(r), t[r] = {
      isRoot: !s,
      data: {
        ...n.data
      },
      children: []
    }, n.children && n.children.length > 0 && n.children.forEach((a) => {
      e(a, t[r]);
    });
  };
  return e(i, null), t;
}, K3 = ({
  addContentToHeader: i,
  addContentToFooter: t
}) => {
  const e = [];
  let n = null, s = 0, r = null, a = 0;
  const o = (h, l) => {
    if (typeof h == "function") {
      const c = h();
      if (!c) return;
      const { el: d, cssText: g, height: f } = c;
      if (d instanceof HTMLElement) {
        si(d);
        const m = ni({ el: d, height: f });
        l(m, f);
      }
      g && e.push(g);
    }
  };
  return o(i, (h, l) => {
    n = h, s = l;
  }), o(t, (h, l) => {
    r = h, a = l;
  }), {
    cssTextList: e,
    header: n,
    headerHeight: s,
    footer: r,
    footerHeight: a
  };
}, Z3 = (i, t = 0, e = 0, n = 0, s = 0, r = !1, a = !1) => {
  let o = 1 / 0, h = -1 / 0, l = 1 / 0, c = -1 / 0;
  const d = (g, f) => {
    if (!(f && r) && g.group)
      try {
        const { x: m, y: v, width: x, height: w } = g.group.findOne(".smm-node-shape").rbox();
        m < o && (o = m), m + x > h && (h = m + x), v < l && (l = v), v + w > c && (c = v + w);
      } catch {
      }
    !a && g._generalizationList.length > 0 && g._generalizationList.forEach((m) => {
      d(m.generalizationNode);
    }), g.children && g.children.forEach((m) => {
      d(m);
    });
  };
  return d(i, !0), o = o - t + n, l = l - e + s, h = h - t + n, c = c - e + s, {
    left: o,
    top: l,
    width: h - o,
    height: c - l
  };
}, J3 = () => {
  if (document.documentElement.requestFullScreen)
    return "fullscreenchange";
  if (document.documentElement.webkitRequestFullScreen)
    return "webkitfullscreenchange";
  if (document.documentElement.mozRequestFullScreen)
    return "mozfullscreenchange";
  if (document.documentElement.msRequestFullscreen)
    return "msfullscreenchange";
};
J3();
const ni = ({ el: i, width: t, height: e }) => {
  const n = new sa();
  return t !== void 0 && n.width(t), e !== void 0 && n.height(e), n.add(i), n;
}, Gn = (i) => {
  const t = i.generalization;
  return t ? Array.isArray(t) ? t : [t] : [];
}, si = (i) => {
  i.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
}, bo = (i) => (i = [...i], i.sort((t, e) => t.sortIndex - e.sortIndex), i), Pl = (i, t) => $n(i, t, {
  arrayMerge: (e, n) => n
}), Q3 = (i) => {
  const t = {};
  return e1.forEach((e) => {
    let n = i.style.merge(e);
    e === "fontSize" && (n = n + "px"), t[e] = n;
  }), t;
}, No = [
  "backgroundColor",
  "backgroundImage",
  "backgroundRepeat",
  "backgroundPosition",
  "backgroundSize"
], Bl = [
  "gradientStyle",
  "startColor",
  "endColor",
  "startDir",
  "endDir",
  "fillColor",
  "borderColor",
  "borderWidth",
  "borderDasharray"
];
class Bt {
  //   设置背景样式
  static setBackgroundStyle(t, e) {
    if (!t) return;
    if (!Bt.cacheStyle) {
      Bt.cacheStyle = {};
      let h = window.getComputedStyle(t);
      No.forEach((l) => {
        Bt.cacheStyle[l] = h[l];
      });
    }
    let {
      backgroundColor: n,
      backgroundImage: s,
      backgroundRepeat: r,
      backgroundPosition: a,
      backgroundSize: o
    } = e;
    t.style.backgroundColor = n, s && s !== "none" ? (t.style.backgroundImage = `url(${s})`, t.style.backgroundRepeat = r, t.style.backgroundPosition = a, t.style.backgroundSize = o) : t.style.backgroundImage = "none";
  }
  // 移除背景样式
  static removeBackgroundStyle(t) {
    Bt.cacheStyle && (No.forEach((e) => {
      t.style[e] = Bt.cacheStyle[e];
    }), Bt.cacheStyle = null);
  }
  //  构造函数
  constructor(t) {
    this.ctx = t, this._markerPath = null, this._marker = null, this._gradient = null;
  }
  //  合并样式
  merge(t, e) {
    let n = this.ctx.mindMap.themeConfig, s = null, r = !1;
    e ? (r = !0, s = n) : this.ctx.isGeneralization ? s = n.generalization : this.ctx.layerIndex === 0 ? s = n.root : this.ctx.layerIndex === 1 ? s = n.second : s = n.node;
    let a = "";
    return this.getSelfStyle(t) !== void 0 ? a = this.getSelfStyle(t) : s[t] !== void 0 ? a = s[t] : a = n[t], r || this.addToEffectiveStyles({
      [t]: a
    }), a;
  }
  //  获取某个样式值
  getStyle(t, e) {
    return this.merge(t, e);
  }
  //  获取自身自定义样式
  getSelfStyle(t) {
    return this.ctx.getData(t);
  }
  // 更新当前节点生效的样式数据
  addToEffectiveStyles(t) {
    this.ctx.mindMap.painter && (this.ctx.effectiveStyles = {
      ...this.ctx.effectiveStyles,
      ...t
    });
  }
  //  矩形
  rect(t) {
    this.shape(t), t.radius(this.merge("borderRadius"));
  }
  // 形状
  shape(t) {
    const e = {};
    Bl.forEach((n) => {
      e[n] = this.merge(n);
    }), e.gradientStyle ? (this._gradient || (this._gradient = this.ctx.nodeDraw.gradient("linear")), this._gradient.update((n) => {
      n.stop(0, e.startColor), n.stop(1, e.endColor);
    }), this._gradient.from(...e.startDir).to(...e.endDir), t.fill(this._gradient)) : t.fill({
      color: e.fillColor
    }), t.stroke({
      color: e.borderColor,
      width: e.borderWidth,
      dasharray: e.borderDasharray
    });
  }
  //  文字
  text(t) {
    const e = {
      color: this.merge("color"),
      fontFamily: this.merge("fontFamily"),
      fontSize: this.merge("fontSize"),
      fontWeight: this.merge("fontWeight"),
      fontStyle: this.merge("fontStyle"),
      textDecoration: this.merge("textDecoration")
    };
    t.fill({
      color: e.color
    }).css({
      "font-family": e.fontFamily,
      "font-size": e.fontSize + "px",
      "font-weight": e.fontWeight,
      "font-style": e.fontStyle,
      "text-decoration": e.textDecoration
    });
  }
  //  html文字节点
  domText(t, e = 1) {
    const n = {
      color: this.merge("color"),
      fontFamily: this.merge("fontFamily"),
      fontSize: this.merge("fontSize"),
      fontWeight: this.merge("fontWeight"),
      fontStyle: this.merge("fontStyle"),
      textDecoration: this.merge("textDecoration"),
      textAlign: this.merge("textAlign")
    };
    t.style.color = n.color, t.style.textDecoration = n.textDecoration, t.style.fontFamily = n.fontFamily, t.style.fontSize = n.fontSize * e + "px", t.style.fontWeight = n.fontWeight || "normal", t.style.fontStyle = n.fontStyle, t.style.textAlign = n.textAlign;
  }
  //  标签文字
  tagText(t, e) {
    t.fill({
      color: "#fff"
    }).css({
      "font-size": e.fontSize + "px"
    });
  }
  //  标签矩形
  tagRect(t, e) {
    t.fill({
      color: e.fill
    }), e.radius && t.radius(e.radius);
  }
  //  内置图标
  iconNode(t, e) {
    t.attr({
      fill: e || this.merge("color")
    });
  }
  //  连线
  line(t, { width: e, color: n, dasharray: s } = {}, r, a) {
    const { customHandleLine: o } = this.ctx.mindMap.opt;
    if (typeof o == "function" && o(this.ctx, t, { width: e, color: n, dasharray: s }), t.stroke({ color: n, dasharray: s, width: e }).fill({ color: "none" }), r) {
      const h = this.merge("showLineMarker", !0), l = a.style;
      if (h) {
        l._marker = l._marker || l.createMarker(), l._markerPath.stroke({ color: n }).fill({ color: n }), t.attr("marker-start", ""), t.attr("marker-end", "");
        const c = l.merge("lineMarkerDir");
        t.marker(c, l._marker);
      } else l._marker && (t.attr("marker-start", ""), t.attr("marker-end", ""), l._marker.remove(), l._marker = null);
    }
  }
  // 创建箭头
  createMarker() {
    return this.ctx.lineDraw.marker(20, 20, (t) => {
      t.ref(8, 5), t.size(20, 20), t.attr("markerUnits", "userSpaceOnUse"), t.attr("orient", "auto-start-reverse"), this._markerPath = t.path("M0,0 L2,5 L0,10 L10,5 Z");
    });
  }
  //  概要连线
  generalizationLine(t) {
    t.stroke({
      width: this.merge("generalizationLineWidth", !0),
      color: this.merge("generalizationLineColor", !0)
    }).fill({ color: "none" });
  }
  //  展开收起按钮
  iconBtn(t, e, n) {
    let { color: s, fill: r, fontSize: a, fontColor: o } = this.ctx.mindMap.opt.expandBtnStyle || {
      color: "#808080",
      fill: "#fff",
      fontSize: 12,
      fontColor: "#333333"
    };
    t.fill({ color: s }), e.fill({ color: s }), n.fill({ color: r }), this.ctx.mindMap.opt.isShowExpandNum && t.attr({ "font-size": a + "px", "font-color": o });
  }
  // 是否设置了自定义的样式
  hasCustomStyle() {
    let t = !1;
    return Object.keys(this.ctx.getData()).forEach((e) => {
      lr(e) && (t = !0);
    }), t;
  }
  // 获取自定义的样式
  getCustomStyle() {
    const t = {};
    return Object.keys(this.ctx.getData()).forEach((e) => {
      lr(e) && (t[e] = this.ctx.getData(e));
    }), t;
  }
  // hover和激活节点
  hoverNode(t) {
    const e = this.merge("hoverRectColor") || this.ctx.mindMap.opt.hoverRectColor, n = this.merge("hoverRectRadius");
    t.radius(n).fill("none").stroke({
      color: e
    });
  }
  // 所属节点被删除时的操作
  onRemove() {
    this._marker && (this._marker.remove(), this._marker = null), this._markerPath && (this._markerPath.remove(), this._markerPath = null), this._gradient && (this._gradient.remove(), this._gradient = null);
  }
}
Bt.cacheStyle = null;
class tp {
  constructor(t) {
    this.node = t, this.mindMap = t.mindMap;
  }
  //  形状需要的padding
  getShapePadding(t, e, n, s) {
    const r = this.node.getShape(), a = 15, o = 5, h = t + n * 2, l = e + s * 2, c = Math.abs(h - l);
    switch (r) {
      case E.SHAPE.ROUNDED_RECTANGLE:
        return {
          paddingX: e > t ? (e - t) / 2 : 0,
          paddingY: 0
        };
      case E.SHAPE.DIAMOND:
        return {
          paddingX: t / 2,
          paddingY: e / 2
        };
      case E.SHAPE.PARALLELOGRAM:
        return {
          paddingX: n <= 0 ? a : 0,
          paddingY: 0
        };
      case E.SHAPE.OUTER_TRIANGULAR_RECTANGLE:
        return {
          paddingX: n <= 0 ? a : 0,
          paddingY: 0
        };
      case E.SHAPE.INNER_TRIANGULAR_RECTANGLE:
        return {
          paddingX: n <= 0 ? a : 0,
          paddingY: 0
        };
      case E.SHAPE.ELLIPSE:
        return {
          paddingX: n <= 0 ? a : 0,
          paddingY: s <= 0 ? o : 0
        };
      case E.SHAPE.CIRCLE:
        return {
          paddingX: l > h ? c / 2 : 0,
          paddingY: l < h ? c / 2 : 0
        };
    }
    const d = this.getShapeFromExtendList(r);
    return d ? d.getPadding({
      node: this.node,
      width: t,
      height: e,
      paddingX: n,
      paddingY: s
    }) || {
      paddingX: 0,
      paddingY: 0
    } : {
      paddingX: 0,
      paddingY: 0
    };
  }
  // 从形状扩展列表里获取指定名称的形状
  getShapeFromExtendList(t) {
    return this.mindMap.extendShapeList.find((e) => e.name === t);
  }
  //  创建形状节点
  createShape() {
    const t = this.node.getShape();
    let e = null;
    if (t === E.SHAPE.RECTANGLE ? e = this.createRect() : t === E.SHAPE.DIAMOND ? e = this.createDiamond() : t === E.SHAPE.PARALLELOGRAM ? e = this.createParallelogram() : t === E.SHAPE.ROUNDED_RECTANGLE ? e = this.createRoundedRectangle() : t === E.SHAPE.OCTAGONAL_RECTANGLE ? e = this.createOctagonalRectangle() : t === E.SHAPE.OUTER_TRIANGULAR_RECTANGLE ? e = this.createOuterTriangularRectangle() : t === E.SHAPE.INNER_TRIANGULAR_RECTANGLE ? e = this.createInnerTriangularRectangle() : t === E.SHAPE.ELLIPSE ? e = this.createEllipse() : t === E.SHAPE.CIRCLE && (e = this.createCircle()), !e) {
      const n = this.getShapeFromExtendList(t);
      n && (e = n.createShape(this.node));
    }
    return e || this.createRect();
  }
  // 获取节点减去节点边框宽度、hover节点边框宽度后的尺寸
  getNodeSize() {
    const t = this.node.getBorderWidth();
    let { width: e, height: n } = this.node;
    return e -= t, n -= t, {
      width: e,
      height: n
    };
  }
  // 创建路径节点
  createPath(t) {
    const { customCreateNodePath: e } = this.mindMap.opt;
    return e ? ht(e(t)) : new je().plot(t);
  }
  // 创建多边形节点
  createPolygon(t) {
    const { customCreateNodePolygon: e } = this.mindMap.opt;
    return e ? ht(e(t)) : new Ge().plot(t);
  }
  // 创建矩形
  createRect() {
    let { width: t, height: e } = this.getNodeSize(), n = this.node.style.merge("borderRadius");
    const s = `
      M${n},0
      L${t - n},0
      C${t - n},0 ${t},0 ${t},${n}
      L${t},${e - n}
      C${t},${e - n} ${t},${e} ${t - n},${e}
      L${n},${e}
      C${n},${e} 0,${e} 0,${e - n}
      L0,${n}
      C0,${n} 0,0 ${n},0
      Z
    `;
    return this.createPath(s);
  }
  //  创建菱形
  createDiamond() {
    let { width: t, height: e } = this.getNodeSize(), n = t / 2, s = e / 2;
    const f = [
      [n, 0],
      [t, s],
      [n, e],
      [0, s]
    ];
    return this.createPolygon(f);
  }
  //  创建平行四边形
  createParallelogram() {
    let { paddingX: t } = this.node.getPaddingVale();
    t = t || this.node.shapePadding.paddingX;
    let { width: e, height: n } = this.getNodeSize();
    const s = [
      [t, 0],
      [e, 0],
      [e - t, n],
      [0, n]
    ];
    return this.createPolygon(s);
  }
  //  创建圆角矩形
  createRoundedRectangle() {
    let { width: t, height: e } = this.getNodeSize(), n = e / 2;
    const s = `
      M${n},0
      L${t - n},0
      A${e / 2},${e / 2} 0 0,1 ${t - n},${e} 
      L${n},${e}
      A${e / 2},${e / 2} 0 0,1 ${n},0
    `;
    return this.createPath(s);
  }
  //  创建八角矩形
  createOctagonalRectangle() {
    let t = 5, { width: e, height: n } = this.getNodeSize();
    const s = [
      [0, t],
      [t, 0],
      [e - t, 0],
      [e, t],
      [e, n - t],
      [e - t, n],
      [t, n],
      [0, n - t]
    ];
    return this.createPolygon(s);
  }
  //  创建外三角矩形
  createOuterTriangularRectangle() {
    let { paddingX: t } = this.node.getPaddingVale();
    t = t || this.node.shapePadding.paddingX;
    let { width: e, height: n } = this.getNodeSize();
    const s = [
      [t, 0],
      [e - t, 0],
      [e, n / 2],
      [e - t, n],
      [t, n],
      [0, n / 2]
    ];
    return this.createPolygon(s);
  }
  //  创建内三角矩形
  createInnerTriangularRectangle() {
    let { paddingX: t } = this.node.getPaddingVale();
    t = t || this.node.shapePadding.paddingX;
    let { width: e, height: n } = this.getNodeSize();
    const s = [
      [0, 0],
      [e, 0],
      [e - t / 2, n / 2],
      [e, n],
      [0, n],
      [t / 2, n / 2]
    ];
    return this.createPolygon(s);
  }
  //  创建椭圆
  createEllipse() {
    let { width: t, height: e } = this.getNodeSize(), n = t / 2, s = e / 2;
    const r = `
      M${n},0
      A${n},${s} 0 0,1 ${n},${e} 
      M${n},${e} 
      A${n},${s} 0 0,1 ${n},0 
    `;
    return this.createPath(r);
  }
  //  创建圆
  createCircle() {
    let { width: t, height: e } = this.getNodeSize(), n = t / 2, s = e / 2;
    const r = `
      M${n},0
      A${n},${s} 0 0,1 ${n},${e} 
      M${n},${e} 
      A${n},${s} 0 0,1 ${n},0 
    `;
    return this.createPath(r);
  }
}
const ep = [
  E.SHAPE.RECTANGLE,
  E.SHAPE.DIAMOND,
  E.SHAPE.PARALLELOGRAM,
  E.SHAPE.ROUNDED_RECTANGLE,
  E.SHAPE.OCTAGONAL_RECTANGLE,
  E.SHAPE.OUTER_TRIANGULAR_RECTANGLE,
  E.SHAPE.INNER_TRIANGULAR_RECTANGLE,
  E.SHAPE.ELLIPSE,
  E.SHAPE.CIRCLE
];
function ip() {
  const i = this.getData("generalization");
  return Array.isArray(i) ? i : i ? [i] : [];
}
function np() {
  return this.formatGetGeneralization().length > 0;
}
function sp() {
  return !!this.formatGetGeneralization().find((t) => !t.range || t.range.length <= 0);
}
function rp(i) {
  return this._generalizationList.findIndex((t) => t.generalizationNode.uid === i.uid);
}
function ap() {
  if (this.isGeneralization || !this.checkHasGeneralization())
    return;
  let i = 0, t = 0;
  this.formatGetGeneralization().forEach((n, s) => {
    let r = this._generalizationList[s];
    r || (r = this._generalizationList[s] = {}), r.node = this, r.range = n.range, r.generalizationLine || (r.generalizationLine = this.lineDraw.path()), r.generalizationNode || (r.generalizationNode = new es({
      data: {
        inserting: n.inserting,
        data: n
      },
      uid: qt(),
      renderer: this.renderer,
      mindMap: this.mindMap,
      isGeneralization: !0
    })), delete n.inserting, r.generalizationNode.generalizationBelongNode = this, r.generalizationNode.width > i && (i = r.generalizationNode.width), r.generalizationNode.height > t && (t = r.generalizationNode.height), n.isActive && this.renderer.addNodeToActiveList(r.generalizationNode);
  }), this._generalizationNodeWidth = i, this._generalizationNodeHeight = t;
}
function op() {
  this.isGeneralization || (this.removeGeneralization(), this.createGeneralizationNode());
}
function hp(i) {
  if (this.isGeneralization) return;
  this.updateGeneralizationData();
  const t = this.formatGetGeneralization();
  if (t.length <= 0 || this.getData("expand") === !1) {
    this.removeGeneralization();
    return;
  }
  t.length !== this._generalizationList.length && this.removeGeneralization(), this.createGeneralizationNode(), this.renderer.layout.renderGeneralization(this._generalizationList), this._generalizationList.forEach((e) => {
    this.style.generalizationLine(e.generalizationLine), e.generalizationNode.render(() => {
    }, i);
  });
}
function lp() {
  const i = this.getChildrenLength(), t = this.formatGetGeneralization(), e = [];
  t.forEach((n) => {
    if (!n.range) {
      e.push(n);
      return;
    }
    n.range.length > 0 && n.range[0] <= i - 1 && n.range[1] <= i - 1 && e.push(n);
  }), e.length !== t.length && this.setData({
    generalization: e
  });
}
function cp() {
  this.isGeneralization || (this._generalizationList.forEach((i) => {
    i.generalizationNode.style.onRemove(), i.generalizationLine && (i.generalizationLine.remove(), i.generalizationLine = null), i.generalizationNode && (this.renderer.removeNodeFromActiveList(i.generalizationNode), i.generalizationNode.remove(), i.generalizationNode = null);
  }), this._generalizationList = [], this.generalizationBelongNode && this.nodeDraw.find(".generalization_" + this.generalizationBelongNode.uid).remove());
}
function dp() {
  this.isGeneralization || this._generalizationList.forEach((i) => {
    i.generalizationLine && i.generalizationLine.hide(), i.generalizationNode && i.generalizationNode.hide();
  });
}
function up() {
  this.isGeneralization || this._generalizationList.forEach((i) => {
    i.generalizationLine && i.generalizationLine.show(), i.generalizationNode && i.generalizationNode.show();
  });
}
function fp(i) {
  this._generalizationList.forEach((t) => {
    t.generalizationLine.opacity(i), t.generalizationNode.group.opacity(i);
  });
}
function pp() {
  const i = this.generalizationBelongNode, t = i.formatGetGeneralization(), e = i.getGeneralizationNodeIndex(this), n = t[e], r = this.getStyle("hoverRectColor") || this.mindMap.opt.hoverRectColor, a = r ? {
    stroke: r
  } : null;
  Array.isArray(n.range) && n.range.length > 0 ? this.mindMap.renderer.highlightNode(
    i,
    n.range,
    a
  ) : this.mindMap.renderer.highlightNode(i, null, a);
}
function mp() {
  this.mindMap.renderer.closeHighlightNode();
}
const So = {
  formatGetGeneralization: ip,
  checkHasGeneralization: np,
  checkHasSelfGeneralization: sp,
  getGeneralizationNodeIndex: rp,
  createGeneralizationNode: ap,
  updateGeneralization: op,
  updateGeneralizationData: lp,
  renderGeneralization: hp,
  removeGeneralization: cp,
  hideGeneralization: dp,
  showGeneralization: up,
  setGeneralizationOpacity: fp,
  handleGeneralizationMouseenter: pp,
  handleGeneralizationMouseleave: mp
}, gp = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M475.136 327.168v147.968h-147.968v74.24h147.968v147.968h74.24v-147.968h147.968v-74.24h-147.968v-147.968h-74.24z m36.864-222.208c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z"></path></svg>', vp = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z"></path><path d="M252.928 474.624h518.144v74.24h-518.144z"></path></svg>', yp = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z"></path></svg>', ur = {
  open: gp,
  close: vp,
  quickCreateChild: yp
};
function _p() {
  if (this._openExpandNode)
    return;
  const { expandBtnSize: i, expandBtnIcon: t, isShowExpandNum: e } = this.mindMap.opt;
  let { close: n, open: s } = t || {};
  e ? (this._openExpandNode = new ct(), this._openExpandNode.addClass("smm-expand-btn-text"), this._openExpandNode.attr({
    "text-anchor": "middle",
    "dominant-baseline": "middle",
    x: i / 2,
    y: 2
  })) : (this._openExpandNode = ht(s || ur.open).size(
    i,
    i
  ), this._openExpandNode.x(0).y(-i / 2)), this._closeExpandNode = ht(n || ur.close).size(
    i,
    i
  ), this._closeExpandNode.x(0).y(-i / 2), this._fillExpandNode = new gi().size(i), this._fillExpandNode.x(0).y(-i / 2), this.style.iconBtn(
    this._openExpandNode,
    this._closeExpandNode,
    this._fillExpandNode
  );
}
function xp(i = []) {
  return i.reduce(
    (t, e) => t + this.sumNode(e.children || []),
    i.length
  );
}
function wp() {
  let { expand: i } = this.getData();
  if (i === this._lastExpandBtnType) return;
  this._expandBtn && this._expandBtn.clear(), this.createExpandNodeContent();
  let t;
  if (i === !1 ? (t = this._openExpandNode, this._lastExpandBtnType = !1) : (t = this._closeExpandNode, this._lastExpandBtnType = !0), this._expandBtn) {
    let { isShowExpandNum: e, expandBtnStyle: n, expandBtnNumHandler: s } = this.mindMap.opt;
    if (e)
      if (i)
        this._fillExpandNode.stroke("none");
      else {
        this._fillExpandNode.stroke({
          color: n.strokeColor
        });
        let r = this.sumNode(this.nodeData.children || []);
        if (typeof s == "function") {
          const a = s(r, this);
          me(a) || (r = a);
        }
        t.text(String(r));
      }
    this._expandBtn.add(this._fillExpandNode).add(t);
  }
}
function Ep() {
  this._expandBtn && this.renderer.layout.renderExpandBtn(this, this._expandBtn);
}
function Cp() {
  this.getChildrenLength() <= 0 || this.isRoot || (this._expandBtn ? this.group.add(this._expandBtn) : (this._expandBtn = new ft(), this._expandBtn.on("mouseover", (i) => {
    i.stopPropagation(), this._expandBtn.css({
      cursor: "pointer"
    });
  }), this._expandBtn.on("mouseout", (i) => {
    i.stopPropagation(), this._expandBtn.css({
      cursor: "auto"
    });
  }), this._expandBtn.on("click", (i) => {
    i.stopPropagation(), this.mindMap.execCommand("SET_NODE_EXPAND", this, !this.getData("expand")), this.mindMap.emit("expand_btn_click", this);
  }), this._expandBtn.on("dblclick", (i) => {
    i.stopPropagation();
  }), this._expandBtn.addClass("smm-expand-btn"), this.group.add(this._expandBtn)), this._showExpandBtn = !0, this.updateExpandBtnNode(), this.updateExpandBtnPos());
}
function Mp() {
  this._expandBtn && this._showExpandBtn && (this._expandBtn.remove(), this._showExpandBtn = !1);
}
function Tp() {
  const { alwaysShowExpandBtn: i, notShowExpandBtn: t } = this.mindMap.opt;
  i || t || setTimeout(() => {
    this.renderExpandBtn();
  }, 0);
}
function bp() {
  const { alwaysShowExpandBtn: i, notShowExpandBtn: t } = this.mindMap.opt;
  if (i || this._isMouseenter || t) return;
  let { isActive: e, expand: n } = this.getData();
  !e && n && setTimeout(() => {
    this.removeExpandBtn();
  }, 0);
}
const Lo = {
  createExpandNodeContent: _p,
  updateExpandBtnNode: wp,
  updateExpandBtnPos: Ep,
  renderExpandBtn: Cp,
  removeExpandBtn: Mp,
  showExpandBtn: Tp,
  hideExpandBtn: bp,
  sumNode: xp
};
function Np(i = {}) {
  this.mindMap.execCommand("SET_NODE_DATA", this, i);
}
function Sp(i, t, e) {
  this.mindMap.execCommand("SET_NODE_TEXT", this, i, t, e);
}
function Lp(i) {
  this.mindMap.execCommand("SET_NODE_IMAGE", this, i);
}
function Ap(i) {
  this.mindMap.execCommand("SET_NODE_ICON", this, i);
}
function Dp(i, t) {
  this.mindMap.execCommand("SET_NODE_HYPERLINK", this, i, t);
}
function Op(i) {
  this.mindMap.execCommand("SET_NODE_NOTE", this, i);
}
function Rp(i, t) {
  this.mindMap.execCommand("SET_NODE_ATTACHMENT", this, i, t);
}
function Ip(i) {
  this.mindMap.execCommand("SET_NODE_TAG", this, i);
}
function zp(i) {
  this.mindMap.execCommand("SET_NODE_SHAPE", this, i);
}
function Fp(i, t) {
  this.mindMap.execCommand("SET_NODE_STYLE", this, i, t);
}
function kp(i) {
  this.mindMap.execCommand("SET_NODE_STYLES", this, i);
}
const Ao = {
  setData: Np,
  setText: Sp,
  setImage: Lp,
  setIcon: Ap,
  setHyperlink: Dp,
  setNote: Op,
  setAttachment: Rp,
  setTag: Ip,
  setShape: zp,
  setStyle: Fp,
  setStyles: kp
}, Pp = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M435.484444 251.733333v68.892445L295.822222 320.682667a168.504889 168.504889 0 0 0-2.844444 336.952889h142.506666v68.892444H295.822222a237.397333 237.397333 0 0 1 0-474.794667h139.662222z m248.945778 0a237.397333 237.397333 0 0 1 0 474.851556H544.654222v-69.006222l139.776 0.056889a168.504889 168.504889 0 0 0 2.844445-336.952889H544.597333V251.676444h139.776z m-25.827555 203.946667a34.474667 34.474667 0 0 1 0 68.892444H321.649778a34.474667 34.474667 0 0 1 0-68.892444h336.952889z" ></path></svg>', Bp = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M152.768 985.984 152.768 49.856l434.56 0 66.816 0 234.048 267.392 0 66.816 0 601.92L152.768 985.984 152.768 985.984zM654.144 193.088l0 124.16 108.736 0L654.144 193.088 654.144 193.088zM821.312 384.064l-167.168 0L587.328 384.064 587.328 317.312 587.328 116.736 219.584 116.736 219.584 919.04l601.728 0L821.312 384.064 821.312 384.064zM386.688 517.888 319.808 517.888 319.808 450.944l66.816 0L386.624 517.888 386.688 517.888zM386.688 651.584 319.808 651.584 319.808 584.704l66.816 0L386.624 651.584 386.688 651.584zM386.688 785.344 319.808 785.344l0-66.88 66.816 0L386.624 785.344 386.688 785.344zM721.024 517.888 453.632 517.888 453.632 450.944l267.392 0L721.024 517.888 721.024 517.888zM654.144 651.584 453.632 651.584 453.632 584.704l200.512 0L654.144 651.584 654.144 651.584zM620.672 785.344l-167.04 0 0-66.88 167.04 0L620.672 785.344 620.672 785.344z" ></path></svg>', $p = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="128" height="128"><path d="M516.373333 375.978667l136.576-136.576a147.797333 147.797333 0 0 1 208.853334-0.021334 147.690667 147.690667 0 0 1-0.042667 208.832l-204.8 204.778667v0.021333l-153.621333 153.6c-85.973333 85.973333-225.28 85.973333-311.253334 0.021334-85.994667-85.973333-85.973333-225.216 0.149334-311.36L431.146667 256.362667a21.333333 21.333333 0 0 0-30.165334-30.165334L162.069333 465.066667c-102.805333 102.826667-102.826667 269.056-0.149333 371.733333 102.613333 102.613333 268.970667 102.613333 371.584 0l153.6-153.642667h0.021333l0.021334-0.021333 204.778666-204.778667c74.325333-74.325333 74.346667-194.858667 0.021334-269.184-74.24-74.24-194.88-74.24-269.162667 0.042667l-136.576 136.554667-187.626667 187.626666a117.845333 117.845333 0 0 0-0.106666 166.826667 118.037333 118.037333 0 0 0 166.826666-0.106667l255.850667-255.829333a21.333333 21.333333 0 0 0-30.165333-30.165333L435.136 669.973333a75.370667 75.370667 0 0 1-106.496 0.106667 75.178667 75.178667 0 0 1 0.128-106.496l187.605333-187.605333z" ></path></svg>', $l = [
  {
    name: "优先级图标",
    type: "priority",
    list: [
      {
        name: "1",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#E93B30"></path><path d="M580.309333 256h-75.52c-10.666667 29.824-30.165333 55.765333-58.709333 78.165333-28.416 22.314667-54.869333 37.418667-79.146667 45.397334v84.608a320 320 0 0 0 120.234667-70.698667v352.085333H580.266667V256z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "2",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M511.957333 1024C229.248 1024 0 794.752 0 512S229.248 0 511.957333 0C794.752 0 1024 229.248 1024 512s-229.248 512-512.042667 512z" fill="#FA8D2E"></path><path d="M667.946667 658.602667h-185.301334c4.864-8.533333 11.178667-17.066667 19.072-25.984 7.808-8.874667 26.453333-26.837333 55.936-53.888 29.525333-27.008 49.877333-47.786667 61.226667-62.165334 16.981333-21.717333 29.44-42.453333 37.290667-62.293333 7.808-19.84 11.776-40.746667 11.776-62.677333 0-38.570667-13.738667-70.741333-41.088-96.725334C599.466667 268.928 561.706667 256 513.834667 256c-43.690667 0-80.128 11.136-109.354667 33.578667-29.098667 22.4-46.506667 59.306667-52.010667 110.805333l93.184 9.301333c1.792-27.349333 8.405333-46.890667 19.754667-58.624 11.434667-11.776 26.837333-17.664 46.165333-17.664 19.541333 0 34.858667 5.589333 45.909334 16.768 11.136 11.264 16.682667 27.221333 16.682666 48.042667 0 18.858667-6.4 37.930667-19.242666 57.258667-9.472 14.037333-35.157333 40.533333-77.098667 79.872-52.096 48.554667-87.04 87.509333-104.704 116.821333A226.688 226.688 0 0 0 341.333333 745.429333h326.613334v-86.826666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "3",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#2E66FA"></path><path d="M627.754667 731.733333c-29.354667 25.088-66.901333 37.632-112.725334 37.632-44.928 0-81.792-11.52-110.592-34.773333-33.066667-26.538667-49.877333-64.469333-50.304-114.133333h92.16c0.426667 21.76 7.552 38.314667 21.333334 49.664 12.288 10.88 28.117333 16.341333 47.402666 16.341333 20.309333 0 36.778667-6.101333 49.322667-18.432 12.544-12.330667 18.773333-29.568 18.773333-51.797333 0-21.290667-6.229333-38.186667-18.773333-50.773334-12.544-12.501333-29.866667-18.773333-52.138667-18.773333h-13.525333v-80.042667H512c42.112 0 63.274667-21.034667 63.274667-63.146666 0-20.309333-5.888-36.096-17.706667-47.445334a60.757333 60.757333 0 0 0-43.818667-17.066666c-17.493333 0-32 5.504-43.434666 16.298666-11.562667 10.88-17.792 25.728-18.773334 44.714667H359.68c0.981333-43.946667 16.042667-78.976 45.397333-104.96 29.354667-25.941333 65.706667-39.04 109.226667-39.04 44.928 0 81.792 13.525333 110.592 40.490667 28.8 26.922667 43.306667 61.610667 43.306667 104.149333 0 48.213333-19.413333 82.688-58.154667 103.552 43.52 23.125333 65.28 61.44 65.28 114.858667 0 48.128-15.957333 85.76-47.573333 112.682666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "4",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M600.96 256v309.802667h60.117333v81.536h-60.16v98.218666h-90.154666v-98.218666H311.466667v-81.237334L522.666667 256h78.293333zM510.72 399.104l-112.042667 166.698667h112.042667V399.104z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "5",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M470.912 343.552h175.786667V256H400.256l-47.786667 253.952 75.434667 10.837333c21.205333-23.552 45.269333-35.413333 72.021333-35.413333 21.546667 0 38.997333 7.509333 52.437334 22.4 13.312 15.018667 20.053333 37.418667 20.053333 67.328 0 31.872-6.741333 55.765333-20.181333 71.552-13.397333 15.872-29.866667 23.765333-49.237334 23.765333-17.066667 0-32.085333-6.186667-45.013333-18.432-13.013333-12.373333-20.821333-29.013333-23.466667-50.133333L341.333333 611.498667c5.546667 40.874667 22.485333 73.429333 50.730667 97.621333 28.330667 24.32 64.938667 36.437333 109.866667 36.437333 56.149333 0 100.053333-21.546667 131.754666-64.554666a176.64 176.64 0 0 0 34.816-107.52c0-48.042667-14.378667-87.210667-43.221333-117.333334-28.8-30.208-63.957333-45.312-105.514667-45.312-21.674667 0-42.922667 5.248-63.829333 15.616l14.976-82.901333z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "6",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512 0c282.88 0 512 229.205333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M519.210667 256c36.992 0 67.626667 10.368 91.776 31.189333 24.192 20.821333 39.68 51.029333 46.293333 90.709334l-90.197333 9.984c-2.176-18.56-7.978667-32.298667-17.28-41.173334-9.258667-8.874667-21.418667-13.226667-36.224-13.226666-19.754667 0-36.437333 8.789333-50.048 26.453333-13.696 17.664-22.314667 54.613333-25.856 110.549333 23.296-27.52 52.138667-41.258667 86.656-41.258666 38.997333 0 72.362667 14.805333 100.181333 44.544 27.733333 29.696 41.685333 68.010667 41.685333 114.858666 0 49.877333-14.634667 89.856-43.818666 119.936-29.226667 30.208-66.730667 45.226667-112.554667 45.226667-49.066667 0-89.429333-19.072-121.130667-57.344C357.12 658.218667 341.333333 595.541333 341.333333 508.416c0-89.344 16.469333-153.813333 49.493334-193.194667C423.722667 275.754667 466.56 256 519.168 256z m-9.472 241.834667c-17.962667 0-33.066667 6.997333-45.525334 21.12-12.330667 14.037333-18.56 34.858667-18.56 62.293333 0 30.421333 6.912 53.76 20.906667 70.4 13.952 16.469333 29.866667 24.746667 47.786667 24.746667 17.28 0 31.701333-6.826667 43.178666-20.309334 11.52-13.525333 17.237333-35.669333 17.237334-66.56 0-31.658667-6.186667-54.869333-18.517334-69.546666a58.197333 58.197333 0 0 0-46.506666-22.144z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "7",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.752 0 512S229.248 0 512.042667 0C794.752 0 1024 229.248 1024 512s-229.248 512-511.957333 512z" fill="#6D768D"></path><path d="M673.024 273.066667H354.133333v86.869333h212.224a691.2 691.2 0 0 0-104.746666 187.989333c-26.026667 70.101333-39.978667 138.88-41.429334 206.293334h89.6c-0.298667-42.922667 6.698667-91.776 21.034667-146.474667a654.72 654.72 0 0 1 62.08-154.965333c27.136-48.554667 53.888-85.76 80.128-111.701334V273.066667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "8",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#6D768D"></path><path d="M512.426667 256c46.208 0 82.048 11.861333 107.605333 35.541333 25.6 23.68 38.314667 53.674667 38.314667 89.898667 0 22.613333-5.802667 42.666667-17.578667 60.330667a111.445333 111.445333 0 0 1-49.450667 40.277333c26.965333 10.837333 47.36 26.752 61.312 47.658667 13.994667 20.906667 21.034667 45.013333 21.034667 72.362666 0 45.098667-14.336 81.834667-42.965333 109.952-28.586667 28.245333-66.602667 42.368-114.090667 42.368-44.245333 0-81.066667-11.648-110.464-34.986666-34.645333-27.52-52.010667-65.28-52.010667-113.365334 0-26.368 6.528-50.645333 19.626667-72.746666 13.056-22.144 33.578667-39.210667 61.696-51.242667-24.064-10.154667-41.557333-24.192-52.48-41.941333a109.824 109.824 0 0 1-16.512-58.666667c0-36.224 12.757333-66.218667 37.973333-89.898667 25.386667-23.68 61.354667-35.541333 108.032-35.541333z m1.28 265.429333c-22.784 0-39.722667 7.978667-50.901334 23.893334-11.136 15.786667-16.64 33.066667-16.64 51.498666 0 25.984 6.485333 46.208 19.712 60.714667 13.098667 14.506667 29.525333 21.802667 49.152 21.802667 19.242667 0 35.157333-6.997333 47.786667-20.992 12.629333-13.909333 18.858667-34.048 18.858667-60.416 0-23.082667-6.314667-41.557333-19.2-55.466667a63.274667 63.274667 0 0 0-48.725334-21.034667z m-0.341334-191.488c-17.792 0-32 5.333333-42.581333 16-10.538667 10.666667-15.872 24.746667-15.872 42.325334 0 18.645333 5.248 33.152 15.701333 43.648 10.453333 10.453333 24.362667 15.658667 41.770667 15.658666 17.664 0 31.658667-5.290667 42.24-15.872 10.538667-10.581333 15.872-25.173333 15.872-43.818666 0-17.493333-5.248-31.573333-15.701333-42.154667s-24.277333-15.786667-41.429334-15.786667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "9",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.333333 229.248 0 512 0c282.88 0 512 229.333333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M497.28 256c49.365333 0 89.856 19.157333 121.429333 57.429333 31.701333 38.229333 47.488 101.205333 47.488 188.842667 0 89.173333-16.384 153.386667-49.365333 192.853333-32.853333 39.594667-75.605333 59.264-128.426667 59.264-37.888 0-68.608-10.154667-91.989333-30.506666s-38.4-50.816-45.013333-91.306667l90.112-9.984c2.261333 18.474667 8.021333 32.085333 17.28 41.088 9.173333 8.874667 21.418667 13.312 36.608 13.312 19.2 0 35.541333-8.874667 48.981333-26.752 13.44-17.749333 22.016-54.613333 25.770667-110.549333-23.466667 27.264-52.821333 40.874667-88.064 40.874666-38.314667 0-71.253333-14.72-99.114667-44.330666C355.242667 506.709333 341.333333 468.224 341.333333 420.864c0-49.493333 14.592-89.258667 43.946667-119.466667C414.549333 271.104 451.925333 256 497.237333 256z m-4.352 77.482667c-17.237333 0-31.658667 6.826667-43.008 20.437333-11.477333 13.653333-17.194667 35.84-17.194667 66.816 0 31.402667 6.229333 54.485333 18.645334 69.205333 12.458667 14.72 27.946667 22.101333 46.592 22.101334 18.005333 0 33.066667-7.082667 45.44-21.205334 12.330667-14.208 18.432-35.029333 18.432-62.506666 0-29.994667-6.912-53.376-20.821334-69.973334-13.824-16.597333-29.866667-24.874667-48.085333-24.874666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "10",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M619.946667 273.066667c46.976 0 83.754667 16.042667 110.250666 48.042666 31.573333 37.973333 47.36 100.864 47.36 188.672 0 87.722667-15.829333 150.698667-47.658666 189.056-26.325333 31.616-62.976 47.36-109.952 47.36-47.274667 0-85.418667-17.237333-114.346667-51.968-28.885333-34.602667-43.392-96.426667-43.392-185.386666 0-87.168 15.872-150.016 47.701333-188.416 26.282667-31.488 62.933333-47.36 110.037334-47.36z m-207.488 12.8v452.266666H325.504V411.690667A299.904 299.904 0 0 1 213.333333 476.373333V398.933333c22.656-7.296 47.36-21.12 73.856-41.514666 26.624-20.522667 44.842667-44.288 54.784-71.552h70.485334z m207.488 60.842666c-11.306667 0-21.461333 3.413333-30.336 10.24-8.874667 6.826667-15.786667 19.157333-20.693334 36.864-6.4 22.997333-9.642667 61.653333-9.642666 115.968 0 54.442667 2.944 91.733333 8.661333 112.128 5.802667 20.352 13.098667 33.877333 21.845333 40.618667 8.789333 6.741333 18.858667 10.154667 30.165334 10.154667 11.349333 0 21.376-3.498667 30.250666-10.325334 8.874667-6.826667 15.786667-19.157333 20.693334-36.778666 6.4-22.826667 9.642667-61.354667 9.642666-115.797334 0-54.314667-2.858667-91.648-8.661333-112.042666-5.802667-20.352-13.013333-33.962667-21.76-40.789334a47.616 47.616 0 0 0-30.165333-10.24z" fill="#FFFFFF"></path></svg>'
      }
    ]
  },
  {
    name: "进度图标",
    type: "progress",
    list: [
      {
        name: "1",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144-294.144A414.72 414.72 0 0 1 928 512c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "2",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512h416c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "3",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144 294.144A414.72 414.72 0 0 1 512 928z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "4",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96v832z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "5",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512l-294.144 294.144A414.72 414.72 0 0 1 96 512c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "6",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512H96c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "7",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512L217.856 217.856A414.72 414.72 0 0 1 512 96V512z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "8",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#12BB37"></path><path d="M716.629333 341.333333h-51.328a35.072 35.072 0 0 0-28.330666 14.293334l-171.989334 233.984-77.909333-106.026667a35.2 35.2 0 0 0-28.330667-14.293333H307.413333c-7.082667 0-11.264 7.936-7.082666 13.653333l136.32 185.472a35.2 35.2 0 0 0 56.533333 0l230.4-313.429333a8.533333 8.533333 0 0 0-6.954667-13.653334z" fill="#FFFFFF"></path></svg>'
      }
    ]
  },
  {
    name: "表情图标",
    type: "expression",
    list: [
      {
        name: "1",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1026 1024"><path d="M1.097856 1.097642h1021.804717v1021.804716H1.097856z" fill="#F09495" ></path><path d="M1024.000214 1024H0.000214V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.195498v1019.609432z" fill="#FFFFFF" ></path><path d="M234.695985 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" ></path><path d="M234.695985 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115s28.339115 12.772559 28.339115 28.339115c0.099786 15.666342-12.672773 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617-11.774703-26.243617-26.243617-26.243617z" fill="#FFFFFF" ></path><path d="M776.232528 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" ></path><path d="M776.232528 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115 15.666342 0 28.339115 12.772559 28.339115 28.339115 0 15.666342-12.772559 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617c-0.099786-14.468914-11.874488-26.243617-26.243617-26.243617z" fill="#FFFFFF" ></path><path d="M512.000214 671.656987c-52.58702 0-105.872539-17.961411-105.872539-52.387449S459.413194 566.882089 512.000214 566.882089s105.872539 17.961411 105.87254 52.387449S564.587234 671.656987 512.000214 671.656987z m0-74.240499c-21.952836 0-43.207172 3.592282-58.2748 9.77899-13.870201 5.68778-17.06334 11.275775-17.06334 12.07406s3.19314 6.386279 17.06334 12.07406c15.067628 6.186708 36.321965 9.77899 58.2748 9.77899s43.207172-3.592282 58.274801-9.77899c13.870201-5.68778 17.06334-11.275775 17.06334-12.07406s-3.19314-6.386279-17.06334-12.07406c-15.067628-6.286494-36.321965-9.77899-58.274801-9.77899z" fill="#040000" ></path></svg>'
      },
      {
        name: "2",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M0 0h1024v1024H0z" fill="#E6A6C9" ></path><path d="M315.1 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM738.7 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM293.5 698.8l-14.5-1.3c0.1-0.6 1.5-14.6 15.1-27.9 17.2-16.7 45-24.8 82.7-24 4.9-0.1 10.9-10.5 16.1-19.6 8.4-14.7 19-33.1 37.9-34.3 19.4-1.2 42.2 16.4 71.5 55.4 9.9 5.2 16.5 11.2 21.8 16.1 8.4 7.7 13.1 11.9 25.1 10.8 14.9-1.4 38.9-11.1 77.5-31.4 26.8-28.4 56.4-41.4 83.5-36.6 27.9 4.9 50.6 27.6 67.5 67.5l-13.4 5.7c-14.7-34.5-34.3-54.9-56.7-58.8-22.3-3.9-47.6 7.8-71.2 33.1l-0.8 0.9-1.1 0.6c-85.6 45.1-99.4 38-120.2 19.1-5.5-5-11.2-10.2-20.1-14.7l-1.5-0.8-1-1.4c-32.2-43.2-50.4-51.6-60-51-11.1 0.7-18.8 14-26.2 27-7.6 13.2-15.4 26.9-28.8 26.9h-0.2c-78.4-1.6-83 38.3-83 38.7z" fill="#040000" ></path></svg>'
      },
      {
        name: "3",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1026 1024" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#F7E983" ></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" ></path><path d="M329.174412 344.491728a38.118106 10.277919 57.6 1 0 17.355867-11.014369 38.118106 10.277919 57.6 1 0-17.355867 11.014369Z" fill="#040000" ></path><path d="M644.769475 355.956059a11.175989 36.321965 30 1 0 36.321965-62.911488 11.175989 36.321965 30 1 0-36.321965 62.911488Z" fill="#040000" ></path><path d="M569.678445 671.158059c-26.343403 0-51.190021-5.288638-70.049503-14.967843-20.755408-10.577275-32.230754-25.445332-32.230755-41.710388 0-16.265056 11.475346-31.133112 32.230755-41.710387 18.859482-9.579419 43.805886-14.967843 70.049503-14.967843s51.190021 5.288638 70.049503 14.967843c20.755408 10.577275 32.230754 25.445332 32.230754 41.710387 0 16.265056-11.475346 31.133112-32.230754 41.710388-18.859482 9.679205-43.805886 14.967843-70.049503 14.967843z m0-95.095693c-49.693237 0-84.318846 20.356266-84.318846 38.517248s34.625609 38.517248 84.318846 38.517248 84.318846-20.356266 84.318846-38.517248-34.725395-38.517248-84.318846-38.517248z" fill="#040000" ></path></svg>'
      },
      {
        name: "4",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1026 1024" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#A6D9E2" ></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" ></path><path d="M376.194134 348.950302m-23.44962 0a23.44962 23.44962 0 1 0 46.89924 0 23.44962 23.44962 0 1 0-46.89924 0Z" fill="#040000" ></path><path d="M629.150672 348.950302m-24.647047 0a24.647047 24.647047 0 1 0 49.294095 0 24.647047 24.647047 0 1 0-49.294095 0Z" fill="#040000" ></path><path d="M397.847613 603.503411c13.471058 8.282206 28.738258 14.468914 43.7061 19.458195 29.835899 9.978562 62.266225 14.169558 93.299551 7.483921 21.054765-4.490353 40.213604-14.369129 56.778016-28.039758 6.785422-5.587995-2.893783-15.167414-9.579419-9.579419-46.999026 38.916391-112.258819 31.033327-163.847983 6.086922-4.590138-2.195284-9.080491-4.490353-13.371272-7.184564-7.583707-4.590138-14.468914 7.184564-6.984993 11.774703z" fill="#040000" ></path><path d="M627.753674 534.052621c-31.033327 24.048334-58.474371 68.253362-37.419607 106.970182 10.577275 19.35841 29.835899 32.629897 48.795167 42.708244 7.982849 4.190996 15.067628-7.883064 7.084779-12.07406-25.245761-13.271487-53.485091-35.324108-49.094524-66.557006 2.793997-20.156695 15.766127-37.319821 29.736114-51.190022 3.392711-3.392711 6.984993-6.785422 10.776847-9.77899 2.993569-2.295069 2.394855-7.483921 0-9.878776-2.893783-3.19314-6.885208-2.49464-9.878776-0.199572z" fill="#040000" ></path></svg>'
      },
      {
        name: "5",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1026 1024" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#AD6F59" ></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" ></path><path d="M411.829832 330.730879a38.118106 10.277919 57.6 1 0 17.355867-11.014368 38.118106 10.277919 57.6 1 0-17.355867 11.014368Z" fill="#040000" ></path><path d="M480.669675 609.989476c11.774703-25.844475 27.740401-51.788735 44.60417-73.342429 13.770415-17.462483 29.237186-33.92711 47.897096-44.803742 17.262912-10.078347 35.324108-13.67063 54.283376-6.58585 11.974274 4.390567 23.948548 14.468914 33.128825 24.547261 14.369129 15.865913 25.145975 34.625609 34.725394 53.684662 4.290782 8.581563 17.262912 0.997856 12.972131-7.583707-15.167414-30.334828-35.224323-63.763009-66.157864-80.327421-21.054765-11.37556-44.504385-11.475346-66.157864-1.895927-21.054765 9.280062-38.617034 25.644904-53.485091 42.907815-14.468914 16.863769-27.041902 35.324108-38.217891 54.582733-5.887351 10.178133-11.674917 20.555837-16.464627 31.232898-1.696355 3.692068-0.997856 7.982849 2.694212 10.277918 3.19314 1.895927 8.581563 0.898071 10.178133-2.694211z" fill="#040000" ></path><path d="M663.863649 338.091735a14.468914 33.727538 30 1 0 33.727538-58.417811 14.468914 33.727538 30 1 0-33.727538 58.417811Z" fill="#040000" ></path></svg>'
      },
      {
        name: "6",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#83CEE3" ></path><path d="M369 375.8m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" ></path><path d="M369 411.7c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z m0-69.1c-18.3 0-33.2 14.9-33.2 33.2S350.7 409 369 409s33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" ></path><path d="M672.2 333.6c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.3-7.6-13zM578.2 720.9c-12.5-96.7-33.3-154.7-55.6-155.6-8.8 3.9-22.3 17.5-37.7 60.1-10.8 29.8-18.4 62.2-23 81.6-1.2 5.1-2.1 9.1-2.9 11.8l-9.3-2.4c0.7-2.6 1.6-6.6 2.8-11.6 14.9-63 36-136.8 67.5-148.8l0.8-0.3h0.8c18.2-0.4 33.2 19.5 45.8 60.8 10.2 33.3 16.7 74.6 20.5 103.3l-9.7 1.1z" fill="#040000" ></path></svg>'
      },
      {
        name: "7",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#8CC66D" ></path><path d="M375.778679 404.47473a14.5 33.8 30 1 0 33.8-58.543317 14.5 33.8 30 1 0-33.8 58.543317Z" fill="#040000" ></path><path d="M627.220263 374.211388a43.1 11.6 57.6 1 0 19.588408-12.431182 43.1 11.6 57.6 1 0-19.588408 12.431182Z" fill="#040000" ></path><path d="M451.1 548.5c17.6-9.3 63.9-30 105.3-16.2 17 20.3 32.7 98.8 28.8 138.1-27.5 10.2-82.5 10.2-106.1 5.8-8.3-10.5-32.7-81.8-35.3-114.6-0.4-5.5 2.5-10.6 7.3-13.1z" fill="#040000" ></path></svg>'
      },
      {
        name: "8",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#5A74B8" ></path><path d="M357.7 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" ></path><path d="M357.7 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2 33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" ></path><path d="M676 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" ></path><path d="M676 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2c18.3 0 33.2-14.9 33.2-33.2s-14.9-33.2-33.2-33.2z" fill="#FFFFFF" ></path><path d="M347.6 684.1c0.3-0.9 0.6-1.7 0.9-2.6 0.2-0.5 1.4-3.2 0.3-0.8 0.6-1.4 1.3-2.9 2-4.3 3.2-6.3 6-10.7 10.9-15.3 4.3-4 10.8-7.5 17.1-6.1 3.9 0.9 7.9 4.9 11.1 7.2 3.1 2.2 6.3 4.5 9.7 6.2 7.5 3.8 15.3 4.4 23.4 1.9 4.7-1.5 9.2-3.6 13.6-5.9 5-2.6 10.7-5 14.2-9.5 4.5-5.7 6.1-8.5 11.4-14.1 1-1 2-2 3.1-3 0.2-0.2 2.2-1.7 0.6-0.5 0.6-0.4 1.2-0.9 1.8-1.3 1-0.6 2.1-1.3 3.2-1.7-2 0.8 0.2 0 0.6-0.1 2.3-0.7-0.3-0.2 1.2-0.3 2.8-0.1 3.6 0 5.5 1 3.8 1.9 6.6 4.7 9.5 7.8 4.5 5 7.5 11.1 11.7 16.2 1.8 2.2 3.7 4.3 5.4 6.5 8.1 10.3 17.7 22.2 32.2 22 8.8-0.1 16.6-5.2 22.6-11.2 4.2-4.1 7.7-8.9 11-13.7 2.9-4.2 4.6-9.9 6.2-13.5 3.2-7.1 7.2-13.1 13-18.1 4.8-4.2 11.1-6.5 16.7-5.3 10.5 2.4 17.2 12.1 23.1 20.2 4.7 6.5 9.8 13 16 18.2 7.8 6.4 17.1 11.4 27.5 11.1 14.1-0.4 25.5-9.5 34.2-19.9 3-3.6 3.6-8.8 0-12.4-3.1-3.1-9.4-3.7-12.4 0-6.3 7.6-14.7 15.9-24.9 14.7-2.2-0.3-5.3-1.5-7.9-3.1-3.5-2.1-6.1-4.4-9.1-7.5-4.9-5.1-6.8-8.1-10.9-13.8-7.3-10.1-16.1-19.6-28.2-23.7-18.5-6.3-35.7 5.6-46 20.1-2.4 3.3-4.4 6.9-6.1 10.6-1.8 3.9-2.7 8.5-5.2 11.9-3.1 4.4-6.2 8.8-10.2 12.5-3 2.8-5.7 4.4-8.6 5.1-0.4 0.1-1.7 0.1 0.1 0h-2.2c2.1 0.1 0 0-0.5-0.1-0.7-0.2-1.4-0.4-2-0.6 1.8 0.7-1.8-1.1-2.4-1.5l-1.2-0.9c1.5 1.2-0.9-0.9-1.2-1.1-4.7-4.3-8.4-9.5-12.3-14.4-10.9-13.6-20.9-34-41-34.9-14.2-0.6-24.5 10.6-32.4 20.8-1.2 1.6-2.5 3.2-3.7 4.8-1.5 1.9 1.1-1.4-0.4 0.5-0.4 0.5-0.8 1.2-1.3 1.6-1.7 1.4-4.6 2.6-6.6 3.6-2.9 1.6-5.9 3.2-9 4.5-1.6 0.7-3.4 1.2-5.1 1.7-2.2 0.6-0.7 0.5-2.8 0.4-2.8 0-3.9-0.4-6.6-1.9-3.9-2.2-7.5-4.9-11.1-7.5-5.6-4-10-6.9-17-7.5-10.5-0.9-20.3 3.2-28.2 9.9-9.4 8.1-16.4 20.2-20.1 32-3.6 11.2 13.3 15.8 16.8 5.1z" fill="#040000" ></path></svg>'
      },
      {
        name: "9",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F0884F" ></path><path d="M287.2 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM598 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM505.9 527.1c3.4 0.7 6.8 1.7 10.2 2.8 6.7 2.2 10.4 3.5 16.6 7.7 1.6 1.1-0.5-0.5 0.6 0.5 0.6 0.5 1.1 1.1 1.7 1.6 1.5 1.4-0.1-0.4 0.5 0.6 0.4 0.6 0.7 1.2 1 1.8-1-2 0.1 0 0 0.5 0.1-2-0.1 0-0.1 0-0.1 0.8 0 0.7 0.1-0.5-0.1 0.4-0.1 0.7-0.3 1.1-0.6 1 0.7-0.9-0.4 1-1.6 2.5-4.6 5.4-8.1 7.8-6.8 4.6-14.4 8.2-22 11.4-7 3-7.4 11.9 0 14.8 7.4 2.8 15 5.3 22.4 8.1 3.1 1.1 4.2 1.5 6.9 2.9 1.1 0.6 2.1 1.2 3.2 1.8 1.2 0.8-0.7-0.5 0.1 0 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.8-1.1-1.2-0.2-0.2 0.8 0.9-0.3-1.4-0.1-0.2 0.1 0.9 0.2-1.9 0-0.9-0.1 0.5-0.8 1.8 0 0.2-0.2 0.5-0.5 1-0.8 1.4-0.3 0.3-0.9 1.3-0.3 0.5-0.5 0.7-1.1 1.3-1.7 1.9-6.9 7.3-15.9 12.8-24.4 18.1-8.3 5.3-0.6 18.5 7.7 13.2 9.9-6.3 20.9-12.8 28.6-21.8 4.8-5.5 8.1-12.9 4.2-19.9-3.4-6-10.5-8.9-16.6-11.4-8.6-3.5-17.5-6.2-26.2-9.5v14.8c14.4-6.1 47.2-18.8 41.2-40.3-3.5-12.9-19.4-18.9-30.8-22.6-3.4-1.1-6.9-2.1-10.5-2.9-9.1-2.2-13.3 12.5-3.6 14.6z" fill="#040000" ></path></svg>'
      },
      {
        name: "10",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F6F180" ></path><path d="M342.9 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" ></path><path d="M342.9 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.7 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.6-28.3-28.3-28.3z" fill="#FFFFFF" ></path><path d="M702 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" ></path><path d="M702 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.7-28.3-28.3-28.3z" fill="#FFFFFF" ></path><path d="M358.7 519.9c20 22 45.5 40.4 71.3 54.8 51.2 28.5 111.7 39.9 168 19.5 44.3-16.1 80.7-47.8 110.2-83.9 3-3.7 3.6-8.9 0-12.5-3.1-3.1-9.5-3.7-12.5 0-25.5 31.4-56.2 59.7-93.7 76-27.1 11.7-56.6 15.7-85.8 12.2-24.7-2.9-49.5-11.8-71.5-23.4-18.7-9.8-36.6-22.2-51.1-34.3-7.8-6.5-15.5-13.3-22.4-20.9-7.7-8.5-20.1 4.1-12.5 12.5z" ></path></svg>'
      },
      {
        name: "11",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M48.2 844.9c-68.5-210.6 186-782.1 409.1-795.4 6.3-0.4 12.5 0.2 18.6 1.6C665.1 94.6 985.4 515 987.1 821.3c0.1 20-12.9 37.9-22.4 43.1-162.7 89.8-605.8 179.7-884.4 30.9-15-7.9-24.2-26.1-32.1-50.4z" fill="#F0884F" ></path><path d="M401 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" ></path><path d="M408.7 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" ></path><path d="M527.5 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" ></path><path d="M527.5 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" ></path><path d="M450.7 517c1.1-8.2 3.2-16.4 6.1-24.1 0.1-0.3 1-2.5 0.5-1.4s0.3-0.7 0.5-1c0.7-1.4 1.4-2.8 2.2-4.1 0.4-0.8 2.8-3.9 1.3-2.1 0.8-1 1.7-1.9 2.6-2.8 1-1-1.5 1 0.1 0 0.5-0.3 1-0.6 1.5-0.8-1.3 0.7-1.2 0.3 0 0.1 1.9-0.3-1.8 0.3 0.1 0 1.2-0.2 1.5 0.3 0-0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.3 0.1-1.3-0.7 0.2 0.1 0.8 0.5 1.6 0.9 2.4 1.4 1.4 1 0-0.1 1.4 1.1 0.9 0.8 1.8 1.7 2.6 2.6 1.8 1.9 3.5 3.9 5 6.1 5.1 7.1 9.3 14.8 13.2 22.6 3.5 6.9 13.7 4.7 15.8-2.1 2.6-8.7 4.8-17.4 7.4-26.1 0.9-3.2 1.9-6.4 3.2-9.4-0.7 1.6 0.8-1.6 1.2-2.2l0.9-1.5c0.7-1.2-1.4 0.7 0.1-0.1 1.7-0.9-1.2 0.3-0.3 0.1 0.8-0.2 1-1.2 0.3-0.3-0.6 0.8 0.6 0-0.5 0.2-2 0.3 2.4 0.5-1.1 0 0.5 0.1 1.2 0.2 1.6 0.4-1.1-0.8-0.8-0.4 0.2 0.2 0.7 0.4 3.4 2.3 2.7 1.8 8.9 7.1 15.9 16.9 22.5 26 2.8 3.8 7.5 5.6 11.8 3.1 3.7-2.2 5.9-8 3.1-11.8-8.2-11.1-16.6-23-27.7-31.4-6.3-4.7-14.5-7.6-21.7-3-6.7 4.2-9.6 12.5-11.9 19.6-3.2 9.9-5.5 20-8.6 29.9 5.3-0.7 10.5-1.4 15.8-2.1-7.8-15.5-24.8-50.1-48-41.7-14.1 5.1-19.7 23-22.9 36.2-0.9 3.8-1.8 7.7-2.3 11.6-0.6 4.6 1.1 9.3 6 10.6 4.2 1 10.2-1.5 10.8-6.1z" fill="#040000" ></path></svg>'
      },
      {
        name: "12",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M485.538528 993.072489a362.00362 481.804818 3.149 1 0 52.933731-962.15464 362.00362 481.804818 3.149 1 0-52.933731 962.15464Z" fill="#AADCF0" ></path><path d="M688.2 334.1c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.4-7.6-13zM375.8 347c13.4 6.8 26.7 14 39.5 21.9 1.8 1.2 3.7 2.3 5.5 3.5 0.9 0.6 1.7 1.2 2.6 1.8 0.9 0.6 1.9 1.4 1.6 1.1 1.1 0.9 2.1 1.9 3.1 2.8 1.2 1 0-0.3 0.1 0 0-0.2-0.8-2.4-0.3-4.1 1.5-5.5 2.3-2.7 0.8-2-0.4 0.2-0.9 0.8-1.3 1.1 1.7-1.4-1.6 1.1-2.3 1.6-3.4 2.3-6.9 4.4-10.4 6.4-14.9 8.6-30.3 16.4-45.6 24.3-8.6 4.4-1 17.4 7.6 13 15-7.7 30.1-15.4 44.8-23.8 6.2-3.6 13.8-7.3 18.7-12.7 7.6-8.3-3.8-16.6-9.9-20.9-8.7-6.1-18-11.3-27.3-16.4-6.5-3.6-13-7.1-19.6-10.4-8.6-4.5-16.3 8.5-7.6 12.8zM412.8 570.9c13.5 7.7 28.5 13.3 43.3 17.9 29.8 9.2 61.7 13.1 92.6 7.3 20.6-3.9 40-12.5 56.6-25.2 2.8-2.2 4.3-5.6 2.3-9-1.6-2.8-6.2-4.5-9-2.3-48.3 36.9-113.3 30-165.6 6.7-4.6-2.1-9.2-4.2-13.7-6.7-7.3-4.2-13.9 7.2-6.5 11.3z" fill="#040000" ></path><path d="M644.6 505.2c-30.1 21.5-60.6 62.5-39.1 99.8 10.7 18.6 30.3 30.9 49.1 40.1 7.8 3.8 14.6-7.9 6.8-11.7-23.6-11.5-53.7-31.4-49.4-60.9 2.8-18.9 15.8-34.6 29.5-47.2 2.5-2.3 5.1-4.6 7.8-6.7 0.5-0.4 0.9-0.7 1.4-1.1-0.4 0.3-1.2 0.9-0.1 0.1l0.9-0.6c6.9-5.1 0.2-16.8-6.9-11.8z" fill="#040000" ></path></svg>'
      },
      {
        name: "13",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M235.1 76.9c75.6-26.5 297.3-90.1 514.2-16.6 16.3 5.5 29.8 17.4 37.1 33 57.5 122.4 127.1 602.1 62.1 785.6a62.58 62.58 0 0 1-32.5 35.8c-109.5 51.8-428.1 136.7-609.3 37.2-14.4-7.9-25-21.3-29.7-37.1-41.9-140.6-37-627.7 19.1-798 6.1-18.7 20.5-33.4 39-39.9z" fill="#F9DABD" ></path><path d="M392.2 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" ></path><path d="M618.6 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" ></path><path d="M512 562.6c-36 0-65.3-29.3-65.3-65.3S476 432 512 432s65.3 29.3 65.3 65.3-29.3 65.3-65.3 65.3z m0-122.9c-31.7 0-57.6 25.8-57.6 57.6s25.8 57.6 57.6 57.6c31.7 0 57.6-25.8 57.6-57.6s-25.9-57.6-57.6-57.6z" fill="#040000" ></path></svg>'
      },
      {
        name: "14",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M178.1 971.5c38.1 15.9 98.7 26.6 171.3-12.3 3.7-2 8.4-1.6 11.6 1.1 43.3 35.9 123.3 80.8 236 10.9 3.8-2.4 8.7-2.4 12.6-0.2 41.8 23.9 191.6 58.2 246.6 14.2 4.4-3.5 9.1-6.6 14.5-8.5C1065 909.5 678.2-652 194.3 351c-37.5 77.8-38.4 94.1-71.9 211.3-27.6 96.3-29.1 231.3 1.4 348.1 7.2 27.3 27.3 49.9 54.3 61.1z" fill="#ABAAAA" ></path><path d="M468.9 349H418c-6.1 0-11.1-5-11.1-11.1V336c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.1-5 11.1-11.1 11.1zM643 471.9H390c-6.6 0-12-5.4-12-12s5.4-12 12-12h253c6.6 0 12 5.4 12 12s-5.4 12-12 12zM609 349h-61.2c-6 0-11-4.9-11-11v-2.1c0-6 4.9-11 11-11H609c6 0 11 4.9 11 11v2.1c0 6.1-4.9 11-11 11z" fill="#040000" ></path></svg>'
      },
      {
        name: "15",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M673.1 318.7c3.7-17.5 5.6-35.7 5.6-54.4 0-137.9-105.5-249.7-235.6-249.7S207.4 126.4 207.4 264.3c0 55.4 17.1 106.7 45.9 148.1-55.2 63.3-88.6 145.9-88.6 236.3 0 199.2 162.1 360.6 362.1 360.6 200 0 362.1-161.5 362.1-360.6 0.1-147.3-88.7-274-215.8-330z" fill="#4F8A54" ></path><path d="M392 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" ></path><path d="M386 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" ></path><path d="M505.6 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" ></path><path d="M501.4 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" ></path><path d="M474.3 364.8h-50.9c-6.1 0-11.1-5-11.1-11.1v-1.9c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.2-5 11.1-11.1 11.1z" fill="#040000" ></path></svg>'
      },
      {
        name: "16",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M246.4 227.6c-166.9 101.1-461.9 344 87 564.1 1.5 0.6 2.9 1.1 4.4 1.6 80.7 27.7 392.8 165.4 641-198.1 40-58.6 38.5-136.2-3.7-193.3C892 289.5 727 201.1 429.1 182.7c-64.1-4-127.8 11.6-182.7 44.9z" fill="#CF92BE" ></path><path d="M617.1 393.4c-17.4 8.8-34.9 18.1-51.2 28.9-6.9 4.6-20.3 12.3-17.4 22.6 1.2 4.3 5.6 7 9 9.5 3.7 2.7 7.6 5 11.5 7.3 18.2 10.8 37.1 20.3 55.9 30 10 5.1 18.9-10 8.8-15.1-16.4-8.4-32.9-16.9-49-26-4.5-2.6-9.1-5.2-13.5-8l-4.5-3c-0.7-0.5-1.3-1-2-1.5 1.6 1.2 0.7 0.4-0.2-0.2-1.3-0.9-0.3-0.9-0.5-0.3 0.2 0.2 0.4 0.5 0.6 0.7 1 1.9 1.3 3.7 0.8 5.7 0.1-0.6 0.7-1.4-0.6 1.3 0.7-1.5-0.1 0-0.2 0.1 0.6-0.6 1.2-1.3 1.9-1.9l1.8-1.5c1.8-1.6-0.6 0.3 1.2-0.9 2-1.5 4.1-2.9 6.2-4.3 10-6.5 20.4-12.4 30.9-18 6.5-3.5 13.1-7 19.7-10.4 9.6-5 0.8-20.1-9.2-15zM323.1 408.5c15.9 8.1 31.7 16.5 46.8 26 2.2 1.4 4.3 2.8 6.5 4.2 1 0.7 1.9 1.3 2.8 2 0.5 0.3 1 0.7 1.4 1.1-1.1-0.9-0.3-0.3 0.3 0.3 1.1 1 2.2 2.2 3.3 3.1 1.4 1.1-1-1.7-0.1-0.1-0.6-1.1-0.9-4.1 0.3-6.7 2.2-4.8 0.7 0.1 0-0.5 0 0-1.1 0.9-1.3 1 2.3-1.9 0 0-0.5 0.4-0.8 0.5-1.5 1.1-2.3 1.6-4 2.7-8.1 5.1-12.3 7.5-17.3 10-35.1 19.1-52.8 28.2-10 5.1-1.2 20.2 8.8 15.1 17.5-9 35-17.9 52-27.7 7.3-4.2 15.9-8.6 21.8-14.7 9.3-9.7-4.3-19.7-11.5-24.7-10.1-7.1-20.9-13.1-31.7-19-7.6-4.2-15.2-8.2-22.9-12.1-9.7-5.2-18.6 9.9-8.6 15zM513 592.1c-12.2 0-24.6-1.4-36.3-4.3-8-2-13.9-8.2-15.4-16.2s1.7-15.8 8.4-20.5c23.2-16.3 60.5-31.9 106.2-13 6.4 2.6 11 8.3 12.3 15.1 1.3 6.7-0.8 13.6-5.7 18.3-13.5 13.1-40.9 20.6-69.5 20.6z m-37.4-32.5c-3.4 2.4-4.9 6.2-4.2 10.2 0.8 4.1 3.6 7.1 7.7 8.1 39.1 9.7 81.2 0.7 96.1-13.7 2.4-2.3 3.4-5.6 2.7-8.9-0.7-3.4-2.9-6.2-6.1-7.5-41.2-17.2-75.1-3.1-96.2 11.8z" fill="#040000" ></path></svg>'
      },
      {
        name: "17",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M1008.6 465.7c0-124.9-95.5-226.2-213.4-226.2-12 0-23.8 1.1-35.2 3.1v-3.1c0-124.9-95.5-226.2-213.4-226.2S333.4 114.6 333.4 239.5c0 2.4 0 4.8 0.1 7.2-17.1-4.7-35-7.2-53.4-7.2-117.8 0-213.4 101.3-213.4 226.2 0 92.1 51.9 171.3 126.3 206.6-13.7 29.9-21.4 63.4-21.4 98.8 0 124.9 95.5 226.2 213.4 226.2 68.8 0 130-34.5 169-88.1 39 53.6 100.2 88.1 169 88.1 117.8 0 213.4-101.3 213.4-226.2 0-41.2-10.4-79.9-28.6-113.1 60.5-39.9 100.8-111.1 100.8-192.3z" fill="#8CC66D" ></path><path d="M437.8 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" ></path><path d="M649.7 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" ></path><path d="M527.3 625.9c6.3-14.2 13.1-28.3 17.9-43 6.2-19 8.3-38.6 10.5-58.3l2.1-19.2c0.7-6.2-9-6.1-9.7 0-1.7 16.3-2.8 32.8-5.7 48.9-4.2 23.7-13.8 45-23.5 66.7-2.5 5.6 5.9 10.5 8.4 4.9z" fill="#252525" ></path><path d="M447.7 522.3c20.3-0.1 40.6-0.2 61-0.4l96.6-0.6c7.5 0 14.9-0.1 22.4-0.1 16.6-0.1 16.7-25.9 0-25.8-20.3 0.1-40.6 0.2-61 0.4l-96.6 0.6c-7.5 0-14.9 0.1-22.4 0.1-16.6 0.1-16.7 25.9 0 25.8z" fill="#040000" ></path><path d="M495.4 508.2c-10.3 3.8-9.2 20.9-9.2 29.5 0.1 16 2.1 32.3 6.1 47.8 3.5 13.7 8.7 29.9 20.6 38.7 12.9 9.5 27.6 2.1 37.6-7.9 10.2-10.3 17.8-23 24.7-35.6 11.6-21.3 20.9-43.8 29.7-66.4 3-7.8-9.5-11.1-12.5-3.4-7.4 19.1-15.3 38.1-24.7 56.4-5.9 11.5-12.2 23-20.3 33.1-2.8 3.5-5.8 6.9-9.2 9.8-1.9 1.7-1.4 1.3-3.3 2.5-1.3 0.8-2.6 1.6-3.9 2.2-0.7 0.3 1-0.2-0.8 0.3-0.6 0.2-1.2 0.3-1.8 0.5-1.1 0.3-1.2 0.2-0.5 0.1-0.6 0-1.3 0-1.9 0.1-2.2 0.1 0.6 0.5-1.8-0.2l-1.8-0.6c1.5 0.5 0.2 0.1-0.5-0.3-0.8-0.5-2.9-2.1-1.7-1.1-1-0.9-2-1.7-2.8-2.7-0.4-0.5-0.9-1-1.3-1.5 0.4 0.5 0.1 0.2-0.5-0.7-0.8-1.3-1.7-2.5-2.4-3.9-0.7-1.3-1.4-2.5-2-3.8-0.4-0.8-0.8-1.6-1.1-2.4-0.1-0.2-0.5-1.1 0 0l-0.6-1.5a86.8 86.8 0 0 1-3.3-9.8c-4.4-14.9-6.2-27.9-6.8-42.8-0.3-6.6-0.3-13.1 0.4-19.7 0.2-1.5-0.3 1.5 0.1-0.5l0.3-1.8c0.2-0.9 0.5-1.8 0.7-2.8 0.4-1.9-0.7 1.1 0.3-0.7 0.5-1-1.3 1.2-0.3 0.5-0.3 0.3-1.1 0.8-2 1.1 7.7-2.9 4.3-15.4-3.5-12.5z" fill="#040000" ></path></svg>'
      },
      {
        name: "18",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M75.4 739.8c-78.7-134.4-194-455.7 401.4-579.6 9.8-2 19.2-6.2 29.2-7.5C656.8 133 947.3 205 1000.1 578.4c42.6 223.8 29.7 392.1-822 233.6-43.1-8-80.6-34.4-102.7-72.2z" fill="#F09495" ></path><path d="M704.6 875.4c-129 0-301.8-20.5-526.6-62.3-43.5-8.1-81.2-34.6-103.5-72.7-19.3-32.9-44.8-84.3-57.1-142.5-13.9-65.1-8.8-125.3 15.1-179.2 54.3-122.3 203.7-209.6 444-259.6 4.1-0.9 8.3-2.1 12.3-3.4 5.5-1.7 11.1-3.4 16.9-4.2 29-3.8 75.7-5.9 133.8 5.7 54.5 10.9 105.3 31 150.8 59.9C843.7 251 888.2 296 922.7 351c39.7 63.1 66.1 139.6 78.5 227.3 8.1 42.4 15.2 87.3 12.5 127.9-2.8 42.6-16.4 75.5-41.5 100.7-42.5 42.7-120.3 65-237.8 68.1-9.6 0.2-19.6 0.4-29.8 0.4zM76.3 739.3c22 37.6 59.2 63.7 102.1 71.7 242.5 45.1 424.4 65.3 556.1 61.9 116.9-3.1 194.1-25.2 236.3-67.5 55.4-55.6 44.4-142.5 28.3-226.7C976 415.8 903.4 291.5 789.2 219c-124-78.7-248.1-69.9-283.2-65.3-5.6 0.7-11.2 2.4-16.6 4.1-4.1 1.2-8.3 2.5-12.5 3.4C237.3 211.1 88.5 298 34.5 419.6c-54.6 122.8 2.8 253 41.8 319.7z" fill="#FFFFFF" ></path><path d="M424.1 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" ></path><path d="M635.9 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" ></path><path d="M426.2 543.3c17.1 7.9 36.6 26 25.5 46.1-6.9 12.5-19.8 21.2-31.7 28.4-4.5 2.7-0.4 9.8 4.1 7.1 17.4-10.5 41.6-27.6 39-51.1-1.6-14-12.4-24.8-23.5-32.3-3-2-6.1-3.9-9.3-5.4-4.8-2.1-8.9 5-4.1 7.2zM629.5 535.4c-21.8 11.7-40.6 37-25.7 61.3 8.2 13.4 22.2 22.7 35.7 30.3 4.7 2.7 8.9-4.6 4.2-7.2-15.5-8.7-39.9-23.9-36.9-45.2 1.6-11.4 10.7-20.7 19.6-27.2 2.4-1.7 4.8-3.4 7.4-4.8 4.7-2.5 0.4-9.8-4.3-7.2z" fill="#040000" ></path><path d="M457.2 584.6c25.6 25.6 66.7 41 101.8 28.3 18.2-6.6 33.2-19.1 45.5-33.8 4.2-5.1-3-12.4-7.3-7.3-18.5 22-43.3 38.1-73 35-18.6-1.9-36.2-10.8-50.9-22-2.9-2.2-6.1-4.8-8.8-7.5-4.7-4.7-12 2.6-7.3 7.3z" fill="#040000" ></path></svg>'
      },
      {
        name: "19",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M915.9 510.5c8.4-19 13.1-39.8 13.1-61.7 0-90-78.9-162.9-176.2-162.9-3.2 0-6.3 0.1-9.5 0.2v-0.2c0-94.8-116.2-171.6-259.6-171.6S224 191.2 224 286v2c-96.2 0-174.1 72-174.1 160.9 0 38 14.3 73 38.2 100.5-41.8 29.4-68.8 75.9-68.8 128.2 0 88.9 78 160.9 174.1 160.9 17.1 0 33.6-2.3 49.3-6.5 28.9 46.1 88.7 77.7 157.6 77.7 49.4 0 94-16.2 126-42.3 32 26.1 76.6 42.3 126 42.3 77.3 0 143-39.7 166.7-95 3.1 0.2 6.3 0.2 9.5 0.2 97.3 0 176.2-72.9 176.2-162.9 0-60.6-35.7-113.4-88.8-141.5z" fill="#5A74B8" ></path><path d="M357.6 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" ></path><path d="M357.5 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" ></path><path d="M531.3 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" ></path><path d="M531.2 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" ></path><path d="M426.7 574.6c20.9 29.9 59.7 52.2 96.2 38.6 19.2-7.2 34.7-21.2 47.6-36.9 2.8-3.5 3.4-8.3 0-11.7-2.9-2.9-8.9-3.5-11.7 0-16.5 20.2-40.9 40.9-68.1 35.5-17.3-3.4-31-13.2-42.9-25.9-2-2.2-3.9-4.4-5.8-6.7-1.6-1.9 1.1 1.5-0.4-0.6-0.2-0.2-0.3-0.5-0.5-0.7-6.2-8.7-20.6-0.4-14.4 8.4z" fill="#040000" ></path></svg>'
      },
      {
        name: "20",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" ><path d="M792.8 301.4c-8.2 0-16.2 0.4-24.2 1.3-12.3-81.8-129.2-145.9-271.8-145.9-137.1 0-250.5 59.3-269.9 136.6C105.3 295.5 7.4 391.2 7.4 508.9c0 119.1 100.2 215.6 223.7 215.6 5.3 0 10.6-0.2 15.8-0.5 14.4 80.5 130.4 143.2 271.3 143.2 135.9 0 248.6-58.3 269.4-134.6 1.7 0 3.4 0.1 5.1 0.1 123.6 0 223.7-96.5 223.7-215.6s-100-215.7-223.6-215.7z" fill="#F6CD50" ></path><path d="M435.9 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" ></path><path d="M588.1 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" ></path><path d="M435.9 431.5m-27.8 0a27.8 27.8 0 1 0 55.6 0 27.8 27.8 0 1 0-55.6 0Z" fill="#040000" ></path><path d="M601.9 407.4c-5.7 2.9-11.3 5.9-16.9 9-6.8 3.8-15.3 7.8-20.5 13.8-5.6 6.5 1.6 11.1 6.7 14.4 11.2 7.1 23.3 13 35.1 19 5.7 2.9 10.8-5.7 5.1-8.6-10.9-5.6-21.9-11.1-32.4-17.4-2.4-1.4-4.6-3.1-7-4.6 1 0.6-0.4-0.4-0.4-0.4-1.9-0.3-0.5 4.2 0.5 4.1-0.1 0-0.6 0.3 0.3-0.3 0.5-0.3 1-0.9 1.5-1.3 9.7-7.9 21.9-13.5 33.1-19.2 5.7-2.7 0.6-11.4-5.1-8.5zM406.6 547.6c11.5 14.4 27 26.7 42.7 36.3 32.2 19.8 71.2 27.2 107.6 15.4 29.5-9.6 54.6-29.1 75.5-51.6 10.8-11.6-6.6-29.1-17.5-17.5-9.4 10.1-19.5 19.7-30.8 27.7-4.6 3.2-9.3 6.2-14.2 8.9-5 2.8-9.9 5.1-14.1 6.7-4.6 1.7-9.3 3.2-14.1 4.4-2.2 0.5-4.4 1-6.6 1.4-1 0.2-2 0.3-2.9 0.5 2.6-0.4-2.1 0.2-2.5 0.3-4.1 0.4-8.3 0.5-12.5 0.4-2.2-0.1-4.4-0.2-6.6-0.4-1.1-0.1-2.2-0.2-3.2-0.3-1.5-0.2-1.4-0.2 0.1 0l-2.1-0.3c-7.8-1.3-15.4-3.4-22.8-6.2-0.9-0.4-1.8-0.7-2.8-1.1-3.1-1.2 2.3 1.1-0.7-0.3-1.5-0.7-2.9-1.3-4.4-2-3.7-1.8-7.2-3.7-10.8-5.8-5.7-3.4-11.1-7.1-16.4-11.1 3 2.3-1.1-0.9-1.8-1.5-1.1-0.9-2.1-1.7-3.1-2.6-2.1-1.8-4.2-3.7-6.3-5.6-4.4-4.1-8.7-8.4-12.4-13.1-4.2-5.2-13.1-4.3-17.5 0-5 5.1-4 12.2 0.2 17.4z" fill="#040000" ></path></svg>'
      }
    ]
  },
  {
    name: "标记图标",
    type: "sign",
    list: [
      {
        name: "1",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M809.728 429.696a18.901333 18.901333 0 0 0-15.274667-12.885333l-183.466666-26.624-81.92-166.272a18.901333 18.901333 0 0 0-34.005334 0l-81.92 166.272-183.594666 26.624a19.029333 19.029333 0 0 0-10.496 32.298666l132.693333 129.536-31.274667 182.741334a18.816 18.816 0 0 0 27.477334 19.84l164.138666-86.186667 164.096 86.058667a18.773333 18.773333 0 1 0 27.434667-19.84l-31.36-182.741334 132.693333-129.408a18.901333 18.901333 0 0 0 4.778667-19.413333z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "2",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M644.565333 306.901333c32.128 0 65.834667-5.76 101.077334-17.237333a17.066667 17.066667 0 0 1 22.357333 16.213333v328.32c-1.109333 0.768 10.325333 27.093333-99.370667 19.84-109.653333-7.210667-181.76-45.098667-246.869333-45.098666-65.152 0-49.322667 2.688-74.154667 8.405333v168.064a24.746667 24.746667 0 0 1-24.490666 25.258667 22.528 22.528 0 0 1-17.28-7.253334 24.149333 24.149333 0 0 1-7.168-18.005333V281.258667C299.776 280.490667 328.106667 256 421.76 256s164.437333 50.901333 222.805333 50.901333z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "3",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M524.074667 225.408l274.517333 274.517333a17.066667 17.066667 0 0 1 0 24.149334l-274.517333 274.517333a17.066667 17.066667 0 0 1-24.149334 0l-274.517333-274.517333a17.066667 17.066667 0 0 1 0-24.149334l274.517333-274.517333a17.066667 17.066667 0 0 1 24.149334 0z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "4",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M317.866667 300.8h388.266666c9.386667 0 17.066667 7.68 17.066667 17.066667v388.266666a17.066667 17.066667 0 0 1-17.066667 17.066667h-388.266666a17.066667 17.066667 0 0 1-17.066667-17.066667v-388.266666c0-9.386667 7.68-17.066667 17.066667-17.066667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "5",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M498.346667 279.082667L248.789333 701.44a15.829333 15.829333 0 0 0 13.653334 23.893333h499.114666a15.829333 15.829333 0 0 0 13.653334-23.893333l-249.6-422.357333a15.829333 15.829333 0 0 0-27.264 0z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "6",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path><path d="M634.538667 487.808L555.050667 426.24 507.306667 256a201.002667 201.002667 0 0 0-23.594667 20.394667l-0.256-0.256L525.653333 426.666667l-133.290666 59.946666a14.08 14.08 0 0 0-8.021334 15.957334l28.757334 126.378666a14.208 14.208 0 0 0 27.733333-6.229333l-26.24-115.114667 126.037333-56.704 76.416 59.136a14.250667 14.250667 0 0 0 19.968-2.474666 14.08 14.08 0 0 0-2.474666-19.797334z" fill="#6D768D"></path></svg>'
      },
      {
        name: "7",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "8",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M374.656 273.194667c5.973333 4.48 12.117333 9.6 18.346667 15.36 6.272 5.717333 11.904 12.373333 16.896 19.84 2.517333 4.010667 5.504 8.490667 9.002666 13.482666a529.493333 529.493333 0 0 1 20.266667 32.213334h155.221333a169.813333 169.813333 0 0 0 9.770667-15.744c2.474667-4.48 5.248-8.96 8.234667-13.482667a460.842667 460.842667 0 0 1 23.253333-31.829333c4.992-6.229333 12.245333-12.373333 21.76-18.346667a34.261333 34.261333 0 0 0 10.112-9.728 31.274667 31.274667 0 0 0 5.248-11.989333 18.56 18.56 0 0 0-1.536-11.605334 17.664 17.664 0 0 0-10.112-8.618666c-4.48-1.493333-8.362667-2.005333-11.605333-1.493334a46.933333 46.933333 0 0 0-9.770667 2.602667c-3.242667 1.28-6.613333 2.645333-10.112 4.138667a32.426667 32.426667 0 0 1-12.757333 2.261333 26.026667 26.026667 0 0 1-12.373334-2.645333 45.653333 45.653333 0 0 1-8.96-6.357334l-8.661333-7.850666a30.336 30.336 0 0 0-11.989333-6.4c-9.984-3.968-18.005333-4.693333-24.021334-2.218667-5.973333 2.474667-11.946667 6.485333-17.962666 11.946667a88.618667 88.618667 0 0 1-11.989334 10.496 7.338667 7.338667 0 0 1-3.754666 1.493333 46.165333 46.165333 0 0 1-8.277334-5.205333 71.808 71.808 0 0 1-7.125333-4.906667 37.973333 37.973333 0 0 1-6.4-6.357333c-3.968-3.968-9.941333-6.613333-17.92-7.850667a31.061333 31.061333 0 0 0-21.76 4.138667c-8.533333 5.461333-14.506667 10.069333-18.048 13.824a29.354667 29.354667 0 0 1-15.744 7.893333 23.978667 23.978667 0 0 1-13.098667-0.768 987.733333 987.733333 0 0 0-14.634666-4.48 80.725333 80.725333 0 0 0-14.250667-2.986667 16.768 16.768 0 0 0-11.989333 2.986667c-6.997333 5.461333-9.258667 12.074667-6.741334 19.84a34.56 34.56 0 0 0 13.482667 18.346667z" fill="#FFFFFF"></path><path d="M780.757333 545.152a219.306667 219.306667 0 0 0-19.882666-65.536 224.981333 224.981333 0 0 0-33.365334-49.792 430.336 430.336 0 0 0-37.12-37.12c-14.506667-11.946667-27.264-23.296-38.272-34.048a544.512 544.512 0 0 1-27.733333-28.842667 305.28 305.28 0 0 1-22.485333-26.197333h-168.746667c-6.485333 8.490667-13.994667 17.493333-22.485333 26.965333a360.96 360.96 0 0 1-26.24 28.074667c-10.538667 10.24-22.272 21.12-35.285334 32.597333a305.493333 305.493333 0 0 0-41.6 44.16 250.026667 250.026667 0 0 0-49.493333 117.589334 216.106667 216.106667 0 0 0 1.877333 70.4 220.586667 220.586667 0 0 0 75.349334 126.549333c21.248 18.005333 47.146667 32.597333 77.653333 43.818667 30.464 11.264 65.493333 16.853333 104.96 16.853333 38.528 0 72.874667-4.864 103.125333-14.592a265.045333 265.045333 0 0 0 78.378667-39.338667c21.973333-16.469333 39.594667-35.797333 52.864-58.026666 13.226667-22.186667 22.101333-45.824 26.624-70.784 4.992-30.421333 5.632-58.026667 1.877333-82.773334z" fill="#FFFFFF"></path><path d="M593.322667 647.509333a20.48 20.48 0 0 1-11.861334 3.2h-50.133333v14.165334c0 4.266667-1.792 8.362667-5.376 12.373333a15.914667 15.914667 0 0 1-13.952 5.333333 24.917333 24.917333 0 0 1-14.336-3.882666c-3.84-2.602667-5.973333-7.210667-6.4-13.824v-14.165334h-48.725333a17.792 17.792 0 0 1-11.818667-3.882666 10.24 10.24 0 0 1-3.968-9.6c0-4.266667 1.578667-7.68 4.693333-10.24a16.768 16.768 0 0 1 11.093334-3.925334h48.682666v-24.789333h-48.682666a15.573333 15.573333 0 0 1-11.52-4.266667 13.525333 13.525333 0 0 1-4.266667-9.941333 15.36 15.36 0 0 1 4.693333-10.624 14.72 14.72 0 0 1 11.093334-4.949333h48.682666l0.725334-14.890667a1053.568 1053.568 0 0 1-40.832-42.538667l-10.752-9.898666a41.216 41.216 0 0 1-6.442667-11.690667c-1.92-4.992-0.938667-10.069333 2.858667-15.274667a13.653333 13.653333 0 0 1 15.786666-3.84c6.186667 2.090667 11.221333 4.821333 15.018667 8.106667 1.92 2.389333 5.248 5.888 10.026667 10.666667l15.061333 14.848 19.328 19.157333 22.186667-20.565333a987.605333 987.605333 0 0 1 29.397333-25.514667 21.162667 21.162667 0 0 1 14.293333-5.674667c5.290667 0 9.557333 2.133333 12.928 6.4 6.186667 7.082667 3.84 15.36-7.168 24.789334a179.072 179.072 0 0 0-12.885333 12.373333c-5.76 5.973333-11.52 11.733333-17.194667 17.408-6.698667 7.082667-14.08 14.378667-22.186666 21.973333v13.44h46.506666c6.698667 0 11.605333 1.536 14.72 4.608a14.165333 14.165333 0 0 1 4.650667 10.282667c0 4.266667-1.450667 7.936-4.309333 11.008-2.858667 3.029333-7.637333 4.352-14.336 3.84l-46.506667 0.768-0.768 24.064h45.866667c13.354667 0 20.053333 4.992 20.053333 14.933333 0.469333 4.693333-0.853333 8.106667-3.925333 10.24z" fill="#6D768D"></path></svg>'
      },
      {
        name: "9",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M512 213.333333l234.666667 341.333334h-128v213.333333h-213.333334v-213.333333h-128L512 213.333333z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "10",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M533.333333 810.666667L298.666667 469.333333h128V256h213.333333v213.333333h128l-234.666667 341.333334z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "11",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M213.333333 533.333333L554.666667 298.666667v128h213.333333v213.333333h-213.333333v128l-341.333334-234.666667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "12",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M810.666667 533.333333L469.333333 768v-128H256v-213.333333h213.333333V298.666667l341.333334 234.666666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "13",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#6D768D"></path><path d="M571.349333 508.586667l162.389334-162.346667a44.330667 44.330667 0 1 0-62.72-62.72l-162.389334 162.389333-162.517333-162.389333a44.330667 44.330667 0 1 0-62.72 62.72l162.389333 162.389333-162.389333 162.474667a44.330667 44.330667 0 1 0 62.72 62.72l162.389333-162.346667 162.389334 162.389334a44.330667 44.330667 0 1 0 62.72-62.72l-162.261334-162.56z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "14",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C233.386667 0 0 225.877333 0 512s225.877333 512 512 512 512-225.877333 512-512S790.613333 0 512 0z" fill="#6D768D"></path><path d="M726.144 311.210667l-277.333333 305.066666-124.8-124.8c-13.866667-13.866667-41.6-13.866667-55.466667 0-13.866667 13.866667-13.866667 41.6 0 55.466667l159.445333 152.533333c13.866667 13.866667 41.6 13.866667 55.466667 0l305.066667-332.8c13.866667-13.866667 13.866667-41.6 0-55.466666-20.778667-13.866667-48.512-13.866667-62.378667 0z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "15",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M541.952 755.626667a40.618667 40.618667 0 0 1-29.824 12.373333 41.344 41.344 0 0 1-30.122667-12.373333 40.106667 40.106667 0 0 1-12.672-30.122667c0-11.605333 4.096-21.845333 12.672-30.122667a40.405333 40.405333 0 0 1 30.122667-12.714666c11.605333 0 21.546667 4.138667 29.824 12.714666a40.32 40.32 0 0 1 12.714667 30.122667c0 11.861333-4.096 21.76-12.714667 30.122667zM450.986667 241.28A77.866667 77.866667 0 0 1 512.256 213.333333c24.874667 0 45.354667 8.917333 61.354667 27.946667 15.488 18.432 23.722667 41.685333 23.722666 69.674667 0 23.765333-33.152 200.533333-44.672 329.045333h-80.128C463.146667 511.402667 426.666667 334.677333 426.666667 310.954667c0-27.392 8.277333-50.645333 24.32-69.674667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "16",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.794667 0 512 0z" fill="#6D768D"></path><path d="M490.666667 682.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m13.994666-490.752c61.397333 0 112.341333 14.634667 153.002667 43.946666 40.533333 29.269333 60.885333 72.618667 60.885333 130.133334 0 35.242667-12.373333 64.938667-29.952 89.045333-10.282667 14.677333-33.664 33.408-62.890666 56.192l-32.426667 22.357333c-15.701333 12.202667-29.696 26.453333-34.858667 42.666667-1.706667 5.546667-3.072 14.677333-3.968 24.533333-0.426667 4.949333-4.864 15.018667-15.232 15.018667h-83.328c-13.568 0-15.957333-10.581333-15.744-15.786667 1.493333-34.005333 4.608-64.213333 18.474667-80.469333 28.074667-32.896 91.904-73.813333 91.904-73.813333a104.106667 104.106667 0 0 0 23.552-24.021334c10.837333-14.933333 19.797333-31.317333 19.797333-49.237333 0-20.565333-6.016-39.338667-18.090666-56.32-12.032-16.938667-34.090667-25.386667-66.005334-25.386667-31.445333 0-53.76 10.410667-66.901333 31.274667-9.685333 15.445333-15.786667 29.610667-18.346667 45.013333-0.853333 5.461333-4.394667 16.981333-16.042666 16.981334H327.210667c-17.322667 0-21.12-11.221333-20.650667-16.64 6.272-68.138667 32.896-114.688 80-144.597334 32-20.565333 71.381333-30.890667 118.101333-30.890666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "17",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M336.256 410.026667H253.312a40.021333 40.021333 0 0 0-39.850667 43.264l23.296 278.101333c1.706667 20.693333 19.072 36.608 39.850667 36.608h59.648c11.050667 0 20.010667-8.96 20.010667-19.968v-318.037333a19.968 19.968 0 0 0-20.010667-19.968z m434.432 0h-178.944C653.312 182.314667 548.949333 170.666667 548.949333 170.666667c-44.288 0-35.114667 34.986667-38.442666 40.832 0 84.48-68.010667 155.093333-101.034667 184.362666a39.552 39.552 0 0 0-13.226667 29.653334v322.56c0 11.008 8.96 19.925333 20.010667 19.925333h233.728c30.378667 0 58.154667-17.152 71.68-44.373333 18.176-36.736 40.448-90.112 54.656-133.973334 13.781333-42.410667 26.24-94.976 33.578667-131.968a39.850667 39.850667 0 0 0-39.253334-47.658666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "18",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M796.16 413.909333c-31.146667-0.298667-115.626667-0.085333-146.858667-0.085333h-158.464c8.533333-7.68 15.914667-14.506667 23.594667-20.906667 29.781333-24.874667 25.813333-71.082667-14.208-88.874666-22.954667-10.24-44.970667-5.632-64 11.52-34.944 31.274667-69.632 62.677333-104.277333 93.994666a15.488 15.488 0 0 1-11.178667 4.437334c-11.221333-0.085333-26.88-0.128-46.933333-0.170667a17.066667 17.066667 0 0 0-17.109334 17.066667L256 719.701333a17.066667 17.066667 0 0 0 17.066667 17.152l49.578666-0.085333c3.968 0 7.466667 0.768 10.88 2.602667 15.829333 8.832 31.701333 17.493333 47.616 26.24a18.133333 18.133333 0 0 0 9.301334 2.346666h168.405333c6.186667 0 11.946667-0.981333 17.834667-2.56 29.44-7.253333 40.021333-30.293333 38.528-52.565333-0.768-9.728-4.266667-18.346667-9.984-26.24 19.626667-5.76 35.114667-16.213333 42.112-36.096 7.125333-20.394667 1.621333-38.4-12.672-53.333333 28.16-19.754667 34.858667-44.672 18.645333-75.648h140.458667c6.570667 0 13.013333-0.597333 19.370666-2.645334 31.957333-9.813333 48.810667-42.88 35.626667-71.552-10.154667-22.186667-28.629333-33.152-52.608-33.450666z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "19",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M270.506667 413.909333c31.146667-0.298667 115.626667-0.085333 146.858666-0.085333h158.464c-8.533333-7.68-15.914667-14.506667-23.594666-20.906667-29.781333-24.874667-25.813333-71.082667 14.208-88.874666 22.954667-10.24 44.970667-5.632 64 11.52 34.944 31.274667 69.632 62.677333 104.277333 93.994666 3.413333 2.986667 6.528 4.437333 11.178667 4.437334 11.221333-0.085333 26.88-0.128 46.933333-0.170667a17.066667 17.066667 0 0 1 17.109333 17.066667l0.682667 288.853333a17.066667 17.066667 0 0 1-17.066667 17.152l-49.578666-0.085333a22.101333 22.101333 0 0 0-10.88 2.602666c-15.829333 8.832-31.701333 17.493333-47.616 26.24a18.133333 18.133333 0 0 1-9.301334 2.346667h-168.405333a68.693333 68.693333 0 0 1-17.834667-2.56c-29.44-7.253333-40.021333-30.293333-38.528-52.565333 0.768-9.728 4.266667-18.346667 9.984-26.24-19.626667-5.76-35.114667-16.213333-42.112-36.096-7.125333-20.394667-1.621333-38.4 12.672-53.333334-28.16-19.754667-34.858667-44.672-18.645333-75.648H272.853333c-6.570667 0-13.013333-0.597333-19.370666-2.645333-31.957333-9.813333-48.810667-42.88-35.626667-71.552 10.154667-22.186667 28.629333-33.152 52.608-33.450667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "20",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M667.733333 480.128H400v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 213.333333a155.605333 155.605333 0 0 0-155.392 155.434667v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 509.013333v292.010667a28.885333 28.885333 0 0 0 28.885333 28.885333h340.138667a28.885333 28.885333 0 0 0 28.928-28.885333V509.013333a28.885333 28.885333 0 0 0-28.928-28.885333z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "21",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M400.042667 437.461333v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 170.666667a155.605333 155.605333 0 0 0-155.392 155.434666v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 466.346667v292.010666a28.885333 28.885333 0 0 0 28.885333 28.885334h340.138667a28.885333 28.885333 0 0 0 28.928-28.885334V466.346667a28.885333 28.885333 0 0 0-28.928-28.885334H400.042667z" fill="#FFFFFF"></path><path d="M595.242667 437.461333v-111.36a97.706667 97.706667 0 0 0-97.621334-97.621333 97.706667 97.706667 0 0 0-97.578666 97.621333 28.885333 28.885333 0 0 1-57.813334 0A155.605333 155.605333 0 0 1 497.621333 170.666667a155.605333 155.605333 0 0 1 155.434667 155.434666v111.36h14.634667c16 0 28.928 12.928 28.928 28.885334v292.010666a28.885333 28.885333 0 0 1-28.928 28.885334H327.552A28.885333 28.885333 0 0 1 298.666667 758.357333V466.346667c0-15.957333 12.928-28.885333 28.885333-28.885334h267.690667z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "22",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M511.999787 512.000213m-511.999787 0a511.999787 511.999787 0 1 0 1023.999573 0 511.999787 511.999787 0 1 0-1023.999573 0Z" fill="#6D768D"></path><path d="M381.354508 364.586941c0 54.015977 29.013321 103.935957 75.946635 130.986613a152.53327 152.53327 0 0 0 151.935936 0 151.12527 151.12527 0 0 0 75.946636-130.986613A151.594604 151.594604 0 0 0 533.333111 213.333671a151.594604 151.594604 0 0 0-151.89327 151.25327zM660.479725 498.901552a185.258589 185.258589 0 0 1-127.146614 50.346646c-49.066646 0-93.866628-19.199992-127.06128-50.346646C317.141201 544.853533 255.999893 637.440161 255.999893 744.106783c0 13.183995 10.709329 23.850657 23.978657 23.850657h506.709122a23.893323 23.893323 0 0 0 23.978657-23.893323c0-106.538622-61.098641-199.25325-150.186604-245.205232z" fill="#FFFFFF"></path></svg>'
      },
      {
        name: "23",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M445.610667 401.578667a129.322667 129.322667 0 1 0 258.645333 0 129.322667 129.322667 0 0 0-258.645333 0z m237.568 114.901333a157.354667 157.354667 0 0 1-216.362667 0 236.373333 236.373333 0 0 0-127.957333 209.706667c0 11.264 9.130667 20.394667 20.394666 20.394666h431.402667a20.394667 20.394667 0 0 0 20.394667-20.394666 236.373333 236.373333 0 0 0-127.872-209.706667zM409.813333 401.578667c0-40.362667 14.592-77.397333 38.698667-106.112a112.725333 112.725333 0 0 0-29.013333-3.925334 112.64 112.64 0 0 0-112.426667 112.469334 112.64 112.64 0 0 0 144.853333 107.648 164.693333 164.693333 0 0 1-42.112-110.08z m-18.602666 136.704a136.533333 136.533333 0 0 1-65.706667-34.474667 205.44 205.44 0 0 0-111.232 182.4c0 9.813333 7.936 17.706667 17.706667 17.706667H303.36a273.621333 273.621333 0 0 1 87.893333-165.632z" fill="#FFFFFF"></path></svg>'
      }
    ]
  }
], Hp = (i, t = []) => {
  let e = i.split("_"), s = G3([...$l, ...t]).find((r) => r.type === e[0]);
  if (s) {
    let r = s.list.find((a) => a.name === e[1]);
    return r ? r.icon : "";
  } else
    return "";
}, ts = {
  hyperlink: Pp,
  note: Bp,
  attachment: $p,
  nodeIconList: $l,
  getNodeIconListIcon: Hp
}, Up = (i, t) => {
  const e = new ft(), n = new ct().text(i);
  return t.text(n), e.add(n), e.bbox();
}, Do = {
  radius: 3,
  // 标签矩形的圆角大小
  fontSize: 12,
  // 字号，建议文字高度不要大于height
  fill: "",
  // 标签矩形的背景颜色
  height: 20,
  // 标签矩形的高度
  paddingX: 8
  // 水平内边距，如果设置了width，将忽略该配置
  //width: 30 // 标签矩形的宽度，如果不设置，默认以文字的宽度+paddingX*2为宽度
};
function jp() {
  let i = this.getData("image");
  if (!i)
    return;
  i = (this.mindMap.renderer.renderTree.data.imgMap || {})[i] || i;
  const t = this.getImgShowSize(), e = new Ue().load(i).size(...t), { defaultNodeImage: n } = this.mindMap.opt;
  if (n) {
    const s = new Image();
    s.onerror = () => {
      e.load(n);
    }, s.src = i;
  }
  return this.getData("imageTitle") && e.attr("title", this.getData("imageTitle")), e.on("click", (s) => {
    this.mindMap.emit("node_img_click", this, e, s);
  }), e.on("dblclick", (s) => {
    this.mindMap.emit("node_img_dblclick", this, s, e);
  }), e.on("mouseenter", (s) => {
    this.mindMap.emit("node_img_mouseenter", this, e, s);
  }), e.on("mouseleave", (s) => {
    this.mindMap.emit("node_img_mouseleave", this, e, s);
  }), e.on("mousemove", (s) => {
    this.mindMap.emit("node_img_mousemove", this, e, s);
  }), {
    node: e,
    width: t[0],
    height: t[1]
  };
}
function Gp() {
  const { custom: i, width: t, height: e } = this.getData("imageSize");
  return i ? [t, e] : A3(
    t,
    e,
    this.mindMap.themeConfig.imgMaxWidth,
    this.mindMap.themeConfig.imgMaxHeight
  );
}
function Wp() {
  let i = this.getData();
  if (!i.icon || i.icon.length <= 0)
    return [];
  let t = this.mindMap.themeConfig.iconSize;
  return i.icon.map((e) => {
    let n = ts.getNodeIconListIcon(
      e,
      this.mindMap.opt.iconList || []
    ), s = null;
    return /^<svg/.test(n) ? s = ht(n) : s = new Ue().load(n), s.size(t, t), s.on("click", (r) => {
      this.mindMap.emit("node_icon_click", this, e, r, s);
    }), s.on("mouseenter", (r) => {
      this.mindMap.emit("node_icon_mouseenter", this, e, r, s);
    }), s.on("mouseleave", (r) => {
      this.mindMap.emit("node_icon_mouseleave", this, e, r, s);
    }), {
      node: s,
      width: t,
      height: t
    };
  });
}
function Yp(i) {
  const t = this.hasCustomWidth();
  let e = typeof i == "string" ? i : this.getData("text"), { textAutoWrapWidth: n, emptyTextMeasureHeightText: s } = this.mindMap.opt;
  n = t ? this.customTextWidth : n;
  const r = new ft();
  let a = !1;
  this.getData("resetRichText") && (delete this.nodeData.data.resetRichText, a = !0), a && !me(e) && (P3(e) ? e = H3(e) : e = `<p>${e}</p>`, this.setData({
    text: e
  }));
  const o = [], h = Q3(this);
  Object.keys(h).forEach((x) => {
    o.push([x, h[x]]);
  }), this.mindMap.commonCaches.measureRichtextNodeTextSizeEl || (this.mindMap.commonCaches.measureRichtextNodeTextSizeEl = document.createElement("div"), this.mindMap.commonCaches.measureRichtextNodeTextSizeEl.style.position = "fixed", this.mindMap.commonCaches.measureRichtextNodeTextSizeEl.style.left = "-999999px", this.mindMap.el.appendChild(
    this.mindMap.commonCaches.measureRichtextNodeTextSizeEl
  ));
  const l = this.mindMap.commonCaches.measureRichtextNodeTextSizeEl;
  o.forEach(([x, w]) => {
    l.style[x] = w;
  }), l.style.lineHeight = 1.2;
  const c = `<div>${e}</div>`;
  l.innerHTML = c;
  const d = l.children[0];
  d.classList.add("smm-richtext-node-wrap"), si(d), d.style.maxWidth = n + "px", t ? d.style.width = this.customTextWidth + "px" : d.style.width = "";
  let { width: g, height: f } = d.getBoundingClientRect();
  if (f <= 0) {
    l.innerHTML = `<p>${s}</p>`;
    let x = l.children[0];
    x.classList.add("smm-richtext-node-wrap"), f = x.getBoundingClientRect().height, l.innerHTML = c;
  }
  g = Math.min(Math.ceil(g) + 1, n), f = Math.ceil(f), r.attr("data-width", g), r.attr("data-height", f);
  const m = ni({
    el: l.children[0],
    width: g,
    height: f
  }), v = {
    "line-height": 1.2
  };
  return o.forEach(([x, w]) => {
    v[R3(x)] = w;
  }), m.css(v), r.add(m), {
    node: r,
    nodeContent: m,
    width: g,
    height: f
  };
}
function Xp(i) {
  if (this.getData("needUpdate") && delete this.nodeData.data.needUpdate, this.getData("richText"))
    return this.createRichTextNode(i);
  const t = typeof i == "string" ? i : this.getData("text");
  this.getData("resetRichText") && delete this.nodeData.data.resetRichText;
  const e = new ft(), n = this.getStyle("fontSize", !1), s = this.getStyle("textAlign", !1);
  let r = [];
  me(t) || (r = String(t).split(/\n/gim));
  const { textAutoWrapWidth: a, emptyTextMeasureHeightText: o } = this.mindMap.opt;
  let h = r.length > 1;
  r.forEach((d, g) => {
    let f = d.split(""), m = [], v = [];
    for (; f.length; ) {
      let x = f.shift(), w = [...v, x].join("");
      Up(w, this.style).width <= a ? v.push(x) : (m.push(v.join("")), v = [x]);
    }
    v.length > 0 && m.push(v.join("")), m.length > 1 && (h = !0), r[g] = m.join(`
`);
  }), r = r.join(`
`).replace(/\n$/g, "").split(/\n/gim), r.forEach((d, g) => {
    d === "" && (d = "\uFEFF");
    const f = new ct().text(d);
    f.addClass("smm-text-node-wrap"), f.attr(
      "text-anchor",
      {
        left: "start",
        center: "middle",
        right: "end"
      }[s] || "start"
    ), this.style.text(f), f.y(
      n * Pn * g + (Pn - 1) * n / 2
    ), e.add(f);
  });
  let { width: l, height: c } = e.bbox();
  if (c <= 0) {
    const d = new ct().text(o);
    this.style.text(d), c = d.bbox().height;
  }
  return l = Math.min(Math.ceil(l), a), c = Math.ceil(c), e.attr("data-width", l), e.attr("data-height", c), e.attr("data-ismultiLine", h || r.length > 1), {
    node: e,
    width: l,
    height: c
  };
}
function Vp() {
  const { hyperlink: i, hyperlinkTitle: t } = this.getData();
  if (!i)
    return;
  const { customHyperlinkJump: e, hyperlinkIcon: n } = this.mindMap.opt, { icon: s, style: r } = n, a = this.getNodeIconSize("hyperlinkIcon"), o = new ht().size(a, a), h = new ji().to(i).target("_blank");
  h.node.addEventListener("click", (c) => {
    typeof e == "function" && (c.preventDefault(), e(i, this));
  }), t && o.add(ht(`<title>${t}</title>`)), h.rect(a, a).fill({ color: "transparent" });
  const l = ht(s || ts.hyperlink).size(a, a);
  return this.style.iconNode(l, r.color), h.add(l), o.add(h), {
    node: o,
    width: a,
    height: a
  };
}
function qp() {
  const i = this.getData("tag");
  if (!i || i.length <= 0)
    return [];
  let { maxTag: t, tagsColorMap: e } = this.mindMap.opt;
  e = e || {};
  const n = [];
  return i.slice(0, t).forEach((s, r) => {
    let a = "", o = {
      ...Do
    };
    typeof s == "string" ? a = s : (a = s.text, o = { ...Do, ...s.style });
    const h = typeof o.width < "u", l = new ft();
    l.on("click", () => {
      this.mindMap.emit("node_tag_click", this, s, r, l);
    });
    const c = new ct().text(a);
    this.style.tagText(c, o);
    const { width: d, height: g } = c.bbox(), f = h ? o.width : d + o.paddingX * 2, m = h ? Math.max(f, d) : f, v = Math.max(o.height, g);
    h ? c.x((m - d) / 2) : c.x(h ? 0 : o.paddingX), c.cy(-v / 2);
    const x = new Dt().size(f, o.height).cy(-v / 2);
    h && x.x((m - f) / 2), this.style.tagRect(x, {
      ...o,
      fill: o.fill || // 优先节点自身配置
      e[c.node.textContent] || // 否则尝试从实例化选项tagsColorMap映射中获取颜色
      Fl(c.node.textContent)
      // 否则按照标签内容生成
    }), l.add(x).add(c), n.push({
      node: l,
      width: m,
      height: v
    });
  }), n;
}
function Kp() {
  if (!this.getData("note"))
    return null;
  const { icon: i, style: t } = this.mindMap.opt.noteIcon, e = this.getNodeIconSize("noteIcon"), n = new ht().attr("cursor", "pointer").addClass("smm-node-note").size(e, e);
  n.add(new Dt().size(e, e).fill({ color: "transparent" }));
  const s = ht(i || ts.note).size(e, e);
  return this.style.iconNode(s, t.color), n.add(s), this.mindMap.opt.customNoteContentShow || (this.noteEl || (this.noteEl = document.createElement("div"), this.noteEl.style.cssText = `
          position: fixed;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
          display: none;
          background-color: #fff;
          z-index: ${this.mindMap.opt.nodeNoteTooltipZIndex}
      `, (this.mindMap.opt.customInnerElsAppendTo || document.body).appendChild(this.noteEl)), this.noteEl.innerText = this.getData("note")), n.on("mouseover", () => {
    const { left: r, top: a } = this.getNoteContentPosition();
    this.mindMap.opt.customNoteContentShow ? this.mindMap.opt.customNoteContentShow.show(
      this.getData("note"),
      r,
      a,
      this
    ) : (this.noteEl.style.left = r + "px", this.noteEl.style.top = a + "px", this.noteEl.style.display = "block");
  }), n.on("mouseout", () => {
    this.mindMap.opt.customNoteContentShow ? this.mindMap.opt.customNoteContentShow.hide() : this.noteEl.style.display = "none";
  }), n.on("click", (r) => {
    this.mindMap.emit("node_note_click", this, r, n);
  }), n.on("dblclick", (r) => {
    this.mindMap.emit("node_note_dblclick", this, r, n);
  }), {
    node: n,
    width: e,
    height: e
  };
}
function Zp() {
  const { attachmentUrl: i, attachmentName: t } = this.getData();
  if (!i)
    return;
  const e = this.getNodeIconSize("attachmentIcon"), { icon: n, style: s } = this.mindMap.opt.attachmentIcon, r = new ht().attr("cursor", "pointer").size(e, e);
  t && r.add(ht(`<title>${t}</title>`)), r.add(new Dt().size(e, e).fill({ color: "transparent" }));
  const a = ht(n || ts.attachment).size(e, e);
  return this.style.iconNode(a, s.color), r.add(a), r.on("click", (o) => {
    this.mindMap.emit("node_attachmentClick", this, o, r);
  }), r.on("contextmenu", (o) => {
    this.mindMap.emit("node_attachmentContextmenu", this, o, r);
  }), {
    node: r,
    width: e,
    height: e
  };
}
function Jp(i) {
  const { style: t } = this.mindMap.opt[i];
  return me(t.size) ? this.mindMap.themeConfig.iconSize : t.size;
}
function Qp() {
  const i = this.getNodeIconSize("noteIcon"), { scaleY: t } = this.mindMap.view.getTransformData().transform, e = i * t;
  let { left: n, top: s } = this._noteData.node.node.getBoundingClientRect();
  return s += e, {
    left: n,
    top: s
  };
}
function t6(i) {
  this.mindMap.commonCaches.measureCustomNodeContentSizeEl || (this.mindMap.commonCaches.measureCustomNodeContentSizeEl = document.createElement("div"), this.mindMap.commonCaches.measureCustomNodeContentSizeEl.style.cssText = `
      position: fixed;
      left: -99999px;
      top: -99999px;
    `, this.mindMap.el.appendChild(
    this.mindMap.commonCaches.measureCustomNodeContentSizeEl
  )), this.mindMap.commonCaches.measureCustomNodeContentSizeEl.innerHTML = "", this.mindMap.commonCaches.measureCustomNodeContentSizeEl.appendChild(i);
  let t = this.mindMap.commonCaches.measureCustomNodeContentSizeEl.getBoundingClientRect();
  return {
    width: t.width,
    height: t.height
  };
}
function e6() {
  return !!this._customNodeContent;
}
const Oo = {
  createImgNode: jp,
  getImgShowSize: Gp,
  createIconNode: Wp,
  createRichTextNode: Yp,
  createTextNode: Xp,
  createHyperlinkNode: Vp,
  createTagNode: qp,
  createNoteNode: Kp,
  createAttachmentNode: Zp,
  getNoteContentPosition: Qp,
  getNodeIconSize: Jp,
  measureCustomNodeContentSize: t6,
  isUseCustomNodeContent: e6
};
function i6() {
  if (this.getChildrenLength() <= 0 || this.isRoot)
    return;
  const { alwaysShowExpandBtn: i, notShowExpandBtn: t, expandBtnSize: e } = this.mindMap.opt;
  if (!i && !t) {
    let { width: n, height: s } = this;
    this._unVisibleRectRegionNode || (this._unVisibleRectRegionNode = new Dt(), this._unVisibleRectRegionNode.fill({
      color: "transparent"
    })), this.group.add(this._unVisibleRectRegionNode), this.renderer.layout.renderExpandBtnRect(
      this._unVisibleRectRegionNode,
      e,
      n,
      s,
      this
    );
  }
}
function n6() {
  this._unVisibleRectRegionNode && (this._unVisibleRectRegionNode.remove(), this._unVisibleRectRegionNode = null);
}
function s6() {
  this.needRerenderExpandBtnPlaceholderRect && (this.needRerenderExpandBtnPlaceholderRect = !1, this.renderExpandBtnPlaceholderRect()), this.getChildrenLength() > 0 ? this._unVisibleRectRegionNode || this.renderExpandBtnPlaceholderRect() : this._unVisibleRectRegionNode && this.clearExpandBtnPlaceholderRect();
}
const Ro = {
  renderExpandBtnPlaceholderRect: i6,
  clearExpandBtnPlaceholderRect: n6,
  updateExpandBtnPlaceholderRect: s6
};
function r6() {
  this.checkEnableDragModifyNodeWidth() && (this._dragHandleNodes = null, this.dragHandleWidth = 4, this.dragHandleMousedownX = 0, this.isDragHandleMousedown = !1, this.dragHandleIndex = 0, this.dragHandleMousedownCustomTextWidth = 0, this.dragHandleMousedownBodyCursor = "", this.dragHandleMousedownLeft = 0, this.onDragMousemoveHandle = this.onDragMousemoveHandle.bind(this), window.addEventListener("mousemove", this.onDragMousemoveHandle), this.onDragMouseupHandle = this.onDragMouseupHandle.bind(this), window.addEventListener("mouseup", this.onDragMouseupHandle), this.mindMap.on("node_mouseup", this.onDragMouseupHandle));
}
function a6(i) {
  if (!this.isDragHandleMousedown) return;
  i.stopPropagation(), i.preventDefault();
  let {
    minNodeTextModifyWidth: t,
    maxNodeTextModifyWidth: e,
    isUseCustomNodeContent: n,
    customCreateNodeContent: s
  } = this.mindMap.opt;
  const r = n && s && this._customNodeContent;
  document.body.style.cursor = "ew-resize", this.group.css({
    cursor: "ew-resize"
  });
  const { scaleX: a } = this.mindMap.draw.transform(), o = i.clientX - this.dragHandleMousedownX;
  let h = this.dragHandleMousedownCustomTextWidth + (this.dragHandleIndex === 0 ? -o : o) / a;
  if (h = Math.max(h, t), e !== -1 && (h = Math.min(h, e)), !r && this.getData("image")) {
    const l = this.getImgShowSize();
    this._rectInfo.textContentWidth - this.customTextWidth + h <= l[0] && (h = l[0] + this.customTextWidth - this._rectInfo.textContentWidth);
  }
  this.customTextWidth = h, this.dragHandleIndex === 0 && (this.left = this.dragHandleMousedownLeft + o / a), this.reRender(r ? [] : ["text"], {
    ignoreUpdateCustomTextWidth: !0
  });
}
function o6() {
  this.isDragHandleMousedown && (document.body.style.cursor = this.dragHandleMousedownBodyCursor, this.group.css({
    cursor: "default"
  }), this.isDragHandleMousedown = !1, this.dragHandleMousedownX = 0, this.dragHandleIndex = 0, this.dragHandleMousedownCustomTextWidth = 0, this.setData({
    customTextWidth: this.customTextWidth
  }), this.mindMap.render(), this.mindMap.emit("dragModifyNodeWidthEnd", this));
}
function h6() {
  const i = [new Dt(), new Dt()];
  return i.forEach((t, e) => {
    t.size(this.dragHandleWidth, this.height).fill({
      color: "transparent"
    }).css({
      cursor: "ew-resize"
    }), t.on("mousedown", (n) => {
      n.stopPropagation(), n.preventDefault(), this.dragHandleMousedownX = n.clientX, this.dragHandleIndex = e, this.dragHandleMousedownCustomTextWidth = this.customTextWidth === void 0 ? this._textData ? this._textData.width : this.width : this.customTextWidth, this.dragHandleMousedownBodyCursor = document.body.style.cursor, this.dragHandleMousedownLeft = this.left, this.isDragHandleMousedown = !0;
    });
  }), i;
}
function l6() {
  this.checkEnableDragModifyNodeWidth() && (this._dragHandleNodes || (this._dragHandleNodes = this.createDragHandleNode()), this.getData("isActive") ? (this._dragHandleNodes.forEach((i) => {
    i.height(this.height), this.group.add(i);
  }), this._dragHandleNodes[1].x(this.width - this.dragHandleWidth)) : this._dragHandleNodes.forEach((i) => {
    i.remove();
  }));
}
const Io = {
  initDragHandle: r6,
  onDragMousemoveHandle: a6,
  onDragMouseupHandle: o6,
  createDragHandleNode: h6,
  updateDragHandle: l6
};
function c6() {
  this.mindMap.cooperate && (this._userListGroup = new ft(), this.group.add(this._userListGroup));
}
function d6(i) {
  const { avatarSize: t, fontSize: e } = this.mindMap.opt.cooperateStyle, n = new ft(), s = i.isMore ? i.name : String(i.name)[0], r = new gi().size(t, t);
  r.fill({
    color: i.color || Fl(s)
  });
  const a = new ct().text(s).fill({
    color: "#fff"
  }).css({
    "font-size": e + "px"
  }).dx(-e / 2).dy((t - e) / 2);
  return n.add(r).add(a), n;
}
function u6(i) {
  const { avatarSize: t } = this.mindMap.opt.cooperateStyle;
  return new Ue().load(i.avatar).size(t, t);
}
function f6() {
  if (!this._userListGroup) return;
  const { avatarSize: i } = this.mindMap.opt.cooperateStyle;
  this._userListGroup.clear();
  const t = this.userList.length, e = Math.floor(this.width / i), n = [];
  t > e ? n.push(...this.userList.slice(0, e - 1), {
    isMore: !0,
    name: "+" + (t - e + 1)
  }) : n.push(...this.userList), n.forEach((s, r) => {
    let a = null;
    s.avatar ? a = this.createImageAvatar(s) : a = this.createTextAvatar(s), a.on("click", (o) => {
      this.mindMap.emit("node_cooperate_avatar_click", s, this, a, o);
    }), a.on("mouseenter", (o) => {
      this.mindMap.emit("node_cooperate_avatar_mouseenter", s, this, a, o);
    }), a.on("mouseleave", (o) => {
      this.mindMap.emit("node_cooperate_avatar_mouseleave", s, this, a, o);
    }), a.x(r * i).cy(-i / 2), this._userListGroup.add(a);
  });
}
function p6(i) {
  this.userList.find((t) => t.id == i.id) || (this.userList.push(i), this.updateUserListNode());
}
function m6(i) {
  const t = this.userList.findIndex((e) => e.id == i.id);
  t !== -1 && (this.userList.splice(t, 1), this.updateUserListNode());
}
function g6() {
  this.userList = [], this.updateUserListNode();
}
const zo = {
  createUserListNode: c6,
  updateUserListNode: f6,
  createTextAvatar: d6,
  createImageAvatar: u6,
  addUser: p6,
  removeUser: m6,
  emptyUser: g6
};
function v6() {
  this.isGeneralization || (this._quickCreateChildBtn = null, this._showQuickCreateChildBtn = !1);
}
function y6() {
  if (!(this.isGeneralization || this.getChildrenLength() > 0)) {
    if (this._quickCreateChildBtn)
      this.group.add(this._quickCreateChildBtn);
    else {
      const { quickCreateChildBtnIcon: i, expandBtnStyle: t, expandBtnSize: e } = this.mindMap.opt, { icon: n, style: s } = i;
      let { color: r, fill: a } = t || {
        color: "#808080",
        fill: "#fff"
      };
      r = s.color || r;
      const o = ht(n || ur.quickCreateChild).size(
        e,
        e
      );
      o.css({
        cursor: "pointer"
      }), o.x(0).y(-e / 2), this.style.iconNode(o, r);
      const h = new gi().size(e);
      h.x(0).y(-e / 2), h.fill({ color: a }).css({
        cursor: "pointer"
      }), this._quickCreateChildBtn = new ft(), this._quickCreateChildBtn.add(h).add(o), this._quickCreateChildBtn.on("click", (l) => {
        l.stopPropagation(), this.mindMap.emit("quick_create_btn_click", this);
        const { customQuickCreateChildBtnClick: c } = this.mindMap.opt;
        if (typeof c == "function") {
          c(this);
          return;
        }
        this.mindMap.execCommand("INSERT_CHILD_NODE", !0, [this]);
      }), this._quickCreateChildBtn.on("dblclick", (l) => {
        l.stopPropagation();
      }), this._quickCreateChildBtn.addClass("smm-quick-create-child-btn"), this.group.add(this._quickCreateChildBtn);
    }
    this._showQuickCreateChildBtn = !0, this.renderer.layout.renderExpandBtn(this, this._quickCreateChildBtn);
  }
}
function _6() {
  this.isGeneralization || this._quickCreateChildBtn && this._showQuickCreateChildBtn && (this._quickCreateChildBtn.remove(), this._showQuickCreateChildBtn = !1);
}
function x6() {
  if (this.isGeneralization) return;
  const { isActive: i } = this.getData();
  i || this.removeQuickCreateChildBtn();
}
const Fo = {
  initQuickCreateChildBtn: v6,
  showQuickCreateChildBtn: y6,
  removeQuickCreateChildBtn: _6,
  hideQuickCreateChildBtn: x6
};
function w6(i, t, e, n, s) {
  const { imgTextMargin: r } = this.mindMap.opt;
  return i === "v" ? n > 0 && s > 0 ? r : 0 : t > 0 && e > 0 ? r : 0;
}
function E6(i) {
  let t = 0, e = this._tagData.reduce((n, s) => (t = Math.max(t, s.height), n += s.width), 0);
  return e += (this._tagData.length - 1) * i, {
    width: e,
    height: t
  };
}
function C6() {
  if (this.isUseCustomNodeContent()) {
    const A = this.measureCustomNodeContentSize(this._customNodeContent);
    return {
      width: this.hasCustomWidth() ? this.customTextWidth : A.width,
      height: A.height
    };
  }
  const { TAG_PLACEMENT: i, IMG_PLACEMENT: t } = E, { textContentMargin: e } = this.mindMap.opt, s = (this.getStyle("tagPlacement") || i.RIGHT) === i.BOTTOM, r = this.getStyle("imgPlacement") || t.TOP;
  let a = 0, o = 0, h = 0, l = 0, c = 0, d = 0, g = 0;
  if (this._imgData && (a = this._imgData.width, o = this._imgData.height), this.mindMap.nodeInnerPrefixList.forEach((A) => {
    const D = this[`_${A.name}Data`];
    D && (h += D.width, l = Math.max(l, D.height), g++);
  }), this._prefixData && (h += this._prefixData.width, l = Math.max(l, this._prefixData.height), g++), this._iconData.length > 0 && (h += this._iconData.reduce((A, D) => (l = Math.max(l, D.height), A += D.width), 0) + (this._iconData.length - 1) * e, g++), this._textData && (h += this._textData.width, l = Math.max(l, this._textData.height), g++), this._hyperlinkData && (h += this._hyperlinkData.width, l = Math.max(l, this._hyperlinkData.height), g++), this._tagData.length > 0) {
    const { width: A, height: D } = this.getTagContentSize(e);
    s ? (c = A, d = D) : (h += A, l = Math.max(l, D), g++);
  }
  this._noteData && (h += this._noteData.width, l = Math.max(l, this._noteData.height), g++), this._attachmentData && (h += this._attachmentData.width, l = Math.max(l, this._attachmentData.height), g++), this._postfixData && (h += this._postfixData.width, l = Math.max(l, this._postfixData.height), g++), this.mindMap.nodeInnerPostfixList.forEach((A) => {
    const D = this[`_${A.name}Data`];
    D && (h += D.width, l = Math.max(l, D.height), g++);
  }), h += (g - 1) * e, s && h > 0 && d > 0 && (this._rectInfo.textContentWidthWithoutTag = h, h = Math.max(h, c), l = l + e + d), this._rectInfo.textContentWidth = h, this._rectInfo.textContentHeight = l;
  let f = 0, m = 0;
  [t.TOP, t.BOTTOM].includes(r) ? (f = Math.max(a, h), m = o + l + this.getImgTextMarin("v", 0, 0, o, l)) : (f = a + h + this.getImgTextMarin("h", a, h), m = Math.max(o, l));
  const { paddingX: v, paddingY: x } = this.getPaddingVale(), { paddingX: w, paddingY: M } = this.shapeInstance.getShapePadding(f, m, v, x);
  this.shapePadding.paddingX = w, this.shapePadding.paddingY = M;
  const T = this.getBorderWidth();
  return {
    width: f + v * 2 + w * 2 + T,
    height: m + x * 2 + M * 2 + T
  };
}
function M6() {
  if (!this.group) return;
  this.group.clear();
  const {
    hoverRectPadding: i,
    openRealtimeRenderOnNodeTextEdit: t,
    textContentMargin: e,
    addCustomContentToNode: n
  } = this.mindMap.opt, { width: s, height: r } = this;
  let { paddingX: a, paddingY: o } = this.getPaddingVale();
  const h = this.getBorderWidth() / 2;
  a += this.shapePadding.paddingX + h, o += this.shapePadding.paddingY + h, this.shapeNode = this.shapeInstance.createShape(), this.shapeNode.addClass("smm-node-shape"), this.shapeNode.translate(h, h), this.style.shape(this.shapeNode), this.group.add(this.shapeNode), this.renderExpandBtnPlaceholderRect(), this.createUserListNode && this.createUserListNode(), this.isGeneralization && this.generalizationBelongNode && this.group.addClass("generalization_" + this.generalizationBelongNode.uid);
  const l = () => {
    this.hoverNode = new Dt().size(s + i * 2, r + i * 2).x(-i).y(-i), this.hoverNode.addClass("smm-hover-node"), this.style.hoverNode(this.hoverNode, s, r), this.group.add(this.hoverNode);
  };
  if (this.isUseCustomNodeContent()) {
    const S = ni({
      el: this._customNodeContent,
      width: s,
      height: r
    });
    this.group.add(S), l();
    return;
  }
  const { IMG_PLACEMENT: c, TAG_PLACEMENT: d } = E, g = this.getStyle("imgPlacement") || c.TOP, m = (this.getStyle("tagPlacement") || d.RIGHT) === d.BOTTOM;
  let { textContentWidth: v, textContentHeight: x, textContentWidthWithoutTag: w } = this._rectInfo;
  const M = x;
  let T = 0, A = 0;
  const D = this._tagData && this._tagData.length > 0;
  if (D) {
    const S = this.getTagContentSize(e);
    T = S.width, A = S.height, m && (x -= A + e);
  }
  let I = 0, P = 0;
  if (this._imgData)
    switch (I = this._imgData.width, P = this._imgData.height, this.group.add(this._imgData.node), g) {
      case c.TOP:
        this._imgData.node.cx(s / 2).y(o);
        break;
      case c.BOTTOM:
        this._imgData.node.cx(s / 2).y(r - o - P);
        break;
      case c.LEFT:
        this._imgData.node.x(a).cy(r / 2);
        break;
      case c.RIGHT:
        this._imgData.node.x(s - a - I).cy(r / 2);
        break;
    }
  let $ = new ft(), R = 0;
  if (D && m && (R = w < v ? (v - w) / 2 : 0), this.mindMap.nodeInnerPrefixList.forEach((S) => {
    const C = this[`_${S.name}Data`];
    C && (C.node.x(R).y((x - C.height) / 2), $.add(C.node), R += C.width + e);
  }), this._prefixData) {
    const S = ni({
      el: this._prefixData.el,
      width: this._prefixData.width,
      height: this._prefixData.height
    });
    S.x(R).y((x - this._prefixData.height) / 2), $.add(S), R += this._prefixData.width + e;
  }
  let _t = new ft();
  if (this._iconData && this._iconData.length > 0) {
    let S = 0;
    this._iconData.forEach((C) => {
      C.node.x(R + S).y((x - C.height) / 2), _t.add(C.node), S += C.width + e;
    }), $.add(_t), R += S;
  }
  if (this._textData) {
    const S = this._textData.node.attr("data-offsetx") || 0;
    this._textData.node.attr("data-offsetx", R), (this._textData.nodeContent || this._textData.node).x(-S).x(R).y((x - this._textData.height) / 2), t && this._textData.node.opacity(
      this.mindMap.renderer.textEdit.getCurrentEditNode() === this ? 0 : 1
    ), $.add(this._textData.node), R += this._textData.width + e;
  }
  this._hyperlinkData && (this._hyperlinkData.node.x(R).y((x - this._hyperlinkData.height) / 2), $.add(this._hyperlinkData.node), R += this._hyperlinkData.width + e);
  let tt = new ft();
  if (D)
    if (m) {
      let S = 0;
      this._tagData.forEach((C) => {
        C.node.x(S).y((A - C.height) / 2), tt.add(C.node), S += C.width + e;
      }), tt.x((v - T) / 2).y(M - A), $.add(tt);
    } else {
      let S = 0;
      this._tagData.forEach((C) => {
        C.node.x(R + S).y((x - C.height) / 2), tt.add(C.node), S += C.width + e;
      }), $.add(tt), R += S;
    }
  if (this._noteData && (this._noteData.node.x(R).y((x - this._noteData.height) / 2), $.add(this._noteData.node), R += this._noteData.width + e), this._attachmentData && (this._attachmentData.node.x(R).y((x - this._attachmentData.height) / 2), $.add(this._attachmentData.node), R += this._attachmentData.width + e), this._postfixData) {
    const S = ni({
      el: this._postfixData.el,
      width: this._postfixData.width,
      height: this._postfixData.height
    });
    S.x(R).y((x - this._postfixData.height) / 2), $.add(S), R += this._postfixData.width + e;
  }
  this.mindMap.nodeInnerPostfixList.forEach((S) => {
    const C = this[`_${S.name}Data`];
    C && (C.node.x(R).y((x - C.height) / 2), $.add(C.node), R += C.width + e);
  }), this.group.add($);
  const { width: u, height: p } = $.bbox();
  let y = 0, _ = 0;
  switch (g) {
    case c.TOP:
      y = s / 2 - u / 2, _ = o + // 内边距
      P + // 图片高度
      this.getImgTextMarin("v", 0, 0, P, M);
      break;
    case c.BOTTOM:
      y = s / 2 - u / 2, _ = o;
      break;
    case c.LEFT:
      y = I + a + this.getImgTextMarin("h", I, v), _ = r / 2 - p / 2;
      break;
    case c.RIGHT:
      y = a, _ = r / 2 - p / 2;
      break;
  }
  if ($.translate(y, _), l(), this._customContentAddToNodeAdd && this._customContentAddToNodeAdd.el) {
    const S = ni(
      this._customContentAddToNodeAdd
    );
    this.group.add(S), n && typeof n.handle == "function" && n.handle({
      content: this._customContentAddToNodeAdd,
      element: S,
      node: this
    });
  }
  this.mindMap.emit("node_layout_end", this);
}
const ko = {
  getImgTextMarin: w6,
  getTagContentSize: E6,
  getNodeRect: C6,
  layout: M6
};
class es {
  //  构造函数
  constructor(t = {}) {
    this.opt = t, this.nodeData = this.handleData(t.data || {}), this.nodeDataSnapshot = "", this.uid = t.uid, this.mindMap = t.mindMap, this.renderer = t.renderer, this.draw = this.mindMap.draw, this.nodeDraw = this.mindMap.nodeDraw, this.lineDraw = this.mindMap.lineDraw, this.style = new Bt(this), this.effectiveStyles = {}, this.shapeInstance = new tp(this), this.shapePadding = {
      paddingX: 0,
      paddingY: 0
    }, this.isRoot = t.isRoot === void 0 ? !1 : t.isRoot, this.isGeneralization = t.isGeneralization === void 0 ? !1 : t.isGeneralization, this.generalizationBelongNode = null, this.layerIndex = t.layerIndex === void 0 ? 0 : t.layerIndex, this.width = t.width || 0, this.height = t.height || 0, this.customTextWidth = t.data.data.customTextWidth || void 0, this._left = t.left || 0, this._top = t.top || 0, this.customLeft = t.data.data.customLeft || void 0, this.customTop = t.data.data.customTop || void 0, this.isDrag = !1, this.parent = t.parent || null, this.children = t.children || [], this.userList = [], this.group = null, this.shapeNode = null, this.hoverNode = null, this._customNodeContent = null, this._imgData = null, this._iconData = null, this._textData = null, this._hyperlinkData = null, this._tagData = null, this._noteData = null, this.noteEl = null, this.noteContentIsShow = !1, this._attachmentData = null, this._prefixData = null, this._postfixData = null, this._expandBtn = null, this._lastExpandBtnType = null, this._showExpandBtn = !1, this._openExpandNode = null, this._closeExpandNode = null, this._fillExpandNode = null, this._userListGroup = null, this._lines = [], this._generalizationList = [], this._unVisibleRectRegionNode = null, this._isMouseenter = !1, this._customContentAddToNodeAdd = null, this._rectInfo = {
      textContentWidth: 0,
      textContentHeight: 0,
      textContentWidthWithoutTag: 0
    }, this._generalizationNodeWidth = 0, this._generalizationNodeHeight = 0, this.expandBtnSize = this.mindMap.opt.expandBtnSize, this.isMultipleChoice = !1, this.needLayout = !1, this.isHide = !1;
    const e = Object.getPrototypeOf(this);
    e.bindEvent || (Object.keys(ko).forEach((n) => {
      e[n] = ko[n];
    }), Object.keys(So).forEach((n) => {
      e[n] = So[n];
    }), Object.keys(Lo).forEach((n) => {
      e[n] = Lo[n];
    }), Object.keys(Ro).forEach((n) => {
      e[n] = Ro[n];
    }), Object.keys(Ao).forEach((n) => {
      e[n] = Ao[n];
    }), Object.keys(Oo).forEach((n) => {
      e[n] = Oo[n];
    }), this.mindMap.cooperate && Object.keys(zo).forEach((n) => {
      e[n] = zo[n];
    }), Object.keys(Io).forEach((n) => {
      e[n] = Io[n];
    }), this.mindMap.opt.isShowCreateChildBtnIcon && (Object.keys(Fo).forEach((n) => {
      e[n] = Fo[n];
    }), this.initQuickCreateChildBtn()), e.bindEvent = !0), this.getSize(), this.updateGeneralization(), this.initDragHandle();
  }
  // 支持自定义位置
  get left() {
    return this.customLeft || this._left;
  }
  set left(t) {
    this._left = t;
  }
  get top() {
    return this.customTop || this._top;
  }
  set top(t) {
    this._top = t;
  }
  //  复位部分布局时会重新设置的数据
  reset() {
    this.children = [], this.parent = null, this.isRoot = !1, this.layerIndex = 0, this.left = 0, this.top = 0;
  }
  // 节点被删除时需要复位的数据
  resetWhenDelete() {
    this._isMouseenter = !1;
  }
  //  处理数据
  handleData(t) {
    return t.data.expand = t.data.expand !== !1, t.data.isActive = t.data.isActive === !0, t.children = t.children || [], t;
  }
  //  创建节点的各个内容对象数据
  // recreateTypes：[] custom、image、icon、text、hyperlink、tag、note、attachment、numbers、prefix、postfix、checkbox
  createNodeData(t) {
    const {
      isUseCustomNodeContent: e,
      customCreateNodeContent: n,
      createNodePrefixContent: s,
      createNodePostfixContent: r,
      addCustomContentToNode: a
    } = this.mindMap.opt, o = [
      "custom",
      "image",
      "icon",
      "text",
      "hyperlink",
      "tag",
      "note",
      "attachment",
      "prefix",
      "postfix",
      ...this.mindMap.nodeInnerPrefixList.map((l) => l.name),
      ...this.mindMap.nodeInnerPostfixList.map((l) => l.name)
    ], h = {};
    if (Array.isArray(t) ? o.forEach((l) => {
      t.includes(l) && (h[l] = !0);
    }) : o.forEach((l) => {
      h[l] = !0;
    }), e && n && h.custom && (this._customNodeContent = n(this)), this._customNodeContent) {
      si(this._customNodeContent);
      return;
    }
    h.image && (this._imgData = this.createImgNode()), h.icon && (this._iconData = this.createIconNode()), h.text && (this._textData = this.createTextNode()), h.hyperlink && (this._hyperlinkData = this.createHyperlinkNode()), h.tag && (this._tagData = this.createTagNode()), h.note && (this._noteData = this.createNoteNode()), h.attachment && (this._attachmentData = this.createAttachmentNode()), this.mindMap.nodeInnerPrefixList.forEach((l) => {
      h[l.name] && (this[`_${l.name}Data`] = l.createContent(this));
    }), h.prefix && (this._prefixData = s ? s(this) : null, this._prefixData && this._prefixData.el && si(this._prefixData.el)), h.postfix && (this._postfixData = r ? r(this) : null, this._postfixData && this._postfixData.el && si(this._postfixData.el)), this.mindMap.nodeInnerPostfixList.forEach((l) => {
      h[l.name] && (this[`_${l.name}Data`] = l.createContent(this));
    }), a && typeof a.create == "function" && (this._customContentAddToNodeAdd = a.create(this), this._customContentAddToNodeAdd && this._customContentAddToNodeAdd.el && si(this._customContentAddToNodeAdd.el));
  }
  //  计算节点的宽高
  getSize(t, e = {}) {
    e.ignoreUpdateCustomTextWidth || !1 || (this.customTextWidth = this.getData("customTextWidth") || void 0), this.customLeft = this.getData("customLeft") || void 0, this.customTop = this.getData("customTop") || void 0, this.createNodeData(t);
    const { width: s, height: r } = this.getNodeRect(), a = this.width !== s || this.height !== r;
    return this.width = s, this.height = r, a;
  }
  // 给节点绑定事件
  bindGroupEvent() {
    this.group.on("click", (t) => {
      if (this.mindMap.emit("node_click", this, t), this.isMultipleChoice) {
        t.stopPropagation(), this.isMultipleChoice = !1;
        return;
      }
      this.mindMap.opt.onlyOneEnableActiveNodeOnCooperate && this.userList.length > 0 || this.active(t);
    }), this.group.on("mousedown", (t) => {
      const {
        readonly: e,
        enableCtrlKeyNodeSelection: n,
        useLeftKeySelectionRightKeyDrag: s,
        mousedownEventPreventDefault: r
      } = this.mindMap.opt;
      if (r && t.preventDefault(), e || (this.isRoot ? t.which === 3 && !s && t.stopPropagation() : t.which !== 2 && t.stopPropagation()), !e && (t.ctrlKey || t.metaKey) && n) {
        this.isMultipleChoice = !0;
        const a = this.getData("isActive");
        a || this.mindMap.emit(
          "before_node_active",
          this,
          this.renderer.activeNodeList
        ), this.mindMap.renderer[a ? "removeNodeFromActiveList" : "addNodeToActiveList"](this, !0), this.renderer.emitNodeActiveEvent(a ? null : this);
      }
      this.mindMap.emit("node_mousedown", this, t);
    }), this.group.on("mouseup", (t) => {
      !this.isRoot && t.which !== 2 && !this.mindMap.opt.readonly && t.stopPropagation(), this.mindMap.emit("node_mouseup", this, t);
    }), this.group.on("mouseenter", (t) => {
      this.isDrag || (this._isMouseenter = !0, this.showExpandBtn(), this.isGeneralization && this.handleGeneralizationMouseenter(), this.mindMap.emit("node_mouseenter", this, t));
    }), this.group.on("mouseleave", (t) => {
      this._isMouseenter && (this._isMouseenter = !1, this.hideExpandBtn(), this.isGeneralization && this.handleGeneralizationMouseleave(), this.mindMap.emit("node_mouseleave", this, t));
    }), this.group.on("dblclick", (t) => {
      const { readonly: e, onlyOneEnableActiveNodeOnCooperate: n } = this.mindMap.opt;
      e || t.ctrlKey || t.metaKey || (t.stopPropagation(), !(n && this.userList.length > 0) && this.mindMap.emit("node_dblclick", this, t));
    }), this.group.on("contextmenu", (t) => {
      const { readonly: e, useLeftKeySelectionRightKeyDrag: n } = this.mindMap.opt;
      e || t.ctrlKey || (t.stopPropagation(), t.preventDefault(), !(this.mindMap.select && !n && this.mindMap.select.hasSelectRange()) && (this.getData("isActive") && this.renderer.activeNodeList.length === 1 || (this.renderer.clearActiveNodeList(), this.active(t)), this.mindMap.emit("node_contextmenu", t, this)));
    });
  }
  //  激活节点
  active(t) {
    this.mindMap.opt.readonly || (t && t.stopPropagation(), !this.getData("isActive") && (this.mindMap.emit("before_node_active", this, this.renderer.activeNodeList), this.renderer.clearActiveNodeList(), this.renderer.addNodeToActiveList(this, !0), this.renderer.emitNodeActiveEvent(this)));
  }
  // 取消激活该节点
  deactivate() {
    this.mindMap.renderer.removeNodeFromActiveList(this), this.mindMap.renderer.emitNodeActiveEvent();
  }
  //  更新节点
  update(t) {
    if (!this.group)
      return;
    this.updateNodeActiveClass();
    const {
      alwaysShowExpandBtn: e,
      notShowExpandBtn: n,
      isShowCreateChildBtnIcon: s,
      readonly: r
    } = this.mindMap.opt, a = this.getChildrenLength();
    if (!n)
      if (e)
        this._expandBtn && a <= 0 ? this.removeExpandBtn() : this.renderExpandBtn();
      else {
        const { isActive: h, expand: l } = this.getData();
        a <= 0 ? this.removeExpandBtn() : l && !h && !this._isMouseenter ? this.hideExpandBtn() : this.showExpandBtn();
      }
    if (s)
      if (a > 0)
        this.removeQuickCreateChildBtn();
      else {
        const { isActive: h } = this.getData();
        h ? this.showQuickCreateChildBtn() : this.hideQuickCreateChildBtn();
      }
    this.updateDragHandle(), this.renderGeneralization(t), this.updateUserListNode && this.updateUserListNode();
    const o = this.group.transform();
    this.nodeDataSnapshot = r ? "" : JSON.stringify(this.getData()), (this.left !== o.translateX || this.top !== o.translateY) && this.group.translate(this.left - o.translateX, this.top - o.translateY);
  }
  // 获取节点相当于画布的位置
  getNodePosInClient(t, e) {
    const n = this.mindMap.draw.transform(), { scaleX: s, scaleY: r, translateX: a, translateY: o } = n, h = t * s + a, l = e * r + o;
    return {
      left: h,
      top: l
    };
  }
  // 判断节点是否可见
  checkIsInClient(t = 0) {
    const { left: e, top: n } = this.getNodePosInClient(this.left, this.top);
    return e + this.width > 0 - t && n + this.height > 0 - t && e < this.mindMap.width + t && n < this.mindMap.height + t;
  }
  // 重新渲染节点，即重新创建节点内容、计算节点大小、计算节点内容布局、更新展开收起按钮，概要及位置
  reRender(t, e) {
    const n = this.getSize(t, e);
    return this.layout(), this.update(), n;
  }
  // 更新节点激活状态
  updateNodeActiveClass() {
    if (!this.group) return;
    const t = this.getData("isActive");
    this.group[t ? "addClass" : "removeClass"]("active");
  }
  // 根据是否激活更新节点
  updateNodeByActive(t) {
    if (this.group) {
      const { isShowCreateChildBtnIcon: e } = this.mindMap.opt;
      t ? (this.showExpandBtn(), e && this.showQuickCreateChildBtn()) : (this.hideExpandBtn(), e && this.hideQuickCreateChildBtn()), this.updateNodeActiveClass(), this.updateDragHandle();
    }
  }
  // 递归渲染
  // forceRender：强制渲染，无论是否处于画布可视区域
  // async：异步渲染
  render(t = () => {
  }, e = !1, n = !1) {
    this.renderLine();
    const { openPerformance: s, performanceConfig: r } = this.mindMap.opt;
    if (e || !s || this.checkIsInClient(r.padding) || this.isRoot ? this.group ? (this.nodeDraw.has(this.group) || this.nodeDraw.add(this.group), this.needLayout && (this.needLayout = !1, this.layout()), this.updateExpandBtnPlaceholderRect(), this.update(e)) : (this.group = new ft(), this.group.addClass("smm-node"), this.group.css({
      cursor: "default"
    }), this.bindGroupEvent(), this.nodeDraw.add(this.group), this.layout(), this.update(e)) : s && r.removeNodeWhenOutCanvas && this.removeSelf(), this.children && this.children.length && this.getData("expand") !== !1) {
      let a = 0;
      this.children.forEach((o) => {
        const h = () => {
          o.render(
            () => {
              a++, a >= this.children.length && t();
            },
            e,
            n
          );
        };
        n ? setTimeout(h, 0) : h();
      });
    } else
      t();
    this.nodeData.inserting && (delete this.nodeData.inserting, this.active(), this.mindMap.emit("node_dblclick", this, null, !0));
  }
  // 删除自身，只是从画布删除，节点容器还在，后续还可以重新插回画布
  removeSelf() {
    this.group && (this.group.remove(), this.removeGeneralization());
  }
  //  递归删除，只是从画布删除，节点容器还在，后续还可以重新插回画布
  remove() {
    this.group && (this.group.remove(), this.removeGeneralization(), this.removeLine(), this.children && this.children.length && this.children.forEach((t) => {
      t.remove();
    }));
  }
  // 销毁节点，不但会从画布删除，而且原节点直接置空，后续无法再插回画布
  destroy() {
    this.removeLine(), this.parent && this.parent.removeLine(), this.group && (this.emptyUser && this.emptyUser(), this.resetWhenDelete(), this.group.remove(), this.removeGeneralization(), this.group = null, this.style.onRemove());
  }
  //  隐藏节点
  hide() {
    if (this.group && this.group.hide(), this.hideGeneralization(), this.parent) {
      const t = this.parent.children.indexOf(this);
      this.parent._lines[t] && this.parent._lines[t].hide(), this._lines.forEach((e) => {
        e.hide();
      });
    }
    this.children && this.children.length && this.children.forEach((t) => {
      t.hide();
    });
  }
  //  显示节点
  show() {
    if (this.group) {
      if (this.group.show(), this.showGeneralization(), this.parent) {
        const t = this.parent.children.indexOf(this);
        this.parent._lines[t] && this.parent._lines[t].show(), this._lines.forEach((e) => {
          e.show();
        });
      }
      this.children && this.children.length && this.children.forEach((t) => {
        t.show();
      });
    }
  }
  // 设置节点透明度
  // 包括连接线和下级节点
  setOpacity(t) {
    this.group && this.group.opacity(t), this._lines.forEach((e) => {
      e.opacity(t);
    }), this.children.forEach((e) => {
      e.setOpacity(t);
    }), this.setGeneralizationOpacity(t);
  }
  // 隐藏子节点
  hideChildren() {
    this._lines.forEach((t) => {
      t.hide();
    }), this.children && this.children.length && this.children.forEach((t) => {
      t.hide();
    });
  }
  // 显示子节点
  showChildren() {
    this._lines.forEach((t) => {
      t.show();
    }), this.children && this.children.length && this.children.forEach((t) => {
      t.show();
    });
  }
  // 被拖拽中
  startDrag() {
    this.isDrag = !0, this.group && this.group.addClass("smm-node-dragging");
  }
  // 拖拽结束
  endDrag() {
    this.isDrag = !1, this.group && this.group.removeClass("smm-node-dragging");
  }
  //  连线
  renderLine(t = !1) {
    if (this.getData("expand") === !1)
      return;
    let e = this.getChildrenLength();
    this.mindMap.renderer.layout.nodeIsRemoveAllLines && this.mindMap.renderer.layout.nodeIsRemoveAllLines(this) && (e = 0), e > this._lines.length ? new Array(e - this._lines.length).fill(0).forEach(() => {
      this._lines.push(this.lineDraw.path());
    }) : e < this._lines.length && (this._lines.slice(e).forEach((n) => {
      n.remove();
    }), this._lines = this._lines.slice(0, e)), this.renderer.layout.renderLine(
      this,
      this._lines,
      (...n) => {
        this.styleLine(...n);
      },
      this.style.getStyle("lineStyle", !0)
    ), t && this.children && this.children.length > 0 && this.children.forEach((n) => {
      n.renderLine(t);
    });
  }
  //  获取节点形状
  getShape() {
    return this.mindMap.themeConfig.nodeUseLineStyle ? E.SHAPE.RECTANGLE : this.style.getStyle("shape", !1, !1);
  }
  //  检查节点是否存在自定义数据
  hasCustomPosition() {
    return this.customLeft !== void 0 && this.customTop !== void 0;
  }
  //  检查节点是否存在自定义位置的祖先节点，包含自身
  ancestorHasCustomPosition() {
    let t = this;
    for (; t; ) {
      if (t.hasCustomPosition())
        return !0;
      t = t.parent;
    }
    return !1;
  }
  //  检查是否存在有概要的祖先节点
  ancestorHasGeneralization() {
    let t = this.parent;
    for (; t; ) {
      if (t.checkHasGeneralization())
        return !0;
      t = t.parent;
    }
    return !1;
  }
  //  添加子节点
  addChildren(t) {
    this.children.push(t);
  }
  //  设置连线样式
  styleLine(t, e, n) {
    const { enableInheritAncestorLineStyle: s } = this.mindMap.opt, r = s ? "getSelfInhertStyle" : "getSelfStyle", a = e[r]("lineWidth") || e.getStyle("lineWidth", !0), o = e[r]("lineColor") || this.getRainbowLineColor(e) || e.getStyle("lineColor", !0), h = e[r]("lineDasharray") || e.getStyle("lineDasharray", !0);
    this.style.line(
      t,
      {
        width: a,
        color: o,
        dasharray: h
      },
      n,
      e
    );
  }
  // 获取彩虹线条颜色
  getRainbowLineColor(t) {
    return this.mindMap.rainbowLines ? this.mindMap.rainbowLines.getNodeColor(t) : "";
  }
  //  移除连线
  removeLine() {
    this._lines.forEach((t) => {
      t.remove();
    }), this._lines = [];
  }
  //  检测当前节点是否是某个节点的祖先节点
  isAncestor(t) {
    if (this.uid === t.uid)
      return !1;
    let e = t.parent;
    for (; e; ) {
      if (this.uid === e.uid)
        return !0;
      e = e.parent;
    }
    return !1;
  }
  // 检查当前节点是否是某个节点的父节点
  isParent(t) {
    if (this.uid === t.uid)
      return !1;
    const e = t.parent;
    return !!(e && this.uid === e.uid);
  }
  //  检测当前节点是否是某个节点的兄弟节点
  isBrother(t) {
    return !this.parent || this.uid === t.uid ? !1 : this.parent.children.find((e) => e.uid === t.uid);
  }
  // 获取该节点在兄弟节点列表中的索引
  getIndexInBrothers() {
    return this.parent && this.parent.children ? this.parent.children.findIndex((t) => t.uid === this.uid) : -1;
  }
  //  获取padding值
  getPaddingVale() {
    return {
      paddingX: this.getStyle("paddingX"),
      paddingY: this.getStyle("paddingY")
    };
  }
  //  获取某个样式
  getStyle(t, e) {
    const n = this.style.merge(t, e);
    return n === void 0 ? "" : n;
  }
  //  获取自定义样式
  getSelfStyle(t) {
    return this.style.getSelfStyle(t);
  }
  //   获取最近一个存在自身自定义样式的祖先节点的自定义样式
  getParentSelfStyle(t) {
    return this.parent ? this.parent.getSelfStyle(t) || this.parent.getParentSelfStyle(t) : null;
  }
  //  获取自身可继承的自定义样式
  getSelfInhertStyle(t) {
    return this.getSelfStyle(t) || // 自身
    this.getParentSelfStyle(t);
  }
  // 获取节点非节点状态的边框大小
  getBorderWidth() {
    return this.style.merge("borderWidth", !1) || 0;
  }
  //  获取数据
  getData(t) {
    return t ? this.nodeData.data[t] : this.nodeData.data;
  }
  // 获取该节点的纯数据，即不包含对节点实例的引用
  getPureData(t = !0, e = !1) {
    return Gi({}, this, t, e);
  }
  // 获取祖先节点列表
  getAncestorNodes() {
    const t = [];
    let e = this.parent;
    for (; e; )
      t.unshift(e), e = e.parent;
    return t;
  }
  // 是否存在自定义样式
  hasCustomStyle() {
    return this.style.hasCustomStyle();
  }
  // 获取节点的尺寸和位置信息，宽高是应用了缩放效果后的实际宽高，位置是相对于浏览器窗口左上角的位置
  getRect() {
    return this.group ? this.group.rbox() : null;
  }
  // 获取节点的尺寸和位置信息，宽高是应用了缩放效果后的实际宽高，位置信息相对于画布
  getRectInSvg() {
    const { scaleX: t, scaleY: e, translateX: n, translateY: s } = this.mindMap.draw.transform();
    let { left: r, top: a, width: o, height: h } = this;
    const l = (r + o) * t + n, c = (a + h) * e + s;
    return r = r * t + n, a = a * e + s, {
      left: r,
      right: l,
      top: a,
      bottom: c,
      width: o * t,
      height: h * e
    };
  }
  // 高亮节点
  highlight() {
    this.group && this.group.addClass("smm-node-highlight");
  }
  // 取消高亮节点
  closeHighlight() {
    this.group && this.group.removeClass("smm-node-highlight");
  }
  // 伪克隆节点
  // 克隆出的节点并不能真正当做一个节点使用
  fakeClone() {
    const t = new es({
      ...this.opt,
      uid: qt()
    });
    return Object.keys(this).forEach((e) => {
      t[e] = this[e];
    }), t;
  }
  // 创建SVG文本节点
  createSvgTextNode(t = "") {
    return new ct().text(t);
  }
  // 获取SVG.js库的一些对象
  getSvgObjects() {
    return {
      SVG: ht,
      G: ft,
      Rect: Dt
    };
  }
  // 检查是否支持拖拽调整宽度
  // 1.富文本模式
  // 2.自定义节点内容
  checkEnableDragModifyNodeWidth() {
    const {
      enableDragModifyNodeWidth: t,
      isUseCustomNodeContent: e,
      customCreateNodeContent: n
    } = this.mindMap.opt;
    return t && (this.mindMap.richText || e && n);
  }
  // 是否存在自定义宽度
  hasCustomWidth() {
    return this.checkEnableDragModifyNodeWidth() && this.customTextWidth !== void 0;
  }
  // 获取子节点的数量
  getChildrenLength() {
    return this.nodeData.children ? this.nodeData.children.length : 0;
  }
}
class T6 {
  constructor(t) {
    this.max = t || 1e3, this.size = 0, this.pool = /* @__PURE__ */ new Map();
  }
  add(t, e) {
    return !this.has(t) && this.size >= this.max ? !1 : (this.delete(t), this.pool.set(t, e), this.size++, !0);
  }
  delete(t) {
    this.pool.has(t) && (this.pool.delete(t), this.size--);
  }
  has(t) {
    return this.pool.has(t);
  }
  get(t) {
    if (this.pool.has(t))
      return this.pool.get(t);
  }
  clear() {
    this.size = 0, this.pool = /* @__PURE__ */ new Map();
  }
}
class Ye {
  //  构造函数
  constructor(t) {
    this.renderer = t, this.mindMap = t.mindMap, this.draw = this.mindMap.draw, this.lineDraw = this.mindMap.lineDraw, this.root = null, this.lru = new T6(this.mindMap.opt.maxNodeCacheCount), this.rootNodeCenterOffset = null;
  }
  //  计算节点位置
  doLayout() {
    throw new Error("【computed】方法为必要方法，需要子类进行重写！");
  }
  //  连线
  renderLine() {
    throw new Error("【renderLine】方法为必要方法，需要子类进行重写！");
  }
  //  定位展开收缩按钮
  renderExpandBtn() {
    throw new Error("【renderExpandBtn】方法为必要方法，需要子类进行重写！");
  }
  //  概要节点
  renderGeneralization() {
  }
  // 通过uid缓存节点
  cacheNode(t, e) {
    this.renderer.nodeCache[t] = e, this.lru.add(t, e);
  }
  // 检查当前来源是否需要重新计算节点大小
  checkIsNeedResizeSources() {
    return this.renderer.checkHasRenderSource(E.CHANGE_THEME);
  }
  // 层级类型改变
  checkIsLayerTypeChange(t, e) {
    if (t >= 2 && e >= 2) return !1;
    if (t >= 2 && e < 2 || t < 2 && e >= 2) return !0;
  }
  // 检查是否是结构布局改变重新渲染展开收起按钮占位元素
  checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(t) {
    this.renderer.checkHasRenderSource(E.CHANGE_LAYOUT) && (t.needRerenderExpandBtnPlaceholderRect = !0);
  }
  // 节点节点数据是否发生了改变
  checkIsNodeDataChange(t, e) {
    if (t)
      t = typeof t == "string" ? JSON.parse(t) : t, t.isActive = e.isActive, t.expand = e.expand, t = JSON.stringify(t);
    else
      return !1;
    return t !== JSON.stringify(e);
  }
  // 检查库前置或后置内容是否改变了
  checkNodeFixChange(t, e, n) {
    let s = !1;
    this.mindMap.nodeInnerPrefixList.forEach((a) => {
      if (a.updateNodeData) {
        const o = a.updateNodeData(t, e);
        o && (s = o);
      }
    });
    let r = !1;
    return this.mindMap.nodeInnerPostfixList.forEach((a) => {
      if (a.updateNodeData) {
        const o = a.updateNodeData(t, n);
        o && (r = o);
      }
    }), s || r;
  }
  //  创建节点实例
  createNode(t, e, n, s, r, a) {
    const o = {};
    this.mindMap.nodeInnerPrefixList.forEach((d) => {
      if (d.createNodeData) {
        const [g, f] = d.createNodeData({
          data: t,
          parent: e,
          ancestors: a,
          layerIndex: s,
          index: r
        });
        o[g] = f;
      }
    });
    const h = {};
    this.mindMap.nodeInnerPostfixList.forEach((d) => {
      if (d.createNodeData) {
        const [g, f] = d.createNodeData({
          data: t,
          parent: e,
          ancestors: a,
          layerIndex: s,
          index: r
        });
        h[g] = f;
      }
    });
    const l = t.data.uid;
    let c = null;
    if (t && t._node && !this.renderer.reRender) {
      c = t._node;
      const d = this.checkIsLayerTypeChange(
        c.layerIndex,
        s
      );
      c.reset(), c.layerIndex = s, n ? c.isRoot = !0 : c.parent = e._node, this.cacheNode(t._node.uid, c), this.checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(c);
      const g = this.checkNodeFixChange(
        c,
        o,
        h
      ), f = this.checkIsNeedResizeSources(), m = this.checkIsNodeDataChange(
        t._node.nodeDataSnapshot,
        t.data
      );
      (f || m || d || c.getData("resetRichText") || c.getData("needUpdate") || g) && (c.getSize(), c.needLayout = !0), this.checkGetGeneralizationChange(c, f);
    } else if ((this.lru.has(l) || this.renderer.lastNodeCache[l]) && !this.renderer.reRender) {
      c = this.lru.get(l) || this.renderer.lastNodeCache[l];
      const d = JSON.stringify(c.getData()), g = this.checkIsLayerTypeChange(
        c.layerIndex,
        s
      );
      c.reset(), c.nodeData = c.handleData(t || {}), c.layerIndex = s, n ? c.isRoot = !0 : c.parent = e._node, this.cacheNode(l, c), this.checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(c), t._node = c;
      const f = this.checkIsNeedResizeSources(), m = this.checkIsNodeDataChange(d, t.data), v = this.checkNodeFixChange(
        c,
        o,
        h
      );
      (f || m || g || c.getData("resetRichText") || c.getData("needUpdate") || v) && (c.getSize(), c.needLayout = !0), this.checkGetGeneralizationChange(c, f);
    } else {
      const d = l || qt();
      c = new es({
        data: t,
        uid: d,
        renderer: this.renderer,
        mindMap: this.mindMap,
        draw: this.draw,
        layerIndex: s,
        isRoot: n,
        parent: n ? null : e._node,
        ...o
      }), t.data.uid = d, this.cacheNode(d, c), t._node = c;
    }
    return t.data.isActive && this.renderer.addNodeToActiveList(c), this.mindMap.renderer.findActiveNodeIndex(c) !== -1 && c.setData({
      isActive: !0
    }), n ? this.root = c : e._node.addChildren(c), c;
  }
  // 检查概要节点是否需要更新
  checkGetGeneralizationChange(t, e) {
    const n = t.getData("generalization");
    n && t._generalizationList && t._generalizationList.length > 0 && t._generalizationList.forEach((s, r) => {
      const a = s.generalizationNode, o = a.getData(), h = n[r];
      (e || h && JSON.stringify(o) !== JSON.stringify(h)) && (h && (a.nodeData.data = h), a.getSize(), a.needLayout = !0);
    });
  }
  // 格式化节点位置
  formatPosition(t, e, n) {
    return typeof t == "number" ? t : co[t] !== void 0 ? e * co[t] : /^\d\d*%$/.test(t) ? Number.parseFloat(t) / 100 * e : (e - n) / 2;
  }
  // 规范initRootNodePosition配置
  formatInitRootNodePosition(t) {
    const { CENTER: e } = E.INIT_ROOT_NODE_POSITION;
    return (!t || !Array.isArray(t) || t.length < 2) && (t = [e, e]), t;
  }
  //  定位节点到画布中间
  setNodeCenter(t, e) {
    let { initRootNodePosition: n } = this.mindMap.opt;
    n = this.formatInitRootNodePosition(
      e || n
    ), t.left = this.formatPosition(
      n[0],
      this.mindMap.width,
      t.width
    ), t.top = this.formatPosition(
      n[1],
      this.mindMap.height,
      t.height
    );
  }
  // 当initRootNodePosition配置不为默认的['center','center']时，计算当前配置和默认配置情况下，根节点位置的差值
  getRootCenterOffset(t, e) {
    if (this.rootNodeCenterOffset) return this.rootNodeCenterOffset;
    let { initRootNodePosition: n } = this.mindMap.opt;
    const { CENTER: s } = E.INIT_ROOT_NODE_POSITION;
    if (n = this.formatInitRootNodePosition(n), n[0] === s && n[1] === s)
      this.rootNodeCenterOffset = {
        x: 0,
        y: 0
      };
    else {
      const r = {
        width: t,
        height: e
      }, a = {
        width: t,
        height: e
      };
      this.setNodeCenter(r, [s, s]), this.setNodeCenter(a), this.rootNodeCenterOffset = {
        x: a.left - r.left,
        y: a.top - r.top
      };
    }
    return this.rootNodeCenterOffset;
  }
  //  更新子节点属性
  updateChildren(t, e, n) {
    t.forEach((s) => {
      s[e] += n, s.children && s.children.length && !s.hasCustomPosition() && this.updateChildren(s.children, e, n);
    });
  }
  //  更新子节点多个属性
  updateChildrenPro(t, e) {
    t.forEach((n) => {
      Object.keys(e).forEach((s) => {
        n[s] += e[s];
      }), n.children && n.children.length && !n.hasCustomPosition() && this.updateChildrenPro(n.children, e);
    });
  }
  //  递归计算节点的宽度
  getNodeAreaWidth(t, e = !1) {
    let n = [], s = 0, r = (a, o) => {
      e && a.checkHasGeneralization() && (s += a._generalizationNodeWidth), a.children.length ? (o += a.width / 2, a.children.forEach((h) => {
        r(h, o);
      })) : (o += a.width, n.push(o));
    };
    return r(t, 0), Math.max(...n) + s;
  }
  //  二次贝塞尔曲线
  quadraticCurvePath(t, e, n, s, r = !1) {
    let a, o;
    return r ? (a = t + (n - t) * 0.8, o = e + (s - e) * 0.2) : (a = t + (n - t) * 0.2, o = e + (s - e) * 0.8), `M ${t},${e} Q ${a},${o} ${n},${s}`;
  }
  //  三次贝塞尔曲线
  cubicBezierPath(t, e, n, s, r = !1) {
    let a, o, h, l;
    return r ? (a = t, o = e + (s - e) / 2, h = n, l = o) : (a = t + (n - t) / 2, o = e, h = a, l = s), `M ${t},${e} C ${a},${o} ${h},${l} ${n},${s}`;
  }
  // 根据a,b两个点的位置，计算去除圆角大小后的新的b点
  computeNewPoint(t, e, n = 0) {
    if (t[0] === e[0])
      return e[1] > t[1] ? [e[0], e[1] - n] : [e[0], e[1] + n];
    if (t[1] === e[1])
      return e[0] > t[0] ? [e[0] - n, e[1]] : [e[0] + n, e[1]];
  }
  // 创建一段折线路径
  // 最后一个拐角支持圆角
  createFoldLine(t) {
    const { lineRadius: e } = this.mindMap.themeConfig, n = t.length;
    let s = "", r = "";
    if (n >= 3 && e > 0) {
      const a = t[n - 3], o = t[n - 2], h = t[n - 1];
      if (!(a[0].toFixed(0) === o[0].toFixed(0) && o[0].toFixed(0) === h[0].toFixed(0) || a[1].toFixed(0) === o[1].toFixed(0) && o[1].toFixed(0) === h[1].toFixed(0))) {
        const c = this.computeNewPoint(a, o, e), d = this.computeNewPoint(h, o, e);
        r = `Q ${o[0]},${o[1]} ${d[0]},${d[1]}`, t.splice(n - 2, 1, c, r);
      }
    }
    return t.forEach((a, o) => {
      if (typeof a == "string")
        s += a;
      else {
        const [h, l] = a;
        o === 0 ? s += `M ${h},${l}` : s += `L ${h},${l}`;
      }
    }), s;
  }
  //   获取节点的marginX
  getMarginX(t) {
    const { themeConfig: e, opt: n } = this.mindMap, { second: s, node: r } = e, a = n.hoverRectPadding * 2;
    return t === 1 ? s.marginX + a : r.marginX + a;
  }
  //  获取节点的marginY
  getMarginY(t) {
    const { themeConfig: e, opt: n } = this.mindMap, { second: s, node: r } = e, a = n.hoverRectPadding * 2;
    return t === 1 ? s.marginY + a : r.marginY + a;
  }
  //  获取节点包括概要在内的宽度
  getNodeWidthWithGeneralization(t) {
    return Math.max(
      t.width,
      t.checkHasGeneralization() ? t._generalizationNodeWidth : 0
    );
  }
  //  获取节点包括概要在内的高度
  getNodeHeightWithGeneralization(t) {
    return Math.max(
      t.height,
      t.checkHasGeneralization() ? t._generalizationNodeHeight : 0
    );
  }
  //  获取节点的边界值
  /**
   * dir：生长方向，h（水平）、v（垂直）
   * isLeft：是否向左生长
   */
  getNodeBoundaries(t, e) {
    let { generalizationLineMargin: n, generalizationNodeMargin: s } = this.mindMap.themeConfig, r = (c) => {
      let d = 1 / 0, g = -1 / 0, f = 1 / 0, m = -1 / 0;
      c.children && c.children.length > 0 && c.children.forEach((x) => {
        let { left: w, right: M, top: T, bottom: A } = r(x), D = x.checkHasGeneralization() && x.getData("expand") ? x._generalizationNodeWidth + s : 0, I = x.checkHasGeneralization() && x.getData("expand") ? x._generalizationNodeHeight + s : 0;
        w - (e === "h" ? D : 0) < d && (d = w - (e === "h" ? D : 0)), M + (e === "h" ? D : 0) > g && (g = M + (e === "h" ? D : 0)), T < f && (f = T), A + (e === "v" ? I : 0) > m && (m = A + (e === "v" ? I : 0));
      });
      let v = {
        left: c.left,
        right: c.left + c.width,
        top: c.top,
        bottom: c.top + c.height
      };
      return {
        left: v.left < d ? v.left : d,
        right: v.right > g ? v.right : g,
        top: v.top < f ? v.top : f,
        bottom: v.bottom > m ? v.bottom : m
      };
    }, { left: a, right: o, top: h, bottom: l } = r(t);
    return {
      left: a,
      right: o,
      top: h,
      bottom: l,
      generalizationLineMargin: n,
      generalizationNodeMargin: s
    };
  }
  // 获取指定索引区间的子节点的边界范围
  getChildrenBoundaries(t, e, n = 0, s) {
    let { generalizationLineMargin: r, generalizationNodeMargin: a } = this.mindMap.themeConfig;
    const o = t.children.slice(n, s + 1);
    let h = 1 / 0, l = -1 / 0, c = 1 / 0, d = -1 / 0;
    return o.forEach((g) => {
      const f = this.getNodeBoundaries(g, e);
      h = f.left < h ? f.left : h, l = f.right > l ? f.right : l, c = f.top < c ? f.top : c, d = f.bottom > d ? f.bottom : d;
    }), {
      left: h,
      right: l,
      top: c,
      bottom: d,
      generalizationLineMargin: r,
      generalizationNodeMargin: a
    };
  }
  // 获取节点概要的渲染边界
  getNodeGeneralizationRenderBoundaries(t, e) {
    let n = null;
    return t.range ? n = this.getChildrenBoundaries(
      t.node,
      e,
      t.range[0],
      t.range[1]
    ) : n = this.getNodeBoundaries(t.node, e), n;
  }
  // 获取节点实际存在几个子节点
  getNodeActChildrenLength(t) {
    return t.nodeData.children && t.nodeData.children.length;
  }
  // 设置连线样式
  setLineStyle(t, e, n, s) {
    e.plot(this.transformPath(n)), t && t(e, s, !0);
  }
  // 转换路径，可以转换成特殊风格的线条样式
  transformPath(t) {
    const { customTransformNodeLinePath: e } = this.mindMap.opt;
    return e ? e(t) : t;
  }
}
class Po extends Ye {
  //  构造函数
  constructor(t = {}, e) {
    super(t), this.isUseLeft = e === E.LAYOUT.LOGICAL_STRUCTURE_LEFT;
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue();
      },
      () => {
        this.computedTopValue();
      },
      () => {
        this.adjustTopValue();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  //  遍历数据计算节点的left、width、height
  computedBaseValue() {
    let t = 0;
    K(
      this.renderer.renderTree,
      null,
      (e, n, s, r, a, o) => {
        let h = this.createNode(e, n, s, r, a, o);
        if (h.sortIndex = t, t++, s ? this.setNodeCenter(h) : this.isUseLeft ? h.left = n._node.left - h.width - this.getMarginX(r) : h.left = n._node.left + n._node.width + this.getMarginX(r), !e.data.expand)
          return !0;
      },
      (e, n, s, r) => {
        let a = e.data.expand === !1 ? 0 : e._node.children.length;
        e._node.childrenAreaHeight = a ? e._node.children.reduce((h, l) => h + l.height, 0) + (a + 1) * this.getMarginY(r + 1) : 0;
        let o = e._node.checkHasGeneralization() ? e._node._generalizationNodeHeight + this.getMarginY(r + 1) : 0;
        e._node.childrenAreaHeight2 = Math.max(
          e._node.childrenAreaHeight,
          o
        );
      },
      !0,
      0
    );
  }
  //  遍历节点树计算节点的top
  computedTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (t.getData("expand") && t.children && t.children.length) {
          let r = this.getMarginY(s + 1), o = t.top + t.height / 2 - t.childrenAreaHeight / 2 + r;
          t.children.forEach((h) => {
            h.top = o, o += h.height + r;
          });
        }
      },
      null,
      !0
    );
  }
  //  调整节点top
  adjustTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand"))
          return;
        let r = t.childrenAreaHeight2 - this.getMarginY(s + 1) * 2 - t.height;
        r > 0 && this.updateBrothers(t, r / 2);
      },
      null,
      !0
    );
  }
  //  更新兄弟节点的top
  updateBrothers(t, e) {
    if (t.parent) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.uid === t.uid || r.hasCustomPosition())
          return;
        let o = 0;
        a < s ? o = -e : a > s && (o = e), r.top += o, r.children && r.children.length && this.updateChildren(r.children, "top", o);
      }), this.updateBrothers(t.parent, e);
    }
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n, s) {
    s === "curve" ? this.renderLineCurve(t, e, n) : s === "direct" ? this.renderLineDirect(t, e, n) : this.renderLineStraight(t, e, n);
  }
  //  直线风格连线
  renderLineStraight(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    let g = (this.getMarginX(t.layerIndex + 1) - h) * 0.6;
    this.isUseLeft && (g *= -1);
    let f = this.mindMap.themeConfig.nodeUseLineStyle;
    t.children.forEach((m, v) => {
      let x;
      this.isUseLeft ? x = t.layerIndex === 0 ? s : s - h : x = t.layerIndex === 0 ? s + a : s + a + h;
      let w = r + o / 2, M = this.isUseLeft ? m.left + m.width : m.left, T = m.top + m.height / 2, A = f ? m.width * (this.isUseLeft ? -1 : 1) : 0;
      w = f && !t.isRoot ? w + o / 2 : w, T = f ? T + m.height / 2 : T;
      let D = this.createFoldLine([
        [x, w],
        [x + g, w],
        [x + g, T],
        [M + A, T]
      ]);
      this.setLineStyle(n, e[v], D, m);
    });
  }
  //  直连风格
  renderLineDirect(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    const { nodeUseLineStyle: d } = this.mindMap.themeConfig;
    t.children.forEach((g, f) => {
      t.layerIndex === 0 && (h = 0);
      let m = this.isUseLeft ? s - h : s + a + h, v = r + o / 2, x = this.isUseLeft ? g.left + g.width : g.left, w = g.top + g.height / 2;
      v = d && !t.isRoot ? v + o / 2 : v, w = d ? w + g.height / 2 : w;
      let M = d ? ` L ${this.isUseLeft ? g.left : g.left + g.width},${w}` : "", T = `M ${m},${v} L ${x},${w}` + M;
      this.setLineStyle(n, e[f], T, g);
    });
  }
  //  曲线风格连线
  renderLineCurve(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    const {
      nodeUseLineStyle: d,
      rootLineStartPositionKeepSameInCurve: g,
      rootLineKeepSameInCurve: f
    } = this.mindMap.themeConfig;
    t.children.forEach((m, v) => {
      t.layerIndex === 0 && (h = 0);
      let x;
      this.isUseLeft ? x = t.layerIndex === 0 && !g ? s + a / 2 : s - h : x = t.layerIndex === 0 && !g ? s + a / 2 : s + a + h;
      let w = r + o / 2, M = this.isUseLeft ? m.left + m.width : m.left, T = m.top + m.height / 2, A = "";
      w = d && !t.isRoot ? w + o / 2 : w, T = d ? T + m.height / 2 : T;
      let D;
      this.isUseLeft ? D = d ? ` L ${m.left},${T}` : "" : D = d ? ` L ${m.left + m.width},${T}` : "", t.isRoot && !f ? A = this.quadraticCurvePath(x, w, M, T) + D : A = this.cubicBezierPath(x, w, M, T) + D, this.setLineStyle(n, e[v], A, m);
    });
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r, layerIndex: a } = t;
    a === 0 && (r = 0);
    let { translateX: o, translateY: h } = e.transform(), l = this.mindMap.themeConfig.nodeUseLineStyle ? s / 2 : 0, c = this.isUseLeft ? 0 - r : n, d = s / 2 + l;
    c === o && d === h || e.translate(c - o, d - h);
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let {
        left: n,
        top: s,
        bottom: r,
        right: a,
        generalizationLineMargin: o,
        generalizationNodeMargin: h
      } = this.getNodeGeneralizationRenderBoundaries(e, "h"), l = this.isUseLeft ? n - o : a + o, c = l, d = s, g = l, f = r, m = c + (this.isUseLeft ? -20 : 20), v = d + (f - d) / 2, x = `M ${c},${d} Q ${m},${v} ${g},${f}`;
      e.generalizationLine.plot(x), e.generalizationNode.left = l + (this.isUseLeft ? -h : h) - (this.isUseLeft ? e.generalizationNode.width : 0), e.generalizationNode.top = s + (r - s - e.generalizationNode.height) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s) {
    this.isUseLeft ? t.size(e, s).x(-e).y(0) : t.size(e, s).x(n).y(0);
  }
}
let b6 = class extends Ye {
  //  构造函数
  // 在逻辑结构图的基础上增加一个变量来记录生长方向，向左还是向右，同时在计算left的时候根据方向来计算、调整top时只考虑同方向的节点即可
  constructor(t = {}) {
    super(t);
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue();
      },
      () => {
        this.computedTopValue();
      },
      () => {
        this.adjustTopValue();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  //  遍历数据计算节点的left、width、height
  computedBaseValue() {
    K(
      this.renderer.renderTree,
      null,
      (t, e, n, s, r, a) => {
        let o = this.createNode(
          t,
          e,
          n,
          s,
          r,
          a
        );
        if (n ? this.setNodeCenter(o) : (e._node.dir ? o.dir = e._node.dir : o.dir = o.getData("dir") || (r % 2 === 0 ? E.LAYOUT_GROW_DIR.RIGHT : E.LAYOUT_GROW_DIR.LEFT), o.left = o.dir === E.LAYOUT_GROW_DIR.RIGHT ? e._node.left + e._node.width + this.getMarginX(s) : e._node.left - this.getMarginX(s) - o.width), !t.data.expand)
          return !0;
      },
      (t, e, n, s) => {
        if (!t.data.expand) {
          t._node.leftChildrenAreaHeight = 0, t._node.rightChildrenAreaHeight = 0;
          return;
        }
        let r = 0, a = 0, o = 0, h = 0;
        t._node.children.forEach((c) => {
          c.dir === E.LAYOUT_GROW_DIR.LEFT ? (r++, o += c.height) : (a++, h += c.height);
        }), t._node.leftChildrenAreaHeight = o + (r + 1) * this.getMarginY(s + 1), t._node.rightChildrenAreaHeight = h + (a + 1) * this.getMarginY(s + 1);
        let l = t._node.checkHasGeneralization() ? t._node._generalizationNodeHeight + this.getMarginY(s + 1) : 0;
        t._node.leftChildrenAreaHeight2 = Math.max(
          t._node.leftChildrenAreaHeight,
          l
        ), t._node.rightChildrenAreaHeight2 = Math.max(
          t._node.rightChildrenAreaHeight,
          l
        );
      },
      !0,
      0
    );
  }
  //  遍历节点树计算节点的top
  computedTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (t.getData("expand") && t.children && t.children.length) {
          let r = this.getMarginY(s + 1), a = t.top + t.height / 2 + r, o = a - t.leftChildrenAreaHeight / 2, h = a - t.rightChildrenAreaHeight / 2;
          t.children.forEach((l) => {
            l.dir === E.LAYOUT_GROW_DIR.LEFT ? (l.top = o, o += l.height + r) : (l.top = h, h += l.height + r);
          });
        }
      },
      null,
      !0
    );
  }
  //  调整节点top
  adjustTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand"))
          return;
        let r = this.getMarginY(s + 1) * 2 + t.height, a = t.leftChildrenAreaHeight2 - r, o = t.rightChildrenAreaHeight2 - r;
        (a > 0 || o > 0) && this.updateBrothers(t, a / 2, o / 2);
      },
      null,
      !0
    );
  }
  //  更新兄弟节点的top
  updateBrothers(t, e, n) {
    if (t.parent) {
      let s = t.parent.children.filter((a) => a.dir === t.dir), r = ut(t, s);
      s.forEach((a, o) => {
        if (a.hasCustomPosition())
          return;
        let h = 0, l = a.dir === E.LAYOUT_GROW_DIR.LEFT ? e : n;
        o < r ? h = -l : o > r && (h = l), a.top += h, a.children && a.children.length && this.updateChildren(a.children, "top", h);
      }), this.updateBrothers(t.parent, e, n);
    }
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n, s) {
    s === "curve" ? this.renderLineCurve(t, e, n) : s === "direct" ? this.renderLineDirect(t, e, n) : this.renderLineStraight(t, e, n);
  }
  //  直线风格连线
  renderLineStraight(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    let g = (this.getMarginX(t.layerIndex + 1) - h) * 0.6, f = this.mindMap.themeConfig.nodeUseLineStyle;
    t.children.forEach((m, v) => {
      let x = 0, w = 0, M = f ? m.width : 0;
      m.dir === E.LAYOUT_GROW_DIR.LEFT ? (w = -g, x = t.layerIndex === 0 ? s : s - h, M = -M) : (w = g, x = t.layerIndex === 0 ? s + a : s + a + h);
      let T = r + o / 2, A = m.dir === E.LAYOUT_GROW_DIR.LEFT ? m.left + m.width : m.left, D = m.top + m.height / 2;
      T = f && !t.isRoot ? T + o / 2 : T, D = f ? D + m.height / 2 : D;
      let I = this.createFoldLine([
        [x, T],
        [x + w, T],
        [x + w, D],
        [A + M, D]
      ]);
      this.setLineStyle(n, e[v], I, m);
    });
  }
  //  直连风格
  renderLineDirect(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    const { nodeUseLineStyle: d } = this.mindMap.themeConfig;
    t.children.forEach((g, f) => {
      t.layerIndex === 0 && (h = 0);
      let m = g.dir === E.LAYOUT_GROW_DIR.LEFT ? s - h : s + a + h, v = r + o / 2, x = g.dir === E.LAYOUT_GROW_DIR.LEFT ? g.left + g.width : g.left, w = g.top + g.height / 2;
      v = d && !t.isRoot ? v + o / 2 : v, w = d ? w + g.height / 2 : w;
      let M = "";
      d && (g.dir === E.LAYOUT_GROW_DIR.LEFT ? M = ` L ${g.left},${w}` : M = ` L ${g.left + g.width},${w}`);
      let T = `M ${m},${v} L ${x},${w}` + M;
      this.setLineStyle(n, e[f], T, g);
    });
  }
  //  曲线风格连线
  renderLineCurve(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    const {
      nodeUseLineStyle: d,
      rootLineKeepSameInCurve: g,
      rootLineStartPositionKeepSameInCurve: f
    } = this.mindMap.themeConfig;
    t.children.forEach((m, v) => {
      t.layerIndex === 0 && (h = 0);
      let x = t.layerIndex === 0 && !f ? s + a / 2 : m.dir === E.LAYOUT_GROW_DIR.LEFT ? s - h : s + a + h, w = r + o / 2, M = m.dir === E.LAYOUT_GROW_DIR.LEFT ? m.left + m.width : m.left, T = m.top + m.height / 2, A = "";
      w = d && !t.isRoot ? w + o / 2 : w, T = d ? T + m.height / 2 : T;
      let D = "";
      d && (m.dir === E.LAYOUT_GROW_DIR.LEFT ? D = ` L ${m.left},${T}` : D = ` L ${m.left + m.width},${T}`), t.isRoot && !g ? A = this.quadraticCurvePath(x, w, M, T) + D : A = this.cubicBezierPath(x, w, M, T) + D, this.setLineStyle(n, e[v], A, m);
    });
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r } = t, { translateX: a, translateY: o } = e.transform(), h = this.mindMap.themeConfig.nodeUseLineStyle ? s / 2 : 0, l = t.dir === E.LAYOUT_GROW_DIR.LEFT ? 0 - r : n, c = s / 2 + h;
    if (l === a && c === o)
      return;
    let d = l - a, g = c - o;
    e.translate(d, g);
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let n = e.node.dir === E.LAYOUT_GROW_DIR.LEFT, {
        top: s,
        bottom: r,
        left: a,
        right: o,
        generalizationLineMargin: h,
        generalizationNodeMargin: l
      } = this.getNodeGeneralizationRenderBoundaries(e, "h"), c = n ? a - h : o + h, d = c, g = s, f = c, m = r, v = d + (n ? -20 : 20), x = g + (m - g) / 2, w = `M ${d},${g} Q ${v},${x} ${f},${m}`;
      e.generalizationLine.plot(w), e.generalizationNode.left = c + (n ? -l : l) - (n ? e.generalizationNode.width : 0), e.generalizationNode.top = s + (r - s - e.generalizationNode.height) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s, r) {
    r.dir === E.LAYOUT_GROW_DIR.LEFT ? t.size(e, s).x(-e).y(0) : t.size(e, s).x(n).y(0);
  }
};
class N6 extends Ye {
  //  构造函数
  constructor(t = {}) {
    super(t);
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue();
      },
      () => {
        this.computedLeftTopValue();
      },
      () => {
        this.adjustLeftTopValue();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  //  遍历数据计算节点的left、width、height
  computedBaseValue() {
    K(
      this.renderer.renderTree,
      null,
      (t, e, n, s, r, a) => {
        let o = this.createNode(t, e, n, s, r, a);
        if (n ? this.setNodeCenter(o) : e._node.isRoot && (o.top = e._node.top + e._node.height + this.getMarginX(s)), !t.data.expand)
          return !0;
      },
      (t, e, n, s) => {
        if (n) {
          let r = t.data.expand === !1 ? 0 : t._node.children.length;
          t._node.childrenAreaWidth = r ? t._node.children.reduce((a, o) => a + o.width, 0) + (r + 1) * this.getMarginX(s + 1) : 0;
        }
      },
      !0,
      0
    );
  }
  //  遍历节点树计算节点的left、top
  computedLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (t.getData("expand") && t.children && t.children.length) {
          let r = this.getMarginX(s + 1), a = this.getMarginY(s + 1);
          if (n) {
            let h = t.left + t.width / 2 - t.childrenAreaWidth / 2 + r;
            t.children.forEach((l) => {
              l.left = h, h += l.width + r;
            });
          } else {
            let o = t.top + this.getNodeHeightWithGeneralization(t) + a + (this.getNodeActChildrenLength(t) > 0 ? t.expandBtnSize : 0);
            t.children.forEach((h) => {
              h.left = t.left + t.width * 0.5, h.top = o, o += this.getNodeHeightWithGeneralization(h) + a + (this.getNodeActChildrenLength(h) > 0 ? h.expandBtnSize : 0);
            });
          }
        }
      },
      null,
      !0
    );
  }
  //  调整节点left、top
  adjustLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand"))
          return;
        if (e && e.isRoot) {
          let o = this.getNodeAreaWidth(t, !0) - t.width;
          o > 0 && this.updateBrothersLeft(t, o);
        }
        let r = t.children.length;
        if (e && !e.isRoot && r > 0) {
          let a = this.getMarginY(s + 1), o = t.children.reduce((h, l) => h + this.getNodeHeightWithGeneralization(l) + (this.getNodeActChildrenLength(l) > 0 ? l.expandBtnSize : 0), 0) + r * a;
          this.updateBrothersTop(t, o);
        }
      },
      (t, e, n) => {
        if (n) {
          let { right: s, left: r } = this.getNodeBoundaries(t, "h"), a = s - r, o = t.left - r - (a - t.width) / 2;
          this.updateChildren(t.children, "left", o);
        }
      },
      !0
    );
  }
  //  调整兄弟节点的left
  updateBrothersLeft(t, e) {
    if (t.parent) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        r.hasCustomPosition() || a <= s || (r.left += e, r.children && r.children.length && this.updateChildren(r.children, "left", e));
      }), this.updateBrothersLeft(t.parent, e);
    }
  }
  //  调整兄弟节点的top
  updateBrothersTop(t, e) {
    if (t.parent && !t.parent.isRoot) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.hasCustomPosition())
          return;
        let o = 0;
        a > s && (o = e), r.top += o, r.children && r.children.length && this.updateChildren(r.children, "top", o);
      }), this.updateBrothersTop(t.parent, e);
    }
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    let d = t.children.length, g = this.getMarginX(t.layerIndex + 1);
    if (t.isRoot) {
      let f = s + a / 2, m = r + o, v = g * 0.7, x = 1 / 0, w = -1 / 0;
      t.children.forEach((T, A) => {
        let D = T.left + T.width / 2, I = T.top;
        D < x && (x = D), D > w && (w = D);
        let P = this.mindMap.themeConfig.nodeUseLineStyle ? ` L ${T.left},${I} L ${T.left + T.width},${I}` : "", $ = `M ${D},${m + v} L ${D},${m + v > I ? I + T.height : I}` + P;
        this.setLineStyle(n, e[A], $, T);
      }), x = Math.min(x, f), w = Math.max(w, f);
      let M = this.lineDraw.path();
      if (t.style.line(M), M.plot(this.transformPath(`M ${f},${m} L ${f},${m + v}`)), t._lines.push(M), n && n(M, t), d > 0) {
        let T = this.lineDraw.path();
        t.style.line(T), T.plot(this.transformPath(`M ${x},${m + v} L ${w},${m + v}`)), t._lines.push(T), n && n(T, t);
      }
    } else {
      let f = r + o, m = -1 / 0, v = t.left + t.width * 0.3;
      if (t.children.forEach((x, w) => {
        let M = x.top + x.height / 2;
        M > m && (m = M);
        let T = "", A = x.left, D = x.left + x.width < v, I = !1;
        D ? A = x.left + x.width : x.left < v && x.left + x.width > v && (I = !0, M = x.top, m = M), M > r && M < f ? T = `M ${D ? t.left : t.left + t.width},${M} L ${A},${M}` : M < f ? (I && (M = x.top + x.height, A = v), T = `M ${v},${r} L ${v},${M} L ${A},${M}`) : (I && (A = v), T = `M ${v},${M} L ${A},${M}`);
        let P = this.mindMap.themeConfig.nodeUseLineStyle ? ` L ${A},${M - x.height / 2} L ${A},${M + x.height / 2}` : "";
        T += P, this.setLineStyle(n, e[w], T, x);
      }), d > 0) {
        let x = this.lineDraw.path();
        h = d > 0 ? h : 0, t.style.line(x), m < f + h ? x.hide() : (x.plot(
          this.transformPath(`M ${v},${f + h} L ${v},${m}`)
        ), x.show()), t._lines.push(x), n && n(x, t);
      }
    }
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r, isRoot: a } = t;
    if (!a) {
      let { translateX: o, translateY: h } = e.transform();
      e.translate(
        n * 0.3 - r / 2 - o,
        s + r / 2 - h
      );
    }
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let {
        top: n,
        bottom: s,
        right: r,
        generalizationLineMargin: a,
        generalizationNodeMargin: o
      } = this.getNodeGeneralizationRenderBoundaries(e, "h"), h = r + a, l = n, c = r + a, d = s, g = h + 20, f = l + (d - l) / 2, m = `M ${h},${l} Q ${g},${f} ${c},${d}`;
      e.generalizationLine.plot(this.transformPath(m)), e.generalizationNode.left = r + o, e.generalizationNode.top = n + (s - n - e.generalizationNode.height) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s, r) {
    t.size(n, e).x(0).y(s);
  }
}
class S6 extends Ye {
  //  构造函数
  constructor(t = {}) {
    super(t);
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue();
      },
      () => {
        this.computedLeftValue();
      },
      () => {
        this.adjustLeftValue();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  //  遍历数据计算节点的left、width、height
  computedBaseValue() {
    K(
      this.renderer.renderTree,
      null,
      (t, e, n, s, r, a) => {
        let o = this.createNode(
          t,
          e,
          n,
          s,
          r,
          a
        );
        if (n ? this.setNodeCenter(o) : o.top = e._node.top + e._node.height + this.getMarginX(s), !t.data.expand)
          return !0;
      },
      (t, e, n, s) => {
        let r = t.data.expand === !1 ? 0 : t._node.children.length;
        t._node.childrenAreaWidth = r ? t._node.children.reduce((o, h) => o + h.width, 0) + (r + 1) * this.getMarginY(s + 1) : 0;
        let a = t._node.checkHasGeneralization() ? t._node._generalizationNodeWidth + this.getMarginY(s + 1) : 0;
        t._node.childrenAreaWidth2 = Math.max(
          t._node.childrenAreaWidth,
          a
        );
      },
      !0,
      0
    );
  }
  //  遍历节点树计算节点的left
  computedLeftValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (t.getData("expand") && t.children && t.children.length) {
          let r = this.getMarginY(s + 1), o = t.left + t.width / 2 - t.childrenAreaWidth / 2 + r;
          t.children.forEach((h) => {
            h.left = o, o += h.width + r;
          });
        }
      },
      null,
      !0
    );
  }
  //  调整节点left
  adjustLeftValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand"))
          return;
        let r = t.childrenAreaWidth2 - this.getMarginY(s + 1) * 2 - t.width;
        r > 0 && this.updateBrothers(t, r / 2);
      },
      null,
      !0
    );
  }
  //  更新兄弟节点的left
  updateBrothers(t, e) {
    if (t.parent) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.hasCustomPosition())
          return;
        let o = 0;
        a < s ? o = -e : a > s && (o = e), r.left += o, r.children && r.children.length && this.updateChildren(r.children, "left", o);
      }), this.updateBrothers(t.parent, e);
    }
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n, s) {
    s === "curve" ? this.renderLineCurve(t, e, n) : s === "direct" ? this.renderLineDirect(t, e, n) : this.renderLineStraight(t, e, n);
  }
  //  曲线风格连线
  renderLineCurve(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    const {
      nodeUseLineStyle: d,
      rootLineStartPositionKeepSameInCurve: g,
      rootLineKeepSameInCurve: f
    } = this.mindMap.themeConfig;
    t.children.forEach((m, v) => {
      t.layerIndex === 0 && (h = 0);
      let x = s + a / 2, w = t.layerIndex === 0 && !g ? r + o / 2 : r + o + h, M = m.left + m.width / 2, T = m.top, A = "", D = d ? ` L ${m.left},${T} L ${m.left + m.width},${T}` : "";
      t.isRoot && !f ? A = this.quadraticCurvePath(x, w, M, T, !0) + D : A = this.cubicBezierPath(x, w, M, T, !0) + D, this.setLineStyle(n, e[v], A, m);
    });
  }
  //  直连风格
  renderLineDirect(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o } = t;
    const { nodeUseLineStyle: h } = this.mindMap.themeConfig;
    let l = s + a / 2, c = r + o;
    t.children.forEach((d, g) => {
      let f = d.left + d.width / 2, m = d.top, v = h ? ` L ${d.left},${m} L ${d.left + d.width},${m}` : "", x = `M ${l},${c} L ${f},${m}` + v;
      this.setLineStyle(n, e[g], x, d);
    });
  }
  //  直线风格连线
  renderLineStraight(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h, isRoot: l } = t;
    const { alwaysShowExpandBtn: c, notShowExpandBtn: d } = this.mindMap.opt;
    (!c || d) && (h = 0);
    let g = s + a / 2, f = r + o, v = this.getMarginX(t.layerIndex + 1) * 0.7, x = 1 / 0, w = -1 / 0, M = t.children.length;
    t.children.forEach((A, D) => {
      let I = A.left + A.width / 2, P = f + v > A.top ? A.top + A.height : A.top;
      I < x && (x = I), I > w && (w = I);
      let $ = this.mindMap.themeConfig.nodeUseLineStyle ? ` L ${A.left},${P} L ${A.left + A.width},${P}` : "", R = `M ${I},${f + v} L ${I},${P}` + $;
      this.setLineStyle(n, e[D], R, A);
    }), x = Math.min(g, x), w = Math.max(g, w);
    let T = this.lineDraw.path();
    if (t.style.line(T), h = M > 0 && !l ? h : 0, T.plot(
      this.transformPath(`M ${g},${f + h} L ${g},${f + v}`)
    ), t._lines.push(T), n && n(T, t), M > 0) {
      let A = this.lineDraw.path();
      t.style.line(A), A.plot(this.transformPath(`M ${x},${f + v} L ${w},${f + v}`)), t._lines.push(A), n && n(A, t);
    }
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r } = t, { translateX: a, translateY: o } = e.transform();
    e.translate(
      n / 2 - r / 2 - a,
      s + r / 2 - o
    );
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let {
        bottom: n,
        left: s,
        right: r,
        generalizationLineMargin: a,
        generalizationNodeMargin: o
      } = this.getNodeGeneralizationRenderBoundaries(e, "v"), h = s, l = n + a, c = r, d = n + a, g = h + (c - h) / 2, f = l + 20, m = `M ${h},${l} Q ${g},${f} ${c},${d}`;
      e.generalizationLine.plot(this.transformPath(m)), e.generalizationNode.top = n + o, e.generalizationNode.left = s + (r - s - e.generalizationNode.width) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s, r) {
    t.size(n, e).x(0).y(s);
  }
}
class Bo extends Ye {
  //  构造函数
  constructor(t = {}, e) {
    super(t), this.layout = e;
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue();
      },
      () => {
        this.computedLeftTopValue();
      },
      () => {
        this.adjustLeftTopValue();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  //  遍历数据创建节点、计算根节点的位置，计算根节点的子节点的top值
  computedBaseValue() {
    K(
      this.renderer.renderTree,
      null,
      (t, e, n, s, r, a) => {
        let o = this.createNode(t, e, n, s, r, a);
        if (n ? this.setNodeCenter(o) : (this.layout === E.LAYOUT.TIMELINE2 ? e._node.dir ? o.dir = e._node.dir : o.dir = r % 2 === 0 ? E.LAYOUT_GROW_DIR.BOTTOM : E.LAYOUT_GROW_DIR.TOP : o.dir = "", e._node.isRoot && (o.top = e._node.top + (t._node.height > e._node.height ? -(t._node.height - e._node.height) / 2 : (e._node.height - t._node.height) / 2))), !t.data.expand)
          return !0;
      },
      null,
      !0,
      0
    );
  }
  //  遍历节点树计算节点的left、top
  computedLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s, r) => {
        if (t.getData("expand") && t.children && t.children.length) {
          let a = this.getMarginX(s + 1), o = this.getMarginY(s + 1);
          if (n) {
            let l = t.left + t.width + a;
            t.children.forEach((c) => {
              c.left = l, l += c.width + a;
            });
          } else {
            let h = t.top + t.height + o + (this.getNodeActChildrenLength(t) > 0 ? t.expandBtnSize : 0);
            t.children.forEach((l) => {
              l.left = t.left + t.width * 0.5, l.top = h, h += l.height + o + (this.getNodeActChildrenLength(l) > 0 ? l.expandBtnSize : 0);
            });
          }
        }
      },
      null,
      !0
    );
  }
  //  调整节点left、top
  adjustLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand"))
          return;
        t.isRoot && this.updateBrothersLeft(t);
        let r = t.children.length;
        if (e && !e.isRoot && r > 0) {
          let a = this.getMarginY(s + 1), o = t.children.reduce((h, l) => h + l.height + (this.getNodeActChildrenLength(l) > 0 ? l.expandBtnSize : 0), 0) + r * a;
          this.updateBrothersTop(t, o);
        }
      },
      (t, e, n, s) => {
        e && e.isRoot && t.dir === E.LAYOUT_GROW_DIR.TOP && t.children.forEach((r) => {
          let a = this.getNodeAreaHeight(r), o = r.top;
          r.top = t.top - (r.top - t.top) - a + t.height, this.updateChildren(r.children, "top", r.top - o);
        });
      },
      !0
    );
  }
  //  递归计算节点的宽度
  getNodeAreaHeight(t) {
    let e = 0, n = (s) => {
      e += s.height + (this.getNodeActChildrenLength(s) > 0 ? s.expandBtnSize : 0) + this.getMarginY(s.layerIndex), s.children.length && s.children.forEach((r) => {
        n(r);
      });
    };
    return n(t), e;
  }
  //  调整兄弟节点的left
  updateBrothersLeft(t) {
    let e = t.children, n = 0;
    e.forEach((s) => {
      s.left += n, s.children && s.children.length && this.updateChildren(s.children, "left", n);
      let { left: r, right: a } = this.getNodeBoundaries(s, "h"), h = a - r - s.width;
      h > 0 && (n += h);
    });
  }
  //  调整兄弟节点的top
  updateBrothersTop(t, e) {
    if (t.parent && !t.parent.isRoot) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.hasCustomPosition())
          return;
        let o = 0;
        a > s && (o = e), r.top += o, r.children && r.children.length && this.updateChildren(r.children, "top", o);
      }), this.updateBrothersTop(t.parent, e);
    }
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0);
    let d = t.children.length;
    if (t.isRoot) {
      let g = t;
      t.children.forEach((f, m) => {
        let v = g.left + g.width, x = f.left, w = t.top + t.height / 2, M = `M ${v},${w} L ${x},${w}`;
        this.setLineStyle(n, e[m], M, f), g = f;
      });
    } else {
      let g = -1 / 0, f = 1 / 0, m = t.left + t.width * 0.3;
      if (t.children.forEach((v, x) => {
        let w = v.top + v.height / 2;
        w > g && (g = w), w < f && (f = w);
        let M = `M ${m},${w} L ${v.left},${w}`;
        this.setLineStyle(n, e[x], M, v);
      }), d > 0) {
        let v = this.lineDraw.path();
        h = d > 0 ? h : 0, t.parent && t.parent.isRoot && t.dir === E.LAYOUT_GROW_DIR.TOP ? v.plot(this.transformPath(`M ${m},${r} L ${m},${f}`)) : v.plot(
          this.transformPath(
            `M ${m},${r + o + h} L ${m},${g}`
          )
        ), t.style.line(v), t._lines.push(v), n && n(v, t);
      }
    }
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r, isRoot: a } = t;
    if (!a) {
      let { translateX: o, translateY: h } = e.transform();
      t.parent && t.parent.isRoot && t.dir === E.LAYOUT_GROW_DIR.TOP ? e.translate(
        n * 0.3 - r / 2 - o,
        -r / 2 - h
      ) : e.translate(
        n * 0.3 - r / 2 - o,
        s + r / 2 - h
      );
    }
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let {
        top: n,
        bottom: s,
        right: r,
        generalizationLineMargin: a,
        generalizationNodeMargin: o
      } = this.getNodeGeneralizationRenderBoundaries(e, "h"), h = r + a, l = n, c = r + a, d = s, g = h + 20, f = l + (d - l) / 2, m = `M ${h},${l} Q ${g},${f} ${c},${d}`;
      e.generalizationLine.plot(this.transformPath(m)), e.generalizationNode.left = r + o, e.generalizationNode.top = n + (s - n - e.generalizationNode.height) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s, r) {
    if (this.layout === E.LAYOUT.TIMELINE)
      t.size(n, e).x(0).y(s);
    else {
      let a = "";
      r.dir === E.LAYOUT_GROW_DIR.TOP ? a = r.layerIndex === 1 ? E.LAYOUT_GROW_DIR.TOP : E.LAYOUT_GROW_DIR.BOTTOM : a = E.LAYOUT_GROW_DIR.BOTTOM, a === E.LAYOUT_GROW_DIR.TOP ? t.size(n, e).x(0).y(-e) : t.size(n, e).x(0).y(s);
    }
  }
}
class bs extends Ye {
  //  构造函数
  constructor(t = {}, e) {
    super(t), this.layout = e;
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue();
      },
      () => {
        this.computedTopValue();
      },
      () => {
        this.adjustLeftTopValue();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  //  遍历数据创建节点、计算根节点的位置，计算根节点的子节点的top值
  computedBaseValue() {
    K(
      this.renderer.renderTree,
      null,
      (t, e, n, s, r, a) => {
        let o = this.createNode(
          t,
          e,
          n,
          s,
          r,
          a
        );
        if (n ? this.setNodeCenter(o) : (e._node.dir ? o.dir = e._node.dir : this.layout === E.LAYOUT.VERTICAL_TIMELINE2 ? o.dir = E.LAYOUT_GROW_DIR.LEFT : this.layout === E.LAYOUT.VERTICAL_TIMELINE3 ? o.dir = E.LAYOUT_GROW_DIR.RIGHT : o.dir = r % 2 === 0 ? E.LAYOUT_GROW_DIR.RIGHT : E.LAYOUT_GROW_DIR.LEFT, e._node.isRoot ? o.left = e._node.left + (t._node.width > e._node.width ? -(t._node.width - e._node.width) / 2 : (e._node.width - t._node.width) / 2) : o.left = o.dir === E.LAYOUT_GROW_DIR.RIGHT ? e._node.left + e._node.width + this.getMarginX(s) : e._node.left - this.getMarginX(s) - o.width), !t.data.expand)
          return !0;
      },
      (t, e, n, s) => {
        if (n)
          return;
        let r = t.data.expand === !1 ? 0 : t._node.children.length;
        t._node.childrenAreaHeight = r ? t._node.children.reduce((a, o) => a + o.height, 0) + (r + 1) * this.getMarginY(s + 1) : 0;
      },
      !0,
      0
    );
  }
  //  遍历节点树计算节点的top
  computedTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s, r) => {
        if (t.getData("expand") && t.children && t.children.length) {
          let a = this.getMarginY(s + 1);
          if (n) {
            let h = t.top + t.height + a;
            t.children.forEach((l) => {
              l.top = h, h += l.height + a;
            });
          } else {
            let o = this.getMarginY(s + 1), l = t.top + t.height / 2 + o - t.childrenAreaHeight / 2;
            t.children.forEach((c) => {
              c.top = l, l += c.height + o;
            });
          }
        }
      },
      null,
      !0
    );
  }
  //  调整节点left、top
  adjustLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand") || n) return;
        let r = this.getMarginY(s + 1) * 2 + t.height, a = t.childrenAreaHeight - r;
        a > 0 && this.updateBrothers(t, a / 2);
      },
      null,
      !0
    );
  }
  //  更新兄弟节点的top
  updateBrothers(t, e) {
    if (t.parent) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.hasCustomPosition() || !t.parent.isRoot && r.uid === t.uid) return;
        let o = 0;
        t.parent.isRoot ? a < s ? o = 0 : a > s ? o = e * 2 : o = e : a < s ? o = -e : a > s && (o = e), r.top += o, r.children && r.children.length && this.updateChildren(r.children, "top", o);
      }), this.updateBrothers(t.parent, e);
    }
  }
  //  调整兄弟节点的top
  updateBrothersTop(t, e) {
    if (t.parent && !t.parent.isRoot) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.hasCustomPosition())
          return;
        let o = 0;
        a > s && (o = e), r.top += o, r.children && r.children.length && this.updateChildren(r.children, "top", o);
      }), this.updateBrothersTop(t.parent, e);
    }
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n, s) {
    s === "curve" ? this.renderLineCurve(t, e, n) : s === "direct" ? this.renderLineDirect(t, e, n) : this.renderLineStraight(t, e, n);
  }
  // 直线连接
  renderLineStraight(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { expandBtnSize: s } = t;
    const { alwaysShowExpandBtn: r, notShowExpandBtn: a } = this.mindMap.opt;
    if ((!r || a) && (s = 0), t.isRoot) {
      let o = t;
      t.children.forEach((h, l) => {
        let c = o.top + o.height, d = h.top, g = t.left + t.width / 2, f = `M ${g},${c} L ${g},${d}`;
        this.setLineStyle(n, e[l], f, h), o = h;
      });
    } else if (t.dir === E.LAYOUT_GROW_DIR.RIGHT) {
      let o = t.left + t.width, h = t.top + t.height / 2, c = (this.getMarginX(t.layerIndex + 1) - s) * 0.6;
      t.children.forEach((d, g) => {
        let f = d.left, m = d.top + d.height / 2, v = this.createFoldLine([
          [o, h],
          [o + c, h],
          [o + c, m],
          [f, m]
        ]);
        this.setLineStyle(n, e[g], v, d);
      });
    } else {
      let o = t.left, h = t.top + t.height / 2, c = (this.getMarginX(t.layerIndex + 1) - s) * 0.6;
      t.children.forEach((d, g) => {
        let f = d.left + d.width, m = d.top + d.height / 2, v = this.createFoldLine([
          [o, h],
          [o - c, h],
          [o - c, m],
          [f, m]
        ]);
        this.setLineStyle(n, e[g], v, d);
      });
    }
  }
  // 直连
  renderLineDirect(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0), t.children.forEach((d, g) => {
      if (t.isRoot) {
        let f = t;
        t.children.forEach((m, v) => {
          let x = f.top + f.height, w = m.top, M = t.left + t.width / 2, T = `M ${M},${x} L ${M},${w}`;
          this.setLineStyle(n, e[v], T, m), f = m;
        });
      } else {
        let f = d.dir === E.LAYOUT_GROW_DIR.LEFT ? s - h : s + a + h, m = r + o / 2, v = d.dir === E.LAYOUT_GROW_DIR.LEFT ? d.left + d.width : d.left, x = d.top + d.height / 2, w = `M ${f},${m} L ${v},${x}`;
        this.setLineStyle(n, e[g], w, d);
      }
    });
  }
  //  曲线风格连线
  renderLineCurve(t, e, n) {
    if (t.children.length <= 0)
      return [];
    let { left: s, top: r, width: a, height: o, expandBtnSize: h } = t;
    const { alwaysShowExpandBtn: l, notShowExpandBtn: c } = this.mindMap.opt;
    (!l || c) && (h = 0), t.children.forEach((d, g) => {
      if (t.isRoot) {
        let f = t;
        t.children.forEach((m, v) => {
          let x = f.top + f.height, w = m.top, M = t.left + t.width / 2, T = `M ${M},${x} L ${M},${w}`;
          this.setLineStyle(n, e[v], T, m), f = m;
        });
      } else {
        let f = d.dir === E.LAYOUT_GROW_DIR.LEFT ? s - h : s + a + h, m = r + o / 2, v = d.dir === E.LAYOUT_GROW_DIR.LEFT ? d.left + d.width : d.left, x = d.top + d.height / 2, w = this.cubicBezierPath(f, m, v, x);
        this.setLineStyle(n, e[g], w, d);
      }
    });
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r, isRoot: a } = t;
    if (!a) {
      let { translateX: o, translateY: h } = e.transform();
      t.dir === E.LAYOUT_GROW_DIR.RIGHT ? e.translate(n - o, s / 2 - h) : e.translate(-r - o, s / 2 - h);
    }
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let n = e.node.dir === E.LAYOUT_GROW_DIR.LEFT, {
        top: s,
        bottom: r,
        left: a,
        right: o,
        generalizationLineMargin: h,
        generalizationNodeMargin: l
      } = this.getNodeGeneralizationRenderBoundaries(e, "h"), c = n ? a - h : o + h, d = c, g = s, f = c, m = r, v = d + (n ? -20 : 20), x = g + (m - g) / 2, w = `M ${d},${g} Q ${v},${x} ${f},${m}`;
      e.generalizationLine.plot(this.transformPath(w)), e.generalizationNode.left = c + (n ? -l : l) - (n ? e.generalizationNode.width : 0), e.generalizationNode.top = s + (r - s - e.generalizationNode.height) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s, r) {
    r.dir === E.LAYOUT_GROW_DIR.LEFT ? t.size(e, s).x(-e).y(0) : t.size(e, s).x(n).y(0);
  }
}
const Gt = {
  top: {
    renderExpandBtn({
      node: i,
      btn: t,
      expandBtnSize: e,
      translateX: n,
      translateY: s,
      width: r,
      height: a
    }) {
      i.parent && i.parent.isRoot ? t.translate(
        r * 0.3 - e / 2 - n,
        -e / 2 - s
      ) : t.translate(
        r * 0.3 - e / 2 - n,
        a + e / 2 - s
      );
    },
    renderLine({
      node: i,
      line: t,
      top: e,
      x: n,
      lineLength: s,
      height: r,
      expandBtnSize: a,
      maxy: o,
      ctx: h
    }) {
      i.parent && i.parent.isRoot ? t.plot(
        h.transformPath(
          `M ${n},${e} L ${n + s},${e - Math.tan(ii(h.mindMap.opt.fishboneDeg)) * s}`
        )
      ) : t.plot(
        h.transformPath(
          `M ${n},${e + r + a} L ${n},${o}`
        )
      );
    },
    computedLeftTopValue({ layerIndex: i, node: t, ctx: e }) {
      if (i >= 1 && t.children) {
        let n = e.getMarginY(i + 1), s = t.left + t.width * e.childIndent, r = t.top + t.height + (e.getNodeActChildrenLength(t) > 0 ? t.expandBtnSize : 0) + n;
        t.children.forEach((a) => {
          a.left = s, a.top += r, r += a.height + (e.getNodeActChildrenLength(a) > 0 ? a.expandBtnSize : 0) + n;
        });
      }
    },
    adjustLeftTopValueBefore({ node: i, parent: t, ctx: e, layerIndex: n }) {
      let s = i.children.length, r = e.getMarginY(n + 1);
      if (t && !t.isRoot && s > 0) {
        let a = i.children.reduce((o, h) => o + h.height + (e.getNodeActChildrenLength(h) > 0 ? h.expandBtnSize : 0) + r, 0);
        e.updateBrothersTop(i, a);
      }
    },
    adjustLeftTopValueAfter({ parent: i, node: t, ctx: e }) {
      if (i && i.isRoot) {
        let n = e.getMarginY(t.layerIndex + 1), s = t.expandBtnSize + n;
        t.children.forEach((r) => {
          let a = e.getNodeAreaHeight(r), o = r.top, h = r.left;
          r.top = t.top - (r.top - t.top) - a + t.height, r.left = t.left + t.width * e.indent + (a + s) / Math.tan(ii(e.mindMap.opt.fishboneDeg)), s += a, e.updateChildrenPro(r.children, {
            top: r.top - o,
            left: r.left - h
          });
        });
      }
    }
  },
  bottom: {
    renderExpandBtn({
      node: i,
      btn: t,
      expandBtnSize: e,
      translateX: n,
      translateY: s,
      width: r,
      height: a
    }) {
      i.parent && i.parent.isRoot ? t.translate(
        r * 0.3 - e / 2 - n,
        a + e / 2 - s
      ) : t.translate(
        r * 0.3 - e / 2 - n,
        -e / 2 - s
      );
    },
    renderLine({ node: i, line: t, top: e, x: n, lineLength: s, height: r, miny: a, ctx: o }) {
      i.parent && i.parent.isRoot ? t.plot(
        o.transformPath(
          `M ${n},${e + r} L ${n + s},${e + r + Math.tan(ii(o.mindMap.opt.fishboneDeg)) * s}`
        )
      ) : t.plot(o.transformPath(`M ${n},${e} L ${n},${a}`));
    },
    computedLeftTopValue({ layerIndex: i, node: t, ctx: e }) {
      let n = e.getMarginY(i + 1);
      if (i === 1 && t.children) {
        let s = t.left + t.width * e.childIndent, r = t.top + t.height + (e.getNodeActChildrenLength(t) > 0 ? t.expandBtnSize : 0) + n;
        t.children.forEach((a) => {
          a.left = s, a.top = r + (e.getNodeActChildrenLength(a) > 0 ? a.expandBtnSize : 0), r += a.height + (e.getNodeActChildrenLength(a) > 0 ? a.expandBtnSize : 0) + n;
        });
      }
      if (i > 1 && t.children) {
        let s = t.left + t.width * e.childIndent, r = t.top - (e.getNodeActChildrenLength(t) > 0 ? t.expandBtnSize : 0) - n;
        t.children.forEach((a) => {
          a.left = s, a.top = r - a.height, r -= a.height + (e.getNodeActChildrenLength(a) > 0 ? a.expandBtnSize : 0) + n;
        });
      }
    },
    adjustLeftTopValueBefore({ node: i, ctx: t, layerIndex: e }) {
      let n = t.getMarginY(e + 1), s = i.children.length;
      if (e > 2 && s > 0) {
        let r = i.children.reduce((a, o) => a + o.height + (t.getNodeActChildrenLength(o) > 0 ? o.expandBtnSize : 0) + n, 0);
        t.updateBrothersTop(i, -r);
      }
    },
    adjustLeftTopValueAfter({ parent: i, node: t, ctx: e }) {
      if (i && i.isRoot) {
        let n = e.getMarginY(t.layerIndex + 1), s = 0, r = t.expandBtnSize;
        t.children.forEach((a) => {
          let o = e.getNodeActChildrenLength(a) > 0, h = e.getNodeAreaHeight(a), l = o ? h - a.height - (o ? a.expandBtnSize : 0) : 0;
          l -= o ? n : 0;
          let c = s + l, d = a.left;
          a.top += c, a.left = t.left + t.width * e.indent + (h + r) / Math.tan(ii(e.mindMap.opt.fishboneDeg)), s += l, r += h, e.updateChildrenPro(a.children, {
            top: c,
            left: a.left - d
          });
        });
      }
    }
  }
};
class $o extends Ye {
  //  构造函数
  constructor(t = {}, e) {
    super(t), this.layout = e, this.indent = 0.3, this.childIndent = 0.5, this.fishTail = null, this.maxx = 0, this.headRatio = 1, this.tailRatio = 0.6, this.paddingXRatio = 0.3, this.fishHeadPathStr = "M4,181 C4,181, 0,177, 4,173 Q 96.09523809523809,0, 288.2857142857143,0 L 288.2857142857143,354 Q 48.047619047619044,354, 8,218.18367346938777 C8,218.18367346938777, 6,214.18367346938777, 8,214.18367346938777 L 41.183673469387756,214.18367346938777 Z", this.fishTailPathStr = "M 606.9342905223708 0 Q 713.1342905223709 -177 819.3342905223708 -177 L 766.2342905223709 0 L 819.3342905223708 177 Q 713.1342905223709 177 606.9342905223708 0 z", this.bindEvent(), this.extendShape(), this.beforeChange = this.beforeChange.bind(this);
  }
  // 重新渲染时，节点连线是否全部删除
  // 鱼尾鱼骨图会多渲染一些连线，按需删除无法删除掉，只能全部删除重新创建
  nodeIsRemoveAllLines(t) {
    return t.isRoot || t.layerIndex === 1;
  }
  // 是否是带鱼头鱼尾的鱼骨图
  isFishbone2() {
    return this.layout === E.LAYOUT.FISHBONE2;
  }
  bindEvent() {
    this.isFishbone2() && (this.onCheckUpdateFishTail = this.onCheckUpdateFishTail.bind(this), this.mindMap.on("afterExecCommand", this.onCheckUpdateFishTail));
  }
  unBindEvent() {
    this.mindMap.off("afterExecCommand", this.onCheckUpdateFishTail);
  }
  // 扩展节点形状
  extendShape() {
    this.isFishbone2() && this.mindMap.addShape({
      name: "fishHead",
      createShape: (t) => {
        const e = ht(`<path d="${this.fishHeadPathStr}"></path>`), { width: n, height: s } = t.shapeInstance.getNodeSize();
        return e.size(n, s), e;
      },
      getPadding: ({ width: t, height: e, paddingX: n, paddingY: s }) => {
        t += n * 2, e += s * 2;
        let r = this.paddingXRatio * t, a = 0;
        return t += r * 2, a = (t / this.headRatio - e) / 2, {
          paddingX: r,
          paddingY: a
        };
      }
    });
  }
  //  布局
  doLayout(t) {
    We([
      () => {
        this.computedBaseValue(), this.addFishTail();
      },
      () => {
        this.computedLeftTopValue();
      },
      () => {
        this.adjustLeftTopValue(), this.updateFishTailPosition();
      },
      () => {
        t(this.root);
      }
    ]);
  }
  // 创建鱼尾
  addFishTail() {
    if (!this.isFishbone2()) return;
    const t = this.mindMap.lineDraw.findOne(".smm-layout-fishbone-tail");
    t ? this.fishTail = t : (this.fishTail = ht(`<path d="${this.fishTailPathStr}"></path>`), this.fishTail.addClass("smm-layout-fishbone-tail"));
    const e = this.root.height, n = e * this.tailRatio;
    this.fishTail.size(n, e), this.styleFishTail(), this.mindMap.lineDraw.add(this.fishTail);
  }
  // 如果根节点更新了形状样式，那么鱼尾也要更新
  onCheckUpdateFishTail(t, e, n) {
    if (t === "SET_NODE_DATA") {
      let s = !1;
      Object.keys(n).forEach((r) => {
        Bl.includes(r) && (s = !0);
      }), s && this.styleFishTail();
    }
  }
  styleFishTail() {
    this.root.style.shape(this.fishTail);
  }
  // 删除鱼尾
  removeFishTail() {
    const t = this.mindMap.lineDraw.findOne(".smm-layout-fishbone-tail");
    t && t.remove();
  }
  // 更新鱼尾形状位置
  updateFishTailPosition() {
    this.isFishbone2() && this.fishTail.x(this.maxx).cy(this.root.top + this.root.height / 2);
  }
  //  遍历数据创建节点、计算根节点的位置，计算根节点的子节点的top值
  computedBaseValue() {
    K(
      this.renderer.renderTree,
      null,
      (t, e, n, s, r, a) => {
        n && this.isFishbone2() && (t.data.shape = "fishHead");
        let o = this.createNode(
          t,
          e,
          n,
          s,
          r,
          a
        );
        if (n)
          this.setNodeCenter(o);
        else if (e._node.dir ? o.dir = e._node.dir : o.dir = r % 2 === 0 ? E.LAYOUT_GROW_DIR.TOP : E.LAYOUT_GROW_DIR.BOTTOM, e._node.isRoot) {
          let h = this.getMarginY(s);
          const l = this.isFishbone2() ? e._node.height / 4 : 0;
          this.checkIsTop(o) ? o.top = e._node.top - o.height - h + l : o.top = e._node.top + e._node.height + h - l;
        }
        if (!t.data.expand)
          return !0;
      },
      null,
      !0,
      0
    );
  }
  //  遍历节点树计算节点的left、top
  computedLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (t.isRoot) {
          let a = this.getMarginX(s + 1);
          const o = this.isFishbone2() ? 2 : 1;
          let h = t.left + t.width + t.height / o + a, l = t.left + t.width + t.height / o + a;
          t.children.forEach((c) => {
            this.checkIsTop(c) ? (c.left = h, h += c.width + a) : (c.left = l + 20, l += c.width + a);
          });
        }
        let r = { layerIndex: s, node: t, ctx: this };
        this.checkIsTop(t) ? Gt.top.computedLeftTopValue(r) : Gt.bottom.computedLeftTopValue(r);
      },
      null,
      !0
    );
  }
  //  调整节点left、top
  adjustLeftTopValue() {
    K(
      this.root,
      null,
      (t, e, n, s) => {
        if (!t.getData("expand"))
          return;
        let r = { node: t, parent: e, layerIndex: s, ctx: this };
        this.checkIsTop(t) ? Gt.top.adjustLeftTopValueBefore(r) : Gt.bottom.adjustLeftTopValueBefore(r);
      },
      (t, e) => {
        let n = { parent: e, node: t, ctx: this };
        if (this.checkIsTop(t) ? Gt.top.adjustLeftTopValueAfter(n) : Gt.bottom.adjustLeftTopValueAfter(n), t.isRoot) {
          let s = 0, r = 0, a = -1 / 0;
          t.children.forEach((o) => {
            if (this.checkIsTop(o)) {
              o.left += s, this.updateChildren(o.children, "left", s);
              let { left: h, right: l } = this.getNodeBoundaries(o, "h");
              l > a && (a = l), s += l - h;
            } else {
              o.left += r, this.updateChildren(o.children, "left", r);
              let { left: h, right: l } = this.getNodeBoundaries(o, "h");
              l > a && (a = l), r += l - h;
            }
          }), this.maxx = a;
        }
      },
      !0
    );
  }
  //  递归计算节点的宽度
  getNodeAreaHeight(t) {
    let e = 0, n = (s) => {
      let r = this.getMarginY(s.layerIndex);
      e += s.height + (this.getNodeActChildrenLength(s) > 0 ? s.expandBtnSize : 0) + r, s.children.length && s.children.forEach((a) => {
        n(a);
      });
    };
    return n(t), e;
  }
  //  调整兄弟节点的left
  updateBrothersLeft(t) {
    let e = t.children, n = 0;
    e.forEach((s) => {
      s.left += n, s.children && s.children.length && this.updateChildren(s.children, "left", n);
      let { left: r, right: a } = this.getNodeBoundaries(s, "h"), h = a - r - s.width;
      h > 0 && (n += h);
    });
  }
  //  调整兄弟节点的top
  updateBrothersTop(t, e) {
    if (t.parent && !t.parent.isRoot) {
      let n = t.parent.children, s = ut(t, n);
      n.forEach((r, a) => {
        if (r.hasCustomPosition())
          return;
        let o = 0;
        a > s && (o = e), r.top += o, r.children && r.children.length && this.updateChildren(r.children, "top", o);
      }), this.checkIsTop(t) ? this.updateBrothersTop(t.parent, e) : this.updateBrothersTop(
        t.parent,
        t.layerIndex === 3 ? 0 : e
      );
    }
  }
  // 检查节点是否是上方节点
  checkIsTop(t) {
    return t.dir === E.LAYOUT_GROW_DIR.TOP;
  }
  //  绘制连线，连接该节点到其子节点
  renderLine(t, e, n) {
    if (t.layerIndex !== 1 && t.children.length <= 0)
      return [];
    let { top: s, height: r, expandBtnSize: a } = t;
    const { alwaysShowExpandBtn: o, notShowExpandBtn: h } = this.mindMap.opt;
    (!o || h) && (a = 0);
    let l = t.children.length;
    if (t.isRoot) {
      let c = -1 / 0;
      t.children.forEach((v) => {
        v.left > c && (c = v.left);
        let x = this.getMarginY(v.layerIndex), w = v.left, M = t.height / 2 + x - (this.isFishbone2() ? t.height / 4 : 0), T = M / Math.tan(ii(this.mindMap.opt.fishboneDeg)), A = this.lineDraw.path();
        this.checkIsTop(v) ? A.plot(
          this.transformPath(
            `M ${w - T},${v.top + v.height + M} L ${v.left},${v.top + v.height}`
          )
        ) : A.plot(
          this.transformPath(
            `M ${w - T},${v.top - M} L ${w},${v.top}`
          )
        ), t.style.line(A), t._lines.push(A), n && n(A, t);
      });
      let d = t.top + t.height / 2, g = t.height / 2 + this.getMarginY(t.layerIndex + 1), f = this.lineDraw.path();
      const m = this.isFishbone2() ? this.maxx : c - g / Math.tan(ii(this.mindMap.opt.fishboneDeg));
      f.plot(
        this.transformPath(
          `M ${t.left + t.width},${d} L ${m},${d}`
        )
      ), t.style.line(f), t._lines.push(f), n && n(f, t);
    } else {
      let c = -1 / 0, d = 1 / 0, g = -1 / 0, f = t.left + t.width * this.indent;
      if (t.children.forEach((m, v) => {
        m.left > g && (g = m.left);
        let x = m.top + m.height / 2;
        if (x > c && (c = x), x < d && (d = x), t.layerIndex > 1) {
          let w = `M ${f},${x} L ${m.left},${x}`;
          this.setLineStyle(n, e[v], w, m);
        }
      }), l >= 0) {
        let m = this.lineDraw.path();
        a = l > 0 ? a : 0;
        let v = g - t.left - t.width * this.indent;
        v = Math.max(v, 0);
        let x = {
          node: t,
          line: m,
          top: s,
          x: f,
          lineLength: v,
          height: r,
          expandBtnSize: a,
          maxy: c,
          miny: d,
          ctx: this
        };
        this.checkIsTop(t) ? Gt.top.renderLine(x) : Gt.bottom.renderLine(x), t.style.line(m), t._lines.push(m), n && n(m, t);
      }
    }
  }
  //  渲染按钮
  renderExpandBtn(t, e) {
    let { width: n, height: s, expandBtnSize: r, isRoot: a } = t;
    if (!a) {
      let { translateX: o, translateY: h } = e.transform(), l = {
        node: t,
        btn: e,
        expandBtnSize: r,
        translateX: o,
        translateY: h,
        width: n,
        height: s
      };
      this.checkIsTop(t) ? Gt.top.renderExpandBtn(l) : Gt.bottom.renderExpandBtn(l);
    }
  }
  //  创建概要节点
  renderGeneralization(t) {
    t.forEach((e) => {
      let {
        top: n,
        bottom: s,
        right: r,
        generalizationLineMargin: a,
        generalizationNodeMargin: o
      } = this.getNodeGeneralizationRenderBoundaries(e, "h"), h = r + a, l = n, c = r + a, d = s, g = h + 20, f = l + (d - l) / 2, m = `M ${h},${l} Q ${g},${f} ${c},${d}`;
      e.generalizationLine.plot(this.transformPath(m)), e.generalizationNode.left = r + o, e.generalizationNode.top = n + (s - n - e.generalizationNode.height) / 2;
    });
  }
  // 渲染展开收起按钮的隐藏占位元素
  renderExpandBtnRect(t, e, n, s, r) {
    let a = "";
    r.dir === E.LAYOUT_GROW_DIR.TOP ? a = r.layerIndex === 1 ? E.LAYOUT_GROW_DIR.TOP : E.LAYOUT_GROW_DIR.BOTTOM : a = r.layerIndex === 1 ? E.LAYOUT_GROW_DIR.BOTTOM : E.LAYOUT_GROW_DIR.TOP, a === E.LAYOUT_GROW_DIR.TOP ? t.size(n, e).x(0).y(-e) : t.size(n, e).x(0).y(s);
  }
  // 切换切换为其他结构时的处理
  beforeChange() {
    this.isFishbone2() && (this.root.nodeData.data.shape = E.SHAPE.RECTANGLE, this.removeFishTail(), this.unBindEvent(), this.mindMap.removeShape("fishHead"));
  }
}
const Ho = "smm-node-edit-wrap";
class L6 {
  //  构造函数
  constructor(t) {
    this.renderer = t, this.mindMap = t.mindMap, this.currentNode = null, this.textEditNode = null, this.showTextEdit = !1, this.cacheEditingText = "", this.hasBodyMousedown = !1, this.textNodePaddingX = 5, this.textNodePaddingY = 3, this.isNeedUpdateTextEditNode = !1, this.mindMap.addEditNodeClass(Ho), this.bindEvent();
  }
  //  事件
  bindEvent() {
    this.show = this.show.bind(this), this.onScale = this.onScale.bind(this), this.onKeydown = this.onKeydown.bind(this), this.mindMap.on("node_dblclick", (t, e, n) => {
      this.show({ node: t, e, isInserting: n });
    }), this.mindMap.on("draw_click", () => {
      this.hideEditTextBox();
    }), this.mindMap.on("body_mousedown", () => {
      this.hasBodyMousedown = !0;
    }), this.mindMap.on("body_click", () => {
      this.hasBodyMousedown && (this.hasBodyMousedown = !1, this.mindMap.opt.isEndNodeTextEditOnClickOuter && this.hideEditTextBox());
    }), this.mindMap.on("svg_mousedown", () => {
      this.hideEditTextBox();
    }), this.mindMap.on("expand_btn_click", () => {
      this.hideEditTextBox();
    }), this.mindMap.on("before_node_active", () => {
      this.hideEditTextBox();
    }), this.mindMap.on("mousewheel", () => {
      this.mindMap.opt.mousewheelAction === E.MOUSE_WHEEL_ACTION.MOVE && this.hideEditTextBox();
    }), this.mindMap.keyCommand.addShortcut("F2", () => {
      this.renderer.activeNodeList.length <= 0 || this.show({
        node: this.renderer.activeNodeList[0]
      });
    }), this.mindMap.on("scale", this.onScale), this.mindMap.opt.enableAutoEnterTextEditWhenKeydown && window.addEventListener("keydown", this.onKeydown), this.mindMap.on("beforeDestroy", () => {
      this.unBindEvent();
    }), this.mindMap.on("after_update_config", (t, e) => {
      t.openRealtimeRenderOnNodeTextEdit !== e.openRealtimeRenderOnNodeTextEdit && (this.mindMap.richText ? this.mindMap.richText.onOpenRealtimeRenderOnNodeTextEditConfigUpdate(
        t.openRealtimeRenderOnNodeTextEdit
      ) : this.onOpenRealtimeRenderOnNodeTextEditConfigUpdate(
        t.openRealtimeRenderOnNodeTextEdit
      )), t.enableAutoEnterTextEditWhenKeydown !== e.enableAutoEnterTextEditWhenKeydown && window[t.enableAutoEnterTextEditWhenKeydown ? "addEventListener" : "removeEventListener"]("keydown", this.onKeydown);
    }), this.mindMap.on("afterExecCommand", () => {
      this.isShowTextEdit() && (this.isNeedUpdateTextEditNode = !0);
    }), this.mindMap.on("node_tree_render_end", () => {
      this.isShowTextEdit() && this.isNeedUpdateTextEditNode && (this.isNeedUpdateTextEditNode = !1, this.updateTextEditNode());
    });
  }
  // 解绑事件
  unBindEvent() {
    window.removeEventListener("keydown", this.onKeydown);
  }
  // 按键事件
  onKeydown(t) {
    if (t.target !== document.body) return;
    const e = this.mindMap.renderer.activeNodeList;
    if (e.length <= 0 || e.length > 1) return;
    const n = e[0];
    n && this.checkIsAutoEnterTextEditKey(t) && (t.preventDefault(), this.show({
      node: n,
      e: t,
      isInserting: !1,
      isFromKeyDown: !0
    }));
  }
  // 判断是否是自动进入文本编模式的按钮
  checkIsAutoEnterTextEditKey(t) {
    const e = t.keyCode;
    return (e === 229 || e >= 65 && e <= 90 || e >= 48 && e <= 57) && !this.mindMap.keyCommand.hasCombinationKey(t);
  }
  //  注册临时快捷键
  registerTmpShortcut() {
    this.mindMap.keyCommand.addShortcut("Enter", () => {
      this.hideEditTextBox();
    }), this.mindMap.keyCommand.addShortcut("Tab", () => {
      this.hideEditTextBox();
    });
  }
  // 获取当前文本编辑框是否处于显示状态，也就是是否处在文本编辑状态
  isShowTextEdit() {
    return this.mindMap.richText ? this.mindMap.richText.showTextEdit : this.showTextEdit;
  }
  // 设置文本编辑框是否处于显示状态
  setIsShowTextEdit(t) {
    this.showTextEdit = t, t ? this.mindMap.keyCommand.stopCheckInSvg() : this.mindMap.keyCommand.recoveryCheckInSvg();
  }
  // 显示文本编辑框
  // isInserting：是否是刚创建的节点
  // isFromKeyDown：是否是在按键事件进入的编辑
  async show({
    node: t,
    isInserting: e = !1,
    isFromKeyDown: n = !1,
    isFromScale: s = !1
  }) {
    if (t.isUseCustomNodeContent())
      return;
    this.getCurrentEditNode() && this.hideEditTextBox();
    const { beforeTextEdit: a, openRealtimeRenderOnNodeTextEdit: o } = this.mindMap.opt;
    if (typeof a == "function") {
      let f = !1;
      try {
        f = await a(t, e);
      } catch (m) {
        f = !1, this.mindMap.opt.errorHandler(ai.BEFORE_TEXT_EDIT_ERROR, m);
      }
      if (!f) return;
    }
    const { offsetLeft: h, offsetTop: l } = z3(this.mindMap, t);
    this.mindMap.view.translateXY(h, l);
    const c = t._textData.node;
    o && c.show();
    const d = c.node.getBoundingClientRect();
    o && c.hide();
    const g = {
      node: t,
      rect: d,
      isInserting: e,
      isFromKeyDown: n,
      isFromScale: s
    };
    if (this.mindMap.richText) {
      this.mindMap.richText.showEditText(g);
      return;
    }
    this.currentNode = t, this.showEditTextBox(g);
  }
  // 当openRealtimeRenderOnNodeTextEdit配置更新后需要更新编辑框样式
  onOpenRealtimeRenderOnNodeTextEditConfigUpdate(t) {
    this.textEditNode && (this.textEditNode.style.background = t ? "transparent" : this.currentNode ? this.getBackground(this.currentNode) : "", this.textEditNode.style.boxShadow = t ? "none" : "0 0 20px rgba(0,0,0,.5)");
  }
  // 处理画布缩放
  onScale() {
    const t = this.getCurrentEditNode();
    t && (this.mindMap.richText ? (this.mindMap.richText.cacheEditingText = this.mindMap.richText.getEditText(), this.mindMap.richText.showTextEdit = !1) : (this.cacheEditingText = this.getEditText(), this.setIsShowTextEdit(!1)), this.show({
      node: t,
      isFromScale: !0
    }));
  }
  //  显示文本编辑框
  showEditTextBox({ node: t, rect: e, isInserting: n, isFromKeyDown: s, isFromScale: r }) {
    if (this.showTextEdit) return;
    const {
      nodeTextEditZIndex: a,
      textAutoWrapWidth: o,
      selectTextOnEnterEditText: h,
      openRealtimeRenderOnNodeTextEdit: l,
      autoEmptyTextWhenKeydownEnterEdit: c
    } = this.mindMap.opt;
    r || this.mindMap.emit("before_show_text_edit"), this.registerTmpShortcut(), this.textEditNode || (this.textEditNode = document.createElement("div"), this.textEditNode.classList.add(Ho), this.textEditNode.style.cssText = `
        position: fixed;
        box-sizing: border-box;
        ${l ? "" : "box-shadow: 0 0 20px rgba(0,0,0,.5);"}
        padding: ${this.textNodePaddingY}px ${this.textNodePaddingX}px;
        margin-left: -${this.textNodePaddingX}px;
        margin-top: -${this.textNodePaddingY}px;
        outline: none; 
        word-break: break-all;
        line-break: anywhere;
      `, this.textEditNode.setAttribute("contenteditable", !0), this.textEditNode.addEventListener("keyup", (x) => {
      x.stopPropagation();
    }), this.textEditNode.addEventListener("click", (x) => {
      x.stopPropagation();
    }), this.textEditNode.addEventListener("mousedown", (x) => {
      x.stopPropagation();
    }), this.textEditNode.addEventListener("keydown", (x) => {
      this.checkIsAutoEnterTextEditKey(x) && x.stopPropagation();
    }), this.textEditNode.addEventListener("paste", (x) => {
      const w = x.clipboardData.getData("text"), { isSmm: M, data: T } = dr(w);
      M && T[0] && T[0].data ? Mo(x, Il(T[0].data.text)) : Mo(x), this.emitTextChangeEvent();
    }), this.textEditNode.addEventListener("input", () => {
      this.emitTextChangeEvent();
    }), (this.mindMap.opt.customInnerElsAppendTo || document.body).appendChild(this.textEditNode));
    const d = this.mindMap.view.scale, g = t.style.merge("fontSize"), f = (this.cacheEditingText || t.getData("text")).split(/\n/gim).map((v) => Qn(v)), m = t._textData.node.attr("data-ismultiLine") === "true";
    t.style.domText(this.textEditNode, d), l || (this.textEditNode.style.background = this.getBackground(t)), this.textEditNode.style.zIndex = a, s && c ? this.textEditNode.innerHTML = "" : this.textEditNode.innerHTML = f.join("<br>"), this.textEditNode.style.minWidth = e.width + this.textNodePaddingX * 2 + "px", this.textEditNode.style.minHeight = e.height + "px", this.textEditNode.style.left = Math.floor(e.left) + "px", this.textEditNode.style.top = Math.floor(e.top) + "px", this.textEditNode.style.display = "block", this.textEditNode.style.maxWidth = o * d + "px", m ? (this.textEditNode.style.lineHeight = Pn, this.textEditNode.style.transform = `translateY(${(Pn - 1) * g / 2 * d}px)`) : this.textEditNode.style.lineHeight = "normal", this.setIsShowTextEdit(!0), n || h && !s ? X3(this.textEditNode) : Y3(this.textEditNode), this.cacheEditingText = "";
  }
  // 派发节点文本编辑事件
  emitTextChangeEvent() {
    this.mindMap.emit("node_text_edit_change", {
      node: this.currentNode,
      text: this.getEditText(),
      richText: !1
    });
  }
  // 更新文本编辑框的大小和位置
  updateTextEditNode() {
    if (this.mindMap.richText) {
      this.mindMap.richText.updateTextEditNode();
      return;
    }
    if (!this.showTextEdit || !this.currentNode)
      return;
    const t = this.currentNode._textData.node.node.getBoundingClientRect();
    this.textEditNode.style.minWidth = t.width + this.textNodePaddingX * 2 + "px", this.textEditNode.style.minHeight = t.height + this.textNodePaddingY * 2 + "px", this.textEditNode.style.left = Math.floor(t.left) + "px", this.textEditNode.style.top = Math.floor(t.top) + "px";
  }
  // 获取编辑区域的背景填充
  getBackground(t) {
    if (t.style.merge("gradientStyle")) {
      const n = t.style.merge("startColor"), s = t.style.merge("endColor");
      return `linear-gradient(to right, ${n}, ${s})`;
    } else {
      const n = t.style.merge("fillColor"), s = t.style.merge("color");
      return n === "transparent" ? zl(s) ? $3(this.mindMap.themeConfig) : "#fff" : n;
    }
  }
  // 删除文本编辑元素
  removeTextEditEl() {
    if (this.mindMap.richText) {
      this.mindMap.richText.removeTextEditEl();
      return;
    }
    if (!this.textEditNode) return;
    (this.mindMap.opt.customInnerElsAppendTo || document.body).removeChild(this.textEditNode);
  }
  // 获取当前正在编辑的内容
  getEditText() {
    return D3(this.textEditNode.innerHTML);
  }
  //  隐藏文本编辑框
  hideEditTextBox() {
    if (this.mindMap.richText)
      return this.mindMap.richText.hideEditText();
    if (!this.showTextEdit)
      return;
    const t = this.currentNode, e = this.getEditText();
    this.currentNode = null, this.textEditNode.style.display = "none", this.textEditNode.innerHTML = "", this.textEditNode.style.fontFamily = "inherit", this.textEditNode.style.fontSize = "inherit", this.textEditNode.style.fontWeight = "normal", this.textEditNode.style.transform = "translateY(0)", this.setIsShowTextEdit(!1), this.mindMap.execCommand("SET_NODE_TEXT", t, e), this.mindMap.render(), this.mindMap.emit(
      "hide_text_edit",
      this.textEditNode,
      this.renderer.activeNodeList,
      t
    );
  }
  // 获取当前正在编辑中的节点实例
  getCurrentEditNode() {
    return this.mindMap.richText ? this.mindMap.richText.node : this.currentNode;
  }
}
const Uo = {
  // 逻辑结构图
  [E.LAYOUT.LOGICAL_STRUCTURE]: Po,
  // 向左逻辑结构图
  [E.LAYOUT.LOGICAL_STRUCTURE_LEFT]: Po,
  // 思维导图
  [E.LAYOUT.MIND_MAP]: b6,
  // 目录组织图
  [E.LAYOUT.CATALOG_ORGANIZATION]: N6,
  // 组织结构图
  [E.LAYOUT.ORGANIZATION_STRUCTURE]: S6,
  // 时间轴
  [E.LAYOUT.TIMELINE]: Bo,
  // 时间轴2
  [E.LAYOUT.TIMELINE2]: Bo,
  // 竖向时间轴
  [E.LAYOUT.VERTICAL_TIMELINE]: bs,
  // 竖向时间轴2
  [E.LAYOUT.VERTICAL_TIMELINE2]: bs,
  // 竖向时间轴3
  [E.LAYOUT.VERTICAL_TIMELINE3]: bs,
  // 鱼骨图
  [E.LAYOUT.FISHBONE]: $o,
  // 鱼骨图2
  [E.LAYOUT.FISHBONE2]: $o
};
class A6 {
  //  构造函数
  constructor(t = {}) {
    this.opt = t, this.mindMap = t.mindMap, this.themeConfig = this.mindMap.themeConfig, this.renderTree = this.mindMap.opt.data ? $n({}, this.mindMap.opt.data) : null, this.reRender = !1, this.isRendering = !1, this.hasWaitRendering = !1, this.nodeCache = {}, this.lastNodeCache = {}, this.renderSourceList = [], this.renderCallbackList = [], this.activeNodeList = [], this.emitNodeActiveEventTimer = null, this.renderTimer = null, this.root = null, this.textEdit = new L6(this), this.beingCopyData = null, this.highlightBoxNode = null, this.highlightBoxNodeStyle = null, this.lastActiveNodeList = [], this.setLayout(), this.bindEvent(), this.registerCommands(), this.registerShortcutKeys();
  }
  //  设置布局结构
  setLayout() {
    this.layout && this.layout.beforeChange && this.layout.beforeChange();
    const { layout: t } = this.mindMap.opt;
    let e = Uo[t] || this.mindMap[t];
    e || (e = Uo[E.LAYOUT.LOGICAL_STRUCTURE], this.mindMap.opt.layout = E.LAYOUT.LOGICAL_STRUCTURE), this.layout = new e(this, t);
  }
  // 重新设置思维导图数据
  setData(t) {
    this.renderTree = t || null;
  }
  //   绑定事件
  bindEvent() {
    const {
      openPerformance: t,
      performanceConfig: e,
      openRealtimeRenderOnNodeTextEdit: n
    } = this.mindMap.opt;
    this.mindMap.on("draw_click", (r) => {
      this.clearActiveNodeListOnDrawClick(r, "click");
    }), this.mindMap.on("contextmenu", (r) => {
      this.clearActiveNodeListOnDrawClick(r, "contextmenu");
    }), this.mindMap.svg.on("dblclick", () => {
      this.mindMap.opt.enableDblclickBackToRootNode && this.setRootNodeCenter();
    });
    const s = Rl(() => {
      this.renderTree && this.root && (this.mindMap.emit("node_tree_render_start"), this.root.render(
        () => {
          this.mindMap.emit("node_tree_render_end");
        },
        !1,
        !0
      ));
    }, e.time);
    t && this.mindMap.on("view_data_change", s), this.onNodeTextEditChange = O3(this.onNodeTextEditChange, 100, this), n && this.mindMap.on("node_text_edit_change", this.onNodeTextEditChange), this.mindMap.on("after_update_config", (r, a) => {
      r.openPerformance !== a.openPerformance && (this.mindMap[r.openPerformance ? "on" : "off"](
        "view_data_change",
        s
      ), this.forceLoadNode()), r.openRealtimeRenderOnNodeTextEdit !== a.openRealtimeRenderOnNodeTextEdit && this.mindMap[r.openRealtimeRenderOnNodeTextEdit ? "on" : "off"](
        "node_text_edit_change",
        this.onNodeTextEditChange
      );
    });
  }
  // 监听文本编辑事件，实时更新节点大小
  onNodeTextEditChange({ node: t, text: e }) {
    t._textData = t.createTextNode(e);
    const { width: n, height: s } = t.getNodeRect();
    t.width = n, t.height = s, t.layout(), this.mindMap.render(() => {
      this.textEdit.updateTextEditNode();
    });
  }
  // 强制渲染节点，不考虑是否在画布可视区域内
  forceLoadNode(t) {
    t = t || this.root, t && (this.mindMap.emit("node_tree_render_start"), t.render(() => {
      this.mindMap.emit("node_tree_render_end");
    }, !0));
  }
  //  注册命令
  registerCommands() {
    this.selectAll = this.selectAll.bind(this), this.mindMap.command.add("SELECT_ALL", this.selectAll), this.back = this.back.bind(this), this.mindMap.command.add("BACK", this.back), this.forward = this.forward.bind(this), this.mindMap.command.add("FORWARD", this.forward), this.insertNode = this.insertNode.bind(this), this.mindMap.command.add("INSERT_NODE", this.insertNode), this.insertMultiNode = this.insertMultiNode.bind(this), this.mindMap.command.add("INSERT_MULTI_NODE", this.insertMultiNode), this.insertChildNode = this.insertChildNode.bind(this), this.mindMap.command.add("INSERT_CHILD_NODE", this.insertChildNode), this.insertMultiChildNode = this.insertMultiChildNode.bind(this), this.mindMap.command.add(
      "INSERT_MULTI_CHILD_NODE",
      this.insertMultiChildNode
    ), this.insertParentNode = this.insertParentNode.bind(this), this.mindMap.command.add("INSERT_PARENT_NODE", this.insertParentNode), this.upNode = this.upNode.bind(this), this.mindMap.command.add("UP_NODE", this.upNode), this.downNode = this.downNode.bind(this), this.mindMap.command.add("DOWN_NODE", this.downNode), this.moveUpOneLevel = this.moveUpOneLevel.bind(this), this.mindMap.command.add("MOVE_UP_ONE_LEVEL", this.moveUpOneLevel), this.insertAfter = this.insertAfter.bind(this), this.mindMap.command.add("INSERT_AFTER", this.insertAfter), this.insertBefore = this.insertBefore.bind(this), this.mindMap.command.add("INSERT_BEFORE", this.insertBefore), this.moveNodeTo = this.moveNodeTo.bind(this), this.mindMap.command.add("MOVE_NODE_TO", this.moveNodeTo), this.removeNode = this.removeNode.bind(this), this.mindMap.command.add("REMOVE_NODE", this.removeNode), this.removeCurrentNode = this.removeCurrentNode.bind(this), this.mindMap.command.add("REMOVE_CURRENT_NODE", this.removeCurrentNode), this.pasteNode = this.pasteNode.bind(this), this.mindMap.command.add("PASTE_NODE", this.pasteNode), this.cutNode = this.cutNode.bind(this), this.mindMap.command.add("CUT_NODE", this.cutNode), this.setNodeStyle = this.setNodeStyle.bind(this), this.mindMap.command.add("SET_NODE_STYLE", this.setNodeStyle), this.setNodeStyles = this.setNodeStyles.bind(this), this.mindMap.command.add("SET_NODE_STYLES", this.setNodeStyles), this.setNodeActive = this.setNodeActive.bind(this), this.mindMap.command.add("SET_NODE_ACTIVE", this.setNodeActive), this.clearActiveNode = this.clearActiveNode.bind(this), this.mindMap.command.add("CLEAR_ACTIVE_NODE", this.clearActiveNode), this.setNodeExpand = this.setNodeExpand.bind(this), this.mindMap.command.add("SET_NODE_EXPAND", this.setNodeExpand), this.expandAllNode = this.expandAllNode.bind(this), this.mindMap.command.add("EXPAND_ALL", this.expandAllNode), this.unexpandAllNode = this.unexpandAllNode.bind(this), this.mindMap.command.add("UNEXPAND_ALL", this.unexpandAllNode), this.expandToLevel = this.expandToLevel.bind(this), this.mindMap.command.add("UNEXPAND_TO_LEVEL", this.expandToLevel), this.setNodeData = this.setNodeData.bind(this), this.mindMap.command.add("SET_NODE_DATA", this.setNodeData), this.setNodeText = this.setNodeText.bind(this), this.mindMap.command.add("SET_NODE_TEXT", this.setNodeText), this.setNodeImage = this.setNodeImage.bind(this), this.mindMap.command.add("SET_NODE_IMAGE", this.setNodeImage), this.setNodeIcon = this.setNodeIcon.bind(this), this.mindMap.command.add("SET_NODE_ICON", this.setNodeIcon), this.setNodeHyperlink = this.setNodeHyperlink.bind(this), this.mindMap.command.add("SET_NODE_HYPERLINK", this.setNodeHyperlink), this.setNodeNote = this.setNodeNote.bind(this), this.mindMap.command.add("SET_NODE_NOTE", this.setNodeNote), this.setNodeAttachment = this.setNodeAttachment.bind(this), this.mindMap.command.add("SET_NODE_ATTACHMENT", this.setNodeAttachment), this.setNodeTag = this.setNodeTag.bind(this), this.mindMap.command.add("SET_NODE_TAG", this.setNodeTag), this.insertFormula = this.insertFormula.bind(this), this.mindMap.command.add("INSERT_FORMULA", this.insertFormula), this.addGeneralization = this.addGeneralization.bind(this), this.mindMap.command.add("ADD_GENERALIZATION", this.addGeneralization), this.removeGeneralization = this.removeGeneralization.bind(this), this.mindMap.command.add("REMOVE_GENERALIZATION", this.removeGeneralization), this.setNodeCustomPosition = this.setNodeCustomPosition.bind(this), this.mindMap.command.add(
      "SET_NODE_CUSTOM_POSITION",
      this.setNodeCustomPosition
    ), this.resetLayout = this.resetLayout.bind(this), this.mindMap.command.add("RESET_LAYOUT", this.resetLayout), this.setNodeShape = this.setNodeShape.bind(this), this.mindMap.command.add("SET_NODE_SHAPE", this.setNodeShape), this.goTargetNode = this.goTargetNode.bind(this), this.mindMap.command.add("GO_TARGET_NODE", this.goTargetNode), this.removeCustomStyles = this.removeCustomStyles.bind(this), this.mindMap.command.add("REMOVE_CUSTOM_STYLES", this.removeCustomStyles), this.removeAllNodeCustomStyles = this.removeAllNodeCustomStyles.bind(this), this.mindMap.command.add(
      "REMOVE_ALL_NODE_CUSTOM_STYLES",
      this.removeAllNodeCustomStyles
    );
  }
  //  注册快捷键
  registerShortcutKeys() {
    this.mindMap.keyCommand.addShortcut("Tab", () => {
      this.mindMap.execCommand("INSERT_CHILD_NODE");
    }), this.mindMap.keyCommand.addShortcut("Insert", () => {
      this.mindMap.execCommand("INSERT_CHILD_NODE");
    }), this.mindMap.keyCommand.addShortcut("Enter", () => {
      this.mindMap.execCommand("INSERT_NODE");
    }), this.mindMap.keyCommand.addShortcut("Shift+Tab", () => {
      this.mindMap.execCommand("INSERT_PARENT_NODE");
    }), this.mindMap.keyCommand.addShortcut("Control+g", () => {
      this.mindMap.execCommand("ADD_GENERALIZATION");
    }), this.toggleActiveExpand = this.toggleActiveExpand.bind(this), this.mindMap.keyCommand.addShortcut("/", this.toggleActiveExpand), this.mindMap.keyCommand.addShortcut("Del|Backspace", () => {
      this.mindMap.execCommand("REMOVE_NODE");
    }), this.mindMap.keyCommand.addShortcut("Shift+Backspace", () => {
      this.mindMap.execCommand("REMOVE_CURRENT_NODE");
    }), this.mindMap.on("before_show_text_edit", () => {
      this.startTextEdit();
    }), this.mindMap.on("hide_text_edit", () => {
      this.endTextEdit();
    }), this.mindMap.keyCommand.addShortcut("Control+a", () => {
      this.mindMap.execCommand("SELECT_ALL");
    }), this.mindMap.keyCommand.addShortcut("Control+l", () => {
      this.mindMap.execCommand("RESET_LAYOUT");
    }), this.mindMap.keyCommand.addShortcut("Control+Up", () => {
      this.mindMap.execCommand("UP_NODE");
    }), this.mindMap.keyCommand.addShortcut("Control+Down", () => {
      this.mindMap.execCommand("DOWN_NODE");
    }), this.mindMap.keyCommand.addShortcut("Control+c", () => {
      this.copy();
    }), this.mindMap.keyCommand.addShortcut("Control+x", () => {
      this.cut();
    }), this.mindMap.keyCommand.addShortcut("Control+v", () => {
      this.paste();
    }), this.mindMap.keyCommand.addShortcut("Control+Enter", () => {
      this.setRootNodeCenter();
    });
  }
  // 派发节点激活事件
  emitNodeActiveEvent(t = null, e = [...this.activeNodeList]) {
    q3(
      this.lastActiveNodeList,
      e
    ) || (this.lastActiveNodeList = [...e], clearTimeout(this.emitNodeActiveEventTimer), this.emitNodeActiveEventTimer = setTimeout(() => {
      this.mindMap.emit("node_active", t, e);
    }, 0));
  }
  // 鼠标点击画布时清空当前激活节点列表
  clearActiveNodeListOnDrawClick(t, e) {
    if (this.activeNodeList.length <= 0) return;
    let n = !0;
    const { useLeftKeySelectionRightKeyDrag: s } = this.mindMap.opt;
    if (e === "contextmenu" ? !s : s) {
      const r = this.mindMap.event.mousedownPos;
      n = Math.abs(t.clientX - r.x) <= 5 && Math.abs(t.clientY - r.y) <= 5;
    }
    n && this.mindMap.execCommand("CLEAR_ACTIVE_NODE");
  }
  //  开启文字编辑，会禁用回车键和删除键相关快捷键防止冲突
  startTextEdit() {
    this.mindMap.keyCommand.save();
  }
  //  结束文字编辑，会恢复回车键和删除键相关快捷键
  endTextEdit() {
    this.mindMap.keyCommand.restore();
  }
  // 清空节点缓存池
  clearCache() {
    this.layout.lru.clear(), this.nodeCache = {}, this.lastNodeCache = {};
  }
  // 保存触发渲染的参数
  addRenderParams(t, e) {
    t && this.renderCallbackList.findIndex((s) => s === t) === -1 && this.renderCallbackList.push(t), e && this.renderSourceList.findIndex((s) => s === e) === -1 && this.renderSourceList.push(e);
  }
  // 判断是否包含某种触发渲染源
  checkHasRenderSource(t) {
    t = Array.isArray(t) ? t : [t];
    for (let e = 0; e < this.renderSourceList.length; e++)
      if (t.includes(this.renderSourceList[e]))
        return !0;
    return !1;
  }
  // 渲染完毕的操作
  onRenderEnd() {
    this.renderCallbackList.forEach((t) => {
      t();
    }), this.isRendering = !1, this.reRender = !1, this.renderCallbackList = [], this.renderSourceList = [], this.mindMap.emit("node_tree_render_end");
  }
  // 渲染
  render(t, e) {
    this.addRenderParams(t, e), clearTimeout(this.renderTimer), this.renderTimer = setTimeout(() => {
      this._render();
    }, 0);
  }
  // 真正的渲染
  _render() {
    if (this.checkHasRenderSource(E.CHANGE_THEME) && this.resetUnExpandNodeStyle(), this.isRendering) {
      this.hasWaitRendering = !0;
      return;
    }
    if (this.isRendering = !0, this.lastNodeCache = this.nodeCache, this.nodeCache = {}, this.reRender && this.clearActiveNodeList(), !this.renderTree) {
      this.onRenderEnd();
      return;
    }
    this.mindMap.emit("node_tree_render_start"), this.root = null, this.layout.doLayout((t) => {
      Object.keys(this.lastNodeCache).forEach((e) => {
        this.nodeCache[e] || (this.removeNodeFromActiveList(this.lastNodeCache[e]), this.emitNodeActiveEvent(), this.lastNodeCache[e].destroy());
      }), this.root = t, this.root.render(() => {
        if (this.isRendering = !1, this.hasWaitRendering) {
          this.hasWaitRendering = !1, this.render();
          return;
        }
        this.onRenderEnd();
      });
    }), this.emitNodeActiveEvent();
  }
  // 给当前被收起来的节点数据添加更新标志
  resetUnExpandNodeStyle() {
    this.renderTree && K(this.renderTree, null, (t) => {
      if (!t.data.expand)
        return K(t, null, (e) => {
          e.data.needUpdate = !0;
        }), !0;
    });
  }
  //  清除当前所有激活节点，并会触发事件
  clearActiveNode() {
    this.activeNodeList.length <= 0 || (this.clearActiveNodeList(), this.emitNodeActiveEvent(null, []));
  }
  //  清除当前激活的节点列表
  clearActiveNodeList() {
    this.activeNodeList.forEach((t) => {
      this.mindMap.execCommand("SET_NODE_ACTIVE", t, !1);
    }), this.activeNodeList = [];
  }
  // 添加节点到激活列表里
  addNodeToActiveList(t, e = !1) {
    if (this.mindMap.opt.onlyOneEnableActiveNodeOnCooperate && t.userList.length > 0)
      return;
    this.findActiveNodeIndex(t) === -1 && (e || this.mindMap.emit("before_node_active", t, this.activeNodeList), this.mindMap.execCommand("SET_NODE_ACTIVE", t, !0), this.activeNodeList.push(t));
  }
  // 在激活列表里移除某个节点
  removeNodeFromActiveList(t) {
    let e = this.findActiveNodeIndex(t);
    e !== -1 && (this.mindMap.execCommand("SET_NODE_ACTIVE", t, !1), this.activeNodeList.splice(e, 1));
  }
  // 手动激活多个节点，激活单个节点请直接调用节点实例的active()方法
  activeMultiNode(t = []) {
    t.forEach((e) => {
      this.mindMap.emit("before_node_active", e, this.activeNodeList), this.addNodeToActiveList(e, !0), this.emitNodeActiveEvent(e);
    });
  }
  // 手动取消激活多个节点
  cancelActiveMultiNode(t = []) {
    t.forEach((e) => {
      this.removeNodeFromActiveList(e), this.emitNodeActiveEvent(null);
    });
  }
  //  检索某个节点在激活列表里的索引
  findActiveNodeIndex(t) {
    return ut(t, this.activeNodeList);
  }
  //  全选
  selectAll() {
    this.mindMap.opt.readonly || (K(
      this.root,
      null,
      (t) => {
        t.getData("isActive") || this.addNodeToActiveList(t), t._generalizationList && t._generalizationList.length > 0 && t._generalizationList.forEach((e) => {
          const n = e.generalizationNode;
          n.getData("isActive") || this.addNodeToActiveList(n);
        });
      },
      null,
      !0,
      0,
      0
    ), this.emitNodeActiveEvent());
  }
  //  回退
  back(t) {
    this.backForward("back", t);
  }
  //  前进
  forward(t) {
    this.backForward("forward", t);
  }
  // 前进回退
  backForward(t, e) {
    this.mindMap.execCommand("CLEAR_ACTIVE_NODE");
    const n = this.mindMap.command[t](e);
    n && (this.renderTree = n, this.mindMap.render()), this.mindMap.emit("data_change", n);
  }
  // 获取创建新节点的行为
  getNewNodeBehavior(t = !1, e = !1) {
    const { createNewNodeBehavior: n } = this.mindMap.opt;
    let s = !1, r = !1;
    switch (n) {
      case E.CREATE_NEW_NODE_BEHAVIOR.DEFAULT:
        s = e || !t, r = e ? !1 : t;
        break;
      case E.CREATE_NEW_NODE_BEHAVIOR.NOT_ACTIVE:
        s = !1, r = !1;
        break;
      case E.CREATE_NEW_NODE_BEHAVIOR.ACTIVE_ONLY:
        s = !0, r = !1;
        break;
    }
    return {
      focusNewNode: s,
      inserting: r
    };
  }
  //  插入同级节点
  insertNode(t = !0, e = [], n = null, s = []) {
    if (e = It(e), this.activeNodeList.length <= 0 && e.length <= 0)
      return;
    this.textEdit.hideEditTextBox();
    const {
      defaultInsertSecondLevelNodeText: r,
      defaultInsertBelowSecondLevelNodeText: a
    } = this.mindMap.opt, o = e.length > 0 ? e : this.activeNodeList, h = o.length > 1, l = this.hasRichTextPlugin(), { focusNewNode: c, inserting: d } = this.getNewNodeBehavior(
      t,
      h
    ), g = {
      expand: !0,
      richText: l,
      isActive: c
      // 如果同时对多个节点插入子节点，那么需要把新增的节点设为激活状态。如果不进入编辑状态，那么也需要手动设为激活状态
    };
    l && (g.resetRichText = !0), s = gn(s, g);
    const f = n && n.richText;
    let m = !1;
    o.forEach((v) => {
      if (v.isGeneralization || v.isRoot)
        return;
      s = $t(s);
      const x = v.parent, M = v.layerIndex === 1 ? r : a, T = Si(v);
      f && g.resetRichText && delete g.resetRichText;
      const A = {
        inserting: d,
        data: {
          text: M,
          ...g,
          uid: qt(),
          ...n || {}
        },
        children: [...Ni(s, m)]
      };
      m = !0, x.nodeData.children.splice(T + 1, 0, A);
    }), c && this.clearActiveNodeList(), this.mindMap.render();
  }
  // 插入多个同级节点
  insertMultiNode(t, e) {
    if (!e || e.length <= 0 || (t = It(t), this.activeNodeList.length <= 0 && t.length <= 0))
      return;
    this.textEdit.hideEditTextBox();
    const n = t.length > 0 ? t : this.activeNodeList, s = this.hasRichTextPlugin(), { focusNewNode: r } = this.getNewNodeBehavior(!1, !0), a = {
      expand: !0,
      richText: s,
      isActive: r
    };
    s && (a.resetRichText = !0), e = gn(e, a);
    let o = !1;
    n.forEach((h) => {
      if (h.isGeneralization || h.isRoot)
        return;
      e = $t(e);
      const l = h.parent, c = Si(h), d = Ni(e, o);
      o = !0, l.nodeData.children.splice(c + 1, 0, ...d);
    }), r && this.clearActiveNodeList(), this.mindMap.render();
  }
  //  插入子节点
  insertChildNode(t = !0, e = [], n = null, s = []) {
    if (e = It(e), this.activeNodeList.length <= 0 && e.length <= 0)
      return;
    this.textEdit.hideEditTextBox();
    const {
      defaultInsertSecondLevelNodeText: r,
      defaultInsertBelowSecondLevelNodeText: a
    } = this.mindMap.opt, o = e.length > 0 ? e : this.activeNodeList, h = o.length > 1, l = this.hasRichTextPlugin(), { focusNewNode: c, inserting: d } = this.getNewNodeBehavior(
      t,
      h
    ), g = {
      expand: !0,
      richText: l,
      isActive: c
    };
    l && (g.resetRichText = !0), s = gn(s, g);
    const f = n && n.richText;
    let m = !1;
    o.forEach((v) => {
      if (v.isGeneralization)
        return;
      s = $t(s), v.nodeData.children || (v.nodeData.children = []);
      const x = v.isRoot ? r : a;
      f && g.resetRichText && delete g.resetRichText;
      const w = {
        inserting: d,
        data: {
          text: x,
          uid: qt(),
          ...g,
          ...n || {}
        },
        children: [...Ni(s, m)]
      };
      m = !0, v.nodeData.children.push(w), v.setData({
        expand: !0
      });
    }), c && this.clearActiveNodeList(), this.mindMap.render();
  }
  // 插入多个子节点
  insertMultiChildNode(t, e) {
    if (!e || e.length <= 0 || (t = It(t), this.activeNodeList.length <= 0 && t.length <= 0))
      return;
    this.textEdit.hideEditTextBox();
    const n = t.length > 0 ? t : this.activeNodeList, s = this.hasRichTextPlugin(), { focusNewNode: r } = this.getNewNodeBehavior(!1, !0), a = {
      expand: !0,
      richText: s,
      isActive: r
    };
    s && (a.resetRichText = !0), e = gn(e, a);
    let o = !1;
    n.forEach((h) => {
      h.isGeneralization || (e = $t(e), h.nodeData.children || (h.nodeData.children = []), e = Ni(e, o), o = !0, h.nodeData.children.push(...e), h.setData({
        expand: !0
      }));
    }), r && this.clearActiveNodeList(), this.mindMap.render();
  }
  // 插入父节点
  insertParentNode(t = !0, e, n) {
    if (e = It(e), this.activeNodeList.length <= 0 && e.length <= 0)
      return;
    this.textEdit.hideEditTextBox();
    const {
      defaultInsertSecondLevelNodeText: s,
      defaultInsertBelowSecondLevelNodeText: r
    } = this.mindMap.opt, a = e.length > 0 ? e : this.activeNodeList, o = a.length > 1, h = this.hasRichTextPlugin(), { focusNewNode: l, inserting: c } = this.getNewNodeBehavior(
      t,
      o
    ), d = {
      expand: !0,
      richText: h,
      isActive: l
    };
    h && (d.resetRichText = !0);
    const g = n && n.richText;
    a.forEach((f) => {
      if (f.isGeneralization || f.isRoot)
        return;
      const m = f.layerIndex === 1 ? s : r;
      g && d.resetRichText && delete d.resetRichText;
      const v = {
        inserting: c,
        data: {
          text: m,
          uid: qt(),
          ...d,
          ...n || {}
        },
        children: [f.nodeData]
      }, x = f.parent, w = Si(f);
      x.nodeData.children.splice(w, 1, v);
    }), l && this.clearActiveNodeList(), this.mindMap.render();
  }
  //  上移节点，多个节点只会操作第一个节点
  upNode(t) {
    if (this.activeNodeList.length <= 0 && !t)
      return;
    const n = (t ? [t] : this.activeNodeList)[0];
    if (n.isRoot)
      return;
    let s = n.parent, r = s.children, a = ut(n, r);
    if (a === -1 || a === 0)
      return;
    let o = a - 1;
    r.splice(a, 1), r.splice(o, 0, n), s.nodeData.children.splice(a, 1), s.nodeData.children.splice(o, 0, n.nodeData), this.mindMap.render();
  }
  //  下移节点，多个节点只会操作第一个节点
  downNode(t) {
    if (this.activeNodeList.length <= 0 && !t)
      return;
    const n = (t ? [t] : this.activeNodeList)[0];
    if (n.isRoot)
      return;
    let s = n.parent, r = s.children, a = ut(n, r);
    if (a === -1 || a === r.length - 1)
      return;
    let o = a + 1;
    r.splice(a, 1), r.splice(o, 0, n), s.nodeData.children.splice(a, 1), s.nodeData.children.splice(o, 0, n.nodeData), this.mindMap.render();
  }
  // 将节点上移一个层级，多个节点只会操作第一个节点
  moveUpOneLevel(t) {
    if (t = t || this.activeNodeList[0], !t || t.isRoot || t.layerIndex <= 1)
      return;
    const e = t.parent, n = e.parent, s = ut(t, e.children), r = ut(e, n.children);
    e.nodeData.children.splice(s, 1), n.nodeData.children.splice(r + 1, 0, t.nodeData), this.mindMap.render();
  }
  // 移除节点数据的自定义样式的内部方法
  _handleRemoveCustomStyles(t) {
    let e = !1;
    return Object.keys(t).forEach((n) => {
      lr(n) && (e = !0, delete t[n]);
    }), this.hasRichTextPlugin() && (e = !0, t.resetRichText = !0), e;
  }
  // 一键去除自定义样式
  removeCustomStyles(t) {
    if (t = t || this.activeNodeList[0], !t)
      return;
    this._handleRemoveCustomStyles(t.getData()) && this.reRenderNodeCheckChange(t);
  }
  // 一键去除所有节点自定义样式
  removeAllNodeCustomStyles(t) {
    t = It(t);
    let e = !1;
    if (t.length > 0)
      t.forEach((n) => {
        this._handleRemoveCustomStyles(n.getData()) && (e = !0);
      });
    else {
      if (!this.renderTree) return;
      K(this.renderTree, null, (n) => {
        this._handleRemoveCustomStyles(n.data) && (e = !0);
        const r = Gn(n.data);
        r.length > 0 && r.forEach((a) => {
          this._handleRemoveCustomStyles(a) && (e = !0);
        });
      });
    }
    e && this.mindMap.reRender();
  }
  // 复制节点
  copy() {
    this.beingCopyData = this.copyNode(), this.beingCopyData && (this.mindMap.opt.disabledClipboard || Eo(Co(this.beingCopyData)));
  }
  // 剪切节点
  cut() {
    this.mindMap.execCommand("CUT_NODE", (t) => {
      this.beingCopyData = t, this.mindMap.opt.disabledClipboard || Eo(Co(t));
    });
  }
  // 非https下复制黏贴，获取内容方法
  handlePaste(t) {
    const { disabledClipboard: e } = this.mindMap.opt;
    if (e) return;
    const n = t.clipboardData || t.originalEvent.clipboardData, s = n.items;
    Array.from(s).forEach((r) => {
      r.type.indexOf("image") > -1 && r.getAsFile(), r.type.indexOf("text") > -1 && n.getData("text");
    }), this.paste();
  }
  // 粘贴
  async paste() {
    const {
      errorHandler: t,
      handleIsSplitByWrapOnPasteCreateNewNode: e,
      handleNodePasteImg: n,
      disabledClipboard: s,
      onlyPasteTextWhenHasImgAndText: r
    } = this.mindMap.opt;
    if (!s && kl())
      try {
        const a = await V3();
        let o = a.text || "", h = a.img || null;
        if (o) {
          let l = null, c = !0;
          if (this.mindMap.opt.customHandleClipboardText)
            try {
              const d = await this.mindMap.opt.customHandleClipboardText(o);
              if (!me(d)) {
                c = !1;
                const g = dr(d);
                g.isSmm ? l = g.data : o = g.data;
              }
            } catch (d) {
              t(
                ai.CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR,
                d
              );
            }
          if (c) {
            const d = dr(o);
            d.isSmm ? l = d.data : o = d.data;
          }
          if (l)
            this.mindMap.execCommand(
              "INSERT_MULTI_CHILD_NODE",
              [],
              Array.isArray(l) ? l : [l]
            );
          else {
            this.hasRichTextPlugin() && (o = Qn(o));
            const d = o.split(new RegExp(`\r?
|(?<!
)\r`, "g")).filter((g) => !!g);
            d.length > 1 && e ? e().then(() => {
              this.mindMap.execCommand(
                "INSERT_MULTI_CHILD_NODE",
                [],
                d.map((g) => ({
                  data: {
                    text: g
                  },
                  children: []
                }))
              );
            }).catch(() => {
              this.mindMap.execCommand("INSERT_CHILD_NODE", !1, [], {
                text: o
              });
            }) : this.mindMap.execCommand("INSERT_CHILD_NODE", !1, [], {
              text: o
            });
          }
        }
        if (h && (!o || !r))
          try {
            let l = null;
            n && typeof n == "function" ? l = await n(h) : l = await k3(h), this.activeNodeList.length > 0 && this.activeNodeList.forEach((c) => {
              this.mindMap.execCommand("SET_NODE_IMAGE", c, {
                url: l.url,
                title: "",
                width: l.size.width,
                height: l.size.height
              });
            });
          } catch (l) {
            t(ai.LOAD_CLIPBOARD_IMAGE_ERROR, l);
          }
      } catch (a) {
        t(ai.READ_CLIPBOARD_ERROR, a);
      }
    else
      this.beingCopyData && this.mindMap.execCommand("PASTE_NODE", this.beingCopyData);
  }
  //  将节点移动到另一个节点的前面
  insertBefore(t, e) {
    this.insertTo(t, e, "before");
  }
  //  将节点移动到另一个节点的后面
  insertAfter(t, e) {
    this.insertTo(t, e, "after");
  }
  // 将节点移动到另一个节点的前面或后面
  insertTo(t, e, n = "before") {
    let s = It(t);
    s = s.filter((r) => !r.isRoot), n === "after" && s.reverse(), s.forEach((r) => {
      let a = r.parent, o = a.children, h = ut(r, o);
      if (h === -1)
        return;
      o.splice(h, 1), a.nodeData.children.splice(h, 1);
      let l = e.parent, c = l.children, d = ut(e, c);
      d !== -1 && (n === "after" && d++, c.splice(d, 0, r), l.nodeData.children.splice(d, 0, r.nodeData));
    }), this.mindMap.render();
  }
  //  移除节点
  removeNode(t = []) {
    if (t = It(t), this.activeNodeList.length <= 0 && t.length <= 0)
      return;
    let e = null, n = t.length > 0, s = n ? t : this.activeNodeList, r = s.find((a) => a.isRoot);
    if (r)
      this.clearActiveNodeList(), r.children = [], r.nodeData.children = [];
    else {
      e = this.getNextActiveNode(s);
      for (let a = 0; a < s.length; a++) {
        const o = s[a], h = this.textEdit.getCurrentEditNode();
        h && h.getData("uid") === o.getData("uid") && this.textEdit.hideEditTextBox(), n && s.splice(a, 1), o.isGeneralization ? (this.deleteNodeGeneralization(o), this.removeNodeFromActiveList(o), a--) : (this.removeNodeFromActiveList(o), Ts(o), a--);
      }
    }
    this.activeNodeList = [], e && this.addNodeToActiveList(e), this.emitNodeActiveEvent(), this.mindMap.render();
  }
  // 删除概要节点，即从所属节点里删除该概要
  deleteNodeGeneralization(t) {
    const e = t.generalizationBelongNode, n = e.getGeneralizationNodeIndex(t);
    let s = e.getData("generalization");
    Array.isArray(s) ? s.splice(n, 1) : s = null, this.mindMap.execCommand("SET_NODE_DATA", e, {
      generalization: s
    }), this.closeHighlightNode();
  }
  // 仅删除当前节点
  removeCurrentNode(t = []) {
    if (t = It(t), this.activeNodeList.length <= 0 && t.length <= 0)
      return;
    let n = t.length > 0 ? t : this.activeNodeList;
    n = n.filter((r) => !r.isRoot);
    let s = this.getNextActiveNode(n);
    for (let r = 0; r < n.length; r++) {
      let a = n[r];
      if (a.isGeneralization)
        this.deleteNodeGeneralization(a);
      else {
        const o = a.parent, h = Si(a);
        o.nodeData.children.splice(
          h,
          1,
          ...a.nodeData.children || []
        );
      }
    }
    this.activeNodeList = [], s && this.addNodeToActiveList(s), this.emitNodeActiveEvent(), this.mindMap.render();
  }
  // 计算下一个可激活的节点
  getNextActiveNode(t) {
    if (t.length !== 1 || this.findActiveNodeIndex(t[0]) === -1) return null;
    let e = null;
    if (this.activeNodeList.length === 1 && !this.activeNodeList[0].isGeneralization && this.mindMap.opt.deleteNodeActive) {
      const n = this.activeNodeList[0], s = n.parent.children, r = ut(n, s);
      r < s.length - 1 ? e = s[r + 1] : r > 0 ? e = s[r - 1] : e = n.parent;
    }
    return e;
  }
  //  复制节点
  copyNode() {
    if (this.activeNodeList.length <= 0)
      return null;
    let t = wo(this.activeNodeList);
    return t = bo(t), t.map((e) => Gi({}, e, !0));
  }
  //  剪切节点
  cutNode(t) {
    if (this.activeNodeList.length <= 0)
      return;
    let e = wo(this.activeNodeList).filter(
      (s) => !s.isRoot
    );
    e = bo(e);
    const n = e.map((s) => Gi({}, s, !0));
    e.forEach((s) => {
      Ts(s);
    }), this.clearActiveNodeList(), this.mindMap.render(), t && typeof t == "function" && t(n);
  }
  //  移动节点作为另一个节点的子节点
  moveNodeTo(t, e) {
    let n = It(t);
    n = n.filter((s) => !s.isRoot), n.forEach((s) => {
      this.removeNodeFromActiveList(s), Ts(s), e.setData({
        expand: !0
      }), e.nodeData.children.push(s.nodeData);
    }), this.emitNodeActiveEvent(), this.mindMap.render();
  }
  //   粘贴节点到节点
  pasteNode(t) {
    t = It(t), this.mindMap.execCommand("INSERT_MULTI_CHILD_NODE", [], t);
  }
  //  设置节点样式
  setNodeStyle(t, e, n) {
    const s = {
      [e]: n
    };
    this.setNodeDataRender(t, s), hr.includes(e) && (t.parent || t).renderLine(!0);
  }
  //  设置节点多个样式
  setNodeStyles(t, e) {
    const n = { ...e };
    this.setNodeDataRender(t, n);
    let s = Object.keys(e), r = !1;
    s.forEach((a) => {
      hr.includes(a) && (r = !0);
    }), r && (t.parent || t).renderLine(!0);
  }
  //  设置节点是否激活
  setNodeActive(t, e) {
    this.mindMap.execCommand("SET_NODE_DATA", t, {
      isActive: e
    }), t.updateNodeByActive(e);
  }
  //  设置节点是否展开
  setNodeExpand(t, e) {
    this.mindMap.execCommand("SET_NODE_DATA", t, {
      expand: e
    }), this.mindMap.render();
  }
  //  展开所有
  expandAllNode(t = "") {
    if (!this.renderTree) return;
    const e = (n, s) => {
      !s && n.data.uid === t && (s = !0), s && !n.data.expand && (n.data.expand = !0), n.children && n.children.length > 0 && n.children.forEach((r) => {
        e(r, s);
      });
    };
    e(this.renderTree, !t), this.mindMap.render();
  }
  //  收起所有
  unexpandAllNode(t = !0, e = "") {
    if (!this.renderTree) return;
    const n = (s, r, a) => {
      !a && s.data.uid === e && (a = !0), a && !r && s.children && s.children.length > 0 && (s.data.expand = !1), s.children && s.children.length > 0 && s.children.forEach((o) => {
        n(o, !1, a);
      });
    };
    n(this.renderTree, !0, !e), this.mindMap.render(() => {
      t && this.setRootNodeCenter();
    });
  }
  //  展开到指定层级
  expandToLevel(t) {
    this.renderTree && (K(
      this.renderTree,
      null,
      (e, n, s, r) => {
        r < t ? e.data.expand = !0 : !s && e.children && e.children.length > 0 && (e.data.expand = !1);
      },
      null,
      !0,
      0,
      0
    ), this.mindMap.render());
  }
  //  切换激活节点的展开状态
  toggleActiveExpand() {
    this.activeNodeList.forEach((t) => {
      t.nodeData.children.length <= 0 || t.isRoot || this.toggleNodeExpand(t);
    });
  }
  //  切换节点展开状态
  toggleNodeExpand(t) {
    this.mindMap.execCommand("SET_NODE_EXPAND", t, !t.getData("expand"));
  }
  //  设置节点文本
  setNodeText(t, e, n, s) {
    n = n === void 0 ? t.getData("richText") : n, this.setNodeDataRender(t, {
      text: e,
      richText: n,
      resetRichText: s
    });
  }
  //  设置节点图片
  setNodeImage(t, e) {
    const {
      url: n,
      title: s,
      width: r,
      height: a,
      custom: o = !1
    } = e || { url: "", title: "", width: 0, height: 0, custom: !1 };
    this.setNodeDataRender(t, {
      image: n,
      imageTitle: s || "",
      imageSize: {
        width: r,
        height: a,
        custom: o
      }
    });
  }
  //  设置节点图标
  setNodeIcon(t, e) {
    this.setNodeDataRender(t, {
      icon: e
    });
  }
  //  设置节点超链接
  setNodeHyperlink(t, e, n = "") {
    this.setNodeDataRender(t, {
      hyperlink: e,
      hyperlinkTitle: n
    });
  }
  //  设置节点备注
  setNodeNote(t, e) {
    this.setNodeDataRender(t, {
      note: e
    });
  }
  //  设置节点附件
  setNodeAttachment(t, e, n = "") {
    this.setNodeDataRender(t, {
      attachmentUrl: e,
      attachmentName: n
    });
  }
  //  设置节点标签
  setNodeTag(t, e) {
    this.setNodeDataRender(t, {
      tag: e
    });
  }
  // 设置节点公式
  insertFormula(t, e = []) {
    if (!this.hasRichTextPlugin() || !this.mindMap.formula) return;
    e = It(e), (e.length > 0 ? e : this.activeNodeList).forEach((s) => {
      this.mindMap.formula.insertFormulaToNode(s, t);
    });
  }
  //  添加节点概要
  addGeneralization(t, e = !0) {
    if (this.activeNodeList.length <= 0)
      return;
    const n = this.activeNodeList.filter((c) => !c.isRoot && !c.isGeneralization && !c.checkHasSelfGeneralization()), s = W3(n);
    if (s.length <= 0) return;
    const r = this.hasRichTextPlugin(), { focusNewNode: a, inserting: o } = this.getNewNodeBehavior(
      e,
      s.length > 1
    );
    let h = !1;
    const l = t && t.richText;
    s.forEach((c) => {
      const d = {
        inserting: o,
        ...t || {
          text: this.mindMap.opt.defaultGeneralizationText
        },
        range: c.range || null,
        uid: qt(),
        richText: r,
        isActive: a
      };
      r && !l && (d.resetRichText = r);
      let g = c.node.getData("generalization");
      if (g = g ? Array.isArray(g) ? g : [g] : [], c.range) {
        if (!!g.find((m) => m.range && m.range[0] === c.range[0] && m.range[1] === c.range[1]))
          return;
        g.push(d);
      } else
        g.push(d);
      h = !0, this.mindMap.execCommand("SET_NODE_DATA", c.node, {
        generalization: g
      }), c.node.setData({
        expand: !0
      });
    }), h && (a && this.clearActiveNodeList(), this.mindMap.render(() => {
      this.mindMap.render();
    }));
  }
  //  删除节点概要
  removeGeneralization() {
    this.activeNodeList.length <= 0 || (this.activeNodeList.forEach((t) => {
      t.checkHasGeneralization() && this.mindMap.execCommand("SET_NODE_DATA", t, {
        generalization: null
      });
    }), this.mindMap.render(), this.closeHighlightNode());
  }
  //  设置节点自定义位置
  setNodeCustomPosition(t, e = void 0, n = void 0) {
    [t].forEach((r) => {
      this.mindMap.execCommand("SET_NODE_DATA", r, {
        customLeft: e,
        customTop: n
      });
    });
  }
  //  一键整理布局，即去除自定义位置
  resetLayout() {
    K(
      this.root,
      null,
      (t) => {
        t.customLeft = void 0, t.customTop = void 0, this.mindMap.execCommand("SET_NODE_DATA", t, {
          customLeft: void 0,
          customTop: void 0
        }), this.mindMap.render();
      },
      null,
      !0,
      0,
      0
    );
  }
  //  设置节点形状
  setNodeShape(t, e) {
    if (!e || !ep.includes(e))
      return;
    [t].forEach((s) => {
      this.setNodeStyle(s, "shape", e);
    });
  }
  // 定位到指定节点
  goTargetNode(t, e = () => {
  }) {
    let n = typeof t == "string" ? t : t.getData("uid");
    n && this.expandToNodeUid(n, () => {
      let s = this.findNodeByUid(n);
      s && (s.active(), this.moveNodeToCenter(s), e(s));
    });
  }
  //  更新节点数据
  setNodeData(t, e) {
    Object.keys(e).forEach((n) => {
      t.nodeData.data[n] = e[n];
    });
  }
  //  设置节点数据，并判断是否渲染
  setNodeDataRender(t, e, n = !1) {
    if (this.mindMap.execCommand("SET_NODE_DATA", t, e), j3(e)) {
      this.mindMap.emit("node_tree_render_end");
      return;
    }
    this.reRenderNodeCheckChange(t, n);
  }
  // 重新节点某个节点，判断节点大小是否发生了改变，是的话触发重绘
  reRenderNodeCheckChange(t, e) {
    t.reRender() ? e || this.mindMap.render() : this.mindMap.emit("node_tree_render_end");
  }
  // 移动节点到画布中心
  // resetScale参数指定是否要将画布缩放值复位为100%，当你没有显式传递时，默认值为undefined，因为实例化选项的resetScaleOnMoveNodeToCenter配置也会决定是否复位缩放，所以当你没有显式传递时使用resetScaleOnMoveNodeToCenter配置，否则使用resetScale配置
  moveNodeToCenter(t, e) {
    let { resetScaleOnMoveNodeToCenter: n } = this.mindMap.opt;
    e !== void 0 && (n = e);
    let { transform: s, state: r } = this.mindMap.view.getTransformData(), { left: a, top: o, width: h, height: l } = t;
    n || (a *= s.scaleX, o *= s.scaleY, h *= s.scaleX, l *= s.scaleY);
    let c = this.mindMap.width / 2, d = this.mindMap.height / 2, g = a + h / 2, f = o + l / 2, m = c - r.x, v = d - r.y, x = m - g, w = v - f;
    this.mindMap.view.translateX(x), this.mindMap.view.translateY(w), n && this.mindMap.view.setScale(1);
  }
  // 回到中心主题，即设置根节点到画布中心
  setRootNodeCenter() {
    this.moveNodeToCenter(this.root);
  }
  // 展开到指定uid的节点
  expandToNodeUid(t, e = () => {
  }) {
    if (!this.renderTree) {
      e();
      return;
    }
    let n = [], s = !1;
    const r = {};
    L3(this.renderTree, (o, h) => {
      if (o.data.uid === t)
        return n = h ? [...r[h.data.uid], h] : [], "stop";
      if (Gn(o.data).forEach((c) => {
        c.uid === t && (n = h ? [...r[h.data.uid], h, o] : [], s = !0);
      }), s)
        return "stop";
      r[o.data.uid] = h ? [...r[h.data.uid], h] : [];
    });
    let a = !1;
    if (n.forEach((o) => {
      o.data.expand || (a = !0, o.data.expand = !0);
    }), s) {
      const o = n[n.length - 1];
      o && K(o, null, (h) => {
        h.data.expand || (a = !0, h.data.expand = !0);
      });
    }
    a ? this.mindMap.render(e) : e();
  }
  // 根据uid找到对应的节点实例
  findNodeByUid(t) {
    if (!this.root) return;
    let e = null;
    return K(this.root, null, (n) => {
      if (n.getData("uid") === t)
        return e = n, !0;
      let s = !1;
      if ((n._generalizationList || []).forEach((r) => {
        r.generalizationNode.getData("uid") === t && (e = r.generalizationNode, s = !0);
      }), s)
        return !0;
    }), e;
  }
  // 高亮节点或子节点
  highlightNode(t, e, n) {
    if (this.isRendering) return;
    n = {
      stroke: "rgb(94, 200, 248)",
      fill: "transparent",
      ...n || {}
    }, this.highlightBoxNode ? this.highlightBoxNodeStyle && (this.highlightBoxNodeStyle.stroke !== n.stroke || this.highlightBoxNodeStyle.fill !== n.fill) && this.highlightBoxNode.stroke({
      color: n.stroke || "transparent"
    }).fill({
      color: n.fill || "transparent"
    }) : this.highlightBoxNode = new Ge().stroke({
      color: n.stroke || "transparent"
    }).fill({
      color: n.fill || "transparent"
    }), this.highlightBoxNodeStyle = { ...n };
    let s = 1 / 0, r = 1 / 0, a = -1 / 0, o = -1 / 0;
    e ? t.children.slice(e[0], e[1] + 1).forEach((l) => {
      l.left < s && (s = l.left), l.top < r && (r = l.top);
      const c = l.left + l.width, d = l.top + l.height;
      c > a && (a = c), d > o && (o = d);
    }) : (s = t.left, r = t.top, a = t.left + t.width, o = t.top + t.height), this.highlightBoxNode.plot([
      [s, r],
      [a, r],
      [a, o],
      [s, o]
    ]), this.mindMap.otherDraw.add(this.highlightBoxNode);
  }
  // 关闭高亮
  closeHighlightNode() {
    this.highlightBoxNode && this.highlightBoxNode.remove();
  }
  // 是否存在富文本插件
  hasRichTextPlugin() {
    return !!this.mindMap.richText;
  }
}
const De = {
  default: Dl
}, aa = {
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  CapsLock: 20,
  Esc: 27,
  Spacebar: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  Insert: 45,
  Left: 37,
  Up: 38,
  Right: 39,
  Down: 40,
  Del: 46,
  NumLock: 144,
  Cmd: 91,
  CmdFF: 224,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  "`": 192,
  "=": 187,
  "-": 189,
  "/": 191,
  ".": 190
};
for (let i = 0; i <= 9; i++)
  aa[i] = i + 48;
"abcdefghijklmnopqrstuvwxyz".split("").forEach((i, t) => {
  aa[i] = t + 65;
});
const we = aa;
class D6 {
  //  构造函数
  constructor(t) {
    this.opt = t, this.mindMap = t.mindMap, this.shortcutMap = {
      //Enter: [fn]
    }, this.shortcutMapCache = {}, this.isPause = !1, this.isInSvg = !1, this.isStopCheckInSvg = !1, this.defaultEnableCheck = this.defaultEnableCheck.bind(this), this.bindEvent();
  }
  // 扩展按键映射
  extendKeyMap(t, e) {
    we[t] = e;
  }
  // 从按键映射中删除某个键
  removeKeyMap(t) {
    typeof we[t] < "u" && delete we[t];
  }
  //  暂停快捷键响应
  pause() {
    this.isPause = !0;
  }
  //  恢复快捷键响应
  recovery() {
    this.isPause = !1;
  }
  //  保存当前注册的快捷键数据，然后清空快捷键数据
  save() {
    Object.keys(this.shortcutMapCache).length > 0 || (this.shortcutMapCache = this.shortcutMap, this.shortcutMap = {});
  }
  //  恢复保存的快捷键数据，然后清空缓存数据
  restore() {
    Object.keys(this.shortcutMapCache).length <= 0 || (this.shortcutMap = this.shortcutMapCache, this.shortcutMapCache = {});
  }
  // 停止对鼠标是否在画布内的检查，前提是开启了enableShortcutOnlyWhenMouseInSvg选项
  // 库内部节点文本编辑、关联线文本编辑、外框文本编辑前都会暂停检查，否则无法响应回车快捷键用于结束编辑
  // 如果你新增了额外的文本编辑，也可以在编辑前调用此方法
  stopCheckInSvg() {
    const { enableShortcutOnlyWhenMouseInSvg: t } = this.mindMap.opt;
    t && (this.isStopCheckInSvg = !0);
  }
  // 恢复对鼠标是否在画布内的检查
  recoveryCheckInSvg() {
    const { enableShortcutOnlyWhenMouseInSvg: t } = this.mindMap.opt;
    t && (this.isStopCheckInSvg = !0);
  }
  //  绑定事件
  bindEvent() {
    this.onKeydown = this.onKeydown.bind(this), this.mindMap.on("svg_mouseenter", () => {
      this.isInSvg = !0;
    }), this.mindMap.on("svg_mouseleave", () => {
      this.isInSvg = !1;
    }), window.addEventListener("keydown", this.onKeydown), this.mindMap.on("beforeDestroy", () => {
      this.unBindEvent();
    });
  }
  // 解绑事件
  unBindEvent() {
    window.removeEventListener("keydown", this.onKeydown);
  }
  // 根据事件目标判断是否响应快捷键事件
  defaultEnableCheck(t) {
    const e = t.target;
    if (e === document.body) return !0;
    for (let n = 0; n < this.mindMap.editNodeClassList.length; n++) {
      const s = this.mindMap.editNodeClassList[n];
      if (e.classList.contains(s))
        return !0;
    }
    return !1;
  }
  // 按键事件
  onKeydown(t) {
    const {
      enableShortcutOnlyWhenMouseInSvg: e,
      beforeShortcutRun: n,
      customCheckEnableShortcut: s
    } = this.mindMap.opt;
    (typeof s == "function" ? s : this.defaultEnableCheck)(t) && (this.isPause || e && !this.isStopCheckInSvg && !this.isInSvg || Object.keys(this.shortcutMap).forEach((a) => {
      if (this.checkKey(t, a)) {
        if (this.checkKey(t, "Control+v") || (t.stopPropagation(), t.preventDefault()), typeof n == "function" && n(a, [
          ...this.mindMap.renderer.activeNodeList
        ]))
          return;
        this.shortcutMap[a].forEach((o) => {
          o();
        });
      }
    }));
  }
  //  检查键值是否符合
  checkKey(t, e) {
    let n = this.getOriginEventCodeArr(t), s = this.getKeyCodeArr(e);
    if (n.length !== s.length)
      return !1;
    for (let r = 0; r < n.length; r++) {
      let a = s.findIndex((o) => o === n[r]);
      if (a === -1)
        return !1;
      s.splice(a, 1);
    }
    return !0;
  }
  //  获取事件对象里的键值数组
  getOriginEventCodeArr(t) {
    let e = [];
    return (t.ctrlKey || t.metaKey) && e.push(we.Control), t.altKey && e.push(we.Alt), t.shiftKey && e.push(we.Shift), e.includes(t.keyCode) || e.push(t.keyCode), e;
  }
  // 判断是否按下了组合键
  hasCombinationKey(t) {
    return t.ctrlKey || t.metaKey || t.altKey || t.shiftKey;
  }
  //  获取快捷键对应的键值数组
  getKeyCodeArr(t) {
    let e = t.split(/\s*\+\s*/), n = [];
    return e.forEach((s) => {
      n.push(we[s]);
    }), n;
  }
  //  添加快捷键命令
  /**
   * Enter
   * Tab | Insert
   * Shift + a
   */
  addShortcut(t, e) {
    t.split(/\s*\|\s*/).forEach((n) => {
      this.shortcutMap[n] ? this.shortcutMap[n].push(e) : this.shortcutMap[n] = [e];
    });
  }
  //  移除快捷键命令
  removeShortcut(t, e) {
    t.split(/\s*\|\s*/).forEach((n) => {
      if (this.shortcutMap[n])
        if (e) {
          let s = this.shortcutMap[n].findIndex((r) => r === e);
          s !== -1 && this.shortcutMap[n].splice(s, 1);
        } else
          this.shortcutMap[n] = [], delete this.shortcutMap[n];
    });
  }
  //  获取指定快捷键的处理函数
  getShortcutFn(t) {
    let e = [];
    return t.split(/\s*\|\s*/).forEach((n) => {
      e = this.shortcutMap[n] || [];
    }), e;
  }
}
const O6 = "0.14.0", R6 = {
  version: O6
};
class I6 {
  //  构造函数
  constructor(t = {}) {
    this.opt = t, this.mindMap = t.mindMap, this.commands = {}, this.history = [], this.activeHistoryIndex = 0, this.registerShortcutKeys(), this.originAddHistory = this.addHistory.bind(this), this.addHistory = Rl(
      this.addHistory,
      this.mindMap.opt.addHistoryTime,
      this
    ), this.isPause = !1;
  }
  // 暂停收集历史数据
  pause() {
    this.isPause = !0;
  }
  // 恢复收集历史数据
  recovery() {
    this.isPause = !1;
  }
  //  清空历史数据
  clearHistory() {
    this.history = [], this.activeHistoryIndex = 0, this.mindMap.emit("back_forward", 0, 0);
  }
  //  注册快捷键
  registerShortcutKeys() {
    this.mindMap.keyCommand.addShortcut("Control+z", () => {
      this.mindMap.execCommand("BACK");
    }), this.mindMap.keyCommand.addShortcut("Control+y", () => {
      this.mindMap.execCommand("FORWARD");
    });
  }
  //  执行命令
  exec(t, ...e) {
    if (this.commands[t]) {
      if (this.commands[t].forEach((n) => {
        n(...e);
      }), this.mindMap.emit("afterExecCommand", t, ...e), ["BACK", "FORWARD", "SET_NODE_ACTIVE", "CLEAR_ACTIVE_NODE"].includes(
        t
      ))
        return;
      this.addHistory();
    }
  }
  //  添加命令
  add(t, e) {
    this.commands[t] ? this.commands[t].push(e) : this.commands[t] = [e];
  }
  //  移除命令
  remove(t, e) {
    if (this.commands[t])
      if (!e)
        this.commands[t] = [], delete this.commands[t];
      else {
        let n = this.commands[t].find((s) => s === e);
        n !== -1 && this.commands[t].splice(n, 1);
      }
  }
  //  添加回退数据
  addHistory() {
    if (this.mindMap.opt.readonly || this.isPause)
      return;
    this.mindMap.emit("beforeAddHistory");
    const t = this.history.length > 0 ? this.history[this.activeHistoryIndex] : null, e = this.getCopyData(), n = JSON.stringify(e);
    t && t === n || (this.emitDataUpdatesEvent(t, n), this.history = this.history.slice(0, this.activeHistoryIndex + 1), this.history.push(n), this.history.length > this.mindMap.opt.maxHistoryCount && this.history.shift(), this.activeHistoryIndex = this.history.length - 1, this.mindMap.emit("data_change", e), this.mindMap.emit(
      "back_forward",
      this.activeHistoryIndex,
      this.history.length
    ));
  }
  //  回退
  back(t = 1) {
    if (!this.mindMap.opt.readonly && this.activeHistoryIndex - t >= 0) {
      const e = this.history[this.activeHistoryIndex];
      this.activeHistoryIndex -= t, this.mindMap.emit(
        "back_forward",
        this.activeHistoryIndex,
        this.history.length
      );
      const n = this.history[this.activeHistoryIndex], s = JSON.parse(n);
      return this.emitDataUpdatesEvent(e, n), s;
    }
  }
  //  前进
  forward(t = 1) {
    if (this.mindMap.opt.readonly)
      return;
    let e = this.history.length;
    if (this.activeHistoryIndex + t <= e - 1) {
      const n = this.history[this.activeHistoryIndex];
      this.activeHistoryIndex += t, this.mindMap.emit(
        "back_forward",
        this.activeHistoryIndex,
        this.history.length
      );
      const s = this.history[this.activeHistoryIndex], r = JSON.parse(s);
      return this.emitDataUpdatesEvent(n, s), r;
    }
  }
  //  获取渲染树数据副本
  getCopyData() {
    if (!this.mindMap.renderer.renderTree) return null;
    const t = Ol({}, this.mindMap.renderer.renderTree, !0);
    return t.smmVersion = R6.version, t;
  }
  // 移除节点数据中的uid
  removeDataUid(t) {
    t = $t(t);
    let e = (n) => {
      delete n.data.uid, n.children && n.children.length > 0 && n.children.forEach((s) => {
        e(s);
      });
    };
    return e(t), t;
  }
  // 派发思维导图更新明细事件
  emitDataUpdatesEvent(t, e) {
    try {
      const n = "data_change_detail";
      if (this.mindMap.event.listenerCount(n) > 0 && t && e) {
        const r = JSON.parse(t), a = JSON.parse(e), o = $t(To(r)), h = $t(To(a)), l = [], c = (d, g) => (d.children && d.children.length > 0 && d.children.forEach((f, m) => {
          d.children[m] = typeof f == "string" ? g[f] : g[f.data.uid], c(d.children[m], g);
        }), d);
        Object.keys(h).forEach((d) => {
          o[d] ? cr(o[d], h[d]) || l.push({
            action: "update",
            oldData: c(o[d], o),
            data: c(h[d], h)
          }) : l.push({
            action: "create",
            data: c(h[d], h)
          });
        }), Object.keys(o).forEach((d) => {
          h[d] || l.push({
            action: "delete",
            data: c(o[d], o)
          });
        }), this.mindMap.emit(n, l);
      }
    } catch (n) {
      this.mindMap.opt.errorHandler(
        ai.DATA_CHANGE_DETAIL_EVENT_ERROR,
        n
      );
    }
  }
}
class z6 {
  //  构造函数
  constructor() {
    this.has = {}, this.queue = [], this.nextTick = I3(this.flush, this);
  }
  //  添加任务
  push(t, e) {
    if (this.has[t]) {
      this.replaceTask(t, e);
      return;
    }
    this.has[t] = !0, this.queue.push({
      name: t,
      fn: e
    }), this.nextTick();
  }
  // 替换任务
  replaceTask(t, e) {
    const n = this.queue.findIndex((s) => s.name === t);
    n !== -1 && (this.queue[n] = {
      name: t,
      fn: e
    });
  }
  //   执行队列
  flush() {
    let t = this.queue.slice(0);
    this.queue = [], t.forEach(({ name: e, fn: n }) => {
      this.has[e] = !1, n();
    });
  }
}
const jo = {
  // 【基本】
  // 容器元素，必传，必须为DOM元素
  el: null,
  // 思维导图回显数据
  data: null,
  // 要恢复的视图数据，一般通过mindMap.view.getTransformData()方法获取
  viewData: null,
  // 是否只读
  readonly: !1,
  // 布局
  layout: E.LAYOUT.LOGICAL_STRUCTURE,
  // 如果结构为鱼骨图，那么可以通过该选项控制倾斜角度
  fishboneDeg: 45,
  // 主题
  theme: "default",
  // 内置主题：default（默认主题）
  // 主题配置，会和所选择的主题进行合并
  themeConfig: {},
  // 放大缩小的增量比例
  scaleRatio: 0.2,
  // 平移的步长比例，只在鼠标滚轮和触控板触发的平移中应用
  translateRatio: 1,
  // 最小缩小值，百分数，最小为0，该选项只会影响view.narrow方法（影响的行为为Ctrl+-快捷键、鼠标滚轮及触控板），不会影响其他方法，比如view.setScale，所以需要你自行限制大小
  minZoomRatio: 20,
  // 最大放大值，百分数，传-1代表不限制，否则传0以上数字，，该选项只会影响view.enlarge方法
  maxZoomRatio: 400,
  // 自定义判断wheel事件是否来自电脑的触控板
  // 默认是通过判断e.deltaY的值是否小于10，显然这种方法是不准确的，当鼠标滚动的很慢，或者触摸移动的很快时判断就失效了，如果你有更好的方法，欢迎提交issue
  // 如果你希望自己来判断，那么传递一个函数，接收一个参数e（事件对象），需要返回true或false，代表是否是来自触控板
  customCheckIsTouchPad: null,
  // 鼠标缩放是否以鼠标当前位置为中心点，否则以画布中心点
  mouseScaleCenterUseMousePosition: !0,
  // 最多显示几个标签
  maxTag: 5,
  // 展开收缩按钮尺寸
  expandBtnSize: 20,
  // 节点里图片和文字的间距
  imgTextMargin: 5,
  // 节点里各种文字信息的间距，如图标和文字的间距
  textContentMargin: 2,
  // 自定义节点备注内容显示
  customNoteContentShow: null,
  /*
          {
              show(){},
              hide(){}
          }
      */
  // 达到该宽度文本自动换行
  textAutoWrapWidth: 500,
  // 自定义鼠标滚轮事件处理
  // 可以传一个函数，回调参数为事件对象
  customHandleMousewheel: null,
  // 鼠标滚动的行为，如果customHandleMousewheel传了自定义函数，这个属性不生效
  mousewheelAction: E.MOUSE_WHEEL_ACTION.MOVE,
  // zoom（放大缩小）、move（上下移动）
  // 当mousewheelAction设为move时，可以通过该属性控制鼠标滚动一下视图移动的步长，单位px
  mousewheelMoveStep: 100,
  // 当mousewheelAction设为zoom时，或者按住Ctrl键时，默认向前滚动是缩小，向后滚动是放大，如果该属性设为true，那么会反过来
  mousewheelZoomActionReverse: !0,
  // 默认插入的二级节点的文字
  defaultInsertSecondLevelNodeText: "二级节点",
  // 默认插入的二级以下节点的文字
  defaultInsertBelowSecondLevelNodeText: "分支主题",
  // 展开收起按钮的颜色
  expandBtnStyle: {
    color: "#808080",
    fill: "#fff",
    fontSize: 13,
    strokeColor: "#333333"
  },
  // 自定义展开收起按钮的图标
  expandBtnIcon: {
    open: "",
    // svg字符串
    close: ""
  },
  // 处理收起节点数量
  expandBtnNumHandler: null,
  // 是否显示带数量的收起按钮
  isShowExpandNum: !0,
  // 是否只有当鼠标在画布内才响应快捷键事件
  enableShortcutOnlyWhenMouseInSvg: !0,
  // 自定义判断是否响应快捷键事件，优先级比enableShortcutOnlyWhenMouseInSvg选项高
  // 可以传递一个函数，接收事件对象e为参数，需要返回true或false，返回true代表允许响应快捷键事件，反之不允许，库默认当事件目标为body，或为文本编辑框元素（普通文本编辑框、富文本编辑框、关联线文本编辑框）时响应快捷键，其他不响应
  customCheckEnableShortcut: null,
  // 初始根节点的位置
  initRootNodePosition: null,
  // 节点文本编辑框的z-index
  nodeTextEditZIndex: 3e3,
  // 节点备注浮层的z-index
  nodeNoteTooltipZIndex: 3e3,
  // 是否在点击了画布外的区域时结束节点文本的编辑状态
  isEndNodeTextEditOnClickOuter: !0,
  // 最大历史记录数
  maxHistoryCount: 500,
  // 是否一直显示节点的展开收起按钮，默认为鼠标移上去和激活时才显示
  alwaysShowExpandBtn: !1,
  // 不显示展开收起按钮，优先级比alwaysShowExpandBtn配置高
  notShowExpandBtn: !1,
  // 扩展节点可插入的图标
  iconList: [
    // {
    //   name: '',// 分组名称
    //   type: '',// 分组的值
    //   list: [// 分组下的图标列表
    //     {
    //       name: '',// 图标名称
    //       icon:''// 图标，可以传svg或图片
    //     }
    //   ]
    // }
  ],
  // 节点最大缓存数量
  maxNodeCacheCount: 1e3,
  // 思维导图适应画布大小时的内边距
  fitPadding: 50,
  // 是否开启按住ctrl键多选节点功能
  enableCtrlKeyNodeSelection: !0,
  // 设置为左键多选节点，右键拖动画布
  useLeftKeySelectionRightKeyDrag: !1,
  // 节点即将进入编辑前的回调方法，如果该方法返回true以外的值，那么将取消编辑，函数可以返回一个值，或一个Promise，回调参数为节点实例
  beforeTextEdit: null,
  // 是否开启自定义节点内容
  isUseCustomNodeContent: !1,
  // 自定义返回节点内容的方法
  customCreateNodeContent: null,
  // 指定内部一些元素（节点文本编辑元素、节点备注显示元素、关联线文本编辑元素、节点图片调整按钮元素）添加到的位置，默认添加到document.body下
  customInnerElsAppendTo: null,
  // 是否在存在一个激活节点时，当按下中文、英文、数字按键时自动进入文本编辑模式
  // 开启该特性后，需要给你的输入框绑定keydown事件，并禁止冒泡
  enableAutoEnterTextEditWhenKeydown: !1,
  // 当enableAutoEnterTextEditWhenKeydown选项开启时生效，当通过按键进入文本编辑时是否自动清空原有文本
  autoEmptyTextWhenKeydownEnterEdit: !1,
  // 自定义对剪贴板文本的处理。当按ctrl+v粘贴时会读取用户剪贴板中的文本和图片，默认只会判断文本是否是普通文本和simple-mind-map格式的节点数据，如果你想处理其他思维导图的数据，比如processon、zhixi等，那么可以传递一个函数，接受当前剪贴板中的文本为参数，返回处理后的数据，可以返回两种类型：
  /*
      1.返回一个纯文本，那么会直接以该文本创建一个子节点
  
      2.返回一个节点对象，格式如下：
        {
          // 代表是simple-mind-map格式的数据
          simpleMindMap: true,
          // 节点数据，同simple-mind-map节点数据格式
          data: {
            data: {
              text: ''
            },
            children: []
          }
        }
    */
  // 如果你的处理逻辑存在异步逻辑，也可以返回一个promise
  customHandleClipboardText: null,
  // 禁止鼠标滚轮缩放，你仍旧可以使用api进行缩放
  disableMouseWheelZoom: !1,
  // 错误处理函数
  errorHandler: (i, t) => {
    console.error(i, t);
  },
  // 是否在鼠标双击时回到根节点，也就是让根节点居中显示
  enableDblclickBackToRootNode: !1,
  // 节点鼠标hover和激活时显示的矩形边框的颜色
  hoverRectColor: "rgb(94, 200, 248)",
  // 节点鼠标hover和激活时显示的矩形边框距节点内容的距离
  hoverRectPadding: 2,
  // 双击节点进入节点文本编辑时是否默认选中文本，默认只在创建新节点时会选中
  selectTextOnEnterEditText: !1,
  // 删除节点后激活相邻节点
  deleteNodeActive: !0,
  // 是否首次加载fit view
  fit: !1,
  // 自定义标签的颜色
  // {pass: 'green, unpass: 'red'}
  tagsColorMap: {},
  // 节点协作样式配置
  cooperateStyle: {
    avatarSize: 22,
    // 头像大小
    fontSize: 12
    // 如果是文字头像，那么文字的大小
  },
  // 协同编辑时，同一个节点不能同时被多人选中
  onlyOneEnableActiveNodeOnCooperate: !1,
  // 插入概要的默认文本
  defaultGeneralizationText: "概要",
  // 粘贴文本的方式创建新节点时，控制是否按换行自动分割节点，即如果存在换行，那么会根据换行创建多个节点，否则只会创建一个节点
  // 可以传递一个函数，返回promise，resolve代表根据换行分割，reject代表忽略换行
  handleIsSplitByWrapOnPasteCreateNewNode: null,
  // 多少时间内只允许添加一次历史记录，避免添加没有必要的中间状态，单位：ms
  addHistoryTime: 100,
  // 是否禁止拖动画布
  isDisableDrag: !1,
  // 创建新节点时的行为
  /*
    DEFAULT  ：默认会激活新创建的节点，并且进入编辑模式。如果同时创建了多个新节点，那么只会激活而不会进入编辑模式
    NOT_ACTIVE  : 不激活新创建的节点
    ACTIVE_ONLY  : 只激活新创建的节点，不进入编辑模式
  */
  createNewNodeBehavior: E.CREATE_NEW_NODE_BEHAVIOR.DEFAULT,
  // 当节点图片加载失败时显示的默认图片
  defaultNodeImage: "",
  // 是否将思维导图限制在画布内
  // 比如向右拖动时，思维导图图形的最左侧到达画布中心时将无法继续向右拖动，其他同理
  isLimitMindMapInCanvas: !1,
  // 在节点上粘贴剪贴板中的图片的处理方法，默认是转换为data:url数据插入到节点中，你可以通过该方法来将图片数据上传到服务器，实现保存图片的url
  // 可以传递一个异步方法，接收Blob类型的图片数据，需要返回如下结构：
  /*
    {
      url,    // 图片url
      size: {
        width,  // 图片的宽度
        height  //图片的高度
      }
    }
  */
  handleNodePasteImg: null,
  // 自定义创建节点形状的方法，可以传一个函数，均接收一个参数
  // 矩形、圆角矩形、椭圆、圆等形状会调用该方法
  // 接收svg path字符串，返回svg节点
  customCreateNodePath: null,
  // 菱形、平行四边形、八角矩形、外三角矩形、内三角矩形等形状会调用该方法
  // 接收points数组点位，返回svg节点
  customCreateNodePolygon: null,
  // 自定义转换节点连线路径的方法
  // 接收svg path字符串，返回转换后的svg path字符串
  customTransformNodeLinePath: null,
  // 快捷键操作即将执行前的生命周期函数，返回true可以阻止操作执行
  // 函数接收两个参数：key（快捷键）、activeNodeList（当前激活的节点列表）
  beforeShortcutRun: null,
  // 移动节点到画布中心、回到根节点等操作时是否将缩放层级复位为100%
  // 该选项实际影响的是render.moveNodeToCenter方法，moveNodeToCenter方法本身也存在第二个参数resetScale来设置是否复位，如果resetScale参数没有传递，那么使用resetScaleOnMoveNodeToCenter配置，否则使用resetScale配置
  resetScaleOnMoveNodeToCenter: !1,
  // 添加附加的节点前置内容，前置内容指和文本同一行的区域中的前置内容，不包括节点图片部分。如果存在编号、任务勾选框内容，这里添加的前置内容会在这两者之后
  createNodePrefixContent: null,
  // 添加附加的节点后置内容，后置内容指和文本同一行的区域中的后置内容，不包括节点图片部分
  createNodePostfixContent: null,
  // 禁止粘贴用户剪贴板中的数据，禁止将复制的数据写入用户的剪贴板中
  disabledClipboard: !1,
  // 自定义超链接的跳转
  // 如果不传，默认会以新窗口的方式打开超链接，可以传递一个函数，函数接收两个参数：link（超链接的url）、node（所属节点实例），只要传递了函数，就会阻止默认的跳转
  customHyperlinkJump: null,
  // 是否开启性能模式，默认情况下所有节点都会直接渲染，无论是否处于画布可视区域，这样当节点数量比较多时（1000+）会比较卡，如果你的数据量比较大，那么可以通过该配置开启性能模式，即只渲染画布可视区域内的节点，超出的节点不渲染，这样会大幅提高渲染速度，当然同时也会带来一些其他问题，比如：1.当拖动或是缩放画布时会实时计算并渲染未节点的节点，所以会带来一定卡顿；2.导出图片、svg、pdf时需要先渲染全部节点，所以会比较慢；3.其他目前未发现的问题
  openPerformance: !1,
  // 性能优化模式配置
  performanceConfig: {
    time: 250,
    // 当视图改变后多久刷新一次节点，单位：ms，
    padding: 100,
    // 超出画布四周指定范围内依旧渲染节点
    removeNodeWhenOutCanvas: !0
    // 节点移除画布可视区域后从画布删除
  },
  // 如果节点文本为空，那么为了避免空白节点高度塌陷，会用该字段指定的文本测量一个高度
  emptyTextMeasureHeightText: "abc123我和你",
  // 是否在进行节点文本编辑时实时更新节点大小和节点位置，开启后当节点数量比较多时可能会造成卡顿
  openRealtimeRenderOnNodeTextEdit: !1,
  // 默认会给容器元素el绑定mousedown事件，可通过该选项设置是否阻止其默认事件
  // 如果设置为true，会带来一定问题，比如你聚焦在思维导图外的其他输入框，点击画布就不会触发其失焦
  mousedownEventPreventDefault: !1,
  // 在激活上粘贴用户剪贴板中的数据时，如果同时存在文本和图片，那么只粘贴文本，忽略图片
  onlyPasteTextWhenHasImgAndText: !0,
  // 是否允许拖拽调整节点的宽度，实际上压缩的是节点里面文本内容的宽度，当节点文本内容宽度压缩到最小时无法继续压缩。如果节点存在图片，那么最小值以图片宽度和文本内容最小宽度的最大值为准（目前该特性仅在两种情况下可用：1.开启了富文本模式，即注册了RichText插件；2.自定义节点内容）
  enableDragModifyNodeWidth: !0,
  // 当允许拖拽调整节点的宽度时，可以通过该选项设置节点文本内容允许压缩的最小宽度
  minNodeTextModifyWidth: 20,
  // 同minNodeTextModifyWidth，最大值，传-1代表不限制
  maxNodeTextModifyWidth: -1,
  // 自定义处理节点的连线方法，可以传递一个函数，函数接收三个参数：node（节点实例）、line（节点的某条连线，@svgjs库的path对象）, { width, color, dasharray }，dasharray（该条连线的虚线样式，为none代表实线），你可以修改line对象来达到修改节点连线样式的效果，比如增加流动效果
  customHandleLine: null,
  // 实例化完后是否立刻进行一次历史数据入栈操作
  // 即调用mindMap.command.addHistory方法
  addHistoryOnInit: !0,
  // 自定义节点备注图标
  noteIcon: {
    icon: "",
    // svg字符串，如果不是确定要使用svg自带的样式，否则请去除其中的fill等样式属性
    style: {
      // size: 20,// 图标大小，不手动设置则会使用主题的iconSize配置
      // color: '',// 图标颜色，不手动设置则会使用节点文本的颜色
    }
  },
  // 自定义节点超链接图标
  hyperlinkIcon: {
    icon: "",
    // svg字符串，如果不是确定要使用svg自带的样式，否则请去除其中的fill等样式属性
    style: {
      // size: 20,// 图标大小，不手动设置则会使用主题的iconSize配置
      // color: '',// 图标颜色，不手动设置则会使用节点文本的颜色
    }
  },
  // 自定义节点附件图标
  attachmentIcon: {
    icon: "",
    // svg字符串，如果不是确定要使用svg自带的样式，否则请去除其中的fill等样式属性
    style: {
      // size: 20,// 图标大小，不手动设置则会使用主题的iconSize配置
      // color: '',// 图标颜色，不手动设置则会使用节点文本的颜色
    }
  },
  // 是否显示快捷创建子节点按钮
  isShowCreateChildBtnIcon: !0,
  // 自定义快捷创建子节点按钮图标
  quickCreateChildBtnIcon: {
    icon: "",
    // svg字符串，如果不是确定要使用svg自带的样式，否则请去除其中的fill等样式属性
    style: {
      // 图标大小使用的是expandBtnSize选项
      // color: '',// 图标颜色，不手动设置则会使用expandBtnStyle选项的color字段
    }
  },
  // 自定义快捷创建子节点按钮的点击操作，
  customQuickCreateChildBtnClick: null,
  // 添加自定义的节点内容
  // 可传递一个对象，格式如下：
  /*
    {
      // 返回要添加的DOM元素详细
      create: (node) => { 
        return {
          el, // DOM节点
          width: 20, // 宽高
          height: 20
        }
      },
      // 处理生成的@svgdotjs/svg.js库的ForeignObject节点实例，可以设置其在节点内的位置
      handle: ({ content, element, node }) => {
        
      }
    }
  */
  addCustomContentToNode: null,
  // 节点连线样式是否允许继承祖先的连线样式
  enableInheritAncestorLineStyle: !0,
  // 【Select插件】
  // 多选节点时鼠标移动到边缘时的画布移动偏移量
  selectTranslateStep: 3,
  // 多选节点时鼠标移动距边缘多少距离时开始偏移
  selectTranslateLimit: 20,
  // 【Drag插件】
  // 是否开启节点自由拖拽
  enableFreeDrag: !1,
  // 拖拽节点时鼠标移动到画布边缘是否开启画布自动移动
  autoMoveWhenMouseInEdgeOnDrag: !0,
  // 拖拽多个节点时随鼠标移动的示意矩形的样式配置
  dragMultiNodeRectConfig: {
    width: 40,
    height: 20,
    fill: "rgb(94, 200, 248)"
    // 填充颜色
  },
  // 节点拖拽时新位置的示意矩形的填充颜色
  dragPlaceholderRectFill: "rgb(94, 200, 248)",
  // 节点拖拽时新位置的示意连线的样式配置
  dragPlaceholderLineConfig: {
    color: "rgb(94, 200, 248)",
    width: 2
  },
  // 节点拖拽时的透明度配置
  dragOpacityConfig: {
    cloneNodeOpacity: 0.5,
    // 跟随鼠标移动的克隆节点或矩形的透明度
    beingDragNodeOpacity: 0.3
    // 被拖拽节点的透明度
  },
  // 拖拽单个节点时会克隆被拖拽节点，如果想修改该克隆节点，那么可以通过该选项提供一个处理函数，函数接收克隆节点对象
  // 需要注意的是节点对象指的是@svgdotjs/svg.js库的元素对象，所以你需要阅读该库的文档来操作该对象
  handleDragCloneNode: null,
  // 即将拖拽完成前调用该函数，函数接收一个对象作为参数：{overlapNodeUid,prevNodeUid,nextNodeUid}，代表拖拽信息，如果要阻止本次拖拽，那么可以返回true，此时node_dragend事件不会再触发。函数可以是异步函数，返回Promise实例
  beforeDragEnd: null,
  // 即将开始调整节点前调用该函数，函数接收当前即将被拖拽的节点实例列表作为参数，如果要阻止本次拖拽，那么可以返回true
  beforeDragStart: null,
  // 【Watermark插件】
  // 水印配置
  watermarkConfig: {
    onlyExport: !1,
    // 是否仅在导出时添加水印
    text: "",
    lineSpacing: 100,
    textSpacing: 100,
    angle: 30,
    textStyle: {
      color: "#999",
      opacity: 0.5,
      fontSize: 14
    },
    belowNode: !1
  },
  // 【Export插件】
  // 导出png、svg、pdf时的图形内边距，注意是单侧内边距
  exportPaddingX: 10,
  exportPaddingY: 10,
  // 设置导出图片和svg时，针对富文本节点内容，也就是嵌入到svg中的html节点的默认样式覆盖
  // 如果不覆盖，会发生偏移问题
  resetCss: `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `,
  // 导出图片时canvas的缩放倍数，该配置会和window.devicePixelRatio值取最大值
  minExportImgCanvasScale: 2,
  // 导出png、svg、pdf时在头部和尾部添加自定义内容
  // 可传递一个函数，这个函数可以返回null代表不添加内容，也可以返回如下数据：
  /*
    {
      el,// 要追加的自定义DOM节点，样式可内联
      cssText,// 可选，如果样式不想内联，可以传递该值，一个css字符串
      height: 50// 返回的DOM节点的高度，必须传递
    }
  */
  addContentToHeader: null,
  addContentToFooter: null,
  // 导出png、svg、pdf时会获取画布上的svg数据进行克隆，然后通过该克隆的元素进行导出，如果你想对该克隆元素做一些处理，比如新增、替换、修改其中的一些元素，那么可以通过该参数传递一个处理函数，接收svg元素对象，处理后，需要返回原svg元素对象。
  // 需要注意的是svg对象指的是@svgdotjs/svg.js库的元素对象，所以你需要阅读该库的文档来操作该对象
  handleBeingExportSvg: null,
  // 导出图片或pdf都是通过canvas将svg绘制出来，再导出，所以如果思维导图特别大，宽高可能会超出canvas支持的上限，所以会进行缩放，这个上限可以通过该参数设置，代表canvas宽和高的最大宽度
  maxCanvasSize: 16384,
  // 【AssociativeLine插件】
  // 关联线默认文字
  defaultAssociativeLineText: "关联",
  // 关联线是否始终显示在节点上层
  // false：即创建关联线和激活关联线时处于最顶层，其他情况下处于节点下方
  associativeLineIsAlwaysAboveNode: !0,
  // 默认情况下，新创建的关联线两个端点的位置是根据两个节点中心点的相对位置来计算的，如果你想固定位置，可以通过这个属性来配置
  // from和to都不传，则都自动计算，如果只传一个，另一个则会自动计算
  associativeLineInitPointsPosition: {
    // from和to可选值：left、top、bottom、right
    from: "",
    // 关联线起始节点上端点的位置
    to: ""
    // 关联线目标节点上端点的位置
  },
  // 是否允许调整关联线两个端点的位置
  enableAdjustAssociativeLinePoints: !0,
  // 关联线连接即将完成时执行，如果要阻止本次连接可以返回true，函数接收一个参数：node（目标节点实例）
  beforeAssociativeLineConnection: null,
  // 【TouchEvent插件】
  // 禁止双指缩放，你仍旧可以使用api进行缩放
  // 需要注册TouchEvent插件后生效
  disableTouchZoom: !1,
  // 允许最大和最小的缩放值，百分数
  // 传-1代表不限制
  minTouchZoomScale: 20,
  maxTouchZoomScale: -1,
  // 【Scrollbar插件】
  // 当注册了滚动条插件（Scrollbar）时，是否将思维导图限制在画布内，isLimitMindMapInCanvas不再起作用
  isLimitMindMapInCanvasWhenHasScrollbar: !0,
  // 【Search插件】
  // 是否仅搜索当前渲染的节点，被收起的节点不会被搜索到
  isOnlySearchCurrentRenderNodes: !1,
  // 【Cooperate插件】
  // 协同编辑时，节点操作即将更新到其他客户端前的生命周期函数
  // 函数接收一个对象作为参数：
  /*
    {
      type: createOrUpdate（创建节点或更新节点）、delete（删除节点）
      data: 1.当type=createOrUpdate时，代表被创建或被更新的节点数据，即将同步到其他客户端，所以你可以修改该数据；2.当type=delete时，代表被删除的节点数据
    }
  */
  beforeCooperateUpdate: null,
  // 【RainbowLines插件】
  // 彩虹线条配置，需要先注册RainbowLines插件
  rainbowLinesConfig: {
    open: !1,
    // 是否开启彩虹线条
    colorsList: []
    // 自定义彩虹线条的颜色列表，如果不设置，会使用默认颜色列表
    /*
    [
      'rgb(255, 213, 73)',
      'rgb(255, 136, 126)',
      'rgb(107, 225, 141)',
      'rgb(151, 171, 255)',
      'rgb(129, 220, 242)',
      'rgb(255, 163, 125)',
      'rgb(152, 132, 234)'
    ]
    */
  },
  // 【Demonstrate插件】
  // 演示插件配置
  demonstrateConfig: null,
  // 【Formula插件】
  // 是否开启在富文本编辑框中直接编辑数学公式
  enableEditFormulaInRichTextEdit: !0,
  // katex库的字体文件的请求路径。仅当katex的output配置为html时才会请求字体文件。可以通过mindMap.formula.getKatexConfig()方法来获取当前的配置
  // 字体文件可以从node_modules中找到：katex/dist/fonts/。可以上传到你的服务器或cdn
  // 最终的字体请求路径为`${katexFontPath}fonts/KaTeX_AMS-Regular.woff2`，可以自行拼接进行测试是否可以访问
  katexFontPath: "https://unpkg.com/katex@0.16.11/dist/",
  // 自定义katex库的输出模式。默认当Chrome内核100以下会使用html方式，否则使用mathml方式，如果你有自己的规则，那么可以传递一个函数，函数返回值为：mathml或html
  getKatexOutputType: null,
  // 【RichText插件】
  // 转换富文本内容，当进入富文本编辑时，可以通过该参数传递一个函数，函数接收文本内容，需要返回你处理后的文本内容
  transformRichTextOnEnterEdit: null,
  // 可以传递一个函数，即将结束富文本编辑前会执行该函数，函数接收richText实例，所以你可以在此时机更新quill文档数据
  beforeHideRichTextEdit: null,
  // 【OuterFrame】插件
  outerFramePaddingX: 10,
  outerFramePaddingY: 10,
  defaultOuterFrameText: "外框",
  // 【Painter】插件
  // 是否只格式刷节点手动设置的样式，不考虑节点通过主题的应用的样式
  onlyPainterNodeCustomStyles: !1,
  // 【NodeImgAdjust】插件
  // 拦截节点图片的删除，点击节点图片上的删除按钮删除图片前会调用该函数，如果函数返回true则取消删除
  beforeDeleteNodeImg: null,
  // 删除和调整两个按钮的大小
  imgResizeBtnSize: 25,
  // 最小允许缩放的尺寸，请传入>=0的数字
  minImgResizeWidth: 50,
  minImgResizeHeight: 50,
  // 最大允许缩放的尺寸依据主题的配置，即主题的imgMaxWidth和imgMaxHeight配置，如果设置为false，那么使用maxImgResizeWidth和maxImgResizeHeight选项
  maxImgResizeWidthInheritTheme: !1,
  // 最大允许缩放的尺寸，maxImgResizeWidthInheritTheme选项设置为false时生效，不限制最大值可传递Infinity
  maxImgResizeWidth: 1 / 0,
  maxImgResizeHeight: 1 / 0,
  // 自定义删除按钮和尺寸调整按钮的内容
  // 默认为内置图标，你可以传递一个svg字符串，或者其他的html字符串
  // 整体大小请使用上面的minImgResizeWidth和minImgResizeHeight选项设置
  customDeleteBtnInnerHTML: "",
  customResizeBtnInnerHTML: ""
};
let Et = class Xt {
  //  构造函数
  /**
   *
   * @param {defaultOpt} opt
   */
  constructor(t = {}) {
    if (Xt.instanceCount++, this.opt = this.handleOpt($n(jo, t)), this.opt.data = this.handleData(this.opt.data), this.el = this.opt.el, !this.el) throw new Error("缺少容器元素el");
    this.getElRectInfo(), this.initWidth = this.width, this.initHeight = this.height, this.cssEl = null, this.cssTextMap = {}, this.nodeInnerPrefixList = [], this.nodeInnerPostfixList = [], this.editNodeClassList = [], this.extendShapeList = [], this.initContainer(), this.initTheme(), this.initCache(), Xt.pluginList.filter((e) => e.preload).forEach((e) => {
      this.initPlugin(e);
    }), this.event = new a1({
      mindMap: this
    }), this.keyCommand = new D6({
      mindMap: this
    }), this.command = new I6({
      mindMap: this
    }), this.renderer = new A6({
      mindMap: this
    }), this.view = new i1({
      mindMap: this
    }), this.batchExecution = new z6(), Xt.pluginList.filter((e) => !e.preload).forEach((e) => {
      this.initPlugin(e);
    }), this.addCss(), this.render(this.opt.fit ? () => this.view.fit() : () => {
    }), this.opt.addHistoryOnInit && this.opt.data && this.command.addHistory();
  }
  //  配置参数处理
  handleOpt(t) {
    return uo.includes(t.layout) || (t.layout = E.LAYOUT.LOGICAL_STRUCTURE), t.theme = t.theme && De[t.theme] ? t.theme : "default", t;
  }
  // 预处理节点数据
  handleData(t) {
    return me(t) || Object.keys(t).length <= 0 ? null : (t = $t(t || {}), t.data && !t.data.expand && (t.data.expand = !0), Ni([t], !1, null, !0), t);
  }
  // 创建容器元素
  initContainer() {
    const { associativeLineIsAlwaysAboveNode: t } = this.opt;
    this.el.classList.add("smm-mind-map-container");
    const e = () => {
      this.associativeLineDraw = this.draw.group(), this.associativeLineDraw.addClass("smm-associative-line-container");
    };
    this.svg = ht().addTo(this.el).size(this.width, this.height), this.draw = this.svg.group(), this.draw.addClass("smm-container"), this.lineDraw = this.draw.group(), this.lineDraw.addClass("smm-line-container"), t || e(), this.nodeDraw = this.draw.group(), this.nodeDraw.addClass("smm-node-container"), t && e(), this.otherDraw = this.draw.group(), this.otherDraw.addClass("smm-other-container");
  }
  // 清空各容器
  clearDraw() {
    this.lineDraw.clear(), this.associativeLineDraw.clear(), this.nodeDraw.clear(), this.otherDraw.clear();
  }
  // 追加必要的css样式
  // 该样式在实例化时会动态添加到页面，同时导出为svg时也会添加到svg源码中
  appendCss(t, e) {
    this.cssTextMap[t] = e, this.removeCss(), this.addCss();
  }
  // 移除追加的css样式
  removeAppendCss(t) {
    this.cssTextMap[t] && (delete this.cssTextMap[t], this.removeCss(), this.addCss());
  }
  // 拼接必要的css样式
  joinCss() {
    return t1 + Object.keys(this.cssTextMap).map((t) => this.cssTextMap[t]).join(`
`);
  }
  // 添加必要的css样式到页面
  addCss() {
    this.cssEl = document.createElement("style"), this.cssEl.type = "text/css", this.cssEl.innerHTML = this.joinCss(), document.head.appendChild(this.cssEl);
  }
  // 移除css
  removeCss() {
    this.cssEl && document.head.removeChild(this.cssEl);
  }
  // 检查某个编辑节点类名是否存在，返回索引
  checkEditNodeClassIndex(t) {
    return this.editNodeClassList.findIndex((e) => e === t);
  }
  // 添加一个编辑节点类名
  addEditNodeClass(t) {
    this.checkEditNodeClassIndex(t) === -1 && this.editNodeClassList.push(t);
  }
  // 删除一个编辑节点类名
  deleteEditNodeClass(t) {
    const e = this.checkEditNodeClassIndex(t);
    e !== -1 && this.editNodeClassList.splice(e, 1);
  }
  //  渲染，部分渲染
  render(t, e = "") {
    this.initTheme(), this.renderer.render(t, e);
  }
  //  重新渲染
  reRender(t, e = "") {
    this.renderer.reRender = !0, this.renderer.clearCache(), this.clearDraw(), this.render(t, e);
  }
  // 获取或更新容器尺寸位置信息
  getElRectInfo() {
    if (this.elRect = this.el.getBoundingClientRect(), this.width = this.elRect.width, this.height = this.elRect.height, this.width <= 0 || this.height <= 0)
      throw new Error("容器元素el的宽高不能为0");
  }
  //  容器尺寸变化，调整尺寸
  resize() {
    const t = this.width, e = this.height;
    this.getElRectInfo(), this.svg.size(this.width, this.height), (t !== this.width || e !== this.height) && (this.demonstrate ? this.demonstrate.isInDemonstrate || this.render() : this.render()), this.emit("resize");
  }
  //  监听事件
  on(t, e) {
    this.event.on(t, e);
  }
  //  触发事件
  emit(t, ...e) {
    this.event.emit(t, ...e);
  }
  //  解绑事件
  off(t, e) {
    this.event.off(t, e);
  }
  // 初始化缓存数据
  initCache() {
    this.commonCaches = {
      measureCustomNodeContentSizeEl: null,
      measureRichtextNodeTextSizeEl: null
    };
  }
  //  设置主题
  initTheme() {
    this.themeConfig = Pl(
      De[this.opt.theme] || De.default,
      this.opt.themeConfig
    ), Bt.setBackgroundStyle(this.el, this.themeConfig);
  }
  //  设置主题
  setTheme(t, e = !1) {
    this.execCommand("CLEAR_ACTIVE_NODE"), this.opt.theme = t, e || this.render(null, E.CHANGE_THEME), this.emit("view_theme_change", t);
  }
  //  获取当前主题
  getTheme() {
    return this.opt.theme;
  }
  //  设置主题配置
  setThemeConfig(t, e = !1) {
    const n = U3(this.themeConfig, t);
    if (this.opt.themeConfig = t, !e) {
      const s = S3(n);
      this.render(null, s ? "" : E.CHANGE_THEME);
    }
  }
  //  获取自定义主题配置
  getCustomThemeConfig() {
    return this.opt.themeConfig;
  }
  //  获取某个主题配置值
  getThemeConfig(t) {
    return t === void 0 ? this.themeConfig : this.themeConfig[t];
  }
  // 获取配置
  getConfig(t) {
    return t === void 0 ? this.opt : this.opt[t];
  }
  // 更新配置
  updateConfig(t = {}) {
    this.emit("before_update_config", this.opt);
    const e = {
      ...this.opt
    };
    this.opt = this.handleOpt($n.all([jo, this.opt, t])), this.emit("after_update_config", this.opt, e);
  }
  //  获取当前布局结构
  getLayout() {
    return this.opt.layout;
  }
  //  设置布局结构
  setLayout(t, e = !1) {
    uo.includes(t) || (t = E.LAYOUT.LOGICAL_STRUCTURE), this.opt.layout = t, this.view.reset(), this.renderer.setLayout(), e || this.render(null, E.CHANGE_LAYOUT), this.emit("layout_change", t);
  }
  //  执行命令
  execCommand(...t) {
    this.command.exec(...t);
  }
  // 更新画布数据，如果新的数据是在当前画布节点数据基础上增删改查后形成的，那么可以使用该方法来更新画布数据
  updateData(t) {
    t = this.handleData(t), this.emit("before_update_data", t), this.renderer.setData(t), this.render(), this.command.addHistory(), this.emit("update_data", t);
  }
  //  动态设置思维导图数据，纯节点数据
  setData(t) {
    t = this.handleData(t), this.emit("before_set_data", t), this.opt.data = t, this.execCommand("CLEAR_ACTIVE_NODE"), this.command.clearHistory(), this.command.addHistory(), this.renderer.setData(t), this.reRender(), this.emit("set_data", t);
  }
  //  动态设置思维导图数据，包括节点数据、布局、主题、视图
  setFullData(t) {
    t.root && this.setData(t.root), t.layout && this.setLayout(t.layout), t.theme && (t.theme.template && this.setTheme(t.theme.template), t.theme.config && this.setThemeConfig(t.theme.config)), t.view && this.view.setTransformData(t.view);
  }
  //  获取思维导图数据，节点树、主题、布局等
  getData(t) {
    let e = this.command.getCopyData(), n = {};
    return t ? n = {
      layout: this.getLayout(),
      root: e,
      theme: {
        template: this.getTheme(),
        config: this.getCustomThemeConfig()
      },
      view: this.view.getTransformData()
    } : n = e, $t(n);
  }
  //  导出
  async export(...t) {
    try {
      if (!this.doExport)
        throw new Error("请注册Export插件！");
      return await this.doExport.export(...t);
    } catch (e) {
      this.opt.errorHandler(ai.EXPORT_ERROR, e);
    }
  }
  //  转换位置
  toPos(t, e) {
    return {
      x: t - this.elRect.left,
      y: e - this.elRect.top
    };
  }
  //  设置只读模式、编辑模式
  setMode(t) {
    if (![E.MODE.READONLY, E.MODE.EDIT].includes(t))
      return;
    const e = t === E.MODE.READONLY;
    e !== this.opt.readonly && (e && (this.renderer.textEdit.isShowTextEdit() && (this.renderer.textEdit.hideEditTextBox(), this.command.originAddHistory()), this.execCommand("CLEAR_ACTIVE_NODE")), this.opt.readonly = e, !e && this.command.history.length <= 0 && this.command.originAddHistory(), this.emit("mode_change", t));
  }
  // 获取svg数据
  getSvgData({
    paddingX: t = 0,
    paddingY: e = 0,
    ignoreWatermark: n = !1,
    addContentToHeader: s,
    addContentToFooter: r,
    node: a
  } = {}) {
    const { watermarkConfig: o, openPerformance: h } = this.opt;
    h && this.renderer.forceLoadNode(a);
    const { cssTextList: l, header: c, headerHeight: d, footer: g, footerHeight: f } = K3({
      addContentToHeader: s,
      addContentToFooter: r
    }), m = this.svg, v = this.draw, x = m.width(), w = m.height(), M = v.transform(), T = this.elRect;
    v.scale(1 / M.scaleX, 1 / M.scaleY);
    const A = v.rbox();
    let D = null;
    a && (D = Z3(
      a,
      A.x,
      A.y,
      t,
      e
    ));
    const I = 0;
    A.width += t * 2, A.height += e * 2 + I + d + f, v.translate(t, e), m.size(A.width, A.height), v.translate(-A.x + T.left, -A.y + T.top);
    let P = m.clone();
    const $ = this.watermark && this.watermark.hasWatermark();
    if (!n && $) {
      this.watermark.isInExport = !0;
      const { onlyExport: tt } = o;
      A.width > x || A.height > w ? (this.width = A.width, this.height = A.height, this.watermark.onResize(), P = m.clone(), this.width = x, this.height = w, this.watermark.onResize()) : tt && (this.watermark.onResize(), P = m.clone()), tt && this.watermark.clear(), this.watermark.isInExport = !1;
    }
    [this.joinCss(), ...l].forEach((tt) => {
      P.add(ht(`<style>${tt}</style>`));
    }), c && d > 0 && (P.findOne(".smm-container").translate(0, d), c.width(A.width), c.y(e), P.add(c, 0)), g && f > 0 && (g.width(A.width), g.y(A.height - e - f), P.add(g));
    const R = m.find("defs"), _t = P.find("defs");
    return R.forEach((tt, u) => {
      const p = _t[u];
      if (!p) return;
      const y = tt.children(), _ = p.children();
      for (let S = 0; S < y.length; S++) {
        const C = y[S], L = _[S];
        C && L && L.attr("id", C.attr("id"));
      }
    }), m.size(x, w), v.transform(M), {
      svg: P,
      // 思维导图图形的整体svg元素，包括：svg（画布容器）、g（实际的思维导图组）
      svgHTML: P.svg(),
      // svg字符串
      clipData: D,
      rect: {
        ...A,
        // 思维导图图形未缩放时的位置尺寸等信息
        ratio: A.width / A.height
        // 思维导图图形的宽高比
      },
      origWidth: x,
      // 画布宽度
      origHeight: w,
      // 画布高度
      scaleX: M.scaleX,
      // 思维导图图形的水平缩放值
      scaleY: M.scaleY
      // 思维导图图形的垂直缩放值
    };
  }
  // 扩展节点形状
  addShape(t) {
    !t || this.extendShapeList.find((n) => n.name === t.name) || this.extendShapeList.push(t);
  }
  // 删除扩展的形状
  removeShape(t) {
    const e = this.extendShapeList.findIndex((n) => n.name === t);
    e !== -1 && this.extendShapeList.splice(e, 1);
  }
  // 获取SVG.js库的一些对象
  getSvgObjects() {
    return {
      SVG: ht,
      G: ft,
      Rect: Dt
    };
  }
  // 添加插件
  addPlugin(t, e) {
    Xt.hasPlugin(t) === -1 && Xt.usePlugin(t, e), this.initPlugin(t);
  }
  // 移除插件
  removePlugin(t) {
    let e = Xt.hasPlugin(t);
    e !== -1 && (Xt.pluginList.splice(e, 1), this[t.instanceName] && (this[t.instanceName].beforePluginRemove && this[t.instanceName].beforePluginRemove(), delete this[t.instanceName]));
  }
  // 实例化插件
  initPlugin(t) {
    this[t.instanceName] || (this[t.instanceName] = new t({
      mindMap: this,
      pluginOpt: t.pluginOpt
    }));
  }
  // 销毁
  destroy() {
    this.emit("beforeDestroy"), this.renderer.textEdit.hideEditTextBox(), this.renderer.textEdit.removeTextEditEl(), [...Xt.pluginList].forEach((t) => {
      this[t.instanceName] && this[t.instanceName].beforePluginDestroy && this[t.instanceName].beforePluginDestroy(), this[t.instanceName] = null;
    }), this.event.unbind(), this.svg.remove(), Bt.removeBackgroundStyle(this.el), this.el.classList.remove("smm-mind-map-container"), this.el.innerHTML = "", this.el = null, this.removeCss(), Xt.instanceCount--;
  }
}, fr = [];
Et.extendNodeDataNoStylePropList = (i = []) => {
  fr.push(...i), kn.push(...i);
};
Et.resetNodeDataNoStylePropList = () => {
  fr.forEach((i) => {
    const t = kn.findIndex((e) => e === i);
    t !== -1 && kn.splice(t, 1);
  }), fr = [];
};
Et.pluginList = [];
Et.usePlugin = (i, t = {}) => (Et.hasPlugin(i) !== -1 || (i.pluginOpt = t, Et.pluginList.push(i)), Et);
Et.hasPlugin = (i) => Et.pluginList.findIndex((t) => t === i);
Et.instanceCount = 0;
Et.defineTheme = (i, t = {}) => {
  if (De[i])
    return new Error("该主题名称已存在");
  De[i] = Pl(Dl, t);
};
Et.removeTheme = (i) => {
  De[i] && (De[i] = null);
};
const F6 = {
  name: "MindMap",
  props: {
    // 视频标题，作为根节点
    videoTitle: {
      type: String,
      default: "视频内容"
    },
    // 摘要数据
    summaryData: {
      type: Array,
      default: () => []
    },
    // 思维导图配置
    config: {
      type: Object,
      default: () => ({
        layout: "logicalStructure",
        theme: "dark",
        nodeTextEditZIndex: 1e3,
        nodeNoteTooltipZIndex: 1e3
      })
    }
  },
  data() {
    return {
      mindMap: null
    };
  },
  mounted() {
    this.initMindMap();
  },
  watch: {
    summaryData: {
      handler() {
        this.mindMap && this.updateMindMapData();
      },
      deep: !0
    },
    videoTitle() {
      this.mindMap && this.updateMindMapData();
    }
  },
  beforeDestroy() {
    this.destroyMindMap();
  },
  methods: {
    initMindMap() {
      if (!this.$refs.mindMapContainer) {
        console.error("思维导图容器未找到");
        return;
      }
      this.destroyMindMap();
      try {
        const i = this.generateMindMapData();
        if (!i || !i.data || !i.data.text)
          throw new Error("思维导图数据无效");
        const t = {
          el: this.$refs.mindMapContainer,
          data: i,
          layout: this.config.layout || "logicalStructure",
          theme: this.config.theme || "dark",
          nodeTextEditZIndex: this.config.nodeTextEditZIndex || 1e3,
          nodeNoteTooltipZIndex: this.config.nodeNoteTooltipZIndex || 1e3
        };
        console.log("思维导图初始化配置:", t), this.mindMap = new Et(t), this.mindMap.on("node_click", (e, n) => {
          const s = e.getData();
          this.$emit("node-click", s), s.nodeType === "chapter" && s.startTime ? this.$emit("time-click", s.startTime) : s.nodeType === "summary" && s.parentStartTime && this.$emit("time-click", s.parentStartTime);
        }), this.$emit("initialized", this.mindMap);
      } catch (i) {
        console.error("初始化思维导图失败:", i), this.$emit("error", i);
      }
    },
    destroyMindMap() {
      if (this.mindMap) {
        try {
          this.mindMap.destroy();
        } catch (i) {
          console.error("销毁思维导图失败:", i);
        }
        this.mindMap = null;
      }
    },
    updateMindMapData() {
      if (this.mindMap) {
        const i = this.generateMindMapData();
        this.mindMap.setData(i);
      }
    },
    generateMindMapData() {
      const i = {
        data: {
          text: this.videoTitle || "视频内容"
        },
        children: []
      };
      return !this.summaryData || !Array.isArray(this.summaryData) || this.summaryData.length === 0 ? (console.warn("summaryData为空或无效，使用默认数据"), i) : (i.children = this.summaryData.filter((t) => t && typeof t == "object").map((t, e) => {
        const n = {
          data: {
            text: t.title || `章节 ${e + 1}`,
            startTime: t.startTime || "00:00:00",
            nodeType: "chapter"
          },
          children: []
        };
        return t.summary && (Array.isArray(t.summary) && t.summary.length > 0 ? n.children = t.summary.map((s, r) => {
          let a = "";
          return typeof s == "string" ? a = s.trim() : s && typeof s == "object" ? a = s.text || s.content || s.summary || `内容 ${r + 1}` : a = String(s || `内容 ${r + 1}`), {
            data: {
              text: a || `内容 ${r + 1}`,
              nodeType: "summary",
              parentStartTime: t.startTime || "00:00:00"
            }
          };
        }).filter((s) => s.data.text && s.data.text.length > 0) : typeof t.summary == "string" && t.summary.trim() && (n.children = [{
          data: {
            text: t.summary.trim(),
            nodeType: "summary",
            parentStartTime: t.startTime || "00:00:00"
          }
        }])), n;
      }).filter((t) => t && t.data && t.data.text), console.log("生成的思维导图数据:", i), i);
    },
    // 公开一些方法供外部调用
    getMindMapInstance() {
      return this.mindMap;
    },
    exportData() {
      return this.mindMap ? this.mindMap.getData() : null;
    },
    fitView() {
      this.mindMap && this.mindMap.view.fit();
    },
    reset() {
      this.mindMap && this.mindMap.view.reset();
    }
  }
};
var k6 = function() {
  var t = this, e = t._self._c;
  return e("div", { ref: "mindMapContainer", staticClass: "c-mindmap-container" });
}, P6 = [], B6 = /* @__PURE__ */ Kn(
  F6,
  k6,
  P6,
  !1,
  null,
  "f7214dde"
);
const $6 = B6.exports, H6 = {
  name: "MindMapDialog",
  components: {
    Dialog: Qf,
    MindMap: $6
  },
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    // 视频标题，作为根节点
    videoTitle: {
      type: String,
      default: "视频内容"
    },
    // 摘要数据
    summaryData: {
      type: Array,
      default: () => []
    },
    // 思维导图配置
    mindMapConfig: {
      type: Object,
      default: () => ({
        layout: "logicalStructure",
        theme: "dark",
        viewData: {
          transform: {
            scaleX: 0.8,
            scaleY: 0.8,
            shiftX: 0,
            shiftY: 0
          }
        },
        nodeTextEditZIndex: 1e3,
        nodeNoteTooltipZIndex: 1e3
      })
    }
  },
  data() {
    return {
      mindMapInstance: null
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleTimeClick(i) {
      this.$emit("time-click", i);
    },
    handleNodeClick(i) {
      this.$emit("node-click", i);
    },
    handleMindMapInitialized(i) {
      this.mindMapInstance = i, this.$emit("initialized", i);
    },
    handleMindMapError(i) {
      this.$emit("error", i);
    },
    handleFitView() {
      var i;
      this.mindMapInstance && ((i = this.$refs.mindMap) == null || i.fitView());
    },
    handleReset() {
      var i;
      this.mindMapInstance && ((i = this.$refs.mindMap) == null || i.reset());
    }
  }
};
var U6 = function() {
  var t = this, e = t._self._c;
  return e("Dialog", { attrs: { visible: t.visible, title: "思维导图", "body-style": { padding: "0", overflow: "hidden" } }, on: { close: t.handleClose }, scopedSlots: t._u([{ key: "footer", fn: function() {
    return [e("div", { staticClass: "c-mindmap-dialog__actions" }, [e("button", { staticClass: "c-mindmap-dialog__btn", on: { click: t.handleFitView } }, [t._v(" 自适应视图 ")]), e("button", { staticClass: "c-mindmap-dialog__btn", on: { click: t.handleReset } }, [t._v(" 重置视图 ")])])];
  }, proxy: !0 }]) }, [e("MindMap", { ref: "mindMap", attrs: { "video-title": t.videoTitle, "summary-data": t.summaryData, config: t.mindMapConfig }, on: { "time-click": t.handleTimeClick, "node-click": t.handleNodeClick, initialized: t.handleMindMapInitialized, error: t.handleMindMapError } })], 1);
}, j6 = [], G6 = /* @__PURE__ */ Kn(
  H6,
  U6,
  j6,
  !1,
  null,
  "5125dbdc"
);
const W6 = G6.exports, Y6 = {
  name: "OutlinePanel",
  components: {
    MindMapDialog: W6
  },
  props: {
    // 大纲数据
    outlineData: {
      type: Array,
      default: () => []
    },
    // 推荐问题数据 - 新增
    suggestQuestions: {
      type: Array,
      default: () => []
    },
    // 视频介绍 - 新增
    introduction: {
      type: String,
      default: ""
    },
    // 视频标题 - 新增
    videoTitle: {
      type: String,
      default: ""
    },
    // 默认激活的tab
    defaultActiveTab: {
      type: String,
      default: "outline"
    }
  },
  data() {
    return {
      activeTab: this.defaultActiveTab,
      isIntroductionExpanded: !1,
      // 控制介绍展开/收起状态
      // 设计稿中的颜色token
      panelBg: "#202127",
      summaryBg: "rgba(255, 255, 255, 0.1)",
      brandBlue: "#3F76FC",
      whiteColor: "#FFFFFF",
      grayTextColor: "#ADADC0",
      tabBg: "#3E3E4E",
      borderColor: "#D8D8D8",
      panelShadow: "0px 0px 16px 0px rgba(37, 43, 58, 0.06)",
      mindMapDialogVisible: !1
    };
  },
  methods: {
    handleTabClick(i) {
      this.activeTab = i, this.$emit("tab-change", i);
    },
    handleTimeClick(i) {
      this.$emit("time-click", i);
    },
    handleSegmentClick(i) {
      this.$emit("segment-click", i);
    },
    // 格式化介绍文本
    formatIntroduction(i) {
      return i ? (typeof i != "string" && (console.warn("formatIntroduction: text参数不是字符串类型", i), i = String(i)), !this.isIntroductionExpanded && i.length > 50 ? i.substring(0, 50) + "..." : i.replace(/\n/g, "<br>")) : "";
    },
    // 格式化摘要文本
    formatSummary(i) {
      return i ? typeof i != "string" ? (console.warn("formatSummary: text参数不是字符串类型", i), String(i)) : i.replace(/\n/g, "<br>") : "";
    },
    // 切换介绍展开状态
    toggleIntroductionExpanded() {
      this.isIntroductionExpanded = !this.isIntroductionExpanded;
    },
    handleMindMapClick() {
      this.mindMapDialogVisible = !0;
    },
    handleMindMapDialogClose() {
      this.mindMapDialogVisible = !1;
    }
  }
};
var X6 = function() {
  var t = this, e = t._self._c;
  return e("div", { staticClass: "c-outline-panel", style: { backgroundColor: t.panelBg, boxShadow: t.panelShadow } }, [e("div", { staticClass: "c-outline-panel__tab-container" }, [e("div", { staticClass: "c-outline-panel__tab-item", class: { "c-outline-panel__tab-item--active": t.activeTab === "outline" }, style: { backgroundColor: t.tabBg }, on: { click: function(n) {
    return t.handleTabClick("outline");
  } } }, [e("span", { style: { color: t.activeTab === "outline" ? t.whiteColor : t.grayTextColor, borderBottom: t.activeTab === "outline" ? `3px solid ${t.whiteColor}` : "none" } }, [t._v("智能大纲")])]), e("div", { staticClass: "c-outline-panel__tab-item", class: { "c-outline-panel__tab-item--active": t.activeTab === "qa" }, style: { backgroundColor: t.tabBg }, on: { click: function(n) {
    return t.handleTabClick("qa");
  } } }, [e("span", { style: { color: t.activeTab === "qa" ? t.whiteColor : t.grayTextColor, borderBottom: t.activeTab === "qa" ? `3px solid ${t.whiteColor}` : "none" } }, [t._v("AI问答")])])]), e("div", { staticClass: "c-outline-panel__content" }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.activeTab === "outline", expression: "activeTab === 'outline'" }], staticClass: "c-outline-panel__outline-content" }, [e("div", { staticClass: "c-outline-panel__section-header" }, [e("h4", { staticClass: "c-outline-panel__section-title", style: { color: t.whiteColor } }, [t._v("摘要")]), e("div", { staticClass: "c-outline-panel__section-action-wrapper" }, [e("span", { staticClass: "c-outline-panel__section-action", style: { color: t.whiteColor }, on: { click: t.handleMindMapClick } }, [t._v("思维导图")]), e("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", fill: "none", version: "1.1", width: "16", height: "16", viewBox: "0 0 16 16" } }, [e("defs", [e("clipPath", { attrs: { id: "master_svg0_2_5823" } }, [e("rect", { attrs: { x: "0", y: "0", width: "16", height: "16", rx: "0" } })])]), e("g", { attrs: { "clip-path": "url(#master_svg0_2_5823)" } }, [e("g", [e("path", { attrs: { d: "M9.579083492279054,8L5.9562094922790525,11.62288L6.710457492279053,12.37712L10.710453492279052,8.37712Q10.747603492279053,8.33998,10.776783492279053,8.296299999999999Q10.805963492279052,8.25263,10.826073492279054,8.2041Q10.846173492279053,8.15557,10.856413492279053,8.10405Q10.866663492279052,8.05253,10.866663492279052,8Q10.866663492279052,7.94747,10.856413492279053,7.89595Q10.846173492279053,7.84443,10.826073492279054,7.7959Q10.805963492279052,7.74737,10.776783492279053,7.7036999999999995Q10.747603492279053,7.660019999999999,10.710453492279052,7.62288L6.710457492279053,3.6228759999999998L5.9562094922790525,4.377124L9.579083492279054,8Z", "fill-rule": "evenodd", fill: "#FFFFFF", "fill-opacity": "1" } })])])])])]), t.introduction ? e("div", { staticClass: "c-outline-panel__summary-section", style: { backgroundColor: t.summaryBg } }, [e("p", { staticClass: "c-outline-panel__summary-text", style: { color: t.whiteColor }, domProps: { innerHTML: t._s(t.formatIntroduction(t.introduction)) } }), t.introduction.length > 150 ? e("button", { staticClass: "c-outline-panel__expand-btn", style: { color: t.brandBlue }, on: { click: t.toggleIntroductionExpanded } }, [t._v(" " + t._s(t.isIntroductionExpanded ? "收起" : "展开") + " ")]) : t._e()]) : t._e(), e("h4", { staticClass: "c-outline-panel__section-header", style: { color: t.whiteColor } }, [t._v("分段总结")]), e("div", { staticClass: "c-outline-panel__segments-section", style: { backgroundColor: t.summaryBg } }, [!t.outlineData || t.outlineData.length === 0 ? e("div", { staticClass: "c-outline-panel__no-data" }, [e("p", { style: { color: t.grayTextColor } }, [t._v("暂无分段数据")])]) : t._e(), t._l(t.outlineData, function(n, s) {
    return e("div", { key: n.id, staticClass: "c-outline-panel__segment-item" }, [e("div", { staticClass: "c-outline-panel__segment-header" }, [e("h5", { staticClass: "c-outline-panel__segment-title", style: { color: t.whiteColor } }, [t._v(" " + t._s(n.title) + " "), e("span", { staticClass: "c-outline-panel__segment-time", style: { color: t.brandBlue }, on: { click: function(r) {
      return t.handleTimeClick(n.startTime);
    } } }, [t._v(" " + t._s(n.startTime) + " ")])])]), e("p", { staticClass: "c-outline-panel__segment-summary", style: { color: t.whiteColor }, domProps: { innerHTML: t._s(t.formatSummary(n.summary)) } }), s < t.outlineData.length - 1 ? e("div", { staticClass: "c-outline-panel__segment-divider", style: { backgroundColor: t.whiteColor } }) : t._e()]);
  })], 2)]), e("div", { directives: [{ name: "show", rawName: "v-show", value: t.activeTab === "qa", expression: "activeTab === 'qa'" }], staticClass: "c-outline-panel__qa-content" }, [!t.suggestQuestions || t.suggestQuestions.length === 0 ? e("div", { staticClass: "c-outline-panel__no-data" }, [e("p", { style: { color: t.grayTextColor } }, [t._v("暂无推荐问题")])]) : e("div", { staticClass: "c-outline-panel__questions-list" }, t._l(t.suggestQuestions, function(n, s) {
    return e("div", { key: n.id || s, staticClass: "c-outline-panel__question-item" }, [e("div", { staticClass: "c-outline-panel__question-content" }, [e("div", { staticClass: "c-outline-panel__question-header" }, [t._m(0, !0), e("div", { staticClass: "c-outline-panel__question-main" }, [e("h5", { staticClass: "c-outline-panel__question-title", style: { color: t.whiteColor } }, [t._v(" " + t._s(n.question) + " ")])])]), e("div", { staticClass: "c-outline-panel__answer-content" }, [t._m(1, !0), e("div", { staticClass: "c-outline-panel__answer-main" }, [e("p", { staticClass: "c-outline-panel__question-answer", style: { color: t.whiteColor } }, [t._v(" " + t._s(n.answer) + " ")])])])])]);
  }), 0)])]), e("MindMapDialog", { attrs: { visible: t.mindMapDialogVisible, "video-title": t.videoTitle, "summary-data": t.outlineData }, on: { close: t.handleMindMapDialogClose, "time-click": t.handleTimeClick } })], 1);
}, V6 = [function() {
  var i = this, t = i._self._c;
  return t("div", { staticClass: "c-outline-panel__question-icon-wrapper" }, [t("div", { staticClass: "c-outline-panel__question-icon" })]);
}, function() {
  var i = this, t = i._self._c;
  return t("div", { staticClass: "c-outline-panel__answer-icon-wrapper" }, [t("div", { staticClass: "c-outline-panel__answer-icon" })]);
}], q6 = /* @__PURE__ */ Kn(
  Y6,
  X6,
  V6,
  !1,
  null,
  null
);
const oa = q6.exports;
var Ai = {}, K6 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Z6(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function J6(i) {
  if (i.__esModule) return i;
  var t = i.default;
  if (typeof t == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(i).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(i, n);
    Object.defineProperty(e, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return i[n];
      }
    });
  }), e;
}
var Hl = { exports: {} };
const Q6 = {}, t2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q6
}, Symbol.toStringTag, { value: "Module" })), Go = /* @__PURE__ */ J6(t2);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(i) {
  (function() {
    var t = "input is invalid type", e = "finalize already called", n = typeof window == "object", s = n ? window : {};
    s.JS_MD5_NO_WINDOW && (n = !1);
    var r = !n && typeof self == "object", a = !s.JS_MD5_NO_NODE_JS && typeof Ai == "object" && Ai.versions && Ai.versions.node;
    a ? s = K6 : r && (s = self);
    var o = !s.JS_MD5_NO_COMMON_JS && !0 && i.exports, h = !s.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), c = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], g = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], v;
    if (h) {
      var x = new ArrayBuffer(68);
      v = new Uint8Array(x), m = new Uint32Array(x);
    }
    var w = Array.isArray;
    (s.JS_MD5_NO_NODE_JS || !w) && (w = function(u) {
      return Object.prototype.toString.call(u) === "[object Array]";
    });
    var M = ArrayBuffer.isView;
    h && (s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !M) && (M = function(u) {
      return typeof u == "object" && u.buffer && u.buffer.constructor === ArrayBuffer;
    });
    var T = function(u) {
      var p = typeof u;
      if (p === "string")
        return [u, !0];
      if (p !== "object" || u === null)
        throw new Error(t);
      if (h && u.constructor === ArrayBuffer)
        return [new Uint8Array(u), !1];
      if (!w(u) && !M(u))
        throw new Error(t);
      return [u, !1];
    }, A = function(u) {
      return function(p) {
        return new R(!0).update(p)[u]();
      };
    }, D = function() {
      var u = A("hex");
      a && (u = I(u)), u.create = function() {
        return new R();
      }, u.update = function(_) {
        return u.create().update(_);
      };
      for (var p = 0; p < g.length; ++p) {
        var y = g[p];
        u[y] = A(y);
      }
      return u;
    }, I = function(u) {
      var p = Go, y = Go.Buffer, _;
      y.from && !s.JS_MD5_NO_BUFFER_FROM ? _ = y.from : _ = function(C) {
        return new y(C);
      };
      var S = function(C) {
        if (typeof C == "string")
          return p.createHash("md5").update(C, "utf8").digest("hex");
        if (C == null)
          throw new Error(t);
        return C.constructor === ArrayBuffer && (C = new Uint8Array(C)), w(C) || M(C) || C.constructor === y ? p.createHash("md5").update(_(C)).digest("hex") : u(C);
      };
      return S;
    }, P = function(u) {
      return function(p, y) {
        return new _t(p, !0).update(y)[u]();
      };
    }, $ = function() {
      var u = P("hex");
      u.create = function(_) {
        return new _t(_);
      }, u.update = function(_, S) {
        return u.create(_).update(S);
      };
      for (var p = 0; p < g.length; ++p) {
        var y = g[p];
        u[y] = P(y);
      }
      return u;
    };
    function R(u) {
      if (u)
        m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = v;
      else if (h) {
        var p = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(p), this.blocks = new Uint32Array(p);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    R.prototype.update = function(u) {
      if (this.finalized)
        throw new Error(e);
      var p = T(u);
      u = p[0];
      for (var y = p[1], _, S = 0, C, L = u.length, O = this.blocks, F = this.buffer8; S < L; ) {
        if (this.hashed && (this.hashed = !1, O[0] = O[16], O[16] = O[1] = O[2] = O[3] = O[4] = O[5] = O[6] = O[7] = O[8] = O[9] = O[10] = O[11] = O[12] = O[13] = O[14] = O[15] = 0), y)
          if (h)
            for (C = this.start; S < L && C < 64; ++S)
              _ = u.charCodeAt(S), _ < 128 ? F[C++] = _ : _ < 2048 ? (F[C++] = 192 | _ >>> 6, F[C++] = 128 | _ & 63) : _ < 55296 || _ >= 57344 ? (F[C++] = 224 | _ >>> 12, F[C++] = 128 | _ >>> 6 & 63, F[C++] = 128 | _ & 63) : (_ = 65536 + ((_ & 1023) << 10 | u.charCodeAt(++S) & 1023), F[C++] = 240 | _ >>> 18, F[C++] = 128 | _ >>> 12 & 63, F[C++] = 128 | _ >>> 6 & 63, F[C++] = 128 | _ & 63);
          else
            for (C = this.start; S < L && C < 64; ++S)
              _ = u.charCodeAt(S), _ < 128 ? O[C >>> 2] |= _ << d[C++ & 3] : _ < 2048 ? (O[C >>> 2] |= (192 | _ >>> 6) << d[C++ & 3], O[C >>> 2] |= (128 | _ & 63) << d[C++ & 3]) : _ < 55296 || _ >= 57344 ? (O[C >>> 2] |= (224 | _ >>> 12) << d[C++ & 3], O[C >>> 2] |= (128 | _ >>> 6 & 63) << d[C++ & 3], O[C >>> 2] |= (128 | _ & 63) << d[C++ & 3]) : (_ = 65536 + ((_ & 1023) << 10 | u.charCodeAt(++S) & 1023), O[C >>> 2] |= (240 | _ >>> 18) << d[C++ & 3], O[C >>> 2] |= (128 | _ >>> 12 & 63) << d[C++ & 3], O[C >>> 2] |= (128 | _ >>> 6 & 63) << d[C++ & 3], O[C >>> 2] |= (128 | _ & 63) << d[C++ & 3]);
        else if (h)
          for (C = this.start; S < L && C < 64; ++S)
            F[C++] = u[S];
        else
          for (C = this.start; S < L && C < 64; ++S)
            O[C >>> 2] |= u[S] << d[C++ & 3];
        this.lastByteIndex = C, this.bytes += C - this.start, C >= 64 ? (this.start = C - 64, this.hash(), this.hashed = !0) : this.start = C;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, R.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var u = this.blocks, p = this.lastByteIndex;
        u[p >>> 2] |= c[p & 3], p >= 56 && (this.hashed || this.hash(), u[0] = u[16], u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), u[14] = this.bytes << 3, u[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, R.prototype.hash = function() {
      var u, p, y, _, S, C, L = this.blocks;
      this.first ? (u = L[0] - 680876937, u = (u << 7 | u >>> 25) - 271733879 << 0, _ = (-1732584194 ^ u & 2004318071) + L[1] - 117830708, _ = (_ << 12 | _ >>> 20) + u << 0, y = (-271733879 ^ _ & (u ^ -271733879)) + L[2] - 1126478375, y = (y << 17 | y >>> 15) + _ << 0, p = (u ^ y & (_ ^ u)) + L[3] - 1316259209, p = (p << 22 | p >>> 10) + y << 0) : (u = this.h0, p = this.h1, y = this.h2, _ = this.h3, u += (_ ^ p & (y ^ _)) + L[0] - 680876936, u = (u << 7 | u >>> 25) + p << 0, _ += (y ^ u & (p ^ y)) + L[1] - 389564586, _ = (_ << 12 | _ >>> 20) + u << 0, y += (p ^ _ & (u ^ p)) + L[2] + 606105819, y = (y << 17 | y >>> 15) + _ << 0, p += (u ^ y & (_ ^ u)) + L[3] - 1044525330, p = (p << 22 | p >>> 10) + y << 0), u += (_ ^ p & (y ^ _)) + L[4] - 176418897, u = (u << 7 | u >>> 25) + p << 0, _ += (y ^ u & (p ^ y)) + L[5] + 1200080426, _ = (_ << 12 | _ >>> 20) + u << 0, y += (p ^ _ & (u ^ p)) + L[6] - 1473231341, y = (y << 17 | y >>> 15) + _ << 0, p += (u ^ y & (_ ^ u)) + L[7] - 45705983, p = (p << 22 | p >>> 10) + y << 0, u += (_ ^ p & (y ^ _)) + L[8] + 1770035416, u = (u << 7 | u >>> 25) + p << 0, _ += (y ^ u & (p ^ y)) + L[9] - 1958414417, _ = (_ << 12 | _ >>> 20) + u << 0, y += (p ^ _ & (u ^ p)) + L[10] - 42063, y = (y << 17 | y >>> 15) + _ << 0, p += (u ^ y & (_ ^ u)) + L[11] - 1990404162, p = (p << 22 | p >>> 10) + y << 0, u += (_ ^ p & (y ^ _)) + L[12] + 1804603682, u = (u << 7 | u >>> 25) + p << 0, _ += (y ^ u & (p ^ y)) + L[13] - 40341101, _ = (_ << 12 | _ >>> 20) + u << 0, y += (p ^ _ & (u ^ p)) + L[14] - 1502002290, y = (y << 17 | y >>> 15) + _ << 0, p += (u ^ y & (_ ^ u)) + L[15] + 1236535329, p = (p << 22 | p >>> 10) + y << 0, u += (y ^ _ & (p ^ y)) + L[1] - 165796510, u = (u << 5 | u >>> 27) + p << 0, _ += (p ^ y & (u ^ p)) + L[6] - 1069501632, _ = (_ << 9 | _ >>> 23) + u << 0, y += (u ^ p & (_ ^ u)) + L[11] + 643717713, y = (y << 14 | y >>> 18) + _ << 0, p += (_ ^ u & (y ^ _)) + L[0] - 373897302, p = (p << 20 | p >>> 12) + y << 0, u += (y ^ _ & (p ^ y)) + L[5] - 701558691, u = (u << 5 | u >>> 27) + p << 0, _ += (p ^ y & (u ^ p)) + L[10] + 38016083, _ = (_ << 9 | _ >>> 23) + u << 0, y += (u ^ p & (_ ^ u)) + L[15] - 660478335, y = (y << 14 | y >>> 18) + _ << 0, p += (_ ^ u & (y ^ _)) + L[4] - 405537848, p = (p << 20 | p >>> 12) + y << 0, u += (y ^ _ & (p ^ y)) + L[9] + 568446438, u = (u << 5 | u >>> 27) + p << 0, _ += (p ^ y & (u ^ p)) + L[14] - 1019803690, _ = (_ << 9 | _ >>> 23) + u << 0, y += (u ^ p & (_ ^ u)) + L[3] - 187363961, y = (y << 14 | y >>> 18) + _ << 0, p += (_ ^ u & (y ^ _)) + L[8] + 1163531501, p = (p << 20 | p >>> 12) + y << 0, u += (y ^ _ & (p ^ y)) + L[13] - 1444681467, u = (u << 5 | u >>> 27) + p << 0, _ += (p ^ y & (u ^ p)) + L[2] - 51403784, _ = (_ << 9 | _ >>> 23) + u << 0, y += (u ^ p & (_ ^ u)) + L[7] + 1735328473, y = (y << 14 | y >>> 18) + _ << 0, p += (_ ^ u & (y ^ _)) + L[12] - 1926607734, p = (p << 20 | p >>> 12) + y << 0, S = p ^ y, u += (S ^ _) + L[5] - 378558, u = (u << 4 | u >>> 28) + p << 0, _ += (S ^ u) + L[8] - 2022574463, _ = (_ << 11 | _ >>> 21) + u << 0, C = _ ^ u, y += (C ^ p) + L[11] + 1839030562, y = (y << 16 | y >>> 16) + _ << 0, p += (C ^ y) + L[14] - 35309556, p = (p << 23 | p >>> 9) + y << 0, S = p ^ y, u += (S ^ _) + L[1] - 1530992060, u = (u << 4 | u >>> 28) + p << 0, _ += (S ^ u) + L[4] + 1272893353, _ = (_ << 11 | _ >>> 21) + u << 0, C = _ ^ u, y += (C ^ p) + L[7] - 155497632, y = (y << 16 | y >>> 16) + _ << 0, p += (C ^ y) + L[10] - 1094730640, p = (p << 23 | p >>> 9) + y << 0, S = p ^ y, u += (S ^ _) + L[13] + 681279174, u = (u << 4 | u >>> 28) + p << 0, _ += (S ^ u) + L[0] - 358537222, _ = (_ << 11 | _ >>> 21) + u << 0, C = _ ^ u, y += (C ^ p) + L[3] - 722521979, y = (y << 16 | y >>> 16) + _ << 0, p += (C ^ y) + L[6] + 76029189, p = (p << 23 | p >>> 9) + y << 0, S = p ^ y, u += (S ^ _) + L[9] - 640364487, u = (u << 4 | u >>> 28) + p << 0, _ += (S ^ u) + L[12] - 421815835, _ = (_ << 11 | _ >>> 21) + u << 0, C = _ ^ u, y += (C ^ p) + L[15] + 530742520, y = (y << 16 | y >>> 16) + _ << 0, p += (C ^ y) + L[2] - 995338651, p = (p << 23 | p >>> 9) + y << 0, u += (y ^ (p | ~_)) + L[0] - 198630844, u = (u << 6 | u >>> 26) + p << 0, _ += (p ^ (u | ~y)) + L[7] + 1126891415, _ = (_ << 10 | _ >>> 22) + u << 0, y += (u ^ (_ | ~p)) + L[14] - 1416354905, y = (y << 15 | y >>> 17) + _ << 0, p += (_ ^ (y | ~u)) + L[5] - 57434055, p = (p << 21 | p >>> 11) + y << 0, u += (y ^ (p | ~_)) + L[12] + 1700485571, u = (u << 6 | u >>> 26) + p << 0, _ += (p ^ (u | ~y)) + L[3] - 1894986606, _ = (_ << 10 | _ >>> 22) + u << 0, y += (u ^ (_ | ~p)) + L[10] - 1051523, y = (y << 15 | y >>> 17) + _ << 0, p += (_ ^ (y | ~u)) + L[1] - 2054922799, p = (p << 21 | p >>> 11) + y << 0, u += (y ^ (p | ~_)) + L[8] + 1873313359, u = (u << 6 | u >>> 26) + p << 0, _ += (p ^ (u | ~y)) + L[15] - 30611744, _ = (_ << 10 | _ >>> 22) + u << 0, y += (u ^ (_ | ~p)) + L[6] - 1560198380, y = (y << 15 | y >>> 17) + _ << 0, p += (_ ^ (y | ~u)) + L[13] + 1309151649, p = (p << 21 | p >>> 11) + y << 0, u += (y ^ (p | ~_)) + L[4] - 145523070, u = (u << 6 | u >>> 26) + p << 0, _ += (p ^ (u | ~y)) + L[11] - 1120210379, _ = (_ << 10 | _ >>> 22) + u << 0, y += (u ^ (_ | ~p)) + L[2] + 718787259, y = (y << 15 | y >>> 17) + _ << 0, p += (_ ^ (y | ~u)) + L[9] - 343485551, p = (p << 21 | p >>> 11) + y << 0, this.first ? (this.h0 = u + 1732584193 << 0, this.h1 = p - 271733879 << 0, this.h2 = y - 1732584194 << 0, this.h3 = _ + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + u << 0, this.h1 = this.h1 + p << 0, this.h2 = this.h2 + y << 0, this.h3 = this.h3 + _ << 0);
    }, R.prototype.hex = function() {
      this.finalize();
      var u = this.h0, p = this.h1, y = this.h2, _ = this.h3;
      return l[u >>> 4 & 15] + l[u & 15] + l[u >>> 12 & 15] + l[u >>> 8 & 15] + l[u >>> 20 & 15] + l[u >>> 16 & 15] + l[u >>> 28 & 15] + l[u >>> 24 & 15] + l[p >>> 4 & 15] + l[p & 15] + l[p >>> 12 & 15] + l[p >>> 8 & 15] + l[p >>> 20 & 15] + l[p >>> 16 & 15] + l[p >>> 28 & 15] + l[p >>> 24 & 15] + l[y >>> 4 & 15] + l[y & 15] + l[y >>> 12 & 15] + l[y >>> 8 & 15] + l[y >>> 20 & 15] + l[y >>> 16 & 15] + l[y >>> 28 & 15] + l[y >>> 24 & 15] + l[_ >>> 4 & 15] + l[_ & 15] + l[_ >>> 12 & 15] + l[_ >>> 8 & 15] + l[_ >>> 20 & 15] + l[_ >>> 16 & 15] + l[_ >>> 28 & 15] + l[_ >>> 24 & 15];
    }, R.prototype.toString = R.prototype.hex, R.prototype.digest = function() {
      this.finalize();
      var u = this.h0, p = this.h1, y = this.h2, _ = this.h3;
      return [
        u & 255,
        u >>> 8 & 255,
        u >>> 16 & 255,
        u >>> 24 & 255,
        p & 255,
        p >>> 8 & 255,
        p >>> 16 & 255,
        p >>> 24 & 255,
        y & 255,
        y >>> 8 & 255,
        y >>> 16 & 255,
        y >>> 24 & 255,
        _ & 255,
        _ >>> 8 & 255,
        _ >>> 16 & 255,
        _ >>> 24 & 255
      ];
    }, R.prototype.array = R.prototype.digest, R.prototype.arrayBuffer = function() {
      this.finalize();
      var u = new ArrayBuffer(16), p = new Uint32Array(u);
      return p[0] = this.h0, p[1] = this.h1, p[2] = this.h2, p[3] = this.h3, u;
    }, R.prototype.buffer = R.prototype.arrayBuffer, R.prototype.base64 = function() {
      for (var u, p, y, _ = "", S = this.array(), C = 0; C < 15; )
        u = S[C++], p = S[C++], y = S[C++], _ += f[u >>> 2] + f[(u << 4 | p >>> 4) & 63] + f[(p << 2 | y >>> 6) & 63] + f[y & 63];
      return u = S[C], _ += f[u >>> 2] + f[u << 4 & 63] + "==", _;
    };
    function _t(u, p) {
      var y, _ = T(u);
      if (u = _[0], _[1]) {
        var S = [], C = u.length, L = 0, O;
        for (y = 0; y < C; ++y)
          O = u.charCodeAt(y), O < 128 ? S[L++] = O : O < 2048 ? (S[L++] = 192 | O >>> 6, S[L++] = 128 | O & 63) : O < 55296 || O >= 57344 ? (S[L++] = 224 | O >>> 12, S[L++] = 128 | O >>> 6 & 63, S[L++] = 128 | O & 63) : (O = 65536 + ((O & 1023) << 10 | u.charCodeAt(++y) & 1023), S[L++] = 240 | O >>> 18, S[L++] = 128 | O >>> 12 & 63, S[L++] = 128 | O >>> 6 & 63, S[L++] = 128 | O & 63);
        u = S;
      }
      u.length > 64 && (u = new R(!0).update(u).array());
      var F = [], Y = [];
      for (y = 0; y < 64; ++y) {
        var X = u[y] || 0;
        F[y] = 92 ^ X, Y[y] = 54 ^ X;
      }
      R.call(this, p), this.update(Y), this.oKeyPad = F, this.inner = !0, this.sharedMemory = p;
    }
    _t.prototype = new R(), _t.prototype.finalize = function() {
      if (R.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var u = this.array();
        R.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(u), R.prototype.finalize.call(this);
      }
    };
    var tt = D();
    tt.md5 = tt, tt.md5.hmac = $(), o ? i.exports = tt : s.md5 = tt;
  })();
})(Hl);
var e2 = Hl.exports;
const i2 = /* @__PURE__ */ Z6(e2);
function ha(i, t) {
  const e = n2(i, t);
  return i2(e).toUpperCase();
}
function is(i, t) {
  return ha(i, t);
}
function n2(i, t) {
  const e = {};
  Object.keys(i).forEach((r) => {
    const a = i[r];
    a != null && a !== "" && (e[r] = String(a));
  });
  const n = Object.keys(e).sort();
  let s = "";
  return n.forEach((r) => {
    s += r + e[r];
  }), t + s + t;
}
function Ul(i, t) {
  const { sign: e, ...n } = i, s = is(n, t);
  return e === s;
}
function la(i, t) {
  const e = { ...i };
  return e.sign = is(e, t), e;
}
function jl() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function Gl(i, t) {
  return function() {
    return i.apply(t, arguments);
  };
}
const { toString: s2 } = Object.prototype, { getPrototypeOf: ca } = Object, { iterator: ns, toStringTag: Wl } = Symbol, ss = /* @__PURE__ */ ((i) => (t) => {
  const e = s2.call(t);
  return i[e] || (i[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), jt = (i) => (i = i.toLowerCase(), (t) => ss(t) === i), rs = (i) => (t) => typeof t === i, { isArray: vi } = Array, Wi = rs("undefined");
function r2(i) {
  return i !== null && !Wi(i) && i.constructor !== null && !Wi(i.constructor) && Ct(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Yl = jt("ArrayBuffer");
function a2(i) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(i) : t = i && i.buffer && Yl(i.buffer), t;
}
const o2 = rs("string"), Ct = rs("function"), Xl = rs("number"), as = (i) => i !== null && typeof i == "object", h2 = (i) => i === !0 || i === !1, Cn = (i) => {
  if (ss(i) !== "object")
    return !1;
  const t = ca(i);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Wl in i) && !(ns in i);
}, l2 = jt("Date"), c2 = jt("File"), d2 = jt("Blob"), u2 = jt("FileList"), f2 = (i) => as(i) && Ct(i.pipe), p2 = (i) => {
  let t;
  return i && (typeof FormData == "function" && i instanceof FormData || Ct(i.append) && ((t = ss(i)) === "formdata" || // detect form-data instance
  t === "object" && Ct(i.toString) && i.toString() === "[object FormData]"));
}, m2 = jt("URLSearchParams"), [g2, v2, y2, _2] = ["ReadableStream", "Request", "Response", "Headers"].map(jt), x2 = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function tn(i, t, { allOwnKeys: e = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let n, s;
  if (typeof i != "object" && (i = [i]), vi(i))
    for (n = 0, s = i.length; n < s; n++)
      t.call(null, i[n], n, i);
  else {
    const r = e ? Object.getOwnPropertyNames(i) : Object.keys(i), a = r.length;
    let o;
    for (n = 0; n < a; n++)
      o = r[n], t.call(null, i[o], o, i);
  }
}
function Vl(i, t) {
  t = t.toLowerCase();
  const e = Object.keys(i);
  let n = e.length, s;
  for (; n-- > 0; )
    if (s = e[n], t === s.toLowerCase())
      return s;
  return null;
}
const be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ql = (i) => !Wi(i) && i !== be;
function pr() {
  const { caseless: i } = ql(this) && this || {}, t = {}, e = (n, s) => {
    const r = i && Vl(t, s) || s;
    Cn(t[r]) && Cn(n) ? t[r] = pr(t[r], n) : Cn(n) ? t[r] = pr({}, n) : vi(n) ? t[r] = n.slice() : t[r] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && tn(arguments[n], e);
  return t;
}
const w2 = (i, t, e, { allOwnKeys: n } = {}) => (tn(t, (s, r) => {
  e && Ct(s) ? i[r] = Gl(s, e) : i[r] = s;
}, { allOwnKeys: n }), i), E2 = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), C2 = (i, t, e, n) => {
  i.prototype = Object.create(t.prototype, n), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: t.prototype
  }), e && Object.assign(i.prototype, e);
}, M2 = (i, t, e, n) => {
  let s, r, a;
  const o = {};
  if (t = t || {}, i == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(i), r = s.length; r-- > 0; )
      a = s[r], (!n || n(a, i, t)) && !o[a] && (t[a] = i[a], o[a] = !0);
    i = e !== !1 && ca(i);
  } while (i && (!e || e(i, t)) && i !== Object.prototype);
  return t;
}, T2 = (i, t, e) => {
  i = String(i), (e === void 0 || e > i.length) && (e = i.length), e -= t.length;
  const n = i.indexOf(t, e);
  return n !== -1 && n === e;
}, b2 = (i) => {
  if (!i) return null;
  if (vi(i)) return i;
  let t = i.length;
  if (!Xl(t)) return null;
  const e = new Array(t);
  for (; t-- > 0; )
    e[t] = i[t];
  return e;
}, N2 = /* @__PURE__ */ ((i) => (t) => i && t instanceof i)(typeof Uint8Array < "u" && ca(Uint8Array)), S2 = (i, t) => {
  const e = (i && i[ns]).call(i);
  let n;
  for (; (n = e.next()) && !n.done; ) {
    const s = n.value;
    t.call(i, s[0], s[1]);
  }
}, L2 = (i, t) => {
  let e;
  const n = [];
  for (; (e = i.exec(t)) !== null; )
    n.push(e);
  return n;
}, A2 = jt("HTMLFormElement"), D2 = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, e, n) {
    return e.toUpperCase() + n;
  }
), Wo = (({ hasOwnProperty: i }) => (t, e) => i.call(t, e))(Object.prototype), O2 = jt("RegExp"), Kl = (i, t) => {
  const e = Object.getOwnPropertyDescriptors(i), n = {};
  tn(e, (s, r) => {
    let a;
    (a = t(s, r, i)) !== !1 && (n[r] = a || s);
  }), Object.defineProperties(i, n);
}, R2 = (i) => {
  Kl(i, (t, e) => {
    if (Ct(i) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const n = i[e];
    if (Ct(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, I2 = (i, t) => {
  const e = {}, n = (s) => {
    s.forEach((r) => {
      e[r] = !0;
    });
  };
  return vi(i) ? n(i) : n(String(i).split(t)), e;
}, z2 = () => {
}, F2 = (i, t) => i != null && Number.isFinite(i = +i) ? i : t;
function k2(i) {
  return !!(i && Ct(i.append) && i[Wl] === "FormData" && i[ns]);
}
const P2 = (i) => {
  const t = new Array(10), e = (n, s) => {
    if (as(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const r = vi(n) ? [] : {};
        return tn(n, (a, o) => {
          const h = e(a, s + 1);
          !Wi(h) && (r[o] = h);
        }), t[s] = void 0, r;
      }
    }
    return n;
  };
  return e(i, 0);
}, B2 = jt("AsyncFunction"), $2 = (i) => i && (as(i) || Ct(i)) && Ct(i.then) && Ct(i.catch), Zl = ((i, t) => i ? setImmediate : t ? ((e, n) => (be.addEventListener("message", ({ source: s, data: r }) => {
  s === be && r === e && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), be.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  Ct(be.postMessage)
), H2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(be) : typeof Ai < "u" && Ai.nextTick || Zl, U2 = (i) => i != null && Ct(i[ns]), N = {
  isArray: vi,
  isArrayBuffer: Yl,
  isBuffer: r2,
  isFormData: p2,
  isArrayBufferView: a2,
  isString: o2,
  isNumber: Xl,
  isBoolean: h2,
  isObject: as,
  isPlainObject: Cn,
  isReadableStream: g2,
  isRequest: v2,
  isResponse: y2,
  isHeaders: _2,
  isUndefined: Wi,
  isDate: l2,
  isFile: c2,
  isBlob: d2,
  isRegExp: O2,
  isFunction: Ct,
  isStream: f2,
  isURLSearchParams: m2,
  isTypedArray: N2,
  isFileList: u2,
  forEach: tn,
  merge: pr,
  extend: w2,
  trim: x2,
  stripBOM: E2,
  inherits: C2,
  toFlatObject: M2,
  kindOf: ss,
  kindOfTest: jt,
  endsWith: T2,
  toArray: b2,
  forEachEntry: S2,
  matchAll: L2,
  isHTMLForm: A2,
  hasOwnProperty: Wo,
  hasOwnProp: Wo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Kl,
  freezeMethods: R2,
  toObjectSet: I2,
  toCamelCase: D2,
  noop: z2,
  toFiniteNumber: F2,
  findKey: Vl,
  global: be,
  isContextDefined: ql,
  isSpecCompliantForm: k2,
  toJSONObject: P2,
  isAsyncFn: B2,
  isThenable: $2,
  setImmediate: Zl,
  asap: H2,
  isIterable: U2
};
function H(i, t, e, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
N.inherits(H, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Jl = H.prototype, Ql = {};
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
].forEach((i) => {
  Ql[i] = { value: i };
});
Object.defineProperties(H, Ql);
Object.defineProperty(Jl, "isAxiosError", { value: !0 });
H.from = (i, t, e, n, s, r) => {
  const a = Object.create(Jl);
  return N.toFlatObject(i, a, function(o) {
    return o !== Error.prototype;
  }, (o) => o !== "isAxiosError"), H.call(a, i.message, t, e, n, s), a.cause = i, a.name = i.name, r && Object.assign(a, r), a;
};
const j2 = null;
function mr(i) {
  return N.isPlainObject(i) || N.isArray(i);
}
function tc(i) {
  return N.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Yo(i, t, e) {
  return i ? i.concat(t).map(function(n, s) {
    return n = tc(n), !e && s ? "[" + n + "]" : n;
  }).join(e ? "." : "") : t;
}
function G2(i) {
  return N.isArray(i) && !i.some(mr);
}
const W2 = N.toFlatObject(N, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function os(i, t, e) {
  if (!N.isObject(i))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = N.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, m) {
    return !N.isUndefined(m[f]);
  });
  const n = e.metaTokens, s = e.visitor || l, r = e.dots, a = e.indexes, o = (e.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
  if (!N.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null) return "";
    if (N.isDate(f))
      return f.toISOString();
    if (!o && N.isBlob(f))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(f) || N.isTypedArray(f) ? o && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, m, v) {
    let x = f;
    if (f && !v && typeof f == "object") {
      if (N.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (N.isArray(f) && G2(f) || (N.isFileList(f) || N.endsWith(m, "[]")) && (x = N.toArray(f)))
        return m = tc(m), x.forEach(function(w, M) {
          !(N.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Yo([m], M, r) : a === null ? m : m + "[]",
            h(w)
          );
        }), !1;
    }
    return mr(f) ? !0 : (t.append(Yo(v, m, r), h(f)), !1);
  }
  const c = [], d = Object.assign(W2, {
    defaultVisitor: l,
    convertValue: h,
    isVisitable: mr
  });
  function g(f, m) {
    if (!N.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      c.push(f), N.forEach(f, function(v, x) {
        (!(N.isUndefined(v) || v === null) && s.call(
          t,
          v,
          N.isString(x) ? x.trim() : x,
          m,
          d
        )) === !0 && g(v, m ? m.concat(x) : [x]);
      }), c.pop();
    }
  }
  if (!N.isObject(i))
    throw new TypeError("data must be an object");
  return g(i), t;
}
function Xo(i) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(e) {
    return t[e];
  });
}
function da(i, t) {
  this._pairs = [], i && os(i, this, t);
}
const ec = da.prototype;
ec.append = function(i, t) {
  this._pairs.push([i, t]);
};
ec.toString = function(i) {
  const t = i ? function(e) {
    return i.call(this, e, Xo);
  } : Xo;
  return this._pairs.map(function(e) {
    return t(e[0]) + "=" + t(e[1]);
  }, "").join("&");
};
function Y2(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ic(i, t, e) {
  if (!t)
    return i;
  const n = e && e.encode || Y2;
  N.isFunction(e) && (e = {
    serialize: e
  });
  const s = e && e.serialize;
  let r;
  if (s ? r = s(t, e) : r = N.isURLSearchParams(t) ? t.toString() : new da(t, e).toString(n), r) {
    const a = i.indexOf("#");
    a !== -1 && (i = i.slice(0, a)), i += (i.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return i;
}
class Vo {
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
  use(t, e, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: e,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    N.forEach(this.handlers, function(e) {
      e !== null && t(e);
    });
  }
}
const nc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, X2 = typeof URLSearchParams < "u" ? URLSearchParams : da, V2 = typeof FormData < "u" ? FormData : null, q2 = typeof Blob < "u" ? Blob : null, K2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: X2,
    FormData: V2,
    Blob: q2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ua = typeof window < "u" && typeof document < "u", gr = typeof navigator == "object" && navigator || void 0, Z2 = ua && (!gr || ["ReactNative", "NativeScript", "NS"].indexOf(gr.product) < 0), J2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Q2 = ua && window.location.href || "http://localhost", tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ua,
  hasStandardBrowserEnv: Z2,
  hasStandardBrowserWebWorkerEnv: J2,
  navigator: gr,
  origin: Q2
}, Symbol.toStringTag, { value: "Module" })), pt = {
  ...tm,
  ...K2
};
function em(i, t) {
  return os(i, new pt.classes.URLSearchParams(), Object.assign({
    visitor: function(e, n, s, r) {
      return pt.isNode && N.isBuffer(e) ? (this.append(n, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function im(i) {
  return N.matchAll(/\w+|\[(\w*)]/g, i).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function nm(i) {
  const t = {}, e = Object.keys(i);
  let n;
  const s = e.length;
  let r;
  for (n = 0; n < s; n++)
    r = e[n], t[r] = i[r];
  return t;
}
function sc(i) {
  function t(e, n, s, r) {
    let a = e[r++];
    if (a === "__proto__") return !0;
    const o = Number.isFinite(+a), h = r >= e.length;
    return a = !a && N.isArray(s) ? s.length : a, h ? (N.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !o) : ((!s[a] || !N.isObject(s[a])) && (s[a] = []), t(e, n, s[a], r) && N.isArray(s[a]) && (s[a] = nm(s[a])), !o);
  }
  if (N.isFormData(i) && N.isFunction(i.entries)) {
    const e = {};
    return N.forEachEntry(i, (n, s) => {
      t(im(n), s, e, 0);
    }), e;
  }
  return null;
}
function sm(i, t, e) {
  if (N.isString(i))
    try {
      return (t || JSON.parse)(i), N.trim(i);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (e || JSON.stringify)(i);
}
const en = {
  transitional: nc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, t) {
    const e = t.getContentType() || "", n = e.indexOf("application/json") > -1, s = N.isObject(i);
    if (s && N.isHTMLForm(i) && (i = new FormData(i)), N.isFormData(i))
      return n ? JSON.stringify(sc(i)) : i;
    if (N.isArrayBuffer(i) || N.isBuffer(i) || N.isStream(i) || N.isFile(i) || N.isBlob(i) || N.isReadableStream(i))
      return i;
    if (N.isArrayBufferView(i))
      return i.buffer;
    if (N.isURLSearchParams(i))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let r;
    if (s) {
      if (e.indexOf("application/x-www-form-urlencoded") > -1)
        return em(i, this.formSerializer).toString();
      if ((r = N.isFileList(i)) || e.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return os(
          r ? { "files[]": i } : i,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || n ? (t.setContentType("application/json", !1), sm(i)) : i;
  }],
  transformResponse: [function(i) {
    const t = this.transitional || en.transitional, e = t && t.forcedJSONParsing, n = this.responseType === "json";
    if (N.isResponse(i) || N.isReadableStream(i))
      return i;
    if (i && N.isString(i) && (e && !this.responseType || n)) {
      const s = !(t && t.silentJSONParsing) && n;
      try {
        return JSON.parse(i);
      } catch (r) {
        if (s)
          throw r.name === "SyntaxError" ? H.from(r, H.ERR_BAD_RESPONSE, this, null, this.response) : r;
      }
    }
    return i;
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
    FormData: pt.classes.FormData,
    Blob: pt.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  en.headers[i] = {};
});
const rm = N.toObjectSet([
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
]), am = (i) => {
  const t = {};
  let e, n, s;
  return i && i.split(`
`).forEach(function(r) {
    s = r.indexOf(":"), e = r.substring(0, s).trim().toLowerCase(), n = r.substring(s + 1).trim(), !(!e || t[e] && rm[e]) && (e === "set-cookie" ? t[e] ? t[e].push(n) : t[e] = [n] : t[e] = t[e] ? t[e] + ", " + n : n);
  }), t;
}, qo = Symbol("internals");
function Mi(i) {
  return i && String(i).trim().toLowerCase();
}
function Mn(i) {
  return i === !1 || i == null ? i : N.isArray(i) ? i.map(Mn) : String(i);
}
function om(i) {
  const t = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = e.exec(i); )
    t[n[1]] = n[2];
  return t;
}
const hm = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function Ns(i, t, e, n, s) {
  if (N.isFunction(n))
    return n.call(this, t, e);
  if (s && (t = e), !!N.isString(t)) {
    if (N.isString(n))
      return t.indexOf(n) !== -1;
    if (N.isRegExp(n))
      return n.test(t);
  }
}
function lm(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, n) => e.toUpperCase() + n);
}
function cm(i, t) {
  const e = N.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(i, n + e, {
      value: function(s, r, a) {
        return this[n].call(this, t, s, r, a);
      },
      configurable: !0
    });
  });
}
let Mt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, t, e) {
    const n = this;
    function s(a, o, h) {
      const l = Mi(o);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = N.findKey(n, l);
      (!c || n[c] === void 0 || h === !0 || h === void 0 && n[c] !== !1) && (n[c || o] = Mn(a));
    }
    const r = (a, o) => N.forEach(a, (h, l) => s(h, l, o));
    if (N.isPlainObject(i) || i instanceof this.constructor)
      r(i, t);
    else if (N.isString(i) && (i = i.trim()) && !hm(i))
      r(am(i), t);
    else if (N.isObject(i) && N.isIterable(i)) {
      let a = {}, o, h;
      for (const l of i) {
        if (!N.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[h = l[0]] = (o = a[h]) ? N.isArray(o) ? [...o, l[1]] : [o, l[1]] : l[1];
      }
      r(a, t);
    } else
      i != null && s(t, i, e);
    return this;
  }
  get(i, t) {
    if (i = Mi(i), i) {
      const e = N.findKey(this, i);
      if (e) {
        const n = this[e];
        if (!t)
          return n;
        if (t === !0)
          return om(n);
        if (N.isFunction(t))
          return t.call(this, n, e);
        if (N.isRegExp(t))
          return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, t) {
    if (i = Mi(i), i) {
      const e = N.findKey(this, i);
      return !!(e && this[e] !== void 0 && (!t || Ns(this, this[e], e, t)));
    }
    return !1;
  }
  delete(i, t) {
    const e = this;
    let n = !1;
    function s(r) {
      if (r = Mi(r), r) {
        const a = N.findKey(e, r);
        a && (!t || Ns(e, e[a], a, t)) && (delete e[a], n = !0);
      }
    }
    return N.isArray(i) ? i.forEach(s) : s(i), n;
  }
  clear(i) {
    const t = Object.keys(this);
    let e = t.length, n = !1;
    for (; e--; ) {
      const s = t[e];
      (!i || Ns(this, this[s], s, i, !0)) && (delete this[s], n = !0);
    }
    return n;
  }
  normalize(i) {
    const t = this, e = {};
    return N.forEach(this, (n, s) => {
      const r = N.findKey(e, s);
      if (r) {
        t[r] = Mn(n), delete t[s];
        return;
      }
      const a = i ? lm(s) : String(s).trim();
      a !== s && delete t[s], t[a] = Mn(n), e[a] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const t = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (e, n) => {
      e != null && e !== !1 && (t[n] = i && N.isArray(e) ? e.join(", ") : e);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, t]) => i + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...t) {
    const e = new this(i);
    return t.forEach((n) => e.set(n)), e;
  }
  static accessor(i) {
    const t = (this[qo] = this[qo] = {
      accessors: {}
    }).accessors, e = this.prototype;
    function n(s) {
      const r = Mi(s);
      t[r] || (cm(e, s), t[r] = !0);
    }
    return N.isArray(i) ? i.forEach(n) : n(i), this;
  }
};
Mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Mt.prototype, ({ value: i }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => i,
    set(n) {
      this[e] = n;
    }
  };
});
N.freezeMethods(Mt);
function Ss(i, t) {
  const e = this || en, n = t || e, s = Mt.from(n.headers);
  let r = n.data;
  return N.forEach(i, function(a) {
    r = a.call(e, r, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), r;
}
function rc(i) {
  return !!(i && i.__CANCEL__);
}
function yi(i, t, e) {
  H.call(this, i ?? "canceled", H.ERR_CANCELED, t, e), this.name = "CanceledError";
}
N.inherits(yi, H, {
  __CANCEL__: !0
});
function ac(i, t, e) {
  const n = e.config.validateStatus;
  !e.status || !n || n(e.status) ? i(e) : t(new H(
    "Request failed with status code " + e.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function dm(i) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return t && t[1] || "";
}
function um(i, t) {
  i = i || 10;
  const e = new Array(i), n = new Array(i);
  let s = 0, r = 0, a;
  return t = t !== void 0 ? t : 1e3, function(o) {
    const h = Date.now(), l = n[r];
    a || (a = h), e[s] = o, n[s] = h;
    let c = r, d = 0;
    for (; c !== s; )
      d += e[c++], c = c % i;
    if (s = (s + 1) % i, s === r && (r = (r + 1) % i), h - a < t)
      return;
    const g = l && h - l;
    return g ? Math.round(d * 1e3 / g) : void 0;
  };
}
function fm(i, t) {
  let e = 0, n = 1e3 / t, s, r;
  const a = (o, h = Date.now()) => {
    e = h, s = null, r && (clearTimeout(r), r = null), i.apply(null, o);
  };
  return [(...o) => {
    const h = Date.now(), l = h - e;
    l >= n ? a(o, h) : (s = o, r || (r = setTimeout(() => {
      r = null, a(s);
    }, n - l)));
  }, () => s && a(s)];
}
const Wn = (i, t, e = 3) => {
  let n = 0;
  const s = um(50, 250);
  return fm((r) => {
    const a = r.loaded, o = r.lengthComputable ? r.total : void 0, h = a - n, l = s(h), c = a <= o;
    n = a;
    const d = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: h,
      rate: l || void 0,
      estimated: l && o && c ? (o - a) / l : void 0,
      event: r,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    };
    i(d);
  }, e);
}, Ko = (i, t) => {
  const e = i != null;
  return [(n) => t[0]({
    lengthComputable: e,
    total: i,
    loaded: n
  }), t[1]];
}, Zo = (i) => (...t) => N.asap(() => i(...t)), pm = pt.hasStandardBrowserEnv ? /* @__PURE__ */ ((i, t) => (e) => (e = new URL(e, pt.origin), i.protocol === e.protocol && i.host === e.host && (t || i.port === e.port)))(
  new URL(pt.origin),
  pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)
) : () => !0, mm = pt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, t, e, n, s, r) {
      const a = [i + "=" + encodeURIComponent(t)];
      N.isNumber(e) && a.push("expires=" + new Date(e).toGMTString()), N.isString(n) && a.push("path=" + n), N.isString(s) && a.push("domain=" + s), r === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(i) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(i) {
      this.write(i, "", Date.now() - 864e5);
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
function gm(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function vm(i, t) {
  return t ? i.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : i;
}
function oc(i, t, e) {
  let n = !gm(t);
  return i && (n || e == !1) ? vm(i, t) : t;
}
const Jo = (i) => i instanceof Mt ? { ...i } : i;
function $e(i, t) {
  t = t || {};
  const e = {};
  function n(l, c, d, g) {
    return N.isPlainObject(l) && N.isPlainObject(c) ? N.merge.call({ caseless: g }, l, c) : N.isPlainObject(c) ? N.merge({}, c) : N.isArray(c) ? c.slice() : c;
  }
  function s(l, c, d, g) {
    if (N.isUndefined(c)) {
      if (!N.isUndefined(l))
        return n(void 0, l, d, g);
    } else return n(l, c, d, g);
  }
  function r(l, c) {
    if (!N.isUndefined(c))
      return n(void 0, c);
  }
  function a(l, c) {
    if (N.isUndefined(c)) {
      if (!N.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, c);
  }
  function o(l, c, d) {
    if (d in t)
      return n(l, c);
    if (d in i)
      return n(void 0, l);
  }
  const h = {
    url: r,
    method: r,
    data: r,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: o,
    headers: (l, c, d) => s(Jo(l), Jo(c), d, !0)
  };
  return N.forEach(Object.keys(Object.assign({}, i, t)), function(l) {
    const c = h[l] || s, d = c(i[l], t[l], l);
    N.isUndefined(d) && c !== o || (e[l] = d);
  }), e;
}
const hc = (i) => {
  const t = $e({}, i);
  let { data: e, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: r, headers: a, auth: o } = t;
  t.headers = a = Mt.from(a), t.url = ic(oc(t.baseURL, t.url, t.allowAbsoluteUrls), i.params, i.paramsSerializer), o && a.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let h;
  if (N.isFormData(e)) {
    if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((h = a.getContentType()) !== !1) {
      const [l, ...c] = h ? h.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([l || "multipart/form-data", ...c].join("; "));
    }
  }
  if (pt.hasStandardBrowserEnv && (n && N.isFunction(n) && (n = n(t)), n || n !== !1 && pm(t.url))) {
    const l = s && r && mm.read(r);
    l && a.set(s, l);
  }
  return t;
}, ym = typeof XMLHttpRequest < "u", _m = ym && function(i) {
  return new Promise(function(t, e) {
    const n = hc(i);
    let s = n.data;
    const r = Mt.from(n.headers).normalize();
    let { responseType: a, onUploadProgress: o, onDownloadProgress: h } = n, l, c, d, g, f;
    function m() {
      g && g(), f && f(), n.cancelToken && n.cancelToken.unsubscribe(l), n.signal && n.signal.removeEventListener("abort", l);
    }
    let v = new XMLHttpRequest();
    v.open(n.method.toUpperCase(), n.url, !0), v.timeout = n.timeout;
    function x() {
      if (!v)
        return;
      const M = Mt.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: M,
        config: i,
        request: v
      };
      ac(function(A) {
        t(A), m();
      }, function(A) {
        e(A), m();
      }, T), v = null;
    }
    "onloadend" in v ? v.onloadend = x : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, v.onabort = function() {
      v && (e(new H("Request aborted", H.ECONNABORTED, i, v)), v = null);
    }, v.onerror = function() {
      e(new H("Network Error", H.ERR_NETWORK, i, v)), v = null;
    }, v.ontimeout = function() {
      let M = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const T = n.transitional || nc;
      n.timeoutErrorMessage && (M = n.timeoutErrorMessage), e(new H(
        M,
        T.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        i,
        v
      )), v = null;
    }, s === void 0 && r.setContentType(null), "setRequestHeader" in v && N.forEach(r.toJSON(), function(M, T) {
      v.setRequestHeader(T, M);
    }), N.isUndefined(n.withCredentials) || (v.withCredentials = !!n.withCredentials), a && a !== "json" && (v.responseType = n.responseType), h && ([d, f] = Wn(h, !0), v.addEventListener("progress", d)), o && v.upload && ([c, g] = Wn(o), v.upload.addEventListener("progress", c), v.upload.addEventListener("loadend", g)), (n.cancelToken || n.signal) && (l = (M) => {
      v && (e(!M || M.type ? new yi(null, i, v) : M), v.abort(), v = null);
    }, n.cancelToken && n.cancelToken.subscribe(l), n.signal && (n.signal.aborted ? l() : n.signal.addEventListener("abort", l)));
    const w = dm(n.url);
    if (w && pt.protocols.indexOf(w) === -1) {
      e(new H("Unsupported protocol " + w + ":", H.ERR_BAD_REQUEST, i));
      return;
    }
    v.send(s || null);
  });
}, xm = (i, t) => {
  const { length: e } = i = i ? i.filter(Boolean) : [];
  if (t || e) {
    let n = new AbortController(), s;
    const r = function(l) {
      if (!s) {
        s = !0, o();
        const c = l instanceof Error ? l : this.reason;
        n.abort(c instanceof H ? c : new yi(c instanceof Error ? c.message : c));
      }
    };
    let a = t && setTimeout(() => {
      a = null, r(new H(`timeout ${t} of ms exceeded`, H.ETIMEDOUT));
    }, t);
    const o = () => {
      i && (a && clearTimeout(a), a = null, i.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(r) : l.removeEventListener("abort", r);
      }), i = null);
    };
    i.forEach((l) => l.addEventListener("abort", r));
    const { signal: h } = n;
    return h.unsubscribe = () => N.asap(o), h;
  }
}, wm = function* (i, t) {
  let e = i.byteLength;
  if (e < t) {
    yield i;
    return;
  }
  let n = 0, s;
  for (; n < e; )
    s = n + t, yield i.slice(n, s), n = s;
}, Em = async function* (i, t) {
  for await (const e of Cm(i))
    yield* wm(e, t);
}, Cm = async function* (i) {
  if (i[Symbol.asyncIterator]) {
    yield* i;
    return;
  }
  const t = i.getReader();
  try {
    for (; ; ) {
      const { done: e, value: n } = await t.read();
      if (e)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Qo = (i, t, e, n) => {
  const s = Em(i, t);
  let r = 0, a, o = (h) => {
    a || (a = !0, n && n(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: l, value: c } = await s.next();
        if (l) {
          o(), h.close();
          return;
        }
        let d = c.byteLength;
        if (e) {
          let g = r += d;
          e(g);
        }
        h.enqueue(new Uint8Array(c));
      } catch (l) {
        throw o(l), l;
      }
    },
    cancel(h) {
      return o(h), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, hs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lc = hs && typeof ReadableStream == "function", Mm = hs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (t) => i.encode(t))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), cc = (i, ...t) => {
  try {
    return !!i(...t);
  } catch {
    return !1;
  }
}, Tm = lc && cc(() => {
  let i = !1;
  const t = new Request(pt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !t;
}), th = 64 * 1024, vr = lc && cc(() => N.isReadableStream(new Response("").body)), Yn = {
  stream: vr && ((i) => i.body)
};
hs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Yn[t] && (Yn[t] = N.isFunction(i[t]) ? (e) => e[t]() : (e, n) => {
      throw new H(`Response type '${t}' is not supported`, H.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const bm = async (i) => {
  if (i == null)
    return 0;
  if (N.isBlob(i))
    return i.size;
  if (N.isSpecCompliantForm(i))
    return (await new Request(pt.origin, {
      method: "POST",
      body: i
    }).arrayBuffer()).byteLength;
  if (N.isArrayBufferView(i) || N.isArrayBuffer(i))
    return i.byteLength;
  if (N.isURLSearchParams(i) && (i = i + ""), N.isString(i))
    return (await Mm(i)).byteLength;
}, Nm = async (i, t) => N.toFiniteNumber(i.getContentLength()) ?? bm(t), Sm = hs && (async (i) => {
  let {
    url: t,
    method: e,
    data: n,
    signal: s,
    cancelToken: r,
    timeout: a,
    onDownloadProgress: o,
    onUploadProgress: h,
    responseType: l,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: g
  } = hc(i);
  l = l ? (l + "").toLowerCase() : "text";
  let f = xm([s, r && r.toAbortSignal()], a), m;
  const v = f && f.unsubscribe && (() => {
    f.unsubscribe();
  });
  let x;
  try {
    if (h && Tm && e !== "get" && e !== "head" && (x = await Nm(c, n)) !== 0) {
      let D = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), I;
      if (N.isFormData(n) && (I = D.headers.get("content-type")) && c.setContentType(I), D.body) {
        const [P, $] = Ko(
          x,
          Wn(Zo(h))
        );
        n = Qo(D.body, th, P, $);
      }
    }
    N.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    m = new Request(t, {
      ...g,
      signal: f,
      method: e.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let M = await fetch(m);
    const T = vr && (l === "stream" || l === "response");
    if (vr && (o || T && v)) {
      const D = {};
      ["status", "statusText", "headers"].forEach((R) => {
        D[R] = M[R];
      });
      const I = N.toFiniteNumber(M.headers.get("content-length")), [P, $] = o && Ko(
        I,
        Wn(Zo(o), !0)
      ) || [];
      M = new Response(
        Qo(M.body, th, P, () => {
          $ && $(), v && v();
        }),
        D
      );
    }
    l = l || "text";
    let A = await Yn[N.findKey(Yn, l) || "text"](M, i);
    return !T && v && v(), await new Promise((D, I) => {
      ac(D, I, {
        data: A,
        headers: Mt.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: i,
        request: m
      });
    });
  } catch (w) {
    throw v && v(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new H("Network Error", H.ERR_NETWORK, i, m),
      {
        cause: w.cause || w
      }
    ) : H.from(w, w && w.code, i, m);
  }
}), yr = {
  http: j2,
  xhr: _m,
  fetch: Sm
};
N.forEach(yr, (i, t) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: t });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: t });
  }
});
const eh = (i) => `- ${i}`, Lm = (i) => N.isFunction(i) || i === null || i === !1, dc = {
  getAdapter: (i) => {
    i = N.isArray(i) ? i : [i];
    const { length: t } = i;
    let e, n;
    const s = {};
    for (let r = 0; r < t; r++) {
      e = i[r];
      let a;
      if (n = e, !Lm(e) && (n = yr[(a = String(e)).toLowerCase()], n === void 0))
        throw new H(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + r] = n;
    }
    if (!n) {
      const r = Object.entries(s).map(
        ([o, h]) => `adapter ${o} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? r.length > 1 ? `since :
` + r.map(eh).join(`
`) : " " + eh(r[0]) : "as no adapter specified";
      throw new H(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: yr
};
function Ls(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new yi(null, i);
}
function ih(i) {
  return Ls(i), i.headers = Mt.from(i.headers), i.data = Ss.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), dc.getAdapter(i.adapter || en.adapter)(i).then(function(t) {
    return Ls(i), t.data = Ss.call(
      i,
      i.transformResponse,
      t
    ), t.headers = Mt.from(t.headers), t;
  }, function(t) {
    return rc(t) || (Ls(i), t && t.response && (t.response.data = Ss.call(
      i,
      i.transformResponse,
      t.response
    ), t.response.headers = Mt.from(t.response.headers))), Promise.reject(t);
  });
}
const uc = "1.9.0", ls = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, t) => {
  ls[i] = function(e) {
    return typeof e === i || "a" + (t < 1 ? "n " : " ") + i;
  };
});
const nh = {};
ls.transitional = function(i, t, e) {
  function n(s, r) {
    return "[Axios v" + uc + "] Transitional option '" + s + "'" + r + (e ? ". " + e : "");
  }
  return (s, r, a) => {
    if (i === !1)
      throw new H(
        n(r, " has been removed" + (t ? " in " + t : "")),
        H.ERR_DEPRECATED
      );
    return t && !nh[r] && (nh[r] = !0, console.warn(
      n(
        r,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), i ? i(s, r, a) : !0;
  };
};
ls.spelling = function(i) {
  return (t, e) => (console.warn(`${e} is likely a misspelling of ${i}`), !0);
};
function Am(i, t, e) {
  if (typeof i != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(i);
  let s = n.length;
  for (; s-- > 0; ) {
    const r = n[s], a = t[r];
    if (a) {
      const o = i[r], h = o === void 0 || a(o, r, i);
      if (h !== !0)
        throw new H("option " + r + " must be " + h, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new H("Unknown option " + r, H.ERR_BAD_OPTION);
  }
}
const Tn = {
  assertOptions: Am,
  validators: ls
}, Wt = Tn.validators;
let Oe = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new Vo(),
      response: new Vo()
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
  async request(i, t) {
    try {
      return await this._request(i, t);
    } catch (e) {
      if (e instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const s = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          e.stack ? s && !String(e.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (e.stack += `
` + s) : e.stack = s;
        } catch {
        }
      }
      throw e;
    }
  }
  _request(i, t) {
    typeof i == "string" ? (t = t || {}, t.url = i) : t = i || {}, t = $e(this.defaults, t);
    const { transitional: e, paramsSerializer: n, headers: s } = t;
    e !== void 0 && Tn.assertOptions(e, {
      silentJSONParsing: Wt.transitional(Wt.boolean),
      forcedJSONParsing: Wt.transitional(Wt.boolean),
      clarifyTimeoutError: Wt.transitional(Wt.boolean)
    }, !1), n != null && (N.isFunction(n) ? t.paramsSerializer = {
      serialize: n
    } : Tn.assertOptions(n, {
      encode: Wt.function,
      serialize: Wt.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Tn.assertOptions(t, {
      baseUrl: Wt.spelling("baseURL"),
      withXsrfToken: Wt.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let r = s && N.merge(
      s.common,
      s[t.method]
    );
    s && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete s[f];
      }
    ), t.headers = Mt.concat(r, s);
    const a = [];
    let o = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(t) === !1 || (o = o && f.synchronous, a.unshift(f.fulfilled, f.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(f) {
      h.push(f.fulfilled, f.rejected);
    });
    let l, c = 0, d;
    if (!o) {
      const f = [ih.bind(this), void 0];
      for (f.unshift.apply(f, a), f.push.apply(f, h), d = f.length, l = Promise.resolve(t); c < d; )
        l = l.then(f[c++], f[c++]);
      return l;
    }
    d = a.length;
    let g = t;
    for (c = 0; c < d; ) {
      const f = a[c++], m = a[c++];
      try {
        g = f(g);
      } catch (v) {
        m.call(this, v);
        break;
      }
    }
    try {
      l = ih.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, d = h.length; c < d; )
      l = l.then(h[c++], h[c++]);
    return l;
  }
  getUri(i) {
    i = $e(this.defaults, i);
    const t = oc(i.baseURL, i.url, i.allowAbsoluteUrls);
    return ic(t, i.params, i.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(i) {
  Oe.prototype[i] = function(t, e) {
    return this.request($e(e || {}, {
      method: i,
      url: t,
      data: (e || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(i) {
  function t(e) {
    return function(n, s, r) {
      return this.request($e(r || {}, {
        method: i,
        headers: e ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: s
      }));
    };
  }
  Oe.prototype[i] = t(), Oe.prototype[i + "Form"] = t(!0);
});
let Dm = class fc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(s) {
      e = s;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let r = n._listeners.length;
      for (; r-- > 0; )
        n._listeners[r](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let r;
      const a = new Promise((o) => {
        n.subscribe(o), r = o;
      }).then(s);
      return a.cancel = function() {
        n.unsubscribe(r);
      }, a;
    }, t(function(s, r, a) {
      n.reason || (n.reason = new yi(s, r, a), e(n.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(t);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), e = (n) => {
      t.abort(n);
    };
    return this.subscribe(e), t.signal.unsubscribe = () => this.unsubscribe(e), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new fc(function(e) {
        t = e;
      }),
      cancel: t
    };
  }
};
function Om(i) {
  return function(t) {
    return i.apply(null, t);
  };
}
function Rm(i) {
  return N.isObject(i) && i.isAxiosError === !0;
}
const _r = {
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
Object.entries(_r).forEach(([i, t]) => {
  _r[t] = i;
});
function pc(i) {
  const t = new Oe(i), e = Gl(Oe.prototype.request, t);
  return N.extend(e, Oe.prototype, t, { allOwnKeys: !0 }), N.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(n) {
    return pc($e(i, n));
  }, e;
}
const ot = pc(en);
ot.Axios = Oe;
ot.CanceledError = yi;
ot.CancelToken = Dm;
ot.isCancel = rc;
ot.VERSION = uc;
ot.toFormData = os;
ot.AxiosError = H;
ot.Cancel = ot.CanceledError;
ot.all = function(i) {
  return Promise.all(i);
};
ot.spread = Om;
ot.isAxiosError = Rm;
ot.mergeConfig = $e;
ot.AxiosHeaders = Mt;
ot.formToJSON = (i) => sc(N.isHTMLForm(i) ? new FormData(i) : i);
ot.getAdapter = dc.getAdapter;
ot.HttpStatusCode = _r;
ot.default = ot;
const {
  Axios: Zm,
  AxiosError: Jm,
  CanceledError: Qm,
  isCancel: tg,
  CancelToken: eg,
  VERSION: ig,
  all: ng,
  Cancel: sg,
  isAxiosError: rg,
  spread: ag,
  toFormData: og,
  AxiosHeaders: hg,
  HttpStatusCode: lg,
  formToJSON: cg,
  getAdapter: dg,
  mergeConfig: ug
} = ot, Im = {
  baseURL: "https://api.polyv.net/ai-public",
  timeout: 3e4,
  signatureMethod: "MD5"
};
class _i {
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
  constructor(t) {
    if (!t)
      throw new Error("配置对象是必需的");
    if (!t.getSignature && (!t.appId || !t.appSecret))
      throw new Error("必须提供 getSignature 函数或者 appId 和 appSecret");
    this.config = {
      ...Im,
      ...t
    }, this.httpClient = ot.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        "Content-Type": "application/json"
      }
    }), this.httpClient.interceptors.response.use(
      (e) => e.data,
      (e) => {
        var n, s;
        const r = {
          message: e.message,
          status: "fail",
          code: ((n = e.response) == null ? void 0 : n.status) || 500,
          data: null
        };
        return (s = e.response) != null && s.data ? Promise.resolve(e.response.data) : Promise.resolve(r);
      }
    );
  }
  /**
   * 构建请求参数（添加签名）
   * @param {Object} params - 请求参数
   * @returns {Promise<Object>} 包含签名的参数对象
   */
  async buildRequestParams(t) {
    if (t.appId = t.appId || this.config.appId, t.timestamp = t.timestamp || Date.now(), this.config.getSignature && typeof this.config.getSignature == "function")
      try {
        const n = await this.config.getSignature(t);
        return {
          ...t,
          sign: n
        };
      } catch (n) {
        throw new Error(`获取签名失败: ${n.message}, 参数: ${JSON.stringify(t)}`);
      }
    const e = {
      ...t
    };
    return la(e, this.config.appSecret, this.config.signatureMethod);
  }
  /**
   * 根据视频ID获取推荐问题
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应
   */
  async getSuggestQuestionsByVid(t) {
    if (!t || !t.vid)
      return {
        message: "vid 参数是必需的",
        status: "fail",
        code: 400,
        data: null
      };
    const { vid: e, size: n, appId: s } = t;
    if (typeof e != "string" || e.length === 0 || e.length > 100)
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
      const r = await this.buildRequestParams({ vid: e, ...n !== void 0 && { size: n }, ...s !== void 0 && { appId: s }, timestamp: Date.now() });
      return console.log("getSuggestQuestionsByVid", r), await this.httpClient.get("/v1/knowledges/suggest-questions-by-vid", { params: r });
    } catch (r) {
      return {
        message: r.message || "请求失败",
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
  async getSummaryByVid(t) {
    if (!t || !t.vid)
      return {
        message: "vid 参数是必需的",
        status: "fail",
        code: 400,
        data: null
      };
    const { vid: e, appId: n } = t;
    if (typeof e != "string" || e.length === 0 || e.length > 100)
      return {
        message: "vid 长度必须在1-100字符之间",
        status: "fail",
        code: 400,
        data: null
      };
    try {
      const s = await this.buildRequestParams({ vid: e, appId: n, timestamp: Date.now() });
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
function mc(i) {
  return new _i(i);
}
async function gc(i, t) {
  return new _i(i).getSuggestQuestionsByVid(t);
}
async function vc(i, t) {
  return new _i(i).getSummaryByVid(t);
}
function cs(i, t = !1) {
  if (typeof i != "number" || i < 0)
    return t ? "00:00:00" : "00:00";
  const e = Math.floor(i / 3600), n = Math.floor(i % 3600 / 60), s = Math.floor(i % 60);
  return e > 0 || t ? `${e.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : `${n.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
function yc(i) {
  if (typeof i != "string")
    return 0;
  const t = i.split(":").map((e) => parseInt(e, 10));
  if (t.length === 2) {
    const [e, n] = t;
    return (e || 0) * 60 + (n || 0);
  } else if (t.length === 3) {
    const [e, n, s] = t;
    return (e || 0) * 3600 + (n || 0) * 60 + (s || 0);
  }
  return 0;
}
function _c(i, t) {
  return typeof i != "number" || typeof t != "number" ? 0 : Math.max(0, t - i);
}
function se(i) {
  if (!i) return null;
  if (i.includes(",") && (i = i.split(",")[0]), i.includes(".") && i.split(".").length === 2) {
    const t = i.split(".");
    t[1].length === 3 && (i = t[0]);
  }
  return /^\d{2}:\d{2}:\d{2}$/.test(i) || isNaN(i) ? i : cs(i, !0);
}
function zm(i) {
  return !i && i !== 0 ? null : typeof i == "string" && i.includes(":") ? i : cs(i, !0);
}
class Fm {
  constructor(t) {
    this.apiClient = new _i(t), this.cache = /* @__PURE__ */ new Map();
  }
  /**
   * 获取视频完整数据（摘要 + 推荐问题）
   * @param {string} vid - 视频ID
   * @param {Object} options - 选项
   * @returns {Promise<Object>} 处理后的视频数据
   */
  async getVideoData(t, e = {}) {
    const { useCache: n = !0, questionsSize: s = 10, appId: r } = e, a = `video_${t}`;
    if (n && this.cache.has(a))
      return this.cache.get(a);
    try {
      const [o, h] = await Promise.allSettled([
        this.apiClient.getSummaryByVid({ vid: t, appId: r }),
        this.apiClient.getSuggestQuestionsByVid({ vid: t, size: s, appId: r })
      ]), l = this.processApiResponses(o, h);
      return n && this.cache.set(a, l), l;
    } catch (o) {
      throw console.error("获取视频数据失败:", o), new Error(`获取视频数据失败: ${o.message}`);
    }
  }
  /**
   * 仅获取视频摘要
   * @param {Object} params.vid - 视频ID
   * @param {Object} params.appId - 应用ID
   * @returns {Promise<Object>} 摘要数据
   */
  async getVideoSummary(t) {
    try {
      const e = await this.apiClient.getSummaryByVid(t);
      if (e.status === "success")
        return this.processSummaryData(e.data);
      throw new Error(e.message || "获取摘要失败");
    } catch (e) {
      throw console.error("获取视频摘要失败:", e), e;
    }
  }
  /**
   * 仅获取推荐问题
   * @param {string} vid - 视频ID
   * @param {number} size - 问题数量
   * @param {Object} params.appId - 应用ID
   * @returns {Promise<Array>} 推荐问题列表
   */
  async getSuggestQuestions(t) {
    var e;
    try {
      const n = await this.apiClient.getSuggestQuestionsByVid(t);
      if (n.status === "success")
        return ((e = n.data) == null ? void 0 : e.questions) || [];
      throw new Error(n.message || "获取推荐问题失败");
    } catch (n) {
      throw console.error("获取推荐问题失败:", n), n;
    }
  }
  /**
   * 处理API响应结果
   * @private
   */
  processApiResponses(t, e) {
    var n, s, r;
    const a = {
      success: !1,
      videoData: null,
      outlineData: [],
      suggestQuestions: [],
      introduction: "",
      // 添加介绍字段
      errors: []
    };
    if (t.status === "fulfilled" && t.value.status === "success") {
      const o = this.processSummaryData(t.value.data);
      a.videoData = o.videoData, a.outlineData = o.outlineData, a.introduction = o.introduction, a.success = !0;
    } else {
      const o = t.reason || ((n = t.value) == null ? void 0 : n.message) || "获取摘要失败";
      a.errors.push(`摘要接口: ${o}`);
    }
    if (e.status === "fulfilled" && e.value.status === "success")
      a.suggestQuestions = ((s = e.value.data) == null ? void 0 : s.questions) || [], a.suggestQuestions = a.suggestQuestions.map((o) => ({
        ...o,
        startTime: se(o.startTime),
        endTime: se(o.endTime)
      }));
    else {
      const o = e.reason || ((r = e.value) == null ? void 0 : r.message) || "获取推荐问题失败";
      a.errors.push(`推荐问题接口: ${o}`);
    }
    return a;
  }
  /**
   * 处理摘要数据
   * @private
   */
  processSummaryData(t) {
    if (!t)
      throw new Error("摘要数据为空");
    const e = {
      title: t.title || "未知标题",
      host: t.host || t.author || "未知主持人",
      status: t.status || t.liveStatus || "已结束",
      viewers: t.viewers || t.viewCount || 0,
      duration: zm(t.duration) || "00:00:00",
      description: t.introduction || t.description || "",
      publishTime: t.publishTime || t.createTime || null
    };
    let n = [];
    return t.list && Array.isArray(t.list) ? n = t.list.map((s, r) => ({
      id: s.id || `outline_${r + 1}`,
      title: s.title || `分段 ${r + 1}`,
      startTime: se(s.startTime) || "00:00:00",
      endTime: se(s.endTime) || "00:00:00",
      summary: this.normalizeSummary(s.summary),
      keywords: s.keywords || []
    })) : t.outline && Array.isArray(t.outline) ? n = t.outline.map((s, r) => ({
      id: s.id || `outline_${r + 1}`,
      title: s.title || `分段 ${r + 1}`,
      startTime: se(s.startTime) || "00:00:00",
      endTime: se(s.endTime) || "00:00:00",
      summary: this.normalizeSummary(s.summary),
      keywords: s.keywords || []
    })) : t.segments && Array.isArray(t.segments) && (n = t.segments.map((s, r) => ({
      id: s.id || `segment_${r + 1}`,
      title: s.title || `分段 ${r + 1}`,
      startTime: se(s.start) || "00:00:00",
      endTime: se(s.end) || "00:00:00",
      summary: this.normalizeSummary(s.summary),
      keywords: s.keywords || []
    }))), {
      videoData: e,
      outlineData: n,
      introduction: t.introduction || ""
    };
  }
  /**
   * 清除缓存
   */
  clearCache(t = null) {
    t ? this.cache.delete(`video_${t}`) : this.cache.clear();
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
  normalizeSummary(t) {
    return t ? Array.isArray(t) ? t.length === 0 ? "" : t.map((e, n) => {
      if (typeof e == "string")
        return e.trim();
      if (typeof e == "object" && e !== null) {
        const s = e.text || e.content || e.summary || e.description || "";
        return String(s).trim();
      } else
        return String(e).trim();
    }).filter((e) => e.length > 0).map((e, n) => `${n + 1}. ${e}`).join(`
`) : (console.warn("Expected summary to be an array, but got:", typeof t, t), String(t)) : "";
  }
}
function xc(i) {
  return new Fm(i);
}
const wc = {
  baseURL: "https://api.polyv.net/ai-public",
  timeout: 3e4,
  signatureMethod: "MD5"
}, sh = {
  // 签名工具
  generateMD5Sign: ha,
  generateSign: is,
  verifySign: Ul,
  addSignToParams: la,
  generateNonce: jl,
  // API工具
  VodAiApiClient: _i,
  createApiClient: mc,
  getSuggestQuestionsByVid: gc,
  getSummaryByVid: vc,
  // 服务层
  createVideoService: xc,
  DEFAULT_API_CONFIG: wc,
  // 时间工具
  formatTime: cs,
  parseTime: yc,
  calculateDuration: _c
}, km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_API_CONFIG: wc,
  VodAiApiClient: _i,
  addSignToParams: la,
  calculateDuration: _c,
  createApiClient: mc,
  createVideoService: xc,
  default: sh,
  formatTime: cs,
  generateMD5Sign: ha,
  generateNonce: jl,
  generateSign: is,
  getSuggestQuestionsByVid: gc,
  getSummaryByVid: vc,
  outlineLogic: sh,
  parseTime: yc,
  verifySign: Ul
}, Symbol.toStringTag, { value: "Module" })), Pm = {
  playerHeight: 400,
  defaultActiveTab: "outline",
  showIntroduction: !0
}, Ec = "vod-ai-outline-default-styles";
class Yt extends Error {
  constructor(t, e = "GENERAL") {
    super(t), this.name = "IntegratorError", this.type = e;
  }
}
class Cc {
  constructor() {
    this.instances = /* @__PURE__ */ new Map(), this.initialized = !1;
  }
  /**
   * 初始化智能大纲
   * @param {Object} config 配置对象
   * @returns {Promise<Object>} 返回实例对象
   */
  async init(t) {
    var e;
    try {
      const n = this._validateAndNormalizeConfig(t), s = this._getContainer(n), r = await this._loadLogicService(n.api, n.getSignature), a = this._createVueInstance(s, n, r), o = this._generateInstanceId(n);
      return this.instances.set(o, a), this._createInstanceWrapper(o, a, r);
    } catch (n) {
      throw this._handleError(n, (e = t.callbacks) == null ? void 0 : e.onError), n;
    }
  }
  /**
   * 验证和标准化配置
   * @private
   */
  _validateAndNormalizeConfig(t) {
    if (!t || typeof t != "object")
      throw new Yt("配置对象不能为空", "CONFIG_INVALID");
    if (!t.containerId && !t.containerClass)
      throw new Yt("必须指定containerId或containerClass", "CONTAINER_MISSING");
    if (!t.api || typeof t.api != "object")
      throw new Yt("必须提供API配置", "API_CONFIG_MISSING");
    console.log("config.api", t.api);
    const { appId: e, appSecret: n } = t.api;
    if ((!e || !n) && typeof t.getSignature != "function")
      throw new Yt("未提供appId/appSecret时，必须提供getSignature签名函数", "API_CREDENTIALS_OR_SIGNATURE_MISSING");
    if (typeof t.getSignature < "u" && typeof t.getSignature != "function")
      throw new Yt("getSignature必须是一个函数", "SIGN_FUNCTION_INVALID");
    return {
      ...t,
      options: {
        ...Pm,
        ...t.options
      },
      callbacks: t.callbacks || {}
    };
  }
  /**
   * 获取目标容器
   * @private
   */
  _getContainer(t) {
    const { containerId: e, containerClass: n } = t;
    let s;
    if (e) {
      if (s = document.getElementById(e), !s)
        throw new Yt(`找不到ID为"${e}"的容器元素`, "CONTAINER_NOT_FOUND");
    } else if (s = document.querySelector(`.${n}`), !s)
      throw new Yt(`找不到class为"${n}"的容器元素`, "CONTAINER_NOT_FOUND");
    return s;
  }
  /**
   * 加载logic服务
   * @private
   */
  async _loadLogicService(t, e) {
    try {
      return this._createLogicService(km, t, e);
    } catch (n) {
      console.warn("Logic服务初始化失败:", n);
    }
  }
  /**
   * 创建logic服务实例
   * @private
   */
  _createLogicService(t, e, n) {
    if (!(t != null && t.createVideoService))
      throw new Error("Logic库不包含createVideoService方法");
    return t.createVideoService({
      ...e,
      getSignature: n
    });
  }
  /**
   * 创建Vue实例
   * @private
   */
  _createVueInstance(t, e, n) {
    if (!rt)
      throw new Yt("Vue未找到，请确保Vue已正确加载", "VUE_NOT_FOUND");
    const s = this._prepareContainer(t), r = this._createVueConfig(e, n);
    return new rt({
      el: s,
      ...r
    });
  }
  /**
   * 准备容器
   * @private
   */
  _prepareContainer(t) {
    t.innerHTML = "";
    const e = document.createElement("div");
    return e.className = "vod-ai-outline-vue-root", t.appendChild(e), e;
  }
  /**
   * 创建Vue配置
   * @private
   */
  _createVueConfig(t, e) {
    return {
      components: {
        "ai-outline-panel": oa
      },
      data: () => ({
        loading: !1,
        error: null,
        outlineData: [],
        suggestQuestions: [],
        introduction: "",
        videoData: null,
        lastVideoId: null,
        config: { ...t.options }
      }),
      render: this._createRenderFunction(),
      methods: this._createVueMethods(t, e)
    };
  }
  /**
   * 创建渲染函数
   * @private
   */
  _createRenderFunction() {
    return function(t) {
      return this.error ? this._renderError(t) : this.outlineData.length > 0 ? this._renderOutlinePanel(t) : t("div");
    };
  }
  /**
   * 创建Vue方法
   * @private
   */
  _createVueMethods(t, e) {
    return {
      async loadVideoData(n, s = {}) {
        var r;
        if (!n)
          throw new Yt("视频ID不能为空", "VIDEO_ID_MISSING");
        this.loading = !0, this.error = null, this.lastVideoId = n;
        try {
          const a = await e.getVideoData(n, s);
          this._handleVideoDataResult(a);
        } catch (a) {
          this._handleVideoDataError(a, (r = t.callbacks) == null ? void 0 : r.onError);
        } finally {
          this.loading = !1;
        }
      },
      updateConfig(n) {
        n && typeof n == "object" && Object.assign(this.config, n);
      },
      retry() {
        this.lastVideoId ? this.loadVideoData(this.lastVideoId) : this.error = null;
      },
      _handleVideoDataResult(n) {
        if (n != null && n.success)
          this.outlineData = n.outlineData || [], this.suggestQuestions = n.suggestQuestions || [], this.introduction = n.introduction || "", this.videoData = n.videoData || null;
        else
          throw new Yt((n == null ? void 0 : n.message) || "获取视频数据失败", "API_ERROR");
      },
      _handleVideoDataError(n, s) {
        console.error("加载视频数据失败:", n), this.error = n.message || "加载失败", s && s(n);
      },
      _renderError(n) {
        return n("div", { class: "error-overlay" }, [
          n("p", { class: "error-message" }, this.error),
          n("button", {
            class: "retry-button",
            on: { click: this.retry }
          }, "重试")
        ]);
      },
      _renderOutlinePanel(n) {
        return n("ai-outline-panel", {
          props: {
            "outline-data": this.outlineData,
            "suggest-questions": this.suggestQuestions,
            introduction: this.introduction,
            "default-active-tab": this.config.defaultActiveTab,
            "player-height": this.config.playerHeight
          },
          on: {
            "tab-change": (s) => {
              var r, a;
              return (a = (r = t.callbacks) == null ? void 0 : r.onTabChange) == null ? void 0 : a.call(r, s);
            },
            "segment-click": (s) => {
              var r, a;
              return (a = (r = t.callbacks) == null ? void 0 : r.onSegmentClick) == null ? void 0 : a.call(r, s);
            },
            "time-click": (s) => {
              var r, a;
              return (a = (r = t.callbacks) == null ? void 0 : r.onTimeClick) == null ? void 0 : a.call(r, s);
            }
          }
        });
      }
    };
  }
  /**
   * 生成实例ID
   * @private
   */
  _generateInstanceId(t) {
    return t.containerId || t.containerClass || "default";
  }
  /**
   * 创建实例包装器
   * @private
   */
  _createInstanceWrapper(t, e, n) {
    return {
      id: t,
      instance: e,
      logicService: n,
      loadVideoData: (s, r) => e.loadVideoData(s, r),
      updateConfig: (s) => e.updateConfig(s),
      destroy: () => this.destroy(t)
    };
  }
  /**
   * 处理错误
   * @private
   */
  _handleError(t, e) {
    console.error("VodAiOutlineIntegrator错误:", t), e && e(t);
  }
  /**
   * 添加默认样式
   * @private
   */
  _addDefaultStyles() {
    const t = document.createElement("style");
    t.id = Ec, t.textContent = `
      .vod-ai-outline-vue-root {
        width: 100%;
        height: 100%;
        position: relative;
      }
      
      .loading-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        text-align: center;
      }
      
      .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #3498db;
        border-radius: 50%;
        animation: vod-ai-outline-spin 1s linear infinite;
        margin-bottom: 16px;
      }
      
      @keyframes vod-ai-outline-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .error-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        text-align: center;
      }
      
      .error-message {
        color: #e74c3c;
        margin-bottom: 16px;
        line-height: 1.5;
      }
      
      .retry-button {
        background: #3498db;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s ease;
      }
      
      .retry-button:hover {
        background: #2980b9;
      }
      
      .retry-button:active {
        transform: translateY(1px);
      }
    `, document.head.appendChild(t);
  }
  /**
   * 销毁指定实例
   */
  destroy(t) {
    const e = this.instances.get(t);
    if (e)
      try {
        return e.$destroy(), this.instances.delete(t), !0;
      } catch (n) {
        return console.error("销毁实例失败:", n), !1;
      }
    return !1;
  }
  /**
   * 销毁所有实例
   */
  destroyAll() {
    let t = 0;
    return this.instances.forEach((e, n) => {
      this.destroy(n) && t++;
    }), t;
  }
  /**
   * 获取实例信息
   */
  getInstanceInfo(t) {
    var n;
    const e = this.instances.get(t);
    return e ? {
      id: t,
      exists: !0,
      hasData: ((n = e.outlineData) == null ? void 0 : n.length) > 0,
      loading: e.loading,
      error: e.error
    } : { id: t, exists: !1 };
  }
  /**
   * 获取所有实例信息
   */
  getAllInstances() {
    const t = [];
    return this.instances.forEach((e, n) => {
      t.push(this.getInstanceInfo(n));
    }), t;
  }
}
const Me = new Cc();
if (typeof document < "u") {
  const i = () => {
    document.getElementById(Ec) || Me._addDefaultStyles();
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i) : i();
}
const Bm = () => ({
  /**
   * 初始化智能大纲
   */
  async init(i) {
    return await Me.init(i);
  },
  /**
   * 快速创建智能大纲（使用ID选择器）
   */
  async createById(i, t, e, n = {}) {
    return await Me.init({
      containerId: i,
      api: t,
      getSignature: e,
      options: n,
      callbacks: n.callbacks
    });
  },
  /**
   * 快速创建智能大纲（使用class选择器）
   */
  async createByClass(i, t, e, n = {}) {
    return await Me.init({
      containerClass: i,
      api: t,
      getSignature: e,
      options: n,
      callbacks: n.callbacks
    });
  },
  /**
   * 销毁实例
   */
  destroy(i) {
    Me.destroy(i);
  },
  /**
   * 销毁所有实例
   */
  destroyAll() {
    Me.destroyAll();
  },
  /**
   * 获取版本信息
   */
  version: "1.0.0"
}), $m = () => {
  typeof window < "u" && (window.VodAiOutline = Bm(), console.log("VodAiOutline 全局API已加载 v" + window.VodAiOutline.version));
}, Hm = [
  oa
], xr = function(i) {
  xr.installed || (xr.installed = !0, Hm.forEach((t) => {
    i.component(t.name, t);
  }));
};
$m();
const fg = {
  install: xr,
  AIOutlinePanel: oa,
  integrator: Me,
  VodAiOutlineIntegrator: Cc
};
export {
  oa as AIOutlinePanel,
  Cc as VodAiOutlineIntegrator,
  fg as default,
  xr as install,
  Me as integrator
};
//# sourceMappingURL=index.es.js.map
