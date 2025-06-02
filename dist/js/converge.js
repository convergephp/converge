var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/clipboard/dist/clipboard.js
var require_clipboard = __commonJS({
  "node_modules/clipboard/dist/clipboard.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["ClipboardJS"] = factory();
      else
        root["ClipboardJS"] = factory();
    })(exports, function() {
      return (
        /******/
        function() {
          var __webpack_modules__ = {
            /***/
            686: (
              /***/
              function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                "use strict";
                __webpack_require__2.d(__webpack_exports__, {
                  "default": function() {
                    return (
                      /* binding */
                      clipboard
                    );
                  }
                });
                var tiny_emitter = __webpack_require__2(279);
                var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                var listen = __webpack_require__2(370);
                var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                var src_select = __webpack_require__2(817);
                var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                ;
                function command(type) {
                  try {
                    return document.execCommand(type);
                  } catch (err) {
                    return false;
                  }
                }
                ;
                var ClipboardActionCut = function ClipboardActionCut2(target) {
                  var selectedText = select_default()(target);
                  command("cut");
                  return selectedText;
                };
                var actions_cut = ClipboardActionCut;
                ;
                function createFakeElement(value) {
                  var isRTL2 = document.documentElement.getAttribute("dir") === "rtl";
                  var fakeElement = document.createElement("textarea");
                  fakeElement.style.fontSize = "12pt";
                  fakeElement.style.border = "0";
                  fakeElement.style.padding = "0";
                  fakeElement.style.margin = "0";
                  fakeElement.style.position = "absolute";
                  fakeElement.style[isRTL2 ? "right" : "left"] = "-9999px";
                  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                  fakeElement.style.top = "".concat(yPosition, "px");
                  fakeElement.setAttribute("readonly", "");
                  fakeElement.value = value;
                  return fakeElement;
                }
                ;
                var fakeCopyAction = function fakeCopyAction2(value, options) {
                  var fakeElement = createFakeElement(value);
                  options.container.appendChild(fakeElement);
                  var selectedText = select_default()(fakeElement);
                  command("copy");
                  fakeElement.remove();
                  return selectedText;
                };
                var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  };
                  var selectedText = "";
                  if (typeof target === "string") {
                    selectedText = fakeCopyAction(target, options);
                  } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                    selectedText = fakeCopyAction(target.value, options);
                  } else {
                    selectedText = select_default()(target);
                    command("copy");
                  }
                  return selectedText;
                };
                var actions_copy = ClipboardActionCopy;
                ;
                function _typeof(obj) {
                  "@babel/helpers - typeof";
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    _typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return _typeof(obj);
                }
                var ClipboardActionDefault = function ClipboardActionDefault2() {
                  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                  if (action !== "copy" && action !== "cut") {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  }
                  if (target !== void 0) {
                    if (target && _typeof(target) === "object" && target.nodeType === 1) {
                      if (action === "copy" && target.hasAttribute("disabled")) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      }
                      if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                      }
                    } else {
                      throw new Error('Invalid "target" value, use a valid Element');
                    }
                  }
                  if (text) {
                    return actions_copy(text, {
                      container
                    });
                  }
                  if (target) {
                    return action === "cut" ? actions_cut(target) : actions_copy(target, {
                      container
                    });
                  }
                };
                var actions_default = ClipboardActionDefault;
                ;
                function clipboard_typeof(obj) {
                  "@babel/helpers - typeof";
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    clipboard_typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    clipboard_typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return clipboard_typeof(obj);
                }
                function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }
                function _defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                      descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                  if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps);
                  if (staticProps)
                    _defineProperties(Constructor, staticProps);
                  return Constructor;
                }
                function _inherits(subClass, superClass) {
                  if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                  if (superClass)
                    _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o, p) {
                  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                    o2.__proto__ = p2;
                    return o2;
                  };
                  return _setPrototypeOf(o, p);
                }
                function _createSuper(Derived) {
                  var hasNativeReflectConstruct = _isNativeReflectConstruct();
                  return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                      var NewTarget = _getPrototypeOf(this).constructor;
                      result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                      result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                  };
                }
                function _possibleConstructorReturn(self, call) {
                  if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                  }
                  return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                  if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  }
                  return self;
                }
                function _isNativeReflectConstruct() {
                  if (typeof Reflect === "undefined" || !Reflect.construct)
                    return false;
                  if (Reflect.construct.sham)
                    return false;
                  if (typeof Proxy === "function")
                    return true;
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    }));
                    return true;
                  } catch (e) {
                    return false;
                  }
                }
                function _getPrototypeOf(o) {
                  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                    return o2.__proto__ || Object.getPrototypeOf(o2);
                  };
                  return _getPrototypeOf(o);
                }
                function getAttributeValue(suffix, element) {
                  var attribute = "data-clipboard-".concat(suffix);
                  if (!element.hasAttribute(attribute)) {
                    return;
                  }
                  return element.getAttribute(attribute);
                }
                var Clipboard = /* @__PURE__ */ function(_Emitter) {
                  _inherits(Clipboard2, _Emitter);
                  var _super = _createSuper(Clipboard2);
                  function Clipboard2(trigger2, options) {
                    var _this;
                    _classCallCheck(this, Clipboard2);
                    _this = _super.call(this);
                    _this.resolveOptions(options);
                    _this.listenClick(trigger2);
                    return _this;
                  }
                  _createClass(Clipboard2, [{
                    key: "resolveOptions",
                    value: function resolveOptions() {
                      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                      this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                      this.text = typeof options.text === "function" ? options.text : this.defaultText;
                      this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function listenClick(trigger2) {
                      var _this2 = this;
                      this.listener = listen_default()(trigger2, "click", function(e) {
                        return _this2.onClick(e);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function onClick(e) {
                      var trigger2 = e.delegateTarget || e.currentTarget;
                      var action = this.action(trigger2) || "copy";
                      var text = actions_default({
                        action,
                        container: this.container,
                        target: this.target(trigger2),
                        text: this.text(trigger2)
                      });
                      this.emit(text ? "success" : "error", {
                        action,
                        text,
                        trigger: trigger2,
                        clearSelection: function clearSelection() {
                          if (trigger2) {
                            trigger2.focus();
                          }
                          window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function defaultAction(trigger2) {
                      return getAttributeValue("action", trigger2);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function defaultTarget(trigger2) {
                      var selector = getAttributeValue("target", trigger2);
                      if (selector) {
                        return document.querySelector(selector);
                      }
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function defaultText(trigger2) {
                      return getAttributeValue("text", trigger2);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function destroy() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function copy(target) {
                      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return actions_copy(target, options);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function cut(target) {
                      return actions_cut(target);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function isSupported() {
                      var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                      var actions = typeof action === "string" ? [action] : action;
                      var support = !!document.queryCommandSupported;
                      actions.forEach(function(action2) {
                        support = support && !!document.queryCommandSupported(action2);
                      });
                      return support;
                    }
                  }]);
                  return Clipboard2;
                }(tiny_emitter_default());
                var clipboard = Clipboard;
              }
            ),
            /***/
            828: (
              /***/
              function(module2) {
                var DOCUMENT_NODE_TYPE = 9;
                if (typeof Element !== "undefined" && !Element.prototype.matches) {
                  var proto = Element.prototype;
                  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                }
                function closest(element, selector) {
                  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                    if (typeof element.matches === "function" && element.matches(selector)) {
                      return element;
                    }
                    element = element.parentNode;
                  }
                }
                module2.exports = closest;
              }
            ),
            /***/
            438: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var closest = __webpack_require__2(828);
                function _delegate(element, selector, type, callback, useCapture) {
                  var listenerFn = listener.apply(this, arguments);
                  element.addEventListener(type, listenerFn, useCapture);
                  return {
                    destroy: function() {
                      element.removeEventListener(type, listenerFn, useCapture);
                    }
                  };
                }
                function delegate(elements, selector, type, callback, useCapture) {
                  if (typeof elements.addEventListener === "function") {
                    return _delegate.apply(null, arguments);
                  }
                  if (typeof type === "function") {
                    return _delegate.bind(null, document).apply(null, arguments);
                  }
                  if (typeof elements === "string") {
                    elements = document.querySelectorAll(elements);
                  }
                  return Array.prototype.map.call(elements, function(element) {
                    return _delegate(element, selector, type, callback, useCapture);
                  });
                }
                function listener(element, selector, type, callback) {
                  return function(e) {
                    e.delegateTarget = closest(e.target, selector);
                    if (e.delegateTarget) {
                      callback.call(element, e);
                    }
                  };
                }
                module2.exports = delegate;
              }
            ),
            /***/
            879: (
              /***/
              function(__unused_webpack_module, exports2) {
                exports2.node = function(value) {
                  return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                };
                exports2.nodeList = function(value) {
                  var type = Object.prototype.toString.call(value);
                  return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
                };
                exports2.string = function(value) {
                  return typeof value === "string" || value instanceof String;
                };
                exports2.fn = function(value) {
                  var type = Object.prototype.toString.call(value);
                  return type === "[object Function]";
                };
              }
            ),
            /***/
            370: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var is = __webpack_require__2(879);
                var delegate = __webpack_require__2(438);
                function listen(target, type, callback) {
                  if (!target && !type && !callback) {
                    throw new Error("Missing required arguments");
                  }
                  if (!is.string(type)) {
                    throw new TypeError("Second argument must be a String");
                  }
                  if (!is.fn(callback)) {
                    throw new TypeError("Third argument must be a Function");
                  }
                  if (is.node(target)) {
                    return listenNode(target, type, callback);
                  } else if (is.nodeList(target)) {
                    return listenNodeList(target, type, callback);
                  } else if (is.string(target)) {
                    return listenSelector(target, type, callback);
                  } else {
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                  }
                }
                function listenNode(node, type, callback) {
                  node.addEventListener(type, callback);
                  return {
                    destroy: function() {
                      node.removeEventListener(type, callback);
                    }
                  };
                }
                function listenNodeList(nodeList, type, callback) {
                  Array.prototype.forEach.call(nodeList, function(node) {
                    node.addEventListener(type, callback);
                  });
                  return {
                    destroy: function() {
                      Array.prototype.forEach.call(nodeList, function(node) {
                        node.removeEventListener(type, callback);
                      });
                    }
                  };
                }
                function listenSelector(selector, type, callback) {
                  return delegate(document.body, selector, type, callback);
                }
                module2.exports = listen;
              }
            ),
            /***/
            817: (
              /***/
              function(module2) {
                function select(element) {
                  var selectedText;
                  if (element.nodeName === "SELECT") {
                    element.focus();
                    selectedText = element.value;
                  } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                    var isReadOnly = element.hasAttribute("readonly");
                    if (!isReadOnly) {
                      element.setAttribute("readonly", "");
                    }
                    element.select();
                    element.setSelectionRange(0, element.value.length);
                    if (!isReadOnly) {
                      element.removeAttribute("readonly");
                    }
                    selectedText = element.value;
                  } else {
                    if (element.hasAttribute("contenteditable")) {
                      element.focus();
                    }
                    var selection = window.getSelection();
                    var range = document.createRange();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    selectedText = selection.toString();
                  }
                  return selectedText;
                }
                module2.exports = select;
              }
            ),
            /***/
            279: (
              /***/
              function(module2) {
                function E() {
                }
                E.prototype = {
                  on: function(name, callback, ctx) {
                    var e = this.e || (this.e = {});
                    (e[name] || (e[name] = [])).push({
                      fn: callback,
                      ctx
                    });
                    return this;
                  },
                  once: function(name, callback, ctx) {
                    var self = this;
                    function listener() {
                      self.off(name, listener);
                      callback.apply(ctx, arguments);
                    }
                    ;
                    listener._ = callback;
                    return this.on(name, listener, ctx);
                  },
                  emit: function(name) {
                    var data2 = [].slice.call(arguments, 1);
                    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                    var i = 0;
                    var len = evtArr.length;
                    for (i; i < len; i++) {
                      evtArr[i].fn.apply(evtArr[i].ctx, data2);
                    }
                    return this;
                  },
                  off: function(name, callback) {
                    var e = this.e || (this.e = {});
                    var evts = e[name];
                    var liveEvents = [];
                    if (evts && callback) {
                      for (var i = 0, len = evts.length; i < len; i++) {
                        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                          liveEvents.push(evts[i]);
                      }
                    }
                    liveEvents.length ? e[name] = liveEvents : delete e[name];
                    return this;
                  }
                };
                module2.exports = E;
                module2.exports.TinyEmitter = E;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            if (__webpack_module_cache__[moduleId]) {
              return __webpack_module_cache__[moduleId].exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          !function() {
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function() {
                  return module2["default"];
                }
              ) : (
                /******/
                function() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          }();
          !function() {
            __webpack_require__.d = function(exports2, definition) {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          }();
          !function() {
            __webpack_require__.o = function(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
          }();
          return __webpack_require__(686);
        }().default
      );
    });
  }
});

// node_modules/alpinejs/dist/module.esm.js
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup2 = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup2 = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup2();
  }];
}
function watch(getter, callback) {
  let firstTime = true;
  let oldValue;
  let effectReference = effect(() => {
    let value = getter();
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  });
  return () => release(effectReference);
}
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
function cleanupElement(el) {
  el._x_effects?.forEach(dequeueJob);
  while (el._x_cleanups?.length)
    el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
  let records = observer.takeRecords();
  queuedMutations.push(() => records.length > 0 && onMutate(records));
  let queueLengthWhenTriggered = queuedMutations.length;
  queueMicrotask(() => {
    if (queuedMutations.length === queueLengthWhenTriggered) {
      while (queuedMutations.length > 0)
        queuedMutations.shift()();
    }
  });
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = /* @__PURE__ */ new Set();
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].removedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (!node._x_marker)
          return;
        removedNodes.add(node);
      });
      mutations[i].addedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (removedNodes.has(node)) {
          removedNodes.delete(node);
          return;
        }
        if (node._x_marker)
          return;
        addedNodes.push(node);
      });
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add2 = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add2();
      } else if (el.hasAttribute(name)) {
        remove();
        add2();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.some((i) => i.contains(node)))
      continue;
    onElRemoveds.forEach((i) => i(node));
  }
  for (let node of addedNodes) {
    if (!node.isConnected)
      continue;
    onElAddeds.forEach((i) => i(node));
  }
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap);
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(
      new Set(objects.flatMap((i) => Object.keys(i)))
    );
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables)
      return false;
    return objects.some(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
    );
  },
  get({ objects }, name, thisProxy) {
    if (name == "toJSON")
      return collapseProxies;
    return Reflect.get(
      objects.find(
        (obj) => Reflect.has(obj, name)
      ) || {},
      name,
      thisProxy
    );
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    ) || objects[objects.length - 1];
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if (descriptor?.set && descriptor?.get)
      return descriptor.set.call(thisProxy, value) || true;
    return Reflect.set(target, name, value);
  }
};
function collapseProxies() {
  let keys = Reflect.ownKeys(this);
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key);
    return acc;
  }, {});
}
function initInterceptors(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0)
        return;
      if (typeof value === "object" && value !== null && value.__v_skip)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  let memoizedUtilities = getUtilities(el);
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, memoizedUtilities);
      },
      enumerable: false
    });
  });
  return obj;
}
function getUtilities(el) {
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  let utils = { interceptor, ...utilities };
  onElRemoved(el, cleanup2);
  return utils;
}
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  error2 = Object.assign(
    error2 ?? { message: "No error message given." },
    { el, expression }
  );
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      let func2 = new AsyncFunction(
        ["__self", "scope"],
        `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
      );
      Object.defineProperty(func2, "name", {
        value: `[Alpine] ${expression}`
      });
      return func2;
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i) => receiver(i));
  } else {
    receiver(value);
  }
}
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directiveExists(name) {
  return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup2 = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup: cleanup2,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup2);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup2;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "anchor",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true
    })
  );
}
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
  setTimeout(() => {
    warnAboutMissingPlugins();
  });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
  initInterceptors2.push(callback);
}
var markerDispenser = 1;
function initTree(el, walker = walk, intercept = () => {
}) {
  if (findClosest(el, (i) => i._x_ignore))
    return;
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      if (el2._x_marker)
        return;
      intercept(el2, skip);
      initInterceptors2.forEach((i) => i(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      if (!el2._x_ignore)
        el2._x_marker = markerDispenser++;
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root, walker = walk) {
  walker(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el._x_marker;
  });
}
function warnAboutMissingPlugins() {
  let pluginDirectives = [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]]
  ];
  pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
    if (directiveExists(directive2))
      return;
    selectors.some((selector) => {
      if (document.querySelector(selector)) {
        warn(`found "${selector}", but missing ${plugin2} plugin`);
        return true;
      }
    });
  });
}
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate22 }) => {
  if (typeof expression === "function")
    expression = evaluate22(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    "enter": (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    "leave": (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay3 = modifierValue(modifiers, "delay", 0) / 1e3;
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay3}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay3}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i?.());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay3 = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay3);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
  interceptors.push(callback);
}
function cloneNode(from, to) {
  interceptors.forEach((i) => i(from, to));
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {
      });
    });
  });
  isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  isCloningLegacy = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
  isCloningLegacy = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (isRadio(el)) {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      if (typeof value === "boolean") {
        el.checked = safeParseBoolean(el.value) === value;
      } else {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    }
  } else if (isCheckbox(el)) {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value === void 0 ? "" : value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function safeParseBoolean(rawValue) {
  if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
    return true;
  }
  if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
    return false;
  }
  return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "shadowrootclonable",
  "shadowrootdelegatesfocus",
  "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
  return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}
function isCheckbox(el) {
  return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
  return el.type === "radio" || el.localName === "ui-radio";
}
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true;
  let outerHash;
  let innerHash;
  let reference = effect(() => {
    let outer = outerGet();
    let inner = innerGet();
    if (firstRun) {
      innerSet(cloneIfObject(outer));
      firstRun = false;
    } else {
      let outerHashLatest = JSON.stringify(outer);
      let innerHashLatest = JSON.stringify(inner);
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer));
      } else if (outerHashLatest !== innerHashLatest) {
        outerSet(cloneIfObject(inner));
      } else {
      }
    }
    outerHash = JSON.stringify(outerGet());
    innerHash = JSON.stringify(innerGet());
  });
  return () => {
    release(reference);
  };
}
function cloneIfObject(value) {
  return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i) => i(alpine_default));
}
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  initInterceptors(stores[name]);
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
}
function getStores() {
  return stores;
}
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
  return () => {
  };
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
  return () => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
  };
}
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.14.8",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  interceptClone,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  // INTERNAL: not public API and is subject to change without major release.
  transition,
  // INTERNAL
  setStyles,
  // INTERNAL
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  // INTERNAL
  cloneNode,
  // INTERNAL
  bound: getBinding,
  $data: scope,
  watch,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol(true ? "iterate" : "");
var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect3 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect3();
  }
  return effect3;
}
function stop(effect3) {
  if (effect3.active) {
    cleanup(effect3);
    if (effect3.options.onStop) {
      effect3.options.onStop();
    }
    effect3.active = false;
  }
}
var uid = 0;
function createReactiveEffect(fn, options) {
  const effect3 = function reactiveEffect() {
    if (!effect3.active) {
      return fn();
    }
    if (!effectStack.includes(effect3)) {
      cleanup(effect3);
      try {
        enableTracking();
        effectStack.push(effect3);
        activeEffect = effect3;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect3.id = uid++;
  effect3.allowRecurse = !!options.allowRecurse;
  effect3._isEffect = true;
  effect3.active = true;
  effect3.raw = fn;
  effect3.deps = [];
  effect3.options = options;
  return effect3;
}
function cleanup(effect3) {
  const { deps } = effect3;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect3);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === void 0) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = /* @__PURE__ */ new Set());
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = /* @__PURE__ */ new Set();
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect3) => {
        if (effect3 !== activeEffect || effect3.allowRecurse) {
          effects.add(effect3);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== void 0) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect3) => {
    if (effect3.options.onTrigger) {
      effect3.options.onTrigger({
        effect: effect3,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget
      });
    }
    if (effect3.options.scheduler) {
      effect3.options.scheduler(effect3);
    } else {
      effect3();
    }
  };
  effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive2(res);
    }
    return res;
  };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set3(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get2,
  set: set2,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var toReactive = (value) => isObject(value) ? reactive2(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value[
    "__v_skip"
    /* SKIP */
  ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
  if (target && target[
    "__v_isReadonly"
    /* IS_READONLY */
  ]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target[
    "__v_raw"
    /* RAW */
  ] && !(isReadonly && target[
    "__v_isReactive"
    /* IS_REACTIVE */
  ])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  return observed && toRaw(observed[
    "__v_raw"
    /* RAW */
  ]) || observed;
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
magic("nextTick", () => nextTick);
magic("dispatch", (el) => dispatch.bind(dispatch, el));
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
  let evaluate22 = evaluateLater2(key);
  let getter = () => {
    let value;
    evaluate22((i) => value = i);
    return value;
  };
  let unwatch = watch(getter, callback);
  cleanup2(unwatch);
});
magic("store", getStores);
magic("data", (el) => scope(el));
magic("root", (el) => closestRoot(el));
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  findClosest(el, (i) => {
    if (i._x_refs)
      refObjects.push(i._x_refs);
  });
  return refObjects;
}
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}
magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
  let cacheKey = `${name}${key ? `-${key}` : ""}`;
  return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
});
interceptClone((from, to) => {
  if (from._x_id) {
    to._x_id = from._x_id;
  }
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
  if (!el._x_id)
    el._x_id = {};
  if (el._x_id[cacheKey])
    return el._x_id[cacheKey];
  let output = callback();
  el._x_id[cacheKey] = output;
  cleanup2(() => {
    delete el._x_id[cacheKey];
  });
  return output;
}
magic("el", (el) => el);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, { scope: { "__placeholder": val } });
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle(
      {
        get() {
          return outerGet();
        },
        set(value) {
          outerSet(value);
        }
      },
      {
        get() {
          return innerGet();
        },
        set(value) {
          innerSet(value);
        }
      }
    );
    cleanup2(releaseEntanglement);
  });
});
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = getTarget(expression);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  el.setAttribute("data-teleport-template", true);
  clone2.setAttribute("data-teleport-target", true);
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  let placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes("prepend")) {
      target2.parentNode.insertBefore(clone3, target2);
    } else if (modifiers2.includes("append")) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling);
    } else {
      target2.appendChild(clone3);
    }
  };
  mutateDom(() => {
    placeInDom(clone2, target, modifiers);
    skipDuringClone(() => {
      initTree(clone2);
    })();
  });
  el._x_teleportPutBack = () => {
    let target2 = getTarget(expression);
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers);
    });
  };
  cleanup2(
    () => mutateDom(() => {
      clone2.remove();
      destroyTree(clone2);
    })
  );
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  return target;
}
var handler = () => {
};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup2(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
  effect3(evaluateLater(el, expression));
}));
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target))
        return;
      if (e.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e);
    });
  if (isKeyEvent(event) || isClickEvent(event)) {
    handler4 = wrapHandler(handler4, (next, e) => {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
      next(e);
    });
  }
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(
    subject
  ))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isClickEvent(event) {
  return ["contextmenu", "click", "mouse"].some((i) => event.includes(i));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (isClickEvent(e.type))
        return false;
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    "ctrl": "control",
    "slash": "/",
    "space": " ",
    "spacebar": " ",
    "cmd": "meta",
    "esc": "escape",
    "up": "arrow-up",
    "down": "arrow-down",
    "left": "arrow-left",
    "right": "arrow-right",
    "period": ".",
    "comma": ",",
    "equal": "=",
    "minus": "-",
    "underscore": "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {
    };
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {
      }, {
        scope: { "__placeholder": value }
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e) => {
    setValue(getInputValue(el, modifiers, e, getValue()));
  });
  if (modifiers.includes("fill")) {
    if ([void 0, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
      setValue(
        getInputValue(el, modifiers, { target: el }, getValue())
      );
    }
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup2(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e) => {
      nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
    });
    cleanup2(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    if (value === void 0 && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0)
      return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
    else if (isCheckbox(el)) {
      if (Array.isArray(currentValue)) {
        let newValue = null;
        if (modifiers.includes("number")) {
          newValue = safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          newValue = safeParseBoolean(event.target.value);
        } else {
          newValue = event.target.value;
        }
        return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      if (modifiers.includes("number")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        });
      } else if (modifiers.includes("boolean")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseBoolean(rawValue);
        });
      }
      return Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      let newValue;
      if (isRadio(el)) {
        if (event.target.checked) {
          newValue = event.target.value;
        } else {
          newValue = currentValue;
        }
      } else {
        newValue = event.target.value;
      }
      if (modifiers.includes("number")) {
        return safeParseNumber(newValue);
      } else if (modifiers.includes("boolean")) {
        return safeParseBoolean(newValue);
      } else if (modifiers.includes("trim")) {
        return newValue.trim();
      } else {
        return newValue;
      }
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate22 }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate22(expression, {}, false);
  }
  return evaluate22(expression, {}, false);
}));
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate22 = evaluateLater2(expression);
  effect3(() => {
    evaluate22((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate22 = evaluateLater2(expression);
  effect3(() => {
    evaluate22((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, { scope: bindingProviders });
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate22 = evaluateLater(el, expression);
  effect3(() => evaluate22((result) => {
    if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
  cleanup2(() => {
    el._x_undoAddedClasses && el._x_undoAddedClasses();
    el._x_undoAddedStyles && el._x_undoAddedStyles();
  });
};
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = { expression, extract: false };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
  if (shouldSkipRegisteringDataDuringClone(el))
    return;
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === void 0 || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup2(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
});
interceptClone((from, to) => {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack;
    to.setAttribute("data-has-alpine-state", true);
  }
});
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning)
    return false;
  if (isCloningLegacy)
    return true;
  return el.hasAttribute("data-has-alpine-state");
}
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate22 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once(
    (value) => value ? show() : hide(),
    (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    }
  );
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate22((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(
    el,
    // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index"
  );
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup2(() => {
    Object.values(el._x_lookup).forEach((el2) => mutateDom(
      () => {
        destroyTree(el2);
        el2.remove();
      }
    ));
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => {
          if (keys.includes(value2))
            warn("Duplicate key on x-for", el);
          keys.push(value2);
        }, { scope: { index: key, ...scope2 } });
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => {
          if (keys.includes(value))
            warn("Duplicate key on x-for", el);
          keys.push(value);
        }, { scope: { index: i, ...scope2 } });
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      if (!(key in lookup))
        continue;
      mutateDom(() => {
        destroyTree(lookup[key]);
        lookup[key].remove();
      });
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function handler3() {
}
handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup2(() => delete root._x_refs[expression]);
};
directive("ref", handler3);
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-if can only be used on a <template> tag", el);
  let evaluate22 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      skipDuringClone(() => initTree(clone2))();
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      mutateDom(() => {
        destroyTree(clone2);
        clone2.remove();
      });
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate22((value) => {
    value ? show() : hide();
  }));
  cleanup2(() => el._x_undoIf && el._x_undoIf());
});
directive("id", (el, { expression }, { evaluate: evaluate22 }) => {
  let names = evaluate22(expression);
  names.forEach((name) => setIdRoot(el, name));
});
interceptClone((from, to) => {
  if (from._x_ids) {
    to._x_ids = from._x_ids;
  }
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
  let evaluate22 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate22(() => {
    }, { scope: { "$event": e }, params: [e] });
  });
  cleanup2(() => removeListener());
}));
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
var src_default = alpine_default;
var module_default = src_default;

// node_modules/@danharrin/alpine-mousetrap/dist/module.esm.js
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp2(target, "__esModule", { value: true });
var __commonJS2 = (callback, module) => () => {
  if (!module) {
    module = { exports: {} };
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames2(module))
      if (!__hasOwnProp2.call(target, key) && key !== "default")
        __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc2(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp2(module != null ? __create2(__getProtoOf2(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var require_mousetrap = __commonJS2((exports, module) => {
  (function(window2, document2, undefined2) {
    if (!window2) {
      return;
    }
    var _MAP = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    };
    var _KEYCODE_MAP = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    };
    var _SHIFT_MAP = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    };
    var _SPECIAL_ALIASES = {
      option: "alt",
      command: "meta",
      return: "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    };
    var _REVERSE_MAP;
    for (var i = 1; i < 20; ++i) {
      _MAP[111 + i] = "f" + i;
    }
    for (i = 0; i <= 9; ++i) {
      _MAP[i + 96] = i.toString();
    }
    function _addEvent(object, type, callback) {
      if (object.addEventListener) {
        object.addEventListener(type, callback, false);
        return;
      }
      object.attachEvent("on" + type, callback);
    }
    function _characterFromEvent(e) {
      if (e.type == "keypress") {
        var character = String.fromCharCode(e.which);
        if (!e.shiftKey) {
          character = character.toLowerCase();
        }
        return character;
      }
      if (_MAP[e.which]) {
        return _MAP[e.which];
      }
      if (_KEYCODE_MAP[e.which]) {
        return _KEYCODE_MAP[e.which];
      }
      return String.fromCharCode(e.which).toLowerCase();
    }
    function _modifiersMatch(modifiers1, modifiers2) {
      return modifiers1.sort().join(",") === modifiers2.sort().join(",");
    }
    function _eventModifiers(e) {
      var modifiers = [];
      if (e.shiftKey) {
        modifiers.push("shift");
      }
      if (e.altKey) {
        modifiers.push("alt");
      }
      if (e.ctrlKey) {
        modifiers.push("ctrl");
      }
      if (e.metaKey) {
        modifiers.push("meta");
      }
      return modifiers;
    }
    function _preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
        return;
      }
      e.returnValue = false;
    }
    function _stopPropagation(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
        return;
      }
      e.cancelBubble = true;
    }
    function _isModifier(key) {
      return key == "shift" || key == "ctrl" || key == "alt" || key == "meta";
    }
    function _getReverseMap() {
      if (!_REVERSE_MAP) {
        _REVERSE_MAP = {};
        for (var key in _MAP) {
          if (key > 95 && key < 112) {
            continue;
          }
          if (_MAP.hasOwnProperty(key)) {
            _REVERSE_MAP[_MAP[key]] = key;
          }
        }
      }
      return _REVERSE_MAP;
    }
    function _pickBestAction(key, modifiers, action) {
      if (!action) {
        action = _getReverseMap()[key] ? "keydown" : "keypress";
      }
      if (action == "keypress" && modifiers.length) {
        action = "keydown";
      }
      return action;
    }
    function _keysFromString(combination) {
      if (combination === "+") {
        return ["+"];
      }
      combination = combination.replace(/\+{2}/g, "+plus");
      return combination.split("+");
    }
    function _getKeyInfo(combination, action) {
      var keys;
      var key;
      var i2;
      var modifiers = [];
      keys = _keysFromString(combination);
      for (i2 = 0; i2 < keys.length; ++i2) {
        key = keys[i2];
        if (_SPECIAL_ALIASES[key]) {
          key = _SPECIAL_ALIASES[key];
        }
        if (action && action != "keypress" && _SHIFT_MAP[key]) {
          key = _SHIFT_MAP[key];
          modifiers.push("shift");
        }
        if (_isModifier(key)) {
          modifiers.push(key);
        }
      }
      action = _pickBestAction(key, modifiers, action);
      return {
        key,
        modifiers,
        action
      };
    }
    function _belongsTo(element, ancestor) {
      if (element === null || element === document2) {
        return false;
      }
      if (element === ancestor) {
        return true;
      }
      return _belongsTo(element.parentNode, ancestor);
    }
    function Mousetrap3(targetElement) {
      var self = this;
      targetElement = targetElement || document2;
      if (!(self instanceof Mousetrap3)) {
        return new Mousetrap3(targetElement);
      }
      self.target = targetElement;
      self._callbacks = {};
      self._directMap = {};
      var _sequenceLevels = {};
      var _resetTimer;
      var _ignoreNextKeyup = false;
      var _ignoreNextKeypress = false;
      var _nextExpectedAction = false;
      function _resetSequences(doNotReset) {
        doNotReset = doNotReset || {};
        var activeSequences = false, key;
        for (key in _sequenceLevels) {
          if (doNotReset[key]) {
            activeSequences = true;
            continue;
          }
          _sequenceLevels[key] = 0;
        }
        if (!activeSequences) {
          _nextExpectedAction = false;
        }
      }
      function _getMatches(character, modifiers, e, sequenceName, combination, level) {
        var i2;
        var callback;
        var matches2 = [];
        var action = e.type;
        if (!self._callbacks[character]) {
          return [];
        }
        if (action == "keyup" && _isModifier(character)) {
          modifiers = [character];
        }
        for (i2 = 0; i2 < self._callbacks[character].length; ++i2) {
          callback = self._callbacks[character][i2];
          if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
            continue;
          }
          if (action != callback.action) {
            continue;
          }
          if (action == "keypress" && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
            var deleteCombo = !sequenceName && callback.combo == combination;
            var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
            if (deleteCombo || deleteSequence) {
              self._callbacks[character].splice(i2, 1);
            }
            matches2.push(callback);
          }
        }
        return matches2;
      }
      function _fireCallback(callback, e, combo, sequence) {
        if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
          return;
        }
        if (callback(e, combo) === false) {
          _preventDefault(e);
          _stopPropagation(e);
        }
      }
      self._handleKey = function(character, modifiers, e) {
        var callbacks = _getMatches(character, modifiers, e);
        var i2;
        var doNotReset = {};
        var maxLevel = 0;
        var processedSequenceCallback = false;
        for (i2 = 0; i2 < callbacks.length; ++i2) {
          if (callbacks[i2].seq) {
            maxLevel = Math.max(maxLevel, callbacks[i2].level);
          }
        }
        for (i2 = 0; i2 < callbacks.length; ++i2) {
          if (callbacks[i2].seq) {
            if (callbacks[i2].level != maxLevel) {
              continue;
            }
            processedSequenceCallback = true;
            doNotReset[callbacks[i2].seq] = 1;
            _fireCallback(callbacks[i2].callback, e, callbacks[i2].combo, callbacks[i2].seq);
            continue;
          }
          if (!processedSequenceCallback) {
            _fireCallback(callbacks[i2].callback, e, callbacks[i2].combo);
          }
        }
        var ignoreThisKeypress = e.type == "keypress" && _ignoreNextKeypress;
        if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
          _resetSequences(doNotReset);
        }
        _ignoreNextKeypress = processedSequenceCallback && e.type == "keydown";
      };
      function _handleKeyEvent(e) {
        if (typeof e.which !== "number") {
          e.which = e.keyCode;
        }
        var character = _characterFromEvent(e);
        if (!character) {
          return;
        }
        if (e.type == "keyup" && _ignoreNextKeyup === character) {
          _ignoreNextKeyup = false;
          return;
        }
        self.handleKey(character, _eventModifiers(e), e);
      }
      function _resetSequenceTimer() {
        clearTimeout(_resetTimer);
        _resetTimer = setTimeout(_resetSequences, 1e3);
      }
      function _bindSequence(combo, keys, callback, action) {
        _sequenceLevels[combo] = 0;
        function _increaseSequence(nextAction) {
          return function() {
            _nextExpectedAction = nextAction;
            ++_sequenceLevels[combo];
            _resetSequenceTimer();
          };
        }
        function _callbackAndReset(e) {
          _fireCallback(callback, e, combo);
          if (action !== "keyup") {
            _ignoreNextKeyup = _characterFromEvent(e);
          }
          setTimeout(_resetSequences, 10);
        }
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var isFinal = i2 + 1 === keys.length;
          var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i2 + 1]).action);
          _bindSingle(keys[i2], wrappedCallback, action, combo, i2);
        }
      }
      function _bindSingle(combination, callback, action, sequenceName, level) {
        self._directMap[combination + ":" + action] = callback;
        combination = combination.replace(/\s+/g, " ");
        var sequence = combination.split(" ");
        var info;
        if (sequence.length > 1) {
          _bindSequence(combination, sequence, callback, action);
          return;
        }
        info = _getKeyInfo(combination, action);
        self._callbacks[info.key] = self._callbacks[info.key] || [];
        _getMatches(info.key, info.modifiers, { type: info.action }, sequenceName, combination, level);
        self._callbacks[info.key][sequenceName ? "unshift" : "push"]({
          callback,
          modifiers: info.modifiers,
          action: info.action,
          seq: sequenceName,
          level,
          combo: combination
        });
      }
      self._bindMultiple = function(combinations, callback, action) {
        for (var i2 = 0; i2 < combinations.length; ++i2) {
          _bindSingle(combinations[i2], callback, action);
        }
      };
      _addEvent(targetElement, "keypress", _handleKeyEvent);
      _addEvent(targetElement, "keydown", _handleKeyEvent);
      _addEvent(targetElement, "keyup", _handleKeyEvent);
    }
    Mousetrap3.prototype.bind = function(keys, callback, action) {
      var self = this;
      keys = keys instanceof Array ? keys : [keys];
      self._bindMultiple.call(self, keys, callback, action);
      return self;
    };
    Mousetrap3.prototype.unbind = function(keys, action) {
      var self = this;
      return self.bind.call(self, keys, function() {
      }, action);
    };
    Mousetrap3.prototype.trigger = function(keys, action) {
      var self = this;
      if (self._directMap[keys + ":" + action]) {
        self._directMap[keys + ":" + action]({}, keys);
      }
      return self;
    };
    Mousetrap3.prototype.reset = function() {
      var self = this;
      self._callbacks = {};
      self._directMap = {};
      return self;
    };
    Mousetrap3.prototype.stopCallback = function(e, element) {
      var self = this;
      if ((" " + element.className + " ").indexOf(" mousetrap ") > -1) {
        return false;
      }
      if (_belongsTo(element, self.target)) {
        return false;
      }
      if ("composedPath" in e && typeof e.composedPath === "function") {
        var initialEventTarget = e.composedPath()[0];
        if (initialEventTarget !== e.target) {
          element = initialEventTarget;
        }
      }
      return element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "TEXTAREA" || element.isContentEditable;
    };
    Mousetrap3.prototype.handleKey = function() {
      var self = this;
      return self._handleKey.apply(self, arguments);
    };
    Mousetrap3.addKeycodes = function(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          _MAP[key] = object[key];
        }
      }
      _REVERSE_MAP = null;
    };
    Mousetrap3.init = function() {
      var documentMousetrap = Mousetrap3(document2);
      for (var method in documentMousetrap) {
        if (method.charAt(0) !== "_") {
          Mousetrap3[method] = function(method2) {
            return function() {
              return documentMousetrap[method2].apply(documentMousetrap, arguments);
            };
          }(method);
        }
      }
    };
    Mousetrap3.init();
    window2.Mousetrap = Mousetrap3;
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Mousetrap3;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return Mousetrap3;
      });
    }
  })(typeof window !== "undefined" ? window : null, typeof window !== "undefined" ? document : null);
});
var import_mousetrap = __toModule(require_mousetrap());
(function(Mousetrap3) {
  if (!Mousetrap3) {
    return;
  }
  var _globalCallbacks = {};
  var _originalStopCallback = Mousetrap3.prototype.stopCallback;
  Mousetrap3.prototype.stopCallback = function(e, element, combo, sequence) {
    var self = this;
    if (self.paused) {
      return true;
    }
    if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
      return false;
    }
    return _originalStopCallback.call(self, e, element, combo);
  };
  Mousetrap3.prototype.bindGlobal = function(keys, callback, action) {
    var self = this;
    self.bind(keys, callback, action);
    if (keys instanceof Array) {
      for (var i = 0; i < keys.length; i++) {
        _globalCallbacks[keys[i]] = true;
      }
      return;
    }
    _globalCallbacks[keys] = true;
  };
  Mousetrap3.init();
})(typeof Mousetrap !== "undefined" ? Mousetrap : void 0);
var src_default2 = (Alpine2) => {
  Alpine2.directive("mousetrap", (el, { modifiers, expression }, { evaluate: evaluate3 }) => {
    const action = () => expression ? evaluate3(expression) : el.click();
    modifiers = modifiers.map((modifier) => modifier.replace(/-/g, "+"));
    if (modifiers.includes("global")) {
      modifiers = modifiers.filter((modifier) => modifier !== "global");
      import_mousetrap.default.bindGlobal(modifiers, ($event) => {
        $event.preventDefault();
        action();
      });
    }
    import_mousetrap.default.bind(modifiers, ($event) => {
      $event.preventDefault();
      action();
    });
  });
};
var module_default2 = src_default2;

// node_modules/@alpinejs/anchor/dist/module.esm.js
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start2, value, end) {
  return max(start2, min(value, end));
}
function evaluate2(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data: data2,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data2
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate2(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate2(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate2(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate2(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup2() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup2();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup2;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function src_default3(Alpine2) {
  Alpine2.magic("anchor", (el) => {
    if (!el._x_anchor)
      throw "Alpine: No x-anchor directive found on element using $anchor...";
    return el._x_anchor;
  });
  Alpine2.interceptClone((from, to) => {
    if (from && from._x_anchor && !to._x_anchor) {
      to._x_anchor = from._x_anchor;
    }
  });
  Alpine2.directive("anchor", Alpine2.skipDuringClone(
    (el, { expression, modifiers, value }, { cleanup: cleanup2, evaluate: evaluate22 }) => {
      let { placement, offsetValue, unstyled } = getOptions(modifiers);
      el._x_anchor = Alpine2.reactive({ x: 0, y: 0 });
      let reference = evaluate22(expression);
      if (!reference)
        throw "Alpine: no element provided to x-anchor...";
      let compute = () => {
        let previousValue;
        computePosition2(reference, el, {
          placement,
          middleware: [flip(), shift({ padding: 5 }), offset(offsetValue)]
        }).then(({ x, y }) => {
          unstyled || setStyles2(el, x, y);
          if (JSON.stringify({ x, y }) !== previousValue) {
            el._x_anchor.x = x;
            el._x_anchor.y = y;
          }
          previousValue = JSON.stringify({ x, y });
        });
      };
      let release2 = autoUpdate(reference, el, () => compute());
      cleanup2(() => release2());
    },
    // When cloning (or "morphing"), we will graft the style and position data from the live tree...
    (el, { expression, modifiers, value }, { cleanup: cleanup2, evaluate: evaluate22 }) => {
      let { placement, offsetValue, unstyled } = getOptions(modifiers);
      if (el._x_anchor) {
        unstyled || setStyles2(el, el._x_anchor.x, el._x_anchor.y);
      }
    }
  ));
}
function setStyles2(el, x, y) {
  Object.assign(el.style, {
    left: x + "px",
    top: y + "px",
    position: "absolute"
  });
}
function getOptions(modifiers) {
  let positions = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"];
  let placement = positions.find((i) => modifiers.includes(i));
  let offsetValue = 0;
  if (modifiers.includes("offset")) {
    let idx = modifiers.findIndex((i) => i === "offset");
    offsetValue = modifiers[idx + 1] !== void 0 ? Number(modifiers[idx + 1]) : offsetValue;
  }
  let unstyled = modifiers.includes("no-style");
  return { placement, offsetValue, unstyled };
}
var module_default3 = src_default3;

// node_modules/@alpinejs/collapse/dist/module.esm.js
function src_default4(Alpine2) {
  Alpine2.directive("collapse", collapse);
  collapse.inline = (el, { modifiers }) => {
    if (!modifiers.includes("min"))
      return;
    el._x_doShow = () => {
    };
    el._x_doHide = () => {
    };
  };
  function collapse(el, { modifiers }) {
    let duration = modifierValue2(modifiers, "duration", 250) / 1e3;
    let floor2 = modifierValue2(modifiers, "min", 0);
    let fullyHide = !modifiers.includes("min");
    if (!el._x_isShown)
      el.style.height = `${floor2}px`;
    if (!el._x_isShown && fullyHide)
      el.hidden = true;
    if (!el._x_isShown)
      el.style.overflow = "hidden";
    let setFunction = (el2, styles) => {
      let revertFunction = Alpine2.setStyles(el2, styles);
      return styles.height ? () => {
      } : revertFunction;
    };
    let transitionStyles = {
      transitionProperty: "height",
      transitionDuration: `${duration}s`,
      transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
    };
    el._x_transition = {
      in(before = () => {
      }, after = () => {
      }) {
        if (fullyHide)
          el.hidden = false;
        if (fullyHide)
          el.style.display = null;
        let current = el.getBoundingClientRect().height;
        el.style.height = "auto";
        let full = el.getBoundingClientRect().height;
        if (current === full) {
          current = floor2;
        }
        Alpine2.transition(el, Alpine2.setStyles, {
          during: transitionStyles,
          start: { height: current + "px" },
          end: { height: full + "px" }
        }, () => el._x_isShown = true, () => {
          if (Math.abs(el.getBoundingClientRect().height - full) < 1) {
            el.style.overflow = null;
          }
        });
      },
      out(before = () => {
      }, after = () => {
      }) {
        let full = el.getBoundingClientRect().height;
        Alpine2.transition(el, setFunction, {
          during: transitionStyles,
          start: { height: full + "px" },
          end: { height: floor2 + "px" }
        }, () => el.style.overflow = "hidden", () => {
          el._x_isShown = false;
          if (el.style.height == `${floor2}px` && fullyHide) {
            el.style.display = "none";
            el.hidden = true;
          }
        });
      }
    };
  }
}
function modifierValue2(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "duration") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "min") {
    let match = rawValue.match(/([0-9]+)px/);
    if (match)
      return match[1];
  }
  return rawValue;
}
var module_default4 = src_default4;

// node_modules/@alpinejs/focus/dist/module.esm.js
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  return element.getRootNode();
} : function(element) {
  return element.ownerDocument;
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scope: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var getTabindex = function getTabindex2(node, isScope) {
  if (node.tabIndex < 0) {
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio2 = function isRadio22(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio2(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  var nodeRootHost = getRootNode(node).host;
  var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
  if (!displayCheck || displayCheck === "full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (nodeIsAttached) {
      return !node.getClientRects().length;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scope;
    var element = isScope ? item.scope : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var activeFocusTraps = function() {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }
      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
  return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
};
var isTabEvent = function isTabEvent2(e) {
  return e.key === "Tab" || e.keyCode === 9;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var findIndex = function findIndex2(arr, fn) {
  var idx = -1;
  arr.every(function(value, i) {
    if (fn(value)) {
      idx = i;
      return false;
    }
    return true;
  });
  return idx;
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element) {
    return state.containerGroups.findIndex(function(_ref) {
      var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus");
    if (node === false) {
      return false;
    }
    if (node === void 0) {
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.containerGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);
      var focusableNodes = focusable(container, config.tabbableOptions);
      return {
        container,
        tabbableNodes,
        focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = focusableNodes.findIndex(function(n) {
            return n === node;
          });
          if (nodeIdx < 0) {
            return void 0;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function(n) {
              return isTabbable(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function(n) {
            return isTabbable(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
  };
  var tryFocus = function tryFocus2(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus2(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };
  var checkPointerDown = function checkPointerDown2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(target, config.tabbableOptions)
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };
  var checkTab = function checkTab2(e) {
    var target = getActualTarget(e);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (e.shiftKey) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };
  var checkKey = function checkKey2(e) {
    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
      e.preventDefault();
      trap.deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };
  var checkClick = function checkClick2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trap);
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkKey, true);
    return trap;
  };
  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      if (onActivate) {
        onActivate();
      }
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        if (onPostActivate) {
          onPostActivate();
        }
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer);
      state.delayInitialFocusTimer = void 0;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      if (onDeactivate) {
        onDeactivate();
      }
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }
      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }
      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      return this;
    }
  };
  trap.updateContainerElements(elements);
  return trap;
};
function src_default5(Alpine2) {
  let lastFocused;
  let currentFocused;
  window.addEventListener("focusin", () => {
    lastFocused = currentFocused;
    currentFocused = document.activeElement;
  });
  Alpine2.magic("focus", (el) => {
    let within = el;
    return {
      __noscroll: false,
      __wrapAround: false,
      within(el2) {
        within = el2;
        return this;
      },
      withoutScrolling() {
        this.__noscroll = true;
        return this;
      },
      noscroll() {
        this.__noscroll = true;
        return this;
      },
      withWrapAround() {
        this.__wrapAround = true;
        return this;
      },
      wrap() {
        return this.withWrapAround();
      },
      focusable(el2) {
        return isFocusable(el2);
      },
      previouslyFocused() {
        return lastFocused;
      },
      lastFocused() {
        return lastFocused;
      },
      focused() {
        return currentFocused;
      },
      focusables() {
        if (Array.isArray(within))
          return within;
        return focusable(within, { displayCheck: "none" });
      },
      all() {
        return this.focusables();
      },
      isFirst(el2) {
        let els = this.all();
        return els[0] && els[0].isSameNode(el2);
      },
      isLast(el2) {
        let els = this.all();
        return els.length && els.slice(-1)[0].isSameNode(el2);
      },
      getFirst() {
        return this.all()[0];
      },
      getLast() {
        return this.all().slice(-1)[0];
      },
      getNext() {
        let list = this.all();
        let current = document.activeElement;
        if (list.indexOf(current) === -1)
          return;
        if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
          return list[0];
        }
        return list[list.indexOf(current) + 1];
      },
      getPrevious() {
        let list = this.all();
        let current = document.activeElement;
        if (list.indexOf(current) === -1)
          return;
        if (this.__wrapAround && list.indexOf(current) === 0) {
          return list.slice(-1)[0];
        }
        return list[list.indexOf(current) - 1];
      },
      first() {
        this.focus(this.getFirst());
      },
      last() {
        this.focus(this.getLast());
      },
      next() {
        this.focus(this.getNext());
      },
      previous() {
        this.focus(this.getPrevious());
      },
      prev() {
        return this.previous();
      },
      focus(el2) {
        if (!el2)
          return;
        setTimeout(() => {
          if (!el2.hasAttribute("tabindex"))
            el2.setAttribute("tabindex", "0");
          el2.focus({ preventScroll: this.__noscroll });
        });
      }
    };
  });
  Alpine2.directive("trap", Alpine2.skipDuringClone(
    (el, { expression, modifiers }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluator = evaluateLater2(expression);
      let oldValue = false;
      let options = {
        escapeDeactivates: false,
        allowOutsideClick: true,
        fallbackFocus: () => el
      };
      if (modifiers.includes("noautofocus")) {
        options.initialFocus = false;
      } else {
        let autofocusEl = el.querySelector("[autofocus]");
        if (autofocusEl)
          options.initialFocus = autofocusEl;
      }
      let trap = createFocusTrap(el, options);
      let undoInert = () => {
      };
      let undoDisableScrolling = () => {
      };
      const releaseFocus = () => {
        undoInert();
        undoInert = () => {
        };
        undoDisableScrolling();
        undoDisableScrolling = () => {
        };
        trap.deactivate({
          returnFocus: !modifiers.includes("noreturn")
        });
      };
      effect3(() => evaluator((value) => {
        if (oldValue === value)
          return;
        if (value && !oldValue) {
          if (modifiers.includes("noscroll"))
            undoDisableScrolling = disableScrolling();
          if (modifiers.includes("inert"))
            undoInert = setInert(el);
          setTimeout(() => {
            trap.activate();
          }, 15);
        }
        if (!value && oldValue) {
          releaseFocus();
        }
        oldValue = !!value;
      }));
      cleanup2(releaseFocus);
    },
    // When cloning, we only want to add aria-hidden attributes to the
    // DOM and not try to actually trap, as trapping can mess with the
    // live DOM and isn't just isolated to the cloned DOM.
    (el, { expression, modifiers }, { evaluate: evaluate3 }) => {
      if (modifiers.includes("inert") && evaluate3(expression))
        setInert(el);
    }
  ));
}
function setInert(el) {
  let undos = [];
  crawlSiblingsUp(el, (sibling) => {
    let cache = sibling.hasAttribute("aria-hidden");
    sibling.setAttribute("aria-hidden", "true");
    undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
  });
  return () => {
    while (undos.length)
      undos.pop()();
  };
}
function crawlSiblingsUp(el, callback) {
  if (el.isSameNode(document.body) || !el.parentNode)
    return;
  Array.from(el.parentNode.children).forEach((sibling) => {
    if (sibling.isSameNode(el)) {
      crawlSiblingsUp(el.parentNode, callback);
    } else {
      callback(sibling);
    }
  });
}
function disableScrolling() {
  let overflow = document.documentElement.style.overflow;
  let paddingRight = document.documentElement.style.paddingRight;
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
  return () => {
    document.documentElement.style.overflow = overflow;
    document.documentElement.style.paddingRight = paddingRight;
  };
}
var module_default5 = src_default5;

// resources/js/components/tableOfContent.js
var tableOfContent_default = () => ({
  activeHeading: null,
  init() {
    module_default.nextTick(() => {
      const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      if (headingElements.length > 0) {
        this.activeHeading = headingElements[0].querySelector("a")?.id;
      }
      const observer2 = new IntersectionObserver(
        (entries) => {
          const visibleHeadings = entries.filter(
            (entry) => entry.isIntersecting
          );
          visibleHeadings.sort((a, b) => {
            return a.target.offsetTop - b.target.offsetTop;
          });
          if (visibleHeadings.length > 0) {
            const topHeading = visibleHeadings.reduce(
              (prev, current) => prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
            );
            this.activeHeading = topHeading.target.querySelector("a")?.id;
          }
        },
        { rootMargin: "0px 0px -75% 0px", threshold: 0.7 }
      );
      headingElements.forEach((heading) => observer2.observe(heading));
    });
  }
});

// resources/js/components/tabs.js
var tabs_default = () => ({
  activeId: null,
  init() {
    this.$nextTick(() => this.activate(this.$id("tab", 1)));
  },
  activate(id) {
    this.activeId = id;
  },
  isActive(id) {
    return this.activeId === id;
  },
  getTabIndex(el, parent) {
    return Array.from(parent.children).indexOf(el) + 1;
  }
});

// resources/js/components/dropdown.js
var dropdown_default = () => ({
  open: false,
  isOpen() {
    return this.open;
  },
  toggle() {
    if (this.open) {
      return this.close();
    }
    this.$refs.button.focus();
    this.open = true;
  },
  close(focusAfter) {
    if (!this.open)
      return;
    this.open = false;
    focusAfter && focusAfter.focus();
  },
  handleFocusInOut(event) {
    const panel = this.$refs.panel;
    const button = this.$refs.button;
    const target = event.target;
    if (panel.contains(target) || button.contains(target))
      return;
    const lastFocusedElement = document.activeElement;
    if (this.shouldCloseDropdown(button, panel, lastFocusedElement))
      this.close(button);
  },
  shouldCloseDropdown(button, panel, lastFocusedElement) {
    return !button.contains(lastFocusedElement) && !panel.contains(lastFocusedElement) && lastFocusedElement && button.compareDocumentPosition(lastFocusedElement) & Node.DOCUMENT_POSITION_FOLLOWING;
  }
});

// resources/js/components/sidebar.js
var sidebar_default = () => ({
  open: false,
  isOpen() {
    return this.open;
  },
  toggle() {
    this.open ? this.close() : this.openSidebar();
  },
  openSidebar() {
    this.open = true;
  },
  close() {
    this.open = false;
  }
});

// resources/js/components/clipboard.js
var import_clipboard = __toESM(require_clipboard(), 1);
var clipboard_default = () => ({
  codeBlocks: document.querySelectorAll("pre") || [],
  clipboardIcon: `<svg class="w-5 h-5 fill-base-300 transition hidden group-hover:!block absolute z-30 top-3 right-3 cursor-pointer" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></svg>`,
  clipboardCopiedIcon: `<svg class="w-5 h-5 transition absolute z-30 top-3 right-3 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>`,
  init() {
    this.codeBlocks.forEach((element, key) => {
      const wrapper = document.createElement("div");
      ["relative", "code-block-wrapper", "group"].forEach(
        (value) => wrapper.classList.add(value)
      );
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
      let copyToClipboardButton = document.createElement("button");
      copyToClipboardButton.innerHTML = this.clipboardIcon;
      copyToClipboardButton.id = `code-block-copy-button-${key}`;
      ["md:block", "hidden"].forEach(
        (value) => copyToClipboardButton.classList.add(value)
      );
      copyToClipboardButton.setAttribute(
        "aria-label",
        "Copy to Clipboard"
      );
      copyToClipboardButton.setAttribute("title", "Copy to Clipboard");
      copyToClipboardButton.classList.add("code-block-copy-button", "text-primary");
      wrapper.appendChild(copyToClipboardButton);
      let copyToClipboard = new import_clipboard.default(
        `#${copyToClipboardButton.id}`
      );
      copyToClipboard.on("success", (element2) => {
        copyToClipboardButton.innerHTML = this.clipboardCopiedIcon;
        element2.clearSelection();
        setTimeout(
          () => copyToClipboardButton.innerHTML = this.clipboardIcon,
          1500
        );
      });
      element.id = `code-block-text-${key}`;
      copyToClipboardButton.dataset.clipboardTarget = `#${element.id}`;
    });
  }
});

// resources/js/components/themeSwitcher.js
var themeSwitcher_default = ({
  lightMode = null,
  darkMode = null,
  highlightingLightMode = null,
  highlightingDarkMode = null
}) => ({
  activeTheme: null,
  lightMode,
  darkMode,
  updateHighlighterTheme() {
    let codeTheme = this.activeTheme === "dark" ? highlightingDarkMode : highlightingLightMode;
    const style = document.createElement("style");
    style.innerHTML = codeTheme;
    document.head.appendChild(style);
  },
  init() {
    this.activeTheme = localStorage.getItem("theme") ?? "system";
    this.updateHighlighterTheme();
    const root = document.documentElement;
    window.Alpine.store(
      "theme",
      this.activeTheme === "dark" || this.activeTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
    window.addEventListener("theme-changed", (event) => {
      this.activeTheme = event.detail;
      localStorage.setItem("theme", this.activeTheme);
      if (this.activeTheme === "system") {
        this.activeTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches ? "dark" : "light";
      }
      window.Alpine.store("theme", this.activeTheme);
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      if (localStorage.getItem("theme") === "system") {
        window.Alpine.store(
          "theme",
          event.matches ? "dark" : "light"
        );
      }
    });
    window.Alpine.effect(() => {
      this.activeTheme = window.Alpine.store("theme");
      this.activeTheme === "dark" ? this.applyStyles(root, darkMode) : this.applyStyles(root, lightMode);
      this.updateHighlighterTheme();
    });
    this.updateHighlighterTheme();
  },
  applyStyles(element, theme) {
    Object.entries(JSON.parse(theme)).forEach(([key, value]) => {
      element.style.setProperty(key, value);
    });
  }
});

// resources/js/components/search/search.js
var search_default = ({ route, moduleId }) => ({
  query: "",
  results: [],
  isLoading: false,
  search_history: [],
  favorite_items: [],
  maxItemsAllowed: 10,
  route,
  init() {
    this.search_history = this.getLocalStorage("search_history");
    this.favorite_items = this.getLocalStorage("favorite_items");
    this.$watch(
      "search_history",
      (val) => this.setLocalStorage("search_history", val)
    );
    this.$watch(
      "favorite_items",
      (val) => this.setLocalStorage("favorite_items", val)
    );
    this.$watch("query", async (query) => {
      if (query.trim() === "") {
        this.results = [];
      } else {
        this.isLoading = true;
        this.results = await this.performSearch(query);
        this.isLoading = false;
      }
    });
  },
  async performSearch(query) {
    const response = await fetch(`${this.route}?q=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  },
  getLocalStorage(key) {
    key = `${moduleId}-${key}`;
    return JSON.parse(localStorage.getItem(key)) || [];
  },
  setLocalStorage(key, value) {
    key = `${moduleId}-${key}`;
    localStorage.setItem(key, JSON.stringify(value));
  },
  updateList(list, newItem) {
    return [
      newItem,
      ...list.filter((el) => el.title !== newItem.title)
    ].slice(0, this.maxItemsAllowed);
  },
  addToSearchHistory(searchItem, url) {
    const searchItemObject = { title: searchItem, url };
    this.search_history = this.updateList(
      this.search_history,
      searchItemObject
    );
  },
  deleteFromHistory(searchItem) {
    this.search_history = this.search_history.filter(
      (el) => el.title !== searchItem
    );
  },
  deleteAllHistory() {
    this.search_history = [];
  },
  addToFavorites(favItem, url) {
    this.deleteFromHistory(favItem);
    const favItemObject = { title: favItem, url };
    this.favorite_items = this.updateList(
      this.favorite_items,
      favItemObject
    );
  },
  deleteFromFavorites(favItem) {
    this.favorite_items = this.favorite_items.filter(
      (el) => el.title !== favItem
    );
  },
  deleteAllFavorites() {
    this.favorite_items = [];
  }
});

// resources/js/components/showContents.js
var showContents_default = () => ({
  svg: `<div class="w-7 h-7 absolute top-0 -left-7 hidden group-hover:flex rounded-md  items-center justify-center shadow-sm text-base-content transition-opacity duration-200 ring-1 hover:brightness-150 ring-base-300" style="margin-right:2px;"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div>`,
  init() {
    const contentDiv = document.querySelector(".prose.content");
    const headings = contentDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      let anchor = heading.querySelector("a");
      heading.classList.add("group", "relative", "cursor-pointer");
      heading.addEventListener("click", () => anchor.click());
      anchor.textContent = anchor.textContent.replace("#", "");
      anchor.innerHTML = this.svg;
    });
  }
});

// resources/js/app.js
module_default.plugin(module_default3);
module_default.plugin(module_default4);
module_default.plugin(module_default5);
module_default.plugin(module_default2);
module_default.data("themeSwitcher", themeSwitcher_default);
module_default.data("showContentsTweacks", showContents_default);
module_default.data("tableOfContent", tableOfContent_default);
module_default.data("codeBlockClipboard", clipboard_default);
module_default.data("tabs", tabs_default);
module_default.data("dropdown", dropdown_default);
module_default.data("sidebar", sidebar_default);
module_default.data("search", search_default);
window.Alpine = module_default;
module_default.start();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@alpinejs/focus/dist/module.esm.js:
  (*! Bundled license information:
  
  tabbable/dist/index.esm.js:
    (*!
    * tabbable 5.3.3
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    *)
  
  focus-trap/dist/focus-trap.esm.js:
    (*!
    * focus-trap 6.9.4
    * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
    *)
  *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvYWxwaW5lanMvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AZGFuaGFycmluL2FscGluZS1tb3VzZXRyYXAvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AYWxwaW5lanMvYW5jaG9yL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL2NvbGxhcHNlL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL2ZvY3VzL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJsZU9mQ29udGVudC5qcyIsICIuLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJzLmpzIiwgIi4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwgIi4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3NpZGViYXIuanMiLCAiLi4vLi4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2xpcGJvYXJkLmpzIiwgIi4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3RoZW1lU3dpdGNoZXIuanMiLCAiLi4vLi4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qcyIsICIuLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9zaG93Q29udGVudHMuanMiLCAiLi4vLi4vcmVzb3VyY2VzL2pzL2FwcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xMVxuICogaHR0cHM6Ly9jbGlwYm9hcmRqcy5jb20vXG4gKlxuICogTGljZW5zZWQgTUlUIFx1MDBBOSBaZW5vIFJvY2hhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gNjg2OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGNsaXBib2FyZDsgfVxufSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzXG52YXIgdGlueV9lbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzkpO1xudmFyIHRpbnlfZW1pdHRlcl9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubih0aW55X2VtaXR0ZXIpO1xuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanNcbnZhciBsaXN0ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3MCk7XG52YXIgbGlzdGVuX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGxpc3Rlbik7XG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3NlbGVjdC9zcmMvc2VsZWN0LmpzXG52YXIgc3JjX3NlbGVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oODE3KTtcbnZhciBzZWxlY3RfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oc3JjX3NlbGVjdCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tbW9uL2NvbW1hbmQuanNcbi8qKlxuICogRXhlY3V0ZXMgYSBnaXZlbiBvcGVyYXRpb24gdHlwZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb21tYW5kKHR5cGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQodHlwZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2FjdGlvbnMvY3V0LmpzXG5cblxuLyoqXG4gKiBDdXQgYWN0aW9uIHdyYXBwZXIuXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIENsaXBib2FyZEFjdGlvbkN1dCA9IGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbkN1dCh0YXJnZXQpIHtcbiAgdmFyIHNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkodGFyZ2V0KTtcbiAgY29tbWFuZCgnY3V0Jyk7XG4gIHJldHVybiBzZWxlY3RlZFRleHQ7XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhY3Rpb25zX2N1dCA9IChDbGlwYm9hcmRBY3Rpb25DdXQpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbW1vbi9jcmVhdGUtZmFrZS1lbGVtZW50LmpzXG4vKipcbiAqIENyZWF0ZXMgYSBmYWtlIHRleHRhcmVhIGVsZW1lbnQgd2l0aCBhIHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmFrZUVsZW1lbnQodmFsdWUpIHtcbiAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT09ICdydGwnO1xuICB2YXIgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG5cbiAgZmFrZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7IC8vIFJlc2V0IGJveCBtb2RlbFxuXG4gIGZha2VFbGVtZW50LnN0eWxlLmJvcmRlciA9ICcwJztcbiAgZmFrZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgZmFrZUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnOyAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcblxuICBmYWtlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGZha2VFbGVtZW50LnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7IC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG5cbiAgdmFyIHlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICBmYWtlRWxlbWVudC5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdCh5UG9zaXRpb24sIFwicHhcIik7XG4gIGZha2VFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gIGZha2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiBmYWtlRWxlbWVudDtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9hY3Rpb25zL2NvcHkuanNcblxuXG5cbi8qKlxuICogQ3JlYXRlIGZha2UgY29weSBhY3Rpb24gd3JhcHBlciB1c2luZyBhIGZha2UgZWxlbWVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGZha2VDb3B5QWN0aW9uID0gZnVuY3Rpb24gZmFrZUNvcHlBY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIGZha2VFbGVtZW50ID0gY3JlYXRlRmFrZUVsZW1lbnQodmFsdWUpO1xuICBvcHRpb25zLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG4gIHZhciBzZWxlY3RlZFRleHQgPSBzZWxlY3RfZGVmYXVsdCgpKGZha2VFbGVtZW50KTtcbiAgY29tbWFuZCgnY29weScpO1xuICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn07XG4vKipcbiAqIENvcHkgYWN0aW9uIHdyYXBwZXIuXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblxudmFyIENsaXBib2FyZEFjdGlvbkNvcHkgPSBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb25Db3B5KHRhcmdldCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keVxuICB9O1xuICB2YXIgc2VsZWN0ZWRUZXh0ID0gJyc7XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgc2VsZWN0ZWRUZXh0ID0gZmFrZUNvcHlBY3Rpb24odGFyZ2V0LCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmICFbJ3RleHQnLCAnc2VhcmNoJywgJ3VybCcsICd0ZWwnLCAncGFzc3dvcmQnXS5pbmNsdWRlcyh0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQudHlwZSkpIHtcbiAgICAvLyBJZiBpbnB1dCB0eXBlIGRvZXNuJ3Qgc3VwcG9ydCBgc2V0U2VsZWN0aW9uUmFuZ2VgLiBTaW11bGF0ZSBpdC4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxJbnB1dEVsZW1lbnQvc2V0U2VsZWN0aW9uUmFuZ2VcbiAgICBzZWxlY3RlZFRleHQgPSBmYWtlQ29weUFjdGlvbih0YXJnZXQudmFsdWUsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkodGFyZ2V0KTtcbiAgICBjb21tYW5kKCdjb3B5Jyk7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgYWN0aW9uc19jb3B5ID0gKENsaXBib2FyZEFjdGlvbkNvcHkpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2FjdGlvbnMvZGVmYXVsdC5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5cblxuLyoqXG4gKiBJbm5lciBmdW5jdGlvbiB3aGljaCBwZXJmb3JtcyBzZWxlY3Rpb24gZnJvbSBlaXRoZXIgYHRleHRgIG9yIGB0YXJnZXRgXG4gKiBwcm9wZXJ0aWVzIGFuZCB0aGVuIGV4ZWN1dGVzIGNvcHkgb3IgY3V0IG9wZXJhdGlvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbnZhciBDbGlwYm9hcmRBY3Rpb25EZWZhdWx0ID0gZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAvLyBEZWZpbmVzIGJhc2UgcHJvcGVydGllcyBwYXNzZWQgZnJvbSBjb25zdHJ1Y3Rvci5cbiAgdmFyIF9vcHRpb25zJGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uLFxuICAgICAgYWN0aW9uID0gX29wdGlvbnMkYWN0aW9uID09PSB2b2lkIDAgPyAnY29weScgOiBfb3B0aW9ucyRhY3Rpb24sXG4gICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcixcbiAgICAgIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0LFxuICAgICAgdGV4dCA9IG9wdGlvbnMudGV4dDsgLy8gU2V0cyB0aGUgYGFjdGlvbmAgdG8gYmUgcGVyZm9ybWVkIHdoaWNoIGNhbiBiZSBlaXRoZXIgJ2NvcHknIG9yICdjdXQnLlxuXG4gIGlmIChhY3Rpb24gIT09ICdjb3B5JyAmJiBhY3Rpb24gIT09ICdjdXQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICB9IC8vIFNldHMgdGhlIGB0YXJnZXRgIHByb3BlcnR5IHVzaW5nIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGhhdmUgaXRzIGNvbnRlbnQgY29waWVkLlxuXG5cbiAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRhcmdldCAmJiBfdHlwZW9mKHRhcmdldCkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgfVxuICB9IC8vIERlZmluZSBzZWxlY3Rpb24gc3RyYXRlZ3kgYmFzZWQgb24gYHRleHRgIHByb3BlcnR5LlxuXG5cbiAgaWYgKHRleHQpIHtcbiAgICByZXR1cm4gYWN0aW9uc19jb3B5KHRleHQsIHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gICAgfSk7XG4gIH0gLy8gRGVmaW5lcyB3aGljaCBzZWxlY3Rpb24gc3RyYXRlZ3kgYmFzZWQgb24gYHRhcmdldGAgcHJvcGVydHkuXG5cblxuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9PT0gJ2N1dCcgPyBhY3Rpb25zX2N1dCh0YXJnZXQpIDogYWN0aW9uc19jb3B5KHRhcmdldCwge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgICB9KTtcbiAgfVxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgYWN0aW9uc19kZWZhdWx0ID0gKENsaXBib2FyZEFjdGlvbkRlZmF1bHQpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NsaXBib2FyZC5qc1xuZnVuY3Rpb24gY2xpcGJvYXJkX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgY2xpcGJvYXJkX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBjbGlwYm9hcmRfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIGNsaXBib2FyZF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKGNsaXBib2FyZF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5cblxuXG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XG4gIHZhciBhdHRyaWJ1dGUgPSBcImRhdGEtY2xpcGJvYXJkLVwiLmNvbmNhdChzdWZmaXgpO1xuXG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIHdoaWNoIHRha2VzIG9uZSBvciBtb3JlIGVsZW1lbnRzLCBhZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGVtLFxuICogYW5kIGluc3RhbnRpYXRlcyBhIG5ldyBgQ2xpcGJvYXJkQWN0aW9uYCBvbiBlYWNoIGNsaWNrLlxuICovXG5cblxudmFyIENsaXBib2FyZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKENsaXBib2FyZCwgX0VtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ2xpcGJvYXJkKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgX3RoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogXCJyZXNvbHZlT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XG4gICAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBvcHRpb25zLnRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGFyZ2V0IDogdGhpcy5kZWZhdWx0VGFyZ2V0O1xuICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNsaXBib2FyZF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwYXNzZWQgdHJpZ2dlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuQ2xpY2sodHJpZ2dlcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5fZGVmYXVsdCgpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgbmV3IGBDbGlwYm9hcmRBY3Rpb25gIG9uIGVhY2ggY2xpY2sgZXZlbnQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb24odHJpZ2dlcikgfHwgJ2NvcHknO1xuICAgICAgdmFyIHRleHQgPSBhY3Rpb25zX2RlZmF1bHQoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCh0cmlnZ2VyKSxcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpXG4gICAgICB9KTsgLy8gRmlyZXMgYW4gZXZlbnQgYmFzZWQgb24gdGhlIGNvcHkgb3BlcmF0aW9uIHJlc3VsdC5cblxuICAgICAgdGhpcy5lbWl0KHRleHQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGBhY3Rpb25gIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRBY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGB0YXJnZXRgIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRUYXJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRhcmdldCh0cmlnZ2VyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbG93IGZpcmUgcHJvZ3JhbW1hdGljYWxseSBhIGNvcHkgYWN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMgVGV4dCBjb3BpZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0VGV4dFwiLFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBgdGV4dGAgbG9va3VwIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGV4dCh0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjb3B5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHkodGFyZ2V0KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHlcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWN0aW9uc19jb3B5KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbG93IGZpcmUgcHJvZ3JhbW1hdGljYWxseSBhIGN1dCBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHJldHVybnMgVGV4dCBjdXR0ZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3V0KHRhcmdldCkge1xuICAgICAgcmV0dXJuIGFjdGlvbnNfY3V0KHRhcmdldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1cHBvcnQgb2YgdGhlIGdpdmVuIGFjdGlvbiwgb3IgYWxsIGFjdGlvbnMgaWYgbm8gYWN0aW9uIGlzXG4gICAgICogZ2l2ZW4uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFthY3Rpb25dXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcbiAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG4gICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBzdXBwb3J0ID0gc3VwcG9ydCAmJiAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3VwcG9ydDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2xpcGJvYXJkO1xufSgodGlueV9lbWl0dGVyX2RlZmF1bHQoKSkpO1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjbGlwYm9hcmQgPSAoQ2xpcGJvYXJkKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDgyODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA0Mzg6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsb3Nlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgyOCk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gODc5OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMzcwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oODc5KTtcbnZhciBkZWxlZ2F0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDM4KTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHBhcmFtcyBhbmQgY2FsbHMgdGhlIHJpZ2h0XG4gKiBsaXN0ZW5lciBmdW5jdGlvbiBiYXNlZCBvbiBpdHMgdGFyZ2V0IHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0YXJnZXQgJiYgIXR5cGUgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLnN0cmluZyh0eXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICghaXMuZm4oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChpcy5ub2RlKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGUodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLm5vZGVMaXN0KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGVMaXN0KHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5zdHJpbmcodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuU2VsZWN0b3IodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBIVE1MIGVsZW1lbnRcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlKG5vZGUsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBsaXN0IG9mIEhUTUwgZWxlbWVudHNcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IG5vZGVMaXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZUxpc3Qobm9kZUxpc3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIHNlbGVjdG9yXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5TZWxlY3RvcihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0ZW47XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDgxNzpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMjc5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5mdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbm1vZHVsZS5leHBvcnRzLlRpbnlFbWl0dGVyID0gRTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyg2ODYpO1xuLyoqKioqKi8gfSkoKVxuLmRlZmF1bHQ7XG59KTsiLCAiLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3NjaGVkdWxlci5qc1xudmFyIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG5mdW5jdGlvbiBzY2hlZHVsZXIoY2FsbGJhY2spIHtcbiAgcXVldWVKb2IoY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gcXVldWVKb2Ioam9iKSB7XG4gIGlmICghcXVldWUuaW5jbHVkZXMoam9iKSlcbiAgICBxdWV1ZS5wdXNoKGpvYik7XG4gIHF1ZXVlRmx1c2goKTtcbn1cbmZ1bmN0aW9uIGRlcXVldWVKb2Ioam9iKSB7XG4gIGxldCBpbmRleCA9IHF1ZXVlLmluZGV4T2Yoam9iKTtcbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCA+IGxhc3RGbHVzaGVkSW5kZXgpXG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghZmx1c2hpbmcgJiYgIWZsdXNoUGVuZGluZykge1xuICAgIGZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgcXVldWVNaWNyb3Rhc2soZmx1c2hKb2JzKTtcbiAgfVxufVxuZnVuY3Rpb24gZmx1c2hKb2JzKCkge1xuICBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKTtcbiAgICBsYXN0Rmx1c2hlZEluZGV4ID0gaTtcbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xuICBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG4gIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9yZWFjdGl2aXR5LmpzXG52YXIgcmVhY3RpdmU7XG52YXIgZWZmZWN0O1xudmFyIHJlbGVhc2U7XG52YXIgcmF3O1xudmFyIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVFZmZlY3RTY2hlZHVsaW5nKGNhbGxiYWNrKSB7XG4gIHNob3VsZFNjaGVkdWxlID0gZmFsc2U7XG4gIGNhbGxiYWNrKCk7XG4gIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNldFJlYWN0aXZpdHlFbmdpbmUoZW5naW5lKSB7XG4gIHJlYWN0aXZlID0gZW5naW5lLnJlYWN0aXZlO1xuICByZWxlYXNlID0gZW5naW5lLnJlbGVhc2U7XG4gIGVmZmVjdCA9IChjYWxsYmFjaykgPT4gZW5naW5lLmVmZmVjdChjYWxsYmFjaywgeyBzY2hlZHVsZXI6ICh0YXNrKSA9PiB7XG4gICAgaWYgKHNob3VsZFNjaGVkdWxlKSB7XG4gICAgICBzY2hlZHVsZXIodGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2soKTtcbiAgICB9XG4gIH0gfSk7XG4gIHJhdyA9IGVuZ2luZS5yYXc7XG59XG5mdW5jdGlvbiBvdmVycmlkZUVmZmVjdChvdmVycmlkZSkge1xuICBlZmZlY3QgPSBvdmVycmlkZTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCb3VuZEVmZmVjdChlbCkge1xuICBsZXQgY2xlYW51cDIgPSAoKSA9PiB7XG4gIH07XG4gIGxldCB3cmFwcGVkRWZmZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdChjYWxsYmFjayk7XG4gICAgaWYgKCFlbC5feF9lZmZlY3RzKSB7XG4gICAgICBlbC5feF9lZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIGVsLl94X3J1bkVmZmVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGVsLl94X2VmZmVjdHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsLl94X2VmZmVjdHMuYWRkKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgY2xlYW51cDIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWZmZWN0UmVmZXJlbmNlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGVsLl94X2VmZmVjdHMuZGVsZXRlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgICByZWxlYXNlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWZmZWN0UmVmZXJlbmNlO1xuICB9O1xuICByZXR1cm4gW3dyYXBwZWRFZmZlY3QsICgpID0+IHtcbiAgICBjbGVhbnVwMigpO1xuICB9XTtcbn1cbmZ1bmN0aW9uIHdhdGNoKGdldHRlciwgY2FsbGJhY2spIHtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGxldCBvbGRWYWx1ZTtcbiAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0dGVyKCk7XG4gICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmICghZmlyc3RUaW1lKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4gcmVsZWFzZShlZmZlY3RSZWZlcmVuY2UpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbXV0YXRpb24uanNcbnZhciBvbkF0dHJpYnV0ZUFkZGVkcyA9IFtdO1xudmFyIG9uRWxSZW1vdmVkcyA9IFtdO1xudmFyIG9uRWxBZGRlZHMgPSBbXTtcbmZ1bmN0aW9uIG9uRWxBZGRlZChjYWxsYmFjaykge1xuICBvbkVsQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25FbFJlbW92ZWQoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmICghZWwuX3hfY2xlYW51cHMpXG4gICAgICBlbC5feF9jbGVhbnVwcyA9IFtdO1xuICAgIGVsLl94X2NsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrID0gZWw7XG4gICAgb25FbFJlbW92ZWRzLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5mdW5jdGlvbiBvbkF0dHJpYnV0ZXNBZGRlZChjYWxsYmFjaykge1xuICBvbkF0dHJpYnV0ZUFkZGVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcyA9IHt9O1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdID0gW107XG4gIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xlYW51cEF0dHJpYnV0ZXMoZWwsIG5hbWVzKSB7XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpXG4gICAgcmV0dXJuO1xuICBPYmplY3QuZW50cmllcyhlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGlmIChuYW1lcyA9PT0gdm9pZCAwIHx8IG5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgZGVsZXRlIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhbnVwRWxlbWVudChlbCkge1xuICBlbC5feF9lZmZlY3RzPy5mb3JFYWNoKGRlcXVldWVKb2IpO1xuICB3aGlsZSAoZWwuX3hfY2xlYW51cHM/Lmxlbmd0aClcbiAgICBlbC5feF9jbGVhbnVwcy5wb3AoKSgpO1xufVxudmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGUpO1xudmFyIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9KTtcbiAgY3VycmVudGx5T2JzZXJ2aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIGZsdXNoT2JzZXJ2ZXIoKTtcbiAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSBmYWxzZTtcbn1cbnZhciBxdWV1ZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGZsdXNoT2JzZXJ2ZXIoKSB7XG4gIGxldCByZWNvcmRzID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgcXVldWVkTXV0YXRpb25zLnB1c2goKCkgPT4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIG9uTXV0YXRlKHJlY29yZHMpKTtcbiAgbGV0IHF1ZXVlTGVuZ3RoV2hlblRyaWdnZXJlZCA9IHF1ZXVlZE11dGF0aW9ucy5sZW5ndGg7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpZiAocXVldWVkTXV0YXRpb25zLmxlbmd0aCA9PT0gcXVldWVMZW5ndGhXaGVuVHJpZ2dlcmVkKSB7XG4gICAgICB3aGlsZSAocXVldWVkTXV0YXRpb25zLmxlbmd0aCA+IDApXG4gICAgICAgIHF1ZXVlZE11dGF0aW9ucy5zaGlmdCgpKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIG11dGF0ZURvbShjYWxsYmFjaykge1xuICBpZiAoIWN1cnJlbnRseU9ic2VydmluZylcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucygpO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbnZhciBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xuZnVuY3Rpb24gZGVmZXJNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IGZhbHNlO1xuICBvbk11dGF0ZShkZWZlcnJlZE11dGF0aW9ucyk7XG4gIGRlZmVycmVkTXV0YXRpb25zID0gW107XG59XG5mdW5jdGlvbiBvbk11dGF0ZShtdXRhdGlvbnMpIHtcbiAgaWYgKGlzQ29sbGVjdGluZykge1xuICAgIGRlZmVycmVkTXV0YXRpb25zID0gZGVmZXJyZWRNdXRhdGlvbnMuY29uY2F0KG11dGF0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhZGRlZE5vZGVzID0gW107XG4gIGxldCByZW1vdmVkTm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBsZXQgYWRkZWRBdHRyaWJ1dGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IHJlbW92ZWRBdHRyaWJ1dGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobXV0YXRpb25zW2ldLnRhcmdldC5feF9pZ25vcmVNdXRhdGlvbk9ic2VydmVyKVxuICAgICAgY29udGludWU7XG4gICAgaWYgKG11dGF0aW9uc1tpXS50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICBtdXRhdGlvbnNbaV0ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIW5vZGUuX3hfbWFya2VyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVtb3ZlZE5vZGVzLmFkZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgcmVtb3ZlZE5vZGVzLmRlbGV0ZShub2RlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuX3hfbWFya2VyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYWRkZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgIGxldCBlbCA9IG11dGF0aW9uc1tpXS50YXJnZXQ7XG4gICAgICBsZXQgbmFtZSA9IG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb25zW2ldLm9sZFZhbHVlO1xuICAgICAgbGV0IGFkZDIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHsgbmFtZSwgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZShuYW1lKSB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZDIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBhZGQyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwsIGF0dHJzKTtcbiAgfSk7XG4gIGFkZGVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBvbkF0dHJpYnV0ZUFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKGVsLCBhdHRycykpO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiByZW1vdmVkTm9kZXMpIHtcbiAgICBpZiAoYWRkZWROb2Rlcy5zb21lKChpKSA9PiBpLmNvbnRhaW5zKG5vZGUpKSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIG9uRWxSZW1vdmVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgfVxuICBmb3IgKGxldCBub2RlIG9mIGFkZGVkTm9kZXMpIHtcbiAgICBpZiAoIW5vZGUuaXNDb25uZWN0ZWQpXG4gICAgICBjb250aW51ZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICB9XG4gIGFkZGVkTm9kZXMgPSBudWxsO1xuICByZW1vdmVkTm9kZXMgPSBudWxsO1xuICBhZGRlZEF0dHJpYnV0ZXMgPSBudWxsO1xuICByZW1vdmVkQXR0cmlidXRlcyA9IG51bGw7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zY29wZS5qc1xuZnVuY3Rpb24gc2NvcGUobm9kZSkge1xuICByZXR1cm4gbWVyZ2VQcm94aWVzKGNsb3Nlc3REYXRhU3RhY2sobm9kZSkpO1xufVxuZnVuY3Rpb24gYWRkU2NvcGVUb05vZGUobm9kZSwgZGF0YTIsIHJlZmVyZW5jZU5vZGUpIHtcbiAgbm9kZS5feF9kYXRhU3RhY2sgPSBbZGF0YTIsIC4uLmNsb3Nlc3REYXRhU3RhY2socmVmZXJlbmNlTm9kZSB8fCBub2RlKV07XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbm9kZS5feF9kYXRhU3RhY2sgPSBub2RlLl94X2RhdGFTdGFjay5maWx0ZXIoKGkpID0+IGkgIT09IGRhdGEyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3REYXRhU3RhY2sobm9kZSkge1xuICBpZiAobm9kZS5feF9kYXRhU3RhY2spXG4gICAgcmV0dXJuIG5vZGUuX3hfZGF0YVN0YWNrO1xuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIiAmJiBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUuaG9zdCk7XG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5wYXJlbnROb2RlKTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJveGllcyhvYmplY3RzKSB7XG4gIHJldHVybiBuZXcgUHJveHkoeyBvYmplY3RzIH0sIG1lcmdlUHJveHlUcmFwKTtcbn1cbnZhciBtZXJnZVByb3h5VHJhcCA9IHtcbiAgb3duS2V5cyh7IG9iamVjdHMgfSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgbmV3IFNldChvYmplY3RzLmZsYXRNYXAoKGkpID0+IE9iamVjdC5rZXlzKGkpKSlcbiAgICApO1xuICB9LFxuICBoYXMoeyBvYmplY3RzIH0sIG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PSBTeW1ib2wudW5zY29wYWJsZXMpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIG9iamVjdHMuc29tZShcbiAgICAgIChvYmopID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpIHx8IFJlZmxlY3QuaGFzKG9iaiwgbmFtZSlcbiAgICApO1xuICB9LFxuICBnZXQoeyBvYmplY3RzIH0sIG5hbWUsIHRoaXNQcm94eSkge1xuICAgIGlmIChuYW1lID09IFwidG9KU09OXCIpXG4gICAgICByZXR1cm4gY29sbGFwc2VQcm94aWVzO1xuICAgIHJldHVybiBSZWZsZWN0LmdldChcbiAgICAgIG9iamVjdHMuZmluZChcbiAgICAgICAgKG9iaikgPT4gUmVmbGVjdC5oYXMob2JqLCBuYW1lKVxuICAgICAgKSB8fCB7fSxcbiAgICAgIG5hbWUsXG4gICAgICB0aGlzUHJveHlcbiAgICApO1xuICB9LFxuICBzZXQoeyBvYmplY3RzIH0sIG5hbWUsIHZhbHVlLCB0aGlzUHJveHkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBvYmplY3RzLmZpbmQoXG4gICAgICAob2JqKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKVxuICAgICkgfHwgb2JqZWN0c1tvYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XG4gICAgaWYgKGRlc2NyaXB0b3I/LnNldCAmJiBkZXNjcmlwdG9yPy5nZXQpXG4gICAgICByZXR1cm4gZGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzUHJveHksIHZhbHVlKSB8fCB0cnVlO1xuICAgIHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNvbGxhcHNlUHJveGllcygpIHtcbiAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXModGhpcyk7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IFJlZmxlY3QuZ2V0KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW50ZXJjZXB0b3IuanNcbmZ1bmN0aW9uIGluaXRJbnRlcmNlcHRvcnMoZGF0YTIpIHtcbiAgbGV0IGlzT2JqZWN0MiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwgIT09IG51bGw7XG4gIGxldCByZWN1cnNlID0gKG9iaiwgYmFzZVBhdGggPSBcIlwiKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSkuZm9yRWFjaCgoW2tleSwgeyB2YWx1ZSwgZW51bWVyYWJsZSB9XSkgPT4ge1xuICAgICAgaWYgKGVudW1lcmFibGUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX192X3NraXApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBwYXRoID0gYmFzZVBhdGggPT09IFwiXCIgPyBrZXkgOiBgJHtiYXNlUGF0aH0uJHtrZXl9YDtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0Mih2YWx1ZSkgJiYgdmFsdWUgIT09IG9iaiAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICByZWN1cnNlKHZhbHVlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gcmVjdXJzZShkYXRhMik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRvcihjYWxsYmFjaywgbXV0YXRlT2JqID0gKCkgPT4ge1xufSkge1xuICBsZXQgb2JqID0ge1xuICAgIGluaXRpYWxWYWx1ZTogdm9pZCAwLFxuICAgIF94X2ludGVyY2VwdG9yOiB0cnVlLFxuICAgIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuaW5pdGlhbFZhbHVlLCAoKSA9PiBnZXQoZGF0YTIsIHBhdGgpLCAodmFsdWUpID0+IHNldChkYXRhMiwgcGF0aCwgdmFsdWUpLCBwYXRoLCBrZXkpO1xuICAgIH1cbiAgfTtcbiAgbXV0YXRlT2JqKG9iaik7XG4gIHJldHVybiAoaW5pdGlhbFZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaW5pdGlhbFZhbHVlICE9PSBudWxsICYmIGluaXRpYWxWYWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgbGV0IGluaXRpYWxpemUgPSBvYmouaW5pdGlhbGl6ZS5iaW5kKG9iaik7XG4gICAgICBvYmouaW5pdGlhbGl6ZSA9IChkYXRhMiwgcGF0aCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBpbm5lclZhbHVlID0gaW5pdGlhbFZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbm5lclZhbHVlO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG59XG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGNhcnJ5LCBzZWdtZW50KSA9PiBjYXJyeVtzZWdtZW50XSwgb2JqKTtcbn1cbmZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIilcbiAgICBwYXRoID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSlcbiAgICBvYmpbcGF0aFswXV0gPSB2YWx1ZTtcbiAgZWxzZSBpZiAocGF0aC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgZXJyb3I7XG4gIGVsc2Uge1xuICAgIGlmIChvYmpbcGF0aFswXV0pXG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIGVsc2Uge1xuICAgICAgb2JqW3BhdGhbMF1dID0ge307XG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLmpzXG52YXIgbWFnaWNzID0ge307XG5mdW5jdGlvbiBtYWdpYyhuYW1lLCBjYWxsYmFjaykge1xuICBtYWdpY3NbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdE1hZ2ljcyhvYmosIGVsKSB7XG4gIGxldCBtZW1vaXplZFV0aWxpdGllcyA9IGdldFV0aWxpdGllcyhlbCk7XG4gIE9iamVjdC5lbnRyaWVzKG1hZ2ljcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGAkJHtuYW1lfWAsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVsLCBtZW1vaXplZFV0aWxpdGllcyk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBnZXRVdGlsaXRpZXMoZWwpIHtcbiAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gIGxldCB1dGlscyA9IHsgaW50ZXJjZXB0b3IsIC4uLnV0aWxpdGllcyB9O1xuICBvbkVsUmVtb3ZlZChlbCwgY2xlYW51cDIpO1xuICByZXR1cm4gdXRpbHM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9lcnJvci5qc1xuZnVuY3Rpb24gdHJ5Q2F0Y2goZWwsIGV4cHJlc3Npb24sIGNhbGxiYWNrLCAuLi5hcmdzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgZWwsIGV4cHJlc3Npb24pO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uID0gdm9pZCAwKSB7XG4gIGVycm9yMiA9IE9iamVjdC5hc3NpZ24oXG4gICAgZXJyb3IyID8/IHsgbWVzc2FnZTogXCJObyBlcnJvciBtZXNzYWdlIGdpdmVuLlwiIH0sXG4gICAgeyBlbCwgZXhwcmVzc2lvbiB9XG4gICk7XG4gIGNvbnNvbGUud2FybihgQWxwaW5lIEV4cHJlc3Npb24gRXJyb3I6ICR7ZXJyb3IyLm1lc3NhZ2V9XG5cbiR7ZXhwcmVzc2lvbiA/ICdFeHByZXNzaW9uOiBcIicgKyBleHByZXNzaW9uICsgJ1wiXFxuXFxuJyA6IFwiXCJ9YCwgZWwpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aHJvdyBlcnJvcjI7XG4gIH0sIDApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZXZhbHVhdG9yLmpzXG52YXIgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gdHJ1ZTtcbmZ1bmN0aW9uIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoY2FsbGJhY2spIHtcbiAgbGV0IGNhY2hlID0gc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zO1xuICBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSBmYWxzZTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IGNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIGV4dHJhcyA9IHt9KSB7XG4gIGxldCByZXN1bHQ7XG4gIGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUsIGV4dHJhcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBldmFsdWF0ZUxhdGVyKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIHRoZUV2YWx1YXRvckZ1bmN0aW9uKC4uLmFyZ3MpO1xufVxudmFyIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbm9ybWFsRXZhbHVhdG9yO1xuZnVuY3Rpb24gc2V0RXZhbHVhdG9yKG5ld0V2YWx1YXRvcikge1xuICB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5ld0V2YWx1YXRvcjtcbn1cbmZ1bmN0aW9uIG5vcm1hbEV2YWx1YXRvcihlbCwgZXhwcmVzc2lvbikge1xuICBsZXQgb3ZlcnJpZGRlbk1hZ2ljcyA9IHt9O1xuICBpbmplY3RNYWdpY3Mob3ZlcnJpZGRlbk1hZ2ljcywgZWwpO1xuICBsZXQgZGF0YVN0YWNrID0gW292ZXJyaWRkZW5NYWdpY3MsIC4uLmNsb3Nlc3REYXRhU3RhY2soZWwpXTtcbiAgbGV0IGV2YWx1YXRvciA9IHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgPyBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGV4cHJlc3Npb24pIDogZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nKGRhdGFTdGFjaywgZXhwcmVzc2lvbiwgZWwpO1xuICByZXR1cm4gdHJ5Q2F0Y2guYmluZChudWxsLCBlbCwgZXhwcmVzc2lvbiwgZXZhbHVhdG9yKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZnVuYykge1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7IHNjb3BlOiBzY29wZTIgPSB7fSwgcGFyYW1zID0gW10gfSA9IHt9KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGZ1bmMuYXBwbHkobWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pLCBwYXJhbXMpO1xuICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCk7XG4gIH07XG59XG52YXIgZXZhbHVhdG9yTWVtbyA9IHt9O1xuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbiwgZWwpIHtcbiAgaWYgKGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0pIHtcbiAgICByZXR1cm4gZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXTtcbiAgfVxuICBsZXQgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpIHtcbiAgfSkuY29uc3RydWN0b3I7XG4gIGxldCByaWdodFNpZGVTYWZlRXhwcmVzc2lvbiA9IC9eW1xcblxcc10qaWYuKlxcKC4qXFwpLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSB8fCAvXihsZXR8Y29uc3QpXFxzLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSA/IGAoYXN5bmMoKT0+eyAke2V4cHJlc3Npb259IH0pKClgIDogZXhwcmVzc2lvbjtcbiAgY29uc3Qgc2FmZUFzeW5jRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmdW5jMiA9IG5ldyBBc3luY0Z1bmN0aW9uKFxuICAgICAgICBbXCJfX3NlbGZcIiwgXCJzY29wZVwiXSxcbiAgICAgICAgYHdpdGggKHNjb3BlKSB7IF9fc2VsZi5yZXN1bHQgPSAke3JpZ2h0U2lkZVNhZmVFeHByZXNzaW9ufSB9OyBfX3NlbGYuZmluaXNoZWQgPSB0cnVlOyByZXR1cm4gX19zZWxmLnJlc3VsdDtgXG4gICAgICApO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmMyLCBcIm5hbWVcIiwge1xuICAgICAgICB2YWx1ZTogYFtBbHBpbmVdICR7ZXhwcmVzc2lvbn1gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jMjtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGZ1bmMgPSBzYWZlQXN5bmNGdW5jdGlvbigpO1xuICBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dID0gZnVuYztcbiAgcmV0dXJuIGZ1bmM7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uLCBlbCkge1xuICBsZXQgZnVuYyA9IGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24sIGVsKTtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgIGZ1bmMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgY29tcGxldGVTY29wZSA9IG1lcmdlUHJveGllcyhbc2NvcGUyLCAuLi5kYXRhU3RhY2tdKTtcbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHByb21pc2UgPSBmdW5jKGZ1bmMsIGNvbXBsZXRlU2NvcGUpLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmIChmdW5jLmZpbmlzaGVkKSB7XG4gICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGZ1bmMucmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMsIGVsKTtcbiAgICAgICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zLCBlbCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKS5maW5hbGx5KCgpID0+IGZ1bmMucmVzdWx0ID0gdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCB2YWx1ZSwgc2NvcGUyLCBwYXJhbXMsIGVsKSB7XG4gIGlmIChzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgJiYgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWUuYXBwbHkoc2NvcGUyLCBwYXJhbXMpO1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXN1bHQudGhlbigoaSkgPT4gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgaSwgc2NvcGUyLCBwYXJhbXMpKS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlaXZlcihyZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgdmFsdWUudGhlbigoaSkgPT4gcmVjZWl2ZXIoaSkpO1xuICB9IGVsc2Uge1xuICAgIHJlY2VpdmVyKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy5qc1xudmFyIHByZWZpeEFzU3RyaW5nID0gXCJ4LVwiO1xuZnVuY3Rpb24gcHJlZml4KHN1YmplY3QgPSBcIlwiKSB7XG4gIHJldHVybiBwcmVmaXhBc1N0cmluZyArIHN1YmplY3Q7XG59XG5mdW5jdGlvbiBzZXRQcmVmaXgobmV3UHJlZml4KSB7XG4gIHByZWZpeEFzU3RyaW5nID0gbmV3UHJlZml4O1xufVxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge307XG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY2FsbGJhY2spIHtcbiAgZGlyZWN0aXZlSGFuZGxlcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgcmV0dXJuIHtcbiAgICBiZWZvcmUoZGlyZWN0aXZlMikge1xuICAgICAgaWYgKCFkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyXSkge1xuICAgICAgICBjb25zb2xlLndhcm4oU3RyaW5nLnJhd2BDYW5ub3QgZmluZCBkaXJlY3RpdmUgXFxgJHtkaXJlY3RpdmUyfVxcYC4gXFxgJHtuYW1lfVxcYCB3aWxsIHVzZSB0aGUgZGVmYXVsdCBvcmRlciBvZiBleGVjdXRpb25gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihkaXJlY3RpdmUyKTtcbiAgICAgIGRpcmVjdGl2ZU9yZGVyLnNwbGljZShwb3MgPj0gMCA/IHBvcyA6IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoXCJERUZBVUxUXCIpLCAwLCBuYW1lKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkaXJlY3RpdmVFeGlzdHMobmFtZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGlyZWN0aXZlSGFuZGxlcnMpLmluY2x1ZGVzKG5hbWUpO1xufVxuZnVuY3Rpb24gZGlyZWN0aXZlcyhlbCwgYXR0cmlidXRlcywgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkge1xuICBhdHRyaWJ1dGVzID0gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKTtcbiAgaWYgKGVsLl94X3ZpcnR1YWxEaXJlY3RpdmVzKSB7XG4gICAgbGV0IHZBdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMoZWwuX3hfdmlydHVhbERpcmVjdGl2ZXMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICAgIGxldCBzdGF0aWNBdHRyaWJ1dGVzID0gYXR0cmlidXRlc09ubHkodkF0dHJpYnV0ZXMpO1xuICAgIHZBdHRyaWJ1dGVzID0gdkF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGlmIChzdGF0aWNBdHRyaWJ1dGVzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgICAgdmFsdWU6IGBcIiR7YXR0cmlidXRlLnZhbHVlfVwiYFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgICB9KTtcbiAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5jb25jYXQodkF0dHJpYnV0ZXMpO1xuICB9XG4gIGxldCB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCA9IHt9O1xuICBsZXQgZGlyZWN0aXZlczIgPSBhdHRyaWJ1dGVzLm1hcCh0b1RyYW5zZm9ybWVkQXR0cmlidXRlcygobmV3TmFtZSwgb2xkTmFtZSkgPT4gdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmV3TmFtZV0gPSBvbGROYW1lKSkuZmlsdGVyKG91dE5vbkFscGluZUF0dHJpYnV0ZXMpLm1hcCh0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpKS5zb3J0KGJ5UHJpb3JpdHkpO1xuICByZXR1cm4gZGlyZWN0aXZlczIubWFwKChkaXJlY3RpdmUyKSA9PiB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNPbmx5KGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oYXR0cmlidXRlcykubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKCkpLmZpbHRlcigoYXR0cikgPT4gIW91dE5vbkFscGluZUF0dHJpYnV0ZXMoYXR0cikpO1xufVxudmFyIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbnZhciBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBjdXJyZW50SGFuZGxlclN0YWNrS2V5ID0gU3ltYm9sKCk7XG5mdW5jdGlvbiBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcyhjYWxsYmFjaykge1xuICBpc0RlZmVycmluZ0hhbmRsZXJzID0gdHJ1ZTtcbiAgbGV0IGtleSA9IFN5bWJvbCgpO1xuICBjdXJyZW50SGFuZGxlclN0YWNrS2V5ID0ga2V5O1xuICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLnNldChrZXksIFtdKTtcbiAgbGV0IGZsdXNoSGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGtleSkubGVuZ3RoKVxuICAgICAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5zaGlmdCgpKCk7XG4gICAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5kZWxldGUoa2V5KTtcbiAgfTtcbiAgbGV0IHN0b3BEZWZlcnJpbmcgPSAoKSA9PiB7XG4gICAgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xuICAgIGZsdXNoSGFuZGxlcnMoKTtcbiAgfTtcbiAgY2FsbGJhY2soZmx1c2hIYW5kbGVycyk7XG4gIHN0b3BEZWZlcnJpbmcoKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCkge1xuICBsZXQgY2xlYW51cHMgPSBbXTtcbiAgbGV0IGNsZWFudXAyID0gKGNhbGxiYWNrKSA9PiBjbGVhbnVwcy5wdXNoKGNhbGxiYWNrKTtcbiAgbGV0IFtlZmZlY3QzLCBjbGVhbnVwRWZmZWN0XSA9IGVsZW1lbnRCb3VuZEVmZmVjdChlbCk7XG4gIGNsZWFudXBzLnB1c2goY2xlYW51cEVmZmVjdCk7XG4gIGxldCB1dGlsaXRpZXMgPSB7XG4gICAgQWxwaW5lOiBhbHBpbmVfZGVmYXVsdCxcbiAgICBlZmZlY3Q6IGVmZmVjdDMsXG4gICAgY2xlYW51cDogY2xlYW51cDIsXG4gICAgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlci5iaW5kKGV2YWx1YXRlTGF0ZXIsIGVsKSxcbiAgICBldmFsdWF0ZTogZXZhbHVhdGUuYmluZChldmFsdWF0ZSwgZWwpXG4gIH07XG4gIGxldCBkb0NsZWFudXAgPSAoKSA9PiBjbGVhbnVwcy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICByZXR1cm4gW3V0aWxpdGllcywgZG9DbGVhbnVwXTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpIHtcbiAgbGV0IG5vb3AgPSAoKSA9PiB7XG4gIH07XG4gIGxldCBoYW5kbGVyNCA9IGRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZTIudHlwZV0gfHwgbm9vcDtcbiAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgZGlyZWN0aXZlMi5vcmlnaW5hbCwgY2xlYW51cDIpO1xuICBsZXQgZnVsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2lnbm9yZSB8fCBlbC5feF9pZ25vcmVTZWxmKVxuICAgICAgcmV0dXJuO1xuICAgIGhhbmRsZXI0LmlubGluZSAmJiBoYW5kbGVyNC5pbmxpbmUoZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaGFuZGxlcjQgPSBoYW5kbGVyNC5iaW5kKGhhbmRsZXI0LCBlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID8gZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoY3VycmVudEhhbmRsZXJTdGFja0tleSkucHVzaChoYW5kbGVyNCkgOiBoYW5kbGVyNCgpO1xuICB9O1xuICBmdWxsSGFuZGxlci5ydW5DbGVhbnVwcyA9IGNsZWFudXAyO1xuICByZXR1cm4gZnVsbEhhbmRsZXI7XG59XG52YXIgc3RhcnRpbmdXaXRoID0gKHN1YmplY3QsIHJlcGxhY2VtZW50KSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoc3ViamVjdCkpXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShzdWJqZWN0LCByZXBsYWNlbWVudCk7XG4gIHJldHVybiB7IG5hbWUsIHZhbHVlIH07XG59O1xudmFyIGludG8gPSAoaSkgPT4gaTtcbmZ1bmN0aW9uIHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGxldCB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9ID0gYXR0cmlidXRlVHJhbnNmb3JtZXJzLnJlZHVjZSgoY2FycnksIHRyYW5zZm9ybSkgPT4ge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShjYXJyeSk7XG4gICAgfSwgeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICBpZiAobmV3TmFtZSAhPT0gbmFtZSlcbiAgICAgIGNhbGxiYWNrKG5ld05hbWUsIG5hbWUpO1xuICAgIHJldHVybiB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9O1xuICB9O1xufVxudmFyIGF0dHJpYnV0ZVRyYW5zZm9ybWVycyA9IFtdO1xuZnVuY3Rpb24gbWFwQXR0cmlidXRlcyhjYWxsYmFjaykge1xuICBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvdXROb25BbHBpbmVBdHRyaWJ1dGVzKHsgbmFtZSB9KSB7XG4gIHJldHVybiBhbHBpbmVBdHRyaWJ1dGVSZWdleCgpLnRlc3QobmFtZSk7XG59XG52YXIgYWxwaW5lQXR0cmlidXRlUmVnZXggPSAoKSA9PiBuZXcgUmVnRXhwKGBeJHtwcmVmaXhBc1N0cmluZ30oW146Xi5dKylcXFxcYmApO1xuZnVuY3Rpb24gdG9QYXJzZWREaXJlY3RpdmVzKHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIHJldHVybiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHR5cGVNYXRjaCA9IG5hbWUubWF0Y2goYWxwaW5lQXR0cmlidXRlUmVnZXgoKSk7XG4gICAgbGV0IHZhbHVlTWF0Y2ggPSBuYW1lLm1hdGNoKC86KFthLXpBLVowLTlcXC1fOl0rKS8pO1xuICAgIGxldCBtb2RpZmllcnMgPSBuYW1lLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXTtcbiAgICBsZXQgb3JpZ2luYWwgPSBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlIHx8IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25hbWVdIHx8IG5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGVNYXRjaCA/IHR5cGVNYXRjaFsxXSA6IG51bGwsXG4gICAgICB2YWx1ZTogdmFsdWVNYXRjaCA/IHZhbHVlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMubWFwKChpKSA9PiBpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSxcbiAgICAgIGV4cHJlc3Npb246IHZhbHVlLFxuICAgICAgb3JpZ2luYWxcbiAgICB9O1xuICB9O1xufVxudmFyIERFRkFVTFQgPSBcIkRFRkFVTFRcIjtcbnZhciBkaXJlY3RpdmVPcmRlciA9IFtcbiAgXCJpZ25vcmVcIixcbiAgXCJyZWZcIixcbiAgXCJkYXRhXCIsXG4gIFwiaWRcIixcbiAgXCJhbmNob3JcIixcbiAgXCJiaW5kXCIsXG4gIFwiaW5pdFwiLFxuICBcImZvclwiLFxuICBcIm1vZGVsXCIsXG4gIFwibW9kZWxhYmxlXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcInNob3dcIixcbiAgXCJpZlwiLFxuICBERUZBVUxULFxuICBcInRlbGVwb3J0XCJcbl07XG5mdW5jdGlvbiBieVByaW9yaXR5KGEsIGIpIHtcbiAgbGV0IHR5cGVBID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihhLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBhLnR5cGU7XG4gIGxldCB0eXBlQiA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYi50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYi50eXBlO1xuICByZXR1cm4gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQSkgLSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVCKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2Rpc3BhdGNoLmpzXG5mdW5jdGlvbiBkaXNwYXRjaChlbCwgbmFtZSwgZGV0YWlsID0ge30pIHtcbiAgZWwuZGlzcGF0Y2hFdmVudChcbiAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIC8vIEFsbG93cyBldmVudHMgdG8gcGFzcyB0aGUgc2hhZG93IERPTSBiYXJyaWVyLlxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSlcbiAgKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhbGsuanNcbmZ1bmN0aW9uIHdhbGsoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIGVsIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZvckVhY2goKGVsMikgPT4gd2FsayhlbDIsIGNhbGxiYWNrKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBza2lwID0gZmFsc2U7XG4gIGNhbGxiYWNrKGVsLCAoKSA9PiBza2lwID0gdHJ1ZSk7XG4gIGlmIChza2lwKVxuICAgIHJldHVybjtcbiAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICB3YWxrKG5vZGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy93YXJuLmpzXG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgV2FybmluZzogJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbGlmZWN5Y2xlLmpzXG52YXIgc3RhcnRlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmIChzdGFydGVkKVxuICAgIHdhcm4oXCJBbHBpbmUgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBvbiB0aGlzIHBhZ2UuIENhbGxpbmcgQWxwaW5lLnN0YXJ0KCkgbW9yZSB0aGFuIG9uY2UgY2FuIGNhdXNlIHByb2JsZW1zLlwiKTtcbiAgc3RhcnRlZCA9IHRydWU7XG4gIGlmICghZG9jdW1lbnQuYm9keSlcbiAgICB3YXJuKFwiVW5hYmxlIHRvIGluaXRpYWxpemUuIFRyeWluZyB0byBsb2FkIEFscGluZSBiZWZvcmUgYDxib2R5PmAgaXMgYXZhaWxhYmxlLiBEaWQgeW91IGZvcmdldCB0byBhZGQgYGRlZmVyYCBpbiBBbHBpbmUncyBgPHNjcmlwdD5gIHRhZz9cIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0XCIpO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6aW5nXCIpO1xuICBzdGFydE9ic2VydmluZ011dGF0aW9ucygpO1xuICBvbkVsQWRkZWQoKGVsKSA9PiBpbml0VHJlZShlbCwgd2FsaykpO1xuICBvbkVsUmVtb3ZlZCgoZWwpID0+IGRlc3Ryb3lUcmVlKGVsKSk7XG4gIG9uQXR0cmlidXRlc0FkZGVkKChlbCwgYXR0cnMpID0+IHtcbiAgICBkaXJlY3RpdmVzKGVsLCBhdHRycykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gIH0pO1xuICBsZXQgb3V0TmVzdGVkQ29tcG9uZW50cyA9IChlbCkgPT4gIWNsb3Nlc3RSb290KGVsLnBhcmVudEVsZW1lbnQsIHRydWUpO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWxsU2VsZWN0b3JzKCkuam9pbihcIixcIikpKS5maWx0ZXIob3V0TmVzdGVkQ29tcG9uZW50cykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpbml0VHJlZShlbCk7XG4gIH0pO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6ZWRcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdhcm5BYm91dE1pc3NpbmdQbHVnaW5zKCk7XG4gIH0pO1xufVxudmFyIHJvb3RTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xudmFyIGluaXRTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xuZnVuY3Rpb24gcm9vdFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFsbFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5jb25jYXQoaW5pdFNlbGVjdG9yQ2FsbGJhY2tzKS5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFkZFJvb3RTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gYWRkSW5pdFNlbGVjdG9yKHNlbGVjdG9yQ2FsbGJhY2spIHtcbiAgaW5pdFNlbGVjdG9yQ2FsbGJhY2tzLnB1c2goc2VsZWN0b3JDYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9zZXN0Um9vdChlbCwgaW5jbHVkZUluaXRTZWxlY3RvcnMgPSBmYWxzZSkge1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwsIChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gaW5jbHVkZUluaXRTZWxlY3RvcnMgPyBhbGxTZWxlY3RvcnMoKSA6IHJvb3RTZWxlY3RvcnMoKTtcbiAgICBpZiAoc2VsZWN0b3JzLnNvbWUoKHNlbGVjdG9yKSA9PiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0KGVsLCBjYWxsYmFjaykge1xuICBpZiAoIWVsKVxuICAgIHJldHVybjtcbiAgaWYgKGNhbGxiYWNrKGVsKSlcbiAgICByZXR1cm4gZWw7XG4gIGlmIChlbC5feF90ZWxlcG9ydEJhY2spXG4gICAgZWwgPSBlbC5feF90ZWxlcG9ydEJhY2s7XG4gIGlmICghZWwucGFyZW50RWxlbWVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbC5wYXJlbnRFbGVtZW50LCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpc1Jvb3QoZWwpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvcnMoKS5zb21lKChzZWxlY3RvcikgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxudmFyIGluaXRJbnRlcmNlcHRvcnMyID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRJbml0KGNhbGxiYWNrKSB7XG4gIGluaXRJbnRlcmNlcHRvcnMyLnB1c2goY2FsbGJhY2spO1xufVxudmFyIG1hcmtlckRpc3BlbnNlciA9IDE7XG5mdW5jdGlvbiBpbml0VHJlZShlbCwgd2Fsa2VyID0gd2FsaywgaW50ZXJjZXB0ID0gKCkgPT4ge1xufSkge1xuICBpZiAoZmluZENsb3Nlc3QoZWwsIChpKSA9PiBpLl94X2lnbm9yZSkpXG4gICAgcmV0dXJuO1xuICBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcygoKSA9PiB7XG4gICAgd2Fsa2VyKGVsLCAoZWwyLCBza2lwKSA9PiB7XG4gICAgICBpZiAoZWwyLl94X21hcmtlcilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaW50ZXJjZXB0KGVsMiwgc2tpcCk7XG4gICAgICBpbml0SW50ZXJjZXB0b3JzMi5mb3JFYWNoKChpKSA9PiBpKGVsMiwgc2tpcCkpO1xuICAgICAgZGlyZWN0aXZlcyhlbDIsIGVsMi5hdHRyaWJ1dGVzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgICAgIGlmICghZWwyLl94X2lnbm9yZSlcbiAgICAgICAgZWwyLl94X21hcmtlciA9IG1hcmtlckRpc3BlbnNlcisrO1xuICAgICAgZWwyLl94X2lnbm9yZSAmJiBza2lwKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVzdHJveVRyZWUocm9vdCwgd2Fsa2VyID0gd2Fsaykge1xuICB3YWxrZXIocm9vdCwgKGVsKSA9PiB7XG4gICAgY2xlYW51cEVsZW1lbnQoZWwpO1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsKTtcbiAgICBkZWxldGUgZWwuX3hfbWFya2VyO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHdhcm5BYm91dE1pc3NpbmdQbHVnaW5zKCkge1xuICBsZXQgcGx1Z2luRGlyZWN0aXZlcyA9IFtcbiAgICBbXCJ1aVwiLCBcImRpYWxvZ1wiLCBbXCJbeC1kaWFsb2ddLCBbeC1wb3BvdmVyXVwiXV0sXG4gICAgW1wiYW5jaG9yXCIsIFwiYW5jaG9yXCIsIFtcIlt4LWFuY2hvcl1cIl1dLFxuICAgIFtcInNvcnRcIiwgXCJzb3J0XCIsIFtcIlt4LXNvcnRdXCJdXVxuICBdO1xuICBwbHVnaW5EaXJlY3RpdmVzLmZvckVhY2goKFtwbHVnaW4yLCBkaXJlY3RpdmUyLCBzZWxlY3RvcnNdKSA9PiB7XG4gICAgaWYgKGRpcmVjdGl2ZUV4aXN0cyhkaXJlY3RpdmUyKSlcbiAgICAgIHJldHVybjtcbiAgICBzZWxlY3RvcnMuc29tZSgoc2VsZWN0b3IpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgICB3YXJuKGBmb3VuZCBcIiR7c2VsZWN0b3J9XCIsIGJ1dCBtaXNzaW5nICR7cGx1Z2luMn0gcGx1Z2luYCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL25leHRUaWNrLmpzXG52YXIgdGlja1N0YWNrID0gW107XG52YXIgaXNIb2xkaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzSG9sZGluZyB8fCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgdGlja1N0YWNrLnB1c2goKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJlcygpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbGVhc2VOZXh0VGlja3MoKSB7XG4gIGlzSG9sZGluZyA9IGZhbHNlO1xuICB3aGlsZSAodGlja1N0YWNrLmxlbmd0aClcbiAgICB0aWNrU3RhY2suc2hpZnQoKSgpO1xufVxuZnVuY3Rpb24gaG9sZE5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gdHJ1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2NsYXNzZXMuanNcbmZ1bmN0aW9uIHNldENsYXNzZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUuam9pbihcIiBcIikpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXMoZWwsIHZhbHVlKCkpO1xuICB9XG4gIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIGNsYXNzU3RyaW5nKSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgbWlzc2luZ0NsYXNzZXMgPSAoY2xhc3NTdHJpbmcyKSA9PiBjbGFzc1N0cmluZzIuc3BsaXQoXCIgXCIpLmZpbHRlcigoaSkgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8gPSAoY2xhc3NlcykgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XG4gICAgfTtcbiAgfTtcbiAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyA9PT0gdHJ1ZSA/IGNsYXNzU3RyaW5nID0gXCJcIiA6IGNsYXNzU3RyaW5nIHx8IFwiXCI7XG4gIHJldHVybiBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyhtaXNzaW5nQ2xhc3NlcyhjbGFzc1N0cmluZykpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21PYmplY3QoZWwsIGNsYXNzT2JqZWN0KSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZykgPT4gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvckFkZCA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiBib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvclJlbW92ZSA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiAhYm9vbCA/IHNwbGl0KGNsYXNzU3RyaW5nKSA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRlZCA9IFtdO1xuICBsZXQgcmVtb3ZlZCA9IFtdO1xuICBmb3JSZW1vdmUuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaSk7XG4gICAgICByZW1vdmVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgZm9yQWRkLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgIGFkZGVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5hZGQoaSkpO1xuICAgIGFkZGVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoaSkpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvc3R5bGVzLmpzXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWwsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2V0U3R5bGVzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSkge1xuICBsZXQgcHJldmlvdXNTdHlsZXMgPSB7fTtcbiAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlMl0pID0+IHtcbiAgICBwcmV2aW91c1N0eWxlc1trZXldID0gZWwuc3R5bGVba2V5XTtcbiAgICBpZiAoIWtleS5zdGFydHNXaXRoKFwiLS1cIikpIHtcbiAgICAgIGtleSA9IGtlYmFiQ2FzZShrZXkpO1xuICAgIH1cbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlMik7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHNldFN0eWxlcyhlbCwgcHJldmlvdXNTdHlsZXMpO1xuICB9O1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpIHtcbiAgbGV0IGNhY2hlID0gZWwuZ2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgY2FjaGUgfHwgXCJcIik7XG4gIH07XG59XG5mdW5jdGlvbiBrZWJhYkNhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9vbmNlLmpzXG5mdW5jdGlvbiBvbmNlKGNhbGxiYWNrLCBmYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10cmFuc2l0aW9uLmpzXG5kaXJlY3RpdmUoXCJ0cmFuc2l0aW9uXCIsIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgIGV4cHJlc3Npb24gPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIGlmIChleHByZXNzaW9uID09PSBmYWxzZSlcbiAgICByZXR1cm47XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgZXhwcmVzc2lvbiwgdmFsdWUpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tQ2xhc3NTdHJpbmcoZWwsIGNsYXNzU3RyaW5nLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldENsYXNzZXMsIFwiXCIpO1xuICBsZXQgZGlyZWN0aXZlU3RvcmFnZU1hcCA9IHtcbiAgICBcImVudGVyXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImVudGVyLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IGNsYXNzZXM7XG4gICAgfVxuICB9O1xuICBkaXJlY3RpdmVTdG9yYWdlTWFwW3N0YWdlXShjbGFzc1N0cmluZyk7XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldFN0eWxlcyk7XG4gIGxldCBkb2VzbnRTcGVjaWZ5ID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIXN0YWdlO1xuICBsZXQgdHJhbnNpdGlvbmluZ0luID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSB8fCBbXCJlbnRlclwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGxldCB0cmFuc2l0aW9uaW5nT3V0ID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgfHwgW1wibGVhdmVcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPCBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA+IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBsZXQgd2FudHNBbGwgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCB3YW50c09wYWNpdHkgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpO1xuICBsZXQgd2FudHNTY2FsZSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgb3BhY2l0eVZhbHVlID0gd2FudHNPcGFjaXR5ID8gMCA6IDE7XG4gIGxldCBzY2FsZVZhbHVlID0gd2FudHNTY2FsZSA/IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcInNjYWxlXCIsIDk1KSAvIDEwMCA6IDE7XG4gIGxldCBkZWxheSA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImRlbGF5XCIsIDApIC8gMWUzO1xuICBsZXQgb3JpZ2luID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwib3JpZ2luXCIsIFwiY2VudGVyXCIpO1xuICBsZXQgcHJvcGVydHkgPSBcIm9wYWNpdHksIHRyYW5zZm9ybVwiO1xuICBsZXQgZHVyYXRpb25JbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDE1MCkgLyAxZTM7XG4gIGxldCBkdXJhdGlvbk91dCA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDc1KSAvIDFlMztcbiAgbGV0IGVhc2luZyA9IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgO1xuICBpZiAodHJhbnNpdGlvbmluZ0luKSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7ZGVsYXl9c2AsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbklufXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gIH1cbiAgaWYgKHRyYW5zaXRpb25pbmdPdXQpIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uT3V0fXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0RnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSA9IHt9KSB7XG4gIGlmICghZWwuX3hfdHJhbnNpdGlvbilcbiAgICBlbC5feF90cmFuc2l0aW9uID0ge1xuICAgICAgZW50ZXI6IHsgZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlIH0sXG4gICAgICBsZWF2ZTogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge1xuICAgICAgICAgIGR1cmluZzogdGhpcy5lbnRlci5kdXJpbmcsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuZW50ZXIuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmVudGVyLmVuZFxuICAgICAgICB9LCBiZWZvcmUsIGFmdGVyKTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmxlYXZlLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5sZWF2ZS5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMubGVhdmUuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfVxuICAgIH07XG59XG53aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSkge1xuICBjb25zdCBuZXh0VGljazIgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0VGltZW91dDtcbiAgbGV0IGNsaWNrQXdheUNvbXBhdGlibGVTaG93ID0gKCkgPT4gbmV4dFRpY2syKHNob3cpO1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoZWwuX3hfdHJhbnNpdGlvbiAmJiAoZWwuX3hfdHJhbnNpdGlvbi5lbnRlciB8fCBlbC5feF90cmFuc2l0aW9uLmxlYXZlKSkge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlciAmJiAoT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0KS5sZW5ndGggfHwgT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQpLmxlbmd0aCkgPyBlbC5feF90cmFuc2l0aW9uLmluKHNob3cpIDogY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbiA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZWwuX3hfaGlkZVByb21pc2UgPSBlbC5feF90cmFuc2l0aW9uID8gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLl94X3RyYW5zaXRpb24ub3V0KCgpID0+IHtcbiAgICB9LCAoKSA9PiByZXNvbHZlKGhpZGUpKTtcbiAgICBlbC5feF90cmFuc2l0aW9uaW5nICYmIGVsLl94X3RyYW5zaXRpb25pbmcuYmVmb3JlQ2FuY2VsKCgpID0+IHJlamVjdCh7IGlzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb246IHRydWUgfSkpO1xuICB9KSA6IFByb21pc2UucmVzb2x2ZShoaWRlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGxldCBjbG9zZXN0ID0gY2xvc2VzdEhpZGUoZWwpO1xuICAgIGlmIChjbG9zZXN0KSB7XG4gICAgICBpZiAoIWNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuKVxuICAgICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbiA9IFtdO1xuICAgICAgY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4ucHVzaChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaWNrMigoKSA9PiB7XG4gICAgICAgIGxldCBoaWRlQWZ0ZXJDaGlsZHJlbiA9IChlbDIpID0+IHtcbiAgICAgICAgICBsZXQgY2FycnkgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbDIuX3hfaGlkZVByb21pc2UsXG4gICAgICAgICAgICAuLi4oZWwyLl94X2hpZGVDaGlsZHJlbiB8fCBbXSkubWFwKGhpZGVBZnRlckNoaWxkcmVuKVxuICAgICAgICAgIF0pLnRoZW4oKFtpXSkgPT4gaT8uKCkpO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZVByb21pc2U7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlQ2hpbGRyZW47XG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICB9O1xuICAgICAgICBoaWRlQWZ0ZXJDaGlsZHJlbihlbCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWUuaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbilcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5mdW5jdGlvbiBjbG9zZXN0SGlkZShlbCkge1xuICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgaWYgKCFwYXJlbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gcGFyZW50Ll94X2hpZGVQcm9taXNlID8gcGFyZW50IDogY2xvc2VzdEhpZGUocGFyZW50KTtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7IGR1cmluZywgc3RhcnQ6IHN0YXJ0MiwgZW5kIH0gPSB7fSwgYmVmb3JlID0gKCkgPT4ge1xufSwgYWZ0ZXIgPSAoKSA9PiB7XG59KSB7XG4gIGlmIChlbC5feF90cmFuc2l0aW9uaW5nKVxuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuY2FuY2VsKCk7XG4gIGlmIChPYmplY3Qua2V5cyhkdXJpbmcpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhzdGFydDIpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhlbmQpLmxlbmd0aCA9PT0gMCkge1xuICAgIGJlZm9yZSgpO1xuICAgIGFmdGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB1bmRvU3RhcnQsIHVuZG9EdXJpbmcsIHVuZG9FbmQ7XG4gIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICB1bmRvU3RhcnQgPSBzZXRGdW5jdGlvbihlbCwgc3RhcnQyKTtcbiAgICB9LFxuICAgIGR1cmluZygpIHtcbiAgICAgIHVuZG9EdXJpbmcgPSBzZXRGdW5jdGlvbihlbCwgZHVyaW5nKTtcbiAgICB9LFxuICAgIGJlZm9yZSxcbiAgICBlbmQoKSB7XG4gICAgICB1bmRvU3RhcnQoKTtcbiAgICAgIHVuZG9FbmQgPSBzZXRGdW5jdGlvbihlbCwgZW5kKTtcbiAgICB9LFxuICAgIGFmdGVyLFxuICAgIGNsZWFudXAoKSB7XG4gICAgICB1bmRvRHVyaW5nKCk7XG4gICAgICB1bmRvRW5kKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCBzdGFnZXMpIHtcbiAgbGV0IGludGVycnVwdGVkLCByZWFjaGVkQmVmb3JlLCByZWFjaGVkRW5kO1xuICBsZXQgZmluaXNoID0gb25jZSgoKSA9PiB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghcmVhY2hlZEJlZm9yZSlcbiAgICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgICAgaWYgKCFyZWFjaGVkRW5kKSB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgfVxuICAgICAgc3RhZ2VzLmFmdGVyKCk7XG4gICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpXG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICBkZWxldGUgZWwuX3hfdHJhbnNpdGlvbmluZztcbiAgICB9KTtcbiAgfSk7XG4gIGVsLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgYmVmb3JlQ2FuY2VsczogW10sXG4gICAgYmVmb3JlQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJlZm9yZUNhbmNlbHMucHVzaChjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjYW5jZWw6IG9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAodGhpcy5iZWZvcmVDYW5jZWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZm9yZUNhbmNlbHMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSksXG4gICAgZmluaXNoXG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgc3RhZ2VzLnN0YXJ0KCk7XG4gICAgc3RhZ2VzLmR1cmluZygpO1xuICB9KTtcbiAgaG9sZE5leHRUaWNrcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgIHJldHVybjtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBsZXQgZGVsYXkgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBpZiAoZHVyYXRpb24gPT09IDApXG4gICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICB9KTtcbiAgICByZWFjaGVkQmVmb3JlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIHNldFRpbWVvdXQoZWwuX3hfdHJhbnNpdGlvbmluZy5maW5pc2gsIGR1cmF0aW9uICsgZGVsYXkpO1xuICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJzY2FsZVwiKSB7XG4gICAgaWYgKGlzTmFOKHJhd1ZhbHVlKSlcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICBpZiAoa2V5ID09PSBcImR1cmF0aW9uXCIgfHwga2V5ID09PSBcImRlbGF5XCIpIHtcbiAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgIGlmIChtYXRjaClcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIm9yaWdpblwiKSB7XG4gICAgaWYgKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdKSkge1xuICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbihcIiBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2Nsb25lLmpzXG52YXIgaXNDbG9uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBza2lwRHVyaW5nQ2xvbmUoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyA/IGZhbGxiYWNrKC4uLmFyZ3MpIDogY2FsbGJhY2soLi4uYXJncyk7XG59XG5mdW5jdGlvbiBvbmx5RHVyaW5nQ2xvbmUoY2FsbGJhY2spIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgJiYgY2FsbGJhY2soLi4uYXJncyk7XG59XG52YXIgaW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRDbG9uZShjYWxsYmFjaykge1xuICBpbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9uZU5vZGUoZnJvbSwgdG8pIHtcbiAgaW50ZXJjZXB0b3JzLmZvckVhY2goKGkpID0+IGkoZnJvbSwgdG8pKTtcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgaW5pdFRyZWUodG8sIChlbCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGVsLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xufVxudmFyIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xuZnVuY3Rpb24gY2xvbmUob2xkRWwsIG5ld0VsKSB7XG4gIGlmICghbmV3RWwuX3hfZGF0YVN0YWNrKVxuICAgIG5ld0VsLl94X2RhdGFTdGFjayA9IG9sZEVsLl94X2RhdGFTdGFjaztcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY2xvbmVUcmVlKG5ld0VsKTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvYmluZC5qc1xuZnVuY3Rpb24gYmluZChlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycyA9IFtdKSB7XG4gIGlmICghZWwuX3hfYmluZGluZ3MpXG4gICAgZWwuX3hfYmluZGluZ3MgPSByZWFjdGl2ZSh7fSk7XG4gIGVsLl94X2JpbmRpbmdzW25hbWVdID0gdmFsdWU7XG4gIG5hbWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSA/IGNhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgYmluZFN0eWxlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgICBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNlbGVjdGVkXCI6XG4gICAgY2FzZSBcImNoZWNrZWRcIjpcbiAgICAgIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpIHtcbiAgaWYgKGlzUmFkaW8oZWwpKSB7XG4gICAgaWYgKGVsLmF0dHJpYnV0ZXMudmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5mcm9tTW9kZWwpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSBzYWZlUGFyc2VCb29sZWFuKGVsLnZhbHVlKSA9PT0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUoZWwudmFsdWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNDaGVja2JveChlbCkpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiAmJiAhW251bGwsIHZvaWQgMF0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBlbC5jaGVja2VkID0gdmFsdWUuc29tZSgodmFsKSA9PiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWwsIGVsLnZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZWwudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbC52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZWwudmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZENsYXNzZXMpXG4gICAgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcygpO1xuICBlbC5feF91bmRvQWRkZWRDbGFzc2VzID0gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZFN0eWxlcylcbiAgICBlbC5feF91bmRvQWRkZWRTdHlsZXMoKTtcbiAgZWwuX3hfdW5kb0FkZGVkU3R5bGVzID0gc2V0U3R5bGVzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kQXR0cmlidXRlQW5kUHJvcGVydHkoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgc2V0UHJvcGVydHlJZkNoYW5nZWQoZWwsIG5hbWUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChbbnVsbCwgdm9pZCAwLCBmYWxzZV0uaW5jbHVkZXModmFsdWUpICYmIGF0dHJpYnV0ZVNob3VsZG50QmVQcmVzZXJ2ZWRJZkZhbHN5KG5hbWUpKSB7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0Jvb2xlYW5BdHRyKG5hbWUpKVxuICAgICAgdmFsdWUgPSBuYW1lO1xuICAgIHNldElmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRJZkNoYW5nZWQoZWwsIGF0dHJOYW1lLCB2YWx1ZSkge1xuICBpZiAoZWwuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSAhPSB2YWx1ZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbFtwcm9wTmFtZV0gIT09IHZhbHVlKSB7XG4gICAgZWxbcHJvcE5hbWVdID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpIHtcbiAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUyKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlMiArIFwiXCI7XG4gIH0pO1xuICBBcnJheS5mcm9tKGVsLm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBzYWZlUGFyc2VCb29sZWFuKHJhd1ZhbHVlKSB7XG4gIGlmIChbMSwgXCIxXCIsIFwidHJ1ZVwiLCBcIm9uXCIsIFwieWVzXCIsIHRydWVdLmluY2x1ZGVzKHJhd1ZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChbMCwgXCIwXCIsIFwiZmFsc2VcIiwgXCJvZmZcIiwgXCJub1wiLCBmYWxzZV0uaW5jbHVkZXMocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYXdWYWx1ZSA/IEJvb2xlYW4ocmF3VmFsdWUpIDogbnVsbDtcbn1cbnZhciBib29sZWFuQXR0cmlidXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgXCJhbGxvd2Z1bGxzY3JlZW5cIixcbiAgXCJhc3luY1wiLFxuICBcImF1dG9mb2N1c1wiLFxuICBcImF1dG9wbGF5XCIsXG4gIFwiY2hlY2tlZFwiLFxuICBcImNvbnRyb2xzXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcImRlZmVyXCIsXG4gIFwiZGlzYWJsZWRcIixcbiAgXCJmb3Jtbm92YWxpZGF0ZVwiLFxuICBcImluZXJ0XCIsXG4gIFwiaXNtYXBcIixcbiAgXCJpdGVtc2NvcGVcIixcbiAgXCJsb29wXCIsXG4gIFwibXVsdGlwbGVcIixcbiAgXCJtdXRlZFwiLFxuICBcIm5vbW9kdWxlXCIsXG4gIFwibm92YWxpZGF0ZVwiLFxuICBcIm9wZW5cIixcbiAgXCJwbGF5c2lubGluZVwiLFxuICBcInJlYWRvbmx5XCIsXG4gIFwicmVxdWlyZWRcIixcbiAgXCJyZXZlcnNlZFwiLFxuICBcInNlbGVjdGVkXCIsXG4gIFwic2hhZG93cm9vdGNsb25hYmxlXCIsXG4gIFwic2hhZG93cm9vdGRlbGVnYXRlc2ZvY3VzXCIsXG4gIFwic2hhZG93cm9vdHNlcmlhbGl6YWJsZVwiXG5dKTtcbmZ1bmN0aW9uIGlzQm9vbGVhbkF0dHIoYXR0ck5hbWUpIHtcbiAgcmV0dXJuIGJvb2xlYW5BdHRyaWJ1dGVzLmhhcyhhdHRyTmFtZSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVTaG91bGRudEJlUHJlc2VydmVkSWZGYWxzeShuYW1lKSB7XG4gIHJldHVybiAhW1wiYXJpYS1wcmVzc2VkXCIsIFwiYXJpYS1jaGVja2VkXCIsIFwiYXJpYS1leHBhbmRlZFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0uaW5jbHVkZXMobmFtZSk7XG59XG5mdW5jdGlvbiBnZXRCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBleHRyYWN0UHJvcChlbCwgbmFtZSwgZmFsbGJhY2ssIGV4dHJhY3QgPSB0cnVlKSB7XG4gIGlmIChlbC5feF9iaW5kaW5ncyAmJiBlbC5feF9iaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKVxuICAgIHJldHVybiBlbC5feF9iaW5kaW5nc1tuYW1lXTtcbiAgaWYgKGVsLl94X2lubGluZUJpbmRpbmdzICYmIGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApIHtcbiAgICBsZXQgYmluZGluZyA9IGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdO1xuICAgIGJpbmRpbmcuZXh0cmFjdCA9IGV4dHJhY3Q7XG4gICAgcmV0dXJuIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoKCkgPT4ge1xuICAgICAgcmV0dXJuIGV2YWx1YXRlKGVsLCBiaW5kaW5nLmV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBsZXQgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgaWYgKGF0dHIgPT09IG51bGwpXG4gICAgcmV0dXJuIHR5cGVvZiBmYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gZmFsbGJhY2soKSA6IGZhbGxiYWNrO1xuICBpZiAoYXR0ciA9PT0gXCJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpIHtcbiAgICByZXR1cm4gISFbbmFtZSwgXCJ0cnVlXCJdLmluY2x1ZGVzKGF0dHIpO1xuICB9XG4gIHJldHVybiBhdHRyO1xufVxuZnVuY3Rpb24gaXNDaGVja2JveChlbCkge1xuICByZXR1cm4gZWwudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGVsLmxvY2FsTmFtZSA9PT0gXCJ1aS1jaGVja2JveFwiIHx8IGVsLmxvY2FsTmFtZSA9PT0gXCJ1aS1zd2l0Y2hcIjtcbn1cbmZ1bmN0aW9uIGlzUmFkaW8oZWwpIHtcbiAgcmV0dXJuIGVsLnR5cGUgPT09IFwicmFkaW9cIiB8fCBlbC5sb2NhbE5hbWUgPT09IFwidWktcmFkaW9cIjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2RlYm91bmNlLmpzXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3Rocm90dGxlLmpzXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICBsZXQgaW5UaHJvdHRsZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZW50YW5nbGUuanNcbmZ1bmN0aW9uIGVudGFuZ2xlKHsgZ2V0OiBvdXRlckdldCwgc2V0OiBvdXRlclNldCB9LCB7IGdldDogaW5uZXJHZXQsIHNldDogaW5uZXJTZXQgfSkge1xuICBsZXQgZmlyc3RSdW4gPSB0cnVlO1xuICBsZXQgb3V0ZXJIYXNoO1xuICBsZXQgaW5uZXJIYXNoO1xuICBsZXQgcmVmZXJlbmNlID0gZWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3V0ZXIgPSBvdXRlckdldCgpO1xuICAgIGxldCBpbm5lciA9IGlubmVyR2V0KCk7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICBmaXJzdFJ1biA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb3V0ZXJIYXNoTGF0ZXN0ID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgICAgbGV0IGlubmVySGFzaExhdGVzdCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgICAgIGlmIChvdXRlckhhc2hMYXRlc3QgIT09IG91dGVySGFzaCkge1xuICAgICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICB9IGVsc2UgaWYgKG91dGVySGFzaExhdGVzdCAhPT0gaW5uZXJIYXNoTGF0ZXN0KSB7XG4gICAgICAgIG91dGVyU2V0KGNsb25lSWZPYmplY3QoaW5uZXIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICAgIG91dGVySGFzaCA9IEpTT04uc3RyaW5naWZ5KG91dGVyR2V0KCkpO1xuICAgIGlubmVySGFzaCA9IEpTT04uc3RyaW5naWZ5KGlubmVyR2V0KCkpO1xuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZWxlYXNlKHJlZmVyZW5jZSk7XG4gIH07XG59XG5mdW5jdGlvbiBjbG9uZUlmT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgOiB2YWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3BsdWdpbi5qc1xuZnVuY3Rpb24gcGx1Z2luKGNhbGxiYWNrKSB7XG4gIGxldCBjYWxsYmFja3MgPSBBcnJheS5pc0FycmF5KGNhbGxiYWNrKSA/IGNhbGxiYWNrIDogW2NhbGxiYWNrXTtcbiAgY2FsbGJhY2tzLmZvckVhY2goKGkpID0+IGkoYWxwaW5lX2RlZmF1bHQpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3N0b3JlLmpzXG52YXIgc3RvcmVzID0ge307XG52YXIgaXNSZWFjdGl2ZSA9IGZhbHNlO1xuZnVuY3Rpb24gc3RvcmUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc1JlYWN0aXZlKSB7XG4gICAgc3RvcmVzID0gcmVhY3RpdmUoc3RvcmVzKTtcbiAgICBpc1JlYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiBzdG9yZXNbbmFtZV07XG4gIH1cbiAgc3RvcmVzW25hbWVdID0gdmFsdWU7XG4gIGluaXRJbnRlcmNlcHRvcnMoc3RvcmVzW25hbWVdKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHZhbHVlLmluaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHN0b3Jlc1tuYW1lXS5pbml0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2JpbmRzLmpzXG52YXIgYmluZHMgPSB7fTtcbmZ1bmN0aW9uIGJpbmQyKG5hbWUsIGJpbmRpbmdzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IHR5cGVvZiBiaW5kaW5ncyAhPT0gXCJmdW5jdGlvblwiID8gKCkgPT4gYmluZGluZ3MgOiBiaW5kaW5ncztcbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QobmFtZSwgZ2V0QmluZGluZ3MoKSk7XG4gIH0gZWxzZSB7XG4gICAgYmluZHNbbmFtZV0gPSBnZXRCaW5kaW5ncztcbiAgfVxuICByZXR1cm4gKCkgPT4ge1xuICB9O1xufVxuZnVuY3Rpb24gaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhvYmopIHtcbiAgT2JqZWN0LmVudHJpZXMoYmluZHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBvYmosIG9yaWdpbmFsKSB7XG4gIGxldCBjbGVhbnVwUnVubmVycyA9IFtdO1xuICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKTtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH0pO1xuICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICBjbGVhbnVwUnVubmVycy5wdXNoKGhhbmRsZS5ydW5DbGVhbnVwcyk7XG4gICAgaGFuZGxlKCk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy4xNC44XCIsXG4gIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyxcbiAgZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyxcbiAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcsXG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzZXRSZWFjdGl2aXR5RW5naW5lLFxuICBvbkF0dHJpYnV0ZVJlbW92ZWQsXG4gIG9uQXR0cmlidXRlc0FkZGVkLFxuICBjbG9zZXN0RGF0YVN0YWNrLFxuICBza2lwRHVyaW5nQ2xvbmUsXG4gIG9ubHlEdXJpbmdDbG9uZSxcbiAgYWRkUm9vdFNlbGVjdG9yLFxuICBhZGRJbml0U2VsZWN0b3IsXG4gIGludGVyY2VwdENsb25lLFxuICBhZGRTY29wZVRvTm9kZSxcbiAgZGVmZXJNdXRhdGlvbnMsXG4gIG1hcEF0dHJpYnV0ZXMsXG4gIGV2YWx1YXRlTGF0ZXIsXG4gIGludGVyY2VwdEluaXQsXG4gIHNldEV2YWx1YXRvcixcbiAgbWVyZ2VQcm94aWVzLFxuICBleHRyYWN0UHJvcCxcbiAgZmluZENsb3Nlc3QsXG4gIG9uRWxSZW1vdmVkLFxuICBjbG9zZXN0Um9vdCxcbiAgZGVzdHJveVRyZWUsXG4gIGludGVyY2VwdG9yLFxuICAvLyBJTlRFUk5BTDogbm90IHB1YmxpYyBBUEkgYW5kIGlzIHN1YmplY3QgdG8gY2hhbmdlIHdpdGhvdXQgbWFqb3IgcmVsZWFzZS5cbiAgdHJhbnNpdGlvbixcbiAgLy8gSU5URVJOQUxcbiAgc2V0U3R5bGVzLFxuICAvLyBJTlRFUk5BTFxuICBtdXRhdGVEb20sXG4gIGRpcmVjdGl2ZSxcbiAgZW50YW5nbGUsXG4gIHRocm90dGxlLFxuICBkZWJvdW5jZSxcbiAgZXZhbHVhdGUsXG4gIGluaXRUcmVlLFxuICBuZXh0VGljayxcbiAgcHJlZml4ZWQ6IHByZWZpeCxcbiAgcHJlZml4OiBzZXRQcmVmaXgsXG4gIHBsdWdpbixcbiAgbWFnaWMsXG4gIHN0b3JlLFxuICBzdGFydCxcbiAgY2xvbmUsXG4gIC8vIElOVEVSTkFMXG4gIGNsb25lTm9kZSxcbiAgLy8gSU5URVJOQUxcbiAgYm91bmQ6IGdldEJpbmRpbmcsXG4gICRkYXRhOiBzY29wZSxcbiAgd2F0Y2gsXG4gIHdhbGssXG4gIGRhdGEsXG4gIGJpbmQ6IGJpbmQyXG59O1xudmFyIGFscGluZV9kZWZhdWx0ID0gQWxwaW5lO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvZGlzdC9zaGFyZWQuZXNtLWJ1bmRsZXIuanNcbmZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKSB7XG4gIGNvbnN0IG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCBsaXN0ID0gc3RyLnNwbGl0KFwiLFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/ICh2YWwpID0+ICEhbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXSA6ICh2YWwpID0+ICEhbWFwW3ZhbF07XG59XG52YXIgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xudmFyIGlzQm9vbGVhbkF0dHIyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoc3BlY2lhbEJvb2xlYW5BdHRycyArIGAsYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNvbnRyb2xzLGRlZmF1bHQsZGVmZXIsZGlzYWJsZWQsaGlkZGVuLGxvb3Asb3BlbixyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3MsY2hlY2tlZCxtdXRlZCxtdWx0aXBsZSxzZWxlY3RlZGApO1xudmFyIEVNUFRZX09CSiA9IHRydWUgPyBPYmplY3QuZnJlZXplKHt9KSA6IHt9O1xudmFyIEVNUFRZX0FSUiA9IHRydWUgPyBPYmplY3QuZnJlZXplKFtdKSA6IFtdO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNPd24gPSAodmFsLCBrZXkpID0+IGhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGlzTWFwID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBNYXBdXCI7XG52YXIgaXNTdHJpbmcgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiO1xudmFyIGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbnZhciBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiO1xudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB0b1R5cGVTdHJpbmcgPSAodmFsdWUpID0+IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xudmFyIHRvUmF3VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG59O1xudmFyIGlzSW50ZWdlcktleSA9IChrZXkpID0+IGlzU3RyaW5nKGtleSkgJiYga2V5ICE9PSBcIk5hTlwiICYmIGtleVswXSAhPT0gXCItXCIgJiYgXCJcIiArIHBhcnNlSW50KGtleSwgMTApID09PSBrZXk7XG52YXIgY2FjaGVTdHJpbmdGdW5jdGlvbiA9IChmbikgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKHN0cikgPT4ge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufTtcbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpO1xufSk7XG52YXIgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xudmFyIGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xudmFyIGNhcGl0YWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKSk7XG52YXIgdG9IYW5kbGVyS2V5ID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIgPyBgb24ke2NhcGl0YWxpemUoc3RyKX1gIDogYGApO1xudmFyIGhhc0NoYW5nZWQgPSAodmFsdWUsIG9sZFZhbHVlKSA9PiB2YWx1ZSAhPT0gb2xkVmFsdWUgJiYgKHZhbHVlID09PSB2YWx1ZSB8fCBvbGRWYWx1ZSA9PT0gb2xkVmFsdWUpO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2Rpc3QvcmVhY3Rpdml0eS5lc20tYnVuZGxlci5qc1xudmFyIHRhcmdldE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGVmZmVjdFN0YWNrID0gW107XG52YXIgYWN0aXZlRWZmZWN0O1xudmFyIElURVJBVEVfS0VZID0gU3ltYm9sKHRydWUgPyBcIml0ZXJhdGVcIiA6IFwiXCIpO1xudmFyIE1BUF9LRVlfSVRFUkFURV9LRVkgPSBTeW1ib2wodHJ1ZSA/IFwiTWFwIGtleSBpdGVyYXRlXCIgOiBcIlwiKTtcbmZ1bmN0aW9uIGlzRWZmZWN0KGZuKSB7XG4gIHJldHVybiBmbiAmJiBmbi5faXNFZmZlY3QgPT09IHRydWU7XG59XG5mdW5jdGlvbiBlZmZlY3QyKGZuLCBvcHRpb25zID0gRU1QVFlfT0JKKSB7XG4gIGlmIChpc0VmZmVjdChmbikpIHtcbiAgICBmbiA9IGZuLnJhdztcbiAgfVxuICBjb25zdCBlZmZlY3QzID0gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpO1xuICBpZiAoIW9wdGlvbnMubGF6eSkge1xuICAgIGVmZmVjdDMoKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0Mztcbn1cbmZ1bmN0aW9uIHN0b3AoZWZmZWN0Mykge1xuICBpZiAoZWZmZWN0My5hY3RpdmUpIHtcbiAgICBjbGVhbnVwKGVmZmVjdDMpO1xuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMub25TdG9wKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMub25TdG9wKCk7XG4gICAgfVxuICAgIGVmZmVjdDMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cbnZhciB1aWQgPSAwO1xuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpIHtcbiAgY29uc3QgZWZmZWN0MyA9IGZ1bmN0aW9uIHJlYWN0aXZlRWZmZWN0KCkge1xuICAgIGlmICghZWZmZWN0My5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdDMpKSB7XG4gICAgICBjbGVhbnVwKGVmZmVjdDMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW5hYmxlVHJhY2tpbmcoKTtcbiAgICAgICAgZWZmZWN0U3RhY2sucHVzaChlZmZlY3QzKTtcbiAgICAgICAgYWN0aXZlRWZmZWN0ID0gZWZmZWN0MztcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBlZmZlY3RTdGFjay5wb3AoKTtcbiAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3RTdGFja1tlZmZlY3RTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGVmZmVjdDMuaWQgPSB1aWQrKztcbiAgZWZmZWN0My5hbGxvd1JlY3Vyc2UgPSAhIW9wdGlvbnMuYWxsb3dSZWN1cnNlO1xuICBlZmZlY3QzLl9pc0VmZmVjdCA9IHRydWU7XG4gIGVmZmVjdDMuYWN0aXZlID0gdHJ1ZTtcbiAgZWZmZWN0My5yYXcgPSBmbjtcbiAgZWZmZWN0My5kZXBzID0gW107XG4gIGVmZmVjdDMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHJldHVybiBlZmZlY3QzO1xufVxuZnVuY3Rpb24gY2xlYW51cChlZmZlY3QzKSB7XG4gIGNvbnN0IHsgZGVwcyB9ID0gZWZmZWN0MztcbiAgaWYgKGRlcHMubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXBzW2ldLmRlbGV0ZShlZmZlY3QzKTtcbiAgICB9XG4gICAgZGVwcy5sZW5ndGggPSAwO1xuICB9XG59XG52YXIgc2hvdWxkVHJhY2sgPSB0cnVlO1xudmFyIHRyYWNrU3RhY2sgPSBbXTtcbmZ1bmN0aW9uIHBhdXNlVHJhY2tpbmcoKSB7XG4gIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gIHNob3VsZFRyYWNrID0gZmFsc2U7XG59XG5mdW5jdGlvbiBlbmFibGVUcmFja2luZygpIHtcbiAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgc2hvdWxkVHJhY2sgPSB0cnVlO1xufVxuZnVuY3Rpb24gcmVzZXRUcmFja2luZygpIHtcbiAgY29uc3QgbGFzdCA9IHRyYWNrU3RhY2sucG9wKCk7XG4gIHNob3VsZFRyYWNrID0gbGFzdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IGxhc3Q7XG59XG5mdW5jdGlvbiB0cmFjayh0YXJnZXQsIHR5cGUsIGtleSkge1xuICBpZiAoIXNob3VsZFRyYWNrIHx8IGFjdGl2ZUVmZmVjdCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIWRlcHNNYXApIHtcbiAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgZGVwc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICB9XG4gIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkpO1xuICBpZiAoIWRlcCkge1xuICAgIGRlcHNNYXAuc2V0KGtleSwgZGVwID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gIH1cbiAgaWYgKCFkZXAuaGFzKGFjdGl2ZUVmZmVjdCkpIHtcbiAgICBkZXAuYWRkKGFjdGl2ZUVmZmVjdCk7XG4gICAgYWN0aXZlRWZmZWN0LmRlcHMucHVzaChkZXApO1xuICAgIGlmIChhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKSB7XG4gICAgICBhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKHtcbiAgICAgICAgZWZmZWN0OiBhY3RpdmVFZmZlY3QsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAga2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHRyaWdnZXIodGFyZ2V0LCB0eXBlLCBrZXksIG5ld1ZhbHVlLCBvbGRWYWx1ZSwgb2xkVGFyZ2V0KSB7XG4gIGNvbnN0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghZGVwc01hcCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3QgYWRkMiA9IChlZmZlY3RzVG9BZGQpID0+IHtcbiAgICBpZiAoZWZmZWN0c1RvQWRkKSB7XG4gICAgICBlZmZlY3RzVG9BZGQuZm9yRWFjaCgoZWZmZWN0MykgPT4ge1xuICAgICAgICBpZiAoZWZmZWN0MyAhPT0gYWN0aXZlRWZmZWN0IHx8IGVmZmVjdDMuYWxsb3dSZWN1cnNlKSB7XG4gICAgICAgICAgZWZmZWN0cy5hZGQoZWZmZWN0Myk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwiY2xlYXJcIikge1xuICAgIGRlcHNNYXAuZm9yRWFjaChhZGQyKTtcbiAgfSBlbHNlIGlmIChrZXkgPT09IFwibGVuZ3RoXCIgJiYgaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgZGVwc01hcC5mb3JFYWNoKChkZXAsIGtleTIpID0+IHtcbiAgICAgIGlmIChrZXkyID09PSBcImxlbmd0aFwiIHx8IGtleTIgPj0gbmV3VmFsdWUpIHtcbiAgICAgICAgYWRkMihkZXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChrZXkgIT09IHZvaWQgMCkge1xuICAgICAgYWRkMihkZXBzTWFwLmdldChrZXkpKTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KE1BUF9LRVlfSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyS2V5KGtleSkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KFwibGVuZ3RoXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJ1biA9IChlZmZlY3QzKSA9PiB7XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5vblRyaWdnZXIpIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5vblRyaWdnZXIoe1xuICAgICAgICBlZmZlY3Q6IGVmZmVjdDMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAga2V5LFxuICAgICAgICB0eXBlLFxuICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgIG9sZFRhcmdldFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMuc2NoZWR1bGVyKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlZmZlY3QzKCk7XG4gICAgfVxuICB9O1xuICBlZmZlY3RzLmZvckVhY2gocnVuKTtcbn1cbnZhciBpc05vblRyYWNrYWJsZUtleXMgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChgX19wcm90b19fLF9fdl9pc1JlZixfX2lzVnVlYCk7XG52YXIgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkubWFwKChrZXkpID0+IFN5bWJvbFtrZXldKS5maWx0ZXIoaXNTeW1ib2wpKTtcbnZhciBnZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcigpO1xudmFyIHJlYWRvbmx5R2V0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcih0cnVlKTtcbnZhciBhcnJheUluc3RydW1lbnRhdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCk7XG5mdW5jdGlvbiBjcmVhdGVBcnJheUluc3RydW1lbnRhdGlvbnMoKSB7XG4gIGNvbnN0IGluc3RydW1lbnRhdGlvbnMgPSB7fTtcbiAgW1wiaW5jbHVkZXNcIiwgXCJpbmRleE9mXCIsIFwibGFzdEluZGV4T2ZcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgY29uc3QgYXJyID0gdG9SYXcodGhpcyk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRyYWNrKGFyciwgXCJnZXRcIiwgaSArIFwiXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXJyW2tleV0oLi4uYXJncyk7XG4gICAgICBpZiAocmVzID09PSAtMSB8fCByZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBhcnJba2V5XSguLi5hcmdzLm1hcCh0b1JhdykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgW1wicHVzaFwiLCBcInBvcFwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiLCBcInNwbGljZVwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpbnN0cnVtZW50YXRpb25zW2tleV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICBjb25zdCByZXMgPSB0b1Jhdyh0aGlzKVtrZXldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGluc3RydW1lbnRhdGlvbnM7XG59XG5mdW5jdGlvbiBjcmVhdGVHZXR0ZXIoaXNSZWFkb25seSA9IGZhbHNlLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldDModGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICByZXR1cm4gIWlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiICYmIHJlY2VpdmVyID09PSAoaXNSZWFkb25seSA/IHNoYWxsb3cgPyBzaGFsbG93UmVhZG9ubHlNYXAgOiByZWFkb25seU1hcCA6IHNoYWxsb3cgPyBzaGFsbG93UmVhY3RpdmVNYXAgOiByZWFjdGl2ZU1hcCkuZ2V0KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBpc0FycmF5KHRhcmdldCk7XG4gICAgaWYgKCFpc1JlYWRvbmx5ICYmIHRhcmdldElzQXJyYXkgJiYgaGFzT3duKGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5KSkge1xuICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5LCByZWNlaXZlcik7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gICAgaWYgKGlzU3ltYm9sKGtleSkgPyBidWlsdEluU3ltYm9scy5oYXMoa2V5KSA6IGlzTm9uVHJhY2thYmxlS2V5cyhrZXkpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhZG9ubHkpIHtcbiAgICAgIHRyYWNrKHRhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgICB9XG4gICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmIChpc1JlZihyZXMpKSB7XG4gICAgICBjb25zdCBzaG91bGRVbndyYXAgPSAhdGFyZ2V0SXNBcnJheSB8fCAhaXNJbnRlZ2VyS2V5KGtleSk7XG4gICAgICByZXR1cm4gc2hvdWxkVW53cmFwID8gcmVzLnZhbHVlIDogcmVzO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHkgPyByZWFkb25seShyZXMpIDogcmVhY3RpdmUyKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG59XG52YXIgc2V0MiA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZXR0ZXIoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNldHRlcihzaGFsbG93ID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNldDModGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xuICAgIGxldCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgIGlmICghc2hhbGxvdykge1xuICAgICAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gICAgICBvbGRWYWx1ZSA9IHRvUmF3KG9sZFZhbHVlKTtcbiAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpICYmIGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYWRLZXkgPSBpc0FycmF5KHRhcmdldCkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIGlmICh0YXJnZXQgPT09IHRvUmF3KHJlY2VpdmVyKSkge1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSk7XG4gIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBoYXModGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpO1xuICBpZiAoIWlzU3ltYm9sKGtleSkgfHwgIWJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpKSB7XG4gICAgdHJhY2sodGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICB0cmFjayh0YXJnZXQsIFwiaXRlcmF0ZVwiLCBpc0FycmF5KHRhcmdldCkgPyBcImxlbmd0aFwiIDogSVRFUkFURV9LRVkpO1xuICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG59XG52YXIgbXV0YWJsZUhhbmRsZXJzID0ge1xuICBnZXQ6IGdldDIsXG4gIHNldDogc2V0MixcbiAgZGVsZXRlUHJvcGVydHksXG4gIGhhcyxcbiAgb3duS2V5c1xufTtcbnZhciByZWFkb25seUhhbmRsZXJzID0ge1xuICBnZXQ6IHJlYWRvbmx5R2V0LFxuICBzZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGBTZXQgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgRGVsZXRlIG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xudmFyIHRvUmVhY3RpdmUgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSA/IHJlYWN0aXZlMih2YWx1ZSkgOiB2YWx1ZTtcbnZhciB0b1JlYWRvbmx5ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgPyByZWFkb25seSh2YWx1ZSkgOiB2YWx1ZTtcbnZhciB0b1NoYWxsb3cgPSAodmFsdWUpID0+IHZhbHVlO1xudmFyIGdldFByb3RvID0gKHYpID0+IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yodik7XG5mdW5jdGlvbiBnZXQkMSh0YXJnZXQsIGtleSwgaXNSZWFkb25seSA9IGZhbHNlLCBpc1NoYWxsb3cgPSBmYWxzZSkge1xuICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKGtleSAhPT0gcmF3S2V5KSB7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCBrZXkpO1xuICB9XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwgcmF3S2V5KTtcbiAgY29uc3QgeyBoYXM6IGhhczIgfSA9IGdldFByb3RvKHJhd1RhcmdldCk7XG4gIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChrZXkpKTtcbiAgfSBlbHNlIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChyYXdLZXkpKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHJhd1RhcmdldCkge1xuICAgIHRhcmdldC5nZXQoa2V5KTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzJDEoa2V5LCBpc1JlYWRvbmx5ID0gZmFsc2UpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gIH1cbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCByYXdLZXkpO1xuICByZXR1cm4ga2V5ID09PSByYXdLZXkgPyB0YXJnZXQuaGFzKGtleSkgOiB0YXJnZXQuaGFzKGtleSkgfHwgdGFyZ2V0LmhhcyhyYXdLZXkpO1xufVxuZnVuY3Rpb24gc2l6ZSh0YXJnZXQsIGlzUmVhZG9ubHkgPSBmYWxzZSkge1xuICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2sodG9SYXcodGFyZ2V0KSwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgXCJzaXplXCIsIHRhcmdldCk7XG59XG5mdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvKHRhcmdldCk7XG4gIGNvbnN0IGhhZEtleSA9IHByb3RvLmhhcy5jYWxsKHRhcmdldCwgdmFsdWUpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIHRhcmdldC5hZGQodmFsdWUpO1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gc2V0JDEoa2V5LCB2YWx1ZSkge1xuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyLCBnZXQ6IGdldDMgfSA9IGdldFByb3RvKHRhcmdldCk7XG4gIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICB9XG4gIGNvbnN0IG9sZFZhbHVlID0gZ2V0My5jYWxsKHRhcmdldCwga2V5KTtcbiAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGRlbGV0ZUVudHJ5KGtleSkge1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgeyBoYXM6IGhhczIsIGdldDogZ2V0MyB9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgbGV0IGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAga2V5ID0gdG9SYXcoa2V5KTtcbiAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB9IGVsc2UgaWYgKHRydWUpIHtcbiAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gIH1cbiAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzID8gZ2V0My5jYWxsKHRhcmdldCwga2V5KSA6IHZvaWQgMDtcbiAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICBpZiAoaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgaGFkSXRlbXMgPSB0YXJnZXQuc2l6ZSAhPT0gMDtcbiAgY29uc3Qgb2xkVGFyZ2V0ID0gdHJ1ZSA/IGlzTWFwKHRhcmdldCkgPyBuZXcgTWFwKHRhcmdldCkgOiBuZXcgU2V0KHRhcmdldCkgOiB2b2lkIDA7XG4gIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5jbGVhcigpO1xuICBpZiAoaGFkSXRlbXMpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJjbGVhclwiLCB2b2lkIDAsIHZvaWQgMCwgb2xkVGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY3JlYXRlRm9yRWFjaChpc1JlYWRvbmx5LCBpc1NoYWxsb3cpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBjb25zdCBvYnNlcnZlZCA9IHRoaXM7XG4gICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXG4gICAgICBcIl9fdl9yYXdcIlxuICAgICAgLyogUkFXICovXG4gICAgXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICAgIHJldHVybiB0YXJnZXQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgd3JhcCh2YWx1ZSksIHdyYXAoa2V5KSwgb2JzZXJ2ZWQpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBpc1JlYWRvbmx5LCBpc1NoYWxsb3cpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1xuICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgIC8qIFJBVyAqL1xuICAgIF07XG4gICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXRJc01hcCA9IGlzTWFwKHJhd1RhcmdldCk7XG4gICAgY29uc3QgaXNQYWlyID0gbWV0aG9kID09PSBcImVudHJpZXNcIiB8fCBtZXRob2QgPT09IFN5bWJvbC5pdGVyYXRvciAmJiB0YXJnZXRJc01hcDtcbiAgICBjb25zdCBpc0tleU9ubHkgPSBtZXRob2QgPT09IFwia2V5c1wiICYmIHRhcmdldElzTWFwO1xuICAgIGNvbnN0IGlubmVySXRlcmF0b3IgPSB0YXJnZXRbbWV0aG9kXSguLi5hcmdzKTtcbiAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIGlzS2V5T25seSA/IE1BUF9LRVlfSVRFUkFURV9LRVkgOiBJVEVSQVRFX0tFWSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGl0ZXJhdG9yIHByb3RvY29sXG4gICAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBpbm5lckl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGRvbmUgPyB7IHZhbHVlLCBkb25lIH0gOiB7XG4gICAgICAgICAgdmFsdWU6IGlzUGFpciA/IFt3cmFwKHZhbHVlWzBdKSwgd3JhcCh2YWx1ZVsxXSldIDogd3JhcCh2YWx1ZSksXG4gICAgICAgICAgZG9uZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIC8vIGl0ZXJhYmxlIHByb3RvY29sXG4gICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWRvbmx5TWV0aG9kKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc3Qga2V5ID0gYXJnc1swXSA/IGBvbiBrZXkgXCIke2FyZ3NbMF19XCIgYCA6IGBgO1xuICAgICAgY29uc29sZS53YXJuKGAke2NhcGl0YWxpemUodHlwZSl9IG9wZXJhdGlvbiAke2tleX1mYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0b1Jhdyh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlID09PSBcImRlbGV0ZVwiID8gZmFsc2UgOiB0aGlzO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucygpIHtcbiAgY29uc3QgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXkpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzKTtcbiAgICB9LFxuICAgIGhhczogaGFzJDEsXG4gICAgYWRkLFxuICAgIHNldDogc2V0JDEsXG4gICAgZGVsZXRlOiBkZWxldGVFbnRyeSxcbiAgICBjbGVhcixcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCBmYWxzZSlcbiAgfTtcbiAgY29uc3Qgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcyk7XG4gICAgfSxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGFkZCxcbiAgICBzZXQ6IHNldCQxLFxuICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgY2xlYXIsXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaChmYWxzZSwgdHJ1ZSlcbiAgfTtcbiAgY29uc3QgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgYWRkOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiYWRkXCJcbiAgICAgIC8qIEFERCAqL1xuICAgICksXG4gICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwic2V0XCJcbiAgICAgIC8qIFNFVCAqL1xuICAgICksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiZGVsZXRlXCJcbiAgICAgIC8qIERFTEVURSAqL1xuICAgICksXG4gICAgY2xlYXI6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJjbGVhclwiXG4gICAgICAvKiBDTEVBUiAqL1xuICAgICksXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCBmYWxzZSlcbiAgfTtcbiAgY29uc3Qgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGhhcyQxLmNhbGwodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImFkZFwiXG4gICAgICAvKiBBREQgKi9cbiAgICApLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcInNldFwiXG4gICAgICAvKiBTRVQgKi9cbiAgICApLFxuICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImRlbGV0ZVwiXG4gICAgICAvKiBERUxFVEUgKi9cbiAgICApLFxuICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiY2xlYXJcIlxuICAgICAgLyogQ0xFQVIgKi9cbiAgICApLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2godHJ1ZSwgdHJ1ZSlcbiAgfTtcbiAgY29uc3QgaXRlcmF0b3JNZXRob2RzID0gW1wia2V5c1wiLCBcInZhbHVlc1wiLCBcImVudHJpZXNcIiwgU3ltYm9sLml0ZXJhdG9yXTtcbiAgaXRlcmF0b3JNZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuICAgIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgZmFsc2UpO1xuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgdHJ1ZSk7XG4gICAgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgdHJ1ZSk7XG4gIH0pO1xuICByZXR1cm4gW1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zMixcbiAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnMyLFxuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMixcbiAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlxuICBdO1xufVxudmFyIFttdXRhYmxlSW5zdHJ1bWVudGF0aW9ucywgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zLCBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucywgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uc10gPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucygpO1xuZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGlzUmVhZG9ubHksIHNoYWxsb3cpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHNoYWxsb3cgPyBpc1JlYWRvbmx5ID8gc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IHNoYWxsb3dJbnN0cnVtZW50YXRpb25zIDogaXNSZWFkb25seSA/IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IG11dGFibGVJbnN0cnVtZW50YXRpb25zO1xuICByZXR1cm4gKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4ge1xuICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgcmV0dXJuICFpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGhhc093bihpbnN0cnVtZW50YXRpb25zLCBrZXkpICYmIGtleSBpbiB0YXJnZXQgPyBpbnN0cnVtZW50YXRpb25zIDogdGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgfTtcbn1cbnZhciBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoZmFsc2UsIGZhbHNlKVxufTtcbnZhciByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKHRydWUsIGZhbHNlKVxufTtcbmZ1bmN0aW9uIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KSB7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChyYXdLZXkgIT09IGtleSAmJiBoYXMyLmNhbGwodGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgY29uc3QgdHlwZSA9IHRvUmF3VHlwZSh0YXJnZXQpO1xuICAgIGNvbnNvbGUud2FybihgUmVhY3RpdmUgJHt0eXBlfSBjb250YWlucyBib3RoIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIHRoZSBzYW1lIG9iamVjdCR7dHlwZSA9PT0gYE1hcGAgPyBgIGFzIGtleXNgIDogYGB9LCB3aGljaCBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbmNpZXMuIEF2b2lkIGRpZmZlcmVudGlhdGluZyBiZXR3ZWVuIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIGFuIG9iamVjdCBhbmQgb25seSB1c2UgdGhlIHJlYWN0aXZlIHZlcnNpb24gaWYgcG9zc2libGUuYCk7XG4gIH1cbn1cbnZhciByZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHNoYWxsb3dSZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgc2hhbGxvd1JlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB0YXJnZXRUeXBlTWFwKHJhd1R5cGUpIHtcbiAgc3dpdGNoIChyYXdUeXBlKSB7XG4gICAgY2FzZSBcIk9iamVjdFwiOlxuICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBcIk1hcFwiOlxuICAgIGNhc2UgXCJTZXRcIjpcbiAgICBjYXNlIFwiV2Vha01hcFwiOlxuICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICByZXR1cm4gMjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFRhcmdldFR5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlW1xuICAgIFwiX192X3NraXBcIlxuICAgIC8qIFNLSVAgKi9cbiAgXSB8fCAhT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgPyAwIDogdGFyZ2V0VHlwZU1hcCh0b1Jhd1R5cGUodmFsdWUpKTtcbn1cbmZ1bmN0aW9uIHJlYWN0aXZlMih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCAmJiB0YXJnZXRbXG4gICAgXCJfX3ZfaXNSZWFkb25seVwiXG4gICAgLyogSVNfUkVBRE9OTFkgKi9cbiAgXSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgZmFsc2UsIG11dGFibGVIYW5kbGVycywgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycywgcmVhY3RpdmVNYXApO1xufVxuZnVuY3Rpb24gcmVhZG9ubHkodGFyZ2V0KSB7XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIHRydWUsIHJlYWRvbmx5SGFuZGxlcnMsIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzLCByZWFkb25seU1hcCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGlzUmVhZG9ubHksIGJhc2VIYW5kbGVycywgY29sbGVjdGlvbkhhbmRsZXJzLCBwcm94eU1hcCkge1xuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGB2YWx1ZSBjYW5ub3QgYmUgbWFkZSByZWFjdGl2ZTogJHtTdHJpbmcodGFyZ2V0KX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBpZiAodGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF0gJiYgIShpc1JlYWRvbmx5ICYmIHRhcmdldFtcbiAgICBcIl9fdl9pc1JlYWN0aXZlXCJcbiAgICAvKiBJU19SRUFDVElWRSAqL1xuICBdKSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3QgZXhpc3RpbmdQcm94eSA9IHByb3h5TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoZXhpc3RpbmdQcm94eSkge1xuICAgIHJldHVybiBleGlzdGluZ1Byb3h5O1xuICB9XG4gIGNvbnN0IHRhcmdldFR5cGUgPSBnZXRUYXJnZXRUeXBlKHRhcmdldCk7XG4gIGlmICh0YXJnZXRUeXBlID09PSAwKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIHRhcmdldFR5cGUgPT09IDIgPyBjb2xsZWN0aW9uSGFuZGxlcnMgOiBiYXNlSGFuZGxlcnMpO1xuICBwcm94eU1hcC5zZXQodGFyZ2V0LCBwcm94eSk7XG4gIHJldHVybiBwcm94eTtcbn1cbmZ1bmN0aW9uIHRvUmF3KG9ic2VydmVkKSB7XG4gIHJldHVybiBvYnNlcnZlZCAmJiB0b1JhdyhvYnNlcnZlZFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdKSB8fCBvYnNlcnZlZDtcbn1cbmZ1bmN0aW9uIGlzUmVmKHIpIHtcbiAgcmV0dXJuIEJvb2xlYW4ociAmJiByLl9fdl9pc1JlZiA9PT0gdHJ1ZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJG5leHRUaWNrLmpzXG5tYWdpYyhcIm5leHRUaWNrXCIsICgpID0+IG5leHRUaWNrKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZGlzcGF0Y2guanNcbm1hZ2ljKFwiZGlzcGF0Y2hcIiwgKGVsKSA9PiBkaXNwYXRjaC5iaW5kKGRpc3BhdGNoLCBlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyR3YXRjaC5qc1xubWFnaWMoXCJ3YXRjaFwiLCAoZWwsIHsgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IChrZXksIGNhbGxiYWNrKSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihrZXkpO1xuICBsZXQgZ2V0dGVyID0gKCkgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBldmFsdWF0ZTIoKGkpID0+IHZhbHVlID0gaSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBsZXQgdW53YXRjaCA9IHdhdGNoKGdldHRlciwgY2FsbGJhY2spO1xuICBjbGVhbnVwMih1bndhdGNoKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRzdG9yZS5qc1xubWFnaWMoXCJzdG9yZVwiLCBnZXRTdG9yZXMpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkYXRhLmpzXG5tYWdpYyhcImRhdGFcIiwgKGVsKSA9PiBzY29wZShlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyb290LmpzXG5tYWdpYyhcInJvb3RcIiwgKGVsKSA9PiBjbG9zZXN0Um9vdChlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyZWZzLmpzXG5tYWdpYyhcInJlZnNcIiwgKGVsKSA9PiB7XG4gIGlmIChlbC5feF9yZWZzX3Byb3h5KVxuICAgIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xuICBlbC5feF9yZWZzX3Byb3h5ID0gbWVyZ2VQcm94aWVzKGdldEFycmF5T2ZSZWZPYmplY3QoZWwpKTtcbiAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG59KTtcbmZ1bmN0aW9uIGdldEFycmF5T2ZSZWZPYmplY3QoZWwpIHtcbiAgbGV0IHJlZk9iamVjdHMgPSBbXTtcbiAgZmluZENsb3Nlc3QoZWwsIChpKSA9PiB7XG4gICAgaWYgKGkuX3hfcmVmcylcbiAgICAgIHJlZk9iamVjdHMucHVzaChpLl94X3JlZnMpO1xuICB9KTtcbiAgcmV0dXJuIHJlZk9iamVjdHM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pZHMuanNcbnZhciBnbG9iYWxJZE1lbW8gPSB7fTtcbmZ1bmN0aW9uIGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKSB7XG4gIGlmICghZ2xvYmFsSWRNZW1vW25hbWVdKVxuICAgIGdsb2JhbElkTWVtb1tuYW1lXSA9IDA7XG4gIHJldHVybiArK2dsb2JhbElkTWVtb1tuYW1lXTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3RJZFJvb3QoZWwsIG5hbWUpIHtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLCAoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50Ll94X2lkcyAmJiBlbGVtZW50Ll94X2lkc1tuYW1lXSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNldElkUm9vdChlbCwgbmFtZSkge1xuICBpZiAoIWVsLl94X2lkcylcbiAgICBlbC5feF9pZHMgPSB7fTtcbiAgaWYgKCFlbC5feF9pZHNbbmFtZV0pXG4gICAgZWwuX3hfaWRzW25hbWVdID0gZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRpZC5qc1xubWFnaWMoXCJpZFwiLCAoZWwsIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4gKG5hbWUsIGtleSA9IG51bGwpID0+IHtcbiAgbGV0IGNhY2hlS2V5ID0gYCR7bmFtZX0ke2tleSA/IGAtJHtrZXl9YCA6IFwiXCJ9YDtcbiAgcmV0dXJuIGNhY2hlSWRCeU5hbWVPbkVsZW1lbnQoZWwsIGNhY2hlS2V5LCBjbGVhbnVwMiwgKCkgPT4ge1xuICAgIGxldCByb290ID0gY2xvc2VzdElkUm9vdChlbCwgbmFtZSk7XG4gICAgbGV0IGlkID0gcm9vdCA/IHJvb3QuX3hfaWRzW25hbWVdIDogZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xuICAgIHJldHVybiBrZXkgPyBgJHtuYW1lfS0ke2lkfS0ke2tleX1gIDogYCR7bmFtZX0tJHtpZH1gO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2lkKSB7XG4gICAgdG8uX3hfaWQgPSBmcm9tLl94X2lkO1xuICB9XG59KTtcbmZ1bmN0aW9uIGNhY2hlSWRCeU5hbWVPbkVsZW1lbnQoZWwsIGNhY2hlS2V5LCBjbGVhbnVwMiwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbC5feF9pZClcbiAgICBlbC5feF9pZCA9IHt9O1xuICBpZiAoZWwuX3hfaWRbY2FjaGVLZXldKVxuICAgIHJldHVybiBlbC5feF9pZFtjYWNoZUtleV07XG4gIGxldCBvdXRwdXQgPSBjYWxsYmFjaygpO1xuICBlbC5feF9pZFtjYWNoZUtleV0gPSBvdXRwdXQ7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBkZWxldGUgZWwuX3hfaWRbY2FjaGVLZXldO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZWwuanNcbm1hZ2ljKFwiZWxcIiwgKGVsKSA9PiBlbCk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luTWFnaWMoXCJGb2N1c1wiLCBcImZvY3VzXCIsIFwiZm9jdXNcIik7XG53YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKFwiUGVyc2lzdFwiLCBcInBlcnNpc3RcIiwgXCJwZXJzaXN0XCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhuYW1lLCBtYWdpY05hbWUsIHNsdWcpIHtcbiAgbWFnaWMobWFnaWNOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgWyQke21hZ2ljTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWxhYmxlLmpzXG5kaXJlY3RpdmUoXCJtb2RlbGFibGVcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBmdW5jID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGxldCBpbm5lckdldCA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGZ1bmMoKGkpID0+IHJlc3VsdCA9IGkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGxldCBldmFsdWF0ZUlubmVyU2V0ID0gZXZhbHVhdGVMYXRlcjIoYCR7ZXhwcmVzc2lvbn0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gIGxldCBpbm5lclNldCA9ICh2YWwpID0+IGV2YWx1YXRlSW5uZXJTZXQoKCkgPT4ge1xuICB9LCB7IHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWwgfSB9KTtcbiAgbGV0IGluaXRpYWxWYWx1ZSA9IGlubmVyR2V0KCk7XG4gIGlubmVyU2V0KGluaXRpYWxWYWx1ZSk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpZiAoIWVsLl94X21vZGVsKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpO1xuICAgIGxldCBvdXRlckdldCA9IGVsLl94X21vZGVsLmdldDtcbiAgICBsZXQgb3V0ZXJTZXQgPSBlbC5feF9tb2RlbC5zZXQ7XG4gICAgbGV0IHJlbGVhc2VFbnRhbmdsZW1lbnQgPSBlbnRhbmdsZShcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBvdXRlckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvdXRlclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJHZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgaW5uZXJTZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBjbGVhbnVwMihyZWxlYXNlRW50YW5nbGVtZW50KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10ZWxlcG9ydC5qc1xuZGlyZWN0aXZlKFwidGVsZXBvcnRcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LXRlbGVwb3J0IGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCB0YXJnZXQgPSBnZXRUYXJnZXQoZXhwcmVzc2lvbik7XG4gIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgZWwuX3hfdGVsZXBvcnQgPSBjbG9uZTI7XG4gIGNsb25lMi5feF90ZWxlcG9ydEJhY2sgPSBlbDtcbiAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWxlcG9ydC10ZW1wbGF0ZVwiLCB0cnVlKTtcbiAgY2xvbmUyLnNldEF0dHJpYnV0ZShcImRhdGEtdGVsZXBvcnQtdGFyZ2V0XCIsIHRydWUpO1xuICBpZiAoZWwuX3hfZm9yd2FyZEV2ZW50cykge1xuICAgIGVsLl94X2ZvcndhcmRFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBjbG9uZTIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IGUuY29uc3RydWN0b3IoZS50eXBlLCBlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gIGxldCBwbGFjZUluRG9tID0gKGNsb25lMywgdGFyZ2V0MiwgbW9kaWZpZXJzMikgPT4ge1xuICAgIGlmIChtb2RpZmllcnMyLmluY2x1ZGVzKFwicHJlcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIpO1xuICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzMi5pbmNsdWRlcyhcImFwcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQyLmFwcGVuZENoaWxkKGNsb25lMyk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVEb20oKCkgPT4ge1xuICAgIHBsYWNlSW5Eb20oY2xvbmUyLCB0YXJnZXQsIG1vZGlmaWVycyk7XG4gICAgc2tpcER1cmluZ0Nsb25lKCgpID0+IHtcbiAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgfSkoKTtcbiAgfSk7XG4gIGVsLl94X3RlbGVwb3J0UHV0QmFjayA9ICgpID0+IHtcbiAgICBsZXQgdGFyZ2V0MiA9IGdldFRhcmdldChleHByZXNzaW9uKTtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgcGxhY2VJbkRvbShlbC5feF90ZWxlcG9ydCwgdGFyZ2V0MiwgbW9kaWZpZXJzKTtcbiAgICB9KTtcbiAgfTtcbiAgY2xlYW51cDIoXG4gICAgKCkgPT4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGNsb25lMi5yZW1vdmUoKTtcbiAgICAgIGRlc3Ryb3lUcmVlKGNsb25lMik7XG4gICAgfSlcbiAgKTtcbn0pO1xudmFyIHRlbGVwb3J0Q29udGFpbmVyRHVyaW5nQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pIHtcbiAgbGV0IHRhcmdldCA9IHNraXBEdXJpbmdDbG9uZSgoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXhwcmVzc2lvbik7XG4gIH0sICgpID0+IHtcbiAgICByZXR1cm4gdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZTtcbiAgfSkoKTtcbiAgaWYgKCF0YXJnZXQpXG4gICAgd2FybihgQ2Fubm90IGZpbmQgeC10ZWxlcG9ydCBlbGVtZW50IGZvciBzZWxlY3RvcjogXCIke2V4cHJlc3Npb259XCJgKTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZ25vcmUuanNcbnZhciBoYW5kbGVyID0gKCkgPT4ge1xufTtcbmhhbmRsZXIuaW5saW5lID0gKGVsLCB7IG1vZGlmaWVycyB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlIDogZWwuX3hfaWdub3JlID0gdHJ1ZTtcbiAgY2xlYW51cDIoKCkgPT4ge1xuICAgIG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikgPyBkZWxldGUgZWwuX3hfaWdub3JlU2VsZiA6IGRlbGV0ZSBlbC5feF9pZ25vcmU7XG4gIH0pO1xufTtcbmRpcmVjdGl2ZShcImlnbm9yZVwiLCBoYW5kbGVyKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1lZmZlY3QuanNcbmRpcmVjdGl2ZShcImVmZmVjdFwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4ge1xuICBlZmZlY3QzKGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uLmpzXG5mdW5jdGlvbiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgY2FsbGJhY2spIHtcbiAgbGV0IGxpc3RlbmVyVGFyZ2V0ID0gZWw7XG4gIGxldCBoYW5kbGVyNCA9IChlKSA9PiBjYWxsYmFjayhlKTtcbiAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgbGV0IHdyYXBIYW5kbGVyID0gKGNhbGxiYWNrMiwgd3JhcHBlcikgPT4gKGUpID0+IHdyYXBwZXIoY2FsbGJhY2syLCBlKTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRvdFwiKSlcbiAgICBldmVudCA9IGRvdFN5bnRheChldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSlcbiAgICBldmVudCA9IGNhbWVsQ2FzZTIoZXZlbnQpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicGFzc2l2ZVwiKSlcbiAgICBvcHRpb25zLnBhc3NpdmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FwdHVyZVwiKSlcbiAgICBvcHRpb25zLmNhcHR1cmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwid2luZG93XCIpKVxuICAgIGxpc3RlbmVyVGFyZ2V0ID0gd2luZG93O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG9jdW1lbnRcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSBkb2N1bWVudDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gZGVib3VuY2UoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBuZXh0TW9kaWZpZXIgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKSArIDFdIHx8IFwiaW52YWxpZC13YWl0XCI7XG4gICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pID8gTnVtYmVyKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA6IDI1MDtcbiAgICBoYW5kbGVyNCA9IHRocm90dGxlKGhhbmRsZXI0LCB3YWl0KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicHJldmVudFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInN0b3BcIikpXG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib25jZVwiKSkge1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBuZXh0KGUpO1xuICAgICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJhd2F5XCIpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dHNpZGVcIikpIHtcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZS50YXJnZXQuaXNDb25uZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZWwub2Zmc2V0V2lkdGggPCAxICYmIGVsLm9mZnNldEhlaWdodCA8IDEpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5feF9pc1Nob3duID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS50YXJnZXQgPT09IGVsICYmIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChpc0tleUV2ZW50KGV2ZW50KSB8fCBpc0NsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBsaXN0ZW5lclRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICB9O1xufVxuZnVuY3Rpb24gZG90U3ludGF4KHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvLS9nLCBcIi5cIik7XG59XG5mdW5jdGlvbiBjYW1lbENhc2UyKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZTIoc3ViamVjdCkge1xuICBpZiAoW1wiIFwiLCBcIl9cIl0uaW5jbHVkZXMoXG4gICAgc3ViamVjdFxuICApKVxuICAgIHJldHVybiBzdWJqZWN0O1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnJlcGxhY2UoL1tfXFxzXS8sIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gaXNLZXlFdmVudChldmVudCkge1xuICByZXR1cm4gW1wia2V5ZG93blwiLCBcImtleXVwXCJdLmluY2x1ZGVzKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIGlzQ2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gW1wiY29udGV4dG1lbnVcIiwgXCJjbGlja1wiLCBcIm1vdXNlXCJdLnNvbWUoKGkpID0+IGV2ZW50LmluY2x1ZGVzKGkpKTtcbn1cbmZ1bmN0aW9uIGlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQoZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBrZXlNb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpKSA9PiB7XG4gICAgcmV0dXJuICFbXCJ3aW5kb3dcIiwgXCJkb2N1bWVudFwiLCBcInByZXZlbnRcIiwgXCJzdG9wXCIsIFwib25jZVwiLCBcImNhcHR1cmVcIiwgXCJzZWxmXCIsIFwiYXdheVwiLCBcIm91dHNpZGVcIiwgXCJwYXNzaXZlXCJdLmluY2x1ZGVzKGkpO1xuICB9KTtcbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAxICYmIGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3lzdGVtS2V5TW9kaWZpZXJzID0gW1wiY3RybFwiLCBcInNoaWZ0XCIsIFwiYWx0XCIsIFwibWV0YVwiLCBcImNtZFwiLCBcInN1cGVyXCJdO1xuICBjb25zdCBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycyA9IHN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiBrZXlNb2RpZmllcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcbiAga2V5TW9kaWZpZXJzID0ga2V5TW9kaWZpZXJzLmZpbHRlcigoaSkgPT4gIXNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmluY2x1ZGVzKGkpKTtcbiAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMgPSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiY21kXCIgfHwgbW9kaWZpZXIgPT09IFwic3VwZXJcIilcbiAgICAgICAgbW9kaWZpZXIgPSBcIm1ldGFcIjtcbiAgICAgIHJldHVybiBlW2Ake21vZGlmaWVyfUtleWBdO1xuICAgIH0pO1xuICAgIGlmIChhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMubGVuZ3RoID09PSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc0NsaWNrRXZlbnQoZS50eXBlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24ga2V5VG9Nb2RpZmllcnMoa2V5KSB7XG4gIGlmICgha2V5KVxuICAgIHJldHVybiBbXTtcbiAga2V5ID0ga2ViYWJDYXNlMihrZXkpO1xuICBsZXQgbW9kaWZpZXJUb0tleU1hcCA9IHtcbiAgICBcImN0cmxcIjogXCJjb250cm9sXCIsXG4gICAgXCJzbGFzaFwiOiBcIi9cIixcbiAgICBcInNwYWNlXCI6IFwiIFwiLFxuICAgIFwic3BhY2ViYXJcIjogXCIgXCIsXG4gICAgXCJjbWRcIjogXCJtZXRhXCIsXG4gICAgXCJlc2NcIjogXCJlc2NhcGVcIixcbiAgICBcInVwXCI6IFwiYXJyb3ctdXBcIixcbiAgICBcImRvd25cIjogXCJhcnJvdy1kb3duXCIsXG4gICAgXCJsZWZ0XCI6IFwiYXJyb3ctbGVmdFwiLFxuICAgIFwicmlnaHRcIjogXCJhcnJvdy1yaWdodFwiLFxuICAgIFwicGVyaW9kXCI6IFwiLlwiLFxuICAgIFwiY29tbWFcIjogXCIsXCIsXG4gICAgXCJlcXVhbFwiOiBcIj1cIixcbiAgICBcIm1pbnVzXCI6IFwiLVwiLFxuICAgIFwidW5kZXJzY29yZVwiOiBcIl9cIlxuICB9O1xuICBtb2RpZmllclRvS2V5TWFwW2tleV0gPSBrZXk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb2RpZmllclRvS2V5TWFwKS5tYXAoKG1vZGlmaWVyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyVG9LZXlNYXBbbW9kaWZpZXJdID09PSBrZXkpXG4gICAgICByZXR1cm4gbW9kaWZpZXI7XG4gIH0pLmZpbHRlcigobW9kaWZpZXIpID0+IG1vZGlmaWVyKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbC5qc1xuZGlyZWN0aXZlKFwibW9kZWxcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgc2NvcGVUYXJnZXQgPSBlbDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhcmVudFwiKSkge1xuICAgIHNjb3BlVGFyZ2V0ID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuICBsZXQgZXZhbHVhdGVHZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlU2V0O1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICBldmFsdWF0ZVNldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGAke2V4cHJlc3Npb259ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cHJlc3Npb24oKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbigpfSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgfSBlbHNlIHtcbiAgICBldmFsdWF0ZVNldCA9ICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGxldCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUpO1xuICAgIHJldHVybiBpc0dldHRlclNldHRlcihyZXN1bHQpID8gcmVzdWx0LmdldCgpIDogcmVzdWx0O1xuICB9O1xuICBsZXQgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZTIpID0+IHJlc3VsdCA9IHZhbHVlMik7XG4gICAgaWYgKGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5zZXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmFsdWF0ZVNldCgoKSA9PiB7XG4gICAgICB9LCB7XG4gICAgICAgIHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWx1ZSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHZhciBldmVudCA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiB8fCBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdLmluY2x1ZGVzKGVsLnR5cGUpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImxhenlcIikgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiO1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBpc0Nsb25pbmcgPyAoKSA9PiB7XG4gIH0gOiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBzZXRWYWx1ZShnZXRJbnB1dFZhbHVlKGVsLCBtb2RpZmllcnMsIGUsIGdldFZhbHVlKCkpKTtcbiAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJmaWxsXCIpKSB7XG4gICAgaWYgKFt2b2lkIDAsIG51bGwsIFwiXCJdLmluY2x1ZGVzKGdldFZhbHVlKCkpIHx8IGlzQ2hlY2tib3goZWwpICYmIEFycmF5LmlzQXJyYXkoZ2V0VmFsdWUoKSkgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiICYmIGVsLm11bHRpcGxlKSB7XG4gICAgICBzZXRWYWx1ZShcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCB7IHRhcmdldDogZWwgfSwgZ2V0VmFsdWUoKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmICghZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMpXG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMgPSB7fTtcbiAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdID0gcmVtb3ZlTGlzdGVuZXI7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpKTtcbiAgaWYgKGVsLmZvcm0pIHtcbiAgICBsZXQgcmVtb3ZlUmVzZXRMaXN0ZW5lciA9IG9uKGVsLmZvcm0sIFwicmVzZXRcIiwgW10sIChlKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiBlbC5feF9tb2RlbCAmJiBlbC5feF9tb2RlbC5zZXQoZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCB7IHRhcmdldDogZWwgfSwgZ2V0VmFsdWUoKSkpKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwMigoKSA9PiByZW1vdmVSZXNldExpc3RlbmVyKCkpO1xuICB9XG4gIGVsLl94X21vZGVsID0ge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgpO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDAgJiYgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpXG4gICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgd2luZG93LmZyb21Nb2RlbCA9IHRydWU7XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIFwidmFsdWVcIiwgdmFsdWUpKTtcbiAgICBkZWxldGUgd2luZG93LmZyb21Nb2RlbDtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoKTtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidW5pbnRydXNpdmVcIikgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGVsKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlKHZhbHVlKTtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgZXZlbnQsIGN1cnJlbnRWYWx1ZSkge1xuICByZXR1cm4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMClcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwgIT09IG51bGwgJiYgZXZlbnQuZGV0YWlsICE9PSB2b2lkIDAgPyBldmVudC5kZXRhaWwgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgZWxzZSBpZiAoaXNDaGVja2JveChlbCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5pbmNsdWRlcyhuZXdWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBjdXJyZW50VmFsdWUuY29uY2F0KFtuZXdWYWx1ZV0pIDogY3VycmVudFZhbHVlLmZpbHRlcigoZWwyKSA9PiAhY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKGVsMiwgbmV3VmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzUmFkaW8oZWwpKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihuZXdWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4obmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0cmltXCIpKSB7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZS50cmltKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSkge1xuICBsZXQgbnVtYmVyID0gcmF3VmFsdWUgPyBwYXJzZUZsb2F0KHJhd1ZhbHVlKSA6IG51bGw7XG4gIHJldHVybiBpc051bWVyaWMyKG51bWJlcikgPyBudW1iZXIgOiByYXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMih2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzIoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuZnVuY3Rpb24gaXNHZXR0ZXJTZXR0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUuZ2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbHVlLnNldCA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWNsb2FrLmpzXG5kaXJlY3RpdmUoXCJjbG9ha1wiLCAoZWwpID0+IHF1ZXVlTWljcm90YXNrKCgpID0+IG11dGF0ZURvbSgoKSA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUocHJlZml4KFwiY2xvYWtcIikpKSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWluaXQuanNcbmFkZEluaXRTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiaW5pdFwiKX1dYCk7XG5kaXJlY3RpdmUoXCJpbml0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uLnRyaW0oKSAmJiBldmFsdWF0ZTIoZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gZXZhbHVhdGUyKGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdGV4dC5qc1xuZGlyZWN0aXZlKFwidGV4dFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1odG1sLmpzXG5kaXJlY3RpdmUoXCJodG1sXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICAgICAgICBpbml0VHJlZShlbCk7XG4gICAgICAgIGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtYmluZC5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCI6XCIsIGludG8ocHJlZml4KFwiYmluZDpcIikpKSk7XG52YXIgaGFuZGxlcjIgPSAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiwgb3JpZ2luYWwgfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGxldCBiaW5kaW5nUHJvdmlkZXJzID0ge307XG4gICAgaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhiaW5kaW5nUHJvdmlkZXJzKTtcbiAgICBsZXQgZ2V0QmluZGluZ3MgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgICBnZXRCaW5kaW5ncygoYmluZGluZ3MpID0+IHtcbiAgICAgIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGJpbmRpbmdzLCBvcmlnaW5hbCk7XG4gICAgfSwgeyBzY29wZTogYmluZGluZ1Byb3ZpZGVycyB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlID09PSBcImtleVwiKVxuICAgIHJldHVybiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pO1xuICBpZiAoZWwuX3hfaW5saW5lQmluZGluZ3MgJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXS5leHRyYWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSkge1xuICAgICAgcmVzdWx0ID0gXCJcIjtcbiAgICB9XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIHZhbHVlLCByZXN1bHQsIG1vZGlmaWVycykpO1xuICB9KSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBlbC5feF91bmRvQWRkZWRDbGFzc2VzICYmIGVsLl94X3VuZG9BZGRlZENsYXNzZXMoKTtcbiAgICBlbC5feF91bmRvQWRkZWRTdHlsZXMgJiYgZWwuX3hfdW5kb0FkZGVkU3R5bGVzKCk7XG4gIH0pO1xufTtcbmhhbmRsZXIyLmlubGluZSA9IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm47XG4gIGlmICghZWwuX3hfaW5saW5lQmluZGluZ3MpXG4gICAgZWwuX3hfaW5saW5lQmluZGluZ3MgPSB7fTtcbiAgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdID0geyBleHByZXNzaW9uLCBleHRyYWN0OiBmYWxzZSB9O1xufTtcbmRpcmVjdGl2ZShcImJpbmRcIiwgaGFuZGxlcjIpO1xuZnVuY3Rpb24gc3RvcmVLZXlGb3JYRm9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGVsLl94X2tleUV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWRhdGEuanNcbmFkZFJvb3RTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiZGF0YVwiKX1dYCk7XG5kaXJlY3RpdmUoXCJkYXRhXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoc2hvdWxkU2tpcFJlZ2lzdGVyaW5nRGF0YUR1cmluZ0Nsb25lKGVsKSlcbiAgICByZXR1cm47XG4gIGV4cHJlc3Npb24gPSBleHByZXNzaW9uID09PSBcIlwiID8gXCJ7fVwiIDogZXhwcmVzc2lvbjtcbiAgbGV0IG1hZ2ljQ29udGV4dCA9IHt9O1xuICBpbmplY3RNYWdpY3MobWFnaWNDb250ZXh0LCBlbCk7XG4gIGxldCBkYXRhUHJvdmlkZXJDb250ZXh0ID0ge307XG4gIGluamVjdERhdGFQcm92aWRlcnMoZGF0YVByb3ZpZGVyQ29udGV4dCwgbWFnaWNDb250ZXh0KTtcbiAgbGV0IGRhdGEyID0gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIHsgc2NvcGU6IGRhdGFQcm92aWRlckNvbnRleHQgfSk7XG4gIGlmIChkYXRhMiA9PT0gdm9pZCAwIHx8IGRhdGEyID09PSB0cnVlKVxuICAgIGRhdGEyID0ge307XG4gIGluamVjdE1hZ2ljcyhkYXRhMiwgZWwpO1xuICBsZXQgcmVhY3RpdmVEYXRhID0gcmVhY3RpdmUoZGF0YTIpO1xuICBpbml0SW50ZXJjZXB0b3JzKHJlYWN0aXZlRGF0YSk7XG4gIGxldCB1bmRvID0gYWRkU2NvcGVUb05vZGUoZWwsIHJlYWN0aXZlRGF0YSk7XG4gIHJlYWN0aXZlRGF0YVtcImluaXRcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImluaXRcIl0pO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSk7XG4gICAgdW5kbygpO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2RhdGFTdGFjaykge1xuICAgIHRvLl94X2RhdGFTdGFjayA9IGZyb20uX3hfZGF0YVN0YWNrO1xuICAgIHRvLnNldEF0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiLCB0cnVlKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpIHtcbiAgaWYgKCFpc0Nsb25pbmcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoaXNDbG9uaW5nTGVnYWN5KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1oYXMtYWxwaW5lLXN0YXRlXCIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXNob3cuanNcbmRpcmVjdGl2ZShcInNob3dcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKCFlbC5feF9kb0hpZGUpXG4gICAgZWwuX3hfZG9IaWRlID0gKCkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiLCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpbXBvcnRhbnRcIikgPyBcImltcG9ydGFudFwiIDogdm9pZCAwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIGlmICghZWwuX3hfZG9TaG93KVxuICAgIGVsLl94X2RvU2hvdyA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGVsLl94X2RvSGlkZSgpO1xuICAgIGVsLl94X2lzU2hvd24gPSBmYWxzZTtcbiAgfTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgZWwuX3hfZG9TaG93KCk7XG4gICAgZWwuX3hfaXNTaG93biA9IHRydWU7XG4gIH07XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHNldFRpbWVvdXQoc2hvdyk7XG4gIGxldCB0b2dnbGUgPSBvbmNlKFxuICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBzaG93KCkgOiBoaWRlKCksXG4gICAgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBpZiAoIWZpcnN0VGltZSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImltbWVkaWF0ZVwiKSlcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB0b2dnbGUodmFsdWUpO1xuICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWZvci5qc1xuZGlyZWN0aXZlKFwiZm9yXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBpdGVyYXRvck5hbWVzID0gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVJdGVtcyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMpO1xuICBsZXQgZXZhbHVhdGVLZXkgPSBldmFsdWF0ZUxhdGVyKFxuICAgIGVsLFxuICAgIC8vIHRoZSB4LWJpbmQ6a2V5IGV4cHJlc3Npb24gaXMgc3RvcmVkIGZvciBvdXIgdXNlIGluc3RlYWQgb2YgZXZhbHVhdGVkLlxuICAgIGVsLl94X2tleUV4cHJlc3Npb24gfHwgXCJpbmRleFwiXG4gICk7XG4gIGVsLl94X3ByZXZLZXlzID0gW107XG4gIGVsLl94X2xvb2t1cCA9IHt9O1xuICBlZmZlY3QzKCgpID0+IGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBPYmplY3QudmFsdWVzKGVsLl94X2xvb2t1cCkuZm9yRWFjaCgoZWwyKSA9PiBtdXRhdGVEb20oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGRlc3Ryb3lUcmVlKGVsMik7XG4gICAgICAgIGVsMi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICApKTtcbiAgICBkZWxldGUgZWwuX3hfcHJldktleXM7XG4gICAgZGVsZXRlIGVsLl94X2xvb2t1cDtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSB7XG4gIGxldCBpc09iamVjdDIgPSAoaSkgPT4gdHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaSk7XG4gIGxldCB0ZW1wbGF0ZUVsID0gZWw7XG4gIGV2YWx1YXRlSXRlbXMoKGl0ZW1zKSA9PiB7XG4gICAgaWYgKGlzTnVtZXJpYzMoaXRlbXMpICYmIGl0ZW1zID49IDApIHtcbiAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShBcnJheShpdGVtcykua2V5cygpLCAoaSkgPT4gaSArIDEpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMgPT09IHZvaWQgMClcbiAgICAgIGl0ZW1zID0gW107XG4gICAgbGV0IGxvb2t1cCA9IGVsLl94X2xvb2t1cDtcbiAgICBsZXQgcHJldktleXMgPSBlbC5feF9wcmV2S2V5cztcbiAgICBsZXQgc2NvcGVzID0gW107XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBpZiAoaXNPYmplY3QyKGl0ZW1zKSkge1xuICAgICAgaXRlbXMgPSBPYmplY3QuZW50cmllcyhpdGVtcykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgbGV0IHNjb3BlMiA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIHZhbHVlLCBrZXksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlMikgPT4ge1xuICAgICAgICAgIGlmIChrZXlzLmluY2x1ZGVzKHZhbHVlMikpXG4gICAgICAgICAgICB3YXJuKFwiRHVwbGljYXRlIGtleSBvbiB4LWZvclwiLCBlbCk7XG4gICAgICAgICAga2V5cy5wdXNoKHZhbHVlMik7XG4gICAgICAgIH0sIHsgc2NvcGU6IHsgaW5kZXg6IGtleSwgLi4uc2NvcGUyIH0gfSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlMik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2NvcGUyID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbXNbaV0sIGksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXModmFsdWUpKVxuICAgICAgICAgICAgd2FybihcIkR1cGxpY2F0ZSBrZXkgb24geC1mb3JcIiwgZWwpO1xuICAgICAgICAgIGtleXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0sIHsgc2NvcGU6IHsgaW5kZXg6IGksIC4uLnNjb3BlMiB9IH0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZTIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYWRkcyA9IFtdO1xuICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgIGxldCByZW1vdmVzID0gW107XG4gICAgbGV0IHNhbWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHByZXZLZXlzW2ldO1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICAgICAgcmVtb3Zlcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHByZXZLZXlzID0gcHJldktleXMuZmlsdGVyKChrZXkpID0+ICFyZW1vdmVzLmluY2x1ZGVzKGtleSkpO1xuICAgIGxldCBsYXN0S2V5ID0gXCJ0ZW1wbGF0ZVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgcHJldkluZGV4ID0gcHJldktleXMuaW5kZXhPZihrZXkpO1xuICAgICAgaWYgKHByZXZJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKGksIDAsIGtleSk7XG4gICAgICAgIGFkZHMucHVzaChbbGFzdEtleSwgaV0pO1xuICAgICAgfSBlbHNlIGlmIChwcmV2SW5kZXggIT09IGkpIHtcbiAgICAgICAgbGV0IGtleUluU3BvdCA9IHByZXZLZXlzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgbGV0IGtleUZvclNwb3QgPSBwcmV2S2V5cy5zcGxpY2UocHJldkluZGV4IC0gMSwgMSlbMF07XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXlGb3JTcG90KTtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKHByZXZJbmRleCwgMCwga2V5SW5TcG90KTtcbiAgICAgICAgbW92ZXMucHVzaChba2V5SW5TcG90LCBrZXlGb3JTcG90XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1lcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgICBsYXN0S2V5ID0ga2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSByZW1vdmVzW2ldO1xuICAgICAgaWYgKCEoa2V5IGluIGxvb2t1cCkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZGVzdHJveVRyZWUobG9va3VwW2tleV0pO1xuICAgICAgICBsb29rdXBba2V5XS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIGxvb2t1cFtrZXldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2tleUluU3BvdCwga2V5Rm9yU3BvdF0gPSBtb3Zlc1tpXTtcbiAgICAgIGxldCBlbEluU3BvdCA9IGxvb2t1cFtrZXlJblNwb3RdO1xuICAgICAgbGV0IGVsRm9yU3BvdCA9IGxvb2t1cFtrZXlGb3JTcG90XTtcbiAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgaWYgKCFlbEZvclNwb3QpXG4gICAgICAgICAgd2FybihgeC1mb3IgXCI6a2V5XCIgaXMgdW5kZWZpbmVkIG9yIGludmFsaWRgLCB0ZW1wbGF0ZUVsLCBrZXlGb3JTcG90LCBsb29rdXApO1xuICAgICAgICBlbEZvclNwb3QuYWZ0ZXIobWFya2VyKTtcbiAgICAgICAgZWxJblNwb3QuYWZ0ZXIoZWxGb3JTcG90KTtcbiAgICAgICAgZWxGb3JTcG90Ll94X2N1cnJlbnRJZkVsICYmIGVsRm9yU3BvdC5hZnRlcihlbEZvclNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIuYmVmb3JlKGVsSW5TcG90KTtcbiAgICAgICAgZWxJblNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxJblNwb3QuYWZ0ZXIoZWxJblNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGVsRm9yU3BvdC5feF9yZWZyZXNoWEZvclNjb3BlKHNjb3Blc1trZXlzLmluZGV4T2Yoa2V5Rm9yU3BvdCldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2xhc3RLZXkyLCBpbmRleF0gPSBhZGRzW2ldO1xuICAgICAgbGV0IGxhc3RFbCA9IGxhc3RLZXkyID09PSBcInRlbXBsYXRlXCIgPyB0ZW1wbGF0ZUVsIDogbG9va3VwW2xhc3RLZXkyXTtcbiAgICAgIGlmIChsYXN0RWwuX3hfY3VycmVudElmRWwpXG4gICAgICAgIGxhc3RFbCA9IGxhc3RFbC5feF9jdXJyZW50SWZFbDtcbiAgICAgIGxldCBzY29wZTIgPSBzY29wZXNbaW5kZXhdO1xuICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgbGV0IGNsb25lMiA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGxldCByZWFjdGl2ZVNjb3BlID0gcmVhY3RpdmUoc2NvcGUyKTtcbiAgICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwgcmVhY3RpdmVTY29wZSwgdGVtcGxhdGVFbCk7XG4gICAgICBjbG9uZTIuX3hfcmVmcmVzaFhGb3JTY29wZSA9IChuZXdTY29wZSkgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhuZXdTY29wZSkuZm9yRWFjaCgoW2tleTIsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIHJlYWN0aXZlU2NvcGVba2V5Ml0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgbGFzdEVsLmFmdGVyKGNsb25lMik7XG4gICAgICAgIHNraXBEdXJpbmdDbG9uZSgoKSA9PiBpbml0VHJlZShjbG9uZTIpKSgpO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB3YXJuKFwieC1mb3Iga2V5IGNhbm5vdCBiZSBhbiBvYmplY3QsIGl0IG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gaW50ZWdlclwiLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIH1cbiAgICAgIGxvb2t1cFtrZXldID0gY2xvbmUyO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsb29rdXBbc2FtZXNbaV1dLl94X3JlZnJlc2hYRm9yU2NvcGUoc2NvcGVzW2tleXMuaW5kZXhPZihzYW1lc1tpXSldKTtcbiAgICB9XG4gICAgdGVtcGxhdGVFbC5feF9wcmV2S2V5cyA9IGtleXM7XG4gIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgbGV0IGZvckl0ZXJhdG9yUkUgPSAvLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC87XG4gIGxldCBzdHJpcFBhcmVuc1JFID0gL15cXHMqXFwofFxcKVxccyokL2c7XG4gIGxldCBmb3JBbGlhc1JFID0gLyhbXFxzXFxTXSo/KVxccysoPzppbnxvZilcXHMrKFtcXHNcXFNdKikvO1xuICBsZXQgaW5NYXRjaCA9IGV4cHJlc3Npb24ubWF0Y2goZm9yQWxpYXNSRSk7XG4gIGlmICghaW5NYXRjaClcbiAgICByZXR1cm47XG4gIGxldCByZXMgPSB7fTtcbiAgcmVzLml0ZW1zID0gaW5NYXRjaFsyXS50cmltKCk7XG4gIGxldCBpdGVtID0gaW5NYXRjaFsxXS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsIFwiXCIpLnRyaW0oKTtcbiAgbGV0IGl0ZXJhdG9yTWF0Y2ggPSBpdGVtLm1hdGNoKGZvckl0ZXJhdG9yUkUpO1xuICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgIHJlcy5pdGVtID0gaXRlbS5yZXBsYWNlKGZvckl0ZXJhdG9yUkUsIFwiXCIpLnRyaW0oKTtcbiAgICByZXMuaW5kZXggPSBpdGVyYXRvck1hdGNoWzFdLnRyaW0oKTtcbiAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgcmVzLmNvbGxlY3Rpb24gPSBpdGVyYXRvck1hdGNoWzJdLnRyaW0oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtLCBpbmRleCwgaXRlbXMpIHtcbiAgbGV0IHNjb3BlVmFyaWFibGVzID0ge307XG4gIGlmICgvXlxcWy4qXFxdJC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmIEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIltcIiwgXCJcIikucmVwbGFjZShcIl1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtpXTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgvXlxcey4qXFx9JC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IG5hbWVzID0gaXRlcmF0b3JOYW1lcy5pdGVtLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoKGkpID0+IGkudHJpbSgpKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBzY29wZVZhcmlhYmxlc1tuYW1lXSA9IGl0ZW1bbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pdGVtXSA9IGl0ZW07XG4gIH1cbiAgaWYgKGl0ZXJhdG9yTmFtZXMuaW5kZXgpXG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pbmRleF0gPSBpbmRleDtcbiAgaWYgKGl0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbilcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb25dID0gaXRlbXM7XG4gIHJldHVybiBzY29wZVZhcmlhYmxlcztcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXJlZi5qc1xuZnVuY3Rpb24gaGFuZGxlcjMoKSB7XG59XG5oYW5kbGVyMy5pbmxpbmUgPSAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IHJvb3QgPSBjbG9zZXN0Um9vdChlbCk7XG4gIGlmICghcm9vdC5feF9yZWZzKVxuICAgIHJvb3QuX3hfcmVmcyA9IHt9O1xuICByb290Ll94X3JlZnNbZXhwcmVzc2lvbl0gPSBlbDtcbiAgY2xlYW51cDIoKCkgPT4gZGVsZXRlIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSk7XG59O1xuZGlyZWN0aXZlKFwicmVmXCIsIGhhbmRsZXIzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZi5qc1xuZGlyZWN0aXZlKFwiaWZcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LWlmIGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2N1cnJlbnRJZkVsKVxuICAgICAgcmV0dXJuIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGVsLmFmdGVyKGNsb25lMik7XG4gICAgICBza2lwRHVyaW5nQ2xvbmUoKCkgPT4gaW5pdFRyZWUoY2xvbmUyKSkoKTtcbiAgICB9KTtcbiAgICBlbC5feF9jdXJyZW50SWZFbCA9IGNsb25lMjtcbiAgICBlbC5feF91bmRvSWYgPSAoKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBkZXN0cm95VHJlZShjbG9uZTIpO1xuICAgICAgICBjbG9uZTIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBlbC5feF9jdXJyZW50SWZFbDtcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZTI7XG4gIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGlmICghZWwuX3hfdW5kb0lmKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3VuZG9JZigpO1xuICAgIGRlbGV0ZSBlbC5feF91bmRvSWY7XG4gIH07XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlID8gc2hvdygpIDogaGlkZSgpO1xuICB9KSk7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3VuZG9JZiAmJiBlbC5feF91bmRvSWYoKSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZC5qc1xuZGlyZWN0aXZlKFwiaWRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgbGV0IG5hbWVzID0gZXZhbHVhdGUyKGV4cHJlc3Npb24pO1xuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBzZXRJZFJvb3QoZWwsIG5hbWUpKTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2lkcykge1xuICAgIHRvLl94X2lkcyA9IGZyb20uX3hfaWRzO1xuICB9XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1vbi5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCJAXCIsIGludG8ocHJlZml4KFwib246XCIpKSkpO1xuZGlyZWN0aXZlKFwib25cIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXhwcmVzc2lvbiA/IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pIDogKCkgPT4ge1xuICB9O1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRlbXBsYXRlXCIpIHtcbiAgICBpZiAoIWVsLl94X2ZvcndhcmRFdmVudHMpXG4gICAgICBlbC5feF9mb3J3YXJkRXZlbnRzID0gW107XG4gICAgaWYgKCFlbC5feF9mb3J3YXJkRXZlbnRzLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIGVsLl94X2ZvcndhcmRFdmVudHMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgbGV0IHJlbW92ZUxpc3RlbmVyID0gb24oZWwsIHZhbHVlLCBtb2RpZmllcnMsIChlKSA9PiB7XG4gICAgZXZhbHVhdGUyKCgpID0+IHtcbiAgICB9LCB7IHNjb3BlOiB7IFwiJGV2ZW50XCI6IGUgfSwgcGFyYW1zOiBbZV0gfSk7XG4gIH0pO1xuICBjbGVhbnVwMigoKSA9PiByZW1vdmVMaXN0ZW5lcigpKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiQ29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiLCBcImNvbGxhcHNlXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJJbnRlcnNlY3RcIiwgXCJpbnRlcnNlY3RcIiwgXCJpbnRlcnNlY3RcIik7XG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkZvY3VzXCIsIFwidHJhcFwiLCBcImZvY3VzXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJNYXNrXCIsIFwibWFza1wiLCBcIm1hc2tcIik7XG5mdW5jdGlvbiB3YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmVOYW1lLCBzbHVnKSB7XG4gIGRpcmVjdGl2ZShkaXJlY3RpdmVOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgW3gtJHtkaXJlY3RpdmVOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7bmFtZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3NsdWd9YCwgZWwpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2luZGV4LmpzXG5hbHBpbmVfZGVmYXVsdC5zZXRFdmFsdWF0b3Iobm9ybWFsRXZhbHVhdG9yKTtcbmFscGluZV9kZWZhdWx0LnNldFJlYWN0aXZpdHlFbmdpbmUoeyByZWFjdGl2ZTogcmVhY3RpdmUyLCBlZmZlY3Q6IGVmZmVjdDIsIHJlbGVhc2U6IHN0b3AsIHJhdzogdG9SYXcgfSk7XG52YXIgc3JjX2RlZmF1bHQgPSBhbHBpbmVfZGVmYXVsdDtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBzcmNfZGVmYXVsdCBhcyBBbHBpbmUsXG4gIG1vZHVsZV9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCAidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbnZhciBfX2NvbW1vbkpTID0gKGNhbGxiYWNrLCBtb2R1bGUpID0+ICgpID0+IHtcbiAgaWYgKCFtb2R1bGUpIHtcbiAgICBtb2R1bGUgPSB7ZXhwb3J0czoge319O1xuICAgIGNhbGxiYWNrKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUpO1xuICB9XG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn07XG52YXIgX19leHBvcnRTdGFyID0gKHRhcmdldCwgbW9kdWxlLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodGFyZ2V0LCBrZXkpICYmIGtleSAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwge2dldDogKCkgPT4gbW9kdWxlW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MobW9kdWxlLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGV9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX3RvTW9kdWxlID0gKG1vZHVsZSkgPT4ge1xuICByZXR1cm4gX19leHBvcnRTdGFyKF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2R1bGUpKSA6IHt9LCBcImRlZmF1bHRcIiwgbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlICYmIFwiZGVmYXVsdFwiIGluIG1vZHVsZSA/IHtnZXQ6ICgpID0+IG1vZHVsZS5kZWZhdWx0LCBlbnVtZXJhYmxlOiB0cnVlfSA6IHt2YWx1ZTogbW9kdWxlLCBlbnVtZXJhYmxlOiB0cnVlfSkpLCBtb2R1bGUpO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcbnZhciByZXF1aXJlX21vdXNldHJhcCA9IF9fY29tbW9uSlMoKGV4cG9ydHMsIG1vZHVsZSkgPT4ge1xuICAoZnVuY3Rpb24od2luZG93MiwgZG9jdW1lbnQyLCB1bmRlZmluZWQyKSB7XG4gICAgaWYgKCF3aW5kb3cyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBfTUFQID0ge1xuICAgICAgODogXCJiYWNrc3BhY2VcIixcbiAgICAgIDk6IFwidGFiXCIsXG4gICAgICAxMzogXCJlbnRlclwiLFxuICAgICAgMTY6IFwic2hpZnRcIixcbiAgICAgIDE3OiBcImN0cmxcIixcbiAgICAgIDE4OiBcImFsdFwiLFxuICAgICAgMjA6IFwiY2Fwc2xvY2tcIixcbiAgICAgIDI3OiBcImVzY1wiLFxuICAgICAgMzI6IFwic3BhY2VcIixcbiAgICAgIDMzOiBcInBhZ2V1cFwiLFxuICAgICAgMzQ6IFwicGFnZWRvd25cIixcbiAgICAgIDM1OiBcImVuZFwiLFxuICAgICAgMzY6IFwiaG9tZVwiLFxuICAgICAgMzc6IFwibGVmdFwiLFxuICAgICAgMzg6IFwidXBcIixcbiAgICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgICA0MDogXCJkb3duXCIsXG4gICAgICA0NTogXCJpbnNcIixcbiAgICAgIDQ2OiBcImRlbFwiLFxuICAgICAgOTE6IFwibWV0YVwiLFxuICAgICAgOTM6IFwibWV0YVwiLFxuICAgICAgMjI0OiBcIm1ldGFcIlxuICAgIH07XG4gICAgdmFyIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgIDEwNjogXCIqXCIsXG4gICAgICAxMDc6IFwiK1wiLFxuICAgICAgMTA5OiBcIi1cIixcbiAgICAgIDExMDogXCIuXCIsXG4gICAgICAxMTE6IFwiL1wiLFxuICAgICAgMTg2OiBcIjtcIixcbiAgICAgIDE4NzogXCI9XCIsXG4gICAgICAxODg6IFwiLFwiLFxuICAgICAgMTg5OiBcIi1cIixcbiAgICAgIDE5MDogXCIuXCIsXG4gICAgICAxOTE6IFwiL1wiLFxuICAgICAgMTkyOiBcImBcIixcbiAgICAgIDIxOTogXCJbXCIsXG4gICAgICAyMjA6IFwiXFxcXFwiLFxuICAgICAgMjIxOiBcIl1cIixcbiAgICAgIDIyMjogXCInXCJcbiAgICB9O1xuICAgIHZhciBfU0hJRlRfTUFQID0ge1xuICAgICAgXCJ+XCI6IFwiYFwiLFxuICAgICAgXCIhXCI6IFwiMVwiLFxuICAgICAgXCJAXCI6IFwiMlwiLFxuICAgICAgXCIjXCI6IFwiM1wiLFxuICAgICAgJDogXCI0XCIsXG4gICAgICBcIiVcIjogXCI1XCIsXG4gICAgICBcIl5cIjogXCI2XCIsXG4gICAgICBcIiZcIjogXCI3XCIsXG4gICAgICBcIipcIjogXCI4XCIsXG4gICAgICBcIihcIjogXCI5XCIsXG4gICAgICBcIilcIjogXCIwXCIsXG4gICAgICBfOiBcIi1cIixcbiAgICAgIFwiK1wiOiBcIj1cIixcbiAgICAgIFwiOlwiOiBcIjtcIixcbiAgICAgICdcIic6IFwiJ1wiLFxuICAgICAgXCI8XCI6IFwiLFwiLFxuICAgICAgXCI+XCI6IFwiLlwiLFxuICAgICAgXCI/XCI6IFwiL1wiLFxuICAgICAgXCJ8XCI6IFwiXFxcXFwiXG4gICAgfTtcbiAgICB2YXIgX1NQRUNJQUxfQUxJQVNFUyA9IHtcbiAgICAgIG9wdGlvbjogXCJhbHRcIixcbiAgICAgIGNvbW1hbmQ6IFwibWV0YVwiLFxuICAgICAgcmV0dXJuOiBcImVudGVyXCIsXG4gICAgICBlc2NhcGU6IFwiZXNjXCIsXG4gICAgICBwbHVzOiBcIitcIixcbiAgICAgIG1vZDogL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyBcIm1ldGFcIiA6IFwiY3RybFwiXG4gICAgfTtcbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgX01BUFsxMTEgKyBpXSA9IFwiZlwiICsgaTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcbiAgICAgIF9NQVBbaSArIDk2XSA9IGkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvYmplY3QuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcbiAgICAgIGlmIChlLnR5cGUgPT0gXCJrZXlwcmVzc1wiKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgfVxuICAgICAgaWYgKF9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICB9XG4gICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyczEuc29ydCgpLmpvaW4oXCIsXCIpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKFwiLFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcbiAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIG1vZGlmaWVycy5wdXNoKFwic2hpZnRcIik7XG4gICAgICB9XG4gICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goXCJhbHRcIik7XG4gICAgICB9XG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgIG1vZGlmaWVycy5wdXNoKFwiY3RybFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goXCJtZXRhXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGlmaWVycztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgcmV0dXJuIGtleSA9PSBcInNoaWZ0XCIgfHwga2V5ID09IFwiY3RybFwiIHx8IGtleSA9PSBcImFsdFwiIHx8IGtleSA9PSBcIm1ldGFcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldFJldmVyc2VNYXAoKSB7XG4gICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICBfUkVWRVJTRV9NQVAgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcbiAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9NQVAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gXCJrZXlkb3duXCIgOiBcImtleXByZXNzXCI7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uID09IFwia2V5cHJlc3NcIiAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbiA9IFwia2V5ZG93blwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKSB7XG4gICAgICBpZiAoY29tYmluYXRpb24gPT09IFwiK1wiKSB7XG4gICAgICAgIHJldHVybiBbXCIrXCJdO1xuICAgICAgfVxuICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXCt7Mn0vZywgXCIrcGx1c1wiKTtcbiAgICAgIHJldHVybiBjb21iaW5hdGlvbi5zcGxpdChcIitcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgIHZhciBrZXlzO1xuICAgICAgdmFyIGtleTtcbiAgICAgIHZhciBpMjtcbiAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcbiAgICAgIGtleXMgPSBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pO1xuICAgICAgZm9yIChpMiA9IDA7IGkyIDwga2V5cy5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAga2V5ID0ga2V5c1tpMl07XG4gICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24gIT0gXCJrZXlwcmVzc1wiICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICBtb2RpZmllcnMucHVzaChcInNoaWZ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgIGFjdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2JlbG9uZ3NUbyhlbGVtZW50LCBhbmNlc3Rvcikge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYmVsb25nc1RvKGVsZW1lbnQucGFyZW50Tm9kZSwgYW5jZXN0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBNb3VzZXRyYXAzKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50MjtcbiAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXAzKSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcDModGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzZWxmLnRhcmdldCA9IHRhcmdldEVsZW1lbnQ7XG4gICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuICAgICAgdmFyIF9zZXF1ZW5jZUxldmVscyA9IHt9O1xuICAgICAgdmFyIF9yZXNldFRpbWVyO1xuICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcbiAgICAgIHZhciBfaWdub3JlTmV4dEtleXByZXNzID0gZmFsc2U7XG4gICAgICB2YXIgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgZG9Ob3RSZXNldCA9IGRvTm90UmVzZXQgfHwge307XG4gICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZXMgPSBmYWxzZSwga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICBhY3RpdmVTZXF1ZW5jZXMgPSB0cnVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1trZXldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFjdGl2ZVNlcXVlbmNlcykge1xuICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUsIHNlcXVlbmNlTmFtZSwgY29tYmluYXRpb24sIGxldmVsKSB7XG4gICAgICAgIHZhciBpMjtcbiAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICB2YXIgYWN0aW9uID0gZS50eXBlO1xuICAgICAgICBpZiAoIXNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJrZXl1cFwiICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkyID0gMDsgaTIgPCBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXS5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2kyXTtcbiAgICAgICAgICBpZiAoIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlTGV2ZWxzW2NhbGxiYWNrLnNlcV0gIT0gY2FsbGJhY2subGV2ZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9uICE9IGNhbGxiYWNrLmFjdGlvbikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb24gPT0gXCJrZXlwcmVzc1wiICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSB8fCBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzLCBjYWxsYmFjay5tb2RpZmllcnMpKSB7XG4gICAgICAgICAgICB2YXIgZGVsZXRlQ29tYm8gPSAhc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmNvbWJvID09IGNvbWJpbmF0aW9uO1xuICAgICAgICAgICAgdmFyIGRlbGV0ZVNlcXVlbmNlID0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSA9PSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2subGV2ZWwgPT0gbGV2ZWw7XG4gICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGkyLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8sIHNlcXVlbmNlKSB7XG4gICAgICAgIGlmIChzZWxmLnN0b3BDYWxsYmFjayhlLCBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsIGNvbWJvLCBzZXF1ZW5jZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5faGFuZGxlS2V5ID0gZnVuY3Rpb24oY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKTtcbiAgICAgICAgdmFyIGkyO1xuICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICB2YXIgbWF4TGV2ZWwgPSAwO1xuICAgICAgICB2YXIgcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICBmb3IgKGkyID0gMDsgaTIgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kyKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrc1tpMl0uc2VxKSB7XG4gICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCBjYWxsYmFja3NbaTJdLmxldmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpMiA9IDA7IGkyIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpMikge1xuICAgICAgICAgIGlmIChjYWxsYmFja3NbaTJdLnNlcSkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpMl0ubGV2ZWwgIT0gbWF4TGV2ZWwpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvTm90UmVzZXRbY2FsbGJhY2tzW2kyXS5zZXFdID0gMTtcbiAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2tzW2kyXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2kyXS5jb21ibywgY2FsbGJhY2tzW2kyXS5zZXEpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjaykge1xuICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaTJdLmNhbGxiYWNrLCBlLCBjYWxsYmFja3NbaTJdLmNvbWJvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlnbm9yZVRoaXNLZXlwcmVzcyA9IGUudHlwZSA9PSBcImtleXByZXNzXCIgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgaWYgKGUudHlwZSA9PSBfbmV4dEV4cGVjdGVkQWN0aW9uICYmICFfaXNNb2RpZmllcihjaGFyYWN0ZXIpICYmICFpZ25vcmVUaGlzS2V5cHJlc3MpIHtcbiAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCk7XG4gICAgICAgIH1cbiAgICAgICAgX2lnbm9yZU5leHRLZXlwcmVzcyA9IHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgJiYgZS50eXBlID09IFwia2V5ZG93blwiO1xuICAgICAgfTtcbiAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZS53aGljaCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGUud2hpY2ggPSBlLmtleUNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnR5cGUgPT0gXCJrZXl1cFwiICYmIF9pZ25vcmVOZXh0S2V5dXAgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICAgIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF9yZXNldFRpbWVyKTtcbiAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMWUzKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXSA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gbmV4dEFjdGlvbjtcbiAgICAgICAgICAgICsrX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXTtcbiAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9jYWxsYmFja0FuZFJlc2V0KGUpIHtcbiAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlLCBjb21ibyk7XG4gICAgICAgICAgaWYgKGFjdGlvbiAhPT0gXCJrZXl1cFwiKSB7XG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwga2V5cy5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkyICsgMSA9PT0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgdmFyIHdyYXBwZWRDYWxsYmFjayA9IGlzRmluYWwgPyBfY2FsbGJhY2tBbmRSZXNldCA6IF9pbmNyZWFzZVNlcXVlbmNlKGFjdGlvbiB8fCBfZ2V0S2V5SW5mbyhrZXlzW2kyICsgMV0pLmFjdGlvbik7XG4gICAgICAgICAgX2JpbmRTaW5nbGUoa2V5c1tpMl0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfYmluZFNpbmdsZShjb21iaW5hdGlvbiwgY2FsbGJhY2ssIGFjdGlvbiwgc2VxdWVuY2VOYW1lLCBsZXZlbCkge1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyBcIjpcIiArIGFjdGlvbl0gPSBjYWxsYmFjaztcbiAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgaW5mbztcbiAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluZm8gPSBfZ2V0S2V5SW5mbyhjb21iaW5hdGlvbiwgYWN0aW9uKTtcbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG4gICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKHtcbiAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2VsZi5fYmluZE11bHRpcGxlID0gZnVuY3Rpb24oY29tYmluYXRpb25zLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBjb21iaW5hdGlvbnMubGVuZ3RoOyArK2kyKSB7XG4gICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2kyXSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgXCJrZXlwcmVzc1wiLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsIFwia2V5ZG93blwiLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsIFwia2V5dXBcIiwgX2hhbmRsZUtleUV2ZW50KTtcbiAgICB9XG4gICAgTW91c2V0cmFwMy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGtleXMgPSBrZXlzIGluc3RhbmNlb2YgQXJyYXkgPyBrZXlzIDogW2tleXNdO1xuICAgICAgc2VsZi5fYmluZE11bHRpcGxlLmNhbGwoc2VsZiwga2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIE1vdXNldHJhcDMucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIHNlbGYuYmluZC5jYWxsKHNlbGYsIGtleXMsIGZ1bmN0aW9uKCkge1xuICAgICAgfSwgYWN0aW9uKTtcbiAgICB9O1xuICAgIE1vdXNldHJhcDMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArIFwiOlwiICsgYWN0aW9uXSkge1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXBba2V5cyArIFwiOlwiICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIE1vdXNldHJhcDMucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBNb3VzZXRyYXAzLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAoKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBtb3VzZXRyYXAgXCIpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKF9iZWxvbmdzVG8oZWxlbWVudCwgc2VsZi50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcImNvbXBvc2VkUGF0aFwiIGluIGUgJiYgdHlwZW9mIGUuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGluaXRpYWxFdmVudFRhcmdldCA9IGUuY29tcG9zZWRQYXRoKClbMF07XG4gICAgICAgIGlmIChpbml0aWFsRXZlbnRUYXJnZXQgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgZWxlbWVudCA9IGluaXRpYWxFdmVudFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PSBcIklOUFVUXCIgfHwgZWxlbWVudC50YWdOYW1lID09IFwiU0VMRUNUXCIgfHwgZWxlbWVudC50YWdOYW1lID09IFwiVEVYVEFSRUFcIiB8fCBlbGVtZW50LmlzQ29udGVudEVkaXRhYmxlO1xuICAgIH07XG4gICAgTW91c2V0cmFwMy5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gc2VsZi5faGFuZGxlS2V5LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBNb3VzZXRyYXAzLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfUkVWRVJTRV9NQVAgPSBudWxsO1xuICAgIH07XG4gICAgTW91c2V0cmFwMy5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAzKGRvY3VtZW50Mik7XG4gICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgaWYgKG1ldGhvZC5jaGFyQXQoMCkgIT09IFwiX1wiKSB7XG4gICAgICAgICAgTW91c2V0cmFwM1ttZXRob2RdID0gZnVuY3Rpb24obWV0aG9kMikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRNb3VzZXRyYXBbbWV0aG9kMl0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0obWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgTW91c2V0cmFwMy5pbml0KCk7XG4gICAgd2luZG93Mi5Nb3VzZXRyYXAgPSBNb3VzZXRyYXAzO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDM7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTW91c2V0cmFwMztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xufSk7XG5cbi8vIHNyYy9pbmRleC5qc1xudmFyIGltcG9ydF9tb3VzZXRyYXAgPSBfX3RvTW9kdWxlKHJlcXVpcmVfbW91c2V0cmFwKCkpO1xuXG4vLyBub2RlX21vZHVsZXMvbW91c2V0cmFwL3BsdWdpbnMvZ2xvYmFsLWJpbmQvbW91c2V0cmFwLWdsb2JhbC1iaW5kLmpzXG4oZnVuY3Rpb24oTW91c2V0cmFwMykge1xuICBpZiAoIU1vdXNldHJhcDMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF9nbG9iYWxDYWxsYmFja3MgPSB7fTtcbiAgdmFyIF9vcmlnaW5hbFN0b3BDYWxsYmFjayA9IE1vdXNldHJhcDMucHJvdG90eXBlLnN0b3BDYWxsYmFjaztcbiAgTW91c2V0cmFwMy5wcm90b3R5cGUuc3RvcENhbGxiYWNrID0gZnVuY3Rpb24oZSwgZWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLnBhdXNlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChfZ2xvYmFsQ2FsbGJhY2tzW2NvbWJvXSB8fCBfZ2xvYmFsQ2FsbGJhY2tzW3NlcXVlbmNlXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gX29yaWdpbmFsU3RvcENhbGxiYWNrLmNhbGwoc2VsZiwgZSwgZWxlbWVudCwgY29tYm8pO1xuICB9O1xuICBNb3VzZXRyYXAzLnByb3RvdHlwZS5iaW5kR2xvYmFsID0gZnVuY3Rpb24oa2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLmJpbmQoa2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgaWYgKGtleXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9nbG9iYWxDYWxsYmFja3Nba2V5c1tpXV0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfZ2xvYmFsQ2FsbGJhY2tzW2tleXNdID0gdHJ1ZTtcbiAgfTtcbiAgTW91c2V0cmFwMy5pbml0KCk7XG59KSh0eXBlb2YgTW91c2V0cmFwICE9PSBcInVuZGVmaW5lZFwiID8gTW91c2V0cmFwIDogdm9pZCAwKTtcblxuLy8gc3JjL2luZGV4LmpzXG52YXIgc3JjX2RlZmF1bHQgPSAoQWxwaW5lKSA9PiB7XG4gIEFscGluZS5kaXJlY3RpdmUoXCJtb3VzZXRyYXBcIiwgKGVsLCB7bW9kaWZpZXJzLCBleHByZXNzaW9ufSwge2V2YWx1YXRlfSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9ICgpID0+IGV4cHJlc3Npb24gPyBldmFsdWF0ZShleHByZXNzaW9uKSA6IGVsLmNsaWNrKCk7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IG1vZGlmaWVyLnJlcGxhY2UoLy0vZywgXCIrXCIpKTtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZ2xvYmFsXCIpKSB7XG4gICAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4gbW9kaWZpZXIgIT09IFwiZ2xvYmFsXCIpO1xuICAgICAgaW1wb3J0X21vdXNldHJhcC5kZWZhdWx0LmJpbmRHbG9iYWwobW9kaWZpZXJzLCAoJGV2ZW50KSA9PiB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpbXBvcnRfbW91c2V0cmFwLmRlZmF1bHQuYmluZChtb2RpZmllcnMsICgkZXZlbnQpID0+IHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWN0aW9uKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBtb2R1bGVfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuIiwgIi8vIG5vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanNcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIGNyZWF0ZUNvb3JkcyA9ICh2KSA9PiAoe1xuICB4OiB2LFxuICB5OiB2XG59KTtcbnZhciBvcHBvc2l0ZVNpZGVNYXAgPSB7XG4gIGxlZnQ6IFwicmlnaHRcIixcbiAgcmlnaHQ6IFwibGVmdFwiLFxuICBib3R0b206IFwidG9wXCIsXG4gIHRvcDogXCJib3R0b21cIlxufTtcbnZhciBvcHBvc2l0ZUFsaWdubWVudE1hcCA9IHtcbiAgc3RhcnQ6IFwiZW5kXCIsXG4gIGVuZDogXCJzdGFydFwiXG59O1xuZnVuY3Rpb24gY2xhbXAoc3RhcnQsIHZhbHVlLCBlbmQpIHtcbiAgcmV0dXJuIG1heChzdGFydCwgbWluKHZhbHVlLCBlbmQpKTtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKHZhbHVlLCBwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZShwYXJhbSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFNpZGUocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoXCItXCIpWzBdO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KFwiLVwiKVsxXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCI7XG59XG5mdW5jdGlvbiBnZXRBeGlzTGVuZ3RoKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09IFwieVwiID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIjtcbn1cbmZ1bmN0aW9uIGdldFNpZGVBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gW1widG9wXCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKGdldFNpZGUocGxhY2VtZW50KSkgPyBcInlcIiA6IFwieFwiO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGdldE9wcG9zaXRlQXhpcyhnZXRTaWRlQXhpcyhwbGFjZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudFNpZGVzKHBsYWNlbWVudCwgcmVjdHMsIHJ0bCkge1xuICBpZiAocnRsID09PSB2b2lkIDApIHtcbiAgICBydGwgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgYWxpZ25tZW50QXhpcyA9IGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0QXhpc0xlbmd0aChhbGlnbm1lbnRBeGlzKTtcbiAgbGV0IG1haW5BbGlnbm1lbnRTaWRlID0gYWxpZ25tZW50QXhpcyA9PT0gXCJ4XCIgPyBhbGlnbm1lbnQgPT09IChydGwgPyBcImVuZFwiIDogXCJzdGFydFwiKSA/IFwicmlnaHRcIiA6IFwibGVmdFwiIDogYWxpZ25tZW50ID09PSBcInN0YXJ0XCIgPyBcImJvdHRvbVwiIDogXCJ0b3BcIjtcbiAgaWYgKHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdID4gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXSkge1xuICAgIG1haW5BbGlnbm1lbnRTaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpO1xuICB9XG4gIHJldHVybiBbbWFpbkFsaWdubWVudFNpZGUsIGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKV07XG59XG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCAoYWxpZ25tZW50KSA9PiBvcHBvc2l0ZUFsaWdubWVudE1hcFthbGlnbm1lbnRdKTtcbn1cbmZ1bmN0aW9uIGdldFNpZGVMaXN0KHNpZGUsIGlzU3RhcnQsIHJ0bCkge1xuICBjb25zdCBsciA9IFtcImxlZnRcIiwgXCJyaWdodFwiXTtcbiAgY29uc3QgcmwgPSBbXCJyaWdodFwiLCBcImxlZnRcIl07XG4gIGNvbnN0IHRiID0gW1widG9wXCIsIFwiYm90dG9tXCJdO1xuICBjb25zdCBidCA9IFtcImJvdHRvbVwiLCBcInRvcFwiXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSBcInRvcFwiOlxuICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgIGlmIChydGwpXG4gICAgICAgIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlIFwibGVmdFwiOlxuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgcmV0dXJuIGlzU3RhcnQgPyB0YiA6IGJ0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW107XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMocGxhY2VtZW50LCBmbGlwQWxpZ25tZW50LCBkaXJlY3Rpb24sIHJ0bCkge1xuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgbGV0IGxpc3QgPSBnZXRTaWRlTGlzdChnZXRTaWRlKHBsYWNlbWVudCksIGRpcmVjdGlvbiA9PT0gXCJzdGFydFwiLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChzaWRlKSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgKHNpZGUpID0+IG9wcG9zaXRlU2lkZU1hcFtzaWRlXSk7XG59XG5mdW5jdGlvbiBleHBhbmRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgLi4ucGFkZGluZ1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgcGFkZGluZyAhPT0gXCJudW1iZXJcIiA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZWN0LFxuICAgIHRvcDogcmVjdC55LFxuICAgIGxlZnQ6IHJlY3QueCxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbi8vIG5vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvY29yZS9kaXN0L2Zsb2F0aW5nLXVpLmNvcmUubWpzXG5mdW5jdGlvbiBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChfcmVmLCBwbGFjZW1lbnQsIHJ0bCkge1xuICBsZXQge1xuICAgIHJlZmVyZW5jZSxcbiAgICBmbG9hdGluZ1xuICB9ID0gX3JlZjtcbiAgY29uc3Qgc2lkZUF4aXMgPSBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnRBeGlzID0gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbkxlbmd0aCA9IGdldEF4aXNMZW5ndGgoYWxpZ25tZW50QXhpcyk7XG4gIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBzaWRlQXhpcyA9PT0gXCJ5XCI7XG4gIGNvbnN0IGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBmbG9hdGluZy53aWR0aCAvIDI7XG4gIGNvbnN0IGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZmxvYXRpbmcuaGVpZ2h0IC8gMjtcbiAgY29uc3QgY29tbW9uQWxpZ24gPSByZWZlcmVuY2VbYWxpZ25MZW5ndGhdIC8gMiAtIGZsb2F0aW5nW2FsaWduTGVuZ3RoXSAvIDI7XG4gIGxldCBjb29yZHM7XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBmbG9hdGluZy5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZmxvYXRpbmcud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cbiAgc3dpdGNoIChnZXRBbGlnbm1lbnQocGxhY2VtZW50KSkge1xuICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgY29vcmRzW2FsaWdubWVudEF4aXNdIC09IGNvbW1vbkFsaWduICogKHJ0bCAmJiBpc1ZlcnRpY2FsID8gLTEgOiAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgIGNvb3Jkc1thbGlnbm1lbnRBeGlzXSArPSBjb21tb25BbGlnbiAqIChydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxudmFyIGNvbXB1dGVQb3NpdGlvbiA9IGFzeW5jIChyZWZlcmVuY2UsIGZsb2F0aW5nLCBjb25maWcpID0+IHtcbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCA9IFwiYm90dG9tXCIsXG4gICAgc3RyYXRlZ3kgPSBcImFic29sdXRlXCIsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybTJcbiAgfSA9IGNvbmZpZztcbiAgY29uc3QgdmFsaWRNaWRkbGV3YXJlID0gbWlkZGxld2FyZS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybTIuaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc1JUTChmbG9hdGluZykpO1xuICBsZXQgcmVjdHMgPSBhd2FpdCBwbGF0Zm9ybTIuZ2V0RWxlbWVudFJlY3RzKHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmcsXG4gICAgc3RyYXRlZ3lcbiAgfSk7XG4gIGxldCB7XG4gICAgeCxcbiAgICB5XG4gIH0gPSBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChyZWN0cywgcGxhY2VtZW50LCBydGwpO1xuICBsZXQgc3RhdGVmdWxQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIGxldCBtaWRkbGV3YXJlRGF0YSA9IHt9O1xuICBsZXQgcmVzZXRDb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRNaWRkbGV3YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGZuXG4gICAgfSA9IHZhbGlkTWlkZGxld2FyZVtpXTtcbiAgICBjb25zdCB7XG4gICAgICB4OiBuZXh0WCxcbiAgICAgIHk6IG5leHRZLFxuICAgICAgZGF0YSxcbiAgICAgIHJlc2V0XG4gICAgfSA9IGF3YWl0IGZuKHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgaW5pdGlhbFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50OiBzdGF0ZWZ1bFBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbWlkZGxld2FyZURhdGEsXG4gICAgICByZWN0cyxcbiAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybTIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgIGZsb2F0aW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgeCA9IG5leHRYICE9IG51bGwgPyBuZXh0WCA6IHg7XG4gICAgeSA9IG5leHRZICE9IG51bGwgPyBuZXh0WSA6IHk7XG4gICAgbWlkZGxld2FyZURhdGEgPSB7XG4gICAgICAuLi5taWRkbGV3YXJlRGF0YSxcbiAgICAgIFtuYW1lXToge1xuICAgICAgICAuLi5taWRkbGV3YXJlRGF0YVtuYW1lXSxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHJlc2V0ICYmIHJlc2V0Q291bnQgPD0gNTApIHtcbiAgICAgIHJlc2V0Q291bnQrKztcbiAgICAgIGlmICh0eXBlb2YgcmVzZXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHJlc2V0LnBsYWNlbWVudCkge1xuICAgICAgICAgIHN0YXRlZnVsUGxhY2VtZW50ID0gcmVzZXQucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNldC5yZWN0cykge1xuICAgICAgICAgIHJlY3RzID0gcmVzZXQucmVjdHMgPT09IHRydWUgPyBhd2FpdCBwbGF0Zm9ybTIuZ2V0RWxlbWVudFJlY3RzKHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIGZsb2F0aW5nLFxuICAgICAgICAgICAgc3RyYXRlZ3lcbiAgICAgICAgICB9KSA6IHJlc2V0LnJlY3RzO1xuICAgICAgICB9XG4gICAgICAgICh7XG4gICAgICAgICAgeCxcbiAgICAgICAgICB5XG4gICAgICAgIH0gPSBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChyZWN0cywgc3RhdGVmdWxQbGFjZW1lbnQsIHJ0bCkpO1xuICAgICAgfVxuICAgICAgaSA9IC0xO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5LFxuICAgIHBsYWNlbWVudDogc3RhdGVmdWxQbGFjZW1lbnQsXG4gICAgc3RyYXRlZ3ksXG4gICAgbWlkZGxld2FyZURhdGFcbiAgfTtcbn07XG5hc3luYyBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX2F3YWl0JHBsYXRmb3JtJGlzRWxlO1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICB4LFxuICAgIHksXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtMixcbiAgICByZWN0cyxcbiAgICBlbGVtZW50cyxcbiAgICBzdHJhdGVneVxuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHtcbiAgICBib3VuZGFyeSA9IFwiY2xpcHBpbmdBbmNlc3RvcnNcIixcbiAgICByb290Qm91bmRhcnkgPSBcInZpZXdwb3J0XCIsXG4gICAgZWxlbWVudENvbnRleHQgPSBcImZsb2F0aW5nXCIsXG4gICAgYWx0Qm91bmRhcnkgPSBmYWxzZSxcbiAgICBwYWRkaW5nID0gMFxuICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKTtcbiAgY29uc3QgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBcImZsb2F0aW5nXCIgPyBcInJlZmVyZW5jZVwiIDogXCJmbG9hdGluZ1wiO1xuICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICBjb25zdCBjbGlwcGluZ0NsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KGF3YWl0IHBsYXRmb3JtMi5nZXRDbGlwcGluZ1JlY3Qoe1xuICAgIGVsZW1lbnQ6ICgoX2F3YWl0JHBsYXRmb3JtJGlzRWxlID0gYXdhaXQgKHBsYXRmb3JtMi5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc0VsZW1lbnQoZWxlbWVudCkpKSAhPSBudWxsID8gX2F3YWl0JHBsYXRmb3JtJGlzRWxlIDogdHJ1ZSkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBhd2FpdCAocGxhdGZvcm0yLmdldERvY3VtZW50RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0yLmdldERvY3VtZW50RWxlbWVudChlbGVtZW50cy5mbG9hdGluZykpLFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9KSk7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gXCJmbG9hdGluZ1wiID8ge1xuICAgIC4uLnJlY3RzLmZsb2F0aW5nLFxuICAgIHgsXG4gICAgeVxuICB9IDogcmVjdHMucmVmZXJlbmNlO1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBhd2FpdCAocGxhdGZvcm0yLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0yLmdldE9mZnNldFBhcmVudChlbGVtZW50cy5mbG9hdGluZykpO1xuICBjb25zdCBvZmZzZXRTY2FsZSA9IGF3YWl0IChwbGF0Zm9ybTIuaXNFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybTIuaXNFbGVtZW50KG9mZnNldFBhcmVudCkpID8gYXdhaXQgKHBsYXRmb3JtMi5nZXRTY2FsZSA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0yLmdldFNjYWxlKG9mZnNldFBhcmVudCkpIHx8IHtcbiAgICB4OiAxLFxuICAgIHk6IDFcbiAgfSA6IHtcbiAgICB4OiAxLFxuICAgIHk6IDFcbiAgfTtcbiAgY29uc3QgZWxlbWVudENsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KHBsYXRmb3JtMi5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCA/IGF3YWl0IHBsYXRmb3JtMi5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSkgOiByZWN0KTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IChjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3ApIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBib3R0b206IChlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20pIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBsZWZ0OiAoY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0KSAvIG9mZnNldFNjYWxlLngsXG4gICAgcmlnaHQ6IChlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHQpIC8gb2Zmc2V0U2NhbGUueFxuICB9O1xufVxudmFyIGZsaXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcImZsaXBcIixcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGFycm93LCBfbWlkZGxld2FyZURhdGEkZmxpcDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBtaWRkbGV3YXJlRGF0YSxcbiAgICAgICAgcmVjdHMsXG4gICAgICAgIGluaXRpYWxQbGFjZW1lbnQsXG4gICAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybTIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IHRydWUsXG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBmYWxsYmFja1N0cmF0ZWd5ID0gXCJiZXN0Rml0XCIsXG4gICAgICAgIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gPSBcIm5vbmVcIixcbiAgICAgICAgZmxpcEFsaWdubWVudCA9IHRydWUsXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGlmICgoX21pZGRsZXdhcmVEYXRhJGFycm93ID0gbWlkZGxld2FyZURhdGEuYXJyb3cpICE9IG51bGwgJiYgX21pZGRsZXdhcmVEYXRhJGFycm93LmFsaWdubWVudE9mZnNldCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICAgICAgY29uc3QgaXNCYXNlUGxhY2VtZW50ID0gZ2V0U2lkZShpbml0aWFsUGxhY2VtZW50KSA9PT0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybTIuaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpO1xuICAgICAgY29uc3QgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBBbGlnbm1lbnQgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoaW5pdGlhbFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRQbGFjZW1lbnRzKGluaXRpYWxQbGFjZW1lbnQpKTtcbiAgICAgIGlmICghc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzICYmIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gIT09IFwibm9uZVwiKSB7XG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50cy5wdXNoKC4uLmdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMoaW5pdGlhbFBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiwgcnRsKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGFjZW1lbnRzMiA9IFtpbml0aWFsUGxhY2VtZW50LCAuLi5mYWxsYmFja1BsYWNlbWVudHNdO1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IG92ZXJmbG93cyA9IFtdO1xuICAgICAgbGV0IG92ZXJmbG93c0RhdGEgPSAoKF9taWRkbGV3YXJlRGF0YSRmbGlwID0gbWlkZGxld2FyZURhdGEuZmxpcCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRmbGlwLm92ZXJmbG93cykgfHwgW107XG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBvdmVyZmxvd3MucHVzaChvdmVyZmxvd1tzaWRlXSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tDcm9zc0F4aXMpIHtcbiAgICAgICAgY29uc3Qgc2lkZXMyID0gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKTtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbc2lkZXMyWzBdXSwgb3ZlcmZsb3dbc2lkZXMyWzFdXSk7XG4gICAgICB9XG4gICAgICBvdmVyZmxvd3NEYXRhID0gWy4uLm92ZXJmbG93c0RhdGEsIHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvdmVyZmxvd3NcbiAgICAgIH1dO1xuICAgICAgaWYgKCFvdmVyZmxvd3MuZXZlcnkoKHNpZGUyKSA9PiBzaWRlMiA8PSAwKSkge1xuICAgICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGZsaXAyLCBfb3ZlcmZsb3dzRGF0YSRmaWx0ZXI7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9ICgoKF9taWRkbGV3YXJlRGF0YSRmbGlwMiA9IG1pZGRsZXdhcmVEYXRhLmZsaXApID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkZmxpcDIuaW5kZXgpIHx8IDApICsgMTtcbiAgICAgICAgY29uc3QgbmV4dFBsYWNlbWVudCA9IHBsYWNlbWVudHMyW25leHRJbmRleF07XG4gICAgICAgIGlmIChuZXh0UGxhY2VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dzOiBvdmVyZmxvd3NEYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgICAgcGxhY2VtZW50OiBuZXh0UGxhY2VtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzZXRQbGFjZW1lbnQgPSAoX292ZXJmbG93c0RhdGEkZmlsdGVyID0gb3ZlcmZsb3dzRGF0YS5maWx0ZXIoKGQpID0+IGQub3ZlcmZsb3dzWzBdIDw9IDApLnNvcnQoKGEsIGIpID0+IGEub3ZlcmZsb3dzWzFdIC0gYi5vdmVyZmxvd3NbMV0pWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX292ZXJmbG93c0RhdGEkZmlsdGVyLnBsYWNlbWVudDtcbiAgICAgICAgaWYgKCFyZXNldFBsYWNlbWVudCkge1xuICAgICAgICAgIHN3aXRjaCAoZmFsbGJhY2tTdHJhdGVneSkge1xuICAgICAgICAgICAgY2FzZSBcImJlc3RGaXRcIjoge1xuICAgICAgICAgICAgICB2YXIgX292ZXJmbG93c0RhdGEkbWFwJHNvO1xuICAgICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQyID0gKF9vdmVyZmxvd3NEYXRhJG1hcCRzbyA9IG92ZXJmbG93c0RhdGEubWFwKChkKSA9PiBbZC5wbGFjZW1lbnQsIGQub3ZlcmZsb3dzLmZpbHRlcigob3ZlcmZsb3cyKSA9PiBvdmVyZmxvdzIgPiAwKS5yZWR1Y2UoKGFjYywgb3ZlcmZsb3cyKSA9PiBhY2MgKyBvdmVyZmxvdzIsIDApXSkuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX292ZXJmbG93c0RhdGEkbWFwJHNvWzBdO1xuICAgICAgICAgICAgICBpZiAocGxhY2VtZW50Mikge1xuICAgICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50ID0gcGxhY2VtZW50MjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJpbml0aWFsUGxhY2VtZW50XCI6XG4gICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50ID0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZW1lbnQgIT09IHJlc2V0UGxhY2VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICAgIHBsYWNlbWVudDogcmVzZXRQbGFjZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xufTtcbmFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZVRvQ29vcmRzKHN0YXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQsXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtMixcbiAgICBlbGVtZW50c1xuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybTIuaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpO1xuICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGdldFNpZGVBeGlzKHBsYWNlbWVudCkgPT09IFwieVwiO1xuICBjb25zdCBtYWluQXhpc011bHRpID0gW1wibGVmdFwiLCBcInRvcFwiXS5pbmNsdWRlcyhzaWRlKSA/IC0xIDogMTtcbiAgY29uc3QgY3Jvc3NBeGlzTXVsdGkgPSBydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMTtcbiAgY29uc3QgcmF3VmFsdWUgPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG4gIGxldCB7XG4gICAgbWFpbkF4aXMsXG4gICAgY3Jvc3NBeGlzLFxuICAgIGFsaWdubWVudEF4aXNcbiAgfSA9IHR5cGVvZiByYXdWYWx1ZSA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBtYWluQXhpczogcmF3VmFsdWUsXG4gICAgY3Jvc3NBeGlzOiAwLFxuICAgIGFsaWdubWVudEF4aXM6IG51bGxcbiAgfSA6IHtcbiAgICBtYWluQXhpczogMCxcbiAgICBjcm9zc0F4aXM6IDAsXG4gICAgYWxpZ25tZW50QXhpczogbnVsbCxcbiAgICAuLi5yYXdWYWx1ZVxuICB9O1xuICBpZiAoYWxpZ25tZW50ICYmIHR5cGVvZiBhbGlnbm1lbnRBeGlzID09PSBcIm51bWJlclwiKSB7XG4gICAgY3Jvc3NBeGlzID0gYWxpZ25tZW50ID09PSBcImVuZFwiID8gYWxpZ25tZW50QXhpcyAqIC0xIDogYWxpZ25tZW50QXhpcztcbiAgfVxuICByZXR1cm4gaXNWZXJ0aWNhbCA/IHtcbiAgICB4OiBjcm9zc0F4aXMgKiBjcm9zc0F4aXNNdWx0aSxcbiAgICB5OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGlcbiAgfSA6IHtcbiAgICB4OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGksXG4gICAgeTogY3Jvc3NBeGlzICogY3Jvc3NBeGlzTXVsdGlcbiAgfTtcbn1cbnZhciBvZmZzZXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gMDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IFwib2Zmc2V0XCIsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBkaWZmQ29vcmRzID0gYXdhaXQgY29udmVydFZhbHVlVG9Db29yZHMoc3RhdGUsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCArIGRpZmZDb29yZHMueCxcbiAgICAgICAgeTogeSArIGRpZmZDb29yZHMueSxcbiAgICAgICAgZGF0YTogZGlmZkNvb3Jkc1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xudmFyIHNoaWZ0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJzaGlmdFwiLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgcGxhY2VtZW50XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IGZhbHNlLFxuICAgICAgICBsaW1pdGVyID0ge1xuICAgICAgICAgIGZuOiAoX3JlZikgPT4ge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgeDogeDIsXG4gICAgICAgICAgICAgIHk6IHkyXG4gICAgICAgICAgICB9ID0gX3JlZjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHg6IHgyLFxuICAgICAgICAgICAgICB5OiB5MlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIGRldGVjdE92ZXJmbG93T3B0aW9ucyk7XG4gICAgICBjb25zdCBjcm9zc0F4aXMgPSBnZXRTaWRlQXhpcyhnZXRTaWRlKHBsYWNlbWVudCkpO1xuICAgICAgY29uc3QgbWFpbkF4aXMgPSBnZXRPcHBvc2l0ZUF4aXMoY3Jvc3NBeGlzKTtcbiAgICAgIGxldCBtYWluQXhpc0Nvb3JkID0gY29vcmRzW21haW5BeGlzXTtcbiAgICAgIGxldCBjcm9zc0F4aXNDb29yZCA9IGNvb3Jkc1tjcm9zc0F4aXNdO1xuICAgICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgICAgY29uc3QgbWluU2lkZSA9IG1haW5BeGlzID09PSBcInlcIiA/IFwidG9wXCIgOiBcImxlZnRcIjtcbiAgICAgICAgY29uc3QgbWF4U2lkZSA9IG1haW5BeGlzID09PSBcInlcIiA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCI7XG4gICAgICAgIGNvbnN0IG1pbjIgPSBtYWluQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heDIgPSBtYWluQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIG1haW5BeGlzQ29vcmQgPSBjbGFtcChtaW4yLCBtYWluQXhpc0Nvb3JkLCBtYXgyKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGVja0Nyb3NzQXhpcykge1xuICAgICAgICBjb25zdCBtaW5TaWRlID0gY3Jvc3NBeGlzID09PSBcInlcIiA/IFwidG9wXCIgOiBcImxlZnRcIjtcbiAgICAgICAgY29uc3QgbWF4U2lkZSA9IGNyb3NzQXhpcyA9PT0gXCJ5XCIgPyBcImJvdHRvbVwiIDogXCJyaWdodFwiO1xuICAgICAgICBjb25zdCBtaW4yID0gY3Jvc3NBeGlzQ29vcmQgKyBvdmVyZmxvd1ttaW5TaWRlXTtcbiAgICAgICAgY29uc3QgbWF4MiA9IGNyb3NzQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gY2xhbXAobWluMiwgY3Jvc3NBeGlzQ29vcmQsIG1heDIpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGltaXRlZENvb3JkcyA9IGxpbWl0ZXIuZm4oe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW21haW5BeGlzXTogbWFpbkF4aXNDb29yZCxcbiAgICAgICAgW2Nyb3NzQXhpc106IGNyb3NzQXhpc0Nvb3JkXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxpbWl0ZWRDb29yZHMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB4OiBsaW1pdGVkQ29vcmRzLnggLSB4LFxuICAgICAgICAgIHk6IGxpbWl0ZWRDb29yZHMueSAtIHlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG4vLyBub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2RvbS9kaXN0L2Zsb2F0aW5nLXVpLnV0aWxzLmRvbS5tanNcbmZ1bmN0aW9uIGdldE5vZGVOYW1lKG5vZGUpIHtcbiAgaWYgKGlzTm9kZShub2RlKSkge1xuICAgIHJldHVybiAobm9kZS5ub2RlTmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBcIiNkb2N1bWVudFwiO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgdmFyIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiAobm9kZSA9PSBudWxsID8gdm9pZCAwIDogKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSB8fCB3aW5kb3c7XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQobm9kZSkge1xuICB2YXIgX3JlZjtcbiAgcmV0dXJuIChfcmVmID0gKGlzTm9kZShub2RlKSA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGUuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZWYuZG9jdW1lbnRFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE5vZGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLk5vZGU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkhUTUxFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5TaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpICYmICFbXCJpbmxpbmVcIiwgXCJjb250ZW50c1wiXS5pbmNsdWRlcyhkaXNwbGF5KTtcbn1cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtcInRhYmxlXCIsIFwidGRcIiwgXCJ0aFwiXS5pbmNsdWRlcyhnZXROb2RlTmFtZShlbGVtZW50KSk7XG59XG5mdW5jdGlvbiBpc0NvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIGNvbnN0IHdlYmtpdCA9IGlzV2ViS2l0KCk7XG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiBjc3MudHJhbnNmb3JtICE9PSBcIm5vbmVcIiB8fCBjc3MucGVyc3BlY3RpdmUgIT09IFwibm9uZVwiIHx8IChjc3MuY29udGFpbmVyVHlwZSA/IGNzcy5jb250YWluZXJUeXBlICE9PSBcIm5vcm1hbFwiIDogZmFsc2UpIHx8ICF3ZWJraXQgJiYgKGNzcy5iYWNrZHJvcEZpbHRlciA/IGNzcy5iYWNrZHJvcEZpbHRlciAhPT0gXCJub25lXCIgOiBmYWxzZSkgfHwgIXdlYmtpdCAmJiAoY3NzLmZpbHRlciA/IGNzcy5maWx0ZXIgIT09IFwibm9uZVwiIDogZmFsc2UpIHx8IFtcInRyYW5zZm9ybVwiLCBcInBlcnNwZWN0aXZlXCIsIFwiZmlsdGVyXCJdLnNvbWUoKHZhbHVlKSA9PiAoY3NzLndpbGxDaGFuZ2UgfHwgXCJcIikuaW5jbHVkZXModmFsdWUpKSB8fCBbXCJwYWludFwiLCBcImxheW91dFwiLCBcInN0cmljdFwiLCBcImNvbnRlbnRcIl0uc29tZSgodmFsdWUpID0+IChjc3MuY29udGFpbiB8fCBcIlwiKS5pbmNsdWRlcyh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgbGV0IGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmICFpc0xhc3RUcmF2ZXJzYWJsZU5vZGUoY3VycmVudE5vZGUpKSB7XG4gICAgaWYgKGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzV2ViS2l0KCkge1xuICBpZiAodHlwZW9mIENTUyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQ1NTLnN1cHBvcnRzKVxuICAgIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cyhcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIsIFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbXCJodG1sXCIsIFwiYm9keVwiLCBcIiNkb2N1bWVudFwiXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KSB7XG4gIGlmIChpc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnBhZ2VYT2Zmc2V0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5wYWdlWU9mZnNldFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gXCJodG1sXCIpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSAoXG4gICAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gICAgbm9kZS5hc3NpZ25lZFNsb3QgfHwgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWQuXG4gICAgbm9kZS5wYXJlbnROb2RlIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWQuXG4gICAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fCAvLyBGYWxsYmFjay5cbiAgICBnZXREb2N1bWVudEVsZW1lbnQobm9kZSlcbiAgKTtcbiAgcmV0dXJuIGlzU2hhZG93Um9vdChyZXN1bHQpID8gcmVzdWx0Lmhvc3QgOiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICBpZiAoaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudCA/IG5vZGUub3duZXJEb2N1bWVudC5ib2R5IDogbm9kZS5ib2R5O1xuICB9XG4gIGlmIChpc0hUTUxFbGVtZW50KHBhcmVudE5vZGUpICYmIGlzT3ZlcmZsb3dFbGVtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKHBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMobm9kZSwgbGlzdCwgdHJhdmVyc2VJZnJhbWVzKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50MjtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuICBpZiAodHJhdmVyc2VJZnJhbWVzID09PSB2b2lkIDApIHtcbiAgICB0cmF2ZXJzZUlmcmFtZXMgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvciA9IGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpO1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxhYmxlQW5jZXN0b3IgPT09ICgoX25vZGUkb3duZXJEb2N1bWVudDIgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50Mi5ib2R5KTtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KHNjcm9sbGFibGVBbmNlc3Rvcik7XG4gIGlmIChpc0JvZHkpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQod2luLCB3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzT3ZlcmZsb3dFbGVtZW50KHNjcm9sbGFibGVBbmNlc3RvcikgPyBzY3JvbGxhYmxlQW5jZXN0b3IgOiBbXSwgd2luLmZyYW1lRWxlbWVudCAmJiB0cmF2ZXJzZUlmcmFtZXMgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyh3aW4uZnJhbWVFbGVtZW50KSA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IsIFtdLCB0cmF2ZXJzZUlmcmFtZXMpKTtcbn1cblxuLy8gbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9kb20vZGlzdC9mbG9hdGluZy11aS5kb20ubWpzXG5mdW5jdGlvbiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChjc3Mud2lkdGgpIHx8IDA7XG4gIGxldCBoZWlnaHQgPSBwYXJzZUZsb2F0KGNzcy5oZWlnaHQpIHx8IDA7XG4gIGNvbnN0IGhhc09mZnNldCA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IG9mZnNldFdpZHRoID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpZHRoO1xuICBjb25zdCBvZmZzZXRIZWlnaHQgPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IGhlaWdodDtcbiAgY29uc3Qgc2hvdWxkRmFsbGJhY2sgPSByb3VuZCh3aWR0aCkgIT09IG9mZnNldFdpZHRoIHx8IHJvdW5kKGhlaWdodCkgIT09IG9mZnNldEhlaWdodDtcbiAgaWYgKHNob3VsZEZhbGxiYWNrKSB7XG4gICAgd2lkdGggPSBvZmZzZXRXaWR0aDtcbiAgICBoZWlnaHQgPSBvZmZzZXRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJDogc2hvdWxkRmFsbGJhY2tcbiAgfTtcbn1cbmZ1bmN0aW9uIHVud3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gIWlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgOiBlbGVtZW50O1xufVxuZnVuY3Rpb24gZ2V0U2NhbGUoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGRvbUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvb3JkcygxKTtcbiAgfVxuICBjb25zdCByZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICAkXG4gIH0gPSBnZXRDc3NEaW1lbnNpb25zKGRvbUVsZW1lbnQpO1xuICBsZXQgeCA9ICgkID8gcm91bmQocmVjdC53aWR0aCkgOiByZWN0LndpZHRoKSAvIHdpZHRoO1xuICBsZXQgeSA9ICgkID8gcm91bmQocmVjdC5oZWlnaHQpIDogcmVjdC5oZWlnaHQpIC8gaGVpZ2h0O1xuICBpZiAoIXggfHwgIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHggPSAxO1xuICB9XG4gIGlmICgheSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSB7XG4gICAgeSA9IDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbnZhciBub09mZnNldHMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQ29vcmRzKDApO1xuZnVuY3Rpb24gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKCFpc1dlYktpdCgpIHx8ICF3aW4udmlzdWFsVmlld3BvcnQpIHtcbiAgICByZXR1cm4gbm9PZmZzZXRzO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogd2luLnZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgeTogd2luLnZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcFxuICB9O1xufVxuZnVuY3Rpb24gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhlbGVtZW50LCBpc0ZpeGVkLCBmbG9hdGluZ09mZnNldFBhcmVudCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG4gIGlmICghZmxvYXRpbmdPZmZzZXRQYXJlbnQgfHwgaXNGaXhlZCAmJiBmbG9hdGluZ09mZnNldFBhcmVudCAhPT0gZ2V0V2luZG93KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkO1xufVxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGlmIChpbmNsdWRlU2NhbGUpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgICBpZiAoaXNFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBjb25zdCB2aXN1YWxPZmZzZXRzID0gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50LCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkgPyBnZXRWaXN1YWxPZmZzZXRzKGRvbUVsZW1lbnQpIDogY3JlYXRlQ29vcmRzKDApO1xuICBsZXQgeCA9IChjbGllbnRSZWN0LmxlZnQgKyB2aXN1YWxPZmZzZXRzLngpIC8gc2NhbGUueDtcbiAgbGV0IHkgPSAoY2xpZW50UmVjdC50b3AgKyB2aXN1YWxPZmZzZXRzLnkpIC8gc2NhbGUueTtcbiAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlLng7XG4gIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlLnk7XG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgY29uc3Qgd2luID0gZ2V0V2luZG93KGRvbUVsZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldFdpbiA9IG9mZnNldFBhcmVudCAmJiBpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSA/IGdldFdpbmRvdyhvZmZzZXRQYXJlbnQpIDogb2Zmc2V0UGFyZW50O1xuICAgIGxldCBjdXJyZW50SUZyYW1lID0gd2luLmZyYW1lRWxlbWVudDtcbiAgICB3aGlsZSAoY3VycmVudElGcmFtZSAmJiBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0V2luICE9PSB3aW4pIHtcbiAgICAgIGNvbnN0IGlmcmFtZVNjYWxlID0gZ2V0U2NhbGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBpZnJhbWVSZWN0ID0gY3VycmVudElGcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBsZWZ0ID0gaWZyYW1lUmVjdC5sZWZ0ICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50TGVmdCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdMZWZ0KSkgKiBpZnJhbWVTY2FsZS54O1xuICAgICAgY29uc3QgdG9wID0gaWZyYW1lUmVjdC50b3AgKyAoY3VycmVudElGcmFtZS5jbGllbnRUb3AgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nVG9wKSkgKiBpZnJhbWVTY2FsZS55O1xuICAgICAgeCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgeSAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgd2lkdGggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIGhlaWdodCAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgeCArPSBsZWZ0O1xuICAgICAgeSArPSB0b3A7XG4gICAgICBjdXJyZW50SUZyYW1lID0gZ2V0V2luZG93KGN1cnJlbnRJRnJhbWUpLmZyYW1lRWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3Qoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgc3RyYXRlZ3kgIT09IFwiZml4ZWRcIikge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSBcImJvZHlcIiB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IG9mZnNldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCAqIHNjYWxlLngsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAqIHNjYWxlLnksXG4gICAgeDogcmVjdC54ICogc2NhbGUueCAtIHNjcm9sbC5zY3JvbGxMZWZ0ICogc2NhbGUueCArIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnkgKiBzY2FsZS55IC0gc2Nyb2xsLnNjcm9sbFRvcCAqIHNjYWxlLnkgKyBvZmZzZXRzLnlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5nZXRDbGllbnRSZWN0cygpKTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldE5vZGVTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHNjcm9sbCA9IGdldE5vZGVTY3JvbGwoZWxlbWVudCk7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keS5zY3JvbGxXaWR0aCwgYm9keS5jbGllbnRXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5LmNsaWVudEhlaWdodCk7XG4gIGxldCB4ID0gLXNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgY29uc3QgeSA9IC1zY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5KS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKSAtIHdpZHRoO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIGxldCB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IHZpc3VhbFZpZXdwb3J0QmFzZWQgPSBpc1dlYktpdCgpO1xuICAgIGlmICghdmlzdWFsVmlld3BvcnRCYXNlZCB8fCB2aXN1YWxWaWV3cG9ydEJhc2VkICYmIHN0cmF0ZWd5ID09PSBcImZpeGVkXCIpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIHN0cmF0ZWd5ID09PSBcImZpeGVkXCIpO1xuICBjb25zdCB0b3AgPSBjbGllbnRSZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICBjb25zdCBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICBjb25zdCBzY2FsZSA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRTY2FsZShlbGVtZW50KSA6IGNyZWF0ZUNvb3JkcygxKTtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoICogc2NhbGUueDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY2FsZS55O1xuICBjb25zdCB4ID0gbGVmdCAqIHNjYWxlLng7XG4gIGNvbnN0IHkgPSB0b3AgKiBzY2FsZS55O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkge1xuICBsZXQgcmVjdDtcbiAgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09IFwidmlld3BvcnRcIikge1xuICAgIHJlY3QgPSBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpO1xuICB9IGVsc2UgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09IFwiZG9jdW1lbnRcIikge1xuICAgIHJlY3QgPSBnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2xpcHBpbmdBbmNlc3RvcikpIHtcbiAgICByZWN0ID0gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpO1xuICAgIHJlY3QgPSB7XG4gICAgICAuLi5jbGlwcGluZ0FuY2VzdG9yLFxuICAgICAgeDogY2xpcHBpbmdBbmNlc3Rvci54IC0gdmlzdWFsT2Zmc2V0cy54LFxuICAgICAgeTogY2xpcHBpbmdBbmNlc3Rvci55IC0gdmlzdWFsT2Zmc2V0cy55XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVjdFRvQ2xpZW50UmVjdChyZWN0KTtcbn1cbmZ1bmN0aW9uIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBzdG9wTm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKHBhcmVudE5vZGUgPT09IHN0b3BOb2RlIHx8ICFpc0VsZW1lbnQocGFyZW50Tm9kZSkgfHwgaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudE5vZGUpLnBvc2l0aW9uID09PSBcImZpeGVkXCIgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cbmZ1bmN0aW9uIGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCBjYWNoZSkge1xuICBjb25zdCBjYWNoZWRSZXN1bHQgPSBjYWNoZS5nZXQoZWxlbWVudCk7XG4gIGlmIChjYWNoZWRSZXN1bHQpIHtcbiAgICByZXR1cm4gY2FjaGVkUmVzdWx0O1xuICB9XG4gIGxldCByZXN1bHQgPSBnZXRPdmVyZmxvd0FuY2VzdG9ycyhlbGVtZW50LCBbXSwgZmFsc2UpLmZpbHRlcigoZWwpID0+IGlzRWxlbWVudChlbCkgJiYgZ2V0Tm9kZU5hbWUoZWwpICE9PSBcImJvZHlcIik7XG4gIGxldCBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gIGNvbnN0IGVsZW1lbnRJc0ZpeGVkID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiO1xuICBsZXQgY3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/IGdldFBhcmVudE5vZGUoZWxlbWVudCkgOiBlbGVtZW50O1xuICB3aGlsZSAoaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZUlzQ29udGFpbmluZyA9IGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKTtcbiAgICBpZiAoIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09IFwiZml4ZWRcIikge1xuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREcm9wQ3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiAhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgOiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAhIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlICYmIFtcImFic29sdXRlXCIsIFwiZml4ZWRcIl0uaW5jbHVkZXMoY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUucG9zaXRpb24pIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIGN1cnJlbnROb2RlKTtcbiAgICBpZiAoc2hvdWxkRHJvcEN1cnJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKChhbmNlc3RvcikgPT4gYW5jZXN0b3IgIT09IGN1cnJlbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIGNhY2hlLnNldChlbGVtZW50LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50LFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzID0gYm91bmRhcnkgPT09IFwiY2xpcHBpbmdBbmNlc3RvcnNcIiA/IGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCB0aGlzLl9jKSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIGNvbnN0IGNsaXBwaW5nQW5jZXN0b3JzID0gWy4uLmVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycywgcm9vdEJvdW5kYXJ5XTtcbiAgY29uc3QgZmlyc3RDbGlwcGluZ0FuY2VzdG9yID0gY2xpcHBpbmdBbmNlc3RvcnNbMF07XG4gIGNvbnN0IGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nQW5jZXN0b3JzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdBbmNlc3RvcikgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBmaXJzdENsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIGhlaWdodDogY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3AsXG4gICAgeDogY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgeTogY2xpcHBpbmdSZWN0LnRvcFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQoZWxlbWVudCwgb2Zmc2V0UGFyZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGlzRml4ZWQgPSBzdHJhdGVneSA9PT0gXCJmaXhlZFwiO1xuICBjb25zdCByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gIGxldCBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgY29uc3Qgb2Zmc2V0cyA9IGNyZWF0ZUNvb3JkcygwKTtcbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSBcImJvZHlcIiB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHBvbHlmaWxsKSB7XG4gICAgcmV0dXJuIHBvbHlmaWxsKGVsZW1lbnQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn1cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBjb25zdCB3aW5kb3cyID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93MjtcbiAgfVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCk7XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCwgcG9seWZpbGwpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09IFwiaHRtbFwiIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09IFwiYm9keVwiICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAhaXNDb250YWluaW5nQmxvY2sob2Zmc2V0UGFyZW50KSkpIHtcbiAgICByZXR1cm4gd2luZG93MjtcbiAgfVxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3cyO1xufVxudmFyIGdldEVsZW1lbnRSZWN0cyA9IGFzeW5jIGZ1bmN0aW9uKF9yZWYpIHtcbiAgbGV0IHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmcsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGdldE9mZnNldFBhcmVudEZuID0gdGhpcy5nZXRPZmZzZXRQYXJlbnQgfHwgZ2V0T2Zmc2V0UGFyZW50O1xuICBjb25zdCBnZXREaW1lbnNpb25zRm4gPSB0aGlzLmdldERpbWVuc2lvbnM7XG4gIHJldHVybiB7XG4gICAgcmVmZXJlbmNlOiBnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudChyZWZlcmVuY2UsIGF3YWl0IGdldE9mZnNldFBhcmVudEZuKGZsb2F0aW5nKSwgc3RyYXRlZ3kpLFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIC4uLmF3YWl0IGdldERpbWVuc2lvbnNGbihmbG9hdGluZylcbiAgICB9XG4gIH07XG59O1xuZnVuY3Rpb24gaXNSVEwoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXJlY3Rpb24gPT09IFwicnRsXCI7XG59XG52YXIgcGxhdGZvcm0gPSB7XG4gIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0LFxuICBnZXREb2N1bWVudEVsZW1lbnQsXG4gIGdldENsaXBwaW5nUmVjdCxcbiAgZ2V0T2Zmc2V0UGFyZW50LFxuICBnZXRFbGVtZW50UmVjdHMsXG4gIGdldENsaWVudFJlY3RzLFxuICBnZXREaW1lbnNpb25zLFxuICBnZXRTY2FsZSxcbiAgaXNFbGVtZW50LFxuICBpc1JUTFxufTtcbmZ1bmN0aW9uIG9ic2VydmVNb3ZlKGVsZW1lbnQsIG9uTW92ZSkge1xuICBsZXQgaW8gPSBudWxsO1xuICBsZXQgdGltZW91dElkO1xuICBjb25zdCByb290ID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIGlvICYmIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICBpbyA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gcmVmcmVzaChza2lwLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAoc2tpcCA9PT0gdm9pZCAwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghc2tpcCkge1xuICAgICAgb25Nb3ZlKCk7XG4gICAgfVxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnNldFRvcCA9IGZsb29yKHRvcCk7XG4gICAgY29uc3QgaW5zZXRSaWdodCA9IGZsb29yKHJvb3QuY2xpZW50V2lkdGggLSAobGVmdCArIHdpZHRoKSk7XG4gICAgY29uc3QgaW5zZXRCb3R0b20gPSBmbG9vcihyb290LmNsaWVudEhlaWdodCAtICh0b3AgKyBoZWlnaHQpKTtcbiAgICBjb25zdCBpbnNldExlZnQgPSBmbG9vcihsZWZ0KTtcbiAgICBjb25zdCByb290TWFyZ2luID0gLWluc2V0VG9wICsgXCJweCBcIiArIC1pbnNldFJpZ2h0ICsgXCJweCBcIiArIC1pbnNldEJvdHRvbSArIFwicHggXCIgKyAtaW5zZXRMZWZ0ICsgXCJweFwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290TWFyZ2luLFxuICAgICAgdGhyZXNob2xkOiBtYXgoMCwgbWluKDEsIHRocmVzaG9sZCkpIHx8IDFcbiAgICB9O1xuICAgIGxldCBpc0ZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBoYW5kbGVPYnNlcnZlKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gZW50cmllc1swXS5pbnRlcnNlY3Rpb25SYXRpbztcbiAgICAgIGlmIChyYXRpbyAhPT0gdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICghaXNGaXJzdFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybiByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyYXRpbykge1xuICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmcmVzaChmYWxzZSwgMWUtNyk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZyZXNoKGZhbHNlLCByYXRpbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLy8gSGFuZGxlIDxpZnJhbWU+c1xuICAgICAgICByb290OiByb290Lm93bmVyRG9jdW1lbnRcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpby5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIHJlZnJlc2godHJ1ZSk7XG4gIHJldHVybiBjbGVhbnVwO1xufVxuZnVuY3Rpb24gYXV0b1VwZGF0ZShyZWZlcmVuY2UsIGZsb2F0aW5nLCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgYW5jZXN0b3JTY3JvbGwgPSB0cnVlLFxuICAgIGFuY2VzdG9yUmVzaXplID0gdHJ1ZSxcbiAgICBlbGVtZW50UmVzaXplID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIsXG4gICAgbGF5b3V0U2hpZnQgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIixcbiAgICBhbmltYXRpb25GcmFtZSA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByZWZlcmVuY2VFbCA9IHVud3JhcEVsZW1lbnQocmVmZXJlbmNlKTtcbiAgY29uc3QgYW5jZXN0b3JzID0gYW5jZXN0b3JTY3JvbGwgfHwgYW5jZXN0b3JSZXNpemUgPyBbLi4ucmVmZXJlbmNlRWwgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyhyZWZlcmVuY2VFbCkgOiBbXSwgLi4uZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZmxvYXRpbmcpXSA6IFtdO1xuICBhbmNlc3RvcnMuZm9yRWFjaCgoYW5jZXN0b3IpID0+IHtcbiAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlKTtcbiAgfSk7XG4gIGNvbnN0IGNsZWFudXBJbyA9IHJlZmVyZW5jZUVsICYmIGxheW91dFNoaWZ0ID8gb2JzZXJ2ZU1vdmUocmVmZXJlbmNlRWwsIHVwZGF0ZSkgOiBudWxsO1xuICBsZXQgcmVvYnNlcnZlRnJhbWUgPSAtMTtcbiAgbGV0IHJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgaWYgKGVsZW1lbnRSZXNpemUpIHtcbiAgICByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoX3JlZikgPT4ge1xuICAgICAgbGV0IFtmaXJzdEVudHJ5XSA9IF9yZWY7XG4gICAgICBpZiAoZmlyc3RFbnRyeSAmJiBmaXJzdEVudHJ5LnRhcmdldCA9PT0gcmVmZXJlbmNlRWwgJiYgcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVvYnNlcnZlRnJhbWUpO1xuICAgICAgICByZW9ic2VydmVGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcmVzaXplT2JzZXJ2ZXIgJiYgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShmbG9hdGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gICAgaWYgKHJlZmVyZW5jZUVsICYmICFhbmltYXRpb25GcmFtZSkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShyZWZlcmVuY2VFbCk7XG4gICAgfVxuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICB9XG4gIGxldCBmcmFtZUlkO1xuICBsZXQgcHJldlJlZlJlY3QgPSBhbmltYXRpb25GcmFtZSA/IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpIDogbnVsbDtcbiAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZnJhbWVMb29wKCk7XG4gIH1cbiAgZnVuY3Rpb24gZnJhbWVMb29wKCkge1xuICAgIGNvbnN0IG5leHRSZWZSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSk7XG4gICAgaWYgKHByZXZSZWZSZWN0ICYmIChuZXh0UmVmUmVjdC54ICE9PSBwcmV2UmVmUmVjdC54IHx8IG5leHRSZWZSZWN0LnkgIT09IHByZXZSZWZSZWN0LnkgfHwgbmV4dFJlZlJlY3Qud2lkdGggIT09IHByZXZSZWZSZWN0LndpZHRoIHx8IG5leHRSZWZSZWN0LmhlaWdodCAhPT0gcHJldlJlZlJlY3QuaGVpZ2h0KSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICAgIHByZXZSZWZSZWN0ID0gbmV4dFJlZlJlY3Q7XG4gICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZUxvb3ApO1xuICB9XG4gIHVwZGF0ZSgpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGFuY2VzdG9ycy5mb3JFYWNoKChhbmNlc3RvcikgPT4ge1xuICAgICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGUpO1xuICAgICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGUpO1xuICAgIH0pO1xuICAgIGNsZWFudXBJbyAmJiBjbGVhbnVwSW8oKTtcbiAgICByZXNpemVPYnNlcnZlciAmJiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XG4gICAgfVxuICB9O1xufVxudmFyIGNvbXB1dGVQb3NpdGlvbjIgPSAocmVmZXJlbmNlLCBmbG9hdGluZywgb3B0aW9ucykgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgcGxhdGZvcm0sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBwbGF0Zm9ybVdpdGhDYWNoZSA9IHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLnBsYXRmb3JtLFxuICAgIF9jOiBjYWNoZVxuICB9O1xuICByZXR1cm4gY29tcHV0ZVBvc2l0aW9uKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybVdpdGhDYWNoZVxuICB9KTtcbn07XG5cbi8vIHBhY2thZ2VzL2FuY2hvci9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBBbHBpbmUubWFnaWMoXCJhbmNob3JcIiwgKGVsKSA9PiB7XG4gICAgaWYgKCFlbC5feF9hbmNob3IpXG4gICAgICB0aHJvdyBcIkFscGluZTogTm8geC1hbmNob3IgZGlyZWN0aXZlIGZvdW5kIG9uIGVsZW1lbnQgdXNpbmcgJGFuY2hvci4uLlwiO1xuICAgIHJldHVybiBlbC5feF9hbmNob3I7XG4gIH0pO1xuICBBbHBpbmUuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gICAgaWYgKGZyb20gJiYgZnJvbS5feF9hbmNob3IgJiYgIXRvLl94X2FuY2hvcikge1xuICAgICAgdG8uX3hfYW5jaG9yID0gZnJvbS5feF9hbmNob3I7XG4gICAgfVxuICB9KTtcbiAgQWxwaW5lLmRpcmVjdGl2ZShcImFuY2hvclwiLCBBbHBpbmUuc2tpcER1cmluZ0Nsb25lKFxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMsIHZhbHVlIH0sIHsgY2xlYW51cCwgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gICAgICBsZXQgeyBwbGFjZW1lbnQsIG9mZnNldFZhbHVlLCB1bnN0eWxlZCB9ID0gZ2V0T3B0aW9ucyhtb2RpZmllcnMpO1xuICAgICAgZWwuX3hfYW5jaG9yID0gQWxwaW5lLnJlYWN0aXZlKHsgeDogMCwgeTogMCB9KTtcbiAgICAgIGxldCByZWZlcmVuY2UgPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gICAgICBpZiAoIXJlZmVyZW5jZSlcbiAgICAgICAgdGhyb3cgXCJBbHBpbmU6IG5vIGVsZW1lbnQgcHJvdmlkZWQgdG8geC1hbmNob3IuLi5cIjtcbiAgICAgIGxldCBjb21wdXRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgY29tcHV0ZVBvc2l0aW9uMihyZWZlcmVuY2UsIGVsLCB7XG4gICAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICAgIG1pZGRsZXdhcmU6IFtmbGlwKCksIHNoaWZ0KHsgcGFkZGluZzogNSB9KSwgb2Zmc2V0KG9mZnNldFZhbHVlKV1cbiAgICAgICAgfSkudGhlbigoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgICB1bnN0eWxlZCB8fCBzZXRTdHlsZXMoZWwsIHgsIHkpO1xuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh7IHgsIHkgfSkgIT09IHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIGVsLl94X2FuY2hvci54ID0geDtcbiAgICAgICAgICAgIGVsLl94X2FuY2hvci55ID0geTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHsgeCwgeSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IHJlbGVhc2UgPSBhdXRvVXBkYXRlKHJlZmVyZW5jZSwgZWwsICgpID0+IGNvbXB1dGUoKSk7XG4gICAgICBjbGVhbnVwKCgpID0+IHJlbGVhc2UoKSk7XG4gICAgfSxcbiAgICAvLyBXaGVuIGNsb25pbmcgKG9yIFwibW9ycGhpbmdcIiksIHdlIHdpbGwgZ3JhZnQgdGhlIHN0eWxlIGFuZCBwb3NpdGlvbiBkYXRhIGZyb20gdGhlIGxpdmUgdHJlZS4uLlxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMsIHZhbHVlIH0sIHsgY2xlYW51cCwgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gICAgICBsZXQgeyBwbGFjZW1lbnQsIG9mZnNldFZhbHVlLCB1bnN0eWxlZCB9ID0gZ2V0T3B0aW9ucyhtb2RpZmllcnMpO1xuICAgICAgaWYgKGVsLl94X2FuY2hvcikge1xuICAgICAgICB1bnN0eWxlZCB8fCBzZXRTdHlsZXMoZWwsIGVsLl94X2FuY2hvci54LCBlbC5feF9hbmNob3IueSk7XG4gICAgICB9XG4gICAgfVxuICApKTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlcyhlbCwgeCwgeSkge1xuICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCB7XG4gICAgbGVmdDogeCArIFwicHhcIixcbiAgICB0b3A6IHkgKyBcInB4XCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICB9KTtcbn1cbmZ1bmN0aW9uIGdldE9wdGlvbnMobW9kaWZpZXJzKSB7XG4gIGxldCBwb3NpdGlvbnMgPSBbXCJ0b3BcIiwgXCJ0b3Atc3RhcnRcIiwgXCJ0b3AtZW5kXCIsIFwicmlnaHRcIiwgXCJyaWdodC1zdGFydFwiLCBcInJpZ2h0LWVuZFwiLCBcImJvdHRvbVwiLCBcImJvdHRvbS1zdGFydFwiLCBcImJvdHRvbS1lbmRcIiwgXCJsZWZ0XCIsIFwibGVmdC1zdGFydFwiLCBcImxlZnQtZW5kXCJdO1xuICBsZXQgcGxhY2VtZW50ID0gcG9zaXRpb25zLmZpbmQoKGkpID0+IG1vZGlmaWVycy5pbmNsdWRlcyhpKSk7XG4gIGxldCBvZmZzZXRWYWx1ZSA9IDA7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvZmZzZXRcIikpIHtcbiAgICBsZXQgaWR4ID0gbW9kaWZpZXJzLmZpbmRJbmRleCgoaSkgPT4gaSA9PT0gXCJvZmZzZXRcIik7XG4gICAgb2Zmc2V0VmFsdWUgPSBtb2RpZmllcnNbaWR4ICsgMV0gIT09IHZvaWQgMCA/IE51bWJlcihtb2RpZmllcnNbaWR4ICsgMV0pIDogb2Zmc2V0VmFsdWU7XG4gIH1cbiAgbGV0IHVuc3R5bGVkID0gbW9kaWZpZXJzLmluY2x1ZGVzKFwibm8tc3R5bGVcIik7XG4gIHJldHVybiB7IHBsYWNlbWVudCwgb2Zmc2V0VmFsdWUsIHVuc3R5bGVkIH07XG59XG5cbi8vIHBhY2thZ2VzL2FuY2hvci9idWlsZHMvbW9kdWxlLmpzXG52YXIgbW9kdWxlX2RlZmF1bHQgPSBzcmNfZGVmYXVsdDtcbmV4cG9ydCB7XG4gIHNyY19kZWZhdWx0IGFzIGFuY2hvcixcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICIvLyBwYWNrYWdlcy9jb2xsYXBzZS9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBBbHBpbmUuZGlyZWN0aXZlKFwiY29sbGFwc2VcIiwgY29sbGFwc2UpO1xuICBjb2xsYXBzZS5pbmxpbmUgPSAoZWwsIHsgbW9kaWZpZXJzIH0pID0+IHtcbiAgICBpZiAoIW1vZGlmaWVycy5pbmNsdWRlcyhcIm1pblwiKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9kb1Nob3cgPSAoKSA9PiB7XG4gICAgfTtcbiAgICBlbC5feF9kb0hpZGUgPSAoKSA9PiB7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gY29sbGFwc2UoZWwsIHsgbW9kaWZpZXJzIH0pIHtcbiAgICBsZXQgZHVyYXRpb24gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkdXJhdGlvblwiLCAyNTApIC8gMWUzO1xuICAgIGxldCBmbG9vciA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcIm1pblwiLCAwKTtcbiAgICBsZXQgZnVsbHlIaWRlID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcIm1pblwiKTtcbiAgICBpZiAoIWVsLl94X2lzU2hvd24pXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHtmbG9vcn1weGA7XG4gICAgaWYgKCFlbC5feF9pc1Nob3duICYmIGZ1bGx5SGlkZSlcbiAgICAgIGVsLmhpZGRlbiA9IHRydWU7XG4gICAgaWYgKCFlbC5feF9pc1Nob3duKVxuICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIGxldCBzZXRGdW5jdGlvbiA9IChlbDIsIHN0eWxlcykgPT4ge1xuICAgICAgbGV0IHJldmVydEZ1bmN0aW9uID0gQWxwaW5lLnNldFN0eWxlcyhlbDIsIHN0eWxlcyk7XG4gICAgICByZXR1cm4gc3R5bGVzLmhlaWdodCA/ICgpID0+IHtcbiAgICAgIH0gOiByZXZlcnRGdW5jdGlvbjtcbiAgICB9O1xuICAgIGxldCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBcImhlaWdodFwiLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1zYCxcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlcIlxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbiA9IHtcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICBpZiAoZnVsbHlIaWRlKVxuICAgICAgICAgIGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBpZiAoZnVsbHlIaWRlKVxuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICBsZXQgY3VycmVudCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgIGxldCBmdWxsID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gZnVsbCkge1xuICAgICAgICAgIGN1cnJlbnQgPSBmbG9vcjtcbiAgICAgICAgfVxuICAgICAgICBBbHBpbmUudHJhbnNpdGlvbihlbCwgQWxwaW5lLnNldFN0eWxlcywge1xuICAgICAgICAgIGR1cmluZzogdHJhbnNpdGlvblN0eWxlcyxcbiAgICAgICAgICBzdGFydDogeyBoZWlnaHQ6IGN1cnJlbnQgKyBcInB4XCIgfSxcbiAgICAgICAgICBlbmQ6IHsgaGVpZ2h0OiBmdWxsICsgXCJweFwiIH1cbiAgICAgICAgfSwgKCkgPT4gZWwuX3hfaXNTaG93biA9IHRydWUsICgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gZnVsbCkgPCAxKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIGxldCBmdWxsID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICBBbHBpbmUudHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRyYW5zaXRpb25TdHlsZXMsXG4gICAgICAgICAgc3RhcnQ6IHsgaGVpZ2h0OiBmdWxsICsgXCJweFwiIH0sXG4gICAgICAgICAgZW5kOiB7IGhlaWdodDogZmxvb3IgKyBcInB4XCIgfVxuICAgICAgICB9LCAoKSA9PiBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCIsICgpID0+IHtcbiAgICAgICAgICBlbC5feF9pc1Nob3duID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGVsLnN0eWxlLmhlaWdodCA9PSBgJHtmbG9vcn1weGAgJiYgZnVsbHlIaWRlKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgbGV0IG1hdGNoID0gcmF3VmFsdWUubWF0Y2goLyhbMC05XSspbXMvKTtcbiAgICBpZiAobWF0Y2gpXG4gICAgICByZXR1cm4gbWF0Y2hbMV07XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJtaW5cIikge1xuICAgIGxldCBtYXRjaCA9IHJhd1ZhbHVlLm1hdGNoKC8oWzAtOV0rKXB4Lyk7XG4gICAgaWYgKG1hdGNoKVxuICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvY29sbGFwc2UvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBzcmNfZGVmYXVsdCBhcyBjb2xsYXBzZSxcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICIvLyBub2RlX21vZHVsZXMvdGFiYmFibGUvZGlzdC9pbmRleC5lc20uanNcbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXCJpbnB1dFwiLCBcInNlbGVjdFwiLCBcInRleHRhcmVhXCIsIFwiYVtocmVmXVwiLCBcImJ1dHRvblwiLCBcIlt0YWJpbmRleF06bm90KHNsb3QpXCIsIFwiYXVkaW9bY29udHJvbHNdXCIsIFwidmlkZW9bY29udHJvbHNdXCIsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsIFwiZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGVcIiwgXCJkZXRhaWxzXCJdO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKFwiLFwiKTtcbnZhciBOb0VsZW1lbnQgPSB0eXBlb2YgRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBtYXRjaGVzID0gTm9FbGVtZW50ID8gZnVuY3Rpb24oKSB7XG59IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG52YXIgZ2V0Um9vdE5vZGUgPSAhTm9FbGVtZW50ICYmIEVsZW1lbnQucHJvdG90eXBlLmdldFJvb3ROb2RlID8gZnVuY3Rpb24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xufSA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudDtcbn07XG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMyKGVsLCBpbmNsdWRlQ29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcikpO1xuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbnZhciBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkgPSBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkyKGVsZW1lbnRzLCBpbmNsdWRlQ29udGFpbmVyLCBvcHRpb25zKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gW107XG4gIHZhciBlbGVtZW50c1RvQ2hlY2sgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFwiU0xPVFwiKSB7XG4gICAgICB2YXIgYXNzaWduZWQgPSBlbGVtZW50LmFzc2lnbmVkRWxlbWVudHMoKTtcbiAgICAgIHZhciBjb250ZW50ID0gYXNzaWduZWQubGVuZ3RoID8gYXNzaWduZWQgOiBlbGVtZW50LmNoaWxkcmVuO1xuICAgICAgdmFyIG5lc3RlZENhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkyKGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgIHNjb3BlOiBlbGVtZW50LFxuICAgICAgICAgIGNhbmRpZGF0ZXM6IG5lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG4gICAgICBpZiAodmFsaWRDYW5kaWRhdGUgJiYgb3B0aW9ucy5maWx0ZXIoZWxlbWVudCkgJiYgKGluY2x1ZGVDb250YWluZXIgfHwgIWVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpKSkge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB2YXIgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdCB8fCAvLyBjaGVjayBmb3IgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5nZXRTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgb3B0aW9ucy5nZXRTaGFkb3dSb290KGVsZW1lbnQpO1xuICAgICAgdmFyIHZhbGlkU2hhZG93Um9vdCA9ICFvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIgfHwgb3B0aW9ucy5zaGFkb3dSb290RmlsdGVyKGVsZW1lbnQpO1xuICAgICAgaWYgKHNoYWRvd1Jvb3QgJiYgdmFsaWRTaGFkb3dSb290KSB7XG4gICAgICAgIHZhciBfbmVzdGVkQ2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseTIoc2hhZG93Um9vdCA9PT0gdHJ1ZSA/IGVsZW1lbnQuY2hpbGRyZW4gOiBzaGFkb3dSb290LmNoaWxkcmVuLCB0cnVlLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBfbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3BlOiBlbGVtZW50LFxuICAgICAgICAgICAgY2FuZGlkYXRlczogX25lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHNUb0NoZWNrLnVuc2hpZnQuYXBwbHkoZWxlbWVudHNUb0NoZWNrLCBlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgyKG5vZGUsIGlzU2NvcGUpIHtcbiAgaWYgKG5vZGUudGFiSW5kZXggPCAwKSB7XG4gICAgaWYgKChpc1Njb3BlIHx8IC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IG5vZGUuaXNDb250ZW50RWRpdGFibGUpICYmIGlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiksIDEwKSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlczIoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dDIobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSBcIklOUFVUXCI7XG59O1xudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0Mihub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gXCJoaWRkZW5cIjtcbn07XG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeTIobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gXCJERVRBSUxTXCIgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gXCJTVU1NQVJZXCI7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvMihub2RlcywgZm9ybSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQgJiYgbm9kZXNbaV0uZm9ybSA9PT0gZm9ybSkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8yKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBnZXRSb290Tm9kZShub2RlKTtcbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MyKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuICB2YXIgcmFkaW9TZXQ7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXNcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvMihub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gXCJyYWRpb1wiO1xufTtcbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8yKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG52YXIgaXNaZXJvQXJlYSA9IGZ1bmN0aW9uIGlzWmVyb0FyZWEyKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLCBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xufTtcbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuMihub2RlLCBfcmVmKSB7XG4gIHZhciBkaXNwbGF5Q2hlY2sgPSBfcmVmLmRpc3BsYXlDaGVjaywgZ2V0U2hhZG93Um9vdCA9IF9yZWYuZ2V0U2hhZG93Um9vdDtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgXCJkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZVwiKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsIFwiZGV0YWlsczpub3QoW29wZW5dKSAqXCIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIG5vZGVSb290SG9zdCA9IGdldFJvb3ROb2RlKG5vZGUpLmhvc3Q7XG4gIHZhciBub2RlSXNBdHRhY2hlZCA9IChub2RlUm9vdEhvc3QgPT09IG51bGwgfHwgbm9kZVJvb3RIb3N0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlUm9vdEhvc3Qub3duZXJEb2N1bWVudC5jb250YWlucyhub2RlUm9vdEhvc3QpKSB8fCBub2RlLm93bmVyRG9jdW1lbnQuY29udGFpbnMobm9kZSk7XG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gXCJmdWxsXCIpIHtcbiAgICBpZiAodHlwZW9mIGdldFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdmFyIG9yaWdpbmFsTm9kZSA9IG5vZGU7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUobm9kZSk7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QgJiYgZ2V0U2hhZG93Um9vdChwYXJlbnRFbGVtZW50KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUuYXNzaWduZWRTbG90O1xuICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlICE9PSBub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICBub2RlID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IG9yaWdpbmFsTm9kZTtcbiAgICB9XG4gICAgaWYgKG5vZGVJc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm4gIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gXCJub24temVyby1hcmVhXCIpIHtcbiAgICByZXR1cm4gaXNaZXJvQXJlYShub2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0Mihub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSBcIkZJRUxEU0VUXCIgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09IFwiTEVHRU5EXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwocGFyZW50Tm9kZSwgXCJmaWVsZHNldFtkaXNhYmxlZF0gKlwiKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZTIob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMpIHx8IC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUyKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDAgfHwgIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUgPSBmdW5jdGlvbiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlMihzaGFkb3dIb3N0Tm9kZSkge1xuICB2YXIgdGFiSW5kZXggPSBwYXJzZUludChzaGFkb3dIb3N0Tm9kZS5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSwgMTApO1xuICBpZiAoaXNOYU4odGFiSW5kZXgpIHx8IHRhYkluZGV4ID49IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHNvcnRCeU9yZGVyID0gZnVuY3Rpb24gc29ydEJ5T3JkZXIyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICB2YXIgaXNTY29wZSA9ICEhaXRlbS5zY29wZTtcbiAgICB2YXIgZWxlbWVudCA9IGlzU2NvcGUgPyBpdGVtLnNjb3BlIDogaXRlbTtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChlbGVtZW50LCBpc1Njb3BlKTtcbiAgICB2YXIgZWxlbWVudHMgPSBpc1Njb3BlID8gc29ydEJ5T3JkZXIyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgaXNTY29wZSA/IHJlZ3VsYXJUYWJiYWJsZXMucHVzaC5hcHBseShyZWd1bGFyVGFiYmFibGVzLCBlbGVtZW50cykgOiByZWd1bGFyVGFiYmFibGVzLnB1c2goZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaXNTY29wZSxcbiAgICAgICAgY29udGVudDogZWxlbWVudHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLnJlZHVjZShmdW5jdGlvbihhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlMihlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXM7XG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290LFxuICAgICAgc2hhZG93Um9vdEZpbHRlcjogaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuICByZXR1cm4gc29ydEJ5T3JkZXIoY2FuZGlkYXRlcyk7XG59O1xudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZTIoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuICBpZiAob3B0aW9ucy5nZXRTaGFkb3dSb290KSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShbZWxdLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIHtcbiAgICAgIGZpbHRlcjogaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpLFxuICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgIGdldFNoYWRvd1Jvb3Q6IG9wdGlvbnMuZ2V0U2hhZG93Um9vdFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIH1cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlMihub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBub2RlIHByb3ZpZGVkXCIpO1xuICB9XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KFwiaWZyYW1lXCIpLmpvaW4oXCIsXCIpO1xudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUyKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG5vZGUgcHJvdmlkZWRcIik7XG4gIH1cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvZGlzdC9mb2N1cy10cmFwLmVzbS5qc1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAodHJhcCkge1xuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBkZWFjdGl2YXRlVHJhcCh0cmFwKSB7XG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSgpO1xudmFyIGlzU2VsZWN0YWJsZUlucHV0ID0gZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQyKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmIHR5cGVvZiBub2RlLnNlbGVjdCA9PT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciBpc0VzY2FwZUV2ZW50ID0gZnVuY3Rpb24gaXNFc2NhcGVFdmVudDIoZSkge1xuICByZXR1cm4gZS5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZS5rZXkgPT09IFwiRXNjXCIgfHwgZS5rZXlDb2RlID09PSAyNztcbn07XG52YXIgaXNUYWJFdmVudCA9IGZ1bmN0aW9uIGlzVGFiRXZlbnQyKGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSBcIlRhYlwiIHx8IGUua2V5Q29kZSA9PT0gOTtcbn07XG52YXIgZGVsYXkgPSBmdW5jdGlvbiBkZWxheTIoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufTtcbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgyKGFyciwgZm4pIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBhcnIuZXZlcnkoZnVuY3Rpb24odmFsdWUsIGkpIHtcbiAgICBpZiAoZm4odmFsdWUpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBpZHg7XG59O1xudmFyIHZhbHVlT3JIYW5kbGVyID0gZnVuY3Rpb24gdmFsdWVPckhhbmRsZXIyKHZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUuYXBwbHkodm9pZCAwLCBwYXJhbXMpIDogdmFsdWU7XG59O1xudmFyIGdldEFjdHVhbFRhcmdldCA9IGZ1bmN0aW9uIGdldEFjdHVhbFRhcmdldDIoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5zaGFkb3dSb290ICYmIHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIiA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdIDogZXZlbnQudGFyZ2V0O1xufTtcbnZhciBjcmVhdGVGb2N1c1RyYXAgPSBmdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXAyKGVsZW1lbnRzLCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy5kb2N1bWVudCkgfHwgZG9jdW1lbnQ7XG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZGVsYXlJbml0aWFsRm9jdXM6IHRydWVcbiAgfSwgdXNlck9wdGlvbnMpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gY29udGFpbmVycyBnaXZlbiB0byBjcmVhdGVGb2N1c1RyYXAoKVxuICAgIC8vIEB0eXBlIHtBcnJheTxIVE1MRWxlbWVudD59XG4gICAgY29udGFpbmVyczogW10sXG4gICAgLy8gbGlzdCBvZiBvYmplY3RzIGlkZW50aWZ5aW5nIHRhYmJhYmxlIG5vZGVzIGluIGBjb250YWluZXJzYCBpbiB0aGUgdHJhcFxuICAgIC8vIE5PVEU6IGl0J3MgcG9zc2libGUgdGhhdCBhIGdyb3VwIGhhcyBubyB0YWJiYWJsZSBub2RlcyBpZiBub2RlcyBnZXQgcmVtb3ZlZCB3aGlsZSB0aGUgdHJhcFxuICAgIC8vICBpcyBhY3RpdmUsIGJ1dCB0aGUgdHJhcCBzaG91bGQgbmV2ZXIgZ2V0IHRvIGEgc3RhdGUgd2hlcmUgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGdyb3VwXG4gICAgLy8gIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgKHRoYXQgd291bGQgbGVhZCB0byBhbiBlcnJvciBjb25kaXRpb24gdGhhdCB3b3VsZFxuICAgIC8vICByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmcgdGhyb3duKVxuICAgIC8vIEB0eXBlIHtBcnJheTx7XG4gICAgLy8gICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIC8vICAgdGFiYmFibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmb2N1c2FibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmaXJzdFRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8bnVsbCxcbiAgICAvLyAgIGxhc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsXG4gICAgLy8gICBuZXh0VGFiYmFibGVOb2RlOiAobm9kZTogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IGJvb2xlYW4pID0+IEhUTUxFbGVtZW50fHVuZGVmaW5lZFxuICAgIC8vIH0+fVxuICAgIGNvbnRhaW5lckdyb3VwczogW10sXG4gICAgLy8gc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbnRhaW5lcnNgIGxpc3RcbiAgICAvLyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBvbmx5IHRob3NlIHRoYXQgYWN0dWFsbHkgaGF2ZVxuICAgIC8vICB0YWJiYWJsZSBub2RlcyBpbiB0aGVtXG4gICAgLy8gTk9URTogc2FtZSBvcmRlciBhcyBgY29udGFpbmVyc2AgYW5kIGBjb250YWluZXJHcm91cHNgLCBidXQgX19ub3QgbmVjZXNzYXJpbHlfX1xuICAgIC8vICB0aGUgc2FtZSBsZW5ndGhcbiAgICB0YWJiYWJsZUdyb3VwczogW10sXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICAvLyB0aW1lciBJRCBmb3Igd2hlbiBkZWxheUluaXRpYWxGb2N1cyBpcyB0cnVlIGFuZCBpbml0aWFsIGZvY3VzIGluIHRoaXMgdHJhcFxuICAgIC8vICBoYXMgYmVlbiBkZWxheWVkIGR1cmluZyBhY3RpdmF0aW9uXG4gICAgZGVsYXlJbml0aWFsRm9jdXNUaW1lcjogdm9pZCAwXG4gIH07XG4gIHZhciB0cmFwO1xuICB2YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gZ2V0T3B0aW9uMihjb25maWdPdmVycmlkZU9wdGlvbnMsIG9wdGlvbk5hbWUsIGNvbmZpZ09wdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gY29uZmlnT3ZlcnJpZGVPcHRpb25zICYmIGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gdm9pZCAwID8gY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdIDogY29uZmlnW2NvbmZpZ09wdGlvbk5hbWUgfHwgb3B0aW9uTmFtZV07XG4gIH07XG4gIHZhciBmaW5kQ29udGFpbmVySW5kZXggPSBmdW5jdGlvbiBmaW5kQ29udGFpbmVySW5kZXgyKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbmRJbmRleChmdW5jdGlvbihfcmVmKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3JlZi5jb250YWluZXIsIHRhYmJhYmxlTm9kZXMgPSBfcmVmLnRhYmJhYmxlTm9kZXM7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpIHx8IC8vIGZhbGwgYmFjayB0byBleHBsaWNpdCB0YWJiYWJsZSBzZWFyY2ggd2hpY2ggd2lsbCB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBhbnlcbiAgICAgIC8vICB3ZWIgY29tcG9uZW50cyBpZiB0aGUgYHRhYmJhYmxlT3B0aW9ucy5nZXRTaGFkb3dSb290YCBvcHRpb24gd2FzIHVzZWQgZm9yXG4gICAgICAvLyAgdGhlIHRyYXAsIGVuYWJsaW5nIHNoYWRvdyBET00gc3VwcG9ydCBpbiB0YWJiYWJsZSAoYE5vZGUuY29udGFpbnMoKWAgZG9lc24ndFxuICAgICAgLy8gIGxvb2sgaW5zaWRlIHdlYiBjb21wb25lbnRzIGV2ZW4gaWYgb3BlbilcbiAgICAgIHRhYmJhYmxlTm9kZXMuZmluZChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBnZXROb2RlRm9yT3B0aW9uID0gZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbjIob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgcGFyYW1zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uVmFsdWUgPSB2b2lkIDA7XG4gICAgfVxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdm9pZCAwIHx8IG9wdGlvblZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uVmFsdWU7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCB3YXMgc3BlY2lmaWVkIGJ1dCB3YXMgbm90IGEgbm9kZSwgb3IgZGlkIG5vdCByZXR1cm4gYSBub2RlXCIpKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIGFzIHNlbGVjdG9yIHJlZmVycyB0byBubyBrbm93biBub2RlXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciBnZXRJbml0aWFsRm9jdXNOb2RlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZTIoKSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKFwiaW5pdGlhbEZvY3VzXCIpO1xuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KGRvYy5hY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXTtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgbm9kZSA9IGZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oXCJmYWxsYmFja0ZvY3VzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgZm9jdXMtdHJhcCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciB1cGRhdGVUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlczIoKSB7XG4gICAgc3RhdGUuY29udGFpbmVyR3JvdXBzID0gc3RhdGUuY29udGFpbmVycy5tYXAoZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlcyxcbiAgICAgICAgZm9jdXNhYmxlTm9kZXMsXG4gICAgICAgIGZpcnN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzWzBdIDogbnVsbCxcbiAgICAgICAgbGFzdFRhYmJhYmxlTm9kZTogdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBfX3RhYmJhYmxlX18gbm9kZSB0aGF0IGZvbGxvd3MgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24sXG4gICAgICAgICAqICBpbiB0aGlzIGNvbnRhaW5lciwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcndhcmRdIFRydWUgaWYgZ29pbmcgaW4gZm9yd2FyZCB0YWIgb3JkZXI7IGZhbHNlIGlmIGdvaW5nXG4gICAgICAgICAqICBpbiByZXZlcnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBUaGUgbmV4dCB0YWJiYWJsZSBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGFiYmFibGVOb2RlOiBmdW5jdGlvbiBuZXh0VGFiYmFibGVOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgZm9yd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgICB2YXIgbm9kZUlkeCA9IGZvY3VzYWJsZU5vZGVzLmZpbmRJbmRleChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICByZXR1cm4gbiA9PT0gbm9kZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobm9kZUlkeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2Uobm9kZUlkeCArIDEpLmZpbmQoZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShuLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2UoMCwgbm9kZUlkeCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUobiwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgc3RhdGUudGFiYmFibGVHcm91cHMgPSBzdGF0ZS5jb250YWluZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICByZXR1cm4gZ3JvdXAudGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwO1xuICAgIH0pO1xuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPD0gMCAmJiAhZ2V0Tm9kZUZvck9wdGlvbihcImZhbGxiYWNrRm9jdXNcIikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgZm9jdXMtdHJhcCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNvbnRhaW5lciB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0IGF0IGFsbCB0aW1lc1wiKTtcbiAgICB9XG4gIH07XG4gIHZhciB0cnlGb2N1cyA9IGZ1bmN0aW9uIHRyeUZvY3VzMihub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzMihnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldFJldHVybkZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldFJldHVybkZvY3VzTm9kZTIocHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKFwic2V0UmV0dXJuRm9jdXNcIiwgcHJldmlvdXNBY3RpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gbm9kZSA/IG5vZGUgOiBub2RlID09PSBmYWxzZSA/IGZhbHNlIDogcHJldmlvdXNBY3RpdmVFbGVtZW50O1xuICB9O1xuICB2YXIgY2hlY2tQb2ludGVyRG93biA9IGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24yKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0KSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICB0cmFwLmRlYWN0aXZhdGUoe1xuICAgICAgICAvLyBpZiwgb24gZGVhY3RpdmF0aW9uLCB3ZSBzaG91bGQgcmV0dXJuIGZvY3VzIHRvIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgd2hlbiB0aGUgdHJhcCB3YXMgYWN0aXZhdGVkIChvciB0aGUgY29uZmlndXJlZCBgc2V0UmV0dXJuRm9jdXNgIG5vZGUpLFxuICAgICAgICAvLyAgdGhlbiBhc3N1bWUgaXQncyBhbHNvIE9LIHRvIHJldHVybiBmb2N1cyB0byB0aGUgb3V0c2lkZSBub2RlIHRoYXQgd2FzXG4gICAgICAgIC8vICBqdXN0IGNsaWNrZWQsIGNhdXNpbmcgZGVhY3RpdmF0aW9uLCBhcyBsb25nIGFzIHRoYXQgbm9kZSBpcyBmb2N1c2FibGU7XG4gICAgICAgIC8vICBpZiBpdCBpc24ndCBmb2N1c2FibGUsIHRoZW4gcmV0dXJuIGZvY3VzIHRvIHRoZSBvcmlnaW5hbCBub2RlIGZvY3VzZWRcbiAgICAgICAgLy8gIG9uIGFjdGl2YXRpb24gKG9yIHRoZSBjb25maWd1cmVkIGBzZXRSZXR1cm5Gb2N1c2Agbm9kZSlcbiAgICAgICAgLy8gTk9URTogYnkgc2V0dGluZyBgcmV0dXJuRm9jdXM6IGZhbHNlYCwgZGVhY3RpdmF0ZSgpIHdpbGwgZG8gbm90aGluZyxcbiAgICAgICAgLy8gIHdoaWNoIHdpbGwgcmVzdWx0IGluIHRoZSBvdXRzaWRlIGNsaWNrIHNldHRpbmcgZm9jdXMgdG8gdGhlIG5vZGVcbiAgICAgICAgLy8gIHRoYXQgd2FzIGNsaWNrZWQsIHdoZXRoZXIgaXQncyBmb2N1c2FibGUgb3Igbm90OyBieSBzZXR0aW5nXG4gICAgICAgIC8vICBgcmV0dXJuRm9jdXM6IHRydWVgLCB3ZSdsbCBhdHRlbXB0IHRvIHJlLWZvY3VzIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgb24gYWN0aXZhdGlvbiAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKVxuICAgICAgICByZXR1cm5Gb2N1czogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlICYmICFpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuICB2YXIgY2hlY2tGb2N1c0luID0gZnVuY3Rpb24gY2hlY2tGb2N1c0luMihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVkID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCkgPj0gMDtcbiAgICBpZiAodGFyZ2V0Q29udGFpbmVkIHx8IHRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBpZiAodGFyZ2V0Q29udGFpbmVkKSB7XG4gICAgICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07XG4gIHZhciBjaGVja1RhYiA9IGZ1bmN0aW9uIGNoZWNrVGFiMihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdmFyIGRlc3RpbmF0aW9uTm9kZSA9IG51bGw7XG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQpO1xuICAgICAgdmFyIGNvbnRhaW5lckdyb3VwID0gY29udGFpbmVySW5kZXggPj0gMCA/IHN0YXRlLmNvbnRhaW5lckdyb3Vwc1tjb250YWluZXJJbmRleF0gOiB2b2lkIDA7XG4gICAgICBpZiAoY29udGFpbmVySW5kZXggPCAwKSB7XG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMV0ubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXS5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIHZhciBzdGFydE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBfcmVmMi5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBmaXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA8IDAgJiYgKGNvbnRhaW5lckdyb3VwLmNvbnRhaW5lciA9PT0gdGFyZ2V0IHx8IGlzRm9jdXNhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWlzVGFiYmFibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQsIGZhbHNlKSkpIHtcbiAgICAgICAgICBzdGFydE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXBJbmRleCA9IHN0YXJ0T2ZHcm91cEluZGV4ID09PSAwID8gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA6IHN0YXJ0T2ZHcm91cEluZGV4IC0gMTtcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gZGVzdGluYXRpb25Hcm91cC5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGFzdE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24oX3JlZjMpIHtcbiAgICAgICAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IF9yZWYzLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCkpKSB7XG4gICAgICAgICAgbGFzdE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXBJbmRleCA9IGxhc3RPZkdyb3VwSW5kZXggPT09IHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDEgPyAwIDogbGFzdE9mR3JvdXBJbmRleCArIDE7XG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbX2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gX2Rlc3RpbmF0aW9uR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25Ob2RlID0gZ2V0Tm9kZUZvck9wdGlvbihcImZhbGxiYWNrRm9jdXNcIik7XG4gICAgfVxuICAgIGlmIChkZXN0aW5hdGlvbk5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKGRlc3RpbmF0aW9uTm9kZSk7XG4gICAgfVxuICB9O1xuICB2YXIgY2hlY2tLZXkgPSBmdW5jdGlvbiBjaGVja0tleTIoZSkge1xuICAgIGlmIChpc0VzY2FwZUV2ZW50KGUpICYmIHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcywgZSkgIT09IGZhbHNlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcbiAgdmFyIGNoZWNrQ2xpY2sgPSBmdW5jdGlvbiBjaGVja0NsaWNrMihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTtcbiAgdmFyIGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyczIoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG4gICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IGNvbmZpZy5kZWxheUluaXRpYWxGb2N1cyA/IGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KSA6IHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrS2V5LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcbiAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyczIoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcbiAgdHJhcCA9IHtcbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGl2ZTtcbiAgICB9LFxuICAgIGdldCBwYXVzZWQoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucGF1c2VkO1xuICAgIH0sXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvbkFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgXCJvbkFjdGl2YXRlXCIpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgXCJvblBvc3RBY3RpdmF0ZVwiKTtcbiAgICAgIHZhciBjaGVja0NhbkZvY3VzVHJhcCA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsIFwiY2hlY2tDYW5Gb2N1c1RyYXBcIik7XG4gICAgICBpZiAoIWNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgaWYgKG9uQWN0aXZhdGUpIHtcbiAgICAgICAgb25BY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgICAgdmFyIGZpbmlzaEFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hBY3RpdmF0aW9uMigpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICBpZiAob25Qb3N0QWN0aXZhdGUpIHtcbiAgICAgICAgICBvblBvc3RBY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIGNoZWNrQ2FuRm9jdXNUcmFwKHN0YXRlLmNvbnRhaW5lcnMuY29uY2F0KCkpLnRoZW4oZmluaXNoQWN0aXZhdGlvbiwgZmluaXNoQWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoQWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBvbkRlYWN0aXZhdGU6IGNvbmZpZy5vbkRlYWN0aXZhdGUsXG4gICAgICAgIG9uUG9zdERlYWN0aXZhdGU6IGNvbmZpZy5vblBvc3REZWFjdGl2YXRlLFxuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzOiBjb25maWcuY2hlY2tDYW5SZXR1cm5Gb2N1c1xuICAgICAgfSwgZGVhY3RpdmF0ZU9wdGlvbnMpO1xuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIpO1xuICAgICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IHZvaWQgMDtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG4gICAgICB2YXIgb25EZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwib25EZWFjdGl2YXRlXCIpO1xuICAgICAgdmFyIG9uUG9zdERlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJvblBvc3REZWFjdGl2YXRlXCIpO1xuICAgICAgdmFyIGNoZWNrQ2FuUmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJjaGVja0NhblJldHVybkZvY3VzXCIpO1xuICAgICAgdmFyIHJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwicmV0dXJuRm9jdXNcIiwgXCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZVwiKTtcbiAgICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgICB2YXIgZmluaXNoRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoRGVhY3RpdmF0aW9uMigpIHtcbiAgICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICAgICAgICB0cnlGb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvblBvc3REZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICBvblBvc3REZWFjdGl2YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAocmV0dXJuRm9jdXMgJiYgY2hlY2tDYW5SZXR1cm5Gb2N1cykge1xuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKS50aGVuKGZpbmlzaERlYWN0aXZhdGlvbiwgZmluaXNoRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmaW5pc2hEZWFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1bnBhdXNlOiBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzOiBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJFbGVtZW50cyhjb250YWluZXJFbGVtZW50cykge1xuICAgICAgdmFyIGVsZW1lbnRzQXNBcnJheSA9IFtdLmNvbmNhdChjb250YWluZXJFbGVtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgc3RhdGUuY29udGFpbmVycyA9IGVsZW1lbnRzQXNBcnJheS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuICB0cmFwLnVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGVsZW1lbnRzKTtcbiAgcmV0dXJuIHRyYXA7XG59O1xuXG4vLyBwYWNrYWdlcy9mb2N1cy9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBsZXQgbGFzdEZvY3VzZWQ7XG4gIGxldCBjdXJyZW50Rm9jdXNlZDtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsICgpID0+IHtcbiAgICBsYXN0Rm9jdXNlZCA9IGN1cnJlbnRGb2N1c2VkO1xuICAgIGN1cnJlbnRGb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfSk7XG4gIEFscGluZS5tYWdpYyhcImZvY3VzXCIsIChlbCkgPT4ge1xuICAgIGxldCB3aXRoaW4gPSBlbDtcbiAgICByZXR1cm4ge1xuICAgICAgX19ub3Njcm9sbDogZmFsc2UsXG4gICAgICBfX3dyYXBBcm91bmQ6IGZhbHNlLFxuICAgICAgd2l0aGluKGVsMikge1xuICAgICAgICB3aXRoaW4gPSBlbDI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHdpdGhvdXRTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuX19ub3Njcm9sbCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIG5vc2Nyb2xsKCkge1xuICAgICAgICB0aGlzLl9fbm9zY3JvbGwgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICB3aXRoV3JhcEFyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fX3dyYXBBcm91bmQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICB3cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoV3JhcEFyb3VuZCgpO1xuICAgICAgfSxcbiAgICAgIGZvY3VzYWJsZShlbDIpIHtcbiAgICAgICAgcmV0dXJuIGlzRm9jdXNhYmxlKGVsMik7XG4gICAgICB9LFxuICAgICAgcHJldmlvdXNseUZvY3VzZWQoKSB7XG4gICAgICAgIHJldHVybiBsYXN0Rm9jdXNlZDtcbiAgICAgIH0sXG4gICAgICBsYXN0Rm9jdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGxhc3RGb2N1c2VkO1xuICAgICAgfSxcbiAgICAgIGZvY3VzZWQoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Rm9jdXNlZDtcbiAgICAgIH0sXG4gICAgICBmb2N1c2FibGVzKCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh3aXRoaW4pKVxuICAgICAgICAgIHJldHVybiB3aXRoaW47XG4gICAgICAgIHJldHVybiBmb2N1c2FibGUod2l0aGluLCB7IGRpc3BsYXlDaGVjazogXCJub25lXCIgfSk7XG4gICAgICB9LFxuICAgICAgYWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVzKCk7XG4gICAgICB9LFxuICAgICAgaXNGaXJzdChlbDIpIHtcbiAgICAgICAgbGV0IGVscyA9IHRoaXMuYWxsKCk7XG4gICAgICAgIHJldHVybiBlbHNbMF0gJiYgZWxzWzBdLmlzU2FtZU5vZGUoZWwyKTtcbiAgICAgIH0sXG4gICAgICBpc0xhc3QoZWwyKSB7XG4gICAgICAgIGxldCBlbHMgPSB0aGlzLmFsbCgpO1xuICAgICAgICByZXR1cm4gZWxzLmxlbmd0aCAmJiBlbHMuc2xpY2UoLTEpWzBdLmlzU2FtZU5vZGUoZWwyKTtcbiAgICAgIH0sXG4gICAgICBnZXRGaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsKClbMF07XG4gICAgICB9LFxuICAgICAgZ2V0TGFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsKCkuc2xpY2UoLTEpWzBdO1xuICAgICAgfSxcbiAgICAgIGdldE5leHQoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5hbGwoKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAobGlzdC5pbmRleE9mKGN1cnJlbnQpID09PSAtMSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLl9fd3JhcEFyb3VuZCAmJiBsaXN0LmluZGV4T2YoY3VycmVudCkgPT09IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybiBsaXN0WzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0W2xpc3QuaW5kZXhPZihjdXJyZW50KSArIDFdO1xuICAgICAgfSxcbiAgICAgIGdldFByZXZpb3VzKCkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuYWxsKCk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGxpc3QuaW5kZXhPZihjdXJyZW50KSA9PT0gLTEpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5fX3dyYXBBcm91bmQgJiYgbGlzdC5pbmRleE9mKGN1cnJlbnQpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3Quc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0W2xpc3QuaW5kZXhPZihjdXJyZW50KSAtIDFdO1xuICAgICAgfSxcbiAgICAgIGZpcnN0KCkge1xuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuZ2V0Rmlyc3QoKSk7XG4gICAgICB9LFxuICAgICAgbGFzdCgpIHtcbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLmdldExhc3QoKSk7XG4gICAgICB9LFxuICAgICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLmdldE5leHQoKSk7XG4gICAgICB9LFxuICAgICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXModGhpcy5nZXRQcmV2aW91cygpKTtcbiAgICAgIH0sXG4gICAgICBwcmV2KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpO1xuICAgICAgfSxcbiAgICAgIGZvY3VzKGVsMikge1xuICAgICAgICBpZiAoIWVsMilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghZWwyLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpKVxuICAgICAgICAgICAgZWwyLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICBlbDIuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0aGlzLl9fbm9zY3JvbGwgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBBbHBpbmUuZGlyZWN0aXZlKFwidHJhcFwiLCBBbHBpbmUuc2tpcER1cmluZ0Nsb25lKFxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMgfSwgeyBlZmZlY3QsIGV2YWx1YXRlTGF0ZXIsIGNsZWFudXAgfSkgPT4ge1xuICAgICAgbGV0IGV2YWx1YXRvciA9IGV2YWx1YXRlTGF0ZXIoZXhwcmVzc2lvbik7XG4gICAgICBsZXQgb2xkVmFsdWUgPSBmYWxzZTtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICBmYWxsYmFja0ZvY3VzOiAoKSA9PiBlbFxuICAgICAgfTtcbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJub2F1dG9mb2N1c1wiKSkge1xuICAgICAgICBvcHRpb25zLmluaXRpYWxGb2N1cyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF1dG9mb2N1c0VsID0gZWwucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpO1xuICAgICAgICBpZiAoYXV0b2ZvY3VzRWwpXG4gICAgICAgICAgb3B0aW9ucy5pbml0aWFsRm9jdXMgPSBhdXRvZm9jdXNFbDtcbiAgICAgIH1cbiAgICAgIGxldCB0cmFwID0gY3JlYXRlRm9jdXNUcmFwKGVsLCBvcHRpb25zKTtcbiAgICAgIGxldCB1bmRvSW5lcnQgPSAoKSA9PiB7XG4gICAgICB9O1xuICAgICAgbGV0IHVuZG9EaXNhYmxlU2Nyb2xsaW5nID0gKCkgPT4ge1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlbGVhc2VGb2N1cyA9ICgpID0+IHtcbiAgICAgICAgdW5kb0luZXJ0KCk7XG4gICAgICAgIHVuZG9JbmVydCA9ICgpID0+IHtcbiAgICAgICAgfTtcbiAgICAgICAgdW5kb0Rpc2FibGVTY3JvbGxpbmcoKTtcbiAgICAgICAgdW5kb0Rpc2FibGVTY3JvbGxpbmcgPSAoKSA9PiB7XG4gICAgICAgIH07XG4gICAgICAgIHRyYXAuZGVhY3RpdmF0ZSh7XG4gICAgICAgICAgcmV0dXJuRm9jdXM6ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJub3JldHVyblwiKVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBlZmZlY3QoKCkgPT4gZXZhbHVhdG9yKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlICYmICFvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJub3Njcm9sbFwiKSlcbiAgICAgICAgICAgIHVuZG9EaXNhYmxlU2Nyb2xsaW5nID0gZGlzYWJsZVNjcm9sbGluZygpO1xuICAgICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpbmVydFwiKSlcbiAgICAgICAgICAgIHVuZG9JbmVydCA9IHNldEluZXJ0KGVsKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgICB9LCAxNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSAmJiBvbGRWYWx1ZSkge1xuICAgICAgICAgIHJlbGVhc2VGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIG9sZFZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH0pKTtcbiAgICAgIGNsZWFudXAocmVsZWFzZUZvY3VzKTtcbiAgICB9LFxuICAgIC8vIFdoZW4gY2xvbmluZywgd2Ugb25seSB3YW50IHRvIGFkZCBhcmlhLWhpZGRlbiBhdHRyaWJ1dGVzIHRvIHRoZVxuICAgIC8vIERPTSBhbmQgbm90IHRyeSB0byBhY3R1YWxseSB0cmFwLCBhcyB0cmFwcGluZyBjYW4gbWVzcyB3aXRoIHRoZVxuICAgIC8vIGxpdmUgRE9NIGFuZCBpc24ndCBqdXN0IGlzb2xhdGVkIHRvIHRoZSBjbG9uZWQgRE9NLlxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMgfSwgeyBldmFsdWF0ZSB9KSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5lcnRcIikgJiYgZXZhbHVhdGUoZXhwcmVzc2lvbikpXG4gICAgICAgIHNldEluZXJ0KGVsKTtcbiAgICB9XG4gICkpO1xufVxuZnVuY3Rpb24gc2V0SW5lcnQoZWwpIHtcbiAgbGV0IHVuZG9zID0gW107XG4gIGNyYXdsU2libGluZ3NVcChlbCwgKHNpYmxpbmcpID0+IHtcbiAgICBsZXQgY2FjaGUgPSBzaWJsaW5nLmhhc0F0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgIHVuZG9zLnB1c2goKCkgPT4gY2FjaGUgfHwgc2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlICh1bmRvcy5sZW5ndGgpXG4gICAgICB1bmRvcy5wb3AoKSgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3Jhd2xTaWJsaW5nc1VwKGVsLCBjYWxsYmFjaykge1xuICBpZiAoZWwuaXNTYW1lTm9kZShkb2N1bWVudC5ib2R5KSB8fCAhZWwucGFyZW50Tm9kZSlcbiAgICByZXR1cm47XG4gIEFycmF5LmZyb20oZWwucGFyZW50Tm9kZS5jaGlsZHJlbikuZm9yRWFjaCgoc2libGluZykgPT4ge1xuICAgIGlmIChzaWJsaW5nLmlzU2FtZU5vZGUoZWwpKSB7XG4gICAgICBjcmF3bFNpYmxpbmdzVXAoZWwucGFyZW50Tm9kZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzaWJsaW5nKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbGluZygpIHtcbiAgbGV0IG92ZXJmbG93ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICBsZXQgcGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgbGV0IHNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdSaWdodDtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvZm9jdXMvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBtb2R1bGVfZGVmYXVsdCBhcyBkZWZhdWx0LFxuICBzcmNfZGVmYXVsdCBhcyBmb2N1c1xufTtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnRhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzOlxuICAoKiFcbiAgKiB0YWJiYWJsZSA1LjMuM1xuICAqIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAqKVxuXG5mb2N1cy10cmFwL2Rpc3QvZm9jdXMtdHJhcC5lc20uanM6XG4gICgqIVxuICAqIGZvY3VzLXRyYXAgNi45LjRcbiAgKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAqKVxuKi9cbiIsICJpbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuICAgIGFjdGl2ZUhlYWRpbmc6IG51bGwsXG4gICAgaW5pdCgpIHtcbiAgICAgICAgQWxwaW5lLm5leHRUaWNrKCgpPT57XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiKTtcblxuICAgICAgICAgICAgaWYgKGhlYWRpbmdFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVIZWFkaW5nID0gaGVhZGluZ0VsZW1lbnRzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpPy5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZUhlYWRpbmdzID0gZW50cmllcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nLFxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUhlYWRpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRhcmdldC5vZmZzZXRUb3AgLSBiLnRhcmdldC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGVIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSB2aXNpYmxlIGhlYWRpbmcgd2l0aCB0aGUgbG93ZXN0IHRvcCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wSGVhZGluZyA9IHZpc2libGVIZWFkaW5ncy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZXYsIGN1cnJlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuYm91bmRpbmdDbGllbnRSZWN0LnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcmV2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSGVhZGluZyA9IHRvcEhlYWRpbmcudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2EnKT8uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgcm9vdE1hcmdpbjogJzBweCAwcHggLTc1JSAwcHgnLCB0aHJlc2hvbGQ6IDAuNyB9LFxuICAgICAgICAgICAgKVxuICAgIFxuICAgICAgICAgICAgaGVhZGluZ0VsZW1lbnRzLmZvckVhY2goaGVhZGluZyA9PiBvYnNlcnZlci5vYnNlcnZlKGhlYWRpbmcpKTtcbiAgICAgICAgfSlcblxuICAgIH0sXG59KTtcbiIsICJleHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuICAgIGFjdGl2ZUlkOiBudWxsLFxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuYWN0aXZhdGUodGhpcy4kaWQoXCJ0YWJcIiwgMSkpKTtcbiAgICB9LFxuICAgIGFjdGl2YXRlKGlkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSWQgPSBpZDtcbiAgICB9LFxuICAgIGlzQWN0aXZlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUlkID09PSBpZDtcbiAgICB9LFxuICAgIGdldFRhYkluZGV4KGVsLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5pbmRleE9mKGVsKSArIDE7XG4gICAgfSxcbn0pO1xuIiwgImV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuO1xuICAgIH0sXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kcmVmcy5idXR0b24uZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIH0sXG4gICAgY2xvc2UoZm9jdXNBZnRlcikge1xuICAgICAgICBpZiAoIXRoaXMub3BlbikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIGZvY3VzQWZ0ZXIgJiYgZm9jdXNBZnRlci5mb2N1cygpO1xuICAgIH0sXG4gICAgaGFuZGxlRm9jdXNJbk91dChldmVudCkge1xuICAgICAgICBjb25zdCBwYW5lbCA9IHRoaXMuJHJlZnMucGFuZWw7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuJHJlZnMuYnV0dG9uO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHBhbmVsLmNvbnRhaW5zKHRhcmdldCkgfHwgYnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlRHJvcGRvd24oYnV0dG9uLCBwYW5lbCwgbGFzdEZvY3VzZWRFbGVtZW50KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoYnV0dG9uKTtcbiAgICB9LFxuICAgIHNob3VsZENsb3NlRHJvcGRvd24oYnV0dG9uLCBwYW5lbCwgbGFzdEZvY3VzZWRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhYnV0dG9uLmNvbnRhaW5zKGxhc3RGb2N1c2VkRWxlbWVudCkgJiZcbiAgICAgICAgICAgICFwYW5lbC5jb250YWlucyhsYXN0Rm9jdXNlZEVsZW1lbnQpICYmXG4gICAgICAgICAgICBsYXN0Rm9jdXNlZEVsZW1lbnQgJiZcbiAgICAgICAgICAgIGJ1dHRvbi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihsYXN0Rm9jdXNlZEVsZW1lbnQpICZcbiAgICAgICAgICAgICAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lOR1xuICAgICAgICApO1xuICAgIH0sXG59KTtcbiIsICJleHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbjtcbiAgICB9LFxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5vcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuU2lkZWJhcigpO1xuICAgIH0sXG4gICAgb3BlblNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxufSk7XG4iLCAiaW1wb3J0IENsaXBib2FyZEpTIGZyb20gXCJjbGlwYm9hcmQvZGlzdC9jbGlwYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgICBjb2RlQmxvY2tzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlXCIpIHx8IFtdLFxuICAgIGNsaXBib2FyZEljb246IGA8c3ZnIGNsYXNzPVwidy01IGgtNSBmaWxsLWJhc2UtMzAwIHRyYW5zaXRpb24gaGlkZGVuIGdyb3VwLWhvdmVyOiFibG9jayBhYnNvbHV0ZSB6LTMwIHRvcC0zIHJpZ2h0LTMgY3Vyc29yLXBvaW50ZXJcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMyAxMi40MzE2VjcuODEyNUMxMyA2LjI1OTIgMTQuMjU5MiA1IDE1LjgxMjUgNUg0MC4xODc1QzQxLjc0MDggNSA0MyA2LjI1OTIgNDMgNy44MTI1VjMyLjE4NzVDNDMgMzMuNzQwOCA0MS43NDA4IDM1IDQwLjE4NzUgMzVIMzUuNTE2M1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PHBhdGggZD1cIk0zMi4xODc1IDEzSDcuODEyNUM2LjI1OTIgMTMgNSAxNC4yNTkyIDUgMTUuODEyNVY0MC4xODc1QzUgNDEuNzQwOCA2LjI1OTIgNDMgNy44MTI1IDQzSDMyLjE4NzVDMzMuNzQwOCA0MyAzNSA0MS43NDA4IDM1IDQwLjE4NzVWMTUuODEyNUMzNSAxNC4yNTkyIDMzLjc0MDggMTMgMzIuMTg3NSAxM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPmAsXG4gICAgY2xpcGJvYXJkQ29waWVkSWNvbjogYDxzdmcgY2xhc3M9XCJ3LTUgaC01IHRyYW5zaXRpb24gYWJzb2x1dGUgei0zMCB0b3AtMyByaWdodC0zIGZpbGwtcHJpbWFyeVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0yMjkuNjYsNzcuNjZsLTEyOCwxMjhhOCw4LDAsMCwxLTExLjMyLDBsLTU2LTU2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkw5NiwxODguNjksMjE4LjM0LDY2LjM0YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlpcIj48L3BhdGg+PC9zdmc+YCxcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNvZGVCbG9ja3MuZm9yRWFjaCgoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgW1wicmVsYXRpdmVcIiwgXCJjb2RlLWJsb2NrLXdyYXBwZXJcIiAsIFwiZ3JvdXBcIl0uZm9yRWFjaCgodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKHZhbHVlKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IGNvcHlUb0NsaXBib2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5jbGlwYm9hcmRJY29uO1xuICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkQnV0dG9uLmlkID0gYGNvZGUtYmxvY2stY29weS1idXR0b24tJHtrZXl9YDtcbiAgICAgICAgICAgIFtcIm1kOmJsb2NrXCIsIFwiaGlkZGVuXCJdLmZvckVhY2goKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkQnV0dG9uLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBcIkNvcHkgdG8gQ2xpcGJvYXJkXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmRCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJDb3B5IHRvIENsaXBib2FyZFwiKTtcbiAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29kZS1ibG9jay1jb3B5LWJ1dHRvblwiLFwidGV4dC1wcmltYXJ5XCIpO1xuXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvcHlUb0NsaXBib2FyZEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGxldCBjb3B5VG9DbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoXG4gICAgICAgICAgICAgICAgYCMke2NvcHlUb0NsaXBib2FyZEJ1dHRvbi5pZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkLm9uKFwic3VjY2Vzc1wiLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmNsaXBib2FyZENvcGllZEljb247XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoY29weVRvQ2xpcGJvYXJkQnV0dG9uLmlubmVySFRNTCA9IHRoaXMuY2xpcGJvYXJkSWNvbiksXG4gICAgICAgICAgICAgICAgICAgIDE1MDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBgY29kZS1ibG9jay10ZXh0LSR7a2V5fWA7XG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmRCdXR0b24uZGF0YXNldC5jbGlwYm9hcmRUYXJnZXQgPSBgIyR7ZWxlbWVudC5pZH1gO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG4iLCAiZXhwb3J0IGRlZmF1bHQgKHtcbiAgICBsaWdodE1vZGUgPSBudWxsLFxuICAgIGRhcmtNb2RlID0gbnVsbCxcbiAgICBoaWdobGlnaHRpbmdMaWdodE1vZGUgPSBudWxsLFxuICAgIGhpZ2hsaWdodGluZ0RhcmtNb2RlID0gbnVsbCxcbn0pID0+ICh7XG4gICAgYWN0aXZlVGhlbWU6IG51bGwsXG4gICAgbGlnaHRNb2RlLFxuICAgIGRhcmtNb2RlLFxuXG4gICAgdXBkYXRlSGlnaGxpZ2h0ZXJUaGVtZSgpIHtcbiAgICAgICAgbGV0IGNvZGVUaGVtZSA9XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID09PSBcImRhcmtcIlxuICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0aW5nRGFya01vZGVcbiAgICAgICAgICAgICAgICA6IGhpZ2hsaWdodGluZ0xpZ2h0TW9kZTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBjb2RlVGhlbWU7XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSxcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA/PyBcInN5c3RlbVwiO1xuICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodGVyVGhlbWUoKTtcblxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB3aW5kb3cuQWxwaW5lLnN0b3JlKFxuICAgICAgICAgICAgXCJ0aGVtZVwiLFxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUaGVtZSA9PT0gXCJkYXJrXCIgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVUaGVtZSA9PT0gXCJzeXN0ZW1cIiAmJlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcylcbiAgICAgICAgICAgICAgICA/IFwiZGFya1wiXG4gICAgICAgICAgICAgICAgOiBcImxpZ2h0XCJcbiAgICAgICAgKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRoZW1lLWNoYW5nZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoaXMuYWN0aXZlVGhlbWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVUaGVtZSA9PT0gXCJzeXN0ZW1cIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYShcbiAgICAgICAgICAgICAgICAgICAgXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCJcbiAgICAgICAgICAgICAgICApLm1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgPyBcImRhcmtcIlxuICAgICAgICAgICAgICAgICAgICA6IFwibGlnaHRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LkFscGluZS5zdG9yZShcInRoZW1lXCIsIHRoaXMuYWN0aXZlVGhlbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3dcbiAgICAgICAgICAgIC5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwic3lzdGVtXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkFscGluZS5zdG9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5BbHBpbmUuZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGhlbWUgPSB3aW5kb3cuQWxwaW5lLnN0b3JlKFwidGhlbWVcIik7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGhlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgICAgICAgPyB0aGlzLmFwcGx5U3R5bGVzKHJvb3QsIGRhcmtNb2RlKVxuICAgICAgICAgICAgICAgIDogdGhpcy5hcHBseVN0eWxlcyhyb290LCBsaWdodE1vZGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHRlclRoZW1lKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodGVyVGhlbWUoKTtcbiAgICB9LFxuICAgIGFwcGx5U3R5bGVzKGVsZW1lbnQsIHRoZW1lKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKEpTT04ucGFyc2UodGhlbWUpKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbiIsICJleHBvcnQgZGVmYXVsdCAoeyByb3V0ZSwgbW9kdWxlSWQgfSkgPT4gKHtcbiAgICBxdWVyeTogXCJcIixcbiAgICByZXN1bHRzOiBbXSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHNlYXJjaF9oaXN0b3J5OiBbXSxcbiAgICBmYXZvcml0ZV9pdGVtczogW10sXG4gICAgbWF4SXRlbXNBbGxvd2VkOiAxMCxcbiAgICByb3V0ZSxcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoX2hpc3RvcnkgPSB0aGlzLmdldExvY2FsU3RvcmFnZShcInNlYXJjaF9oaXN0b3J5XCIpO1xuICAgICAgICB0aGlzLmZhdm9yaXRlX2l0ZW1zID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoXCJmYXZvcml0ZV9pdGVtc1wiKTtcblxuICAgICAgICB0aGlzLiR3YXRjaChcInNlYXJjaF9oaXN0b3J5XCIsICh2YWwpID0+XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZShcInNlYXJjaF9oaXN0b3J5XCIsIHZhbClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4kd2F0Y2goXCJmYXZvcml0ZV9pdGVtc1wiLCAodmFsKSA9PlxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoXCJmYXZvcml0ZV9pdGVtc1wiLCB2YWwpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kd2F0Y2goXCJxdWVyeVwiLCBhc3luYyAocXVlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVyeS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IGF3YWl0IHRoaXMucGVyZm9ybVNlYXJjaChxdWVyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhc3luYyBwZXJmb3JtU2VhcmNoKHF1ZXJ5KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5yb3V0ZX0/cT0ke3F1ZXJ5fWApO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICB9LFxuICAgIGdldExvY2FsU3RvcmFnZShrZXkpIHtcbiAgICAgICAga2V5ID0gYCR7bW9kdWxlSWR9LSR7a2V5fWA7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IFtdO1xuICAgIH0sXG5cblxuICAgIHNldExvY2FsU3RvcmFnZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IGAke21vZHVsZUlkfS0ke2tleX1gO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUxpc3QobGlzdCwgbmV3SXRlbSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3SXRlbSxcbiAgICAgICAgICAgIC4uLmxpc3QuZmlsdGVyKChlbCkgPT4gZWwudGl0bGUgIT09IG5ld0l0ZW0udGl0bGUpLFxuICAgICAgICBdLnNsaWNlKDAsIHRoaXMubWF4SXRlbXNBbGxvd2VkKTtcbiAgICB9LFxuXG4gICAgYWRkVG9TZWFyY2hIaXN0b3J5KHNlYXJjaEl0ZW0sIHVybCkge1xuICAgICAgICBjb25zdCBzZWFyY2hJdGVtT2JqZWN0ID0geyB0aXRsZTogc2VhcmNoSXRlbSwgdXJsIH07XG4gICAgICAgIHRoaXMuc2VhcmNoX2hpc3RvcnkgPSB0aGlzLnVwZGF0ZUxpc3QoXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9oaXN0b3J5LFxuICAgICAgICAgICAgc2VhcmNoSXRlbU9iamVjdFxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBkZWxldGVGcm9tSGlzdG9yeShzZWFyY2hJdGVtKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoX2hpc3RvcnkgPSB0aGlzLnNlYXJjaF9oaXN0b3J5LmZpbHRlcihcbiAgICAgICAgICAgIChlbCkgPT4gZWwudGl0bGUgIT09IHNlYXJjaEl0ZW1cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlQWxsSGlzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hfaGlzdG9yeSA9IFtdO1xuICAgIH0sXG5cbiAgICBhZGRUb0Zhdm9yaXRlcyhmYXZJdGVtLCB1cmwpIHtcbiAgICAgICAgdGhpcy5kZWxldGVGcm9tSGlzdG9yeShmYXZJdGVtKTtcbiAgICAgICAgY29uc3QgZmF2SXRlbU9iamVjdCA9IHsgdGl0bGU6IGZhdkl0ZW0sIHVybCB9O1xuICAgICAgICB0aGlzLmZhdm9yaXRlX2l0ZW1zID0gdGhpcy51cGRhdGVMaXN0KFxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZV9pdGVtcyxcbiAgICAgICAgICAgIGZhdkl0ZW1PYmplY3RcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlRnJvbUZhdm9yaXRlcyhmYXZJdGVtKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVfaXRlbXMgPSB0aGlzLmZhdm9yaXRlX2l0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgIChlbCkgPT4gZWwudGl0bGUgIT09IGZhdkl0ZW1cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlQWxsRmF2b3JpdGVzKCkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlX2l0ZW1zID0gW107XG4gICAgfSxcbn0pO1xuIiwgImV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG4gICAgc3ZnOiBgPGRpdiBjbGFzcz1cInctNyBoLTcgYWJzb2x1dGUgdG9wLTAgLWxlZnQtNyBoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCByb3VuZGVkLW1kICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LXNtIHRleHQtYmFzZS1jb250ZW50IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0yMDAgcmluZy0xIGhvdmVyOmJyaWdodG5lc3MtMTUwIHJpbmctYmFzZS0zMDBcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoycHg7XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImdyYXlcIiBoZWlnaHQ9XCIxMnB4XCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZD1cIk0wIDI1NkMwIDE2Ny42IDcxLjYgOTYgMTYwIDk2aDcyYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0SDE2MEM5OC4xIDE0NCA0OCAxOTQuMSA0OCAyNTZzNTAuMSAxMTIgMTEyIDExMmg3MmMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgxNjBDNzEuNiA0MTYgMCAzNDQuNCAwIDI1NnptNTc2IDBjMCA4OC40LTcxLjYgMTYwLTE2MCAxNjBIMzQ0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0aDcyYzYxLjkgMCAxMTItNTAuMSAxMTItMTEycy01MC4xLTExMi0xMTItMTEySDM0NGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg3MmM4OC40IDAgMTYwIDcxLjYgMTYwIDE2MHpNMTg0IDIzMkgzOTJjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRIMTg0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0elwiPjwvcGF0aD48L3N2Zz48L2Rpdj5gLFxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb3NlLmNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdzID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiKTtcblxuICAgICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBhbmNob3IgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuXG4gICAgICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJywncmVsYXRpdmUnLCdjdXJzb3ItcG9pbnRlcicpXG5cbiAgICAgICAgICAgIGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGFuY2hvci5jbGljaygpKVxuXG4gICAgICAgICAgICBhbmNob3IudGV4dENvbnRlbnQgPSBhbmNob3IudGV4dENvbnRlbnQucmVwbGFjZShcIiNcIiwgJycpO1xuXG4gICAgICAgICAgICBhbmNob3IuaW5uZXJIVE1MID0gdGhpcy5zdmcgO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG4iLCAiaW1wb3J0IEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcbmltcG9ydCBNb3VzZXRyYXAgZnJvbSAnQGRhbmhhcnJpbi9hbHBpbmUtbW91c2V0cmFwJ1xuaW1wb3J0IGFuY2hvciBmcm9tIFwiQGFscGluZWpzL2FuY2hvclwiO1xuaW1wb3J0IGNvbGxhcHNlIGZyb20gXCJAYWxwaW5lanMvY29sbGFwc2VcIjtcbmltcG9ydCBmb2N1cyBmcm9tIFwiQGFscGluZWpzL2ZvY3VzXCI7XG5cbmltcG9ydCB0YWJsZU9mQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlT2ZDb250ZW50XCI7XG5pbXBvcnQgdGFicyBmcm9tIFwiLi9jb21wb25lbnRzL3RhYnNcIjtcbmltcG9ydCBkcm9wZG93biBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBjbGlwYm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9jbGlwYm9hcmRcIjtcbmltcG9ydCB0aGVtZVN3aXRjaGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdGhlbWVTd2l0Y2hlclwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hcIjtcbmltcG9ydCBzaG93Q29udGVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9zaG93Q29udGVudHNcIjtcblxuLy8gcGx1Z2luc1xuQWxwaW5lLnBsdWdpbihhbmNob3IpO1xuQWxwaW5lLnBsdWdpbihjb2xsYXBzZSk7XG5BbHBpbmUucGx1Z2luKGZvY3VzKTtcbkFscGluZS5wbHVnaW4oTW91c2V0cmFwKVxuXG4vLyBjb21wb25lbnRzXG5BbHBpbmUuZGF0YShcInRoZW1lU3dpdGNoZXJcIiwgdGhlbWVTd2l0Y2hlcik7XG5BbHBpbmUuZGF0YShcInNob3dDb250ZW50c1R3ZWFja3NcIixzaG93Q29udGVudHMpXG5BbHBpbmUuZGF0YShcInRhYmxlT2ZDb250ZW50XCIsIHRhYmxlT2ZDb250ZW50KTtcbkFscGluZS5kYXRhKFwiY29kZUJsb2NrQ2xpcGJvYXJkXCIsIGNsaXBib2FyZCk7XG5BbHBpbmUuZGF0YShcInRhYnNcIiwgdGFicyk7XG5BbHBpbmUuZGF0YShcImRyb3Bkb3duXCIsIGRyb3Bkb3duKTtcbkFscGluZS5kYXRhKFwic2lkZWJhclwiLCBzaWRlYmFyKTtcbkFscGluZS5kYXRhKFwic2VhcmNoXCIsIHNlYXJjaCk7XG5cblxud2luZG93LkFscGluZSA9IEFscGluZTtcbkFscGluZS5zdGFydCgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU1BLEtBQUMsU0FBUyxpQ0FBaUMsTUFBTSxTQUFTO0FBQ3pELFVBQUcsT0FBTyxZQUFZLFlBQVksT0FBTyxXQUFXO0FBQ25ELGVBQU8sVUFBVSxRQUFRO0FBQUEsZUFDbEIsT0FBTyxXQUFXLGNBQWMsT0FBTztBQUM5QyxlQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsZUFDWCxPQUFPLFlBQVk7QUFDMUIsZ0JBQVEsYUFBYSxJQUFJLFFBQVE7QUFBQTtBQUVqQyxhQUFLLGFBQWEsSUFBSSxRQUFRO0FBQUEsSUFDaEMsR0FBRyxTQUFNLFdBQVc7QUFDcEI7QUFBQTtBQUFBLFFBQWlCLFdBQVc7QUFDbEIsY0FBSSxzQkFBdUI7QUFBQTtBQUFBLFlBRS9CO0FBQUE7QUFBQSxjQUNDLFNBQVMseUJBQXlCLHFCQUFxQkEsc0JBQXFCO0FBRW5GO0FBR0EsZ0JBQUFBLHFCQUFvQixFQUFFLHFCQUFxQjtBQUFBLGtCQUN6QyxXQUFXLFdBQVc7QUFBRTtBQUFBO0FBQUEsc0JBQXFCO0FBQUE7QUFBQSxrQkFBVztBQUFBLGdCQUMxRCxDQUFDO0FBR0Qsb0JBQUksZUFBZUEscUJBQW9CLEdBQUc7QUFDMUMsb0JBQUksdUJBQW9DLGdCQUFBQSxxQkFBb0IsRUFBRSxZQUFZO0FBRTFFLG9CQUFJLFNBQVNBLHFCQUFvQixHQUFHO0FBQ3BDLG9CQUFJLGlCQUE4QixnQkFBQUEscUJBQW9CLEVBQUUsTUFBTTtBQUU5RCxvQkFBSSxhQUFhQSxxQkFBb0IsR0FBRztBQUN4QyxvQkFBSSxpQkFBOEIsZ0JBQUFBLHFCQUFvQixFQUFFLFVBQVU7QUFDbEU7QUFNQSx5QkFBUyxRQUFRLE1BQU07QUFDckIsc0JBQUk7QUFDRiwyQkFB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T0EsZUFBUTtBQUN0QixlQUFPLE9BQU9BLGVBQUs7QUFDbkIsZUFBTyxPQUFPQSxlQUFTO0FBR3ZCLGVBQU8sS0FBSyxpQkFBaUIscUJBQWE7QUFDMUMsZUFBTyxLQUFLLHVCQUFzQixvQkFBWTtBQUM5QyxlQUFPLEtBQUssa0JBQWtCLHNCQUFjO0FBQzVDLGVBQU8sS0FBSyxzQkFBc0IsaUJBQVM7QUFDM0MsZUFBTyxLQUFLLFFBQVEsWUFBSTtBQUN4QixlQUFPLEtBQUssWUFBWSxnQkFBUTtBQUNoQyxlQUFPLEtBQUssV0FBVyxlQUFPO0FBQzlCLGVBQU8sS0FBSyxVQUFVLGNBQU07QUFHNUIsT0FBTyxTQUFTO0FBQ2hCLGVBQU8sTUFBTTsiLAogICJuYW1lcyI6IFsiX193ZWJwYWNrX3JlcXVpcmVfXyIsICJDbGlwYm9hcmRBY3Rpb25DdXQiLCAiaXNSVEwiLCAiZmFrZUNvcHlBY3Rpb24iLCAiQ2xpcGJvYXJkQWN0aW9uQ29weSIsICJfdHlwZW9mIiwgIm9iaiIsICJDbGlwYm9hcmRBY3Rpb25EZWZhdWx0IiwgIl9zZXRQcm90b3R5cGVPZiIsICJvIiwgInAiLCAiX2dldFByb3RvdHlwZU9mIiwgIkNsaXBib2FyZCIsICJ0cmlnZ2VyIiwgImFjdGlvbiIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJkYXRhIiwgImV2YWx1YXRlMiIsICJkZWxheSIsICJfX2NyZWF0ZSIsICJfX2RlZlByb3AiLCAiX19nZXRQcm90b09mIiwgIl9faGFzT3duUHJvcCIsICJfX2dldE93blByb3BOYW1lcyIsICJfX2dldE93blByb3BEZXNjIiwgIl9fY29tbW9uSlMiLCAibWF0Y2hlcyIsICJzcmNfZGVmYXVsdCIsICJBbHBpbmUiLCAiZXZhbHVhdGUiLCAibW9kdWxlX2RlZmF1bHQiLCAic3RhcnQiLCAiZXZhbHVhdGUiLCAiZGF0YSIsICJnZXRDb21wdXRlZFN0eWxlIiwgImNsZWFudXAiLCAic3JjX2RlZmF1bHQiLCAiQWxwaW5lIiwgImV2YWx1YXRlMiIsICJzZXRTdHlsZXMiLCAicmVsZWFzZSIsICJtb2R1bGVfZGVmYXVsdCIsICJzcmNfZGVmYXVsdCIsICJBbHBpbmUiLCAibW9kaWZpZXJWYWx1ZSIsICJmbG9vciIsICJtb2R1bGVfZGVmYXVsdCIsICJpc1JhZGlvIiwgImlzUmFkaW8yIiwgIm93bktleXMiLCAic3JjX2RlZmF1bHQiLCAiQWxwaW5lIiwgImVmZmVjdCIsICJldmFsdWF0ZUxhdGVyIiwgImNsZWFudXAiLCAiZXZhbHVhdGUiLCAibW9kdWxlX2RlZmF1bHQiLCAib2JzZXJ2ZXIiLCAiQ2xpcGJvYXJkSlMiLCAiZWxlbWVudCIsICJtb2R1bGVfZGVmYXVsdCJdCn0K
