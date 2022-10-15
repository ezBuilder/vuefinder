import { ref as T, watch as Oe, inject as L, openBlock as x, createElementBlock as C, createElementVNode as d, unref as S, normalizeClass as mt, createTextVNode as st, toDisplayString as D, createCommentVNode as K, createVNode as Dt, TransitionGroup as wo, withCtx as W, Fragment as lt, renderList as St, reactive as Me, onMounted as Ct, onUpdated as xo, withDirectives as xt, vShow as Se, withModifiers as Kt, nextTick as Le, isRef as Gr, vModelSelect as Cr, customRef as So, withKeys as ie, vModelText as ne, normalizeStyle as Jr, provide as Zt, createBlock as F, resolveDynamicComponent as _o, renderSlot as We } from "vue";
import ze from "plupload";
var Fr;
const $e = (Fr = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Fr.getAttribute("content"), Ee = (e, { method: t = "get", params: r = {}, json: s = !0, signal: a = null }) => {
  const i = { method: t };
  if (i.signal = a, t == "get")
    e += "?" + new URLSearchParams(r);
  else {
    i.headers = {}, $e && (i.headers["X-CSRF-Token"] = $e);
    let l = new FormData();
    for (const [f, v] of Object.entries(r))
      l.append(f, v);
    i.body = l;
  }
  return fetch(e, i).then((l) => l.ok ? s ? l.json() : l.text() : l.json().then(Promise.reject.bind(Promise)));
};
function ko(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var s = e.get(t);
    s ? s.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var s = e.get(t);
    s && (r ? s.splice(s.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var s = e.get(t);
    s && s.slice().map(function(a) {
      a(r);
    }), (s = e.get("*")) && s.slice().map(function(a) {
      a(t, r);
    });
  } };
}
function Ye(e) {
  let t = localStorage.getItem(e + "_storage");
  const r = T(JSON.parse(t));
  Oe(r, s);
  function s() {
    r.value === null || r.value === "" ? localStorage.removeItem(e + "_storage") : localStorage.setItem(e + "_storage", JSON.stringify(r.value));
  }
  function a(f, v) {
    r.value = Object.assign({ ...r.value }, { [f]: v });
  }
  function i() {
    r.value = null;
  }
  return { getStore: (f, v = null) => r.value === null || r.value === "" ? v : r.value.hasOwnProperty(f) ? r.value[f] : v, setStore: a, clearStore: i };
}
const Mr = T("");
function At() {
  function e(t) {
    Mr.value = t;
  }
  return { apiUrl: Mr, setApiUrl: e };
}
const Do = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Co = {
  key: 0,
  class: "flex text-center"
}, Mo = ["aria-label"], $o = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Eo = [
  $o
], Ao = ["aria-label"], To = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Oo = [
  To
], Lo = ["aria-label"], Io = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Po = [
  Io
], No = ["aria-label"], jo = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), Vo = [
  jo
], Ho = {
  key: 1,
  class: "flex text-center"
}, Ro = { class: "pl-2" }, zo = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, Bo = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Uo = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ko = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Wo = [
  Uo,
  Ko
], Yo = { class: "flex text-center items-center justify-end" }, Xo = ["aria-label"], qo = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, Fo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, Go = {
  name: "VFToolbar"
}, Jo = /* @__PURE__ */ Object.assign(Go, {
  props: {
    data: Object
  },
  setup(e) {
    const t = L("emitter"), { getStore: r, setStore: s } = L("storage"), { t: a } = L("i18n"), i = T(r("viewport", "grid")), l = T([]);
    T(r("full-screen", !1));
    const f = T("");
    t.on("vf-search-query", ({ newQuery: h }) => {
      f.value = h;
    });
    const v = L("loadingState"), p = () => v.value;
    return t.on("vf-nodes-selected", (h) => {
      l.value = h;
    }), t.on("vf-view-toggle", (h) => {
      s("viewport", h), i.value = h;
    }), (h, m) => (x(), C("div", Do, [
      f.value.length ? (x(), C("div", Ho, [
        d("div", Ro, [
          st(D(S(a)("Search results for")) + " ", 1),
          d("span", zo, D(f.value), 1)
        ]),
        p() ? (x(), C("svg", Bo, Wo)) : K("", !0)
      ])) : (x(), C("div", Co, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: m[0] || (m[0] = (y) => S(t).emit("vf-modal-show", {
            type: "new-folder",
            items: l.value
          }))
        }, Eo, 8, Mo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: m[1] || (m[1] = (y) => l.value.length != 1 || S(t).emit("vf-modal-show", {
            type: "rename",
            items: l.value
          }))
        }, [
          (x(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: mt([
              l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Oo, 2))
        ], 8, Ao),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: m[2] || (m[2] = (y) => !l.value.length || S(t).emit("vf-modal-show", {
            type: "delete",
            items: l.value
          }))
        }, [
          (x(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: mt([
              l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Po, 2))
        ], 8, Lo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: m[3] || (m[3] = (y) => S(t).emit("vf-modal-show", {
            type: "upload",
            items: l.value
          }))
        }, Vo, 8, No)
      ])),
      d("div", Yo, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: m[4] || (m[4] = (y) => f.value.length || S(t).emit("vf-view-toggle", i.value == "list" ? "grid" : "list"))
        }, [
          (x(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: mt([
              f.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            i.value == "grid" ? (x(), C("path", qo)) : K("", !0),
            i.value == "list" ? (x(), C("path", Fo)) : K("", !0)
          ], 2))
        ], 8, Xo)
      ])
    ]));
  }
});
var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zr = { exports: {} };
(function(e, t) {
  (function(r, s) {
    e.exports = s();
  })(Zo, function() {
    function r(u, c) {
      if (!(u instanceof c))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(u, c) {
      for (var o = 0; o < c.length; o++) {
        var b = c[o];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(u, b.key, b);
      }
    }
    function a(u, c, o) {
      return c && s(u.prototype, c), o && s(u, o), u;
    }
    function i(u, c, o) {
      return c in u ? Object.defineProperty(u, c, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : u[c] = o, u;
    }
    function l(u, c) {
      var o = Object.keys(u);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(u);
        c && (b = b.filter(function(n) {
          return Object.getOwnPropertyDescriptor(u, n).enumerable;
        })), o.push.apply(o, b);
      }
      return o;
    }
    function f(u) {
      for (var c = 1; c < arguments.length; c++) {
        var o = arguments[c] != null ? arguments[c] : {};
        c % 2 ? l(Object(o), !0).forEach(function(b) {
          i(u, b, o[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach(function(b) {
          Object.defineProperty(u, b, Object.getOwnPropertyDescriptor(o, b));
        });
      }
      return u;
    }
    function v(u, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Super expression must either be null or a function");
      u.prototype = Object.create(c && c.prototype, {
        constructor: {
          value: u,
          writable: !0,
          configurable: !0
        }
      }), c && h(u, c);
    }
    function p(u) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, p(u);
    }
    function h(u, c) {
      return h = Object.setPrototypeOf || function(b, n) {
        return b.__proto__ = n, b;
      }, h(u, c);
    }
    function m() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function y(u, c, o) {
      return m() ? y = Reflect.construct : y = function(n, g, w) {
        var M = [null];
        M.push.apply(M, g);
        var j = Function.bind.apply(n, M), X = new j();
        return w && h(X, w.prototype), X;
      }, y.apply(null, arguments);
    }
    function A(u) {
      return Function.toString.call(u).indexOf("[native code]") !== -1;
    }
    function _(u) {
      var c = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return _ = function(b) {
        if (b === null || !A(b))
          return b;
        if (typeof b != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof c < "u") {
          if (c.has(b))
            return c.get(b);
          c.set(b, n);
        }
        function n() {
          return y(b, arguments, p(this).constructor);
        }
        return n.prototype = Object.create(b.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), h(n, b);
      }, _(u);
    }
    function $(u) {
      if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return u;
    }
    function I(u, c) {
      return c && (typeof c == "object" || typeof c == "function") ? c : $(u);
    }
    function R(u) {
      var c = m();
      return function() {
        var b = p(u), n;
        if (c) {
          var g = p(this).constructor;
          n = Reflect.construct(b, arguments, g);
        } else
          n = b.apply(this, arguments);
        return I(this, n);
      };
    }
    function H(u, c) {
      for (; !Object.prototype.hasOwnProperty.call(u, c) && (u = p(u), u !== null); )
        ;
      return u;
    }
    function O(u, c, o) {
      return typeof Reflect < "u" && Reflect.get ? O = Reflect.get : O = function(n, g, w) {
        var M = H(n, g);
        if (!!M) {
          var j = Object.getOwnPropertyDescriptor(M, g);
          return j.get ? j.get.call(w) : j.value;
        }
      }, O(u, c, o || u);
    }
    function B(u, c) {
      return N(u) || ot(u, c) || it(u, c) || bt();
    }
    function z(u) {
      return k(u) || G(u) || it(u) || yt();
    }
    function k(u) {
      if (Array.isArray(u))
        return dt(u);
    }
    function N(u) {
      if (Array.isArray(u))
        return u;
    }
    function G(u) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(u))
        return Array.from(u);
    }
    function ot(u, c) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(u)))) {
        var o = [], b = !0, n = !1, g = void 0;
        try {
          for (var w = u[Symbol.iterator](), M; !(b = (M = w.next()).done) && (o.push(M.value), !(c && o.length === c)); b = !0)
            ;
        } catch (j) {
          n = !0, g = j;
        } finally {
          try {
            !b && w.return != null && w.return();
          } finally {
            if (n)
              throw g;
          }
        }
        return o;
      }
    }
    function it(u, c) {
      if (!!u) {
        if (typeof u == "string")
          return dt(u, c);
        var o = Object.prototype.toString.call(u).slice(8, -1);
        if (o === "Object" && u.constructor && (o = u.constructor.name), o === "Map" || o === "Set")
          return Array.from(u);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return dt(u, c);
      }
    }
    function dt(u, c) {
      (c == null || c > u.length) && (c = u.length);
      for (var o = 0, b = new Array(c); o < c; o++)
        b[o] = u[o];
      return b;
    }
    function yt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function bt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var J = function(c, o, b) {
      var n = c.x, g = c.y, w = b.x, M = b.y, j = {
        "+": {
          x: n + w,
          y: g + M
        },
        "-": {
          x: n - w,
          y: g - M
        },
        "*": {
          x: n * w,
          y: g * M
        },
        "/": {
          x: n / w,
          y: g / M
        }
      };
      return j[o];
    }, E = function(c) {
      return {
        x: c.left,
        y: c.top
      };
    }, V = function(c) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: c.x,
        top: c.y,
        right: c.x,
        bottom: c.y,
        width: o,
        height: o
      };
    }, P = function(c) {
      return {
        x: c,
        y: c
      };
    }, ct = function(u, c, o) {
      window.addEventListener("resize", c), window.addEventListener("scroll", c), u.forEach(function(b, n) {
        o.observe(b, {
          childList: n !== 0,
          attributes: !0
        });
      });
    }, q = function(u) {
      var c = Gt(u);
      return c.x || c.y ? !0 : u instanceof HTMLDocument ? u.body ? !!(u.body.scrollTop = 1) : !!(u.documentElement.scrollTop = 1) : !!(u.scrollTop = 1);
    }, ht = function() {
      var u = document.createElement("div");
      return u.style.position = "fixed", u.style.overflow = "hidden", u.style.pointerEvents = "none", u.style.zIndex = "999999999999999999", u;
    }, tt = function(u) {
      var c = document.createElement("div");
      return c.style.position = "absolute", u || (c.style.background = "rgba(0, 0, 255, 0.1)", c.style.border = "1px solid rgba(0, 0, 255, 0.45)", c.style.display = "none", c.style.pointerEvents = "none"), c;
    }, xe = function(u, c) {
      var o;
      return function() {
        for (var b = arguments.length, n = new Array(b), g = 0; g < b; g++)
          n[g] = arguments[g];
        var w = function() {
          o = null, u.apply(void 0, n);
        };
        clearTimeout(o), o = setTimeout(w, c);
      };
    }, Ft = function() {
      var u, c, o, b;
      return {
        y: ((u = document.body) === null || u === void 0 ? void 0 : u.scrollTop) || ((c = document.documentElement) === null || c === void 0 ? void 0 : c.scrollTop) || 0,
        x: ((o = document.body) === null || o === void 0 ? void 0 : o.scrollLeft) || ((b = document.documentElement) === null || b === void 0 ? void 0 : b.scrollLeft) || 0
      };
    }, He = function(u, c) {
      if (u instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var o = u.getBoundingClientRect();
      return {
        top: o.top,
        left: o.left,
        bottom: o.bottom,
        right: o.right,
        width: (u.clientWidth || o.width) * c,
        height: (u.clientHeight || o.height) * c
      };
    }, Gt = function(u) {
      return !u || u instanceof Document ? Ft() : {
        x: u.scrollLeft >= 0 ? u.scrollLeft : Ft().x,
        y: u.scrollTop >= 0 ? u.scrollTop : Ft().y
      };
    }, wr = function(u) {
      var c = u.elementRect, o = u.containerRect, b = u.tolerance, n = b === void 0 ? {
        x: 0,
        y: 0
      } : b, g = [];
      return c.top - n.y < o.top && g.push("top"), c.left - n.x < o.left && g.push("left"), c.bottom + n.y > o.bottom && g.push("bottom"), c.right + n.y > o.right && g.push("right"), g;
    }, Ks = function(u) {
      var c = u.event;
      return {
        x: c.clientX,
        y: c.clientY
      };
    }, Ws = function(u) {
      var c = u.scrollAmount, o = u.initialPointerPos, b = u.pointerPos, n = {};
      return b.x > o.x - c.x ? (n.left = o.x - c.x, n.width = b.x - o.x + c.x) : (n.left = b.x, n.width = o.x - b.x - c.x), b.y > o.y - c.y ? (n.top = o.y - c.y, n.height = b.y - o.y + c.y) : (n.top = b.y, n.height = o.y - b.y - c.y), n;
    }, xr = function(c) {
      var o = {
        x: 0,
        y: 0
      }, b = window.getComputedStyle(c);
      if (!b.transform || b.transform === "none")
        return o;
      if (b.transform.indexOf("3d") >= 0) {
        var n = b.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var g, w = (g = n[1]) === null || g === void 0 ? void 0 : g.split(",");
          o.x = parseInt(w[12]) || 0, o.y = parseInt(w[13]) || 0;
        }
        return o;
      } else {
        var M = b.transform.trim().match(/matrix\((.*?)\)/);
        if (M && M.length) {
          var j, X = (j = M[1]) === null || j === void 0 ? void 0 : j.split(",");
          o.x = parseInt(X[4]) || 0, o.y = parseInt(X[5]) || 0;
        }
        return o;
      }
    }, Ys = function(c) {
      var o = c.style.transform;
      if (!o || o.indexOf("translate") < 0)
        return xr(c);
      var b = {
        x: 0,
        y: 0
      }, n = o.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var g, w = (g = n[0]) === null || g === void 0 ? void 0 : g.split("(");
        if (w) {
          var M, j = (M = w[1]) === null || M === void 0 ? void 0 : M.split(",");
          b.x = parseInt(j[0]) || 0, b.y = parseInt(j[1]) || 0;
        }
      }
      return !b.x && !b.x ? xr(c) : b;
    }, Xs = function(c) {
      var o = c.style, b = {
        x: parseInt(o.left) || 0,
        y: parseInt(o.top) || 0
      };
      if (!b.x && !b.x) {
        var n = window.getComputedStyle(c);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return b;
    }, qs = function(u, c) {
      return c ? Ys(u) : Xs(u);
    }, Fs = function(u) {
      var c = u.element, o = u.edges, b = u.elementRect, n = u.containerRect, g = u.elementPos, w = u.useTransform;
      o.includes("top") && ce(c, {
        y: g.y + n.top - b.top,
        x: g.x
      }, w), o.includes("left") && ce(c, {
        y: g.y,
        x: g.x + n.left - b.left
      }, w), o.includes("bottom") && ce(c, {
        y: g.y + n.bottom - b.bottom,
        x: g.x
      }, w), o.includes("right") && ce(c, {
        y: g.y,
        x: g.x + n.right - b.right
      }, w);
    }, Sr = function(u) {
      var c = u.computedStyle, o = u.node, b = c.position, n = b === "absolute" || b === "relative" || b === "fixed";
      !(o instanceof HTMLDocument) && !n && (o.style.position = "relative");
    }, Gs = function(u) {
      var c = u.shiftKey, o = u.keyboardDragSpeed, b = u.zoom, n = u.key, g = u.dragKeys, w = u.scrollDiff, M = u.canScroll, j = u.scrollCallback, X = {
        x: 0,
        y: 0
      }, Y = c ? o * 4 * b : o * b;
      return g.left.includes(n) && (X.x = w.x || -Y, !c && !w.x && M && j(["left"], o)), g.right.includes(n) && (X.x = w.x || Y, !c && !w.x && M && j(["right"], o)), g.up.includes(n) && (X.y = w.y || -Y, !c && !w.y && M && j(["top"], o)), g.down.includes(n) && (X.y = w.y || Y, !c && !w.y && M && j(["bottom"], o)), X;
    }, Js = function(u) {
      var c = u.element, o = u.force, b = u.multiSelectionToggle, n = u.SelectedSet, g = u.hoverClassName;
      c.classList.contains(g) && !o || (n.has(c) ? b && n.delete(c) : n.add(c), c.classList.add(g));
    }, Zs = function(u) {
      var c = u.element, o = u.force, b = u.SelectedSet, n = u.PrevSelectedSet, g = u.hoverClassName;
      if (!c.classList.contains(g) && !o)
        return !1;
      var w = b.has(c), M = n.has(c);
      w && !M ? b.delete(c) : !w && M && b.add(c), c.classList.remove(g);
    }, le = function(c, o, b) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(c, '" is not of type "').concat(o, '".'));
    }, et = function(c, o, b, n) {
      if (o === void 0)
        return b ? i({}, c, n) : {};
      if (o === null)
        return i({}, c, null);
      var g = !0, w = !1, M = typeof n == "string";
      M && (g = typeof o == "string" || o instanceof String), M && !g && (w = !0, le(c, "string"));
      var j = !isNaN(n) && typeof n == "number";
      j && (g = !isNaN(o) && typeof o == "number"), j && !g && (w = !0, le(c, "number"));
      var X = Object.prototype.toString.call(n) === "[object Object]";
      X && (g = Object.prototype.toString.call(o) === "[object Object]"), X && !g && (w = !0, le(c, "object"));
      var Y = typeof n == "boolean";
      Y && (g = typeof o == "boolean"), Y && !g && (w = !0, le(c, "boolean"));
      var ft = Array.isArray(n);
      ft && (g = Array.isArray(o)), ft && !g && (w = !0, le(c, "array"));
      var _t = w || b;
      return c === "dragKeys" && g ? i({}, c, Object.assign(n, o)) : c === "dragKeys" && !g ? _t ? i({}, c, n) : {} : g ? i({}, c, o) : _t ? i({}, c, n) : {};
    }, Qs = function(u, c) {
      return f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f({}, et("area", u.area, c, document)), et("selectables", u.selectables, c, null)), et("autoScrollSpeed", u.autoScrollSpeed, c, 5)), et("overflowTolerance", u.overflowTolerance, c, {
        x: 25,
        y: 25
      })), et("zoom", u.zoom, c, 1)), et("customStyles", u.customStyles, c, !1)), et("multiSelectMode", u.multiSelectMode, c, !1)), et("multiSelectToggling", u.multiSelectToggling, c, !0)), et("multiSelectKeys", u.multiSelectKeys, c, ["Control", "Shift", "Meta"])), et("selector", u.selector, c, null)), et("draggability", u.draggability, c, !0)), et("immediateDrag", u.immediateDrag, c, !0)), et("keyboardDrag", u.keyboardDrag, c, !0)), et("dragKeys", u.dragKeys, c, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), et("keyboardDragSpeed", u.keyboardDragSpeed, c, 10)), et("useTransform", u.useTransform, c, !0)), et("hoverClass", u.hoverClass, c, "ds-hover")), et("selectableClass", u.selectableClass, c, "ds-selectable")), et("selectedClass", u.selectedClass, c, "ds-selected")), et("selectorClass", u.selectorClass, c, "ds-selector")), et("selectorAreaClass", u.selectorAreaClass, c, "ds-selector-area"));
    }, Re = function(u, c) {
      return u.left < c.right && u.right > c.left && u.top < c.bottom && u.bottom > c.top;
    }, _r = function(u) {
      var c = u.element, o = u.posDirection, b = u.containerRect, n = u.useTransform, g = qs(c, n), w = J(g, "+", o);
      ce(c, w, n);
      var M = c.getBoundingClientRect(), j = wr({
        elementRect: M,
        containerRect: b
      });
      Fs({
        element: c,
        edges: j,
        elementRect: M,
        containerRect: b,
        elementPos: w,
        useTransform: n
      });
    }, to = function(u, c) {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c), u.disconnect();
    }, eo = function(u, c, o) {
      if (!!c.length) {
        var b = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = u instanceof HTMLDocument ? b || document.body : u, g = c.includes("top") && n.scrollTop > 0, w = c.includes("bottom") && n.scrollTop < n.scrollHeight, M = c.includes("left") && n.scrollLeft > 0, j = c.includes("right") && n.scrollLeft < n.scrollWidth;
        g && (n.scrollTop -= 1 * o), w && (n.scrollTop += 1 * o), M && (n.scrollLeft -= 1 * o), j && (n.scrollLeft += 1 * o);
      }
    }, ce = function(u, c, o) {
      if (o) {
        var b = u.style.transform;
        u.style.transform = "translate3d(".concat(c.x, "px,").concat(c.y, "px,1px) ").concat(b.replace(/translate.*?\)/g, ""));
      } else
        u.style.left = "".concat(c.x, "px"), u.style.top = "".concat(c.y, "px");
      return u;
    }, ro = function(u) {
      for (var c = u.subscribe, o = u.publish, b = u.Interaction, n = u.SelectedSet, g = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        "Interaction:start": [{
          name: "dragstart"
        }],
        "Interaction:update": [{
          name: "dragmove",
          condition: function(Y) {
            return Y.event;
          }
        }],
        "Interaction:end": [{
          name: "callback"
        }]
      }, w = function() {
        var Y = B(j[M], 2), ft = Y[0], _t = Y[1];
        ["pre", !1].forEach(function(ut) {
          return c(ut ? "".concat(ft, ":").concat(ut) : ft, function(zt) {
            return _t.forEach(function(nt) {
              return (!nt.condition || nt.condition(zt)) && o(ut ? "".concat(ut).concat(nt.name) : nt.name, f({
                items: n.elements,
                isDragging: b.isDragging
              }, zt));
            });
          });
        });
      }, M = 0, j = Object.entries(g); M < j.length; M++)
        w();
    }, Jt = function(u) {
      return u ? !Array.isArray(u) && (u instanceof HTMLElement || u instanceof SVGElement) ? [u] : z(u) : [];
    }, kr = function(u, c) {
      u.style.left = "".concat(c.left, "px"), u.style.top = "".concat(c.top, "px"), u.style.width = "".concat(c.width, "px"), u.style.height = "".concat(c.height, "px");
    }, so = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "DS", void 0), i(this, "_modificationCallback", void 0), i(this, "_modificationObserver", void 0), i(this, "_zoom", void 0), i(this, "_node", void 0), i(this, "_parentNodes", void 0), i(this, "_computedStyle", void 0), i(this, "_computedBorder", void 0), i(this, "_rect", void 0), i(this, "setArea", function(n) {
          o._node = n, Sr({
            computedStyle: o.computedStyle,
            node: o._node
          }), setTimeout(function() {
            o.DS.PubSub.publish("Area:modified:pre", {
              item: o
            }), o.reset(), o.DS.PubSub.publish("Area:modified", {
              item: o
            });
          });
        }), i(this, "start", function() {
          ct(o.parentNodes, o._modificationCallback, o._modificationObserver);
        }), i(this, "reset", function() {
          o._computedStyle = void 0, o._rect = void 0, o._computedBorder = void 0, o._parentNodes = void 0;
        }), i(this, "stop", function() {
          to(o._modificationObserver, o._modificationCallback), o.reset();
        }), i(this, "scroll", function(n, g) {
          var w = {
            scroll_directions: n,
            scroll_multiplier: g
          };
          o.DS.PubSub.publish("Area:scroll:pre", w), eo(o._node, n, g), o.DS.PubSub.publish("Area:scroll", w);
        }), this.DS = b, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var g = n.settings;
          return o.setArea(g.area);
        }), this._modificationCallback = xe(function(n) {
          o.DS.PubSub.publish("Area:modified:pre", {
            event: n,
            item: o
          }), o.reset(), o.DS.PubSub.publish("Area:modified", {
            event: n,
            item: o
          });
        }, 60), this._modificationObserver = new MutationObserver(this._modificationCallback), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return a(u, [{
        key: "HTMLNode",
        get: function() {
          return this._node;
        }
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof HTMLDocument ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = He(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          if (this._parentNodes)
            return this._parentNodes;
          var o = function b(n) {
            var g, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, M = (g = n[w]) === null || g === void 0 ? void 0 : g.parentNode;
            return M ? (n.push(M), w++, b(n, w)) : n;
          };
          return this._parentNodes = o([this.HTMLNode]), this._parentNodes;
        }
      }]), u;
    }(), oo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_prevCursorPos", void 0), i(this, "_prevScrollPos", void 0), i(this, "_elements", []), i(this, "_dragKeys", void 0), i(this, "_dragKeysFlat", []), i(this, "assignDragkeys", function() {
          o._dragKeys = {
            up: o.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: o.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: o.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: o.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, o._dragKeysFlat = [].concat(z(o._dragKeys.up), z(o._dragKeys.down), z(o._dragKeys.left), z(o._dragKeys.right));
        }), i(this, "keyboardDrag", function(n) {
          var g = n.event, w = n.key, M = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes(M) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability || o.DS.continue)) {
            var j = {
              event: g,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:start:pre", "Interaction:start"], j), o._elements = o.DS.getSelection(), o.handleZIndex(!0);
            var X = Gs({
              shiftKey: o.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: o.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: o.DS.stores.SettingsStore.s.zoom,
              key: M,
              scrollCallback: o.DS.Area.scroll,
              scrollDiff: o._scrollDiff,
              canScroll: o.DS.stores.ScrollStore.canScroll,
              dragKeys: o._dragKeys
            });
            o._elements.forEach(function(Y) {
              return _r({
                element: Y,
                posDirection: X,
                containerRect: o.DS.SelectorArea.rect,
                useTransform: o.DS.stores.SettingsStore.s.useTransform
              });
            }), o.DS.publish(["Interaction:update:pre", "Interaction:update"], j);
          }
        }), i(this, "keyboardEnd", function(n) {
          var g = n.event, w = n.key, M = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes(M) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability)) {
            var j = {
              event: g,
              isDragging: o.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:end:pre", "Interaction:end"], j);
          }
        }), i(this, "start", function(n) {
          var g = n.isDragging, w = n.isDraggingKeyboard;
          !g || w || (o._prevCursorPos = null, o._prevScrollPos = null, o._elements = o.DS.getSelection(), o.handleZIndex(!0));
        }), i(this, "stop", function(n) {
          n != null && n.isKeyboard || (o._prevCursorPos = null, o._prevScrollPos = null, o.handleZIndex(!1), o._elements = []);
        }), i(this, "update", function(n) {
          var g = n.isDragging, w = n.isDraggingKeyboard;
          if (!(!g || !o._elements.length || w || o.DS.continue)) {
            var M = J(o._cursorDiff, "+", o._scrollDiff);
            o._elements.forEach(function(j) {
              return _r({
                element: j,
                posDirection: M,
                containerRect: o.DS.SelectorArea.rect,
                useTransform: o.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), i(this, "handleZIndex", function(n) {
          o._elements.forEach(function(g) {
            return g.style.zIndex = "".concat((parseInt(g.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = b, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return a(u, [{
        key: "_cursorDiff",
        get: function() {
          var o = this.DS.stores.PointerStore.currentVal, b = this._prevCursorPos ? J(o, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = o, b;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var o = this.DS.stores.ScrollStore.currentVal, b = this._prevScrollPos ? J(o, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = o, b;
        }
      }]), u;
    }(), io = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "isInteracting", void 0), i(this, "isDragging", void 0), i(this, "init", function() {
          return o.DS.publish("Interaction:init:pre", {});
        }), i(this, "_init", function() {
          o.stop(), o.DS.Area.HTMLNode.addEventListener("mousedown", o.start), o.DS.Area.HTMLNode.addEventListener("touchstart", o.start, {
            passive: !1
          }), o.DS.publish("Interaction:init", {});
        }), i(this, "start", function(n) {
          return o.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: o.isDragging
          });
        }), i(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), o._canInteract(n) && (o.isInteracting = !0, o.isDragging = o.isDragEvent(n), o.DS.publish("Interaction:start", {
            event: n,
            isDragging: o.isDragging
          }), document.addEventListener("mouseup", o.reset), document.addEventListener("touchend", o.reset));
        }), i(this, "isDragEvent", function(n) {
          var g = n.target.closest(".".concat(o.DS.stores.SettingsStore.s.selectableClass));
          return !o.DS.stores.SettingsStore.s.draggability || o.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !g ? !1 : (o.DS.stores.SettingsStore.s.immediateDrag && (o.DS.SelectedSet.size ? o.DS.SelectedSet.has(g) || (o.DS.SelectedSet.clear(), o.DS.SelectedSet.add(
            g
          )) : o.DS.SelectedSet.add(
            g
          )), !!o.DS.SelectedSet.has(g));
        }), i(this, "onClick", function(n) {
          var g = n.event;
          if (!!o._canInteract(g) && !(g.detail > 0)) {
            var w = o.DS, M = w.stores, j = M.PointerStore, X = M.KeyStore, Y = w.SelectableSet, ft = w.SelectedSet;
            j.start(g);
            var _t = g.target;
            !Y.has(_t) || (X.isMultiSelectKeyPressed(g) || ft.clear(), ft.toggle(_t), o.reset());
          }
        }), i(this, "stop", function() {
          o.isInteracting = !1, o.isDragging = !1, o.DS.Area.HTMLNode.removeEventListener("mousedown", o.start), o.DS.Area.HTMLNode.removeEventListener("touchstart", o.start, {
            passive: !1
          }), document.removeEventListener("mouseup", o.reset), document.removeEventListener("touchend", o.reset);
        }), i(this, "update", function(n) {
          var g = n.event, w = n.scroll_directions, M = n.scroll_multiplier;
          o.isInteracting && o.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: g,
            scroll_directions: w,
            scroll_multiplier: M,
            isDragging: o.isDragging
          });
        }), i(this, "reset", function(n) {
          return o.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: o.isDragging
          });
        }), i(this, "_reset", function(n) {
          var g = o.isDragging;
          o.stop(), o.init(), o.DS.publish("Interaction:end", {
            event: n,
            isDragging: g
          });
        }), this.DS = b, this.DS.subscribe("Settings:updated:area", this.init), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var g = n.event;
          return o.start(g);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var g = n.event;
          return o._start(g);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var g = n.event;
          return o._reset(g);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return a(u, [{
        key: "_canInteract",
        value: function(o) {
          var b = o.clientX === 0 && o.clientY === 0 && o.detail === 0 && o.target;
          return !(o.button === 2 || this.isInteracting || o.target && !this.DS.SelectorArea.isInside(
            o.target
          ) || !b && !this.DS.SelectorArea.isClicked(o));
        }
      }]), u;
    }(), no = function u(c) {
      var o = this, b = c.DS;
      r(this, u), i(this, "subscribers", {}), i(this, "subscribe", function(n, g) {
        return Array.isArray(o.subscribers[n]) || (o.subscribers[n] = []), o.subscribers[n].push(g), o.subscribers[n].length - 1;
      }), i(this, "unsubscribe", function(n, g, w) {
        w >= 0 ? o.subscribers[n].splice(w, 1) : g && (o.subscribers[n] = o.subscribers[n].filter(function(M) {
          return M !== g;
        }));
      }), i(this, "publish", function(n, g) {
        Array.isArray(n) ? n.forEach(function(w) {
          return o._publish(w, g);
        }) : o._publish(n, g);
      }), i(this, "_publish", function(n, g) {
        var w = o.subscribers[n];
        !Array.isArray(w) || (n.includes(":pre") ? o._handlePrePublish(w, g) : o._handlePublish(w, g));
      }), i(this, "_handlePublish", function(n, g) {
        for (var w = 0, M = n.length; w < M; w++) {
          if (o.DS.stopped)
            return;
          n[w](g);
        }
      }), i(this, "_handlePrePublish", function(n, g) {
        for (var w = n.length; w--; ) {
          if (o.DS.stopped)
            return;
          n[w](g);
        }
      }), this.DS = b;
    }, ao = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = R(o);
      function o(b) {
        var n, g = b.DS;
        return r(this, o), n = c.call(this), i($(n), "init", function() {
          return Jt(n.DS.stores.SettingsStore.s.selectables).forEach(function(w) {
            return n.add(w);
          });
        }), i($(n), "clear", function() {
          return n.forEach(function(w) {
            return n.delete(w);
          });
        }), i($(n), "_onClick", function(w) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: w
          });
        }), i($(n), "_onPointer", function(w) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: w
          });
        }), i($(n), "addAll", function(w) {
          return w.forEach(function(M) {
            return n.add(M);
          });
        }), i($(n), "deleteAll", function(w) {
          return w.forEach(function(M) {
            return n.delete(M);
          });
        }), n.DS = g, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(w) {
          var M = w.settings;
          n.forEach(function(j) {
            j.classList.remove(M["selectableClass:pre"]), j.classList.add(M.selectableClass);
          });
        }), n;
      }
      return a(o, [{
        key: "add",
        value: function(n) {
          if (!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", g), n.classList.add(this.DS.stores.SettingsStore.s.selectableClass), n.addEventListener("click", this._onClick), n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.stores.SettingsStore.s.draggability && !this.DS.stores.SettingsStore.s.useTransform && Sr({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), this.DS.publish("Selectable:added", g), O(p(o.prototype), "add", this).call(this, n);
          }
        }
      }, {
        key: "delete",
        value: function(n) {
          if (!!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:removed:pre", g), n.classList.remove(this.DS.stores.SettingsStore.s.selectableClass), n.classList.remove(this.DS.stores.SettingsStore.s.hoverClass), n.removeEventListener("click", this._onClick), n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", g), O(p(o.prototype), "delete", this).call(this, n);
          }
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ _(Set)), lo = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = R(o);
      function o(b) {
        var n, g = b.DS;
        return r(this, o), n = c.call(this), i($(n), "clear", function() {
          return n.forEach(function(w) {
            return n.delete(w);
          });
        }), i($(n), "addAll", function(w) {
          return w.forEach(function(M) {
            return n.add(M);
          });
        }), i($(n), "deleteAll", function(w) {
          return w.forEach(function(M) {
            return n.delete(M);
          });
        }), n.DS = g, n;
      }
      return a(o, [{
        key: "add",
        value: function(n) {
          if (!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selected:added:pre", g), O(p(o.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", g), this;
          }
        }
      }, {
        key: "delete",
        value: function(n) {
          if (!!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            this.DS.publish("Selected:removed:pre", g);
            var w = O(p(o.prototype), "delete", this).call(this, n);
            return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", g), w;
          }
        }
      }, {
        key: "toggle",
        value: function(n) {
          return this.has(n) ? this.delete(n) : this.add(n), n;
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ _(Set)), co = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_prevSelectedSet", void 0), i(this, "start", function(n) {
          var g = n.event, w = n.isDragging;
          w || (o._storePrevious(g), o._handleInsideSelection(!0, g));
        }), i(this, "update", function(n) {
          var g = n.isDragging;
          g || o.DS.continue || o._handleInsideSelection();
        }), i(this, "_handleInsideSelection", function(n, g) {
          for (var w = o.DS, M = w.SelectableSet, j = w.SelectorArea, X = w.Selector, Y = M.elements.map(function(It) {
            return [It, It.getBoundingClientRect()];
          }), ft = [], _t = [], ut = 0, zt = Y.length; ut < zt; ut++)
            !j.isInside(Y[ut][0], Y[ut][1]) || (Re(Y[ut][1], X.rect) ? ft.push(Y[ut][0]) : _t.push(Y[ut][0]));
          var nt = o.DS.stores.KeyStore.isMultiSelectKeyPressed(g) && o.DS.stores.SettingsStore.s.multiSelectToggling;
          o.DS.continue || (ft.forEach(function(It) {
            return Js({
              element: It,
              force: n,
              multiSelectionToggle: nt,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass
            });
          }), _t.forEach(function(It) {
            return Zs({
              element: It,
              force: n,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass,
              PrevSelectedSet: o._prevSelectedSet
            });
          }));
        }), this.DS = b, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return a(u, [{
        key: "_storePrevious",
        value: function(o) {
          var b = this.DS, n = b.stores.KeyStore, g = b.SelectedSet;
          n.isMultiSelectKeyPressed(o) ? this._prevSelectedSet = new Set(g) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), u;
    }(), uo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_rect", void 0), i(this, "attachSelector", function() {
          var n, g;
          o.HTMLNode && (n = o.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && o.DS.SelectorArea.HTMLNode.removeChild(o.HTMLNode), o.HTMLNode = o.DS.stores.SettingsStore.s.selector || tt(o.DS.stores.SettingsStore.s.customStyles), o.HTMLNode.classList.add(o.DS.stores.SettingsStore.s.selectorClass), o.HTMLNode && (g = o.DS.SelectorArea) !== null && g !== void 0 && g.HTMLNode && o.DS.SelectorArea.HTMLNode.appendChild(o.HTMLNode);
        }), i(this, "start", function(n) {
          var g = n.isDragging;
          if (!g) {
            var w = o.DS.stores.PointerStore, M = w.initialValArea;
            kr(o.HTMLNode, V(M, 1)), o.HTMLNode.style.display = "block", o._rect = null;
          }
        }), i(this, "stop", function() {
          o.HTMLNode.style.width = "0", o.HTMLNode.style.height = "0", o.HTMLNode.style.display = "none";
        }), i(this, "update", function(n) {
          var g = n.isDragging;
          if (!(g || o.DS.continue)) {
            var w = o.DS.stores, M = w.ScrollStore, j = w.PointerStore, X = Ws({
              scrollAmount: M.scrollAmount,
              initialPointerPos: j.initialValArea,
              pointerPos: j.currentValArea
            });
            kr(o.HTMLNode, X), o._rect = null;
          }
        }), this.DS = b, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var g = n.settings;
          o.HTMLNode.classList.remove(g["selectorClass:pre"]), o.HTMLNode.classList.add(g.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(u, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), ho = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_scrollInterval", void 0), i(this, "_rect", void 0), i(this, "currentEdges", []), i(this, "start", function() {
          return o.applyElements("append");
        }), i(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", g = document.body ? "body" : "documentElement", w = "".concat(n, "Child");
          o.HTMLNode[w](o.DS.Selector.HTMLNode), document[g][w](o.HTMLNode);
        }), i(this, "updatePos", function() {
          o._rect = null;
          var n = o.DS.Area.rect, g = o.DS.Area.computedBorder, w = o.HTMLNode.style, M = "".concat(n.top + g.top, "px"), j = "".concat(n.left + g.left, "px"), X = "".concat(n.width, "px"), Y = "".concat(n.height, "px");
          w.top !== M && (w.top = M), w.left !== j && (w.left = j), w.width !== X && (w.width = X), w.height !== Y && (w.height = Y);
        }), i(this, "stop", function(n) {
          o.stopAutoScroll(), n && o.applyElements("remove");
        }), i(this, "startAutoScroll", function() {
          o.currentEdges = [], o._scrollInterval = setInterval(function() {
            return o.handleAutoScroll();
          }, 16);
        }), i(this, "handleAutoScroll", function() {
          if (!o.DS.continue) {
            var n = o.DS, g = n.stores.PointerStore, w = n.Area;
            o.currentEdges = wr({
              elementRect: V(g.currentVal),
              containerRect: o.rect,
              tolerance: o.DS.stores.SettingsStore.s.overflowTolerance
            }), o.currentEdges.length && w.scroll(o.currentEdges, o.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), i(this, "stopAutoScroll", function() {
          o.currentEdges = [], clearInterval(o._scrollInterval);
        }), i(this, "isInside", function(n, g) {
          return o.DS.Area.HTMLNode.contains(n) && o.DS.stores.ScrollStore.canScroll ? !0 : Re(o.rect, g || n.getBoundingClientRect());
        }), this.DS = b, this.HTMLNode = ht(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var g = n.settings;
          o.HTMLNode.classList.remove(g["selectorAreaClass:pre"]), o.HTMLNode.classList.add(g.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          o.updatePos(), o.stopAutoScroll();
        });
      }
      return a(u, [{
        key: "isClicked",
        value: function(o) {
          var b = this.DS.stores.PointerStore, n = o ? b.getPointerPosition(o) : b.initialVal;
          return Re({
            left: n.x,
            top: n.y,
            right: n.x,
            bottom: n.y
          }, this.rect);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), fo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_currentValues", /* @__PURE__ */ new Set()), i(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), i(this, "init", function() {
          document.addEventListener("keydown", o.keydown), document.addEventListener("keyup", o.keyup), window.addEventListener("blur", o.reset);
        }), i(this, "keydown", function(n) {
          var g = n.key.toLowerCase();
          o.DS.publish("KeyStore:down:pre", {
            event: n,
            key: g
          }), o._currentValues.add(g), o.DS.publish("KeyStore:down", {
            event: n,
            key: g
          });
        }), i(this, "keyup", function(n) {
          var g = n.key.toLowerCase();
          o.DS.publish("KeyStore:up:pre", {
            event: n,
            key: g
          }), o._currentValues.delete(g), o.DS.publish("KeyStore:up", {
            event: n,
            key: g
          });
        }), i(this, "stop", function() {
          document.removeEventListener("keydown", o.keydown), document.removeEventListener("keyup", o.reset), window.removeEventListener("blur", o.reset), o.reset();
        }), i(this, "reset", function() {
          return o._currentValues.clear();
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init);
      }
      return a(u, [{
        key: "isMultiSelectKeyPressed",
        value: function(o) {
          var b = this;
          if (this.DS.stores.SettingsStore.s.multiSelectMode)
            return !0;
          var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(g) {
            return g.toLocaleLowerCase();
          });
          return !!(this.currentValues.some(function(g) {
            return n.includes(g.toLocaleLowerCase());
          }) || o && n.some(function(g) {
            return o[b._keyMapping[g]];
          }));
        }
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), u;
    }(), po = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_isMouseInteraction", !1), i(this, "_initialValArea", void 0), i(this, "_currentValArea", void 0), i(this, "_lastValArea", void 0), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_lastVal", void 0), i(this, "_lastTouch", void 0), i(this, "init", function() {
          document.addEventListener("mousemove", o.update), document.addEventListener("touchmove", o.update, {
            passive: !1
          });
        }), i(this, "getPointerPosition", function(n) {
          return Ks({
            event: o._normalizedEvent(n)
          });
        }), i(this, "update", function(n) {
          !n || (o.DS.publish("PointerStore:updated:pre", {
            event: n
          }), o.currentVal = o.getPointerPosition(n), o._isMouseInteraction && o.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), i(this, "stop", function() {
          document.removeEventListener("mousemove", o.update), document.removeEventListener("touchmove", o.update, {
            passive: !1
          }), setTimeout(function() {
            return o._isMouseInteraction = !1;
          }, 100);
        }), i(this, "reset", function(n) {
          !n || (o.currentVal = o.lastVal = o.getPointerPosition(n), o.stop(), o.init());
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var g = n.event;
          return o.start(g);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var g = n.event;
          return o.reset(g);
        });
      }
      return a(u, [{
        key: "start",
        value: function(o) {
          !o || (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(o));
        }
      }, {
        key: "_normalizedEvent",
        value: function(o) {
          return "touches" in o && o.type !== "touchend" && (this._lastTouch = o), "touches" in o ? this._lastTouch.touches[0] : o;
        }
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(o) {
          this._initialVal = o, this._initialValArea = o && J(o, "-", J(E(this.DS.Area.rect), "+", E(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(o) {
          this._currentVal = o, this._currentValArea = o && J(o, "-", J(E(this.DS.Area.rect), "+", E(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(o) {
          this._lastVal = o, this._lastValArea = o && J(o, "-", J(E(this.DS.Area.rect), "+", E(this.DS.Area.computedBorder)));
        }
      }]), u;
    }(), go = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_canScroll", void 0), i(this, "init", function() {
          return o.DS.stores.SettingsStore.s.area.addEventListener("scroll", o.update);
        }), i(this, "start", function() {
          o._currentVal = o._initialVal = Gt(o.DS.stores.SettingsStore.s.area), o.DS.stores.SettingsStore.s.area.addEventListener("scroll", o.update);
        }), i(this, "update", function() {
          return o._currentVal = Gt(o.DS.stores.SettingsStore.s.area);
        }), i(this, "stop", function() {
          o.DS.stores.SettingsStore.s.area.removeEventListener("scroll", o.update), o._initialVal = {
            x: 0,
            y: 0
          }, o._canScroll = null;
        }), i(this, "reset", function() {
          o.stop(), o.start();
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return o.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return o.reset();
        });
      }
      return a(u, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = q(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var o = J(this.currentVal, "-", this.initialVal), b = P(this.DS.stores.SettingsStore.s.zoom), n = J(J(o, "*", b), "-", o);
          return {
            x: o.x + n.x,
            y: o.y + n.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Gt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), u;
    }(), mo = function u(c) {
      var o = this, b = c.DS, n = c.settings;
      r(this, u), i(this, "_settings", {}), i(this, "s", {}), i(this, "update", function(g) {
        var w = g.settings, M = g.init;
        return o.DS.publish("Settings:updated:pre", f({
          settings: w
        }, M ? {
          init: M
        } : {}));
      }), i(this, "_update", function(g) {
        for (var w = g.settings, M = g.init, j = Qs(w, M), X = function() {
          var ut, zt = B(ft[Y], 2), nt = zt[0], It = zt[1];
          nt in o._settings || Object.defineProperty(o.s, nt, {
            get: function() {
              return o._settings[nt];
            },
            set: function(yo) {
              return o.update({
                settings: i({}, nt, yo)
              });
            }
          }), o._settings["".concat(nt, ":pre")] = o._settings[nt], o._settings[nt] = It;
          var Dr = {
            settings: (ut = {}, i(ut, nt, o._settings[nt]), i(ut, "".concat(nt, ":pre"), o._settings["".concat(nt, ":pre")]), ut)
          };
          o.DS.publish("Settings:updated", Dr), o.DS.publish("Settings:updated:".concat(nt), Dr);
        }, Y = 0, ft = Object.entries(j); Y < ft.length; Y++)
          X();
      }), this.DS = b, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
        settings: n,
        init: !0
      });
    }, vo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this;
        r(this, u), i(this, "continue", !1), i(this, "start", function() {
          o.stopped = !1, o.Interaction.init();
        }), i(this, "break", function() {
          return o.continue = !0;
        }), i(this, "getSelection", function() {
          return o.SelectedSet.elements;
        }), i(this, "getSelectables", function() {
          return o.SelectableSet.elements;
        }), i(this, "getInitialCursorPosition", function() {
          return o.stores.PointerStore.initialVal;
        }), i(this, "getCurrentCursorPosition", function() {
          return o.stores.PointerStore.currentVal;
        }), i(this, "getPreviousCursorPosition", function() {
          return o.stores.PointerStore.lastVal;
        }), i(this, "getInitialCursorPositionArea", function() {
          return o.stores.PointerStore.initialValArea;
        }), i(this, "getCurrentCursorPositionArea", function() {
          return o.stores.PointerStore.currentValArea;
        }), i(this, "getPreviousCursorPositionArea", function() {
          return o.stores.PointerStore.lastValArea;
        }), i(this, "isMultiSelect", function(b) {
          return o.stores.KeyStore.isMultiSelectKeyPressed(b);
        }), i(this, "isDragging", function() {
          return o.Interaction.isDragging;
        }), i(this, "setSettings", function(b) {
          return o.stores.SettingsStore.update({
            settings: b
          });
        }), this.PubSub = new no({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = {}, this.stores.SettingsStore = new mo({
          DS: this,
          settings: c
        }), this.stores.PointerStore = new po({
          DS: this
        }), this.stores.ScrollStore = new go({
          DS: this
        }), this.stores.KeyStore = new fo({
          DS: this
        }), this.Area = new so({
          DS: this
        }), this.Selector = new uo({
          DS: this
        }), this.SelectorArea = new ho({
          DS: this
        }), this.SelectableSet = new ao({
          DS: this
        }), this.SelectedSet = new lo({
          DS: this
        }), this.Selection = new co({
          DS: this
        }), this.Drag = new oo({
          DS: this
        }), this.Interaction = new io({
          DS: this
        }), ro({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction
        }), this.subscribe("Interaction:end", function() {
          return o.continue = !1;
        }), this.start();
      }
      return a(u, [{
        key: "stop",
        value: function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          n && this.publish("callback", {
            items: this.getSelection()
          }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(o), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), o && this.SelectableSet.clear(), b && this.SelectedSet.clear(), this.stopped = !0;
        }
      }, {
        key: "addSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.addAll(Jt(o)), n || this.addSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Jt(o)), n && this.removeSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(o) {
          var b = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Jt(o).forEach(function(w) {
            return b.SelectedSet.has(w) ? b.removeSelection(o, n, g) : b.addSelection(o, n, g);
          }), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "setSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(o, b, n), this.getSelection();
        }
      }, {
        key: "clearSelection",
        value: function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "addSelectables",
        value: function(o, b, n) {
          var g = Jt(o);
          return this.SelectableSet.addAll(g), b && this.SelectedSet.addAll(g), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }, {
        key: "setSelectables",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(o, b), this.addSelectables(o, n);
        }
      }, {
        key: "removeSelectables",
        value: function(o, b, n) {
          return this.SelectableSet.deleteAll(Jt(o)), b && this.removeSelection(o), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }]), u;
    }();
    return vo;
  });
})(Zr);
const Qo = Zr.exports, Qr = (e, t, r, s, a) => (t = Math, r = t.log, s = 1024, a = r(e) / r(s) | 0, e / t.pow(s, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), ts = (e, t = null) => {
  var r;
  return new Date(e * 1e3).toLocaleString((r = t != null ? t : navigator.language) != null ? r : "en-US");
}, ti = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, ei = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), ri = [
  ei
], si = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, oi = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), ii = [
  oi
], ni = {
  name: "VFSortIcon"
}, _e = /* @__PURE__ */ Object.assign(ni, {
  props: { direction: String },
  setup(e) {
    return (t, r) => (x(), C("div", null, [
      e.direction == "down" ? (x(), C("svg", ti, ri)) : K("", !0),
      e.direction == "up" ? (x(), C("svg", si, ii)) : K("", !0)
    ]));
  }
}), ai = ["onClick"], li = {
  name: "VFToast.vue"
}, ci = /* @__PURE__ */ Object.assign(li, {
  setup(e) {
    const t = L("emitter"), { getStore: r } = L("storage"), s = T(r("full-screen", !1)), a = (v) => v == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = T([]), l = (v) => {
      i.value.splice(v, 1);
    }, f = (v) => {
      let p = i.value.findIndex((h) => h.id === v);
      p !== -1 && l(p);
    };
    return t.on("vf-toast-clear", () => {
      i.value = [];
    }), t.on("vf-toast-push", (v) => {
      let p = new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      v.id = p, i.value.push(v), setTimeout(() => {
        f(p);
      }, 5e3);
    }), (v, p) => (x(), C("div", {
      class: mt([s.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Dt(wo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: W(() => [
          (x(!0), C(lt, null, St(i.value, (h, m) => (x(), C("div", {
            onClick: (y) => l(m),
            key: h,
            class: mt([a(h.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, D(h.label), 11, ai))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Xt = (e) => Object.entries(e).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: ui } = At(), Xe = (e, t) => ui.value + "?" + Xt({ q: "preview", adapter: e, path: t }), Ht = typeof window < "u", es = Ht && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), rs = Ht && "IntersectionObserver" in window, ss = Ht && "classList" in document.createElement("p"), os = Ht && window.devicePixelRatio > 1, di = {
  elements_selector: ".lazy",
  container: es || Ht ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, is = (e) => Object.assign({}, di, e), $r = function(e, t) {
  let r;
  const s = "LazyLoad::Initialized", a = new e(t);
  try {
    r = new CustomEvent(s, { detail: { instance: a } });
  } catch {
    r = document.createEvent("CustomEvent"), r.initCustomEvent(s, !1, !1, { instance: a });
  }
  window.dispatchEvent(r);
}, hi = (e, t) => {
  if (!!t)
    if (!t.length)
      $r(e, t);
    else
      for (let r = 0, s; s = t[r]; r += 1)
        $r(e, s);
}, Lt = "src", or = "srcset", ir = "sizes", ns = "poster", be = "llOriginalAttrs", as = "data", nr = "loading", ls = "loaded", cs = "applied", fi = "entered", ar = "error", us = "native", ds = "data-", hs = "ll-status", vt = (e, t) => e.getAttribute(ds + t), pi = (e, t, r) => {
  var s = ds + t;
  if (r === null) {
    e.removeAttribute(s);
    return;
  }
  e.setAttribute(s, r);
}, ye = (e) => vt(e, hs), qt = (e, t) => pi(e, hs, t), Ie = (e) => qt(e, null), lr = (e) => ye(e) === null, gi = (e) => ye(e) === nr, mi = (e) => ye(e) === ar, cr = (e) => ye(e) === us, vi = [nr, ls, cs, ar], bi = (e) => vi.indexOf(ye(e)) >= 0, Rt = (e, t, r, s) => {
  if (!!e) {
    if (s !== void 0) {
      e(t, r, s);
      return;
    }
    if (r !== void 0) {
      e(t, r);
      return;
    }
    e(t);
  }
}, ae = (e, t) => {
  if (ss) {
    e.classList.add(t);
    return;
  }
  e.className += (e.className ? " " : "") + t;
}, Mt = (e, t) => {
  if (ss) {
    e.classList.remove(t);
    return;
  }
  e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, yi = (e) => {
  e.llTempImage = document.createElement("IMG");
}, wi = (e) => {
  delete e.llTempImage;
}, fs = (e) => e.llTempImage, Pe = (e, t) => {
  if (!t)
    return;
  const r = t._observer;
  !r || r.unobserve(e);
}, xi = (e) => {
  e.disconnect();
}, Si = (e, t, r) => {
  t.unobserve_entered && Pe(e, r);
}, ur = (e, t) => {
  !e || (e.loadingCount += t);
}, _i = (e) => {
  !e || (e.toLoadCount -= 1);
}, ps = (e, t) => {
  !e || (e.toLoadCount = t);
}, ki = (e) => e.loadingCount > 0, Di = (e) => e.toLoadCount > 0, gs = (e) => {
  let t = [];
  for (let r = 0, s; s = e.children[r]; r += 1)
    s.tagName === "SOURCE" && t.push(s);
  return t;
}, dr = (e, t) => {
  const r = e.parentNode;
  if (!r || r.tagName !== "PICTURE")
    return;
  gs(r).forEach(t);
}, ms = (e, t) => {
  gs(e).forEach(t);
}, Ne = [Lt], vs = [Lt, ns], ge = [Lt, or, ir], bs = [as], je = (e) => !!e[be], ys = (e) => e[be], ws = (e) => delete e[be], oe = (e, t) => {
  if (je(e))
    return;
  const r = {};
  t.forEach((s) => {
    r[s] = e.getAttribute(s);
  }), e[be] = r;
}, Ci = (e) => {
  je(e) || (e[be] = { backgroundImage: e.style.backgroundImage });
}, Mi = (e, t, r) => {
  if (!r) {
    e.removeAttribute(t);
    return;
  }
  e.setAttribute(t, r);
}, Wt = (e, t) => {
  if (!je(e))
    return;
  const r = ys(e);
  t.forEach((s) => {
    Mi(e, s, r[s]);
  });
}, $i = (e) => {
  if (!je(e))
    return;
  const t = ys(e);
  e.style.backgroundImage = t.backgroundImage;
}, xs = (e, t, r) => {
  ae(e, t.class_applied), qt(e, cs), r && (t.unobserve_completed && Pe(e, t), Rt(t.callback_applied, e, r));
}, Ss = (e, t, r) => {
  ae(e, t.class_loading), qt(e, nr), r && (ur(r, 1), Rt(t.callback_loading, e, r));
}, Vt = (e, t, r) => {
  !r || e.setAttribute(t, r);
}, Er = (e, t) => {
  Vt(e, ir, vt(e, t.data_sizes)), Vt(e, or, vt(e, t.data_srcset)), Vt(e, Lt, vt(e, t.data_src));
}, Ei = (e, t) => {
  dr(e, (r) => {
    oe(r, ge), Er(r, t);
  }), oe(e, ge), Er(e, t);
}, Ai = (e, t) => {
  oe(e, Ne), Vt(e, Lt, vt(e, t.data_src));
}, Ti = (e, t) => {
  ms(e, (r) => {
    oe(r, Ne), Vt(r, Lt, vt(r, t.data_src));
  }), oe(e, vs), Vt(e, ns, vt(e, t.data_poster)), Vt(e, Lt, vt(e, t.data_src)), e.load();
}, Oi = (e, t) => {
  oe(e, bs), Vt(e, as, vt(e, t.data_src));
}, Li = (e, t, r) => {
  const s = vt(e, t.data_bg), a = vt(e, t.data_bg_hidpi), i = os && a ? a : s;
  !i || (e.style.backgroundImage = `url("${i}")`, fs(e).setAttribute(Lt, i), Ss(e, t, r));
}, Ii = (e, t, r) => {
  const s = vt(e, t.data_bg_multi), a = vt(e, t.data_bg_multi_hidpi), i = os && a ? a : s;
  !i || (e.style.backgroundImage = i, xs(e, t, r));
}, Pi = (e, t, r) => {
  const s = vt(e, t.data_bg_set);
  if (!s)
    return;
  const a = s.split("|");
  let i = a.map((l) => `image-set(${l})`);
  e.style.backgroundImage = i.join(), e.style.backgroundImage === "" && (i = a.map((l) => `-webkit-image-set(${l})`), e.style.backgroundImage = i.join()), xs(e, t, r);
}, _s = {
  IMG: Ei,
  IFRAME: Ai,
  VIDEO: Ti,
  OBJECT: Oi
}, Ni = (e, t) => {
  const r = _s[e.tagName];
  !r || r(e, t);
}, ji = (e, t, r) => {
  const s = _s[e.tagName];
  !s || (s(e, t), Ss(e, t, r));
}, Vi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], Hi = (e) => Vi.indexOf(e.tagName) > -1, ks = (e, t) => {
  t && !ki(t) && !Di(t) && Rt(e.callback_finish, t);
}, Ar = (e, t, r) => {
  e.addEventListener(t, r), e.llEvLisnrs[t] = r;
}, Ri = (e, t, r) => {
  e.removeEventListener(t, r);
}, hr = (e) => !!e.llEvLisnrs, zi = (e, t, r) => {
  hr(e) || (e.llEvLisnrs = {});
  const s = e.tagName === "VIDEO" ? "loadeddata" : "load";
  Ar(e, s, t), Ar(e, "error", r);
}, qe = (e) => {
  if (!hr(e))
    return;
  const t = e.llEvLisnrs;
  for (let r in t) {
    const s = t[r];
    Ri(e, r, s);
  }
  delete e.llEvLisnrs;
}, Ds = (e, t, r) => {
  wi(e), ur(r, -1), _i(r), Mt(e, t.class_loading), t.unobserve_completed && Pe(e, r);
}, Bi = (e, t, r, s) => {
  const a = cr(t);
  Ds(t, r, s), ae(t, r.class_loaded), qt(t, ls), Rt(r.callback_loaded, t, s), a || ks(r, s);
}, Ui = (e, t, r, s) => {
  const a = cr(t);
  Ds(t, r, s), ae(t, r.class_error), qt(t, ar), Rt(r.callback_error, t, s), r.restore_on_error && Wt(t, ge), a || ks(r, s);
}, fr = (e, t, r) => {
  const s = fs(e) || e;
  if (hr(s))
    return;
  zi(s, (l) => {
    Bi(l, e, t, r), qe(s);
  }, (l) => {
    Ui(l, e, t, r), qe(s);
  });
}, Ki = (e, t, r) => {
  yi(e), fr(e, t, r), Ci(e), Li(e, t, r), Ii(e, t, r), Pi(e, t, r);
}, Wi = (e, t, r) => {
  fr(e, t, r), ji(e, t, r);
}, pr = (e, t, r) => {
  Hi(e) ? Wi(e, t, r) : Ki(e, t, r);
}, Yi = (e, t, r) => {
  e.setAttribute("loading", "lazy"), fr(e, t, r), Ni(e, t), qt(e, us);
}, Tr = (e) => {
  e.removeAttribute(Lt), e.removeAttribute(or), e.removeAttribute(ir);
}, Xi = (e) => {
  dr(e, (t) => {
    Tr(t);
  }), Tr(e);
}, Cs = (e) => {
  dr(e, (t) => {
    Wt(t, ge);
  }), Wt(e, ge);
}, qi = (e) => {
  ms(e, (t) => {
    Wt(t, Ne);
  }), Wt(e, vs), e.load();
}, Fi = (e) => {
  Wt(e, Ne);
}, Gi = (e) => {
  Wt(e, bs);
}, Ji = {
  IMG: Cs,
  IFRAME: Fi,
  VIDEO: qi,
  OBJECT: Gi
}, Zi = (e) => {
  const t = Ji[e.tagName];
  if (!t) {
    $i(e);
    return;
  }
  t(e);
}, Qi = (e, t) => {
  lr(e) || cr(e) || (Mt(e, t.class_entered), Mt(e, t.class_exited), Mt(e, t.class_applied), Mt(e, t.class_loading), Mt(e, t.class_loaded), Mt(e, t.class_error));
}, tn = (e, t) => {
  Zi(e), Qi(e, t), Ie(e), ws(e);
}, en = (e, t, r, s) => {
  !r.cancel_on_exit || !gi(e) || e.tagName === "IMG" && (qe(e), Xi(e), Cs(e), Mt(e, r.class_loading), ur(s, -1), Ie(e), Rt(r.callback_cancel, e, t, s));
}, rn = (e, t, r, s) => {
  const a = bi(e);
  qt(e, fi), ae(e, r.class_entered), Mt(e, r.class_exited), Si(e, r, s), Rt(r.callback_enter, e, t, s), !a && pr(e, r, s);
}, sn = (e, t, r, s) => {
  lr(e) || (ae(e, r.class_exited), en(e, t, r, s), Rt(r.callback_exit, e, t, s));
}, on = ["IMG", "IFRAME", "VIDEO"], Ms = (e) => e.use_native && "loading" in HTMLImageElement.prototype, nn = (e, t, r) => {
  e.forEach((s) => {
    on.indexOf(s.tagName) !== -1 && Yi(s, t, r);
  }), ps(r, 0);
}, an = (e) => e.isIntersecting || e.intersectionRatio > 0, ln = (e) => ({
  root: e.container === document ? null : e.container,
  rootMargin: e.thresholds || e.threshold + "px"
}), cn = (e, t, r) => {
  e.forEach(
    (s) => an(s) ? rn(s.target, s, t, r) : sn(s.target, s, t, r)
  );
}, un = (e, t) => {
  t.forEach((r) => {
    e.observe(r);
  });
}, dn = (e, t) => {
  xi(e), un(e, t);
}, hn = (e, t) => {
  !rs || Ms(e) || (t._observer = new IntersectionObserver((r) => {
    cn(r, e, t);
  }, ln(e)));
}, $s = (e) => Array.prototype.slice.call(e), Ae = (e) => e.container.querySelectorAll(e.elements_selector), fn = (e) => $s(e).filter(lr), pn = (e) => mi(e), gn = (e) => $s(e).filter(pn), Or = (e, t) => fn(e || Ae(t)), mn = (e, t) => {
  gn(Ae(e)).forEach((s) => {
    Mt(s, e.class_error), Ie(s);
  }), t.update();
}, vn = (e, t) => {
  !Ht || (t._onlineHandler = () => {
    mn(e, t);
  }, window.addEventListener("online", t._onlineHandler));
}, bn = (e) => {
  !Ht || window.removeEventListener("online", e._onlineHandler);
}, we = function(e, t) {
  const r = is(e);
  this._settings = r, this.loadingCount = 0, hn(r, this), vn(r, this), this.update(t);
};
we.prototype = {
  update: function(e) {
    const t = this._settings, r = Or(e, t);
    if (ps(this, r.length), es || !rs) {
      this.loadAll(r);
      return;
    }
    if (Ms(t)) {
      nn(r, t, this);
      return;
    }
    dn(this._observer, r);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), bn(this), Ae(this._settings).forEach((e) => {
      ws(e);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(e) {
    const t = this._settings;
    Or(e, t).forEach((s) => {
      Pe(s, this), pr(s, t, this);
    });
  },
  restoreAll: function() {
    const e = this._settings;
    Ae(e).forEach((t) => {
      tn(t, e);
    });
  }
};
we.load = (e, t) => {
  const r = is(t);
  pr(e, r);
};
we.resetStatus = (e) => {
  Ie(e);
};
Ht && hi(we, window.lazyLoadOptions);
const yn = { class: "relative flex-auto flex flex-col overflow-hidden" }, wn = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, xn = { class: "absolute" }, Sn = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), _n = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, kn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Dn = { class: "grid grid-cols-12 items-center" }, Cn = { class: "flex col-span-7 items-center" }, Mn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, $n = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), En = [
  $n
], An = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Tn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), On = [
  Tn
], Ln = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, In = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Pn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Nn = { class: "grid grid-cols-12 items-center" }, jn = { class: "flex col-span-7 items-center" }, Vn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Hn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Rn = [
  Hn
], zn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Bn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Un = [
  Bn
], Kn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Wn = { class: "col-span-2 text-center" }, Yn = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Xn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], qn = { class: "relative" }, Fn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Jn = [
  Gn
], Zn = ["data-src", "alt"], Qn = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ta = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ea = [
  ta
], ra = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, sa = { class: "break-all" }, oa = {
  name: "VFExplorer"
}, ia = /* @__PURE__ */ Object.assign(oa, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(e) {
    const t = e, r = L("emitter"), { setStore: s, getStore: a } = L("storage"), i = L("adapter"), l = (E) => E == null ? void 0 : E.substring(0, 3), f = (E) => E.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), v = T(null), p = T(null), h = T(0), m = T(null), { t: y } = L("i18n"), A = Math.floor(Math.random() * 2 ** 32), _ = T(a("full-screen", !1)), $ = new we();
    r.on("vf-fullscreen-toggle", () => {
      v.value.style.height = null, _.value = !_.value, s("full-screen", _.value);
    });
    const I = T("");
    r.on("vf-search-query", ({ newQuery: E }) => {
      I.value = E, E ? r.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: E
        },
        onSuccess: (V) => {
          V.files.length || r.emit("vf-toast-push", { label: y("No search result found.") });
        }
      }) : r.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let R = null;
    const H = () => {
      R && clearTimeout(R);
    }, O = T(!0), B = (E) => {
      E.touches.length > 1 && (O.value ? (m.value.stop(), r.emit("vf-toast-push", { label: y("Drag&Drop: off") })) : (m.value.start(), r.emit("vf-toast-push", { label: y("Drag&Drop: on") }), r.emit("vf-explorer-update")), O.value = !O.value);
    }, z = (E) => {
      R = setTimeout(() => {
        const V = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: E.target.getBoundingClientRect().x,
          clientY: E.target.getBoundingClientRect().y
        });
        E.target.dispatchEvent(V);
      }, 500);
    }, k = (E) => {
      E.type == "dir" ? (r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: E.path } })) : r.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: E });
    }, N = Me({ active: !1, column: "", order: "" }), G = (E = !0) => {
      let V = [...t.data.files], P = N.column, ct = N.order == "asc" ? 1 : -1;
      if (!E)
        return V;
      const q = (ht, tt) => typeof ht == "string" && typeof tt == "string" ? ht.toLowerCase().localeCompare(tt.toLowerCase()) : ht < tt ? -1 : ht > tt ? 1 : 0;
      return N.active && (V = V.slice().sort((ht, tt) => q(ht[P], tt[P]) * ct)), V;
    }, ot = (E) => {
      N.active && N.column == E ? (N.active = N.order == "asc", N.column = E, N.order = "desc") : (N.active = !0, N.column = E, N.order = "asc");
    }, it = () => m.value.getSelection().map((E) => JSON.parse(E.dataset.item)), dt = (E, V) => {
      if (E.altKey || E.ctrlKey || E.metaKey)
        return E.preventDefault(), !1;
      E.dataTransfer.setDragImage(p.value, 0, 15), E.dataTransfer.effectAllowed = "all", E.dataTransfer.dropEffect = "copy", E.dataTransfer.setData("items", JSON.stringify(it()));
    }, yt = (E, V) => {
      E.preventDefault();
      let P = JSON.parse(E.dataTransfer.getData("items"));
      if (P.find((ct) => ct.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", { type: "move", items: { from: P, to: V } });
    }, bt = (E, V) => {
      E.preventDefault(), !V || V.type !== "dir" || m.value.getSelection().find((P) => P == E.currentTarget) ? (E.dataTransfer.dropEffect = "none", E.dataTransfer.effectAllowed = "none") : E.dataTransfer.dropEffect = "copy";
    };
    return Ct(() => {
      m.value = new Qo({
        area: v.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), r.on("vf-explorer-update", () => Le(() => {
        m.value.clearSelection(), m.value.setSelectables(document.getElementsByClassName("vf-item-" + A));
      })), m.value.subscribe("predragstart", ({ event: E, isDragging: V }) => {
        if (V)
          h.value = m.value.getSelection().length, m.value.break();
        else {
          const P = E.target.offsetWidth - E.offsetX, ct = E.target.offsetHeight - E.offsetY;
          P < 15 && ct < 15 && (m.value.clearSelection(), m.value.break());
        }
      }), m.value.subscribe("predragmove", ({ isDragging: E }) => {
        E && m.value.break();
      }), m.value.subscribe("callback", ({ items: E, event: V, isDragging: P }) => {
        r.emit("vf-nodes-selected", it()), h.value = m.value.getSelection().length;
      });
    }), xo(() => {
      m.value.Area.reset(), m.value.SelectorArea.updatePos(), $.update();
    }), Ct(() => {
      Oe(() => t.view, () => r.emit("vf-explorer-update"));
    }), (E, V) => (x(), C("div", yn, [
      e.view == "list" || I.value.length ? (x(), C("div", wn, [
        d("div", {
          onClick: V[0] || (V[0] = (P) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          st(D(S(y)("Name")) + " ", 1),
          xt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "basename"]
          ])
        ]),
        I.value.length ? K("", !0) : (x(), C("div", {
          key: 0,
          onClick: V[1] || (V[1] = (P) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          st(D(S(y)("Size")) + " ", 1),
          xt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "file_size"]
          ])
        ])),
        I.value.length ? K("", !0) : (x(), C("div", {
          key: 1,
          onClick: V[2] || (V[2] = (P) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          st(D(S(y)("Date")) + " ", 1),
          xt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "last_modified"]
          ])
        ])),
        I.value.length ? (x(), C("div", {
          key: 2,
          onClick: V[3] || (V[3] = (P) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          st(D(S(y)("Filepath")) + " ", 1),
          xt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "path"]
          ])
        ])) : K("", !0)
      ])) : K("", !0),
      d("div", xn, [
        d("div", {
          ref_key: "dragImage",
          ref: p,
          class: "absolute -z-50 -top-96"
        }, [
          Sn,
          d("div", _n, D(h.value), 1)
        ], 512)
      ]),
      d("div", {
        onTouchstart: B,
        onContextmenu: V[10] || (V[10] = Kt((P) => S(r).emit("vf-contextmenu-show", { event: P, area: v.value, items: it() }), ["self", "prevent"])),
        class: mt([_.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: v
      }, [
        I.value.length ? (x(!0), C(lt, { key: 0 }, St(G(), (P, ct) => (x(), C("div", {
          onDblclick: (q) => k(P),
          onTouchstart: V[4] || (V[4] = (q) => z(q)),
          onTouchend: V[5] || (V[5] = (q) => H()),
          onContextmenu: Kt((q) => S(r).emit("vf-contextmenu-show", { event: q, area: v.value, items: it(), target: P }), ["prevent"]),
          class: mt(["vf-item-" + S(A), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ct
        }, [
          d("div", Dn, [
            d("div", Cn, [
              P.type == "dir" ? (x(), C("svg", Mn, En)) : (x(), C("svg", An, On)),
              d("span", Ln, D(P.basename), 1)
            ]),
            d("div", In, D(P.path), 1)
          ])
        ], 42, kn))), 256)) : K("", !0),
        e.view == "list" && !I.value.length ? (x(!0), C(lt, { key: 1 }, St(G(), (P, ct) => (x(), C("div", {
          draggable: "true",
          onDblclick: (q) => k(P),
          onTouchstart: V[6] || (V[6] = (q) => z(q)),
          onTouchend: V[7] || (V[7] = (q) => H()),
          onContextmenu: Kt((q) => S(r).emit("vf-contextmenu-show", { event: q, area: v.value, items: it(), target: P }), ["prevent"]),
          onDragstart: (q) => dt(q),
          onDragover: (q) => bt(q, P),
          onDrop: (q) => yt(q, P),
          class: mt(["vf-item-" + S(A), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ct
        }, [
          d("div", Nn, [
            d("div", jn, [
              P.type == "dir" ? (x(), C("svg", Vn, Rn)) : (x(), C("svg", zn, Un)),
              d("span", Kn, D(P.basename), 1)
            ]),
            d("div", Wn, D(P.file_size ? S(Qr)(P.file_size) : ""), 1),
            d("div", Yn, D(S(ts)(P.last_modified)), 1)
          ])
        ], 42, Pn))), 256)) : K("", !0),
        e.view == "grid" && !I.value.length ? (x(!0), C(lt, { key: 2 }, St(G(!1), (P, ct) => {
          var q, ht;
          return x(), C("div", {
            draggable: "true",
            onDblclick: (tt) => k(P),
            onTouchstart: V[8] || (V[8] = (tt) => z(tt)),
            onTouchend: V[9] || (V[9] = (tt) => H()),
            onContextmenu: Kt((tt) => S(r).emit("vf-contextmenu-show", { event: tt, area: v.value, items: it(), target: P }), ["prevent"]),
            onDragstart: (tt) => dt(tt),
            onDragover: (tt) => bt(tt, P),
            onDrop: (tt) => yt(tt, P),
            class: mt(["vf-item-" + S(A), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": P.type,
            "data-item": JSON.stringify(P),
            "data-index": ct
          }, [
            d("div", null, [
              d("div", qn, [
                P.type == "dir" ? (x(), C("svg", Fn, Jn)) : ((q = P.mime_type) != null ? q : "").startsWith("image") ? (x(), C("img", {
                  key: 1,
                  class: "lazy h-10 md:h-12 m-auto",
                  "data-src": S(Xe)(S(i).value, P.path),
                  alt: P.basename
                }, null, 8, Zn)) : (x(), C("svg", Qn, ea)),
                !((ht = P.mime_type) != null ? ht : "").startsWith("image") && P.type != "dir" ? (x(), C("div", ra, D(l(P.extension)), 1)) : K("", !0)
              ]),
              d("span", sa, D(f(P.basename)), 1)
            ])
          ], 42, Xn);
        }), 256)) : K("", !0)
      ], 34),
      Dt(ci)
    ]));
  }
}), na = "1.1.15", aa = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, la = { class: "flex leading-5 items-center" }, ca = ["aria-label"], ua = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), da = [
  ua
], ha = ["value"], fa = { class: "ml-3" }, pa = { key: 0 }, ga = { class: "ml-1" }, ma = { class: "flex leading-5 items-center" }, va = {
  value: "",
  disabled: ""
}, ba = /* @__PURE__ */ d("option", { value: "en" }, "English", -1), ya = /* @__PURE__ */ d("option", { value: "fr" }, "French", -1), wa = /* @__PURE__ */ d("option", { value: "ru" }, "Russian", -1), xa = /* @__PURE__ */ d("option", { value: "tr" }, "Turkish", -1), Sa = ["aria-label"], _a = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), ka = [
  _a
], Da = {
  name: "VFStatusbar"
}, Ca = /* @__PURE__ */ Object.assign(Da, {
  props: {
    data: Object
  },
  setup(e) {
    const t = L("emitter"), { getStore: r, setStore: s } = L("storage"), a = T(0), i = L("adapter"), { t: l, changeLocale: f } = L("i18n"), v = T(r("locale", "")), p = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), s("adapter", i.value);
    };
    t.on("vf-nodes-selected", (m) => {
      a.value = m.length;
    });
    const h = T("");
    return t.on("vf-search-query", ({ newQuery: m }) => {
      h.value = m;
    }), (m, y) => (x(), C("div", aa, [
      d("div", la, [
        d("div", {
          class: "mx-2",
          "aria-label": S(l)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, da, 8, ca),
        xt(d("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (A) => Gr(i) ? i.value = A : null),
          onChange: p,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (x(!0), C(lt, null, St(e.data.storages, (A) => (x(), C("option", { value: A }, D(A), 9, ha))), 256))
        ], 544), [
          [Cr, S(i)]
        ]),
        d("div", fa, [
          h.value.length ? (x(), C("span", pa, D(e.data.files.length) + " items found. ", 1)) : K("", !0),
          d("span", ga, D(a.value > 0 ? a.value + " " + S(l)("item(s) selected.") : ""), 1)
        ])
      ]),
      d("div", ma, [
        xt(d("select", {
          "onUpdate:modelValue": y[1] || (y[1] = (A) => v.value = A),
          onChange: y[2] || (y[2] = (A) => S(f)(A.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          d("option", va, D(S(l)("Language")), 1),
          ba,
          ya,
          wa,
          xa
        ], 544), [
          [Cr, v.value]
        ]),
        d("span", {
          class: "mr-1",
          "aria-label": S(l)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: y[3] || (y[3] = (A) => S(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + S(na), message: S(l)("Vuefinder is a file manager component for vue 3.") }))
        }, ka, 8, Sa)
      ])
    ]));
  }
}), Ma = (e, t = 0, r = !1) => {
  let s;
  return (...a) => {
    r && !s && e(...a), clearTimeout(s), s = setTimeout(() => {
      e(...a);
    }, t);
  };
}, $a = (e, t, r) => {
  const s = T(e);
  return So((i, l) => ({
    get() {
      return i(), s.value;
    },
    set: Ma(
      (f) => {
        s.value = f, l();
      },
      t,
      r
    )
  }));
}, Ea = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Aa = ["aria-label"], Ta = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Oa = [
  Ta
], La = ["aria-label"], Ia = /* @__PURE__ */ d("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Pa = [
  Ia
], Na = {
  key: 1,
  "aria-label": "Cancel",
  "data-microtip-position": "bottom-right",
  role: "tooltip"
}, ja = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Va = [
  ja
], Ha = ["onClick"], Ra = /* @__PURE__ */ d("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), za = [
  Ra
], Ba = { class: "flex leading-5" }, Ua = /* @__PURE__ */ d("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Ka = ["title", "onClick"], Wa = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ya = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Xa = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), qa = [
  Ya,
  Xa
], Fa = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, Ga = /* @__PURE__ */ d("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Ja = /* @__PURE__ */ d("div", { class: "w-full" }, null, -1), Za = ["onKeydown", "placeholder"], Qa = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), tl = [
  Qa
], el = {
  name: "VFBreadcrumb"
}, rl = /* @__PURE__ */ Object.assign(el, {
  props: {
    data: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), a = T(null), i = T([]), l = T(!1), f = T(null), { t: v } = L("i18n"), p = L("loadingState");
    r.on("vf-explorer-update", () => {
      var B;
      let H = [], O = [];
      a.value = (B = t.data.dirname) != null ? B : s.value + "://", a.value.length == 0 && (i.value = []), a.value.replace(s.value + "://", "").split("/").forEach(function(z) {
        H.push(z), H.join("/") != "" && O.push({
          basename: z,
          name: z,
          path: s.value + "://" + H.join("/"),
          type: "dir"
        });
      }), O.length > 4 && (O = O.slice(-5), O[0].name = ".."), i.value = O;
    });
    const h = () => {
      l.value = !1, y.value = "";
    };
    r.on("vf-search-exit", () => {
      h();
    });
    const m = () => {
      l.value = !0, Le(() => f.value.focus());
    }, y = $a("", 400), A = () => p.value;
    Oe(y, (H) => {
      r.emit("vf-toast-clear"), r.emit("vf-search-query", { newQuery: H });
    });
    const _ = () => i.value.length && !l.value, $ = (H) => {
      var B;
      H.preventDefault();
      let O = JSON.parse(H.dataTransfer.getData("items"));
      if (O.find((z) => z.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", {
        type: "move",
        items: { from: O, to: (B = i.value[i.value.length - 2]) != null ? B : { path: s.value + "://" } }
      });
    }, I = (H) => {
      H.preventDefault(), _() ? H.dataTransfer.dropEffect = "copy" : (H.dataTransfer.dropEffect = "none", H.dataTransfer.effectAllowed = "none");
    }, R = () => {
      y.value == "" && h();
    };
    return (H, O) => (x(), C("div", Ea, [
      d("span", {
        "aria-label": S(v)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), C("svg", {
          onDragover: O[0] || (O[0] = (B) => I(B)),
          onDrop: O[1] || (O[1] = (B) => $(B)),
          onClick: O[2] || (O[2] = (B) => {
            var z, k;
            return !_() || S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: (k = (z = i.value[i.value.length - 2]) == null ? void 0 : z.path) != null ? k : S(s) + "://" } });
          }),
          class: mt(["h-6 w-6 p-0.5 rounded", _() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Oa, 34))
      ], 8, Aa),
      A() ? (x(), C("span", Na, [
        (x(), C("svg", {
          onClick: O[4] || (O[4] = (B) => S(r).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Va))
      ])) : (x(), C("span", {
        key: 0,
        "aria-label": S(v)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), C("svg", {
          onClick: O[3] || (O[3] = (B) => {
            S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Pa))
      ], 8, La)),
      l.value ? (x(), C("div", Fa, [
        Ga,
        Ja,
        xt(d("input", {
          ref_key: "searchInput",
          ref: f,
          onKeydown: ie(h, ["esc"]),
          onBlur: R,
          "onUpdate:modelValue": O[6] || (O[6] = (B) => Gr(y) ? y.value = B : null),
          placeholder: S(v)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, Za), [
          [ne, S(y)]
        ]),
        (x(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: h,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, tl))
      ])) : (x(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Kt(m, ["self"])
      }, [
        (x(), C("svg", {
          onClick: O[5] || (O[5] = (B) => S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, za)),
        d("div", Ba, [
          (x(!0), C(lt, null, St(i.value, (B, z) => (x(), C("div", { key: z }, [
            Ua,
            d("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (k) => S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: B.path } })
            }, D(B.name), 9, Ka)
          ]))), 128))
        ]),
        A() ? (x(), C("svg", Wa, qa)) : K("", !0)
      ], 8, Ha))
    ]));
  }
}), sl = ["onClick"], ol = /* @__PURE__ */ d("span", { class: "px-1" }, null, -1), il = {
  name: "VFContextMenu"
}, nl = /* @__PURE__ */ Object.assign(il, {
  props: {
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter"), s = T(null), { apiUrl: a } = At(), i = Me({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = T([]);
    r.on("vf-context-selected", (y) => {
      l.value = y;
    });
    const { t: f } = L("i18n"), v = {
      newfolder: {
        title: () => f("New Folder"),
        action: () => {
          r.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => f("Delete"),
        action: () => {
          r.emit("vf-modal-show", { type: "delete", items: l });
        }
      },
      refresh: {
        title: () => f("Refresh"),
        action: () => {
          r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => f("Preview"),
        action: () => {
          r.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: l.value[0] });
        }
      },
      open: {
        title: () => f("Open"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].path } });
        }
      },
      openDir: {
        title: () => f("Open containing folder"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].dir } });
        }
      },
      download: {
        title: () => f("Download"),
        action: () => {
          const y = a.value + "?" + Xt({ q: "download", adapter: t.current.adapter, path: l.value[0].path });
          r.emit("vf-download", y);
        }
      },
      archive: {
        title: () => f("Archive"),
        action: () => {
          r.emit("vf-modal-show", { type: "archive", items: l });
        }
      },
      unarchive: {
        title: () => f("Unarchive"),
        action: () => {
          r.emit("vf-modal-show", { type: "unarchive", items: l });
        }
      },
      rename: {
        title: () => f("Rename"),
        action: () => {
          r.emit("vf-modal-show", { type: "rename", items: l });
        }
      }
    }, p = (y) => {
      r.emit("vf-contextmenu-hide"), y.action();
    }, h = T("");
    r.on("vf-search-query", ({ newQuery: y }) => {
      h.value = y;
    }), r.on("vf-contextmenu-show", ({ event: y, area: A, items: _, target: $ = null }) => {
      if (i.items = [], h.value)
        if ($)
          i.items.push(v.openDir), r.emit("vf-context-selected", [$]);
        else
          return;
      else
        !$ && !h.value ? (i.items.push(v.refresh), i.items.push(v.newfolder), r.emit("vf-context-selected", [])) : _.length > 1 && _.some((I) => I.path === $.path) ? (i.items.push(v.refresh), i.items.push(v.archive), i.items.push(v.delete), r.emit("vf-context-selected", _)) : ($.type == "dir" ? i.items.push(v.open) : (i.items.push(v.preview), i.items.push(v.download)), i.items.push(v.rename), $.mime_type == "application/zip" ? i.items.push(v.unarchive) : i.items.push(v.archive), i.items.push(v.delete), r.emit("vf-context-selected", [$]));
      m(y, A);
    }), r.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const m = (y, A) => {
      i.active = !0, Le(() => {
        let _ = A.getBoundingClientRect(), $ = y.pageX, I = y.pageY, R = s.value.offsetHeight, H = s.value.offsetWidth;
        $ = _.right - y.pageX + window.scrollX < H ? $ - H : $, I = _.bottom - y.pageY + window.scrollY < R ? I - R : I, i.positions = {
          left: $ + "px",
          top: I + "px"
        };
      });
    };
    return (y, A) => i.active ? (x(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: Jr(i.positions)
    }, [
      (x(!0), C(lt, null, St(i.items, (_) => (x(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: _.title,
        onClick: ($) => p(_)
      }, [
        ol,
        d("span", null, D(_.title()), 1)
      ], 8, sl))), 128))
    ], 4)) : K("", !0);
  }
}), al = (e, t) => {
  const r = e[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((s, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function ll(e) {
  const t = await al(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.b8058104.js"), "../locales/ru.json": () => import("./ru.3b282c54.js"), "../locales/tr.json": () => import("./tr.2d994891.js") }), `../locales/${e}.json`);
  return JSON.parse(t.default);
}
function cl(e, t, r) {
  const { getStore: s, setStore: a } = Ye(e), i = T({}), l = (p) => {
    ll(p).then((h) => {
      i.value = h, a("locale", p), a("translations", h), r.emit("vf-toast-push", { label: "The language is set to " + p });
    }).catch((h) => {
      r.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), l("en");
    });
  };
  s("locale") ? i.value = s("translations") : l(t);
  const f = (p, ...h) => h.length ? f(p = p.replace("%s", h.shift()), ...h) : p;
  function v(p, ...h) {
    return i.value.hasOwnProperty(p) ? f(i.value[p], ...h) : p;
  }
  return { t: v, changeLocale: l };
}
const ul = { class: "vuefinder" }, dl = /* @__PURE__ */ d("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), hl = {
  name: "VueFinder"
}, fl = /* @__PURE__ */ Object.assign(hl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(e) {
    const t = e, r = ko(), { setStore: s, getStore: a } = Ye(t.id), i = T(a("adapter"));
    Zt("emitter", r), Zt("storage", Ye(t.id)), Zt("postData", t.postData), Zt("adapter", i);
    const l = cl(t.id, t.locale, r);
    Zt("i18n", l);
    const { apiUrl: f, setApiUrl: v } = At();
    v(t.url);
    const p = Me({ adapter: i.value, storages: [], dirname: ".", files: [] }), h = T(a("viewport", "grid")), m = T(a("darkMode", t.dark));
    r.on("vf-darkMode-toggle", () => {
      m.value = !m.value, s("darkMode", m.value);
    });
    const y = T(!1);
    Zt("loadingState", y);
    const A = T(a("full-screen", !1));
    r.on("vf-fullscreen-toggle", () => {
      A.value = !A.value, s("full-screen", A.value);
    }), r.on("vf-view-toggle", (R) => {
      h.value = R;
    });
    const _ = Me({
      active: !1,
      type: "delete",
      data: {}
    });
    r.on("vf-modal-close", () => {
      _.active = !1;
    }), r.on("vf-modal-show", (R) => {
      _.active = !0, _.type = R.type, _.data = R;
    });
    const $ = (R) => {
      Object.assign(p, R), r.emit("vf-nodes-selected", {}), r.emit("vf-explorer-update");
    };
    let I;
    return r.on("vf-fetch-abort", () => {
      I.abort(), y.value = !1;
    }), r.on("vf-fetch", ({ params: R, onSuccess: H = null, onError: O = null }) => {
      ["index", "search"].includes(R.q) && (I && I.abort(), y.value = !0), I = new AbortController();
      const B = I.signal;
      Ee(f.value, { params: R, signal: B }).then((z) => {
        i.value = z.adapter, ["index", "search"].includes(R.q) && (y.value = !1), r.emit("vf-modal-close"), $(z), H(z);
      }).catch((z) => {
        O && O(z);
      }).finally(() => {
      });
    }), r.on("vf-download", (R) => {
      document.getElementById("download_frame").src = R, r.emit("vf-modal-close");
    }), Ct(() => {
      r.emit("vf-fetch", { params: { q: "index", adapter: i.value } });
    }), (R, H) => (x(), C("div", ul, [
      d("div", {
        class: mt(m.value ? "dark" : "")
      }, [
        d("div", {
          class: mt([A.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: Jr(A.value ? "" : "max-height: " + e.maxHeight),
          onMousedown: H[0] || (H[0] = (O) => S(r).emit("vf-contextmenu-hide")),
          onTouchstart: H[1] || (H[1] = (O) => S(r).emit("vf-contextmenu-hide"))
        }, [
          Dt(Jo, { data: p }, null, 8, ["data"]),
          Dt(rl, { data: p }, null, 8, ["data"]),
          Dt(ia, {
            view: h.value,
            data: p
          }, null, 8, ["view", "data"]),
          Dt(Ca, { data: p }, null, 8, ["data"])
        ], 38),
        _.active ? (x(), F(_o("v-f-modal-" + _.type), {
          key: 0,
          selection: _.data,
          current: p
        }, null, 8, ["selection", "current"])) : K("", !0),
        Dt(nl, { current: p }, null, 8, ["current"]),
        dl
      ], 2)
    ]));
  }
}), pl = /* @__PURE__ */ d("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), gl = { class: "fixed z-10 inset-0 overflow-hidden" }, ml = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, vl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, bl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Tt = {
  __name: "ModalLayout",
  setup(e) {
    const t = L("emitter");
    return Ct(() => {
      const r = document.querySelector(".v-f-modal input");
      r && r.focus();
    }), (r, s) => (x(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: s[1] || (s[1] = ie((a) => S(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      pl,
      d("div", gl, [
        d("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: s[0] || (s[0] = Kt((a) => S(t).emit("vf-modal-close"), ["self"]))
        }, [
          d("div", ml, [
            d("div", vl, [
              We(r.$slots, "default")
            ]),
            d("div", bl, [
              We(r.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, yl = ["aria-label"], wl = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), xl = [
  wl
], Sl = {
  name: "Message"
}, Ot = /* @__PURE__ */ Object.assign(Sl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(e, { emit: t }) {
    var f;
    const { t: r } = L("i18n"), s = T(!1), a = T(null), i = T((f = a.value) == null ? void 0 : f.strMessage);
    Oe(i, () => s.value = !1);
    const l = () => {
      t("hidden"), s.value = !0;
    };
    return (v, p) => (x(), C("div", null, [
      s.value ? K("", !0) : (x(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: mt(["flex mt-1 p-1 px-2 rounded text-sm", e.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        We(v.$slots, "default"),
        d("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": S(r)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, xl, 8, yl)
      ], 2))
    ]));
  }
}), _l = { class: "sm:flex sm:items-start" }, kl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Dl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Cl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ml = { class: "mt-2" }, $l = { class: "text-sm text-gray-500" }, El = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Al = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Tl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ol = [
  Tl
], Ll = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Il = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Pl = [
  Il
], Nl = { class: "ml-1.5" }, jl = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Vl = {
  name: "VFModalDelete"
}, Hl = /* @__PURE__ */ Object.assign(Vl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(t.selection.items), l = T(""), f = () => {
      i.value.length && r.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: v, type: p }) => ({ path: v, type: p })))
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, p) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Yes, Delete!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (h) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1),
        d("div", jl, D(S(a)("This action cannot be undone.")), 1)
      ]),
      default: W(() => [
        d("div", _l, [
          kl,
          d("div", Dl, [
            d("h3", Cl, D(S(a)("Delete files")), 1),
            d("div", Ml, [
              d("p", $l, D(S(a)("Are you sure you want to delete these files?")), 1),
              (x(!0), C(lt, null, St(i.value, (h) => (x(), C("p", El, [
                h.type == "dir" ? (x(), C("svg", Al, Ol)) : (x(), C("svg", Ll, Pl)),
                d("span", Nl, D(h.basename), 1)
              ]))), 256)),
              l.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (h) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rl = { class: "sm:flex sm:items-start" }, zl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), Bl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ul = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Kl = { class: "mt-2" }, Wl = { class: "text-sm text-gray-500" }, Yl = {
  name: "VFModalMessage"
}, Xl = /* @__PURE__ */ Object.assign(Yl, {
  props: {
    selection: Object
  },
  setup(e) {
    const t = L("emitter"), { t: r } = L("i18n");
    return (s, a) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: a[0] || (a[0] = (i) => S(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(r)("Close")), 1)
      ]),
      default: W(() => {
        var i, l, f, v;
        return [
          d("div", Rl, [
            zl,
            d("div", Bl, [
              d("h3", Ul, D((l = (i = e.selection) == null ? void 0 : i.title) != null ? l : "Title"), 1),
              d("div", Kl, [
                d("p", Wl, D((v = (f = e.selection) == null ? void 0 : f.message) != null ? v : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), ql = { class: "sm:flex sm:items-start" }, Fl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Gl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Jl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Zl = { class: "mt-2" }, Ql = { class: "text-sm text-gray-500" }, tc = ["onKeyup", "placeholder"], ec = {
  name: "VFModalNewFolder"
}, rc = /* @__PURE__ */ Object.assign(ec, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(""), l = T(""), f = () => {
      i.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: s.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, p) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (h) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", ql, [
          Fl,
          d("div", Gl, [
            d("h3", Jl, D(S(a)("New Folder")), 1),
            d("div", Zl, [
              d("p", Ql, D(S(a)("Create a new folder")), 1),
              xt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (h) => i.value = h),
                onKeyup: ie(f, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("Folder Name"),
                type: "text"
              }, null, 40, tc), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (h) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sc = { class: "sm:flex sm:items-start" }, oc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), ic = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, nc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ac = { class: "mt-2" }, lc = { class: "text-sm text-gray-500" }, cc = ["onKeyup", "placeholder"], uc = {
  name: "VFModalNewFile"
}, dc = /* @__PURE__ */ Object.assign(uc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(""), l = T(""), f = () => {
      i.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: s.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, p) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (h) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", sc, [
          oc,
          d("div", ic, [
            d("h3", nc, D(S(a)("New File")), 1),
            d("div", ac, [
              d("p", lc, D(S(a)("Create a new file")), 1),
              xt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (h) => i.value = h),
                onKeyup: ie(f, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("File Name"),
                type: "text"
              }, null, 40, cc), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (h) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hc = { class: "flex" }, fc = ["aria-label"], pc = { class: "ml-auto mb-2" }, gc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, mc = { key: 1 }, vc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, s = T(""), a = T(""), i = T(null), l = T(!1), { apiUrl: f } = At(), v = T(""), p = T(!1), { t: h } = L("i18n");
    Ct(() => {
      Ee(f.value, {
        params: { q: "preview", adapter: r.selection.adapter, path: r.selection.item.path },
        json: !1
      }).then((_) => {
        s.value = _, t("load");
      });
    });
    const m = () => {
      l.value = !l.value, a.value = s.value, l.value == !0 && Le(() => {
        i.value.focus();
      });
    }, y = L("postData"), A = () => {
      v.value = "", p.value = !1, Ee(f.value, {
        method: "POST",
        params: Object.assign(y, {
          q: "save",
          adapter: r.selection.adapter,
          path: r.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((_) => {
        v.value = h("Updated."), s.value = _, t("load"), l.value = !l.value;
      }).catch((_) => {
        v.value = h(_.message), p.value = !0;
      });
    };
    return (_, $) => (x(), C(lt, null, [
      d("div", hc, [
        d("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(e.selection.item.basename), 9, fc),
        d("div", pc, [
          l.value ? (x(), C("button", {
            key: 0,
            onClick: A,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, D(S(h)("Save")), 1)) : K("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: $[0] || ($[0] = (I) => m())
          }, D(l.value ? S(h)("Cancel") : S(h)("Edit")), 1)
        ])
      ]),
      d("div", null, [
        l.value ? (x(), C("div", mc, [
          xt(d("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": $[1] || ($[1] = (I) => a.value = I),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, a.value]
          ])
        ])) : (x(), C("pre", gc, D(s.value), 1)),
        v.value.length ? (x(), F(Ot, {
          key: 2,
          onHidden: $[2] || ($[2] = (I) => v.value = ""),
          error: p.value
        }, {
          default: W(() => [
            st(D(v.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : K("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
function Lr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t && (s = s.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function Es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(r), !0).forEach(function(s) {
      wc(e, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lr(Object(r)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return e;
}
function Ce(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ce = function(t) {
    return typeof t;
  } : Ce = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(e);
}
function bc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(e, t) {
  for (var r = 0; r < t.length; r++) {
    var s = t[r];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function yc(e, t, r) {
  return t && Ir(e.prototype, t), r && Ir(e, r), e;
}
function wc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function As(e) {
  return xc(e) || Sc(e) || _c(e) || kc();
}
function xc(e) {
  if (Array.isArray(e))
    return Fe(e);
}
function Sc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function _c(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Fe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fe(e, t);
  }
}
function Fe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, s = new Array(t); r < t; r++)
    s[r] = e[r];
  return s;
}
function kc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ve = typeof window < "u" && typeof window.document < "u", Et = Ve ? window : {}, gr = Ve && Et.document.documentElement ? "ontouchstart" in Et.document.documentElement : !1, mr = Ve ? "PointerEvent" in Et : !1, Z = "cropper", vr = "all", Ts = "crop", Os = "move", Ls = "zoom", Bt = "e", Ut = "w", Qt = "s", Pt = "n", ue = "ne", de = "nw", he = "se", fe = "sw", Ge = "".concat(Z, "-crop"), Pr = "".concat(Z, "-disabled"), gt = "".concat(Z, "-hidden"), Nr = "".concat(Z, "-hide"), Dc = "".concat(Z, "-invisible"), Te = "".concat(Z, "-modal"), Je = "".concat(Z, "-move"), me = "".concat(Z, "Action"), ke = "".concat(Z, "Preview"), br = "crop", Is = "move", Ps = "none", Ze = "crop", Qe = "cropend", tr = "cropmove", er = "cropstart", jr = "dblclick", Cc = gr ? "touchstart" : "mousedown", Mc = gr ? "touchmove" : "mousemove", $c = gr ? "touchend touchcancel" : "mouseup", Vr = mr ? "pointerdown" : Cc, Hr = mr ? "pointermove" : Mc, Rr = mr ? "pointerup pointercancel" : $c, zr = "ready", Br = "resize", Ur = "wheel", rr = "zoom", Kr = "image/jpeg", Ec = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Ac = /^data:/, Tc = /^data:image\/jpeg;base64,/, Oc = /^img|canvas$/i, Ns = 200, js = 100, Wr = {
  viewMode: 0,
  dragMode: br,
  initialAspectRatio: NaN,
  aspectRatio: NaN,
  data: null,
  preview: "",
  responsive: !0,
  restore: !0,
  checkCrossOrigin: !0,
  checkOrientation: !0,
  modal: !0,
  guides: !0,
  center: !0,
  highlight: !0,
  background: !0,
  autoCrop: !0,
  autoCropArea: 0.8,
  movable: !0,
  rotatable: !0,
  scalable: !0,
  zoomable: !0,
  zoomOnTouch: !0,
  zoomOnWheel: !0,
  wheelZoomRatio: 0.1,
  cropBoxMovable: !0,
  cropBoxResizable: !0,
  toggleDragModeOnDblclick: !0,
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Ns,
  minContainerHeight: js,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Lc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Ic = Number.isNaN || Et.isNaN;
function U(e) {
  return typeof e == "number" && !Ic(e);
}
var Yr = function(t) {
  return t > 0 && t < 1 / 0;
};
function Be(e) {
  return typeof e > "u";
}
function Yt(e) {
  return Ce(e) === "object" && e !== null;
}
var Pc = Object.prototype.hasOwnProperty;
function te(e) {
  if (!Yt(e))
    return !1;
  try {
    var t = e.constructor, r = t.prototype;
    return t && r && Pc.call(r, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function pt(e) {
  return typeof e == "function";
}
var Nc = Array.prototype.slice;
function Vs(e) {
  return Array.from ? Array.from(e) : Nc.call(e);
}
function rt(e, t) {
  return e && pt(t) && (Array.isArray(e) || U(e.length) ? Vs(e).forEach(function(r, s) {
    t.call(e, r, s, e);
  }) : Yt(e) && Object.keys(e).forEach(function(r) {
    t.call(e, e[r], r, e);
  })), e;
}
var Q = Object.assign || function(t) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return Yt(t) && s.length > 0 && s.forEach(function(i) {
    Yt(i) && Object.keys(i).forEach(function(l) {
      t[l] = i[l];
    });
  }), t;
}, jc = /\.\d*(?:0|9){12}\d*$/;
function re(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return jc.test(e) ? Math.round(e * t) / t : e;
}
var Vc = /^width|height|left|top|marginLeft|marginTop$/;
function Nt(e, t) {
  var r = e.style;
  rt(t, function(s, a) {
    Vc.test(a) && U(s) && (s = "".concat(s, "px")), r[a] = s;
  });
}
function Hc(e, t) {
  return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1;
}
function at(e, t) {
  if (!!t) {
    if (U(e.length)) {
      rt(e, function(s) {
        at(s, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.add(t);
      return;
    }
    var r = e.className.trim();
    r ? r.indexOf(t) < 0 && (e.className = "".concat(r, " ").concat(t)) : e.className = t;
  }
}
function $t(e, t) {
  if (!!t) {
    if (U(e.length)) {
      rt(e, function(r) {
        $t(r, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.remove(t);
      return;
    }
    e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ""));
  }
}
function ee(e, t, r) {
  if (!!t) {
    if (U(e.length)) {
      rt(e, function(s) {
        ee(s, t, r);
      });
      return;
    }
    r ? at(e, t) : $t(e, t);
  }
}
var Rc = /([a-z\d])([A-Z])/g;
function yr(e) {
  return e.replace(Rc, "$1-$2").toLowerCase();
}
function sr(e, t) {
  return Yt(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(yr(t)));
}
function ve(e, t, r) {
  Yt(r) ? e[t] = r : e.dataset ? e.dataset[t] = r : e.setAttribute("data-".concat(yr(t)), r);
}
function zc(e, t) {
  if (Yt(e[t]))
    try {
      delete e[t];
    } catch {
      e[t] = void 0;
    }
  else if (e.dataset)
    try {
      delete e.dataset[t];
    } catch {
      e.dataset[t] = void 0;
    }
  else
    e.removeAttribute("data-".concat(yr(t)));
}
var Hs = /\s\s*/, Rs = function() {
  var e = !1;
  if (Ve) {
    var t = !1, r = function() {
    }, s = Object.defineProperty({}, "once", {
      get: function() {
        return e = !0, t;
      },
      set: function(i) {
        t = i;
      }
    });
    Et.addEventListener("test", r, s), Et.removeEventListener("test", r, s);
  }
  return e;
}();
function kt(e, t, r) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r;
  t.trim().split(Hs).forEach(function(i) {
    if (!Rs) {
      var l = e.listeners;
      l && l[i] && l[i][r] && (a = l[i][r], delete l[i][r], Object.keys(l[i]).length === 0 && delete l[i], Object.keys(l).length === 0 && delete e.listeners);
    }
    e.removeEventListener(i, a, s);
  });
}
function wt(e, t, r) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r;
  t.trim().split(Hs).forEach(function(i) {
    if (s.once && !Rs) {
      var l = e.listeners, f = l === void 0 ? {} : l;
      a = function() {
        delete f[i][r], e.removeEventListener(i, a, s);
        for (var p = arguments.length, h = new Array(p), m = 0; m < p; m++)
          h[m] = arguments[m];
        r.apply(e, h);
      }, f[i] || (f[i] = {}), f[i][r] && e.removeEventListener(i, f[i][r], s), f[i][r] = a, e.listeners = f;
    }
    e.addEventListener(i, a, s);
  });
}
function se(e, t, r) {
  var s;
  return pt(Event) && pt(CustomEvent) ? s = new CustomEvent(t, {
    detail: r,
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("CustomEvent"), s.initCustomEvent(t, !0, !0, r)), e.dispatchEvent(s);
}
function zs(e) {
  var t = e.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Ue = Et.location, Bc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Xr(e) {
  var t = e.match(Bc);
  return t !== null && (t[1] !== Ue.protocol || t[2] !== Ue.hostname || t[3] !== Ue.port);
}
function qr(e) {
  var t = "timestamp=".concat(new Date().getTime());
  return e + (e.indexOf("?") === -1 ? "?" : "&") + t;
}
function pe(e) {
  var t = e.rotate, r = e.scaleX, s = e.scaleY, a = e.translateX, i = e.translateY, l = [];
  U(a) && a !== 0 && l.push("translateX(".concat(a, "px)")), U(i) && i !== 0 && l.push("translateY(".concat(i, "px)")), U(t) && t !== 0 && l.push("rotate(".concat(t, "deg)")), U(r) && r !== 1 && l.push("scaleX(".concat(r, ")")), U(s) && s !== 1 && l.push("scaleY(".concat(s, ")"));
  var f = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: f,
    msTransform: f,
    transform: f
  };
}
function Uc(e) {
  var t = Es({}, e), r = 0;
  return rt(e, function(s, a) {
    delete t[a], rt(t, function(i) {
      var l = Math.abs(s.startX - i.startX), f = Math.abs(s.startY - i.startY), v = Math.abs(s.endX - i.endX), p = Math.abs(s.endY - i.endY), h = Math.sqrt(l * l + f * f), m = Math.sqrt(v * v + p * p), y = (m - h) / h;
      Math.abs(y) > Math.abs(r) && (r = y);
    });
  }), r;
}
function De(e, t) {
  var r = e.pageX, s = e.pageY, a = {
    endX: r,
    endY: s
  };
  return t ? a : Es({
    startX: r,
    startY: s
  }, a);
}
function Kc(e) {
  var t = 0, r = 0, s = 0;
  return rt(e, function(a) {
    var i = a.startX, l = a.startY;
    t += i, r += l, s += 1;
  }), t /= s, r /= s, {
    pageX: t,
    pageY: r
  };
}
function jt(e) {
  var t = e.aspectRatio, r = e.height, s = e.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = Yr(s), l = Yr(r);
  if (i && l) {
    var f = r * t;
    a === "contain" && f > s || a === "cover" && f < s ? r = s / t : s = r * t;
  } else
    i ? r = s / t : l && (s = r * t);
  return {
    width: s,
    height: r
  };
}
function Wc(e) {
  var t = e.width, r = e.height, s = e.degree;
  if (s = Math.abs(s) % 180, s === 90)
    return {
      width: r,
      height: t
    };
  var a = s % 90 * Math.PI / 180, i = Math.sin(a), l = Math.cos(a), f = t * l + r * i, v = t * i + r * l;
  return s > 90 ? {
    width: v,
    height: f
  } : {
    width: f,
    height: v
  };
}
function Yc(e, t, r, s) {
  var a = t.aspectRatio, i = t.naturalWidth, l = t.naturalHeight, f = t.rotate, v = f === void 0 ? 0 : f, p = t.scaleX, h = p === void 0 ? 1 : p, m = t.scaleY, y = m === void 0 ? 1 : m, A = r.aspectRatio, _ = r.naturalWidth, $ = r.naturalHeight, I = s.fillColor, R = I === void 0 ? "transparent" : I, H = s.imageSmoothingEnabled, O = H === void 0 ? !0 : H, B = s.imageSmoothingQuality, z = B === void 0 ? "low" : B, k = s.maxWidth, N = k === void 0 ? 1 / 0 : k, G = s.maxHeight, ot = G === void 0 ? 1 / 0 : G, it = s.minWidth, dt = it === void 0 ? 0 : it, yt = s.minHeight, bt = yt === void 0 ? 0 : yt, J = document.createElement("canvas"), E = J.getContext("2d"), V = jt({
    aspectRatio: A,
    width: N,
    height: ot
  }), P = jt({
    aspectRatio: A,
    width: dt,
    height: bt
  }, "cover"), ct = Math.min(V.width, Math.max(P.width, _)), q = Math.min(V.height, Math.max(P.height, $)), ht = jt({
    aspectRatio: a,
    width: N,
    height: ot
  }), tt = jt({
    aspectRatio: a,
    width: dt,
    height: bt
  }, "cover"), xe = Math.min(ht.width, Math.max(tt.width, i)), Ft = Math.min(ht.height, Math.max(tt.height, l)), He = [-xe / 2, -Ft / 2, xe, Ft];
  return J.width = re(ct), J.height = re(q), E.fillStyle = R, E.fillRect(0, 0, ct, q), E.save(), E.translate(ct / 2, q / 2), E.rotate(v * Math.PI / 180), E.scale(h, y), E.imageSmoothingEnabled = O, E.imageSmoothingQuality = z, E.drawImage.apply(E, [e].concat(As(He.map(function(Gt) {
    return Math.floor(re(Gt));
  })))), E.restore(), J;
}
var Bs = String.fromCharCode;
function Xc(e, t, r) {
  var s = "";
  r += t;
  for (var a = t; a < r; a += 1)
    s += Bs(e.getUint8(a));
  return s;
}
var qc = /^data:.*,/;
function Fc(e) {
  var t = e.replace(qc, ""), r = atob(t), s = new ArrayBuffer(r.length), a = new Uint8Array(s);
  return rt(a, function(i, l) {
    a[l] = r.charCodeAt(l);
  }), s;
}
function Gc(e, t) {
  for (var r = [], s = 8192, a = new Uint8Array(e); a.length > 0; )
    r.push(Bs.apply(null, Vs(a.subarray(0, s)))), a = a.subarray(s);
  return "data:".concat(t, ";base64,").concat(btoa(r.join("")));
}
function Jc(e) {
  var t = new DataView(e), r;
  try {
    var s, a, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var l = t.byteLength, f = 2; f + 1 < l; ) {
        if (t.getUint8(f) === 255 && t.getUint8(f + 1) === 225) {
          a = f;
          break;
        }
        f += 1;
      }
    if (a) {
      var v = a + 4, p = a + 10;
      if (Xc(t, v, 4) === "Exif") {
        var h = t.getUint16(p);
        if (s = h === 18761, (s || h === 19789) && t.getUint16(p + 2, s) === 42) {
          var m = t.getUint32(p + 4, s);
          m >= 8 && (i = p + m);
        }
      }
    }
    if (i) {
      var y = t.getUint16(i, s), A, _;
      for (_ = 0; _ < y; _ += 1)
        if (A = i + _ * 12 + 2, t.getUint16(A, s) === 274) {
          A += 8, r = t.getUint16(A, s), t.setUint16(A, 1, s);
          break;
        }
    }
  } catch {
    r = 1;
  }
  return r;
}
function Zc(e) {
  var t = 0, r = 1, s = 1;
  switch (e) {
    case 2:
      r = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      s = -1;
      break;
    case 5:
      t = 90, s = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, r = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: r,
    scaleY: s
  };
}
var Qc = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, r = this.options, s = this.container, a = this.cropper, i = Number(r.minContainerWidth), l = Number(r.minContainerHeight);
    at(a, gt), $t(t, gt);
    var f = {
      width: Math.max(s.offsetWidth, i >= 0 ? i : Ns),
      height: Math.max(s.offsetHeight, l >= 0 ? l : js)
    };
    this.containerData = f, Nt(a, {
      width: f.width,
      height: f.height
    }), at(t, gt), $t(a, gt);
  },
  initCanvas: function() {
    var t = this.containerData, r = this.imageData, s = this.options.viewMode, a = Math.abs(r.rotate) % 180 === 90, i = a ? r.naturalHeight : r.naturalWidth, l = a ? r.naturalWidth : r.naturalHeight, f = i / l, v = t.width, p = t.height;
    t.height * f > t.width ? s === 3 ? v = t.height * f : p = t.width / f : s === 3 ? p = t.width / f : v = t.height * f;
    var h = {
      aspectRatio: f,
      naturalWidth: i,
      naturalHeight: l,
      width: v,
      height: p
    };
    this.canvasData = h, this.limited = s === 1 || s === 2, this.limitCanvas(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.left = (t.width - h.width) / 2, h.top = (t.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCanvasData = Q({}, h);
  },
  limitCanvas: function(t, r) {
    var s = this.options, a = this.containerData, i = this.canvasData, l = this.cropBoxData, f = s.viewMode, v = i.aspectRatio, p = this.cropped && l;
    if (t) {
      var h = Number(s.minCanvasWidth) || 0, m = Number(s.minCanvasHeight) || 0;
      f > 1 ? (h = Math.max(h, a.width), m = Math.max(m, a.height), f === 3 && (m * v > h ? h = m * v : m = h / v)) : f > 0 && (h ? h = Math.max(h, p ? l.width : 0) : m ? m = Math.max(m, p ? l.height : 0) : p && (h = l.width, m = l.height, m * v > h ? h = m * v : m = h / v));
      var y = jt({
        aspectRatio: v,
        width: h,
        height: m
      });
      h = y.width, m = y.height, i.minWidth = h, i.minHeight = m, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (r)
      if (f > (p ? 0 : 1)) {
        var A = a.width - i.width, _ = a.height - i.height;
        i.minLeft = Math.min(0, A), i.minTop = Math.min(0, _), i.maxLeft = Math.max(0, A), i.maxTop = Math.max(0, _), p && this.limited && (i.minLeft = Math.min(l.left, l.left + (l.width - i.width)), i.minTop = Math.min(l.top, l.top + (l.height - i.height)), i.maxLeft = l.left, i.maxTop = l.top, f === 2 && (i.width >= a.width && (i.minLeft = Math.min(0, A), i.maxLeft = Math.max(0, A)), i.height >= a.height && (i.minTop = Math.min(0, _), i.maxTop = Math.max(0, _))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = a.width, i.maxTop = a.height;
  },
  renderCanvas: function(t, r) {
    var s = this.canvasData, a = this.imageData;
    if (r) {
      var i = Wc({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), l = i.width, f = i.height, v = s.width * (l / s.naturalWidth), p = s.height * (f / s.naturalHeight);
      s.left -= (v - s.width) / 2, s.top -= (p - s.height) / 2, s.width = v, s.height = p, s.aspectRatio = l / f, s.naturalWidth = l, s.naturalHeight = f, this.limitCanvas(!0, !1);
    }
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCanvas(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, Nt(this.canvas, Q({
      width: s.width,
      height: s.height
    }, pe({
      translateX: s.left,
      translateY: s.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var r = this.canvasData, s = this.imageData, a = s.naturalWidth * (r.width / r.naturalWidth), i = s.naturalHeight * (r.height / r.naturalHeight);
    Q(s, {
      width: a,
      height: i,
      left: (r.width - a) / 2,
      top: (r.height - i) / 2
    }), Nt(this.image, Q({
      width: s.width,
      height: s.height
    }, pe(Q({
      translateX: s.left,
      translateY: s.top
    }, s)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, r = this.canvasData, s = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, i = {
      width: r.width,
      height: r.height
    };
    s && (r.height * s > r.width ? i.height = i.width / s : i.width = i.height * s), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * a), i.height = Math.max(i.minHeight, i.height * a), i.left = r.left + (r.width - i.width) / 2, i.top = r.top + (r.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(t, r) {
    var s = this.options, a = this.containerData, i = this.canvasData, l = this.cropBoxData, f = this.limited, v = s.aspectRatio;
    if (t) {
      var p = Number(s.minCropBoxWidth) || 0, h = Number(s.minCropBoxHeight) || 0, m = f ? Math.min(a.width, i.width, i.width + i.left, a.width - i.left) : a.width, y = f ? Math.min(a.height, i.height, i.height + i.top, a.height - i.top) : a.height;
      p = Math.min(p, a.width), h = Math.min(h, a.height), v && (p && h ? h * v > p ? h = p / v : p = h * v : p ? h = p / v : h && (p = h * v), y * v > m ? y = m / v : m = y * v), l.minWidth = Math.min(p, m), l.minHeight = Math.min(h, y), l.maxWidth = m, l.maxHeight = y;
    }
    r && (f ? (l.minLeft = Math.max(0, i.left), l.minTop = Math.max(0, i.top), l.maxLeft = Math.min(a.width, i.left + i.width) - l.width, l.maxTop = Math.min(a.height, i.top + i.height) - l.height) : (l.minLeft = 0, l.minTop = 0, l.maxLeft = a.width - l.width, l.maxTop = a.height - l.height));
  },
  renderCropBox: function() {
    var t = this.options, r = this.containerData, s = this.cropBoxData;
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCropBox(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, t.movable && t.cropBoxMovable && ve(this.face, me, s.width >= r.width && s.height >= r.height ? Os : vr), Nt(this.cropBox, Q({
      width: s.width,
      height: s.height
    }, pe({
      translateX: s.left,
      translateY: s.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), se(this.element, Ze, this.getData());
  }
}, tu = {
  initPreview: function() {
    var t = this.element, r = this.crossOrigin, s = this.options.preview, a = r ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", l = document.createElement("img");
    if (r && (l.crossOrigin = r), l.src = a, l.alt = i, this.viewBox.appendChild(l), this.viewBoxImage = l, !!s) {
      var f = s;
      typeof s == "string" ? f = t.ownerDocument.querySelectorAll(s) : s.querySelector && (f = [s]), this.previews = f, rt(f, function(v) {
        var p = document.createElement("img");
        ve(v, ke, {
          width: v.offsetWidth,
          height: v.offsetHeight,
          html: v.innerHTML
        }), r && (p.crossOrigin = r), p.src = a, p.alt = i, p.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', v.innerHTML = "", v.appendChild(p);
      });
    }
  },
  resetPreview: function() {
    rt(this.previews, function(t) {
      var r = sr(t, ke);
      Nt(t, {
        width: r.width,
        height: r.height
      }), t.innerHTML = r.html, zc(t, ke);
    });
  },
  preview: function() {
    var t = this.imageData, r = this.canvasData, s = this.cropBoxData, a = s.width, i = s.height, l = t.width, f = t.height, v = s.left - r.left - t.left, p = s.top - r.top - t.top;
    !this.cropped || this.disabled || (Nt(this.viewBoxImage, Q({
      width: l,
      height: f
    }, pe(Q({
      translateX: -v,
      translateY: -p
    }, t)))), rt(this.previews, function(h) {
      var m = sr(h, ke), y = m.width, A = m.height, _ = y, $ = A, I = 1;
      a && (I = y / a, $ = i * I), i && $ > A && (I = A / i, _ = a * I, $ = A), Nt(h, {
        width: _,
        height: $
      }), Nt(h.getElementsByTagName("img")[0], Q({
        width: l * I,
        height: f * I
      }, pe(Q({
        translateX: -v * I,
        translateY: -p * I
      }, t))));
    }));
  }
}, eu = {
  bind: function() {
    var t = this.element, r = this.options, s = this.cropper;
    pt(r.cropstart) && wt(t, er, r.cropstart), pt(r.cropmove) && wt(t, tr, r.cropmove), pt(r.cropend) && wt(t, Qe, r.cropend), pt(r.crop) && wt(t, Ze, r.crop), pt(r.zoom) && wt(t, rr, r.zoom), wt(s, Vr, this.onCropStart = this.cropStart.bind(this)), r.zoomable && r.zoomOnWheel && wt(s, Ur, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && wt(s, jr, this.onDblclick = this.dblclick.bind(this)), wt(t.ownerDocument, Hr, this.onCropMove = this.cropMove.bind(this)), wt(t.ownerDocument, Rr, this.onCropEnd = this.cropEnd.bind(this)), r.responsive && wt(window, Br, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, r = this.options, s = this.cropper;
    pt(r.cropstart) && kt(t, er, r.cropstart), pt(r.cropmove) && kt(t, tr, r.cropmove), pt(r.cropend) && kt(t, Qe, r.cropend), pt(r.crop) && kt(t, Ze, r.crop), pt(r.zoom) && kt(t, rr, r.zoom), kt(s, Vr, this.onCropStart), r.zoomable && r.zoomOnWheel && kt(s, Ur, this.onWheel, {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && kt(s, jr, this.onDblclick), kt(t.ownerDocument, Hr, this.onCropMove), kt(t.ownerDocument, Rr, this.onCropEnd), r.responsive && kt(window, Br, this.onResize);
  }
}, ru = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, r = this.container, s = this.containerData, a = r.offsetWidth / s.width, i = r.offsetHeight / s.height, l = Math.abs(a - 1) > Math.abs(i - 1) ? a : i;
      if (l !== 1) {
        var f, v;
        t.restore && (f = this.getCanvasData(), v = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(rt(f, function(p, h) {
          f[h] = p * l;
        })), this.setCropBoxData(rt(v, function(p, h) {
          v[h] = p * l;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ps || this.setDragMode(Hc(this.dragBox, Ge) ? Is : br);
  },
  wheel: function(t) {
    var r = this, s = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      r.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * s, t)));
  },
  cropStart: function(t) {
    var r = t.buttons, s = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (U(r) && r !== 1 || U(s) && s !== 0 || t.ctrlKey))) {
      var a = this.options, i = this.pointers, l;
      t.changedTouches ? rt(t.changedTouches, function(f) {
        i[f.identifier] = De(f);
      }) : i[t.pointerId || 0] = De(t), Object.keys(i).length > 1 && a.zoomable && a.zoomOnTouch ? l = Ls : l = sr(t.target, me), !!Ec.test(l) && se(this.element, er, {
        originalEvent: t,
        action: l
      }) !== !1 && (t.preventDefault(), this.action = l, this.cropping = !1, l === Ts && (this.cropping = !0, at(this.dragBox, Te)));
    }
  },
  cropMove: function(t) {
    var r = this.action;
    if (!(this.disabled || !r)) {
      var s = this.pointers;
      t.preventDefault(), se(this.element, tr, {
        originalEvent: t,
        action: r
      }) !== !1 && (t.changedTouches ? rt(t.changedTouches, function(a) {
        Q(s[a.identifier] || {}, De(a, !0));
      }) : Q(s[t.pointerId || 0] || {}, De(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var r = this.action, s = this.pointers;
      t.changedTouches ? rt(t.changedTouches, function(a) {
        delete s[a.identifier];
      }) : delete s[t.pointerId || 0], r && (t.preventDefault(), Object.keys(s).length || (this.action = ""), this.cropping && (this.cropping = !1, ee(this.dragBox, Te, this.cropped && this.options.modal)), se(this.element, Qe, {
        originalEvent: t,
        action: r
      }));
    }
  }
}, su = {
  change: function(t) {
    var r = this.options, s = this.canvasData, a = this.containerData, i = this.cropBoxData, l = this.pointers, f = this.action, v = r.aspectRatio, p = i.left, h = i.top, m = i.width, y = i.height, A = p + m, _ = h + y, $ = 0, I = 0, R = a.width, H = a.height, O = !0, B;
    !v && t.shiftKey && (v = m && y ? m / y : 1), this.limited && ($ = i.minLeft, I = i.minTop, R = $ + Math.min(a.width, s.width, s.left + s.width), H = I + Math.min(a.height, s.height, s.top + s.height));
    var z = l[Object.keys(l)[0]], k = {
      x: z.endX - z.startX,
      y: z.endY - z.startY
    }, N = function(ot) {
      switch (ot) {
        case Bt:
          A + k.x > R && (k.x = R - A);
          break;
        case Ut:
          p + k.x < $ && (k.x = $ - p);
          break;
        case Pt:
          h + k.y < I && (k.y = I - h);
          break;
        case Qt:
          _ + k.y > H && (k.y = H - _);
          break;
      }
    };
    switch (f) {
      case vr:
        p += k.x, h += k.y;
        break;
      case Bt:
        if (k.x >= 0 && (A >= R || v && (h <= I || _ >= H))) {
          O = !1;
          break;
        }
        N(Bt), m += k.x, m < 0 && (f = Ut, m = -m, p -= m), v && (y = m / v, h += (i.height - y) / 2);
        break;
      case Pt:
        if (k.y <= 0 && (h <= I || v && (p <= $ || A >= R))) {
          O = !1;
          break;
        }
        N(Pt), y -= k.y, h += k.y, y < 0 && (f = Qt, y = -y, h -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case Ut:
        if (k.x <= 0 && (p <= $ || v && (h <= I || _ >= H))) {
          O = !1;
          break;
        }
        N(Ut), m -= k.x, p += k.x, m < 0 && (f = Bt, m = -m, p -= m), v && (y = m / v, h += (i.height - y) / 2);
        break;
      case Qt:
        if (k.y >= 0 && (_ >= H || v && (p <= $ || A >= R))) {
          O = !1;
          break;
        }
        N(Qt), y += k.y, y < 0 && (f = Pt, y = -y, h -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case ue:
        if (v) {
          if (k.y <= 0 && (h <= I || A >= R)) {
            O = !1;
            break;
          }
          N(Pt), y -= k.y, h += k.y, m = y * v;
        } else
          N(Pt), N(Bt), k.x >= 0 ? A < R ? m += k.x : k.y <= 0 && h <= I && (O = !1) : m += k.x, k.y <= 0 ? h > I && (y -= k.y, h += k.y) : (y -= k.y, h += k.y);
        m < 0 && y < 0 ? (f = fe, y = -y, m = -m, h -= y, p -= m) : m < 0 ? (f = de, m = -m, p -= m) : y < 0 && (f = he, y = -y, h -= y);
        break;
      case de:
        if (v) {
          if (k.y <= 0 && (h <= I || p <= $)) {
            O = !1;
            break;
          }
          N(Pt), y -= k.y, h += k.y, m = y * v, p += i.width - m;
        } else
          N(Pt), N(Ut), k.x <= 0 ? p > $ ? (m -= k.x, p += k.x) : k.y <= 0 && h <= I && (O = !1) : (m -= k.x, p += k.x), k.y <= 0 ? h > I && (y -= k.y, h += k.y) : (y -= k.y, h += k.y);
        m < 0 && y < 0 ? (f = he, y = -y, m = -m, h -= y, p -= m) : m < 0 ? (f = ue, m = -m, p -= m) : y < 0 && (f = fe, y = -y, h -= y);
        break;
      case fe:
        if (v) {
          if (k.x <= 0 && (p <= $ || _ >= H)) {
            O = !1;
            break;
          }
          N(Ut), m -= k.x, p += k.x, y = m / v;
        } else
          N(Qt), N(Ut), k.x <= 0 ? p > $ ? (m -= k.x, p += k.x) : k.y >= 0 && _ >= H && (O = !1) : (m -= k.x, p += k.x), k.y >= 0 ? _ < H && (y += k.y) : y += k.y;
        m < 0 && y < 0 ? (f = ue, y = -y, m = -m, h -= y, p -= m) : m < 0 ? (f = he, m = -m, p -= m) : y < 0 && (f = de, y = -y, h -= y);
        break;
      case he:
        if (v) {
          if (k.x >= 0 && (A >= R || _ >= H)) {
            O = !1;
            break;
          }
          N(Bt), m += k.x, y = m / v;
        } else
          N(Qt), N(Bt), k.x >= 0 ? A < R ? m += k.x : k.y >= 0 && _ >= H && (O = !1) : m += k.x, k.y >= 0 ? _ < H && (y += k.y) : y += k.y;
        m < 0 && y < 0 ? (f = de, y = -y, m = -m, h -= y, p -= m) : m < 0 ? (f = fe, m = -m, p -= m) : y < 0 && (f = ue, y = -y, h -= y);
        break;
      case Os:
        this.move(k.x, k.y), O = !1;
        break;
      case Ls:
        this.zoom(Uc(l), t), O = !1;
        break;
      case Ts:
        if (!k.x || !k.y) {
          O = !1;
          break;
        }
        B = zs(this.cropper), p = z.startX - B.left, h = z.startY - B.top, m = i.minWidth, y = i.minHeight, k.x > 0 ? f = k.y > 0 ? he : ue : k.x < 0 && (p -= m, f = k.y > 0 ? fe : de), k.y < 0 && (h -= y), this.cropped || ($t(this.cropBox, gt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    O && (i.width = m, i.height = y, i.left = p, i.top = h, this.action = f, this.renderCropBox()), rt(l, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, ou = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, Te), $t(this.cropBox, gt), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), $t(this.dragBox, Te), at(this.cropBox, gt)), this;
  },
  replace: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), r ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, rt(this.previews, function(s) {
      s.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, $t(this.cropper, Pr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Pr)), this;
  },
  destroy: function() {
    var t = this.element;
    return t[Z] ? (t[Z] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, a = s.left, i = s.top;
    return this.moveTo(Be(t) ? t : a + Number(t), Be(r) ? r : i + Number(r));
  },
  moveTo: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, a = !1;
    return t = Number(t), r = Number(r), this.ready && !this.disabled && this.options.movable && (U(t) && (s.left = t, a = !0), U(r) && (s.top = r, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(t, r) {
    var s = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(s.width * t / s.naturalWidth, null, r);
  },
  zoomTo: function(t, r, s) {
    var a = this.options, i = this.canvasData, l = i.width, f = i.height, v = i.naturalWidth, p = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var h = v * t, m = p * t;
      if (se(this.element, rr, {
        ratio: t,
        oldRatio: l / v,
        originalEvent: s
      }) === !1)
        return this;
      if (s) {
        var y = this.pointers, A = zs(this.cropper), _ = y && Object.keys(y).length ? Kc(y) : {
          pageX: s.pageX,
          pageY: s.pageY
        };
        i.left -= (h - l) * ((_.pageX - A.left - i.left) / l), i.top -= (m - f) * ((_.pageY - A.top - i.top) / f);
      } else
        te(r) && U(r.x) && U(r.y) ? (i.left -= (h - l) * ((r.x - i.left) / l), i.top -= (m - f) * ((r.y - i.top) / f)) : (i.left -= (h - l) / 2, i.top -= (m - f) / 2);
      i.width = h, i.height = m, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  rotateTo: function(t) {
    return t = Number(t), U(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(t) {
    var r = this.imageData.scaleY;
    return this.scale(t, U(r) ? r : 1);
  },
  scaleY: function(t) {
    var r = this.imageData.scaleX;
    return this.scale(U(r) ? r : 1, t);
  },
  scale: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.imageData, a = !1;
    return t = Number(t), r = Number(r), this.ready && !this.disabled && this.options.scalable && (U(t) && (s.scaleX = t, a = !0), U(r) && (s.scaleY = r, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = this.options, s = this.imageData, a = this.canvasData, i = this.cropBoxData, l;
    if (this.ready && this.cropped) {
      l = {
        x: i.left - a.left,
        y: i.top - a.top,
        width: i.width,
        height: i.height
      };
      var f = s.width / s.naturalWidth;
      if (rt(l, function(h, m) {
        l[m] = h / f;
      }), t) {
        var v = Math.round(l.y + l.height), p = Math.round(l.x + l.width);
        l.x = Math.round(l.x), l.y = Math.round(l.y), l.width = p - l.x, l.height = v - l.y;
      }
    } else
      l = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return r.rotatable && (l.rotate = s.rotate || 0), r.scalable && (l.scaleX = s.scaleX || 1, l.scaleY = s.scaleY || 1), l;
  },
  setData: function(t) {
    var r = this.options, s = this.imageData, a = this.canvasData, i = {};
    if (this.ready && !this.disabled && te(t)) {
      var l = !1;
      r.rotatable && U(t.rotate) && t.rotate !== s.rotate && (s.rotate = t.rotate, l = !0), r.scalable && (U(t.scaleX) && t.scaleX !== s.scaleX && (s.scaleX = t.scaleX, l = !0), U(t.scaleY) && t.scaleY !== s.scaleY && (s.scaleY = t.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var f = s.width / s.naturalWidth;
      U(t.x) && (i.left = t.x * f + a.left), U(t.y) && (i.top = t.y * f + a.top), U(t.width) && (i.width = t.width * f), U(t.height) && (i.height = t.height * f), this.setCropBoxData(i);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var t = this.canvasData, r = {};
    return this.ready && rt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(s) {
      r[s] = t[s];
    }), r;
  },
  setCanvasData: function(t) {
    var r = this.canvasData, s = r.aspectRatio;
    return this.ready && !this.disabled && te(t) && (U(t.left) && (r.left = t.left), U(t.top) && (r.top = t.top), U(t.width) ? (r.width = t.width, r.height = t.width / s) : U(t.height) && (r.height = t.height, r.width = t.height * s), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var t = this.cropBoxData, r;
    return this.ready && this.cropped && (r = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), r || {};
  },
  setCropBoxData: function(t) {
    var r = this.cropBoxData, s = this.options.aspectRatio, a, i;
    return this.ready && this.cropped && !this.disabled && te(t) && (U(t.left) && (r.left = t.left), U(t.top) && (r.top = t.top), U(t.width) && t.width !== r.width && (a = !0, r.width = t.width), U(t.height) && t.height !== r.height && (i = !0, r.height = t.height), s && (a ? r.height = r.width / s : i && (r.width = r.height * s)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var r = this.canvasData, s = Yc(this.image, this.imageData, r, t);
    if (!this.cropped)
      return s;
    var a = this.getData(), i = a.x, l = a.y, f = a.width, v = a.height, p = s.width / Math.floor(r.naturalWidth);
    p !== 1 && (i *= p, l *= p, f *= p, v *= p);
    var h = f / v, m = jt({
      aspectRatio: h,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), y = jt({
      aspectRatio: h,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), A = jt({
      aspectRatio: h,
      width: t.width || (p !== 1 ? s.width : f),
      height: t.height || (p !== 1 ? s.height : v)
    }), _ = A.width, $ = A.height;
    _ = Math.min(m.width, Math.max(y.width, _)), $ = Math.min(m.height, Math.max(y.height, $));
    var I = document.createElement("canvas"), R = I.getContext("2d");
    I.width = re(_), I.height = re($), R.fillStyle = t.fillColor || "transparent", R.fillRect(0, 0, _, $);
    var H = t.imageSmoothingEnabled, O = H === void 0 ? !0 : H, B = t.imageSmoothingQuality;
    R.imageSmoothingEnabled = O, B && (R.imageSmoothingQuality = B);
    var z = s.width, k = s.height, N = i, G = l, ot, it, dt, yt, bt, J;
    N <= -f || N > z ? (N = 0, ot = 0, dt = 0, bt = 0) : N <= 0 ? (dt = -N, N = 0, ot = Math.min(z, f + N), bt = ot) : N <= z && (dt = 0, ot = Math.min(f, z - N), bt = ot), ot <= 0 || G <= -v || G > k ? (G = 0, it = 0, yt = 0, J = 0) : G <= 0 ? (yt = -G, G = 0, it = Math.min(k, v + G), J = it) : G <= k && (yt = 0, it = Math.min(v, k - G), J = it);
    var E = [N, G, ot, it];
    if (bt > 0 && J > 0) {
      var V = _ / f;
      E.push(dt * V, yt * V, bt * V, J * V);
    }
    return R.drawImage.apply(R, [s].concat(As(E.map(function(P) {
      return Math.floor(re(P));
    })))), I;
  },
  setAspectRatio: function(t) {
    var r = this.options;
    return !this.disabled && !Be(t) && (r.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(t) {
    var r = this.options, s = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var i = t === br, l = r.movable && t === Is;
      t = i || l ? t : Ps, r.dragMode = t, ve(s, me, t), ee(s, Ge, i), ee(s, Je, l), r.cropBoxMovable || (ve(a, me, t), ee(a, Ge, i), ee(a, Je, l));
    }
    return this;
  }
}, iu = Et.Cropper, Us = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (bc(this, e), !t || !Oc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, Wr, te(r) && r), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return yc(e, [{
    key: "init",
    value: function() {
      var r = this.element, s = r.tagName.toLowerCase(), a;
      if (!r[Z]) {
        if (r[Z] = this, s === "img") {
          if (this.isImg = !0, a = r.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = r.src;
        } else
          s === "canvas" && window.HTMLCanvasElement && (a = r.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(r) {
      var s = this;
      if (!!r) {
        this.url = r, this.imageData = {};
        var a = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Ac.test(r)) {
          Tc.test(r) ? this.read(Fc(r)) : this.clone();
          return;
        }
        var l = new XMLHttpRequest(), f = this.clone.bind(this);
        this.reloading = !0, this.xhr = l, l.onabort = f, l.onerror = f, l.ontimeout = f, l.onprogress = function() {
          l.getResponseHeader("content-type") !== Kr && l.abort();
        }, l.onload = function() {
          s.read(l.response);
        }, l.onloadend = function() {
          s.reloading = !1, s.xhr = null;
        }, i.checkCrossOrigin && Xr(r) && a.crossOrigin && (r = qr(r)), l.open("GET", r, !0), l.responseType = "arraybuffer", l.withCredentials = a.crossOrigin === "use-credentials", l.send();
      }
    }
  }, {
    key: "read",
    value: function(r) {
      var s = this.options, a = this.imageData, i = Jc(r), l = 0, f = 1, v = 1;
      if (i > 1) {
        this.url = Gc(r, Kr);
        var p = Zc(i);
        l = p.rotate, f = p.scaleX, v = p.scaleY;
      }
      s.rotatable && (a.rotate = l), s.scalable && (a.scaleX = f, a.scaleY = v), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var r = this.element, s = this.url, a = r.crossOrigin, i = s;
      this.options.checkCrossOrigin && Xr(s) && (a || (a = "anonymous"), i = qr(s)), this.crossOrigin = a, this.crossOriginUrl = i;
      var l = document.createElement("img");
      a && (l.crossOrigin = a), l.src = i || s, l.alt = r.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), at(l, Nr), r.parentNode.insertBefore(l, r.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var r = this, s = this.image;
      s.onload = null, s.onerror = null, this.sizing = !0;
      var a = Et.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Et.navigator.userAgent), i = function(p, h) {
        Q(r.imageData, {
          naturalWidth: p,
          naturalHeight: h,
          aspectRatio: p / h
        }), r.initialImageData = Q({}, r.imageData), r.sizing = !1, r.sized = !0, r.build();
      };
      if (s.naturalWidth && !a) {
        i(s.naturalWidth, s.naturalHeight);
        return;
      }
      var l = document.createElement("img"), f = document.body || document.documentElement;
      this.sizingImage = l, l.onload = function() {
        i(l.width, l.height), a || f.removeChild(l);
      }, l.src = s.src, a || (l.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", f.appendChild(l));
    }
  }, {
    key: "stop",
    value: function() {
      var r = this.image;
      r.onload = null, r.onerror = null, r.parentNode.removeChild(r), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var r = this.element, s = this.options, a = this.image, i = r.parentNode, l = document.createElement("div");
        l.innerHTML = Lc;
        var f = l.querySelector(".".concat(Z, "-container")), v = f.querySelector(".".concat(Z, "-canvas")), p = f.querySelector(".".concat(Z, "-drag-box")), h = f.querySelector(".".concat(Z, "-crop-box")), m = h.querySelector(".".concat(Z, "-face"));
        this.container = i, this.cropper = f, this.canvas = v, this.dragBox = p, this.cropBox = h, this.viewBox = f.querySelector(".".concat(Z, "-view-box")), this.face = m, v.appendChild(a), at(r, gt), i.insertBefore(f, r.nextSibling), this.isImg || $t(a, Nr), this.initPreview(), this.bind(), s.initialAspectRatio = Math.max(0, s.initialAspectRatio) || NaN, s.aspectRatio = Math.max(0, s.aspectRatio) || NaN, s.viewMode = Math.max(0, Math.min(3, Math.round(s.viewMode))) || 0, at(h, gt), s.guides || at(h.getElementsByClassName("".concat(Z, "-dashed")), gt), s.center || at(h.getElementsByClassName("".concat(Z, "-center")), gt), s.background && at(f, "".concat(Z, "-bg")), s.highlight || at(m, Dc), s.cropBoxMovable && (at(m, Je), ve(m, me, vr)), s.cropBoxResizable || (at(h.getElementsByClassName("".concat(Z, "-line")), gt), at(h.getElementsByClassName("".concat(Z, "-point")), gt)), this.render(), this.ready = !0, this.setDragMode(s.dragMode), s.autoCrop && this.crop(), this.setData(s.data), pt(s.ready) && wt(r, zr, s.ready, {
          once: !0
        }), se(r, zr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), $t(this.element, gt));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = iu, e;
    }
  }, {
    key: "setDefaults",
    value: function(r) {
      Q(Wr, te(r) && r);
    }
  }]), e;
}();
Q(Us.prototype, Qc, tu, eu, ru, su, ou);
const nu = { class: "flex" }, au = ["aria-label"], lu = { class: "ml-auto mb-2" }, cu = { class: "w-full flex justify-center" }, uu = ["src"], du = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { t: s } = L("i18n"), { apiUrl: a } = At(), i = T(null), l = T(null), f = T(!1), v = T(""), p = T(!1), h = () => {
      f.value = !f.value, f.value ? l.value = new Us(i.value, {
        crop(A) {
        }
      }) : l.value.destroy();
    }, m = L("postData"), y = () => {
      l.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (A) => {
          v.value = "", p.value = !1, Ee(a.value, {
            method: "POST",
            params: Object.assign(m, {
              q: "upload",
              adapter: r.selection.adapter,
              path: r.selection.item.path,
              file: A
            }),
            name: r.selection.item.basename,
            json: !1
          }).then((_) => {
            v.value = s("Updated."), i.value.src = Xe(r.selection.adapter, r.selection.item.path), h(), t("load");
          }).catch((_) => {
            v.value = s(_.message), p.value = !0;
          });
        }
      );
    };
    return Ct(() => {
      t("load");
    }), (A, _) => (x(), C(lt, null, [
      d("div", nu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(e.selection.item.basename), 9, au),
        d("div", lu, [
          f.value ? (x(), C("button", {
            key: 0,
            onClick: y,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, D(S(s)("Crop")), 1)) : K("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: _[0] || (_[0] = ($) => h())
          }, D(f.value ? S(s)("Cancel") : S(s)("Edit")), 1)
        ])
      ]),
      d("div", cu, [
        d("img", {
          ref_key: "image",
          ref: i,
          class: "max-w-[50vh] max-h-[50vh]",
          src: S(Xe)(r.selection.adapter, r.selection.item.path),
          alt: ""
        }, null, 8, uu)
      ]),
      v.value.length ? (x(), F(Ot, {
        key: 0,
        onHidden: _[1] || (_[1] = ($) => v.value = ""),
        error: p.value
      }, {
        default: W(() => [
          st(D(v.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : K("", !0)
    ], 64));
  }
}, hu = { class: "flex" }, fu = ["aria-label"], pu = /* @__PURE__ */ d("div", null, null, -1), gu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    return Ct(() => {
      t("load");
    }), (r, s) => (x(), C(lt, null, [
      d("div", hu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(e.selection.item.basename), 9, fu)
      ]),
      pu
    ], 64));
  }
}, mu = ["aria-label"], vu = {
  class: "w-full",
  preload: "",
  controls: ""
}, bu = ["src"], yu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: s } = At(), a = () => s.value + "?" + Xt({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ct(() => {
      t("load");
    }), (i, l) => (x(), C(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(e.selection.item.basename), 9, mu),
      d("div", null, [
        d("video", vu, [
          d("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, bu),
          st(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, wu = ["aria-label"], xu = {
  class: "w-full",
  controls: ""
}, Su = ["src"], _u = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: s } = At(), a = () => s.value + "?" + Xt({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ct(() => {
      t("load");
    }), (i, l) => (x(), C(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(e.selection.item.basename), 9, wu),
      d("div", null, [
        d("audio", xu, [
          d("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Su),
          st(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, ku = ["aria-label"], Du = ["data"], Cu = ["src"], Mu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: s } = At(), a = () => s.value + "?" + Xt({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ct(() => {
      t("load");
    }), (i, l) => (x(), C(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(e.selection.item.basename), 9, ku),
      d("div", null, [
        d("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          d("iframe", {
            class: "border-0",
            src: a(),
            width: "100%",
            height: "100%"
          }, `\r
          <p>\r
            Your browser does not support PDFs.\r
            <a href="https://example.com/test.pdf">Download the PDF</a>\r
            .\r
          </p>\r
        `, 8, Cu)
        ], 8, Du)
      ])
    ], 64));
  }
}, $u = { class: "sm:flex sm:items-start" }, Eu = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Au = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Tu = {
  key: 0,
  class: "flex leading-5"
}, Ou = /* @__PURE__ */ d("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ d("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Lu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Iu = { class: "font-bold pl-2" }, Pu = { class: "font-bold pl-2" }, Nu = {
  name: "VFModalPreview"
}, ju = /* @__PURE__ */ Object.assign(Nu, {
  props: {
    selection: Object
  },
  setup(e) {
    const t = e, { apiUrl: r } = At(), s = L("emitter"), { t: a } = L("i18n"), i = T(!1), l = (p) => i.value = p, f = (p) => {
      var h;
      return ((h = t.selection.item.mime_type) != null ? h : "").startsWith(p);
    }, v = () => {
      const p = r.value + "?" + Xt({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      s.emit("vf-download", p);
    };
    return (p, h) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: h[6] || (h[6] = (m) => S(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Close")), 1),
        d("button", {
          type: "button",
          onClick: h[7] || (h[7] = (m) => v()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Download")), 1)
      ]),
      default: W(() => [
        d("div", $u, [
          d("div", Eu, [
            d("div", null, [
              f("text") ? (x(), F(vc, {
                key: 0,
                selection: e.selection,
                onLoad: h[0] || (h[0] = (m) => l(!0))
              }, null, 8, ["selection"])) : f("image") ? (x(), F(du, {
                key: 1,
                selection: e.selection,
                onLoad: h[1] || (h[1] = (m) => l(!0))
              }, null, 8, ["selection"])) : f("video") ? (x(), F(yu, {
                key: 2,
                selection: e.selection,
                onLoad: h[2] || (h[2] = (m) => l(!0))
              }, null, 8, ["selection"])) : f("audio") ? (x(), F(_u, {
                key: 3,
                selection: e.selection,
                onLoad: h[3] || (h[3] = (m) => l(!0))
              }, null, 8, ["selection"])) : f("application/pdf") ? (x(), F(Mu, {
                key: 4,
                selection: e.selection,
                onLoad: h[4] || (h[4] = (m) => l(!0))
              }, null, 8, ["selection"])) : (x(), F(gu, {
                key: 5,
                selection: e.selection,
                onLoad: h[5] || (h[5] = (m) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            d("div", Au, [
              i.value == !1 ? (x(), C("div", Tu, [
                Ou,
                d("span", null, D(S(a)("Loading")), 1)
              ])) : K("", !0)
            ])
          ])
        ]),
        d("div", Lu, [
          d("div", null, [
            d("span", Iu, D(S(a)("File Size")) + ": ", 1),
            st(D(S(Qr)(e.selection.item.file_size)), 1)
          ]),
          d("div", null, [
            d("span", Pu, D(S(a)("Last Modified")) + ": ", 1),
            st(" " + D(S(ts)(e.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Vu = { class: "sm:flex sm:items-start" }, Hu = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), Ru = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, zu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Bu = { class: "mt-2" }, Uu = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, Ku = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Wu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Yu = [
  Wu
], Xu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Fu = [
  qu
], Gu = { class: "ml-1.5" }, Ju = ["onKeyup"], Zu = {
  name: "VFModalRename"
}, Qu = /* @__PURE__ */ Object.assign(Zu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(t.selection.items[0]), l = T(t.selection.items[0].basename), f = T(""), v = () => {
      l.value != "" && r.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: s.value,
          path: t.current.dirname,
          item: i.value.path,
          name: l.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is renamed.", l.value) });
        },
        onError: (p) => {
          f.value = a(p.message);
        }
      });
    };
    return (p, h) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Rename")), 1),
        d("button", {
          type: "button",
          onClick: h[2] || (h[2] = (m) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", Vu, [
          Hu,
          d("div", Ru, [
            d("h3", zu, D(S(a)("Rename")), 1),
            d("div", Bu, [
              d("p", Uu, [
                i.value.type == "dir" ? (x(), C("svg", Ku, Yu)) : (x(), C("svg", Xu, Fu)),
                d("span", Gu, D(i.value.basename), 1)
              ]),
              xt(d("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (m) => l.value = m),
                onKeyup: ie(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, Ju), [
                [ne, l.value]
              ]),
              f.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: h[1] || (h[1] = (m) => f.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(f.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), td = { class: "sm:flex sm:items-start" }, ed = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), rd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, od = { class: "mt-2" }, id = { class: "text-gray-500 mb-1" }, nd = ["id"], ad = {
  key: 0,
  class: "py-2"
}, ld = ["disabled", "onClick"], cd = {
  name: "VFModalUpload"
}, ud = /* @__PURE__ */ Object.assign(cd, {
  props: {
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter"), { apiUrl: s } = At(), { t: a } = L("i18n"), i = T(null), l = T(null), f = T(null), v = T([]), p = T(""), h = T(!0), m = () => {
      p.value = "", i.value.start();
    }, y = L("postData");
    return Ct(() => {
      i.value = new ze.Uploader({
        runtimes: "html5",
        browse_button: f.value,
        container: l.value,
        max_file_size: "10mb",
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + Xt(Object.assign(y, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        headers: {
          ...$e && { "X-CSRF-Token": $e }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(A, _) {
            h.value = !1, ze.each(_, function($) {
              v.value.push({
                id: $.id,
                name: $.name,
                size: ze.formatSize($.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(A, _) {
            v.value[v.value.findIndex(($) => $.id == _.id)].percent = _.percent + "%";
          },
          UploadComplete: function() {
            h.value = !0, r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function(A, _) {
            i.value.stop(), p.value = a(JSON.parse(_.response).message);
          }
        }
      }), i.value.init();
    }), (A, _) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          disabled: h.value,
          onClick: Kt(m, ["prevent"]),
          type: "button",
          class: mt([h.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, D(S(a)("Upload")), 11, ld),
        d("button", {
          type: "button",
          onClick: _[1] || (_[1] = ($) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", td, [
          ed,
          d("div", rd, [
            d("h3", sd, D(S(a)("Upload files")), 1),
            d("div", od, [
              d("div", id, [
                (x(!0), C(lt, null, St(v.value, ($) => (x(), C("div", null, [
                  d("div", {
                    id: $.id
                  }, [
                    st(D($.name) + " ( " + D($.size) + ") ", 1),
                    d("b", null, D($.percent), 1)
                  ], 8, nd)
                ]))), 256)),
                v.value.length ? K("", !0) : (x(), C("div", ad, D(S(a)("No files selected!")), 1))
              ]),
              d("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: l
              }, [
                d("button", {
                  ref_key: "pickFiles",
                  ref: f,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, D(S(a)("Select Files")), 513)
              ], 512),
              p.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: _[0] || (_[0] = ($) => p.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(p.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), dd = { class: "sm:flex sm:items-start" }, hd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), fd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, pd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, gd = { class: "mt-2" }, md = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, vd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, bd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), yd = [
  bd
], wd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Sd = [
  xd
], _d = { class: "ml-1.5" }, kd = ["onKeyup", "placeholder"], Dd = {
  name: "VFModalArchive"
}, Cd = /* @__PURE__ */ Object.assign(Dd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(""), l = T(""), f = T(t.selection.items), v = () => {
      f.value.length && r.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: t.current.dirname,
          items: JSON.stringify(f.value.map(({ path: p, type: h }) => ({ path: p, type: h }))),
          name: i.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (p) => {
          l.value = a(p.message);
        }
      });
    };
    return (p, h) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Archive")), 1),
        d("button", {
          type: "button",
          onClick: h[2] || (h[2] = (m) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", dd, [
          hd,
          d("div", fd, [
            d("h3", pd, D(S(a)("Archive the files")), 1),
            d("div", gd, [
              (x(!0), C(lt, null, St(f.value, (m) => (x(), C("p", md, [
                m.type == "dir" ? (x(), C("svg", vd, yd)) : (x(), C("svg", wd, Sd)),
                d("span", _d, D(m.basename), 1)
              ]))), 256)),
              xt(d("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (m) => i.value = m),
                onKeyup: ie(v, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, kd), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: h[1] || (h[1] = (m) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Md = { class: "sm:flex sm:items-start" }, $d = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Ed = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ad = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Td = { class: "mt-2" }, Od = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ld = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Id = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Pd = [
  Id
], Nd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, jd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Vd = [
  jd
], Hd = { class: "ml-1.5" }, Rd = { class: "my-1 text-sm text-gray-500" }, zd = {
  name: "VFModalUnarchive"
}, Bd = /* @__PURE__ */ Object.assign(zd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n");
    T("");
    const i = T(t.selection.items[0]), l = T(""), f = T([]), v = () => {
      r.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: s.value,
          path: t.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (p) => {
          l.value = a(p.message);
        }
      });
    };
    return (p, h) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Unarchive")), 1),
        d("button", {
          type: "button",
          onClick: h[1] || (h[1] = (m) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", Md, [
          $d,
          d("div", Ed, [
            d("h3", Ad, D(S(a)("Unarchive")), 1),
            d("div", Td, [
              (x(!0), C(lt, null, St(f.value, (m) => (x(), C("p", Od, [
                m.type == "dir" ? (x(), C("svg", Ld, Pd)) : (x(), C("svg", Nd, Vd)),
                d("span", Hd, D(m.basename), 1)
              ]))), 256)),
              d("p", Rd, D(S(a)("The archive will be unarchived at")) + " (" + D(e.current.dirname) + ")", 1),
              l.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: h[0] || (h[0] = (m) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ud = { class: "sm:flex sm:items-start" }, Kd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), Wd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Yd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Xd = { class: "mt-2" }, qd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Fd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Jd = [
  Gd
], Zd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), th = [
  Qd
], eh = { class: "ml-1.5" }, rh = { class: "text-sm text-gray-500 pb-1 pt-3" }, sh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, oh = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), ih = { class: "ml-1.5 overflow-auto" }, nh = {
  name: "VFModalMove"
}, ah = /* @__PURE__ */ Object.assign(nh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = L("emitter"), { t: s } = L("i18n");
    L("storage");
    const a = L("adapter"), i = T(t.selection.items.from), l = T(""), f = () => {
      i.value.length && r.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: v, type: p }) => ({ path: v, type: p }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: s("Files moved.", t.selection.items.to.name) });
        },
        onError: (v) => {
          l.value = s(v.message);
        }
      });
    };
    return (v, p) => (x(), F(Tt, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(s)("Yes, Move!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (h) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(s)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", Ud, [
          Kd,
          d("div", Wd, [
            d("h3", Yd, D(S(s)("Move files")), 1),
            d("div", Xd, [
              (x(!0), C(lt, null, St(i.value, (h) => (x(), C("p", qd, [
                h.type == "dir" ? (x(), C("svg", Fd, Jd)) : (x(), C("svg", Zd, th)),
                d("span", eh, D(h.path), 1)
              ]))), 256)),
              d("p", rh, D(S(s)("Are you sure you want to move these files?")), 1),
              d("p", sh, [
                oh,
                d("span", ih, D(e.selection.items.to.path), 1)
              ]),
              l.value.length ? (x(), F(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (h) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: Hl,
  ModalMessage: Xl,
  ModalNewFolder: rc,
  ModalNewFile: dc,
  ModalPreview: ju,
  ModalRename: Qu,
  ModalUpload: ud,
  ModalArchive: Cd,
  ModalUnarchive: Bd,
  ModalMove: ah
}, Symbol.toStringTag, { value: "Module" })), Ke = {
  VueFinder: fl,
  ...lh
};
const dh = {
  install(e) {
    for (const t in Ke)
      if (Ke.hasOwnProperty(t)) {
        const r = Ke[t];
        e.component(r.name, r);
      }
  }
};
export {
  dh as default
};
