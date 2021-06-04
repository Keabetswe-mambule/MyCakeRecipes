!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t(
        (e = "undefined" != typeof globalThis ? globalThis : e || self).firebase
      );
})(this, function (gt) {
  "use strict";
  try {
    !function () {
      function e(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var o = e(gt),
        n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
        };
      function t(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function l(e, a, s, u) {
        return new (s = s || Promise)(function (r, t) {
          function n(e) {
            try {
              i(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            try {
              i(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(n, o);
          }
          i((u = u.apply(e, a || [])).next());
        });
      }
      function h(r, n) {
        var o,
          i,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          e = { next: t(0), throw: t(1), return: t(2) };
        return (
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((o = 1),
                    i &&
                      (a =
                        2 & t[0]
                          ? i.return
                          : t[0]
                          ? i.throw || ((a = i.return) && a.call(i), 0)
                          : i.next) &&
                      !(a = a.call(i, t[1])).done)
                  )
                    return a;
                  switch (((i = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return s.label++, { value: t[1], done: !1 };
                    case 5:
                      s.label++, (i = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                        s.label = t[1];
                        break;
                      }
                      if (6 === t[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = t);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(t);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  t = n.call(r, s);
                } catch (e) {
                  (t = [6, e]), (i = 0);
                } finally {
                  o = a = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function g(e, t) {
        for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
          e[o] = t[r];
        return e;
      }
      var a,
        s = "FirebaseError",
        u = (t(c, (a = Error)), c);
      function c(e, t, r) {
        t = a.call(this, t) || this;
        return (
          (t.code = e),
          (t.customData = r),
          (t.name = s),
          Object.setPrototypeOf(t, c.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(t, p.prototype.create),
          t
        );
      }
      var p =
        ((r.prototype.create = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          var n,
            o = t[0] || {},
            i = this.service + "/" + e,
            e = this.errors[e],
            e = e
              ? ((n = o),
                e.replace(f, function (e, t) {
                  var r = n[t];
                  return null != r ? String(r) : "<" + t + "?>";
                }))
              : "Error",
            e = this.serviceName + ": " + e + " (" + i + ").";
          return new u(i, e, o);
        }),
        r);
      function r(e, t, r) {
        (this.service = e), (this.serviceName = t), (this.errors = r);
      }
      var f = /\{\$([^}]+)}/g;
      function d(e) {
        return e && e._delegate ? e._delegate : e;
      }
      var _ =
        ((b.prototype.setInstantiationMode = function (e) {
          return (this.instantiationMode = e), this;
        }),
        (b.prototype.setMultipleInstances = function (e) {
          return (this.multipleInstances = e), this;
        }),
        (b.prototype.setServiceProps = function (e) {
          return (this.serviceProps = e), this;
        }),
        (b.prototype.setInstanceCreatedCallback = function (e) {
          return (this.onInstanceCreated = e), this;
        }),
        b);
      function b(e, t, r) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = r),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      var v,
        m = "firebasestorage.googleapis.com",
        y = "storageBucket",
        w =
          (t(R, (v = u)),
          (R.prototype._codeEquals = function (e) {
            return k(e) === this.code;
          }),
          Object.defineProperty(R.prototype, "serverResponse", {
            get: function () {
              return this.customData.serverResponse;
            },
            set: function (e) {
              (this.customData.serverResponse = e),
                this.customData.serverResponse
                  ? (this.message =
                      this._baseMessage + "\n" + this.customData.serverResponse)
                  : (this.message = this._baseMessage);
            },
            enumerable: !1,
            configurable: !0,
          }),
          R);
      function R(e, t) {
        e =
          v.call(this, k(e), "Firebase Storage: " + t + " (" + k(e) + ")") ||
          this;
        return (
          (e.customData = { serverResponse: null }),
          (e._baseMessage = e.message),
          Object.setPrototypeOf(e, R.prototype),
          e
        );
      }
      function k(e) {
        return "storage/" + e;
      }
      function T() {
        return new w(
          "unknown",
          "An unknown error occurred, please check the error payload for server response."
        );
      }
      function O() {
        return new w("canceled", "User canceled the upload/download.");
      }
      function x() {
        return new w(
          "cannot-slice-blob",
          "Cannot slice blob for upload. Please retry the upload."
        );
      }
      function P(e) {
        return new w("invalid-argument", e);
      }
      function S() {
        return new w("app-deleted", "The Firebase app was deleted.");
      }
      function U(e) {
        return new w(
          "invalid-root-operation",
          "The operation '" +
            e +
            "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
        );
      }
      function C(e, t) {
        return new w(
          "invalid-format",
          "String does not match format '" + e + "': " + t
        );
      }
      function E(e) {
        throw new w("internal-error", "Internal error: " + e);
      }
      var A = {
          RAW: "raw",
          BASE64: "base64",
          BASE64URL: "base64url",
          DATA_URL: "data_url",
        },
        I = function (e, t) {
          (this.data = e), (this.contentType = t || null);
        };
      function j(e, t) {
        switch (e) {
          case A.RAW:
            return new I(q(t));
          case A.BASE64:
          case A.BASE64URL:
            return new I(L(e, t));
          case A.DATA_URL:
            return new I(
              (function (e) {
                e = new N(e);
                return e.base64
                  ? L(A.BASE64, e.rest)
                  : (function (e) {
                      var t;
                      try {
                        t = decodeURIComponent(e);
                      } catch (e) {
                        throw C(A.DATA_URL, "Malformed data URL.");
                      }
                      return q(t);
                    })(e.rest);
              })(t),
              new N(t).contentType
            );
        }
        throw T();
      }
      function q(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e.charCodeAt(r);
          n <= 127
            ? t.push(n)
            : n <= 2047
            ? t.push(192 | (n >> 6), 128 | (63 & n))
            : 55296 == (64512 & n)
            ? r < e.length - 1 && 56320 == (64512 & e.charCodeAt(r + 1))
              ? ((n = 65536 | ((1023 & n) << 10) | (1023 & e.charCodeAt(++r))),
                t.push(
                  240 | (n >> 18),
                  128 | ((n >> 12) & 63),
                  128 | ((n >> 6) & 63),
                  128 | (63 & n)
                ))
              : t.push(239, 191, 189)
            : 56320 == (64512 & n)
            ? t.push(239, 191, 189)
            : t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n));
        }
        return new Uint8Array(t);
      }
      function L(t, e) {
        switch (t) {
          case A.BASE64:
            var r = -1 !== e.indexOf("-"),
              n = -1 !== e.indexOf("_");
            if (r || n)
              throw C(
                t,
                "Invalid character '" +
                  (r ? "-" : "_") +
                  "' found: is it base64url encoded?"
              );
            break;
          case A.BASE64URL:
            (n = -1 !== e.indexOf("+")), (r = -1 !== e.indexOf("/"));
            if (n || r)
              throw C(
                t,
                "Invalid character '" +
                  (n ? "+" : "/") +
                  "' found: is it base64 encoded?"
              );
            e = e.replace(/-/g, "+").replace(/_/g, "/");
        }
        var o;
        try {
          o = atob(e);
        } catch (e) {
          throw C(t, "Invalid character found");
        }
        for (var i = new Uint8Array(o.length), a = 0; a < o.length; a++)
          i[a] = o.charCodeAt(a);
        return i;
      }
      var N = function (e) {
        var t;
        if (
          ((this.base64 = !1),
          (this.contentType = null) === (t = e.match(/^data:([^,]+)?,/)))
        )
          throw C(
            A.DATA_URL,
            "Must be formatted 'data:[<mediatype>][;base64],<data>"
          );
        var r,
          n = t[1] || null;
        null != n &&
          ((this.base64 =
            ((r = ";base64"),
            (t = n).length >= r.length &&
              t.substring(t.length - r.length) === r)),
          (this.contentType = this.base64
            ? n.substring(0, n.length - ";base64".length)
            : n)),
          (this.rest = e.substring(e.indexOf(",") + 1));
      };
      var M,
        B,
        F = { STATE_CHANGED: "state_changed" },
        D = {
          RUNNING: "running",
          PAUSED: "paused",
          SUCCESS: "success",
          CANCELED: "canceled",
          ERROR: "error",
        };
      function z(e) {
        switch (e) {
          case "running":
          case "pausing":
          case "canceling":
            return D.RUNNING;
          case "paused":
            return D.PAUSED;
          case "success":
            return D.SUCCESS;
          case "canceled":
            return D.CANCELED;
          case "error":
          default:
            return D.ERROR;
        }
      }
      ((B = M = M || {})[(B.NO_ERROR = 0)] = "NO_ERROR"),
        (B[(B.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
        (B[(B.ABORT = 2)] = "ABORT");
      var H =
        ((X.prototype.send = function (e, t, r, n) {
          if (this.sent_) throw E("cannot .send() more than once");
          if (((this.sent_ = !0), this.xhr_.open(t, e, !0), void 0 !== n))
            for (var o in n)
              n.hasOwnProperty(o) &&
                this.xhr_.setRequestHeader(o, n[o].toString());
          return (
            void 0 !== r ? this.xhr_.send(r) : this.xhr_.send(),
            this.sendPromise_
          );
        }),
        (X.prototype.getErrorCode = function () {
          if (!this.sent_) throw E("cannot .getErrorCode() before sending");
          return this.errorCode_;
        }),
        (X.prototype.getStatus = function () {
          if (!this.sent_) throw E("cannot .getStatus() before sending");
          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        }),
        (X.prototype.getResponseText = function () {
          if (!this.sent_) throw E("cannot .getResponseText() before sending");
          return this.xhr_.responseText;
        }),
        (X.prototype.abort = function () {
          this.xhr_.abort();
        }),
        (X.prototype.getResponseHeader = function (e) {
          return this.xhr_.getResponseHeader(e);
        }),
        (X.prototype.addUploadProgressListener = function (e) {
          null != this.xhr_.upload &&
            this.xhr_.upload.addEventListener("progress", e);
        }),
        (X.prototype.removeUploadProgressListener = function (e) {
          null != this.xhr_.upload &&
            this.xhr_.upload.removeEventListener("progress", e);
        }),
        X);
      function X() {
        var t = this;
        (this.sent_ = !1),
          (this.xhr_ = new XMLHttpRequest()),
          (this.errorCode_ = M.NO_ERROR),
          (this.sendPromise_ = new Promise(function (e) {
            t.xhr_.addEventListener("abort", function () {
              (t.errorCode_ = M.ABORT), e(t);
            }),
              t.xhr_.addEventListener("error", function () {
                (t.errorCode_ = M.NETWORK_ERROR), e(t);
              }),
              t.xhr_.addEventListener("load", function () {
                e(t);
              });
          }));
      }
      var G =
        ((W.prototype.createXhrIo = function () {
          return new H();
        }),
        W);
      function W() {}
      var V =
        (Object.defineProperty(K.prototype, "path", {
          get: function () {
            return this.path_;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(K.prototype, "isRoot", {
          get: function () {
            return 0 === this.path.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (K.prototype.fullServerUrl = function () {
          var e = encodeURIComponent;
          return "/b/" + e(this.bucket) + "/o/" + e(this.path);
        }),
        (K.prototype.bucketOnlyServerUrl = function () {
          return "/b/" + encodeURIComponent(this.bucket) + "/o";
        }),
        (K.makeFromBucketSpec = function (t, e) {
          var r;
          try {
            r = K.makeFromUrl(t, e);
          } catch (e) {
            return new K(t, "");
          }
          if ("" === r.path) return r;
          throw new w(
            "invalid-default-bucket",
            "Invalid default bucket '" + t + "'."
          );
        }),
        (K.makeFromUrl = function (e, t) {
          var r = null,
            n = "([A-Za-z0-9.\\-_]+)";
          var o = new RegExp("^gs://" + n + "(/(.*))?$", "i");
          function i(e) {
            e.path_ = decodeURIComponent(e.path);
          }
          for (
            var a = t.replace(/[.]/g, "\\."),
              s = [
                {
                  regex: o,
                  indices: { bucket: 1, path: 3 },
                  postModify: function (e) {
                    "/" === e.path.charAt(e.path.length - 1) &&
                      (e.path_ = e.path_.slice(0, -1));
                  },
                },
                {
                  regex: new RegExp(
                    "^https?://" +
                      a +
                      "/v[A-Za-z0-9_]+/b/" +
                      n +
                      "/o(/([^?#]*).*)?$",
                    "i"
                  ),
                  indices: { bucket: 1, path: 3 },
                  postModify: i,
                },
                {
                  regex: new RegExp(
                    "^https?://" +
                      (t === m
                        ? "(?:storage.googleapis.com|storage.cloud.google.com)"
                        : t) +
                      "/" +
                      n +
                      "/([^?#]*)",
                    "i"
                  ),
                  indices: { bucket: 1, path: 2 },
                  postModify: i,
                },
              ],
              u = 0;
            u < s.length;
            u++
          ) {
            var c = s[u],
              l = c.regex.exec(e);
            if (l) {
              r = new K(l[c.indices.bucket], l[c.indices.path] || "");
              c.postModify(r);
              break;
            }
          }
          if (null == r) throw new w("invalid-url", "Invalid URL '" + e + "'.");
          return r;
        }),
        K);
      function K(e, t) {
        (this.bucket = e), (this.path_ = t);
      }
      var Z =
        (($.prototype.getPromise = function () {
          return this.promise_;
        }),
        ($.prototype.cancel = function (e) {}),
        $);
      function $(e) {
        this.promise_ = Promise.reject(e);
      }
      function Y(e) {
        return "string" == typeof e || e instanceof String;
      }
      function J(e) {
        return Q() && e instanceof Blob;
      }
      function Q() {
        return "undefined" != typeof Blob;
      }
      function ee(e, t, r, n) {
        if (n < t)
          throw P(
            "Invalid value for '" + e + "'. Expected " + t + " or greater."
          );
        if (r < n)
          throw P("Invalid value for '" + e + "'. Expected " + r + " or less.");
      }
      function te(e, t) {
        var r = t.match(/^(\w+):\/\/.+/);
        return (
          (null == (null == r ? void 0 : r[1]) ? "https://" + t : t) + "/v0" + e
        );
      }
      function re(e) {
        var t,
          r = encodeURIComponent,
          n = "?";
        for (t in e)
          e.hasOwnProperty(t) && (n = n + (r(t) + "=" + r(e[t])) + "&");
        return (n = n.slice(0, -1));
      }
      var ne =
        ((oe.prototype.start_ = function () {
          var t,
            r,
            e,
            n,
            o,
            i,
            a,
            s,
            u,
            c = this;
          function l(e, t) {
            var r,
              n = c.resolve_,
              o = c.reject_,
              i = t.xhr;
            if (t.wasSuccessCode)
              try {
                var a = c.callback_(i, i.getResponseText());
                void 0 !== a ? n(a) : n();
              } catch (e) {
                o(e);
              }
            else
              null !== i
                ? (((r = T()).serverResponse = i.getResponseText()),
                  c.errorCallback_ ? o(c.errorCallback_(i, r)) : o(r))
                : t.canceled
                ? o((r = (c.appDelete_ ? S : O)()))
                : o(
                    (r = new w(
                      "retry-limit-exceeded",
                      "Max retry time for operation exceeded, please try again."
                    ))
                  );
          }
          function h() {
            return 2 === a;
          }
          function p() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            s || ((s = !0), r.apply(null, e));
          }
          function f(e) {
            o = setTimeout(function () {
              (o = null), t(d, h());
            }, e);
          }
          function d(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            s ||
              (e || h() || i
                ? p.call.apply(p, g([null, e], t))
                : (n < 64 && (n *= 2),
                  f(1 === a ? ((a = 2), 0) : 1e3 * (n + Math.random()))));
          }
          function _(e) {
            u ||
              ((u = !0),
              s ||
                (null !== o
                  ? (e || (a = 2), clearTimeout(o), f(0))
                  : e || (a = 1)));
          }
          this.canceled_
            ? l(0, new ie(!1, null, !0))
            : (this.backoffId_ =
                ((t = function (n, e) {
                  function o(e) {
                    var t = e.loaded,
                      e = e.lengthComputable ? e.total : -1;
                    null !== c.progressCallback_ && c.progressCallback_(t, e);
                  }
                  e
                    ? n(!1, new ie(!1, null, !0))
                    : ((e = c.pool_.createXhrIo()),
                      (c.pendingXhr_ = e),
                      null !== c.progressCallback_ &&
                        e.addUploadProgressListener(o),
                      e
                        .send(c.url_, c.method_, c.body_, c.headers_)
                        .then(function (e) {
                          null !== c.progressCallback_ &&
                            e.removeUploadProgressListener(o),
                            (c.pendingXhr_ = null);
                          var t = e.getErrorCode() === M.NO_ERROR,
                            r = e.getStatus();
                          t && !c.isRetryStatusCode_(r)
                            ? ((r = -1 !== c.successCodes_.indexOf(r)),
                              n(!0, new ie(r, e)))
                            : ((e = e.getErrorCode() === M.ABORT),
                              n(!1, new ie(!1, null, e)));
                        }));
                }),
                (r = l),
                (e = this.timeout_),
                (o = null),
                (u = s = i = !(n = 1)),
                f((a = 0)),
                setTimeout(function () {
                  (i = !0), _(!0);
                }, e),
                _));
        }),
        (oe.prototype.getPromise = function () {
          return this.promise_;
        }),
        (oe.prototype.cancel = function (e) {
          (this.canceled_ = !0),
            (this.appDelete_ = e || !1),
            null !== this.backoffId_ && (0, this.backoffId_)(!1),
            null !== this.pendingXhr_ && this.pendingXhr_.abort();
        }),
        (oe.prototype.isRetryStatusCode_ = function (e) {
          var t = 500 <= e && e < 600,
            r = -1 !== [408, 429].indexOf(e),
            e = -1 !== this.additionalRetryCodes_.indexOf(e);
          return t || r || e;
        }),
        oe);
      function oe(e, t, r, n, o, i, a, s, u, c, l) {
        var h = this;
        (this.pendingXhr_ = null),
          (this.backoffId_ = null),
          (this.canceled_ = !1),
          (this.appDelete_ = !1),
          (this.url_ = e),
          (this.method_ = t),
          (this.headers_ = r),
          (this.body_ = n),
          (this.successCodes_ = o.slice()),
          (this.additionalRetryCodes_ = i.slice()),
          (this.callback_ = a),
          (this.errorCallback_ = s),
          (this.progressCallback_ = c),
          (this.timeout_ = u),
          (this.pool_ = l),
          (this.promise_ = new Promise(function (e, t) {
            (h.resolve_ = e), (h.reject_ = t), h.start_();
          }));
      }
      var ie = function (e, t, r) {
        (this.wasSuccessCode = e), (this.xhr = t), (this.canceled = !!r);
      };
      function ae() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r =
          "undefined" != typeof BlobBuilder
            ? BlobBuilder
            : "undefined" != typeof WebKitBlobBuilder
            ? WebKitBlobBuilder
            : void 0;
        if (void 0 !== r) {
          for (var n = new r(), o = 0; o < e.length; o++) n.append(e[o]);
          return n.getBlob();
        }
        if (Q()) return new Blob(e);
        throw new w(
          "unsupported-environment",
          "This browser doesn't seem to support creating Blobs"
        );
      }
      var se =
        ((ue.prototype.size = function () {
          return this.size_;
        }),
        (ue.prototype.type = function () {
          return this.type_;
        }),
        (ue.prototype.slice = function (e, t) {
          if (J(this.data_)) {
            var r = this.data_,
              n =
                ((o = e),
                (n = t),
                (r = r).webkitSlice
                  ? r.webkitSlice(o, n)
                  : r.mozSlice
                  ? r.mozSlice(o, n)
                  : r.slice
                  ? r.slice(o, n)
                  : null);
            return null === n ? null : new ue(n);
          }
          var o, n;
          return new ue(new Uint8Array(this.data_.buffer, e, t - e), !0);
        }),
        (ue.getBlob = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (Q()) {
            var r = e.map(function (e) {
              return e instanceof ue ? e.data_ : e;
            });
            return new ue(ae.apply(null, r));
          }
          var r = e.map(function (e) {
              return Y(e) ? j(A.RAW, e).data : e.data_;
            }),
            n = 0;
          r.forEach(function (e) {
            n += e.byteLength;
          });
          var o = new Uint8Array(n),
            i = 0;
          return (
            r.forEach(function (e) {
              for (var t = 0; t < e.length; t++) o[i++] = e[t];
            }),
            new ue(o, !0)
          );
        }),
        (ue.prototype.uploadData = function () {
          return this.data_;
        }),
        ue);
      function ue(e, t) {
        var r = 0,
          n = "";
        J(e)
          ? ((r = (this.data_ = e).size), (n = e.type))
          : e instanceof ArrayBuffer
          ? (t
              ? (this.data_ = new Uint8Array(e))
              : ((this.data_ = new Uint8Array(e.byteLength)),
                this.data_.set(new Uint8Array(e))),
            (r = this.data_.length))
          : e instanceof Uint8Array &&
            (t
              ? (this.data_ = e)
              : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
            (r = e.length)),
          (this.size_ = r),
          (this.type_ = n);
      }
      function ce(e) {
        var t, r;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return null;
        }
        return "object" != typeof (r = t) || Array.isArray(r) ? null : t;
      }
      function le(e) {
        var t = e.lastIndexOf("/", e.length - 2);
        return -1 === t ? e : e.slice(t + 1);
      }
      function he(e, t) {
        return t;
      }
      var pe = function (e, t, r, n) {
          (this.server = e),
            (this.local = t || e),
            (this.writable = !!r),
            (this.xform = n || he);
        },
        fe = null;
      function de() {
        if (fe) return fe;
        var e = [];
        e.push(new pe("bucket")),
          e.push(new pe("generation")),
          e.push(new pe("metageneration")),
          e.push(new pe("name", "fullPath", !0));
        var t = new pe("name");
        (t.xform = function (e, t) {
          return !Y((t = t)) || t.length < 2 ? t : le(t);
        }),
          e.push(t);
        t = new pe("size");
        return (
          (t.xform = function (e, t) {
            return void 0 !== t ? Number(t) : t;
          }),
          e.push(t),
          e.push(new pe("timeCreated")),
          e.push(new pe("updated")),
          e.push(new pe("md5Hash", null, !0)),
          e.push(new pe("cacheControl", null, !0)),
          e.push(new pe("contentDisposition", null, !0)),
          e.push(new pe("contentEncoding", null, !0)),
          e.push(new pe("contentLanguage", null, !0)),
          e.push(new pe("contentType", null, !0)),
          e.push(new pe("metadata", "customMetadata", !0)),
          (fe = e)
        );
      }
      function _e(r, n) {
        Object.defineProperty(r, "ref", {
          get: function () {
            var e = r.bucket,
              t = r.fullPath,
              t = new V(e, t);
            return n._makeStorageReference(t);
          },
        });
      }
      function ge(e, t, r) {
        t = ce(t);
        if (null === t) return null;
        return (function (e, t, r) {
          for (var n = { type: "file" }, o = r.length, i = 0; i < o; i++) {
            var a = r[i];
            n[a.local] = a.xform(n, t[a.server]);
          }
          return _e(n, e), n;
        })(e, t, r);
      }
      function be(e, t) {
        for (var r = {}, n = t.length, o = 0; o < n; o++) {
          var i = t[o];
          i.writable && (r[i.server] = e[i.local]);
        }
        return JSON.stringify(r);
      }
      var ve = "prefixes",
        me = "items";
      function ye(e, t, r) {
        r = ce(r);
        if (null === r) return null;
        return (function (e, t, r) {
          var n = { prefixes: [], items: [], nextPageToken: r.nextPageToken };
          if (r[ve])
            for (var o = 0, i = r[ve]; o < i.length; o++) {
              var a = i[o].replace(/\/$/, ""),
                s = e._makeStorageReference(new V(t, a));
              n.prefixes.push(s);
            }
          if (r[me])
            for (var u = 0, c = r[me]; u < c.length; u++) {
              var l = c[u],
                s = e._makeStorageReference(new V(t, l.name));
              n.items.push(s);
            }
          return n;
        })(e, t, r);
      }
      var we = function (e, t, r, n) {
        (this.url = e),
          (this.method = t),
          (this.handler = r),
          (this.timeout = n),
          (this.urlParams = {}),
          (this.headers = {}),
          (this.body = null),
          (this.errorHandler = null),
          (this.progressCallback = null),
          (this.successCodes = [200]),
          (this.additionalRetryCodes = []);
      };
      function Re(e) {
        if (!e) throw T();
      }
      function ke(r, n) {
        return function (e, t) {
          return Re(null !== (t = ge(r, t, n))), t;
        };
      }
      function Te(r, n) {
        return function (e, t) {
          return Re(null !== (t = ye(r, n, t))), t;
        };
      }
      function Oe(n, o) {
        return function (e, t) {
          var r = ge(n, t, o);
          return (
            Re(null !== r),
            (function (n, e, o) {
              if (null === (e = ce(e))) return null;
              if (!Y(e.downloadTokens)) return null;
              if (0 === (e = e.downloadTokens).length) return null;
              var i = encodeURIComponent;
              return e.split(",").map(function (e) {
                var t = n.bucket,
                  r = n.fullPath;
                return (
                  te("/b/" + i(t) + "/o/" + i(r), o) +
                  re({ alt: "media", token: e })
                );
              })[0];
            })(r, t, n.host)
          );
        };
      }
      function xe(o) {
        return function (e, t) {
          var r,
            n =
              401 === e.getStatus()
                ? e
                    .getResponseText()
                    .includes("Firebase App Check token is invalid")
                  ? new w(
                      "unauthorized-app",
                      "This app does not have permission to access Firebase Storage on this project."
                    )
                  : new w(
                      "unauthenticated",
                      "User is not authenticated, please authenticate using Firebase Authentication and try again."
                    )
                : 402 === e.getStatus()
                ? ((r = o.bucket),
                  new w(
                    "quota-exceeded",
                    "Quota for bucket '" +
                      r +
                      "' exceeded, please view quota on https://firebase.google.com/pricing/."
                  ))
                : 403 === e.getStatus()
                ? ((n = o.path),
                  new w(
                    "unauthorized",
                    "User does not have permission to access '" + n + "'."
                  ))
                : t;
          return (n.serverResponse = t.serverResponse), n;
        };
      }
      function Pe(n) {
        var o = xe(n);
        return function (e, t) {
          var r = o(e, t);
          return (
            404 === e.getStatus() &&
              ((e = n.path),
              (r = new w(
                "object-not-found",
                "Object '" + e + "' does not exist."
              ))),
            (r.serverResponse = t.serverResponse),
            r
          );
        };
      }
      function Se(e, t, r) {
        var n = te(t.fullServerUrl(), e.host),
          o = e.maxOperationRetryTime,
          o = new we(n, "GET", ke(e, r), o);
        return (o.errorHandler = Pe(t)), o;
      }
      function Ue(e, t, r) {
        r = Object.assign({}, r);
        return (
          (r.fullPath = e.path),
          (r.size = t.size()),
          r.contentType ||
            (r.contentType =
              ((e = t),
              ((t = null) && t.contentType) ||
                (e && e.type()) ||
                "application/octet-stream")),
          r
        );
      }
      function Ce(e, t, r, n, o) {
        var i = t.bucketOnlyServerUrl(),
          a = { "X-Goog-Upload-Protocol": "multipart" };
        var s = (function () {
          for (var e = "", t = 0; t < 2; t++)
            e += Math.random().toString().slice(2);
          return e;
        })();
        a["Content-Type"] = "multipart/related; boundary=" + s;
        var u = Ue(t, n, o),
          o =
            "--" +
            s +
            "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" +
            be(u, r) +
            "\r\n--" +
            s +
            "\r\nContent-Type: " +
            u.contentType +
            "\r\n\r\n",
          s = "\r\n--" + s + "--",
          n = se.getBlob(o, n, s);
        if (null === n) throw x();
        (s = { name: u.fullPath }),
          (u = te(i, e.host)),
          (i = e.maxUploadRetryTime),
          (i = new we(u, "POST", ke(e, r), i));
        return (
          (i.urlParams = s),
          (i.headers = a),
          (i.body = n.uploadData()),
          (i.errorHandler = xe(t)),
          i
        );
      }
      var Ee = function (e, t, r, n) {
        (this.current = e),
          (this.total = t),
          (this.finalized = !!r),
          (this.metadata = n || null);
      };
      function Ae(e, t) {
        var r = null;
        try {
          r = e.getResponseHeader("X-Goog-Upload-Status");
        } catch (e) {
          Re(!1);
        }
        return Re(!!r && -1 !== (t || ["active"]).indexOf(r)), r;
      }
      function Ie(e, t, r, n, o) {
        var i = t.bucketOnlyServerUrl(),
          a = Ue(t, n, o),
          o = { name: a.fullPath },
          i = te(i, e.host),
          n = {
            "X-Goog-Upload-Protocol": "resumable",
            "X-Goog-Upload-Command": "start",
            "X-Goog-Upload-Header-Content-Length": n.size(),
            "X-Goog-Upload-Header-Content-Type": a.contentType,
            "Content-Type": "application/json; charset=utf-8",
          },
          r = be(a, r),
          e = e.maxUploadRetryTime;
        e = new we(
          i,
          "POST",
          function (e) {
            var t;
            Ae(e);
            try {
              t = e.getResponseHeader("X-Goog-Upload-URL");
            } catch (e) {
              Re(!1);
            }
            return Re(Y(t)), t;
          },
          e
        );
        return (
          (e.urlParams = o),
          (e.headers = n),
          (e.body = r),
          (e.errorHandler = xe(t)),
          e
        );
      }
      function je(e, t, r, o) {
        (e = e.maxUploadRetryTime),
          (e = new we(
            r,
            "POST",
            function (e) {
              var t = Ae(e, ["active", "final"]),
                r = null;
              try {
                r = e.getResponseHeader("X-Goog-Upload-Size-Received");
              } catch (e) {
                Re(!1);
              }
              r || Re(!1);
              var n = Number(r);
              return Re(!isNaN(n)), new Ee(n, o.size(), "final" === t);
            },
            e
          ));
        return (
          (e.headers = { "X-Goog-Upload-Command": "query" }),
          (e.errorHandler = xe(t)),
          e
        );
      }
      function qe(e, i, t, a, r, s, n, o) {
        var u = new Ee(0, 0);
        if (
          (n
            ? ((u.current = n.current), (u.total = n.total))
            : ((u.current = 0), (u.total = a.size())),
          a.size() !== u.total)
        )
          throw new w(
            "server-file-wrong-size",
            "Server recorded incorrect upload file size, please retry the upload."
          );
        var c = u.total - u.current,
          l = c;
        0 < r && (l = Math.min(l, r));
        (n = u.current),
          (r = n + l),
          (c = {
            "X-Goog-Upload-Command": l === c ? "upload, finalize" : "upload",
            "X-Goog-Upload-Offset": u.current,
          }),
          (n = a.slice(n, r));
        if (null === n) throw x();
        (r = i.maxUploadRetryTime),
          (r = new we(
            t,
            "POST",
            function (e, t) {
              var r = Ae(e, ["active", "final"]),
                n = u.current + l,
                o = a.size(),
                t = "final" === r ? ke(i, s)(e, t) : null;
              return new Ee(n, o, "final" === r, t);
            },
            r
          ));
        return (
          (r.headers = c),
          (r.body = n.uploadData()),
          (r.progressCallback = o || null),
          (r.errorHandler = xe(e)),
          r
        );
      }
      var Le = function (e, t, r) {
        "function" == typeof e || null != t || null != r
          ? ((this.next = e), (this.error = t), (this.complete = r))
          : ((e = e),
            (this.next = e.next),
            (this.error = e.error),
            (this.complete = e.complete));
      };
      function Ne(r) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          Promise.resolve().then(function () {
            return r.apply(void 0, e);
          });
        };
      }
      var Me =
        ((Be.prototype._makeProgressCallback = function () {
          var t = this,
            r = this._transferred;
          return function (e) {
            return t._updateProgress(r + e);
          };
        }),
        (Be.prototype._shouldDoResumable = function (e) {
          return 262144 < e.size();
        }),
        (Be.prototype._start = function () {
          "running" === this._state &&
            void 0 === this._request &&
            (this._resumable
              ? void 0 === this._uploadUrl
                ? this._createResumable()
                : this._needToFetchStatus
                ? this._fetchStatus()
                : this._needToFetchMetadata
                ? this._fetchMetadata()
                : this._continueUpload()
              : this._oneShotUpload());
        }),
        (Be.prototype._resolveToken = function (n) {
          var o = this;
          Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken(),
          ]).then(function (e) {
            var t = e[0],
              r = e[1];
            switch (o._state) {
              case "running":
                n(t, r);
                break;
              case "canceling":
                o._transition("canceled");
                break;
              case "pausing":
                o._transition("paused");
            }
          });
        }),
        (Be.prototype._createResumable = function () {
          var n = this;
          this._resolveToken(function (e, t) {
            var r = Ie(
                n._ref.storage,
                n._ref._location,
                n._mappings,
                n._blob,
                n._metadata
              ),
              t = n._ref.storage._makeRequest(r, e, t);
            (n._request = t).getPromise().then(function (e) {
              (n._request = void 0),
                (n._uploadUrl = e),
                (n._needToFetchStatus = !1),
                n.completeTransitions_();
            }, n._errorHandler);
          });
        }),
        (Be.prototype._fetchStatus = function () {
          var n = this,
            o = this._uploadUrl;
          this._resolveToken(function (e, t) {
            var r = je(n._ref.storage, n._ref._location, o, n._blob),
              t = n._ref.storage._makeRequest(r, e, t);
            (n._request = t).getPromise().then(function (e) {
              (n._request = void 0),
                n._updateProgress(e.current),
                (n._needToFetchStatus = !1),
                e.finalized && (n._needToFetchMetadata = !0),
                n.completeTransitions_();
            }, n._errorHandler);
          });
        }),
        (Be.prototype._continueUpload = function () {
          var n = this,
            o = 262144 * this._chunkMultiplier,
            i = new Ee(this._transferred, this._blob.size()),
            a = this._uploadUrl;
          this._resolveToken(function (e, t) {
            var r;
            try {
              r = qe(
                n._ref._location,
                n._ref.storage,
                a,
                n._blob,
                o,
                n._mappings,
                i,
                n._makeProgressCallback()
              );
            } catch (e) {
              return (n._error = e), void n._transition("error");
            }
            t = n._ref.storage._makeRequest(r, e, t);
            (n._request = t).getPromise().then(function (e) {
              n._increaseMultiplier(),
                (n._request = void 0),
                n._updateProgress(e.current),
                e.finalized
                  ? ((n._metadata = e.metadata), n._transition("success"))
                  : n.completeTransitions_();
            }, n._errorHandler);
          });
        }),
        (Be.prototype._increaseMultiplier = function () {
          262144 * this._chunkMultiplier < 33554432 &&
            (this._chunkMultiplier *= 2);
        }),
        (Be.prototype._fetchMetadata = function () {
          var n = this;
          this._resolveToken(function (e, t) {
            var r = Se(n._ref.storage, n._ref._location, n._mappings),
              t = n._ref.storage._makeRequest(r, e, t);
            (n._request = t).getPromise().then(function (e) {
              (n._request = void 0),
                (n._metadata = e),
                n._transition("success");
            }, n._metadataErrorHandler);
          });
        }),
        (Be.prototype._oneShotUpload = function () {
          var n = this;
          this._resolveToken(function (e, t) {
            var r = Ce(
                n._ref.storage,
                n._ref._location,
                n._mappings,
                n._blob,
                n._metadata
              ),
              t = n._ref.storage._makeRequest(r, e, t);
            (n._request = t).getPromise().then(function (e) {
              (n._request = void 0),
                (n._metadata = e),
                n._updateProgress(n._blob.size()),
                n._transition("success");
            }, n._errorHandler);
          });
        }),
        (Be.prototype._updateProgress = function (e) {
          var t = this._transferred;
          (this._transferred = e),
            this._transferred !== t && this._notifyObservers();
        }),
        (Be.prototype._transition = function (e) {
          if (this._state !== e)
            switch (e) {
              case "canceling":
              case "pausing":
                (this._state = e),
                  void 0 !== this._request && this._request.cancel();
                break;
              case "running":
                var t = "paused" === this._state;
                (this._state = e),
                  t && (this._notifyObservers(), this._start());
                break;
              case "paused":
                (this._state = e), this._notifyObservers();
                break;
              case "canceled":
                (this._error = O()), (this._state = e), this._notifyObservers();
                break;
              case "error":
              case "success":
                (this._state = e), this._notifyObservers();
            }
        }),
        (Be.prototype.completeTransitions_ = function () {
          switch (this._state) {
            case "pausing":
              this._transition("paused");
              break;
            case "canceling":
              this._transition("canceled");
              break;
            case "running":
              this._start();
          }
        }),
        Object.defineProperty(Be.prototype, "snapshot", {
          get: function () {
            var e = z(this._state);
            return {
              bytesTransferred: this._transferred,
              totalBytes: this._blob.size(),
              state: e,
              metadata: this._metadata,
              task: this,
              ref: this._ref,
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Be.prototype.on = function (e, t, r, n) {
          var o = this,
            i = new Le(t, r, n);
          return (
            this._addObserver(i),
            function () {
              o._removeObserver(i);
            }
          );
        }),
        (Be.prototype.then = function (e, t) {
          return this._promise.then(e, t);
        }),
        (Be.prototype.catch = function (e) {
          return this.then(null, e);
        }),
        (Be.prototype._addObserver = function (e) {
          this._observers.push(e), this._notifyObserver(e);
        }),
        (Be.prototype._removeObserver = function (e) {
          e = this._observers.indexOf(e);
          -1 !== e && this._observers.splice(e, 1);
        }),
        (Be.prototype._notifyObservers = function () {
          var t = this;
          this._finishPromise(),
            this._observers.slice().forEach(function (e) {
              t._notifyObserver(e);
            });
        }),
        (Be.prototype._finishPromise = function () {
          if (void 0 !== this._resolve) {
            var e = !0;
            switch (z(this._state)) {
              case D.SUCCESS:
                Ne(this._resolve.bind(null, this.snapshot))();
                break;
              case D.CANCELED:
              case D.ERROR:
                Ne(this._reject.bind(null, this._error))();
                break;
              default:
                e = !1;
            }
            e && ((this._resolve = void 0), (this._reject = void 0));
          }
        }),
        (Be.prototype._notifyObserver = function (e) {
          switch (z(this._state)) {
            case D.RUNNING:
            case D.PAUSED:
              e.next && Ne(e.next.bind(e, this.snapshot))();
              break;
            case D.SUCCESS:
              e.complete && Ne(e.complete.bind(e))();
              break;
            case D.CANCELED:
            case D.ERROR:
              e.error && Ne(e.error.bind(e, this._error))();
              break;
            default:
              e.error && Ne(e.error.bind(e, this._error))();
          }
        }),
        (Be.prototype.resume = function () {
          var e = "paused" === this._state || "pausing" === this._state;
          return e && this._transition("running"), e;
        }),
        (Be.prototype.pause = function () {
          var e = "running" === this._state;
          return e && this._transition("pausing"), e;
        }),
        (Be.prototype.cancel = function () {
          var e = "running" === this._state || "pausing" === this._state;
          return e && this._transition("canceling"), e;
        }),
        Be);
      function Be(e, t, r) {
        var n = this;
        void 0 === r && (r = null),
          (this._transferred = 0),
          (this._needToFetchStatus = !1),
          (this._needToFetchMetadata = !1),
          (this._observers = []),
          (this._error = void 0),
          (this._uploadUrl = void 0),
          (this._request = void 0),
          (this._chunkMultiplier = 1),
          (this._resolve = void 0),
          (this._reject = void 0),
          (this._ref = e),
          (this._blob = t),
          (this._metadata = r),
          (this._mappings = de()),
          (this._resumable = this._shouldDoResumable(this._blob)),
          (this._state = "running"),
          (this._errorHandler = function (e) {
            (n._request = void 0),
              (n._chunkMultiplier = 1),
              e._codeEquals("canceled")
                ? ((n._needToFetchStatus = !0), n.completeTransitions_())
                : ((n._error = e), n._transition("error"));
          }),
          (this._metadataErrorHandler = function (e) {
            (n._request = void 0),
              e._codeEquals("canceled")
                ? n.completeTransitions_()
                : ((n._error = e), n._transition("error"));
          }),
          (this._promise = new Promise(function (e, t) {
            (n._resolve = e), (n._reject = t), n._start();
          })),
          this._promise.then(null, function () {});
      }
      var Fe =
        ((De.prototype.toString = function () {
          return "gs://" + this._location.bucket + "/" + this._location.path;
        }),
        (De.prototype._newRef = function (e, t) {
          return new De(e, t);
        }),
        Object.defineProperty(De.prototype, "root", {
          get: function () {
            var e = new V(this._location.bucket, "");
            return this._newRef(this._service, e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(De.prototype, "bucket", {
          get: function () {
            return this._location.bucket;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(De.prototype, "fullPath", {
          get: function () {
            return this._location.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(De.prototype, "name", {
          get: function () {
            return le(this._location.path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(De.prototype, "storage", {
          get: function () {
            return this._service;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(De.prototype, "parent", {
          get: function () {
            var e = (function (e) {
              if (0 === e.length) return null;
              var t = e.lastIndexOf("/");
              return -1 === t ? "" : e.slice(0, t);
            })(this._location.path);
            if (null === e) return null;
            e = new V(this._location.bucket, e);
            return new De(this._service, e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (De.prototype._throwIfRoot = function (e) {
          if ("" === this._location.path) throw U(e);
        }),
        De);
      function De(e, t) {
        (this._service = e),
          (this._location = t instanceof V ? t : V.makeFromUrl(t, e.host));
      }
      function ze(e) {
        var t = { prefixes: [], items: [] };
        return (function n(o, i, a) {
          return l(this, void 0, void 0, function () {
            var t, r;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, He(o, { pageToken: a })];
                case 1:
                  return (
                    (t = e.sent()),
                    (r = i.prefixes).push.apply(r, t.prefixes),
                    (r = i.items).push.apply(r, t.items),
                    null == t.nextPageToken
                      ? [3, 3]
                      : [4, n(o, i, t.nextPageToken)]
                  );
                case 2:
                  e.sent(), (e.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        })(e, t).then(function () {
          return t;
        });
      }
      function He(u, c) {
        return l(this, void 0, void 0, function () {
          var s;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  null != c &&
                    "number" == typeof c.maxResults &&
                    ee("options.maxResults", 1, 1e3, c.maxResults),
                  (s = c || {}),
                  (t = u.storage),
                  (r = u._location),
                  (n = "/"),
                  (o = s.pageToken),
                  (i = s.maxResults),
                  (a = {}),
                  r.isRoot ? (a.prefix = "") : (a.prefix = r.path + "/"),
                  n && 0 < n.length && (a.delimiter = n),
                  o && (a.pageToken = o),
                  i && (a.maxResults = i),
                  (o = te(r.bucketOnlyServerUrl(), t.host)),
                  (i = t.maxOperationRetryTime),
                  ((i = new we(o, "GET", Te(t, r.bucket), i)).urlParams = a),
                  (i.errorHandler = xe(r)),
                  [4, u.storage.makeRequestWithTokens(i)]
                );
              case 1:
                return [2, e.sent().getPromise()];
            }
            var t, r, n, o, i, a;
          });
        });
      }
      function Xe(s, u) {
        return l(this, void 0, void 0, function () {
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  s._throwIfRoot("updateMetadata"),
                  (t = s.storage),
                  (r = s._location),
                  (n = u),
                  (o = de()),
                  (i = te(r.fullServerUrl(), t.host)),
                  (a = be(n, o)),
                  (n = t.maxOperationRetryTime),
                  ((n = new we(i, "PATCH", ke(t, o), n)).headers = {
                    "Content-Type": "application/json; charset=utf-8",
                  }),
                  (n.body = a),
                  (n.errorHandler = Pe(r)),
                  [4, s.storage.makeRequestWithTokens(n)]
                );
              case 1:
                return [2, e.sent().getPromise()];
            }
            var t, r, n, o, i, a;
          });
        });
      }
      function Ge(a) {
        return l(this, void 0, void 0, function () {
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  a._throwIfRoot("getDownloadURL"),
                  (t = a.storage),
                  (r = a._location),
                  (n = de()),
                  (o = te(r.fullServerUrl(), t.host)),
                  (i = t.maxOperationRetryTime),
                  ((i = new we(o, "GET", Oe(t, n), i)).errorHandler = Pe(r)),
                  [4, a.storage.makeRequestWithTokens(i)]
                );
              case 1:
                return [
                  2,
                  e
                    .sent()
                    .getPromise()
                    .then(function (e) {
                      if (null === e)
                        throw new w(
                          "no-download-url",
                          "The given file does not have any download URLs."
                        );
                      return e;
                    }),
                ];
            }
            var t, r, n, o, i;
          });
        });
      }
      function We(o) {
        return l(this, void 0, void 0, function () {
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  o._throwIfRoot("deleteObject"),
                  (t = o.storage),
                  (r = o._location),
                  (n = te(r.fullServerUrl(), t.host)),
                  (t = t.maxOperationRetryTime),
                  ((t = new we(
                    n,
                    "DELETE",
                    function (e, t) {},
                    t
                  )).successCodes = [200, 204]),
                  (t.errorHandler = Pe(r)),
                  [4, o.storage.makeRequestWithTokens(t)]
                );
              case 1:
                return [2, e.sent().getPromise()];
            }
            var t, r, n;
          });
        });
      }
      function Ve(e, t) {
        var r,
          t =
            ((r = e._location.path),
            (t = (t = t)
              .split("/")
              .filter(function (e) {
                return 0 < e.length;
              })
              .join("/")),
            0 === r.length ? t : r + "/" + t),
          t = new V(e._location.bucket, t);
        return new Fe(e.storage, t);
      }
      function Ke(e) {
        return /^[A-Za-z]+:\/\//.test(e);
      }
      function Ze(e, t) {
        if (e instanceof Je) {
          var r = e;
          if (null == r._bucket)
            throw new w(
              "no-default-bucket",
              "No default bucket found. Did you set the '" +
                y +
                "' property when initializing the app?"
            );
          r = new Fe(r, r._bucket);
          return null != t ? Ze(r, t) : r;
        }
        if (void 0 === t) return e;
        if (t.includes("..")) throw P('`path` param cannot contain ".."');
        return Ve(e, t);
      }
      function $e(e, t) {
        if (t && Ke(t)) {
          if (e instanceof Je) return new Fe(e, t);
          throw P(
            "To use ref(service, url), the first argument must be a Storage instance."
          );
        }
        return Ze(e, t);
      }
      function Ye(e, t) {
        t = null == t ? void 0 : t[y];
        return null == t ? null : V.makeFromBucketSpec(t, e);
      }
      var Je =
        (Object.defineProperty(Qe.prototype, "host", {
          get: function () {
            return this._host;
          },
          set: function (e) {
            (this._host = e),
              null != this._url
                ? (this._bucket = V.makeFromBucketSpec(this._url, e))
                : (this._bucket = Ye(e, this.app.options));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Qe.prototype, "maxUploadRetryTime", {
          get: function () {
            return this._maxUploadRetryTime;
          },
          set: function (e) {
            ee("time", 0, Number.POSITIVE_INFINITY, e),
              (this._maxUploadRetryTime = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Qe.prototype, "maxOperationRetryTime", {
          get: function () {
            return this._maxOperationRetryTime;
          },
          set: function (e) {
            ee("time", 0, Number.POSITIVE_INFINITY, e),
              (this._maxOperationRetryTime = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Qe.prototype._getAuthToken = function () {
          return l(this, void 0, void 0, function () {
            var t;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return (t = this._authProvider.getImmediate({ optional: !0 }))
                    ? [4, t.getToken()]
                    : [3, 2];
                case 1:
                  if (null !== (t = e.sent())) return [2, t.accessToken];
                  e.label = 2;
                case 2:
                  return [2, null];
              }
            });
          });
        }),
        (Qe.prototype._getAppCheckToken = function () {
          return l(this, void 0, void 0, function () {
            var t;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return (t = this._appCheckProvider.getImmediate({
                    optional: !0,
                  }))
                    ? [4, t.getToken()]
                    : [3, 2];
                case 1:
                  return [2, e.sent().token];
                case 2:
                  return [2, null];
              }
            });
          });
        }),
        (Qe.prototype._delete = function () {
          return (
            (this._deleted = !0),
            this._requests.forEach(function (e) {
              return e.cancel();
            }),
            this._requests.clear(),
            Promise.resolve()
          );
        }),
        (Qe.prototype._makeStorageReference = function (e) {
          return new Fe(this, e);
        }),
        (Qe.prototype._makeRequest = function (e, t, r) {
          var n = this;
          if (this._deleted) return new Z(S());
          var o,
            i,
            a,
            s,
            u,
            c,
            l =
              ((o = e),
              (i = this._appId),
              (a = t),
              (s = r),
              (u = this._pool),
              (c = this._firebaseVersion),
              (e = re(o.urlParams)),
              (t = o.url + e),
              (r = Object.assign({}, o.headers)),
              (e = r),
              (i = i) && (e["X-Firebase-GMPID"] = i),
              (i = r),
              null !== (a = a) &&
                0 < a.length &&
                (i.Authorization = "Firebase " + a),
              (c = c),
              (r["X-Firebase-Storage-Version"] =
                "webjs/" + (null != c ? c : "AppManager")),
              (c = r),
              null !== (s = s) && (c["X-Firebase-AppCheck"] = s),
              new ne(
                t,
                o.method,
                r,
                o.body,
                o.successCodes,
                o.additionalRetryCodes,
                o.handler,
                o.errorHandler,
                o.timeout,
                o.progressCallback,
                u
              ));
          return (
            this._requests.add(l),
            l.getPromise().then(
              function () {
                return n._requests.delete(l);
              },
              function () {
                return n._requests.delete(l);
              }
            ),
            l
          );
        }),
        (Qe.prototype.makeRequestWithTokens = function (n) {
          return l(this, void 0, void 0, function () {
            var t, r;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    Promise.all([
                      this._getAuthToken(),
                      this._getAppCheckToken(),
                    ]),
                  ];
                case 1:
                  return (
                    (r = e.sent()),
                    (t = r[0]),
                    (r = r[1]),
                    [2, this._makeRequest(n, t, r)]
                  );
              }
            });
          });
        }),
        Qe);
      function Qe(e, t, r, n, o, i) {
        (this.app = e),
          (this._authProvider = t),
          (this._appCheckProvider = r),
          (this._pool = n),
          (this._url = o),
          (this._firebaseVersion = i),
          (this._bucket = null),
          (this._host = m),
          (this._appId = null),
          (this._deleted = !1),
          (this._maxOperationRetryTime = 12e4),
          (this._maxUploadRetryTime = 6e5),
          (this._requests = new Set()),
          (this._bucket =
            null != o
              ? V.makeFromBucketSpec(o, this._host)
              : Ye(this._host, this.app.options));
      }
      function et(e, t, r) {
        return (
          (e = d(e)),
          (t = t),
          (r = r),
          (e = e)._throwIfRoot("uploadBytesResumable"),
          new Me(e, new se(t), r)
        );
      }
      function tt(e) {
        return (function (r) {
          return l(this, void 0, void 0, function () {
            var t;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    r._throwIfRoot("getMetadata"),
                    (t = Se(r.storage, r._location, de())),
                    [4, r.storage.makeRequestWithTokens(t)]
                  );
                case 1:
                  return [2, e.sent().getPromise()];
              }
            });
          });
        })((e = d(e)));
      }
      function rt(e, t) {
        return $e((e = d(e)), t);
      }
      var nt =
        (Object.defineProperty(ot.prototype, "bytesTransferred", {
          get: function () {
            return this._delegate.bytesTransferred;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ot.prototype, "metadata", {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ot.prototype, "state", {
          get: function () {
            return this._delegate.state;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ot.prototype, "totalBytes", {
          get: function () {
            return this._delegate.totalBytes;
          },
          enumerable: !1,
          configurable: !0,
        }),
        ot);
      function ot(e, t, r) {
        (this._delegate = e), (this.task = t), (this.ref = r);
      }
      var it =
        (Object.defineProperty(at.prototype, "snapshot", {
          get: function () {
            return new nt(this._delegate.snapshot, this, this._ref);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (at.prototype.then = function (t, e) {
          var r = this;
          return this._delegate.then(function (e) {
            if (t) return t(new nt(e, r, r._ref));
          }, e);
        }),
        (at.prototype.on = function (e, t, r, n) {
          var o = this,
            i = void 0;
          return (
            t &&
              (i =
                "function" == typeof t
                  ? function (e) {
                      return t(new nt(e, o, o._ref));
                    }
                  : {
                      next: t.next
                        ? function (e) {
                            return t.next(new nt(e, o, o._ref));
                          }
                        : void 0,
                      complete: t.complete || void 0,
                      error: t.error || void 0,
                    }),
            this._delegate.on(e, i, r || void 0, n || void 0)
          );
        }),
        at);
      function at(e, t) {
        (this._delegate = e),
          (this._ref = t),
          (this.cancel = this._delegate.cancel.bind(this._delegate)),
          (this.catch = this._delegate.catch.bind(this._delegate)),
          (this.pause = this._delegate.pause.bind(this._delegate)),
          (this.resume = this._delegate.resume.bind(this._delegate));
      }
      var st =
        (Object.defineProperty(ut.prototype, "prefixes", {
          get: function () {
            var t = this;
            return this._delegate.prefixes.map(function (e) {
              return new ct(e, t._service);
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ut.prototype, "items", {
          get: function () {
            var t = this;
            return this._delegate.items.map(function (e) {
              return new ct(e, t._service);
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ut.prototype, "nextPageToken", {
          get: function () {
            return this._delegate.nextPageToken || null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        ut);
      function ut(e, t) {
        (this._delegate = e), (this._service = t);
      }
      var ct =
        (Object.defineProperty(lt.prototype, "name", {
          get: function () {
            return this._delegate.name;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(lt.prototype, "bucket", {
          get: function () {
            return this._delegate.bucket;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(lt.prototype, "fullPath", {
          get: function () {
            return this._delegate.fullPath;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (lt.prototype.toString = function () {
          return this._delegate.toString();
        }),
        (lt.prototype.child = function (e) {
          return new lt(Ve(this._delegate, e), this.storage);
        }),
        Object.defineProperty(lt.prototype, "root", {
          get: function () {
            return new lt(this._delegate.root, this.storage);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(lt.prototype, "parent", {
          get: function () {
            var e = this._delegate.parent;
            return null == e ? null : new lt(e, this.storage);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (lt.prototype.put = function (e, t) {
          return (
            this._throwIfRoot("put"), new it(et(this._delegate, e, t), this)
          );
        }),
        (lt.prototype.putString = function (e, t, r) {
          void 0 === t && (t = A.RAW), this._throwIfRoot("putString");
          (e = j(t, e)), (r = i({}, r));
          return (
            null == r.contentType &&
              null != e.contentType &&
              (r.contentType = e.contentType),
            new it(new Me(this._delegate, new se(e.data, !0), r), this)
          );
        }),
        (lt.prototype.listAll = function () {
          var t = this;
          return ze(d(this._delegate)).then(function (e) {
            return new st(e, t.storage);
          });
        }),
        (lt.prototype.list = function (e) {
          var t,
            r = this;
          return (
            (t = this._delegate),
            (e = e || void 0),
            He((t = d(t)), e).then(function (e) {
              return new st(e, r.storage);
            })
          );
        }),
        (lt.prototype.getMetadata = function () {
          return tt(this._delegate);
        }),
        (lt.prototype.updateMetadata = function (e) {
          return (t = this._delegate), (e = e), Xe((t = d(t)), e);
          var t;
        }),
        (lt.prototype.getDownloadURL = function () {
          return Ge(d(this._delegate));
        }),
        (lt.prototype.delete = function () {
          return this._throwIfRoot("delete"), We(d(this._delegate));
        }),
        (lt.prototype._throwIfRoot = function (e) {
          if ("" === this._delegate._location.path) throw U(e);
        }),
        lt);
      function lt(e, t) {
        (this._delegate = e), (this.storage = t);
      }
      var ht =
        (Object.defineProperty(pt.prototype, "maxOperationRetryTime", {
          get: function () {
            return this._delegate.maxOperationRetryTime;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(pt.prototype, "maxUploadRetryTime", {
          get: function () {
            return this._delegate.maxUploadRetryTime;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (pt.prototype.ref = function (e) {
          if (Ke(e))
            throw P(
              "ref() expected a child path but got a URL, use refFromURL instead."
            );
          return new ct(rt(this._delegate, e), this);
        }),
        (pt.prototype.refFromURL = function (e) {
          if (!Ke(e))
            throw P(
              "refFromURL() expected a full URL but got a child path, use ref() instead."
            );
          try {
            V.makeFromUrl(e, this._delegate.host);
          } catch (e) {
            throw P(
              "refFromUrl() expected a valid full URL but got an invalid one."
            );
          }
          return new ct(rt(this._delegate, e), this);
        }),
        (pt.prototype.setMaxUploadRetryTime = function (e) {
          this._delegate.maxUploadRetryTime = e;
        }),
        (pt.prototype.setMaxOperationRetryTime = function (e) {
          this._delegate.maxOperationRetryTime = e;
        }),
        (pt.prototype.useEmulator = function (e, t) {
          var r;
          (r = this._delegate),
            (e = e),
            (t = t),
            (r.host = "http://" + e + ":" + t);
        }),
        pt);
      function pt(e, t) {
        var r = this;
        (this.app = e),
          (this._delegate = t),
          (this.INTERNAL = {
            delete: function () {
              return r._delegate._delete();
            },
          });
      }
      var ft, dt;
      function _t(e, t) {
        var r = t.instanceIdentifier,
          n = e.getProvider("app").getImmediate(),
          t = e.getProvider("auth-internal"),
          e = e.getProvider("app-check-internal");
        return new ht(n, new Je(n, t, e, new G(), r, o.default.SDK_VERSION));
      }
      (ft = o.default),
        (dt = {
          TaskState: D,
          TaskEvent: F,
          StringFormat: A,
          Storage: Je,
          Reference: ct,
        }),
        ft.INTERNAL.registerComponent(
          new _("storage", _t, "PUBLIC")
            .setServiceProps(dt)
            .setMultipleInstances(!0)
        ),
        ft.registerVersion("@firebase/storage", "0.5.2");
    }.apply(this, arguments);
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-storage.js.map
