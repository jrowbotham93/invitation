/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = [
    /* 0 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        3
      );
      /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        4
      );
      /* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        10
      );
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        14
      );
      /* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        15
      );
      /* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        _index_html__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        16
      );
      /* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        20
      );

      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
          if (
            Array.isArray(o) ||
            (it = _unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && typeof o.length === 'number')
          ) {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = o[Symbol.iterator]();
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it['return'] != null) it['return']();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (
          n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      // Firebase App (the core Firebase SDK) is always required and must be listed first
      // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
      // import * as firebase from "firebase/app"
      // If you enabled Analytics in your project, add the Firebase SDK for Analytics

      window.addEventListener(
        'load',
        /*#__PURE__*/ _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(
            function _callee() {
              var form, checkboxPlusOne, removeSelectedAttendee;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return (0,
                        _api__WEBPACK_IMPORTED_MODULE_7__.readAttendees)();

                      case 2:
                        form = document.querySelector('.attendeeDetailsForm');
                        checkboxPlusOne = document.querySelector(
                          '.checkboxPlusOne'
                        );
                        removeSelectedAttendee = document.querySelectorAll(
                          '.removeAttendee'
                        );
                        form.addEventListener('submit', function (event) {
                          event.preventDefault();
                          new FormData(form);
                        });
                        form.addEventListener('formdata', function (event) {
                          var data = event.formData;
                          var dataToPost = {};

                          var _iterator = _createForOfIteratorHelper(
                              data.entries(data)
                            ),
                            _step;

                          try {
                            for (
                              _iterator.s();
                              !(_step = _iterator.n()).done;

                            ) {
                              var responses = _step.value;
                              dataToPost[responses[0]] = responses[1];
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }

                          dataToPost.attending = (0,
                          _utils__WEBPACK_IMPORTED_MODULE_4__.validateCheckboxInput)(
                            dataToPost.attending
                          );
                          dataToPost.plusOne = (0,
                          _utils__WEBPACK_IMPORTED_MODULE_4__.validateCheckboxInput)(
                            dataToPost.plusOne
                          );
                          (0,
                          _api__WEBPACK_IMPORTED_MODULE_7__.createAttendee)(dataToPost);
                          form.reset();
                        });
                        removeSelectedAttendee.forEach(function (tableRow) {
                          return tableRow.addEventListener(
                            'click',
                            function (event) {
                              (0,
                              _api__WEBPACK_IMPORTED_MODULE_7__.removeAttendee)(
                                event.target.getAttribute('name')
                              );
                            }
                          );
                        });
                        checkboxPlusOne.addEventListener(
                          'change',
                          function (event) {
                            var bool = (0,
                            _utils__WEBPACK_IMPORTED_MODULE_4__.validateCheckboxInput)(
                              event.target.value
                            );
                            (0,
                            _api__WEBPACK_IMPORTED_MODULE_7__.renderPlusOneInputField)(
                              bool
                            );
                          }
                        );

                      case 9:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee
              );
            }
          )
        )
      );

      /***/
    },
    /* 1 */
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__(2);

      /***/
    },
    /* 2 */
    /***/ (module) => {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var runtime = (function (exports) {
        'use strict';

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.
        var $Symbol = typeof Symbol === 'function' ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || '@@iterator';
        var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
        var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
          return obj[key];
        }
        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, '');
        } catch (err) {
          define = function (obj, key, value) {
            return (obj[key] = value);
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator =
            outerFn && outerFn.prototype instanceof Generator
              ? outerFn
              : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        exports.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }

        var GenStateSuspendedStart = 'suspendedStart';
        var GenStateSuspendedYield = 'suspendedYield';
        var GenStateExecuting = 'executing';
        var GenStateCompleted = 'completed';

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype =
          getProto && getProto(getProto(values([])));
        if (
          NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
        ) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
          IteratorPrototype
        ));
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction');

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === 'function' && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction ||
                // For the native GeneratorFunction constructor, the best we can
                // do is to check its .name property.
                (ctor.displayName || ctor.name) === 'GeneratorFunction'
            : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, 'GeneratorFunction');
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function (arg) {
          return { __await: arg };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === 'throw') {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (
                value &&
                typeof value === 'object' &&
                hasOwn.call(value, '__await')
              ) {
                return PromiseImpl.resolve(value.__await).then(
                  function (value) {
                    invoke('next', value, resolve, reject);
                  },
                  function (err) {
                    invoke('throw', err, resolve, reject);
                  }
                );
              }

              return PromiseImpl.resolve(value).then(
                function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration.
                  result.value = unwrapped;
                  resolve(result);
                },
                function (error) {
                  // If a rejected Promise was yielded, throw the rejection back
                  // into the async generator function so it can be handled there.
                  return invoke('throw', error, resolve, reject);
                }
              );
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return (previousPromise =
              // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    // Avoid propagating failures to Promises returned by later
                    // invocations of the iterator.
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };
        exports.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function (
          innerFn,
          outerFn,
          self,
          tryLocsList,
          PromiseImpl
        ) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;

          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList),
            PromiseImpl
          );

          return exports.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
                return result.done ? result.value : iter.next();
              });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error('Generator is already running');
            }

            if (state === GenStateCompleted) {
              if (method === 'throw') {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === 'next') {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === 'throw') {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === 'return') {
                context.abrupt('return', context.arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === 'normal') {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done,
                };
              } else if (record.type === 'throw') {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = 'throw';
                context.arg = record.arg;
              }
            }
          };
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === 'throw') {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator['return']) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = 'return';
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === 'throw') {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = 'throw';
              context.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              );
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === 'throw') {
            context.method = 'throw';
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = 'throw';
            context.arg = new TypeError('iterator result is not an object');
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== 'return') {
              context.method = 'next';
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        define(Gp, toStringTagSymbol, 'Generator');

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return '[object Generator]';
        };

        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = 'normal';
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: 'root' }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === 'function') {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return (next.next = next);
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        exports.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset: function (skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.method = 'next';
            this.arg = undefined;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (
                  name.charAt(0) === 't' &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))
                ) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop: function () {
            this.done = true;

            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === 'throw') {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException: function (exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;
            function handle(loc, caught) {
              record.type = 'throw';
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = 'next';
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === 'root') {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle('end');
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, 'catchLoc');
                var hasFinally = hasOwn.call(entry, 'finallyLoc');

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error('try statement without catch or finally');
                }
              }
            }
          },

          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (
                entry.tryLoc <= this.prev &&
                hasOwn.call(entry, 'finallyLoc') &&
                this.prev < entry.finallyLoc
              ) {
                var finallyEntry = entry;
                break;
              }
            }

            if (
              finallyEntry &&
              (type === 'break' || type === 'continue') &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc
            ) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = 'next';
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },

          complete: function (record, afterLoc) {
            if (record.type === 'throw') {
              throw record.arg;
            }

            if (record.type === 'break' || record.type === 'continue') {
              this.next = record.arg;
            } else if (record.type === 'return') {
              this.rval = this.arg = record.arg;
              this.method = 'return';
              this.next = 'end';
            } else if (record.type === 'normal' && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },

          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch: function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === 'throw') {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error('illegal catch attempt');
          },

          delegateYield: function (iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc,
            };

            if (this.method === 'next') {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          },
        };

        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
      })(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        true ? module.exports : 0
      );

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function('r', 'regeneratorRuntime = r')(runtime);
      }

      /***/
    },
    /* 3 */
    /***/ (module) => {
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value
              );
            }

            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err
              );
            }

            _next(undefined);
          });
        };
      }

      module.exports = _asyncToGenerator;

      /***/
    },
    /* 4 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () =>
          /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default,
        /* harmony export */
      });
      /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        5
      );

      var name = 'firebase';
      var version = '8.1.2';

      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.registerVersion(
        name,
        version,
        'app'
      );
      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 5 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */ firebase: () => /* binding */ firebase$1,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        7
      );
      /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        6
      );
      /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8
      );
      /* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        9
      );

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var _a;
      var ERRORS =
        ((_a = {}),
        (_a['no-app' /* NO_APP */] =
          "No Firebase App '{$appName}' has been created - " +
          'call Firebase App.initializeApp()'),
        (_a['bad-app-name' /* BAD_APP_NAME */] =
          "Illegal App name: '{$appName}"),
        (_a['duplicate-app' /* DUPLICATE_APP */] =
          "Firebase App named '{$appName}' already exists"),
        (_a['app-deleted' /* APP_DELETED */] =
          "Firebase App named '{$appName}' already deleted"),
        (_a['invalid-app-argument' /* INVALID_APP_ARGUMENT */] =
          'firebase.{$appName}() takes either no argument or a ' +
          'Firebase App instance.'),
        (_a['invalid-log-argument' /* INVALID_LOG_ARGUMENT */] =
          'First argument to `onLog` must be null or a function.'),
        _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory(
        'app',
        'Firebase',
        ERRORS
      );

      var name$1 = '@firebase/app';
      var version = '0.6.13';

      var name$2 = '@firebase/analytics';

      var name$3 = '@firebase/auth';

      var name$4 = '@firebase/database';

      var name$5 = '@firebase/functions';

      var name$6 = '@firebase/installations';

      var name$7 = '@firebase/messaging';

      var name$8 = '@firebase/performance';

      var name$9 = '@firebase/remote-config';

      var name$a = '@firebase/storage';

      var name$b = '@firebase/firestore';

      var name$c = 'firebase-wrapper';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var _a$1;
      var DEFAULT_ENTRY_NAME = '[DEFAULT]';
      var PLATFORM_LOG_STRING =
        ((_a$1 = {}),
        (_a$1[name$1] = 'fire-core'),
        (_a$1[name$2] = 'fire-analytics'),
        (_a$1[name$3] = 'fire-auth'),
        (_a$1[name$4] = 'fire-rtdb'),
        (_a$1[name$5] = 'fire-fn'),
        (_a$1[name$6] = 'fire-iid'),
        (_a$1[name$7] = 'fire-fcm'),
        (_a$1[name$8] = 'fire-perf'),
        (_a$1[name$9] = 'fire-rc'),
        (_a$1[name$a] = 'fire-gcs'),
        (_a$1[name$b] = 'fire-fst'),
        (_a$1['fire-js'] = 'fire-js'),
        (_a$1[name$c] = 'fire-js-all'),
        _a$1);

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Logger(
        '@firebase/app'
      );

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Global context object for a collection of services using
       * a shared authentication state.
       */
      var FirebaseAppImpl = /** @class */ (function () {
        function FirebaseAppImpl(options, config, firebase_) {
          var e_1, _a;
          var _this = this;
          this.firebase_ = firebase_;
          this.isDeleted_ = false;
          this.name_ = config.name;
          this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
          this.options_ = (0,
          _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(options);
          this.container = new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.ComponentContainer(
            config.name
          );
          // add itself to container
          this._addComponent(
            new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(
              'app',
              function () {
                return _this;
              },
              'PUBLIC' /* PUBLIC */
            )
          );
          try {
            // populate ComponentContainer with existing components
            for (
              var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(
                  this.firebase_.INTERNAL.components.values()
                ),
                _c = _b.next();
              !_c.done;
              _c = _b.next()
            ) {
              var component = _c.value;
              this._addComponent(component);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
        Object.defineProperty(
          FirebaseAppImpl.prototype,
          'automaticDataCollectionEnabled',
          {
            get: function () {
              this.checkDestroyed_();
              return this.automaticDataCollectionEnabled_;
            },
            set: function (val) {
              this.checkDestroyed_();
              this.automaticDataCollectionEnabled_ = val;
            },
            enumerable: false,
            configurable: true,
          }
        );
        Object.defineProperty(FirebaseAppImpl.prototype, 'name', {
          get: function () {
            this.checkDestroyed_();
            return this.name_;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(FirebaseAppImpl.prototype, 'options', {
          get: function () {
            this.checkDestroyed_();
            return this.options_;
          },
          enumerable: false,
          configurable: true,
        });
        FirebaseAppImpl.prototype.delete = function () {
          var _this = this;
          return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
          })
            .then(function () {
              _this.firebase_.INTERNAL.removeApp(_this.name_);
              return Promise.all(
                _this.container.getProviders().map(function (provider) {
                  return provider.delete();
                })
              );
            })
            .then(function () {
              _this.isDeleted_ = true;
            });
        };
        /**
         * Return a service instance associated with this app (creating it
         * on demand), identified by the passed instanceIdentifier.
         *
         * NOTE: Currently storage and functions are the only ones that are leveraging this
         * functionality. They invoke it by calling:
         *
         * ```javascript
         * firebase.app().storage('STORAGE BUCKET ID')
         * ```
         *
         * The service name is passed to this already
         * @internal
         */
        FirebaseAppImpl.prototype._getService = function (
          name,
          instanceIdentifier
        ) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }
          this.checkDestroyed_();
          // getImmediate will always succeed because _getService is only called for registered components.
          return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier,
          });
        };
        /**
         * Remove a service instance from the cache, so we will create a new instance for this service
         * when people try to get this service again.
         *
         * NOTE: currently only firestore is using this functionality to support firestore shutdown.
         *
         * @param name The service name
         * @param instanceIdentifier instance identifier in case multiple instances are allowed
         * @internal
         */
        FirebaseAppImpl.prototype._removeServiceInstance = function (
          name,
          instanceIdentifier
        ) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.container.getProvider(name).clearInstance(instanceIdentifier);
        };
        /**
         * @param component the component being added to this app's container
         */
        FirebaseAppImpl.prototype._addComponent = function (component) {
          try {
            this.container.addComponent(component);
          } catch (e) {
            logger.debug(
              'Component ' +
                component.name +
                ' failed to register with FirebaseApp ' +
                this.name,
              e
            );
          }
        };
        FirebaseAppImpl.prototype._addOrOverwriteComponent = function (
          component
        ) {
          this.container.addOrOverwriteComponent(component);
        };
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */
        FirebaseAppImpl.prototype.checkDestroyed_ = function () {
          if (this.isDeleted_) {
            throw ERROR_FACTORY.create('app-deleted' /* APP_DELETED */, {
              appName: this.name_,
            });
          }
        };
        return FirebaseAppImpl;
      })();
      // Prevent dead-code elimination of these methods w/o invalid property
      // copying.
      (FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
        FirebaseAppImpl.prototype.delete ||
        console.log('dc');

      var version$1 = '8.0.1';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Because auth can't share code with other components, we attach the utility functions
       * in an internal namespace to share code.
       * This function return a firebase namespace object without
       * any utility functions, so it can be shared between the regular firebaseNamespace and
       * the lite version.
       */
      function createFirebaseNamespaceCore(firebaseAppImpl) {
        var apps = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var components = new Map();
        // A namespace is a plain JavaScript Object.
        var namespace = {
          // Hack to prevent Babel from modifying the object returned
          // as the firebase namespace.
          // @ts-ignore
          __esModule: true,
          initializeApp: initializeApp,
          // @ts-ignore
          app: app,
          registerVersion: registerVersion,
          setLogLevel:
            _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.setLogLevel,
          onLog: onLog,
          // @ts-ignore
          apps: null,
          SDK_VERSION: version$1,
          INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService,
          },
        };
        // Inject a circular default export to allow Babel users who were previously
        // using:
        //
        //   import firebase from 'firebase';
        //   which becomes: var firebase = require('firebase').default;
        //
        // instead of
        //
        //   import * as firebase from 'firebase';
        //   which becomes: var firebase = require('firebase');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        namespace['default'] = namespace;
        // firebase.apps is a read-only getter.
        Object.defineProperty(namespace, 'apps', {
          get: getApps,
        });
        /**
         * Called by App.delete() - but before any services associated with the App
         * are deleted.
         */
        function removeApp(name) {
          delete apps[name];
        }
        /**
         * Get the App object for a given name (or DEFAULT).
         */
        function app(name) {
          name = name || DEFAULT_ENTRY_NAME;
          if (
            !(0, _firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(
              apps,
              name
            )
          ) {
            throw ERROR_FACTORY.create('no-app' /* NO_APP */, {
              appName: name,
            });
          }
          return apps[name];
        }
        // @ts-ignore
        app['App'] = firebaseAppImpl;
        function initializeApp(options, rawConfig) {
          if (rawConfig === void 0) {
            rawConfig = {};
          }
          if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
          }
          var config = rawConfig;
          if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
          }
          var name = config.name;
          if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create('bad-app-name' /* BAD_APP_NAME */, {
              appName: String(name),
            });
          }
          if (
            (0, _firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(
              apps,
              name
            )
          ) {
            throw ERROR_FACTORY.create('duplicate-app' /* DUPLICATE_APP */, {
              appName: name,
            });
          }
          var app = new firebaseAppImpl(options, config, namespace);
          apps[name] = app;
          return app;
        }
        /*
         * Return an array of all the non-deleted FirebaseApps.
         */
        function getApps() {
          // Make a copy so caller cannot mutate the apps list.
          return Object.keys(apps).map(function (name) {
            return apps[name];
          });
        }
        function registerComponent(component) {
          var e_1, _a;
          var componentName = component.name;
          if (components.has(componentName)) {
            logger.debug(
              'There were multiple attempts to register component ' +
                componentName +
                '.'
            );
            return component.type === 'PUBLIC' /* PUBLIC */
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
              : null;
          }
          components.set(componentName, component);
          // create service namespace for public components
          if (component.type === 'PUBLIC' /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
              if (appArg === void 0) {
                appArg = app();
              }
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if (typeof appArg[componentName] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                throw ERROR_FACTORY.create(
                  'invalid-app-argument' /* INVALID_APP_ARGUMENT */,
                  {
                    appName: componentName,
                  }
                );
              }
              // Forward service instance lookup to the FirebaseApp.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
              (0, _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(
                serviceNamespace,
                component.serviceProps
              );
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
              // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
              // option added to the no-explicit-any rule when ESlint releases it.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                var serviceFxn = this._getService.bind(this, componentName);
                return serviceFxn.apply(
                  this,
                  component.multipleInstances ? args : []
                );
              };
          }
          try {
            // add the component to existing app instances
            for (
              var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(
                  Object.keys(apps)
                ),
                _c = _b.next();
              !_c.done;
              _c = _b.next()
            ) {
              var appName = _c.value;
              apps[appName]._addComponent(component);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return component.type === 'PUBLIC' /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              namespace[componentName]
            : null;
        }
        function registerVersion(libraryKeyOrName, version, variant) {
          var _a;
          // TODO: We can use this check to whitelist strings when/if we set up
          // a good whitelist system.
          var library =
            (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null &&
            _a !== void 0
              ? _a
              : libraryKeyOrName;
          if (variant) {
            library += '-' + variant;
          }
          var libraryMismatch = library.match(/\s|\//);
          var versionMismatch = version.match(/\s|\//);
          if (libraryMismatch || versionMismatch) {
            var warning = [
              'Unable to register library "' +
                library +
                '" with version "' +
                version +
                '":',
            ];
            if (libraryMismatch) {
              warning.push(
                'library name "' +
                  library +
                  '" contains illegal characters (whitespace or "/")'
              );
            }
            if (libraryMismatch && versionMismatch) {
              warning.push('and');
            }
            if (versionMismatch) {
              warning.push(
                'version name "' +
                  version +
                  '" contains illegal characters (whitespace or "/")'
              );
            }
            logger.warn(warning.join(' '));
            return;
          }
          registerComponent(
            new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(
              library + '-version',
              function () {
                return { library: library, version: version };
              },
              'VERSION' /* VERSION */
            )
          );
        }
        function onLog(logCallback, options) {
          if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create(
              'invalid-log-argument' /* INVALID_LOG_ARGUMENT */,
              {
                appName: name,
              }
            );
          }
          (0, _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.setUserLogHandler)(
            logCallback,
            options
          );
        }
        // Map the requested service to a registered service name
        // (used to map auth to serverAuth service when needed).
        function useAsService(app, name) {
          if (name === 'serverAuth') {
            return null;
          }
          var useService = name;
          return useService;
        }
        return namespace;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Return a firebase namespace object.
       *
       * In production, this will be called exactly once and the result
       * assigned to the 'firebase' global.  It may be called multiple times
       * in unit tests.
       */
      function createFirebaseNamespace() {
        var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
        namespace.INTERNAL = (0,
        tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)(
          (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)(
            {},
            namespace.INTERNAL
          ),
          {
            createFirebaseNamespace: createFirebaseNamespace,
            extendNamespace: extendNamespace,
            createSubscribe:
              _firebase_util__WEBPACK_IMPORTED_MODULE_0__.createSubscribe,
            ErrorFactory:
              _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory,
            deepExtend: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend,
          }
        );
        /**
         * Patch the top-level firebase namespace with additional properties.
         *
         * firebase.INTERNAL.extendNamespace()
         */
        function extendNamespace(props) {
          (0, _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(
            namespace,
            props
          );
        }
        return namespace;
      }
      var firebase = createFirebaseNamespace();

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var PlatformLoggerService = /** @class */ (function () {
        function PlatformLoggerService(container) {
          this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        PlatformLoggerService.prototype.getPlatformInfoString = function () {
          var providers = this.container.getProviders();
          // Loop through providers and get library/version pairs from any that are
          // version components.
          return providers
            .map(function (provider) {
              if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + '/' + service.version;
              } else {
                return null;
              }
            })
            .filter(function (logString) {
              return logString;
            })
            .join(' ');
        };
        return PlatformLoggerService;
      })();
      /**
       *
       * @param provider check if this provider provides a VersionService
       *
       * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
       * provides VersionService. The provider is not necessarily a 'app-version'
       * provider.
       */
      function isVersionServiceProvider(provider) {
        var component = provider.getComponent();
        return (
          (component === null || component === void 0
            ? void 0
            : component.type) === 'VERSION' /* VERSION */
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function registerCoreComponents(firebase, variant) {
        firebase.INTERNAL.registerComponent(
          new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(
            'platform-logger',
            function (container) {
              return new PlatformLoggerService(container);
            },
            'PRIVATE' /* PRIVATE */
          )
        );
        // Register `app` package.
        firebase.registerVersion(name$1, version, variant);
        // Register platform SDK identifier (no version).
        firebase.registerVersion('fire-js', '');
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Firebase Lite detection test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (
        (0, _firebase_util__WEBPACK_IMPORTED_MODULE_0__.isBrowser)() &&
        self.firebase !== undefined
      ) {
        logger.warn(
          '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  '
        );
        // eslint-disable-next-line
        var sdkVersion = self.firebase.SDK_VERSION;
        if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
          logger.warn(
            '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    '
          );
        }
      }
      var initializeApp = firebase.initializeApp;
      // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      firebase.initializeApp = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        // Environment check before initializing app
        // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
        // in @firebase/logger
        if ((0, _firebase_util__WEBPACK_IMPORTED_MODULE_0__.isNode)()) {
          logger.warn(
            '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
          );
        }
        return initializeApp.apply(undefined, args);
      };
      var firebase$1 = firebase;
      registerCoreComponents(firebase$1);

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = firebase$1;

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 6 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ CONSTANTS: () => /* binding */ CONSTANTS,
        /* harmony export */ Deferred: () => /* binding */ Deferred,
        /* harmony export */ ErrorFactory: () => /* binding */ ErrorFactory,
        /* harmony export */ FirebaseError: () => /* binding */ FirebaseError,
        /* harmony export */ MAX_VALUE_MILLIS: () =>
          /* binding */ MAX_VALUE_MILLIS,
        /* harmony export */ RANDOM_FACTOR: () => /* binding */ RANDOM_FACTOR,
        /* harmony export */ Sha1: () => /* binding */ Sha1,
        /* harmony export */ areCookiesEnabled: () =>
          /* binding */ areCookiesEnabled,
        /* harmony export */ assert: () => /* binding */ assert,
        /* harmony export */ assertionError: () => /* binding */ assertionError,
        /* harmony export */ async: () => /* binding */ async,
        /* harmony export */ base64: () => /* binding */ base64,
        /* harmony export */ base64Decode: () => /* binding */ base64Decode,
        /* harmony export */ base64Encode: () => /* binding */ base64Encode,
        /* harmony export */ calculateBackoffMillis: () =>
          /* binding */ calculateBackoffMillis,
        /* harmony export */ contains: () => /* binding */ contains,
        /* harmony export */ createSubscribe: () =>
          /* binding */ createSubscribe,
        /* harmony export */ decode: () => /* binding */ decode,
        /* harmony export */ deepCopy: () => /* binding */ deepCopy,
        /* harmony export */ deepExtend: () => /* binding */ deepExtend,
        /* harmony export */ errorPrefix: () => /* binding */ errorPrefix,
        /* harmony export */ getUA: () => /* binding */ getUA,
        /* harmony export */ isAdmin: () => /* binding */ isAdmin,
        /* harmony export */ isBrowser: () => /* binding */ isBrowser,
        /* harmony export */ isBrowserExtension: () =>
          /* binding */ isBrowserExtension,
        /* harmony export */ isElectron: () => /* binding */ isElectron,
        /* harmony export */ isEmpty: () => /* binding */ isEmpty,
        /* harmony export */ isIE: () => /* binding */ isIE,
        /* harmony export */ isIndexedDBAvailable: () =>
          /* binding */ isIndexedDBAvailable,
        /* harmony export */ isMobileCordova: () =>
          /* binding */ isMobileCordova,
        /* harmony export */ isNode: () => /* binding */ isNode,
        /* harmony export */ isNodeSdk: () => /* binding */ isNodeSdk,
        /* harmony export */ isReactNative: () => /* binding */ isReactNative,
        /* harmony export */ isSafari: () => /* binding */ isSafari,
        /* harmony export */ isUWP: () => /* binding */ isUWP,
        /* harmony export */ isValidFormat: () => /* binding */ isValidFormat,
        /* harmony export */ isValidTimestamp: () =>
          /* binding */ isValidTimestamp,
        /* harmony export */ issuedAtTime: () => /* binding */ issuedAtTime,
        /* harmony export */ jsonEval: () => /* binding */ jsonEval,
        /* harmony export */ map: () => /* binding */ map,
        /* harmony export */ ordinal: () => /* binding */ ordinal,
        /* harmony export */ querystring: () => /* binding */ querystring,
        /* harmony export */ querystringDecode: () =>
          /* binding */ querystringDecode,
        /* harmony export */ safeGet: () => /* binding */ safeGet,
        /* harmony export */ stringLength: () => /* binding */ stringLength,
        /* harmony export */ stringToByteArray: () =>
          /* binding */ stringToByteArray$1,
        /* harmony export */ stringify: () => /* binding */ stringify,
        /* harmony export */ validateArgCount: () =>
          /* binding */ validateArgCount,
        /* harmony export */ validateCallback: () =>
          /* binding */ validateCallback,
        /* harmony export */ validateContextObject: () =>
          /* binding */ validateContextObject,
        /* harmony export */ validateIndexedDBOpenable: () =>
          /* binding */ validateIndexedDBOpenable,
        /* harmony export */ validateNamespace: () =>
          /* binding */ validateNamespace,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7
      );

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
       */
      var CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,
        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,
        /**
         * Firebase SDK Version
         */
        SDK_VERSION: '${JSCORE_VERSION}',
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Throws an error if the provided assertion is falsy
       */
      var assert = function (assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      /**
       * Returns an Error object suitable for throwing.
       */
      var assertionError = function (message) {
        return new Error(
          'Firebase Database (' +
            CONSTANTS.SDK_VERSION +
            ') INTERNAL ASSERT FAILED: ' +
            message
        );
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var stringToByteArray = function (str) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
          } else if (
            (c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00
          ) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
          } else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
          }
        }
        return out;
      };
      /**
       * Turns an array of numbers into the string given by the concatenation of the
       * characters to which the numbers correspond.
       * @param bytes Array of numbers representing characters.
       * @return Stringification of the array.
       */
      var byteArrayToString = function (bytes) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var pos = 0,
          c = 0;
        while (pos < bytes.length) {
          var c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
          } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u =
              (((c1 & 7) << 18) |
                ((c2 & 63) << 12) |
                ((c3 & 63) << 6) |
                (c4 & 63)) -
              0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(
              ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
            );
          }
        }
        return out.join('');
      };
      // We define it as an object literal instead of a class because a class compiled down to es5 can't
      // be treeshaked. https://github.com/rollup/rollup/issues/1691
      // Static lookup maps, lazily populated by init_()
      var base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,
        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,
        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,
        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,
        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE:
          'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          'abcdefghijklmnopqrstuvwxyz' +
          '0123456789',
        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + '+/=';
        },
        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + '-_.';
        },
        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === 'function',
        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray: function (input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
          }
          this.init_();
          var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
          var output = [];
          for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(
              byteToCharMap[outByte1],
              byteToCharMap[outByte2],
              byteToCharMap[outByte3],
              byteToCharMap[outByte4]
            );
          }
          return output.join('');
        },
        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString: function (input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray(input), webSafe);
        },
        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString: function (input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(
            this.decodeStringToByteArray(input, webSafe)
          );
        },
        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray: function (input, webSafe) {
          this.init_();
          var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
          var output = [];
          for (var i = 0; i < input.length; ) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (
              byte1 == null ||
              byte2 == null ||
              byte3 == null ||
              byte4 == null
            ) {
              throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
              var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
              output.push(outByte2);
              if (byte4 !== 64) {
                var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_: function () {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(
                i
              );
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              // Be forgiving when decoding and correctly decode both encodings.
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        },
      };
      /**
       * URL-safe base64 encoding
       */
      var base64Encode = function (str) {
        var utf8Bytes = stringToByteArray(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      /**
       * URL-safe base64 decoding
       *
       * NOTE: DO NOT use the global atob() function - it does NOT support the
       * base64Url variant encoding.
       *
       * @param str To be decoded
       * @return Decoded result, if possible
       */
      var base64Decode = function (str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error('base64Decode failed: ', e);
        }
        return null;
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Do a deep-copy of basic JavaScript Objects or Arrays.
       */
      function deepCopy(value) {
        return deepExtend(undefined, value);
      }
      /**
       * Copy properties from source to target (recursively allows extension
       * of Objects and Arrays).  Scalar values in the target are over-written.
       * If target is undefined, an object of the appropriate type will be created
       * (and returned).
       *
       * We recursively copy all child properties of plain Objects in the source- so
       * that namespace- like dictionaries are merged.
       *
       * Note that the target can be a function, in which case the properties in
       * the source Object are copied onto it as static properties of the Function.
       *
       * Note: we don't merge __proto__ to prevent prototype pollution
       */
      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }
        switch (source.constructor) {
          case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
          case Object:
            if (target === undefined) {
              target = {};
            }
            break;
          case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
          default:
            // Not a plain Object - treat it as a scalar.
            return source;
        }
        for (var prop in source) {
          // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
          if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
          }
          target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
      }
      function isValidKey(key) {
        return key !== '__proto__';
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var Deferred = /** @class */ (function () {
        function Deferred() {
          var _this = this;
          this.reject = function () {};
          this.resolve = function () {};
          this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        Deferred.prototype.wrapCallback = function (callback) {
          var _this = this;
          return function (error, value) {
            if (error) {
              _this.reject(error);
            } else {
              _this.resolve(value);
            }
            if (typeof callback === 'function') {
              // Attaching noop handler just in case developer wasn't expecting
              // promises
              _this.promise.catch(function () {});
              // Some of our callbacks don't expect a value and our own tests
              // assert that the parameter length is 1
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        };
        return Deferred;
      })();

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns navigator.userAgent string or '' if it's not defined.
       * @return user agent string
       */
      function getUA() {
        if (
          typeof navigator !== 'undefined' &&
          typeof navigator['userAgent'] === 'string'
        ) {
          return navigator['userAgent'];
        } else {
          return '';
        }
      }
      /**
       * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
       *
       * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
       * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
       * wait for a callback.
       */
      function isMobileCordova() {
        return (
          typeof window !== 'undefined' &&
          // @ts-ignore Setting up an broadly applicable index signature for Window
          // just to deal with this case would probably be a bad idea.
          !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())
        );
      }
      /**
       * Detect Node.js.
       *
       * @return true if Node.js environment is detected.
       */
      // Node detection logic from: https://github.com/iliakan/detect-node/
      function isNode() {
        try {
          return (
            Object.prototype.toString.call(__webpack_require__.g.process) ===
            '[object process]'
          );
        } catch (e) {
          return false;
        }
      }
      /**
       * Detect Browser Environment
       */
      function isBrowser() {
        return typeof self === 'object' && self.self === self;
      }
      function isBrowserExtension() {
        var runtime =
          typeof chrome === 'object'
            ? chrome.runtime
            : typeof browser === 'object'
            ? browser.runtime
            : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
      }
      /**
       * Detect React Native.
       *
       * @return true if ReactNative environment is detected.
       */
      function isReactNative() {
        return (
          typeof navigator === 'object' &&
          navigator['product'] === 'ReactNative'
        );
      }
      /** Detects Electron apps. */
      function isElectron() {
        return getUA().indexOf('Electron/') >= 0;
      }
      /** Detects Internet Explorer. */
      function isIE() {
        var ua = getUA();
        return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      }
      /** Detects Universal Windows Platform apps. */
      function isUWP() {
        return getUA().indexOf('MSAppHost/') >= 0;
      }
      /**
       * Detect whether the current SDK build is the Node version.
       *
       * @return true if it's the Node SDK build.
       */
      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      /** Returns true if we are running in Safari. */
      function isSafari() {
        return (
          !isNode() &&
          navigator.userAgent.includes('Safari') &&
          !navigator.userAgent.includes('Chrome')
        );
      }
      /**
       * This method checks if indexedDB is supported by current browser/service worker context
       * @return true if indexedDB is supported by current browser/service worker context
       */
      function isIndexedDBAvailable() {
        return 'indexedDB' in self && indexedDB != null;
      }
      /**
       * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
       * if errors occur during the database open operation.
       */
      function validateIndexedDBOpenable() {
        return new Promise(function (resolve, reject) {
          try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 =
              'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function () {
              request_1.result.close();
              // delete database only when it doesn't pre-exist
              if (!preExist_1) {
                window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
              }
              resolve(true);
            };
            request_1.onupgradeneeded = function () {
              preExist_1 = false;
            };
            request_1.onerror = function () {
              var _a;
              reject(
                ((_a = request_1.error) === null || _a === void 0
                  ? void 0
                  : _a.message) || ''
              );
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      /**
       *
       * This method checks whether cookie is enabled within current browser
       * @return true if cookie is enabled within current browser
       */
      function areCookiesEnabled() {
        if (!navigator || !navigator.cookieEnabled) {
          return false;
        }
        return true;
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var ERROR_NAME = 'FirebaseError';
      // Based on code from:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
      var FirebaseError = /** @class */ (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(
          FirebaseError,
          _super
        );
        function FirebaseError(code, message, customData) {
          var _this = _super.call(this, message) || this;
          _this.code = code;
          _this.customData = customData;
          _this.name = ERROR_NAME;
          // Fix For ES5
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
          Object.setPrototypeOf(_this, FirebaseError.prototype);
          // Maintains proper stack trace for where our error was thrown.
          // Only available on V8.
          if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
          }
          return _this;
        }
        return FirebaseError;
      })(Error);
      var ErrorFactory = /** @class */ (function () {
        function ErrorFactory(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        ErrorFactory.prototype.create = function (code) {
          var data = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
          }
          var customData = data[0] || {};
          var fullCode = this.service + '/' + code;
          var template = this.errors[code];
          var message = template
            ? replaceTemplate(template, customData)
            : 'Error';
          // Service Name: Error message (service/code).
          var fullMessage =
            this.serviceName + ': ' + message + ' (' + fullCode + ').';
          var error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        };
        return ErrorFactory;
      })();
      function replaceTemplate(template, data) {
        return template.replace(PATTERN, function (_, key) {
          var value = data[key];
          return value != null ? String(value) : '<' + key + '?>';
        });
      }
      var PATTERN = /\{\$([^}]+)}/g;

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Evaluates a JSON string into a javascript object.
       *
       * @param {string} str A string containing JSON.
       * @return {*} The javascript object representing the specified JSON.
       */
      function jsonEval(str) {
        return JSON.parse(str);
      }
      /**
       * Returns JSON representing a javascript object.
       * @param {*} data Javascript object to be stringified.
       * @return {string} The JSON contents of the object.
       */
      function stringify(data) {
        return JSON.stringify(data);
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Decodes a Firebase auth. token into constituent parts.
       *
       * Notes:
       * - May return with invalid / incomplete claims if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      var decode = function (token) {
        var header = {},
          claims = {},
          data = {},
          signature = '';
        try {
          var parts = token.split('.');
          header = jsonEval(base64Decode(parts[0]) || '');
          claims = jsonEval(base64Decode(parts[1]) || '');
          signature = parts[2];
          data = claims['d'] || {};
          delete claims['d'];
        } catch (e) {}
        return {
          header: header,
          claims: claims,
          data: data,
          signature: signature,
        };
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
       * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      var isValidTimestamp = function (token) {
        var claims = decode(token).claims;
        var now = Math.floor(new Date().getTime() / 1000);
        var validSince = 0,
          validUntil = 0;
        if (typeof claims === 'object') {
          if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
          } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
          }
          if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
          } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
          }
        }
        return (
          !!now &&
          !!validSince &&
          !!validUntil &&
          now >= validSince &&
          now <= validUntil
        );
      };
      /**
       * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
       *
       * Notes:
       * - May return null if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      var issuedAtTime = function (token) {
        var claims = decode(token).claims;
        if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
          return claims['iat'];
        }
        return null;
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      var isValidFormat = function (token) {
        var decoded = decode(token),
          claims = decoded.claims;
        return (
          !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat')
        );
      };
      /**
       * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      var isAdmin = function (token) {
        var claims = decode(token).claims;
        return typeof claims === 'object' && claims['admin'] === true;
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return undefined;
        }
      }
      function isEmpty(obj) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }
        return true;
      }
      function map(obj, fn, contextObj) {
        var res = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }
        return res;
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
       * params object (e.g. {arg: 'val', arg2: 'val2'})
       * Note: You must prepend it with ? when adding it to a URL.
       */
      function querystring(querystringParams) {
        var params = [];
        var _loop_1 = function (key, value) {
          if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
              params.push(
                encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal)
              );
            });
          } else {
            params.push(
              encodeURIComponent(key) + '=' + encodeURIComponent(value)
            );
          }
        };
        for (
          var _i = 0, _a = Object.entries(querystringParams);
          _i < _a.length;
          _i++
        ) {
          var _b = _a[_i],
            key = _b[0],
            value = _b[1];
          _loop_1(key, value);
        }
        return params.length ? '&' + params.join('&') : '';
      }
      /**
       * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
       * (e.g. {arg: 'val', arg2: 'val2'})
       */
      function querystringDecode(querystring) {
        var obj = {};
        var tokens = querystring.replace(/^\?/, '').split('&');
        tokens.forEach(function (token) {
          if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
          }
        });
        return obj;
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @fileoverview SHA-1 cryptographic hash.
       * Variable names follow the notation in FIPS PUB 180-3:
       * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
       *
       * Usage:
       *   var sha1 = new sha1();
       *   sha1.update(bytes);
       *   var hash = sha1.digest();
       *
       * Performance:
       *   Chrome 23:   ~400 Mbit/s
       *   Firefox 16:  ~250 Mbit/s
       *
       */
      /**
       * SHA-1 cryptographic hash constructor.
       *
       * The properties declared here are discussed in the above algorithm document.
       * @constructor
       * @final
       * @struct
       */
      var Sha1 = /** @class */ (function () {
        function Sha1() {
          /**
           * Holds the previous values of accumulated variables a-e in the compress_
           * function.
           * @private
           */
          this.chain_ = [];
          /**
           * A buffer holding the partially computed hash result.
           * @private
           */
          this.buf_ = [];
          /**
           * An array of 80 bytes, each a part of the message to be hashed.  Referred to
           * as the message schedule in the docs.
           * @private
           */
          this.W_ = [];
          /**
           * Contains data needed to pad messages less than 64 bytes.
           * @private
           */
          this.pad_ = [];
          /**
           * @private {number}
           */
          this.inbuf_ = 0;
          /**
           * @private {number}
           */
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }
          this.reset();
        }
        Sha1.prototype.reset = function () {
          this.chain_[0] = 0x67452301;
          this.chain_[1] = 0xefcdab89;
          this.chain_[2] = 0x98badcfe;
          this.chain_[3] = 0x10325476;
          this.chain_[4] = 0xc3d2e1f0;
          this.inbuf_ = 0;
          this.total_ = 0;
        };
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */
        Sha1.prototype.compress_ = function (buf, offset) {
          if (!offset) {
            offset = 0;
          }
          var W = this.W_;
          // get 16 big endian words
          if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
              // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
              // have a bug that turns the post-increment ++ operator into pre-increment
              // during JIT compilation.  We have code that depends heavily on SHA-1 for
              // correctness and which is affected by this bug, so I've removed all uses
              // of post-increment ++ in which the result value is used.  We can revert
              // this change once the Safari bug
              // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
              // most clients have been updated.
              W[i] =
                (buf.charCodeAt(offset) << 24) |
                (buf.charCodeAt(offset + 1) << 16) |
                (buf.charCodeAt(offset + 2) << 8) |
                buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (var i = 0; i < 16; i++) {
              W[i] =
                (buf[offset] << 24) |
                (buf[offset + 1] << 16) |
                (buf[offset + 2] << 8) |
                buf[offset + 3];
              offset += 4;
            }
          }
          // expand to 80 words
          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
          }
          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k;
          // TODO(user): Try to unroll this loop to speed up the computation.
          for (var i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ (b & (c ^ d));
                k = 0x5a827999;
              } else {
                f = b ^ c ^ d;
                k = 0x6ed9eba1;
              }
            } else {
              if (i < 60) {
                f = (b & c) | (d & (b | c));
                k = 0x8f1bbcdc;
              } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
              }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
          }
          this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
          this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
          this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
          this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
          this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
        };
        Sha1.prototype.update = function (bytes, length) {
          // TODO(johnlenz): tighten the function signature and remove this check
          if (bytes == null) {
            return;
          }
          if (length === undefined) {
            length = bytes.length;
          }
          var lengthMinusBlock = length - this.blockSize;
          var n = 0;
          // Using local instead of member variables gives ~5% speedup on Firefox 16.
          var buf = this.buf_;
          var inbuf = this.inbuf_;
          // The outer while loop should execute at most twice.
          while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === 'string') {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  // Jump to the outer loop so we use the full-block optimization.
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  // Jump to the outer loop so we use the full-block optimization.
                  break;
                }
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        };
        /** @override */
        Sha1.prototype.digest = function () {
          var digest = [];
          var totalBits = this.total_ * 8;
          // Add pad 0x80 0x00*.
          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          // Add # bits.
          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
          }
          this.compress_(this.buf_);
          var n = 0;
          for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
              digest[n] = (this.chain_[i] >> j) & 255;
              ++n;
            }
          }
          return digest;
        };
        return Sha1;
      })();

      /**
       * Helper to make a Subscribe function (just like Promise helps make a
       * Thenable).
       *
       * @param executor Function which can make calls to a single Observer
       *     as a proxy.
       * @param onNoObservers Callback when count of Observers goes to zero.
       */
      function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      /**
       * Implement fan-out for any number of Observers attached via a subscribe
       * function.
       */
      var ObserverProxy = /** @class */ (function () {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        function ObserverProxy(executor, onNoObservers) {
          var _this = this;
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          // Micro-task scheduling by calling task.then().
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          // Call the executor asynchronously so subscribers that are called
          // synchronously after the creation of the subscribe function
          // can still receive the very first value generated in the executor.
          this.task
            .then(function () {
              executor(_this);
            })
            .catch(function (e) {
              _this.error(e);
            });
        }
        ObserverProxy.prototype.next = function (value) {
          this.forEachObserver(function (observer) {
            observer.next(value);
          });
        };
        ObserverProxy.prototype.error = function (error) {
          this.forEachObserver(function (observer) {
            observer.error(error);
          });
          this.close(error);
        };
        ObserverProxy.prototype.complete = function () {
          this.forEachObserver(function (observer) {
            observer.complete();
          });
          this.close();
        };
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */
        ObserverProxy.prototype.subscribe = function (
          nextOrObserver,
          error,
          complete
        ) {
          var _this = this;
          var observer;
          if (
            nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined
          ) {
            throw new Error('Missing Observer.');
          }
          // Assemble an Observer object when passed as callback functions.
          if (
            implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])
          ) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error: error,
              complete: complete,
            };
          }
          if (observer.next === undefined) {
            observer.next = noop;
          }
          if (observer.error === undefined) {
            observer.error = noop;
          }
          if (observer.complete === undefined) {
            observer.complete = noop;
          }
          var unsub = this.unsubscribeOne.bind(this, this.observers.length);
          // Attempt to subscribe to a terminated Observable - we
          // just respond to the Observer with the final error or complete
          // event.
          if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
              try {
                if (_this.finalError) {
                  observer.error(_this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {
                // nothing
              }
              return;
            });
          }
          this.observers.push(observer);
          return unsub;
        };
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.
        ObserverProxy.prototype.unsubscribeOne = function (i) {
          if (this.observers === undefined || this.observers[i] === undefined) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        };
        ObserverProxy.prototype.forEachObserver = function (fn) {
          if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
          }
          // Since sendOne calls asynchronously - there is no chance that
          // this.observers will become undefined.
          for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        };
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.
        ObserverProxy.prototype.sendOne = function (i, fn) {
          var _this = this;
          // Execute the callback asynchronously
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.task.then(function () {
            if (
              _this.observers !== undefined &&
              _this.observers[i] !== undefined
            ) {
              try {
                fn(_this.observers[i]);
              } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) {
                  console.error(e);
                }
              }
            }
          });
        };
        ObserverProxy.prototype.close = function (err) {
          var _this = this;
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          if (err !== undefined) {
            this.finalError = err;
          }
          // Proxy is no longer needed - garbage collect references
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
          });
        };
        return ObserverProxy;
      })();
      /** Turn synchronous function into one called asynchronously. */
      // eslint-disable-next-line @typescript-eslint/ban-types
      function async(fn, onError) {
        return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          Promise.resolve(true)
            .then(function () {
              fn.apply(void 0, args);
            })
            .catch(function (error) {
              if (onError) {
                onError(error);
              }
            });
        };
      }
      /**
       * Return true if the object passed in implements any of the named methods.
       */
      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== 'object' || obj === null) {
          return false;
        }
        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
          var method = methods_1[_i];
          if (method in obj && typeof obj[method] === 'function') {
            return true;
          }
        }
        return false;
      }
      function noop() {
        // do nothing
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Check to make sure the appropriate number of arguments are provided for a public function.
       * Throws an error if it fails.
       *
       * @param fnName The function name
       * @param minCount The minimum number of arguments to allow for the function call
       * @param maxCount The maximum number of argument to allow for the function call
       * @param argCount The actual number of arguments provided.
       */
      var validateArgCount = function (fnName, minCount, maxCount, argCount) {
        var argError;
        if (argCount < minCount) {
          argError = 'at least ' + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
        }
        if (argError) {
          var error =
            fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
          throw new Error(error);
        }
      };
      /**
       * Generates a string to prefix an error message about failed argument validation
       *
       * @param fnName The function name
       * @param argumentNumber The index of the argument
       * @param optional Whether or not the argument is optional
       * @return The prefix to add to the error thrown for validation.
       */
      function errorPrefix(fnName, argumentNumber, optional) {
        var argName = '';
        switch (argumentNumber) {
          case 1:
            argName = optional ? 'first' : 'First';
            break;
          case 2:
            argName = optional ? 'second' : 'Second';
            break;
          case 3:
            argName = optional ? 'third' : 'Third';
            break;
          case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
          default:
            throw new Error(
              'errorPrefix called with argumentNumber > 4.  Need to update it?'
            );
        }
        var error = fnName + ' failed: ';
        error += argName + ' argument ';
        return error;
      }
      /**
       * @param fnName
       * @param argumentNumber
       * @param namespace
       * @param optional
       */
      function validateNamespace(fnName, argumentNumber, namespace, optional) {
        if (optional && !namespace) {
          return;
        }
        if (typeof namespace !== 'string') {
          //TODO: I should do more validation here. We only allow certain chars in namespaces.
          throw new Error(
            errorPrefix(fnName, argumentNumber, optional) +
              'must be a valid firebase namespace.'
          );
        }
      }
      function validateCallback(
        fnName,
        argumentNumber,
        // eslint-disable-next-line @typescript-eslint/ban-types
        callback,
        optional
      ) {
        if (optional && !callback) {
          return;
        }
        if (typeof callback !== 'function') {
          throw new Error(
            errorPrefix(fnName, argumentNumber, optional) +
              'must be a valid function.'
          );
        }
      }
      function validateContextObject(
        fnName,
        argumentNumber,
        context,
        optional
      ) {
        if (optional && !context) {
          return;
        }
        if (typeof context !== 'object' || context === null) {
          throw new Error(
            errorPrefix(fnName, argumentNumber, optional) +
              'must be a valid context object.'
          );
        }
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
      // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
      // so it's been modified.
      // Note that not all Unicode characters appear as single characters in JavaScript strings.
      // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
      // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
      // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
      // pair).
      // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
      /**
       * @param {string} str
       * @return {Array}
       */
      var stringToByteArray$1 = function (str) {
        var out = [];
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          // Is this the lead surrogate in a surrogate pair?
          if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
          }
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
          } else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
          } else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
          }
        }
        return out;
      };
      /**
       * Calculate length without actually converting; useful for doing cheaper validation.
       * @param {string} str
       * @return {number}
       */
      var stringLength = function (str) {
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
          } else {
            p += 3;
          }
        }
        return p;
      };

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * The amount of milliseconds to exponentially increase.
       */
      var DEFAULT_INTERVAL_MILLIS = 1000;
      /**
       * The factor to backoff by.
       * Should be a number greater than 1.
       */
      var DEFAULT_BACKOFF_FACTOR = 2;
      /**
       * The maximum milliseconds to increase to.
       *
       * <p>Visible for testing
       */
      var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
      /**
       * The percentage of backoff time to randomize by.
       * See
       * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
       * for context.
       *
       * <p>Visible for testing
       */
      var RANDOM_FACTOR = 0.5;
      /**
       * Based on the backoff method from
       * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
       * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
       */
      function calculateBackoffMillis(
        backoffCount,
        intervalMillis,
        backoffFactor
      ) {
        if (intervalMillis === void 0) {
          intervalMillis = DEFAULT_INTERVAL_MILLIS;
        }
        if (backoffFactor === void 0) {
          backoffFactor = DEFAULT_BACKOFF_FACTOR;
        }
        // Calculates an exponentially increasing value.
        // Deviation: calculates value from count and a constant interval, so we only need to save value
        // and count to restore state.
        var currBaseValue =
          intervalMillis * Math.pow(backoffFactor, backoffCount);
        // A random "fuzz" to avoid waves of retries.
        // Deviation: randomFactor is required.
        var randomWait = Math.round(
          // A fraction of the backoff value to add/subtract.
          // Deviation: changes multiplication order to improve readability.
          RANDOM_FACTOR *
            currBaseValue *
            // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
            // if we add or subtract.
            (Math.random() - 0.5) *
            2
        );
        // Limits backoff to max to avoid effectively permanent backoff.
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Provide English ordinal letters after a number
       */
      function ordinal(i) {
        if (!Number.isFinite(i)) {
          return '' + i;
        }
        return i + indicator(i);
      }
      function indicator(i) {
        i = Math.abs(i);
        var cent = i % 100;
        if (cent >= 10 && cent <= 20) {
          return 'th';
        }
        var dec = i % 10;
        if (dec === 1) {
          return 'st';
        }
        if (dec === 2) {
          return 'nd';
        }
        if (dec === 3) {
          return 'rd';
        }
        return 'th';
      }

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 7 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ __extends: () => /* binding */ __extends,
        /* harmony export */ __assign: () => /* binding */ __assign,
        /* harmony export */ __rest: () => /* binding */ __rest,
        /* harmony export */ __decorate: () => /* binding */ __decorate,
        /* harmony export */ __param: () => /* binding */ __param,
        /* harmony export */ __metadata: () => /* binding */ __metadata,
        /* harmony export */ __awaiter: () => /* binding */ __awaiter,
        /* harmony export */ __generator: () => /* binding */ __generator,
        /* harmony export */ __createBinding: () =>
          /* binding */ __createBinding,
        /* harmony export */ __exportStar: () => /* binding */ __exportStar,
        /* harmony export */ __values: () => /* binding */ __values,
        /* harmony export */ __read: () => /* binding */ __read,
        /* harmony export */ __spread: () => /* binding */ __spread,
        /* harmony export */ __spreadArrays: () => /* binding */ __spreadArrays,
        /* harmony export */ __await: () => /* binding */ __await,
        /* harmony export */ __asyncGenerator: () =>
          /* binding */ __asyncGenerator,
        /* harmony export */ __asyncDelegator: () =>
          /* binding */ __asyncDelegator,
        /* harmony export */ __asyncValues: () => /* binding */ __asyncValues,
        /* harmony export */ __makeTemplateObject: () =>
          /* binding */ __makeTemplateObject,
        /* harmony export */ __importStar: () => /* binding */ __importStar,
        /* harmony export */ __importDefault: () =>
          /* binding */ __importDefault,
        /* harmony export */ __classPrivateFieldGet: () =>
          /* binding */ __classPrivateFieldGet,
        /* harmony export */ __classPrivateFieldSet: () =>
          /* binding */ __classPrivateFieldSet,
        /* harmony export */
      });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      /* global Reflect, Promise */

      var extendStatics = function (d, b) {
        extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b;
            }) ||
          function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
          };
        return extendStatics(d, b);
      };

      function __extends(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype =
          b === null
            ? Object.create(b)
            : ((__.prototype = b.prototype), new __());
      }

      var __assign = function () {
        __assign =
          Object.assign ||
          function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]];
          }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
              ? (desc = Object.getOwnPropertyDescriptor(target, key))
              : desc,
          d;
        if (
          typeof Reflect === 'object' &&
          typeof Reflect.decorate === 'function'
        )
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (
          typeof Reflect === 'object' &&
          typeof Reflect.metadata === 'function'
        )
          return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === 'function' &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError('Generator is already executing.');
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y['return']
                      : op[0]
                      ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m)
          if (p !== 'default' && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }

      function __values(o) {
        var s = typeof Symbol === 'function' && Symbol.iterator,
          m = s && o[s],
          i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === 'number')
          return {
            next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
            },
          };
        throw new TypeError(
          s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      }

      function __read(o, n) {
        var m = typeof Symbol === 'function' && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error: error };
        } finally {
          try {
            if (r && !r.done && (m = i['return'])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }

      function __await(v) {
        return this instanceof __await ? ((this.v = v), this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
        return (
          (i = {}),
          verb('next'),
          verb('throw'),
          verb('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function verb(n) {
          if (g[n])
            i[n] = function (v) {
              return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await
            ? Promise.resolve(r.value.v).then(fulfill, reject)
            : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume('next', value);
        }
        function reject(value) {
          resume('throw', value);
        }
        function settle(f, v) {
          if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return (
          (i = {}),
          verb('next'),
          verb('throw', function (e) {
            throw e;
          }),
          verb('return'),
          (i[Symbol.iterator] = function () {
            return this;
          }),
          i
        );
        function verb(n, f) {
          i[n] = o[n]
            ? function (v) {
                return (p = !p)
                  ? { value: __await(o[n](v)), done: n === 'return' }
                  : f
                  ? f(v)
                  : v;
              }
            : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var m = o[Symbol.asyncIterator],
          i;
        return m
          ? m.call(o)
          : ((o =
              typeof __values === 'function'
                ? __values(o)
                : o[Symbol.iterator]()),
            (i = {}),
            verb('next'),
            verb('throw'),
            verb('return'),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i);
        function verb(n) {
          i[n] =
            o[n] &&
            function (v) {
              return new Promise(function (resolve, reject) {
                (v = o[n](v)), settle(resolve, reject, v.done, v.value);
              });
            };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, 'raw', { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError('attempted to get private field on non-instance');
        }
        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError('attempted to set private field on non-instance');
        }
        privateMap.set(receiver, value);
        return value;
      }

      /***/
    },
    /* 8 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Component: () => /* binding */ Component,
        /* harmony export */ ComponentContainer: () =>
          /* binding */ ComponentContainer,
        /* harmony export */ Provider: () => /* binding */ Provider,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        7
      );
      /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        6
      );

      /**
       * Component for service name T, e.g. `auth`, `auth-internal`
       */
      var Component = /** @class */ (function () {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        function Component(name, instanceFactory, type) {
          this.name = name;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          /**
           * Properties to be added to the service namespace
           */
          this.serviceProps = {};
          this.instantiationMode = 'LAZY' /* LAZY */;
        }
        Component.prototype.setInstantiationMode = function (mode) {
          this.instantiationMode = mode;
          return this;
        };
        Component.prototype.setMultipleInstances = function (
          multipleInstances
        ) {
          this.multipleInstances = multipleInstances;
          return this;
        };
        Component.prototype.setServiceProps = function (props) {
          this.serviceProps = props;
          return this;
        };
        return Component;
      })();

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var DEFAULT_ENTRY_NAME = '[DEFAULT]';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
       * NameServiceMapping[T] is an alias for the type of the instance
       */
      var Provider = /** @class */ (function () {
        function Provider(name, container) {
          this.name = name;
          this.container = container;
          this.component = null;
          this.instances = new Map();
          this.instancesDeferred = new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */
        Provider.prototype.get = function (identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          }
          // if multipleInstances is not supported, use the default name
          var normalizedIdentifier = this.normalizeInstanceIdentifier(
            identifier
          );
          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
              var instance = this.getOrInitializeService(normalizedIdentifier);
              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e) {
              // when the instance factory throws an exception during get(), it should not cause
              // a fatal error. We just return the unresolved promise in this case.
            }
          }
          return this.instancesDeferred.get(normalizedIdentifier).promise;
        };
        Provider.prototype.getImmediate = function (options) {
          var _a = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(
              { identifier: DEFAULT_ENTRY_NAME, optional: false },
              options
            ),
            identifier = _a.identifier,
            optional = _a.optional;
          // if multipleInstances is not supported, use the default name
          var normalizedIdentifier = this.normalizeInstanceIdentifier(
            identifier
          );
          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
              if (optional) {
                return null;
              }
              throw Error('Service ' + this.name + ' is not available');
            }
            return instance;
          } catch (e) {
            if (optional) {
              return null;
            } else {
              throw e;
            }
          }
        };
        Provider.prototype.getComponent = function () {
          return this.component;
        };
        Provider.prototype.setComponent = function (component) {
          var e_1, _a;
          if (component.name !== this.name) {
            throw Error(
              'Mismatching Component ' +
                component.name +
                ' for Provider ' +
                this.name +
                '.'
            );
          }
          if (this.component) {
            throw Error(
              'Component for ' + this.name + ' has already been provided'
            );
          }
          this.component = component;
          // if the service is eager, initialize the default instance
          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            } catch (e) {
              // when the instance factory for an eager Component throws an exception during the eager
              // initialization, it should not cause a fatal error.
              // TODO: Investigate if we need to make it configurable, because some component may want to cause
              // a fatal error in this case?
            }
          }
          try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (
              var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(
                  this.instancesDeferred.entries()
                ),
                _c = _b.next();
              !_c.done;
              _c = _b.next()
            ) {
              var _d = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(
                  _c.value,
                  2
                ),
                instanceIdentifier = _d[0],
                instanceDeferred = _d[1];
              var normalizedIdentifier = this.normalizeInstanceIdentifier(
                instanceIdentifier
              );
              try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                var instance = this.getOrInitializeService(
                  normalizedIdentifier
                );
                instanceDeferred.resolve(instance);
              } catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };
        Provider.prototype.clearInstance = function (identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          }
          this.instancesDeferred.delete(identifier);
          this.instances.delete(identifier);
        };
        // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?
        Provider.prototype.delete = function () {
          return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(
            this,
            void 0,
            void 0,
            function () {
              var services;
              return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(
                this,
                function (_a) {
                  switch (_a.label) {
                    case 0:
                      services = Array.from(this.instances.values());
                      return [
                        4 /*yield*/,
                        Promise.all(
                          (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(
                            services
                              .filter(function (service) {
                                return 'INTERNAL' in service;
                              }) // legacy services
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              .map(function (service) {
                                return service.INTERNAL.delete();
                              }),
                            services
                              .filter(function (service) {
                                return '_delete' in service;
                              }) // modularized services
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              .map(function (service) {
                                return service._delete();
                              })
                          )
                        ),
                      ];
                    case 1:
                      _a.sent();
                      return [2 /*return*/];
                  }
                }
              );
            }
          );
        };
        Provider.prototype.isComponentSet = function () {
          return this.component != null;
        };
        Provider.prototype.getOrInitializeService = function (identifier) {
          var instance = this.instances.get(identifier);
          if (!instance && this.component) {
            instance = this.component.instanceFactory(
              this.container,
              normalizeIdentifierForFactory(identifier)
            );
            this.instances.set(identifier, instance);
          }
          return instance || null;
        };
        Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
          if (this.component) {
            return this.component.multipleInstances
              ? identifier
              : DEFAULT_ENTRY_NAME;
          } else {
            return identifier; // assume multiple instances are supported before the component is provided.
          }
        };
        return Provider;
      })();
      // undefined should be passed to the service factory for the default instance
      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
      }
      function isComponentEager(component) {
        return component.instantiationMode === 'EAGER' /* EAGER */;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
       */
      var ComponentContainer = /** @class */ (function () {
        function ComponentContainer(name) {
          this.name = name;
          this.providers = new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */
        ComponentContainer.prototype.addComponent = function (component) {
          var provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            throw new Error(
              'Component ' +
                component.name +
                ' has already been registered with ' +
                this.name
            );
          }
          provider.setComponent(component);
        };
        ComponentContainer.prototype.addOrOverwriteComponent = function (
          component
        ) {
          var provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
          }
          this.addComponent(component);
        };
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */
        ComponentContainer.prototype.getProvider = function (name) {
          if (this.providers.has(name)) {
            return this.providers.get(name);
          }
          // create a Provider for a service that hasn't registered with Firebase
          var provider = new Provider(name, this);
          this.providers.set(name, provider);
          return provider;
        };
        ComponentContainer.prototype.getProviders = function () {
          return Array.from(this.providers.values());
        };
        return ComponentContainer;
      })();

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 9 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ LogLevel: () => /* binding */ LogLevel,
        /* harmony export */ Logger: () => /* binding */ Logger,
        /* harmony export */ setLogLevel: () => /* binding */ setLogLevel,
        /* harmony export */ setUserLogHandler: () =>
          /* binding */ setUserLogHandler,
        /* harmony export */
      });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var _a;
      /**
       * A container for all of the Logger instances
       */
      var instances = [];
      /**
       * The JS SDK supports 5 log levels and also allows a user the ability to
       * silence the logs altogether.
       *
       * The order is a follows:
       * DEBUG < VERBOSE < INFO < WARN < ERROR
       *
       * All of the log types above the current log level will be captured (i.e. if
       * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
       * `VERBOSE` logs will not)
       */
      var LogLevel;
      (function (LogLevel) {
        LogLevel[(LogLevel['DEBUG'] = 0)] = 'DEBUG';
        LogLevel[(LogLevel['VERBOSE'] = 1)] = 'VERBOSE';
        LogLevel[(LogLevel['INFO'] = 2)] = 'INFO';
        LogLevel[(LogLevel['WARN'] = 3)] = 'WARN';
        LogLevel[(LogLevel['ERROR'] = 4)] = 'ERROR';
        LogLevel[(LogLevel['SILENT'] = 5)] = 'SILENT';
      })(LogLevel || (LogLevel = {}));
      var levelStringToEnum = {
        debug: LogLevel.DEBUG,
        verbose: LogLevel.VERBOSE,
        info: LogLevel.INFO,
        warn: LogLevel.WARN,
        error: LogLevel.ERROR,
        silent: LogLevel.SILENT,
      };
      /**
       * The default log level
       */
      var defaultLogLevel = LogLevel.INFO;
      /**
       * By default, `console.debug` is not displayed in the developer console (in
       * chrome). To avoid forcing users to have to opt-in to these logs twice
       * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
       * logs to the `console.log` function.
       */
      var ConsoleMethod =
        ((_a = {}),
        (_a[LogLevel.DEBUG] = 'log'),
        (_a[LogLevel.VERBOSE] = 'log'),
        (_a[LogLevel.INFO] = 'info'),
        (_a[LogLevel.WARN] = 'warn'),
        (_a[LogLevel.ERROR] = 'error'),
        _a);
      /**
       * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
       * messages on to their corresponding console counterparts (if the log method
       * is supported by the current log level)
       */
      var defaultLogHandler = function (instance, logType) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        if (logType < instance.logLevel) {
          return;
        }
        var now = new Date().toISOString();
        var method = ConsoleMethod[logType];
        if (method) {
          console[method].apply(
            console,
            __spreadArrays(['[' + now + ']  ' + instance.name + ':'], args)
          );
        } else {
          throw new Error(
            'Attempted to log a message with an invalid logType (value: ' +
              logType +
              ')'
          );
        }
      };
      var Logger = /** @class */ (function () {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        function Logger(name) {
          this.name = name;
          /**
           * The log level of the given Logger instance.
           */
          this._logLevel = defaultLogLevel;
          /**
           * The main (internal) log handler for the Logger instance.
           * Can be set to a new function in internal package code but not by user.
           */
          this._logHandler = defaultLogHandler;
          /**
           * The optional, additional, user-defined log handler for the Logger instance.
           */
          this._userLogHandler = null;
          /**
           * Capture the current instance for later use
           */
          instances.push(this);
        }
        Object.defineProperty(Logger.prototype, 'logLevel', {
          get: function () {
            return this._logLevel;
          },
          set: function (val) {
            if (!(val in LogLevel)) {
              throw new TypeError(
                'Invalid value "' + val + '" assigned to `logLevel`'
              );
            }
            this._logLevel = val;
          },
          enumerable: false,
          configurable: true,
        });
        // Workaround for setter/getter having to be the same type.
        Logger.prototype.setLogLevel = function (val) {
          this._logLevel =
            typeof val === 'string' ? levelStringToEnum[val] : val;
        };
        Object.defineProperty(Logger.prototype, 'logHandler', {
          get: function () {
            return this._logHandler;
          },
          set: function (val) {
            if (typeof val !== 'function') {
              throw new TypeError(
                'Value assigned to `logHandler` must be a function'
              );
            }
            this._logHandler = val;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(Logger.prototype, 'userLogHandler', {
          get: function () {
            return this._userLogHandler;
          },
          set: function (val) {
            this._userLogHandler = val;
          },
          enumerable: false,
          configurable: true,
        });
        /**
         * The functions below are all based on the `console` interface
         */
        Logger.prototype.debug = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler &&
            this._userLogHandler.apply(
              this,
              __spreadArrays([this, LogLevel.DEBUG], args)
            );
          this._logHandler.apply(
            this,
            __spreadArrays([this, LogLevel.DEBUG], args)
          );
        };
        Logger.prototype.log = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler &&
            this._userLogHandler.apply(
              this,
              __spreadArrays([this, LogLevel.VERBOSE], args)
            );
          this._logHandler.apply(
            this,
            __spreadArrays([this, LogLevel.VERBOSE], args)
          );
        };
        Logger.prototype.info = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler &&
            this._userLogHandler.apply(
              this,
              __spreadArrays([this, LogLevel.INFO], args)
            );
          this._logHandler.apply(
            this,
            __spreadArrays([this, LogLevel.INFO], args)
          );
        };
        Logger.prototype.warn = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler &&
            this._userLogHandler.apply(
              this,
              __spreadArrays([this, LogLevel.WARN], args)
            );
          this._logHandler.apply(
            this,
            __spreadArrays([this, LogLevel.WARN], args)
          );
        };
        Logger.prototype.error = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler &&
            this._userLogHandler.apply(
              this,
              __spreadArrays([this, LogLevel.ERROR], args)
            );
          this._logHandler.apply(
            this,
            __spreadArrays([this, LogLevel.ERROR], args)
          );
        };
        return Logger;
      })();
      function setLogLevel(level) {
        instances.forEach(function (inst) {
          inst.setLogLevel(level);
        });
      }
      function setUserLogHandler(logCallback, options) {
        var _loop_1 = function (instance) {
          var customLogLevel = null;
          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }
          if (logCallback === null) {
            instance.userLogHandler = null;
          } else {
            instance.userLogHandler = function (instance, level) {
              var args = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
              }
              var message = args
                .map(function (arg) {
                  if (arg == null) {
                    return null;
                  } else if (typeof arg === 'string') {
                    return arg;
                  } else if (
                    typeof arg === 'number' ||
                    typeof arg === 'boolean'
                  ) {
                    return arg.toString();
                  } else if (arg instanceof Error) {
                    return arg.message;
                  } else {
                    try {
                      return JSON.stringify(arg);
                    } catch (ignored) {
                      return null;
                    }
                  }
                })
                .filter(function (arg) {
                  return arg;
                })
                .join(' ');
              if (
                level >=
                (customLogLevel !== null && customLogLevel !== void 0
                  ? customLogLevel
                  : instance.logLevel)
              ) {
                logCallback({
                  level: LogLevel[level].toLowerCase(),
                  message: message,
                  args: args,
                  type: instance.name,
                });
              }
            };
          }
        };
        for (
          var _i = 0, instances_1 = instances;
          _i < instances_1.length;
          _i++
        ) {
          var instance = instances_1[_i];
          _loop_1(instance);
        }
      }

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 10 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        11
      );

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 11 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ factory: () => /* binding */ factory,
        /* harmony export */ getGlobalVars: () => /* binding */ getGlobalVars,
        /* harmony export */ registerAnalytics: () =>
          /* binding */ registerAnalytics,
        /* harmony export */ resetGlobalVars: () =>
          /* binding */ resetGlobalVars,
        /* harmony export */ settings: () => /* binding */ settings,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        7
      );
      /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        5
      );
      /* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        12
      );
      /* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        9
      );
      /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        6
      );
      /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        8
      );

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Key to attach FID to in gtag params.
      var GA_FID_KEY = 'firebase_id';
      var ORIGIN_KEY = 'origin';
      var FETCH_TIMEOUT_MILLIS = 60 * 1000;
      var DYNAMIC_CONFIG_URL =
        'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
      var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
      var GtagCommand;
      (function (GtagCommand) {
        GtagCommand['EVENT'] = 'event';
        GtagCommand['SET'] = 'set';
        GtagCommand['CONFIG'] = 'config';
      })(GtagCommand || (GtagCommand = {}));
      /*
       * Officially recommended event names for gtag.js
       * Any other string is also allowed.
       */
      var EventName;
      (function (EventName) {
        EventName['ADD_SHIPPING_INFO'] = 'add_shipping_info';
        EventName['ADD_PAYMENT_INFO'] = 'add_payment_info';
        EventName['ADD_TO_CART'] = 'add_to_cart';
        EventName['ADD_TO_WISHLIST'] = 'add_to_wishlist';
        EventName['BEGIN_CHECKOUT'] = 'begin_checkout';
        /** @deprecated */
        EventName['CHECKOUT_PROGRESS'] = 'checkout_progress';
        EventName['EXCEPTION'] = 'exception';
        EventName['GENERATE_LEAD'] = 'generate_lead';
        EventName['LOGIN'] = 'login';
        EventName['PAGE_VIEW'] = 'page_view';
        EventName['PURCHASE'] = 'purchase';
        EventName['REFUND'] = 'refund';
        EventName['REMOVE_FROM_CART'] = 'remove_from_cart';
        EventName['SCREEN_VIEW'] = 'screen_view';
        EventName['SEARCH'] = 'search';
        EventName['SELECT_CONTENT'] = 'select_content';
        EventName['SELECT_ITEM'] = 'select_item';
        EventName['SELECT_PROMOTION'] = 'select_promotion';
        /** @deprecated */
        EventName['SET_CHECKOUT_OPTION'] = 'set_checkout_option';
        EventName['SHARE'] = 'share';
        EventName['SIGN_UP'] = 'sign_up';
        EventName['TIMING_COMPLETE'] = 'timing_complete';
        EventName['VIEW_CART'] = 'view_cart';
        EventName['VIEW_ITEM'] = 'view_item';
        EventName['VIEW_ITEM_LIST'] = 'view_item_list';
        EventName['VIEW_PROMOTION'] = 'view_promotion';
        EventName['VIEW_SEARCH_RESULTS'] = 'view_search_results';
      })(EventName || (EventName = {}));

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Logs an analytics event through the Firebase SDK.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param eventName Google Analytics event name, choose from standard list or use a custom string.
       * @param eventParams Analytics event parameters.
       */
      function logEvent(
        gtagFunction,
        initializationPromise,
        eventName,
        eventParams,
        options
      ) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var measurementId, params;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    if (!(options && options.global)) return [3 /*break*/, 1];
                    gtagFunction(GtagCommand.EVENT, eventName, eventParams);
                    return [2 /*return*/];
                  case 1:
                    return [4 /*yield*/, initializationPromise];
                  case 2:
                    measurementId = _a.sent();
                    params = (0,
                    tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)(
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)(
                        {},
                        eventParams
                      ),
                      { send_to: measurementId }
                    );
                    gtagFunction(GtagCommand.EVENT, eventName, params);
                    _a.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Set screen_name parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param screenName Screen name string to set.
       */
      function setCurrentScreen(
        gtagFunction,
        initializationPromise,
        screenName,
        options
      ) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var measurementId;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    if (!(options && options.global)) return [3 /*break*/, 1];
                    gtagFunction(GtagCommand.SET, { screen_name: screenName });
                    return [2 /*return*/, Promise.resolve()];
                  case 1:
                    return [4 /*yield*/, initializationPromise];
                  case 2:
                    measurementId = _a.sent();
                    gtagFunction(GtagCommand.CONFIG, measurementId, {
                      update: true,
                      screen_name: screenName,
                    });
                    _a.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Set user_id parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param id User ID string to set
       */
      function setUserId(gtagFunction, initializationPromise, id, options) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var measurementId;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    if (!(options && options.global)) return [3 /*break*/, 1];
                    gtagFunction(GtagCommand.SET, { user_id: id });
                    return [2 /*return*/, Promise.resolve()];
                  case 1:
                    return [4 /*yield*/, initializationPromise];
                  case 2:
                    measurementId = _a.sent();
                    gtagFunction(GtagCommand.CONFIG, measurementId, {
                      update: true,
                      user_id: id,
                    });
                    _a.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Set all other user properties other than user_id and screen_name.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param properties Map of user properties to set
       */
      function setUserProperties(
        gtagFunction,
        initializationPromise,
        properties,
        options
      ) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var flatProperties, _i, _a, key, measurementId;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    if (!(options && options.global)) return [3 /*break*/, 1];
                    flatProperties = {};
                    for (
                      _i = 0, _a = Object.keys(properties);
                      _i < _a.length;
                      _i++
                    ) {
                      key = _a[_i];
                      // use dot notation for merge behavior in gtag.js
                      flatProperties['user_properties.' + key] =
                        properties[key];
                    }
                    gtagFunction(GtagCommand.SET, flatProperties);
                    return [2 /*return*/, Promise.resolve()];
                  case 1:
                    return [4 /*yield*/, initializationPromise];
                  case 2:
                    measurementId = _b.sent();
                    gtagFunction(GtagCommand.CONFIG, measurementId, {
                      update: true,
                      user_properties: properties,
                    });
                    _b.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Set whether collection is enabled for this ID.
       *
       * @param enabled If true, collection is enabled for this ID.
       */
      function setAnalyticsCollectionEnabled(initializationPromise, enabled) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var measurementId;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, initializationPromise];
                  case 1:
                    measurementId = _a.sent();
                    window['ga-disable-' + measurementId] = !enabled;
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Logger(
        '@firebase/analytics'
      );

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Inserts gtag script tag into the page to asynchronously download gtag.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */
      function insertScriptTag(dataLayerName) {
        var script = document.createElement('script');
        // We are not providing an analyticsId in the URL because it would trigger a `page_view`
        // without fid. We will initialize ga-id using gtag (config) command together with fid.
        script.src = GTAG_URL + '?l=' + dataLayerName;
        script.async = true;
        document.head.appendChild(script);
      }
      /**
       * Get reference to, or create, global datalayer.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */
      function getOrCreateDataLayer(dataLayerName) {
        // Check for existing dataLayer and create if needed.
        var dataLayer = [];
        if (Array.isArray(window[dataLayerName])) {
          dataLayer = window[dataLayerName];
        } else {
          window[dataLayerName] = dataLayer;
        }
        return dataLayer;
      }
      /**
       * Wrapped gtag logic when gtag is called with 'config' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param measurementId GA Measurement ID to set config for.
       * @param gtagParams Gtag config params to set.
       */
      function gtagOnConfig(
        gtagCore,
        initializationPromisesMap,
        dynamicConfigPromisesList,
        measurementIdToAppId,
        measurementId,
        gtagParams
      ) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    correspondingAppId = measurementIdToAppId[measurementId];
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, 7, , 8]);
                    if (!correspondingAppId) return [3 /*break*/, 3];
                    return [
                      4 /*yield*/,
                      initializationPromisesMap[correspondingAppId],
                    ];
                  case 2:
                    _a.sent();
                    return [3 /*break*/, 6];
                  case 3:
                    return [
                      4 /*yield*/,
                      Promise.all(dynamicConfigPromisesList),
                    ];
                  case 4:
                    dynamicConfigResults = _a.sent();
                    foundConfig = dynamicConfigResults.find(function (config) {
                      return config.measurementId === measurementId;
                    });
                    if (!foundConfig) return [3 /*break*/, 6];
                    return [
                      4 /*yield*/,
                      initializationPromisesMap[foundConfig.appId],
                    ];
                  case 5:
                    _a.sent();
                    _a.label = 6;
                  case 6:
                    return [3 /*break*/, 8];
                  case 7:
                    e_1 = _a.sent();
                    logger.error(e_1);
                    return [3 /*break*/, 8];
                  case 8:
                    gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Wrapped gtag logic when gtag is called with 'event' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementId GA Measurement ID to log event to.
       * @param gtagParams Params to log with this event.
       */
      function gtagOnEvent(
        gtagCore,
        initializationPromisesMap,
        dynamicConfigPromisesList,
        measurementId,
        gtagParams
      ) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var initializationPromisesToWaitFor,
              gaSendToList,
              dynamicConfigResults,
              _loop_1,
              _i,
              gaSendToList_1,
              sendToId,
              state_1,
              e_2;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 4, , 5]);
                    initializationPromisesToWaitFor = [];
                    if (!(gtagParams && gtagParams['send_to']))
                      return [3 /*break*/, 2];
                    gaSendToList = gtagParams['send_to'];
                    // Make it an array if is isn't, so it can be dealt with the same way.
                    if (!Array.isArray(gaSendToList)) {
                      gaSendToList = [gaSendToList];
                    }
                    return [
                      4 /*yield*/,
                      Promise.all(dynamicConfigPromisesList),
                    ];
                  case 1:
                    dynamicConfigResults = _a.sent();
                    _loop_1 = function (sendToId) {
                      // Any fetched dynamic measurement ID that matches this 'send_to' ID
                      var foundConfig = dynamicConfigResults.find(function (
                        config
                      ) {
                        return config.measurementId === sendToId;
                      });
                      var initializationPromise =
                        foundConfig &&
                        initializationPromisesMap[foundConfig.appId];
                      if (initializationPromise) {
                        initializationPromisesToWaitFor.push(
                          initializationPromise
                        );
                      } else {
                        // Found an item in 'send_to' that is not associated
                        // directly with an FID, possibly a group.  Empty this array,
                        // exit the loop early, and let it get populated below.
                        initializationPromisesToWaitFor = [];
                        return 'break';
                      }
                    };
                    for (
                      _i = 0, gaSendToList_1 = gaSendToList;
                      _i < gaSendToList_1.length;
                      _i++
                    ) {
                      sendToId = gaSendToList_1[_i];
                      state_1 = _loop_1(sendToId);
                      if (state_1 === 'break') break;
                    }
                    _a.label = 2;
                  case 2:
                    // This will be unpopulated if there was no 'send_to' field , or
                    // if not all entries in the 'send_to' field could be mapped to
                    // a FID. In these cases, wait on all pending initialization promises.
                    if (initializationPromisesToWaitFor.length === 0) {
                      initializationPromisesToWaitFor = Object.values(
                        initializationPromisesMap
                      );
                    }
                    // Run core gtag function with args after all relevant initialization
                    // promises have been resolved.
                    return [
                      4 /*yield*/,
                      Promise.all(initializationPromisesToWaitFor),
                    ];
                  case 3:
                    // Run core gtag function with args after all relevant initialization
                    // promises have been resolved.
                    _a.sent();
                    // Workaround for http://b/141370449 - third argument cannot be undefined.
                    gtagCore(
                      GtagCommand.EVENT,
                      measurementId,
                      gtagParams || {}
                    );
                    return [3 /*break*/, 5];
                  case 4:
                    e_2 = _a.sent();
                    logger.error(e_2);
                    return [3 /*break*/, 5];
                  case 5:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Wraps a standard gtag function with extra code to wait for completion of
       * relevant initialization promises before sending requests.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       */
      function wrapGtag(
        gtagCore,
        /**
         * Allows wrapped gtag calls to wait on whichever intialization promises are required,
         * depending on the contents of the gtag params' `send_to` field, if any.
         */
        initializationPromisesMap,
        /**
         * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
         * before determining what initialization promises (which include FIDs) to wait for.
         */
        dynamicConfigPromisesList,
        /**
         * Wrapped gtag config calls can narrow down which initialization promise (with FID)
         * to wait for if the measurementId is already fetched, by getting the corresponding appId,
         * which is the key for the initialization promises map.
         */
        measurementIdToAppId
      ) {
        /**
         * Wrapper around gtag that ensures FID is sent with gtag calls.
         * @param command Gtag command type.
         * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
         * @param gtagParams Params if event is EVENT/CONFIG.
         */
        function gtagWrapper(command, idOrNameOrParams, gtagParams) {
          return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
            this,
            void 0,
            void 0,
            function () {
              var e_3;
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
                this,
                function (_a) {
                  switch (_a.label) {
                    case 0:
                      _a.trys.push([0, 6, , 7]);
                      if (!(command === GtagCommand.EVENT))
                        return [3 /*break*/, 2];
                      // If EVENT, second arg must be measurementId.
                      return [
                        4 /*yield*/,
                        gtagOnEvent(
                          gtagCore,
                          initializationPromisesMap,
                          dynamicConfigPromisesList,
                          idOrNameOrParams,
                          gtagParams
                        ),
                      ];
                    case 1:
                      // If EVENT, second arg must be measurementId.
                      _a.sent();
                      return [3 /*break*/, 5];
                    case 2:
                      if (!(command === GtagCommand.CONFIG))
                        return [3 /*break*/, 4];
                      // If CONFIG, second arg must be measurementId.
                      return [
                        4 /*yield*/,
                        gtagOnConfig(
                          gtagCore,
                          initializationPromisesMap,
                          dynamicConfigPromisesList,
                          measurementIdToAppId,
                          idOrNameOrParams,
                          gtagParams
                        ),
                      ];
                    case 3:
                      // If CONFIG, second arg must be measurementId.
                      _a.sent();
                      return [3 /*break*/, 5];
                    case 4:
                      // If SET, second arg must be params.
                      gtagCore(GtagCommand.SET, idOrNameOrParams);
                      _a.label = 5;
                    case 5:
                      return [3 /*break*/, 7];
                    case 6:
                      e_3 = _a.sent();
                      logger.error(e_3);
                      return [3 /*break*/, 7];
                    case 7:
                      return [2 /*return*/];
                  }
                }
              );
            }
          );
        }
        return gtagWrapper;
      }
      /**
       * Creates global gtag function or wraps existing one if found.
       * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
       * 'event' calls that belong to the GAID associated with this Firebase instance.
       *
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param dataLayerName Name of global GA datalayer array.
       * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
       */
      function wrapOrCreateGtag(
        initializationPromisesMap,
        dynamicConfigPromisesList,
        measurementIdToAppId,
        dataLayerName,
        gtagFunctionName
      ) {
        // Create a basic core gtag function
        var gtagCore = function () {
          var _args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
          }
          // Must push IArguments object, not an array.
          window[dataLayerName].push(arguments);
        };
        // Replace it with existing one if found
        if (
          window[gtagFunctionName] &&
          typeof window[gtagFunctionName] === 'function'
        ) {
          // @ts-ignore
          gtagCore = window[gtagFunctionName];
        }
        window[gtagFunctionName] = wrapGtag(
          gtagCore,
          initializationPromisesMap,
          dynamicConfigPromisesList,
          measurementIdToAppId
        );
        return {
          gtagCore: gtagCore,
          wrappedGtag: window[gtagFunctionName],
        };
      }
      /**
       * Returns first script tag in DOM matching our gtag url pattern.
       */
      function findGtagScriptOnPage() {
        var scriptTags = window.document.getElementsByTagName('script');
        for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
          var tag = _a[_i];
          if (tag.src && tag.src.includes(GTAG_URL)) {
            return tag;
          }
        }
        return null;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var _a;
      var ERRORS =
        ((_a = {}),
        (_a['already-exists' /* ALREADY_EXISTS */] =
          'A Firebase Analytics instance with the appId {$id} ' +
          ' already exists. ' +
          'Only one Firebase Analytics instance can be created for each appId.'),
        (_a['already-initialized' /* ALREADY_INITIALIZED */] =
          'Firebase Analytics has already been initialized.' +
          'settings() must be called before initializing any Analytics instance' +
          'or it will have no effect.'),
        (_a['interop-component-reg-failed' /* INTEROP_COMPONENT_REG_FAILED */] =
          'Firebase Analytics Interop Component failed to instantiate: {$reason}'),
        (_a['invalid-analytics-context' /* INVALID_ANALYTICS_CONTEXT */] =
          'Firebase Analytics is not supported in this environment. ' +
          'Wrap initialization of analytics in analytics.isSupported() ' +
          'to prevent initialization in unsupported environments. Details: {$errorInfo}'),
        (_a['indexeddb-unavailable' /* INDEXEDDB_UNAVAILABLE */] =
          'IndexedDB unavailable or restricted in this environment. ' +
          'Wrap initialization of analytics in analytics.isSupported() ' +
          'to prevent initialization in unsupported environments. Details: {$errorInfo}'),
        (_a['fetch-throttle' /* FETCH_THROTTLE */] =
          'The config fetch request timed out while in an exponential backoff state.' +
          ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.'),
        (_a['config-fetch-failed' /* CONFIG_FETCH_FAILED */] =
          'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}'),
        (_a['no-api-key' /* NO_API_KEY */] =
          'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
          'contain a valid API key.'),
        (_a['no-app-id' /* NO_APP_ID */] =
          'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
          'contain a valid app ID.'),
        _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ErrorFactory(
        'analytics',
        'Analytics',
        ERRORS
      );

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Backoff factor for 503 errors, which we want to be conservative about
       * to avoid overloading servers. Each retry interval will be
       * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
       * will be ~30 seconds (with fuzzing).
       */
      var LONG_RETRY_FACTOR = 30;
      /**
       * Base wait interval to multiplied by backoffFactor^backoffCount.
       */
      var BASE_INTERVAL_MILLIS = 1000;
      /**
       * Stubbable retry data storage class.
       */
      var RetryData = /** @class */ (function () {
        function RetryData(throttleMetadata, intervalMillis) {
          if (throttleMetadata === void 0) {
            throttleMetadata = {};
          }
          if (intervalMillis === void 0) {
            intervalMillis = BASE_INTERVAL_MILLIS;
          }
          this.throttleMetadata = throttleMetadata;
          this.intervalMillis = intervalMillis;
        }
        RetryData.prototype.getThrottleMetadata = function (appId) {
          return this.throttleMetadata[appId];
        };
        RetryData.prototype.setThrottleMetadata = function (appId, metadata) {
          this.throttleMetadata[appId] = metadata;
        };
        RetryData.prototype.deleteThrottleMetadata = function (appId) {
          delete this.throttleMetadata[appId];
        };
        return RetryData;
      })();
      var defaultRetryData = new RetryData();
      /**
       * Set GET request headers.
       * @param apiKey App API key.
       */
      function getHeaders(apiKey) {
        return new Headers({
          Accept: 'application/json',
          'x-goog-api-key': apiKey,
        });
      }
      /**
       * Fetches dynamic config from backend.
       * @param app Firebase app to fetch config for.
       */
      function fetchDynamicConfig(appFields) {
        var _a;
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var appId,
              apiKey,
              request,
              appUrl,
              response,
              errorMessage,
              jsonResponse,
              _ignored_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    (appId = appFields.appId), (apiKey = appFields.apiKey);
                    request = {
                      method: 'GET',
                      headers: getHeaders(apiKey),
                    };
                    appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
                    return [4 /*yield*/, fetch(appUrl, request)];
                  case 1:
                    response = _b.sent();
                    if (!(response.status !== 200 && response.status !== 304))
                      return [3 /*break*/, 6];
                    errorMessage = '';
                    _b.label = 2;
                  case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, response.json()];
                  case 3:
                    jsonResponse = _b.sent();
                    if (
                      (_a = jsonResponse.error) === null || _a === void 0
                        ? void 0
                        : _a.message
                    ) {
                      errorMessage = jsonResponse.error.message;
                    }
                    return [3 /*break*/, 5];
                  case 4:
                    _ignored_1 = _b.sent();
                    return [3 /*break*/, 5];
                  case 5:
                    throw ERROR_FACTORY.create(
                      'config-fetch-failed' /* CONFIG_FETCH_FAILED */,
                      {
                        httpStatus: response.status,
                        responseMessage: errorMessage,
                      }
                    );
                  case 6:
                    return [2 /*return*/, response.json()];
                }
              }
            );
          }
        );
      }
      /**
       * Fetches dynamic config from backend, retrying if failed.
       * @param app Firebase app to fetch config for.
       */
      function fetchDynamicConfigWithRetry(
        app,
        // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
        retryData,
        timeoutMillis
      ) {
        if (retryData === void 0) {
          retryData = defaultRetryData;
        }
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var _a, appId, apiKey, measurementId, throttleMetadata, signal;
            var _this = this;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_b) {
                (_a = app.options),
                  (appId = _a.appId),
                  (apiKey = _a.apiKey),
                  (measurementId = _a.measurementId);
                if (!appId) {
                  throw ERROR_FACTORY.create('no-app-id' /* NO_APP_ID */);
                }
                if (!apiKey) {
                  if (measurementId) {
                    return [
                      2 /*return*/,
                      {
                        measurementId: measurementId,
                        appId: appId,
                      },
                    ];
                  }
                  throw ERROR_FACTORY.create('no-api-key' /* NO_API_KEY */);
                }
                throttleMetadata = retryData.getThrottleMetadata(appId) || {
                  backoffCount: 0,
                  throttleEndTimeMillis: Date.now(),
                };
                signal = new AnalyticsAbortSignal();
                setTimeout(
                  function () {
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
                      _this,
                      void 0,
                      void 0,
                      function () {
                        return (0,
                        tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
                          this,
                          function (_a) {
                            // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                            signal.abort();
                            return [2 /*return*/];
                          }
                        );
                      }
                    );
                  },
                  timeoutMillis !== undefined
                    ? timeoutMillis
                    : FETCH_TIMEOUT_MILLIS
                );
                return [
                  2 /*return*/,
                  attemptFetchDynamicConfigWithRetry(
                    {
                      appId: appId,
                      apiKey: apiKey,
                      measurementId: measurementId,
                    },
                    throttleMetadata,
                    signal,
                    retryData
                  ),
                ];
              }
            );
          }
        );
      }
      /**
       * Runs one retry attempt.
       * @param appFields Necessary app config fields.
       * @param throttleMetadata Ongoing metadata to determine throttling times.
       * @param signal Abort signal.
       */
      function attemptFetchDynamicConfigWithRetry(
        appFields,
        _a,
        signal,
        retryData // for testing
      ) {
        var throttleEndTimeMillis = _a.throttleEndTimeMillis,
          backoffCount = _a.backoffCount;
        if (retryData === void 0) {
          retryData = defaultRetryData;
        }
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var appId,
              measurementId,
              e_1,
              response,
              e_2,
              backoffMillis,
              throttleMetadata;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    (appId = appFields.appId),
                      (measurementId = appFields.measurementId);
                    _b.label = 1;
                  case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [
                      4 /*yield*/,
                      setAbortableTimeout(signal, throttleEndTimeMillis),
                    ];
                  case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                  case 3:
                    e_1 = _b.sent();
                    if (measurementId) {
                      logger.warn(
                        "Timed out fetching this Firebase app's measurement ID from the server." +
                          (' Falling back to the measurement ID ' +
                            measurementId) +
                          (' provided in the "measurementId" field in the local Firebase config. [' +
                            e_1.message +
                            ']')
                      );
                      return [
                        2 /*return*/,
                        { appId: appId, measurementId: measurementId },
                      ];
                    }
                    throw e_1;
                  case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, fetchDynamicConfig(appFields)];
                  case 5:
                    response = _b.sent();
                    // Note the SDK only clears throttle state if response is success or non-retriable.
                    retryData.deleteThrottleMetadata(appId);
                    return [2 /*return*/, response];
                  case 6:
                    e_2 = _b.sent();
                    if (!isRetriableError(e_2)) {
                      retryData.deleteThrottleMetadata(appId);
                      if (measurementId) {
                        logger.warn(
                          "Failed to fetch this Firebase app's measurement ID from the server." +
                            (' Falling back to the measurement ID ' +
                              measurementId) +
                            (' provided in the "measurementId" field in the local Firebase config. [' +
                              e_2.message +
                              ']')
                        );
                        return [
                          2 /*return*/,
                          { appId: appId, measurementId: measurementId },
                        ];
                      } else {
                        throw e_2;
                      }
                    }
                    backoffMillis =
                      Number(e_2.customData.httpStatus) === 503
                        ? (0,
                          _firebase_util__WEBPACK_IMPORTED_MODULE_3__.calculateBackoffMillis)(
                            backoffCount,
                            retryData.intervalMillis,
                            LONG_RETRY_FACTOR
                          )
                        : (0,
                          _firebase_util__WEBPACK_IMPORTED_MODULE_3__.calculateBackoffMillis)(
                            backoffCount,
                            retryData.intervalMillis
                          );
                    throttleMetadata = {
                      throttleEndTimeMillis: Date.now() + backoffMillis,
                      backoffCount: backoffCount + 1,
                    };
                    // Persists state.
                    retryData.setThrottleMetadata(appId, throttleMetadata);
                    logger.debug(
                      'Calling attemptFetch again in ' +
                        backoffMillis +
                        ' millis'
                    );
                    return [
                      2 /*return*/,
                      attemptFetchDynamicConfigWithRetry(
                        appFields,
                        throttleMetadata,
                        signal,
                        retryData
                      ),
                    ];
                  case 7:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Supports waiting on a backoff by:
       *
       * <ul>
       *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
       *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
       *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
       *       request appear the same.</li>
       * </ul>
       *
       * <p>Visible for testing.
       */
      function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise(function (resolve, reject) {
          // Derives backoff from given end time, normalizing negative numbers to zero.
          var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
          var timeout = setTimeout(resolve, backoffMillis);
          // Adds listener, rather than sets onabort, because signal is a shared object.
          signal.addEventListener(function () {
            clearTimeout(timeout);
            // If the request completes before this timeout, the rejection has no effect.
            reject(
              ERROR_FACTORY.create('fetch-throttle' /* FETCH_THROTTLE */, {
                throttleEndTimeMillis: throttleEndTimeMillis,
              })
            );
          });
        });
      }
      /**
       * Returns true if the {@link Error} indicates a fetch request may succeed later.
       */
      function isRetriableError(e) {
        if (
          !(
            e instanceof
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.FirebaseError
          ) ||
          !e.customData
        ) {
          return false;
        }
        // Uses string index defined by ErrorData, which FirebaseError implements.
        var httpStatus = Number(e.customData['httpStatus']);
        return (
          httpStatus === 429 ||
          httpStatus === 500 ||
          httpStatus === 503 ||
          httpStatus === 504
        );
      }
      /**
       * Shims a minimal AbortSignal (copied from Remote Config).
       *
       * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
       * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
       * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
       * swapped out if/when we do.
       */
      var AnalyticsAbortSignal = /** @class */ (function () {
        function AnalyticsAbortSignal() {
          this.listeners = [];
        }
        AnalyticsAbortSignal.prototype.addEventListener = function (listener) {
          this.listeners.push(listener);
        };
        AnalyticsAbortSignal.prototype.abort = function () {
          this.listeners.forEach(function (listener) {
            return listener();
          });
        };
        return AnalyticsAbortSignal;
      })();

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function validateIndexedDB() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var e_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    if (
                      !!(0,
                      _firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)()
                    )
                      return [3 /*break*/, 1];
                    logger.warn(
                      ERROR_FACTORY.create(
                        'indexeddb-unavailable' /* INDEXEDDB_UNAVAILABLE */,
                        {
                          errorInfo:
                            'IndexedDB is not available in this environment.',
                        }
                      ).message
                    );
                    return [2 /*return*/, false];
                  case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [
                      4 /*yield*/,
                      (0,
                      _firebase_util__WEBPACK_IMPORTED_MODULE_3__.validateIndexedDBOpenable)(),
                    ];
                  case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                  case 3:
                    e_1 = _a.sent();
                    logger.warn(
                      ERROR_FACTORY.create(
                        'indexeddb-unavailable' /* INDEXEDDB_UNAVAILABLE */,
                        {
                          errorInfo: e_1,
                        }
                      ).message
                    );
                    return [2 /*return*/, false];
                  case 4:
                    return [2 /*return*/, true];
                }
              }
            );
          }
        );
      }
      /**
       * Initialize the analytics instance in gtag.js by calling config command with fid.
       *
       * NOTE: We combine analytics initialization and setting fid together because we want fid to be
       * part of the `page_view` event that's sent during the initialization
       * @param app Firebase app
       * @param gtagCore The gtag function that's not wrapped.
       * @param dynamicConfigPromisesList Array of all dynamic config promises.
       * @param measurementIdToAppId Maps measurementID to appID.
       * @param installations FirebaseInstallations instance.
       *
       * @returns Measurement ID.
       */
      function initializeIds(
        app,
        dynamicConfigPromisesList,
        measurementIdToAppId,
        installations,
        gtagCore
      ) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var dynamicConfigPromise,
              fidPromise,
              _a,
              dynamicConfig,
              fid,
              configProperties;
            var _b;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_c) {
                switch (_c.label) {
                  case 0:
                    dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
                    // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
                    dynamicConfigPromise
                      .then(function (config) {
                        measurementIdToAppId[config.measurementId] =
                          config.appId;
                        if (
                          app.options.measurementId &&
                          config.measurementId !== app.options.measurementId
                        ) {
                          logger.warn(
                            'The measurement ID in the local Firebase config (' +
                              app.options.measurementId +
                              ')' +
                              (' does not match the measurement ID fetched from the server (' +
                                config.measurementId +
                                ').') +
                              ' To ensure analytics events are always sent to the correct Analytics property,' +
                              ' update the' +
                              ' measurement ID field in the local config or remove it from the local config.'
                          );
                        }
                      })
                      .catch(function (e) {
                        return logger.error(e);
                      });
                    // Add to list to track state of all dynamic config promises.
                    dynamicConfigPromisesList.push(dynamicConfigPromise);
                    fidPromise = validateIndexedDB().then(function (
                      envIsValid
                    ) {
                      if (envIsValid) {
                        return installations.getId();
                      } else {
                        return undefined;
                      }
                    });
                    return [
                      4 /*yield*/,
                      Promise.all([dynamicConfigPromise, fidPromise]),
                    ];
                  case 1:
                    (_a = _c.sent()), (dynamicConfig = _a[0]), (fid = _a[1]);
                    // This command initializes gtag.js and only needs to be called once for the entire web app,
                    // but since it is idempotent, we can call it multiple times.
                    // We keep it together with other initialization logic for better code structure.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    gtagCore('js', new Date());
                    configProperties =
                      ((_b = {}),
                      // guard against developers accidentally setting properties with prefix `firebase_`
                      (_b[ORIGIN_KEY] = 'firebase'),
                      (_b.update = true),
                      _b);
                    if (fid != null) {
                      configProperties[GA_FID_KEY] = fid;
                    }
                    // It should be the first config command called on this GA-ID
                    // Initialize this GA-ID and set FID on it using the gtag config API.
                    gtagCore(
                      GtagCommand.CONFIG,
                      dynamicConfig.measurementId,
                      configProperties
                    );
                    return [2 /*return*/, dynamicConfig.measurementId];
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Maps appId to full initialization promise. Wrapped gtag calls must wait on
       * all or some of these, depending on the call's `send_to` param and the status
       * of the dynamic config fetches (see below).
       */
      var initializationPromisesMap = {};
      /**
       * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
       * wait on all these to be complete in order to determine if it can selectively
       * wait for only certain initialization (FID) promises or if it must wait for all.
       */
      var dynamicConfigPromisesList = [];
      /**
       * Maps fetched measurementIds to appId. Populated when the app's dynamic config
       * fetch completes. If already populated, gtag config calls can use this to
       * selectively wait for only this app's initialization promise (FID) instead of all
       * initialization promises.
       */
      var measurementIdToAppId = {};
      /**
       * Name for window global data layer array used by GA: defaults to 'dataLayer'.
       */
      var dataLayerName = 'dataLayer';
      /**
       * Name for window global gtag function used by GA: defaults to 'gtag'.
       */
      var gtagName = 'gtag';
      /**
       * Reproduction of standard gtag function or reference to existing
       * gtag function on window object.
       */
      var gtagCoreFunction;
      /**
       * Wrapper around gtag function that ensures FID is sent with all
       * relevant event and config calls.
       */
      var wrappedGtagFunction;
      /**
       * Flag to ensure page initialization steps (creation or wrapping of
       * dataLayer and gtag script) are only run once per page load.
       */
      var globalInitDone = false;
      /**
       * For testing
       */
      function resetGlobalVars(
        newGlobalInitDone,
        newInitializationPromisesMap,
        newDynamicPromises
      ) {
        if (newGlobalInitDone === void 0) {
          newGlobalInitDone = false;
        }
        if (newInitializationPromisesMap === void 0) {
          newInitializationPromisesMap = {};
        }
        if (newDynamicPromises === void 0) {
          newDynamicPromises = [];
        }
        globalInitDone = newGlobalInitDone;
        initializationPromisesMap = newInitializationPromisesMap;
        dynamicConfigPromisesList = newDynamicPromises;
        dataLayerName = 'dataLayer';
        gtagName = 'gtag';
      }
      /**
       * For testing
       */
      function getGlobalVars() {
        return {
          initializationPromisesMap: initializationPromisesMap,
          dynamicConfigPromisesList: dynamicConfigPromisesList,
        };
      }
      /**
       * This must be run before calling firebase.analytics() or it won't
       * have any effect.
       * @param options Custom gtag and dataLayer names.
       */
      function settings(options) {
        if (globalInitDone) {
          throw ERROR_FACTORY.create(
            'already-initialized' /* ALREADY_INITIALIZED */
          );
        }
        if (options.dataLayerName) {
          dataLayerName = options.dataLayerName;
        }
        if (options.gtagName) {
          gtagName = options.gtagName;
        }
      }
      /**
       * Returns true if no environment mismatch is found.
       * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
       * error that also lists details for each mismatch found.
       */
      function warnOnBrowserContextMismatch() {
        var mismatchedEnvMessages = [];
        if (
          (0, _firebase_util__WEBPACK_IMPORTED_MODULE_3__.isBrowserExtension)()
        ) {
          mismatchedEnvMessages.push(
            'This is a browser extension environment.'
          );
        }
        if (
          !(0, _firebase_util__WEBPACK_IMPORTED_MODULE_3__.areCookiesEnabled)()
        ) {
          mismatchedEnvMessages.push('Cookies are not available.');
        }
        if (mismatchedEnvMessages.length > 0) {
          var details = mismatchedEnvMessages
            .map(function (message, index) {
              return '(' + (index + 1) + ') ' + message;
            })
            .join(' ');
          var err = ERROR_FACTORY.create(
            'invalid-analytics-context' /* INVALID_ANALYTICS_CONTEXT */,
            {
              errorInfo: details,
            }
          );
          logger.warn(err.message);
        }
      }
      function factory(app, installations) {
        warnOnBrowserContextMismatch();
        var appId = app.options.appId;
        if (!appId) {
          throw ERROR_FACTORY.create('no-app-id' /* NO_APP_ID */);
        }
        if (!app.options.apiKey) {
          if (app.options.measurementId) {
            logger.warn(
              'The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' +
                (' measurement ID for this Firebase app. Falling back to the measurement ID ' +
                  app.options.measurementId) +
                ' provided in the "measurementId" field in the local Firebase config.'
            );
          } else {
            throw ERROR_FACTORY.create('no-api-key' /* NO_API_KEY */);
          }
        }
        if (initializationPromisesMap[appId] != null) {
          throw ERROR_FACTORY.create('already-exists' /* ALREADY_EXISTS */, {
            id: appId,
          });
        }
        if (!globalInitDone) {
          // Steps here should only be done once per page: creation or wrapping
          // of dataLayer and global gtag function.
          // Detect if user has already put the gtag <script> tag on this page.
          if (!findGtagScriptOnPage()) {
            insertScriptTag(dataLayerName);
          }
          getOrCreateDataLayer(dataLayerName);
          var _a = wrapOrCreateGtag(
              initializationPromisesMap,
              dynamicConfigPromisesList,
              measurementIdToAppId,
              dataLayerName,
              gtagName
            ),
            wrappedGtag = _a.wrappedGtag,
            gtagCore = _a.gtagCore;
          wrappedGtagFunction = wrappedGtag;
          gtagCoreFunction = gtagCore;
          globalInitDone = true;
        }
        // Async but non-blocking.
        // This map reflects the completion state of all promises for each appId.
        initializationPromisesMap[appId] = initializeIds(
          app,
          dynamicConfigPromisesList,
          measurementIdToAppId,
          installations,
          gtagCoreFunction
        );
        var analyticsInstance = {
          app: app,
          // Public methods return void for API simplicity and to better match gtag,
          // while internal implementations return promises.
          logEvent: function (eventName, eventParams, options) {
            logEvent(
              wrappedGtagFunction,
              initializationPromisesMap[appId],
              eventName,
              eventParams,
              options
            ).catch(function (e) {
              return logger.error(e);
            });
          },
          setCurrentScreen: function (screenName, options) {
            setCurrentScreen(
              wrappedGtagFunction,
              initializationPromisesMap[appId],
              screenName,
              options
            ).catch(function (e) {
              return logger.error(e);
            });
          },
          setUserId: function (id, options) {
            setUserId(
              wrappedGtagFunction,
              initializationPromisesMap[appId],
              id,
              options
            ).catch(function (e) {
              return logger.error(e);
            });
          },
          setUserProperties: function (properties, options) {
            setUserProperties(
              wrappedGtagFunction,
              initializationPromisesMap[appId],
              properties,
              options
            ).catch(function (e) {
              return logger.error(e);
            });
          },
          setAnalyticsCollectionEnabled: function (enabled) {
            setAnalyticsCollectionEnabled(
              initializationPromisesMap[appId],
              enabled
            ).catch(function (e) {
              return logger.error(e);
            });
          },
          INTERNAL: {
            delete: function () {
              delete initializationPromisesMap[appId];
              return Promise.resolve();
            },
          },
        };
        return analyticsInstance;
      }

      var name = '@firebase/analytics';
      var version = '0.6.2';

      /**
       * Type constant for Firebase Analytics.
       */
      var ANALYTICS_TYPE = 'analytics';
      function registerAnalytics(instance) {
        instance.INTERNAL.registerComponent(
          new _firebase_component__WEBPACK_IMPORTED_MODULE_4__.Component(
            ANALYTICS_TYPE,
            function (container) {
              // getImmediate for FirebaseApp will always succeed
              var app = container.getProvider('app').getImmediate();
              var installations = container
                .getProvider('installations')
                .getImmediate();
              return factory(app, installations);
            },
            'PUBLIC' /* PUBLIC */
          ).setServiceProps({
            settings: settings,
            EventName: EventName,
            isSupported: isSupported,
          })
        );
        instance.INTERNAL.registerComponent(
          new _firebase_component__WEBPACK_IMPORTED_MODULE_4__.Component(
            'analytics-internal',
            internalFactory,
            'PRIVATE' /* PRIVATE */
          )
        );
        instance.registerVersion(name, version);
        function internalFactory(container) {
          try {
            var analytics = container
              .getProvider(ANALYTICS_TYPE)
              .getImmediate();
            return {
              logEvent: analytics.logEvent,
            };
          } catch (e) {
            throw ERROR_FACTORY.create(
              'interop-component-reg-failed' /* INTEROP_COMPONENT_REG_FAILED */,
              {
                reason: e,
              }
            );
          }
        }
      }
      registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default);
      /**
       * this is a public static method provided to users that wraps four different checks:
       *
       * 1. check if it's not a browser extension environment.
       * 1. check if cookie is enabled in current browser.
       * 3. check if IndexedDB is supported by the browser environment.
       * 4. check if the current browser context is valid for using IndexedDB.
       *
       */
      function isSupported() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var isDBOpenable, error_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    if (
                      (0,
                      _firebase_util__WEBPACK_IMPORTED_MODULE_3__.isBrowserExtension)()
                    ) {
                      return [2 /*return*/, false];
                    }
                    if (
                      !(0,
                      _firebase_util__WEBPACK_IMPORTED_MODULE_3__.areCookiesEnabled)()
                    ) {
                      return [2 /*return*/, false];
                    }
                    if (
                      !(0,
                      _firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)()
                    ) {
                      return [2 /*return*/, false];
                    }
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [
                      4 /*yield*/,
                      (0,
                      _firebase_util__WEBPACK_IMPORTED_MODULE_3__.validateIndexedDBOpenable)(),
                    ];
                  case 2:
                    isDBOpenable = _a.sent();
                    return [2 /*return*/, isDBOpenable];
                  case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, false];
                  case 4:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 12 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ registerInstallations: () =>
          /* binding */ registerInstallations,
        /* harmony export */
      });
      /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        5
      );
      /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8
      );
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        7
      );
      /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        6
      );
      /* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        13
      );
      /* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        idb__WEBPACK_IMPORTED_MODULE_3__
      );

      var name = '@firebase/installations';
      var version = '0.4.19';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var PENDING_TIMEOUT_MS = 10000;
      var PACKAGE_VERSION = 'w:' + version;
      var INTERNAL_AUTH_VERSION = 'FIS_v2';
      var INSTALLATIONS_API_URL =
        'https://firebaseinstallations.googleapis.com/v1';
      var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
      var SERVICE = 'installations';
      var SERVICE_NAME = 'Installations';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var _a;
      var ERROR_DESCRIPTION_MAP =
        ((_a = {}),
        (_a['missing-app-config-values' /* MISSING_APP_CONFIG_VALUES */] =
          'Missing App configuration value: "{$valueName}"'),
        (_a['not-registered' /* NOT_REGISTERED */] =
          'Firebase Installation is not registered.'),
        (_a['installation-not-found' /* INSTALLATION_NOT_FOUND */] =
          'Firebase Installation not found.'),
        (_a['request-failed' /* REQUEST_FAILED */] =
          '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),
        (_a['app-offline' /* APP_OFFLINE */] =
          'Could not process request. Application offline.'),
        (_a['delete-pending-registration' /* DELETE_PENDING_REGISTRATION */] =
          "Can't delete installation while there is a pending registration request."),
        _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(
        SERVICE,
        SERVICE_NAME,
        ERROR_DESCRIPTION_MAP
      );
      /** Returns true if error is a FirebaseError that is based on an error from the server. */
      function isServerError(error) {
        return (
          error instanceof
            _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError &&
          error.code.includes('request-failed' /* REQUEST_FAILED */)
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function getInstallationsEndpoint(_a) {
        var projectId = _a.projectId;
        return (
          INSTALLATIONS_API_URL + '/projects/' + projectId + '/installations'
        );
      }
      function extractAuthTokenInfoFromResponse(response) {
        return {
          token: response.token,
          requestStatus: 2 /* COMPLETED */,
          expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
          creationTime: Date.now(),
        };
      }
      function getErrorFromResponse(requestName, response) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var responseJson, errorData;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, response.json()];
                  case 1:
                    responseJson = _a.sent();
                    errorData = responseJson.error;
                    return [
                      2 /*return*/,
                      ERROR_FACTORY.create(
                        'request-failed' /* REQUEST_FAILED */,
                        {
                          requestName: requestName,
                          serverCode: errorData.code,
                          serverMessage: errorData.message,
                          serverStatus: errorData.status,
                        }
                      ),
                    ];
                }
              }
            );
          }
        );
      }
      function getHeaders(_a) {
        var apiKey = _a.apiKey;
        return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': apiKey,
        });
      }
      function getHeadersWithAuth(appConfig, _a) {
        var refreshToken = _a.refreshToken;
        var headers = getHeaders(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
      }
      /**
       * Calls the passed in fetch wrapper and returns the response.
       * If the returned response has a status of 5xx, re-runs the function once and
       * returns the response.
       */
      function retryIfServerError(fn) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var result;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, fn()];
                  case 1:
                    result = _a.sent();
                    if (result.status >= 500 && result.status < 600) {
                      // Internal Server Error. Retry request.
                      return [2 /*return*/, fn()];
                    }
                    return [2 /*return*/, result];
                }
              }
            );
          }
        );
      }
      function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
      }
      function getAuthorizationHeader(refreshToken) {
        return INTERNAL_AUTH_VERSION + ' ' + refreshToken;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function createInstallationRequest(appConfig, _a) {
        var fid = _a.fid;
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var endpoint,
              headers,
              body,
              request,
              response,
              responseValue,
              registeredInstallationEntry;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    endpoint = getInstallationsEndpoint(appConfig);
                    headers = getHeaders(appConfig);
                    body = {
                      fid: fid,
                      authVersion: INTERNAL_AUTH_VERSION,
                      appId: appConfig.appId,
                      sdkVersion: PACKAGE_VERSION,
                    };
                    request = {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(body),
                    };
                    return [
                      4 /*yield*/,
                      retryIfServerError(function () {
                        return fetch(endpoint, request);
                      }),
                    ];
                  case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                  case 2:
                    responseValue = _b.sent();
                    registeredInstallationEntry = {
                      fid: responseValue.fid || fid,
                      registrationStatus: 2 /* COMPLETED */,
                      refreshToken: responseValue.refreshToken,
                      authToken: extractAuthTokenInfoFromResponse(
                        responseValue.authToken
                      ),
                    };
                    return [2 /*return*/, registeredInstallationEntry];
                  case 3:
                    return [
                      4 /*yield*/,
                      getErrorFromResponse('Create Installation', response),
                    ];
                  case 4:
                    throw _b.sent();
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /** Returns a promise that resolves after given time passes. */
      function sleep(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function bufferToBase64UrlSafe(array) {
        var b64 = btoa(
          String.fromCharCode.apply(
            String,
            (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__spread)(array)
          )
        );
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
      var INVALID_FID = '';
      /**
       * Generates a new FID using random values from Web Crypto API.
       * Returns an empty string if FID generation fails for any reason.
       */
      function generateFid() {
        try {
          // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
          // bytes. our implementation generates a 17 byte array instead.
          var fidByteArray = new Uint8Array(17);
          var crypto_1 = self.crypto || self.msCrypto;
          crypto_1.getRandomValues(fidByteArray);
          // Replace the first 4 random bits with the constant FID header of 0b0111.
          fidByteArray[0] = 112 + (fidByteArray[0] % 16);
          var fid = encode(fidByteArray);
          return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        } catch (_a) {
          // FID generation errored
          return INVALID_FID;
        }
      }
      /** Converts a FID Uint8Array to a base64 string representation. */
      function encode(fidByteArray) {
        var b64String = bufferToBase64UrlSafe(fidByteArray);
        // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.
        return b64String.substr(0, 22);
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /** Returns a string key that can be used to identify the app. */
      function getKey(appConfig) {
        return appConfig.appName + '!' + appConfig.appId;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var fidChangeCallbacks = new Map();
      /**
       * Calls the onIdChange callbacks with the new FID value, and broadcasts the
       * change to other tabs.
       */
      function fidChanged(appConfig, fid) {
        var key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
      }
      function addCallback(appConfig, callback) {
        // Open the broadcast channel if it's not already open,
        // to be able to listen to change events from other tabs.
        getBroadcastChannel();
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);
        if (!callbackSet) {
          callbackSet = new Set();
          fidChangeCallbacks.set(key, callbackSet);
        }
        callbackSet.add(callback);
      }
      function removeCallback(appConfig, callback) {
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);
        if (!callbackSet) {
          return;
        }
        callbackSet.delete(callback);
        if (callbackSet.size === 0) {
          fidChangeCallbacks.delete(key);
        }
        // Close broadcast channel if there are no more callbacks.
        closeBroadcastChannel();
      }
      function callFidChangeCallbacks(key, fid) {
        var e_1, _a;
        var callbacks = fidChangeCallbacks.get(key);
        if (!callbacks) {
          return;
        }
        try {
          for (
            var callbacks_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__values)(
                callbacks
              ),
              callbacks_1_1 = callbacks_1.next();
            !callbacks_1_1.done;
            callbacks_1_1 = callbacks_1.next()
          ) {
            var callback = callbacks_1_1.value;
            callback(fid);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (
              callbacks_1_1 &&
              !callbacks_1_1.done &&
              (_a = callbacks_1.return)
            )
              _a.call(callbacks_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      function broadcastFidChange(key, fid) {
        var channel = getBroadcastChannel();
        if (channel) {
          channel.postMessage({ key: key, fid: fid });
        }
        closeBroadcastChannel();
      }
      var broadcastChannel = null;
      /** Opens and returns a BroadcastChannel if it is supported by the browser. */
      function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
          broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
          broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
          };
        }
        return broadcastChannel;
      }
      function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
          broadcastChannel.close();
          broadcastChannel = null;
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var DATABASE_NAME = 'firebase-installations-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-installations-store';
      var dbPromise = null;
      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = (0, idb__WEBPACK_IMPORTED_MODULE_3__.openDb)(
            DATABASE_NAME,
            DATABASE_VERSION,
            function (upgradeDB) {
              // We don't use 'break' in this switch statement, the fall-through
              // behavior is what we want, because if there are multiple versions between
              // the old version and the current version, we want ALL the migrations
              // that correspond to those versions to run, not only the last one.
              // eslint-disable-next-line default-case
              switch (upgradeDB.oldVersion) {
                case 0:
                  upgradeDB.createObjectStore(OBJECT_STORE_NAME);
              }
            }
          );
        }
        return dbPromise;
      }
      /** Assigns or overwrites the record for the given key with the given value. */
      function set(appConfig, value) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var key, db, tx, objectStore, oldValue;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                  case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, objectStore.get(key)];
                  case 2:
                    oldValue = _a.sent();
                    return [4 /*yield*/, objectStore.put(value, key)];
                  case 3:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                  case 4:
                    _a.sent();
                    if (!oldValue || oldValue.fid !== value.fid) {
                      fidChanged(appConfig, value.fid);
                    }
                    return [2 /*return*/, value];
                }
              }
            );
          }
        );
      }
      /** Removes record(s) from the objectStore that match the given key. */
      function remove(appConfig) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var key, db, tx;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                  case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [
                      4 /*yield*/,
                      tx.objectStore(OBJECT_STORE_NAME).delete(key),
                    ];
                  case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                  case 3:
                    _a.sent();
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /**
       * Atomically updates a record with the result of updateFn, which gets
       * called with the current value. If newValue is undefined, the record is
       * deleted instead.
       * @return Updated value
       */
      function update(appConfig, updateFn) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var key, db, tx, store, oldValue, newValue;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                  case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    store = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, store.get(key)];
                  case 2:
                    oldValue = _a.sent();
                    newValue = updateFn(oldValue);
                    if (!(newValue === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.delete(key)];
                  case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                  case 4:
                    return [4 /*yield*/, store.put(newValue, key)];
                  case 5:
                    _a.sent();
                    _a.label = 6;
                  case 6:
                    return [4 /*yield*/, tx.complete];
                  case 7:
                    _a.sent();
                    if (
                      newValue &&
                      (!oldValue || oldValue.fid !== newValue.fid)
                    ) {
                      fidChanged(appConfig, newValue.fid);
                    }
                    return [2 /*return*/, newValue];
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Updates and returns the InstallationEntry from the database.
       * Also triggers a registration request if it is necessary and possible.
       */
      function getInstallationEntry(appConfig) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var registrationPromise, installationEntry;
            var _a;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      update(appConfig, function (oldEntry) {
                        var installationEntry = updateOrCreateInstallationEntry(
                          oldEntry
                        );
                        var entryWithPromise = triggerRegistrationIfNecessary(
                          appConfig,
                          installationEntry
                        );
                        registrationPromise =
                          entryWithPromise.registrationPromise;
                        return entryWithPromise.installationEntry;
                      }),
                    ];
                  case 1:
                    installationEntry = _b.sent();
                    if (!(installationEntry.fid === INVALID_FID))
                      return [3 /*break*/, 3];
                    _a = {};
                    return [4 /*yield*/, registrationPromise];
                  case 2:
                    // FID generation failed. Waiting for the FID from the server.
                    return [
                      2 /*return*/,
                      ((_a.installationEntry = _b.sent()), _a),
                    ];
                  case 3:
                    return [
                      2 /*return*/,
                      {
                        installationEntry: installationEntry,
                        registrationPromise: registrationPromise,
                      },
                    ];
                }
              }
            );
          }
        );
      }
      /**
       * Creates a new Installation Entry if one does not exist.
       * Also clears timed out pending requests.
       */
      function updateOrCreateInstallationEntry(oldEntry) {
        var entry = oldEntry || {
          fid: generateFid(),
          registrationStatus: 0 /* NOT_STARTED */,
        };
        return clearTimedOutRequest(entry);
      }
      /**
       * If the Firebase Installation is not registered yet, this will trigger the
       * registration and return an InProgressInstallationEntry.
       *
       * If registrationPromise does not exist, the installationEntry is guaranteed
       * to be registered.
       */
      function triggerRegistrationIfNecessary(appConfig, installationEntry) {
        if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
          if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(
              ERROR_FACTORY.create('app-offline' /* APP_OFFLINE */)
            );
            return {
              installationEntry: installationEntry,
              registrationPromise: registrationPromiseWithError,
            };
          }
          // Try registering. Change status to IN_PROGRESS.
          var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */,
            registrationTime: Date.now(),
          };
          var registrationPromise = registerInstallation(
            appConfig,
            inProgressEntry
          );
          return {
            installationEntry: inProgressEntry,
            registrationPromise: registrationPromise,
          };
        } else if (
          installationEntry.registrationStatus === 1 /* IN_PROGRESS */
        ) {
          return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig),
          };
        } else {
          return { installationEntry: installationEntry };
        }
      }
      /** This will be executed only once for each new Firebase Installation. */
      function registerInstallation(appConfig, installationEntry) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var registeredInstallationEntry, e_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2, , 7]);
                    return [
                      4 /*yield*/,
                      createInstallationRequest(appConfig, installationEntry),
                    ];
                  case 1:
                    registeredInstallationEntry = _a.sent();
                    return [
                      2 /*return*/,
                      set(appConfig, registeredInstallationEntry),
                    ];
                  case 2:
                    e_1 = _a.sent();
                    if (
                      !(isServerError(e_1) && e_1.customData.serverCode === 409)
                    )
                      return [3 /*break*/, 4];
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                  case 3:
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 6];
                  case 4:
                    // Registration failed. Set FID as not registered.
                    return [
                      4 /*yield*/,
                      set(appConfig, {
                        fid: installationEntry.fid,
                        registrationStatus: 0 /* NOT_STARTED */,
                      }),
                    ];
                  case 5:
                    // Registration failed. Set FID as not registered.
                    _a.sent();
                    _a.label = 6;
                  case 6:
                    throw e_1;
                  case 7:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      /** Call if FID registration is pending in another request. */
      function waitUntilFidRegistration(appConfig) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var entry, _a, installationEntry, registrationPromise;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    return [4 /*yield*/, updateInstallationRequest(appConfig)];
                  case 1:
                    entry = _b.sent();
                    _b.label = 2;
                  case 2:
                    if (!((entry.registrationStatus === 1) /* IN_PROGRESS */))
                      return [3 /*break*/, 5];
                    // createInstallation request still in progress.
                    return [4 /*yield*/, sleep(100)];
                  case 3:
                    // createInstallation request still in progress.
                    _b.sent();
                    return [4 /*yield*/, updateInstallationRequest(appConfig)];
                  case 4:
                    entry = _b.sent();
                    return [3 /*break*/, 2];
                  case 5:
                    if (!((entry.registrationStatus === 0) /* NOT_STARTED */))
                      return [3 /*break*/, 7];
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                  case 6:
                    (_a = _b.sent()),
                      (installationEntry = _a.installationEntry),
                      (registrationPromise = _a.registrationPromise);
                    if (registrationPromise) {
                      return [2 /*return*/, registrationPromise];
                    } else {
                      // if there is no registrationPromise, entry is registered.
                      return [2 /*return*/, installationEntry];
                    }
                  case 7:
                    return [2 /*return*/, entry];
                }
              }
            );
          }
        );
      }
      /**
       * Called only if there is a CreateInstallation request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * CreateInstallation request.
       *
       * Returns the updated InstallationEntry.
       */
      function updateInstallationRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!oldEntry) {
            throw ERROR_FACTORY.create(
              'installation-not-found' /* INSTALLATION_NOT_FOUND */
            );
          }
          return clearTimedOutRequest(oldEntry);
        });
      }
      function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
          return {
            fid: entry.fid,
            registrationStatus: 0 /* NOT_STARTED */,
          };
        }
        return entry;
      }
      function hasInstallationRequestTimedOut(installationEntry) {
        return (
          installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
          installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now()
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function generateAuthTokenRequest(_a, installationEntry) {
        var appConfig = _a.appConfig,
          platformLoggerProvider = _a.platformLoggerProvider;
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var endpoint,
              headers,
              platformLogger,
              body,
              request,
              response,
              responseValue,
              completedAuthToken;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    endpoint = getGenerateAuthTokenEndpoint(
                      appConfig,
                      installationEntry
                    );
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    platformLogger = platformLoggerProvider.getImmediate({
                      optional: true,
                    });
                    if (platformLogger) {
                      headers.append(
                        'x-firebase-client',
                        platformLogger.getPlatformInfoString()
                      );
                    }
                    body = {
                      installation: {
                        sdkVersion: PACKAGE_VERSION,
                      },
                    };
                    request = {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(body),
                    };
                    return [
                      4 /*yield*/,
                      retryIfServerError(function () {
                        return fetch(endpoint, request);
                      }),
                    ];
                  case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                  case 2:
                    responseValue = _b.sent();
                    completedAuthToken = extractAuthTokenInfoFromResponse(
                      responseValue
                    );
                    return [2 /*return*/, completedAuthToken];
                  case 3:
                    return [
                      4 /*yield*/,
                      getErrorFromResponse('Generate Auth Token', response),
                    ];
                  case 4:
                    throw _b.sent();
                }
              }
            );
          }
        );
      }
      function getGenerateAuthTokenEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return (
          getInstallationsEndpoint(appConfig) +
          '/' +
          fid +
          '/authTokens:generate'
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns a valid authentication token for the installation. Generates a new
       * token if one doesn't exist, is expired or about to expire.
       *
       * Should only be called if the Firebase Installation is registered.
       */
      function refreshAuthToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var tokenPromise, entry, authToken, _a;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      update(dependencies.appConfig, function (oldEntry) {
                        if (!isEntryRegistered(oldEntry)) {
                          throw ERROR_FACTORY.create(
                            'not-registered' /* NOT_REGISTERED */
                          );
                        }
                        var oldAuthToken = oldEntry.authToken;
                        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                          // There is a valid token in the DB.
                          return oldEntry;
                        } else if (
                          oldAuthToken.requestStatus === 1 /* IN_PROGRESS */
                        ) {
                          // There already is a token request in progress.
                          tokenPromise = waitUntilAuthTokenRequest(
                            dependencies,
                            forceRefresh
                          );
                          return oldEntry;
                        } else {
                          // No token or token expired.
                          if (!navigator.onLine) {
                            throw ERROR_FACTORY.create(
                              'app-offline' /* APP_OFFLINE */
                            );
                          }
                          var inProgressEntry = makeAuthTokenRequestInProgressEntry(
                            oldEntry
                          );
                          tokenPromise = fetchAuthTokenFromServer(
                            dependencies,
                            inProgressEntry
                          );
                          return inProgressEntry;
                        }
                      }),
                    ];
                  case 1:
                    entry = _b.sent();
                    if (!tokenPromise) return [3 /*break*/, 3];
                    return [4 /*yield*/, tokenPromise];
                  case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                  case 3:
                    _a = entry.authToken;
                    _b.label = 4;
                  case 4:
                    authToken = _a;
                    return [2 /*return*/, authToken];
                }
              }
            );
          }
        );
      }
      /**
       * Call only if FID is registered and Auth Token request is in progress.
       *
       * Waits until the current pending request finishes. If the request times out,
       * tries once in this thread as well.
       */
      function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var entry, authToken;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      updateAuthTokenRequest(dependencies.appConfig),
                    ];
                  case 1:
                    entry = _a.sent();
                    _a.label = 2;
                  case 2:
                    if (
                      !((entry.authToken.requestStatus === 1) /* IN_PROGRESS */)
                    )
                      return [3 /*break*/, 5];
                    // generateAuthToken still in progress.
                    return [4 /*yield*/, sleep(100)];
                  case 3:
                    // generateAuthToken still in progress.
                    _a.sent();
                    return [
                      4 /*yield*/,
                      updateAuthTokenRequest(dependencies.appConfig),
                    ];
                  case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                  case 5:
                    authToken = entry.authToken;
                    if (authToken.requestStatus === 0 /* NOT_STARTED */) {
                      // The request timed out or failed in a different call. Try again.
                      return [
                        2 /*return*/,
                        refreshAuthToken(dependencies, forceRefresh),
                      ];
                    } else {
                      return [2 /*return*/, authToken];
                    }
                }
              }
            );
          }
        );
      }
      /**
       * Called only if there is a GenerateAuthToken request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * GenerateAuthToken request.
       *
       * Returns the updated InstallationEntry.
       */
      function updateAuthTokenRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create('not-registered' /* NOT_REGISTERED */);
          }
          var oldAuthToken = oldEntry.authToken;
          if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)(
              (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, oldEntry),
              { authToken: { requestStatus: 0 /* NOT_STARTED */ } }
            );
          }
          return oldEntry;
        });
      }
      function fetchAuthTokenFromServer(dependencies, installationEntry) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var authToken,
              updatedInstallationEntry,
              e_1,
              updatedInstallationEntry;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [
                      4 /*yield*/,
                      generateAuthTokenRequest(dependencies, installationEntry),
                    ];
                  case 1:
                    authToken = _a.sent();
                    updatedInstallationEntry = (0,
                    tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)(
                      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)(
                        {},
                        installationEntry
                      ),
                      { authToken: authToken }
                    );
                    return [
                      4 /*yield*/,
                      set(dependencies.appConfig, updatedInstallationEntry),
                    ];
                  case 2:
                    _a.sent();
                    return [2 /*return*/, authToken];
                  case 3:
                    e_1 = _a.sent();
                    if (
                      !(
                        isServerError(e_1) &&
                        (e_1.customData.serverCode === 401 ||
                          e_1.customData.serverCode === 404)
                      )
                    )
                      return [3 /*break*/, 5];
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(dependencies.appConfig)];
                  case 4:
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 7];
                  case 5:
                    updatedInstallationEntry = (0,
                    tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)(
                      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)(
                        {},
                        installationEntry
                      ),
                      { authToken: { requestStatus: 0 /* NOT_STARTED */ } }
                    );
                    return [
                      4 /*yield*/,
                      set(dependencies.appConfig, updatedInstallationEntry),
                    ];
                  case 6:
                    _a.sent();
                    _a.label = 7;
                  case 7:
                    throw e_1;
                  case 8:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      function isEntryRegistered(installationEntry) {
        return (
          installationEntry !== undefined &&
          installationEntry.registrationStatus === 2 /* COMPLETED */
        );
      }
      function isAuthTokenValid(authToken) {
        return (
          authToken.requestStatus === 2 /* COMPLETED */ &&
          !isAuthTokenExpired(authToken)
        );
      }
      function isAuthTokenExpired(authToken) {
        var now = Date.now();
        return (
          now < authToken.creationTime ||
          authToken.creationTime + authToken.expiresIn <
            now + TOKEN_EXPIRATION_BUFFER
        );
      }
      /** Returns an updated InstallationEntry with an InProgressAuthToken. */
      function makeAuthTokenRequestInProgressEntry(oldEntry) {
        var inProgressAuthToken = {
          requestStatus: 1 /* IN_PROGRESS */,
          requestTime: Date.now(),
        };
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)(
          (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, oldEntry),
          { authToken: inProgressAuthToken }
        );
      }
      function hasAuthTokenRequestTimedOut(authToken) {
        return (
          authToken.requestStatus === 1 /* IN_PROGRESS */ &&
          authToken.requestTime + PENDING_TIMEOUT_MS < Date.now()
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function getId(dependencies) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var _a, installationEntry, registrationPromise;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      getInstallationEntry(dependencies.appConfig),
                    ];
                  case 1:
                    (_a = _b.sent()),
                      (installationEntry = _a.installationEntry),
                      (registrationPromise = _a.registrationPromise);
                    if (registrationPromise) {
                      registrationPromise.catch(console.error);
                    } else {
                      // If the installation is already registered, update the authentication
                      // token if needed.
                      refreshAuthToken(dependencies).catch(console.error);
                    }
                    return [2 /*return*/, installationEntry.fid];
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function getToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var authToken;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      completeInstallationRegistration(dependencies.appConfig),
                    ];
                  case 1:
                    _a.sent();
                    return [
                      4 /*yield*/,
                      refreshAuthToken(dependencies, forceRefresh),
                    ];
                  case 2:
                    authToken = _a.sent();
                    return [2 /*return*/, authToken.token];
                }
              }
            );
          }
        );
      }
      function completeInstallationRegistration(appConfig) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var registrationPromise;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                  case 1:
                    registrationPromise = _a.sent().registrationPromise;
                    if (!registrationPromise) return [3 /*break*/, 3];
                    // A createInstallation request is in progress. Wait until it finishes.
                    return [4 /*yield*/, registrationPromise];
                  case 2:
                    // A createInstallation request is in progress. Wait until it finishes.
                    _a.sent();
                    _a.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function deleteInstallationRequest(appConfig, installationEntry) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var endpoint, headers, request, response;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    endpoint = getDeleteEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    request = {
                      method: 'DELETE',
                      headers: headers,
                    };
                    return [
                      4 /*yield*/,
                      retryIfServerError(function () {
                        return fetch(endpoint, request);
                      }),
                    ];
                  case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [
                      4 /*yield*/,
                      getErrorFromResponse('Delete Installation', response),
                    ];
                  case 2:
                    throw _a.sent();
                  case 3:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }
      function getDeleteEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + '/' + fid;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function deleteInstallation(dependencies) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var appConfig, entry;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(
              this,
              function (_a) {
                switch (_a.label) {
                  case 0:
                    appConfig = dependencies.appConfig;
                    return [
                      4 /*yield*/,
                      update(appConfig, function (oldEntry) {
                        if (
                          oldEntry &&
                          oldEntry.registrationStatus === 0 /* NOT_STARTED */
                        ) {
                          // Delete the unregistered entry without sending a deleteInstallation request.
                          return undefined;
                        }
                        return oldEntry;
                      }),
                    ];
                  case 1:
                    entry = _a.sent();
                    if (!entry) return [3 /*break*/, 6];
                    if (!((entry.registrationStatus === 1) /* IN_PROGRESS */))
                      return [3 /*break*/, 2];
                    // Can't delete while trying to register.
                    throw ERROR_FACTORY.create(
                      'delete-pending-registration' /* DELETE_PENDING_REGISTRATION */
                    );
                  case 2:
                    if (!((entry.registrationStatus === 2) /* COMPLETED */))
                      return [3 /*break*/, 6];
                    if (!!navigator.onLine) return [3 /*break*/, 3];
                    throw ERROR_FACTORY.create('app-offline' /* APP_OFFLINE */);
                  case 3:
                    return [
                      4 /*yield*/,
                      deleteInstallationRequest(appConfig, entry),
                    ];
                  case 4:
                    _a.sent();
                    return [4 /*yield*/, remove(appConfig)];
                  case 5:
                    _a.sent();
                    _a.label = 6;
                  case 6:
                    return [2 /*return*/];
                }
              }
            );
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Sets a new callback that will get called when Installation ID changes.
       * Returns an unsubscribe function that will remove the callback when called.
       */
      function onIdChange(_a, callback) {
        var appConfig = _a.appConfig;
        addCallback(appConfig, callback);
        return function () {
          removeCallback(appConfig, callback);
        };
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function extractAppConfig(app) {
        var e_1, _a;
        if (!app || !app.options) {
          throw getMissingValueError('App Configuration');
        }
        if (!app.name) {
          throw getMissingValueError('App Name');
        }
        // Required app config keys
        var configKeys = ['projectId', 'apiKey', 'appId'];
        try {
          for (
            var configKeys_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__values)(
                configKeys
              ),
              configKeys_1_1 = configKeys_1.next();
            !configKeys_1_1.done;
            configKeys_1_1 = configKeys_1.next()
          ) {
            var keyName = configKeys_1_1.value;
            if (!app.options[keyName]) {
              throw getMissingValueError(keyName);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (
              configKeys_1_1 &&
              !configKeys_1_1.done &&
              (_a = configKeys_1.return)
            )
              _a.call(configKeys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return {
          appName: app.name,
          projectId: app.options.projectId,
          apiKey: app.options.apiKey,
          appId: app.options.appId,
        };
      }
      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create(
          'missing-app-config-values' /* MISSING_APP_CONFIG_VALUES */,
          {
            valueName: valueName,
          }
        );
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function registerInstallations(instance) {
        var installationsName = 'installations';
        instance.INTERNAL.registerComponent(
          new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(
            installationsName,
            function (container) {
              var app = container.getProvider('app').getImmediate();
              // Throws if app isn't configured properly.
              var appConfig = extractAppConfig(app);
              var platformLoggerProvider = container.getProvider(
                'platform-logger'
              );
              var dependencies = {
                appConfig: appConfig,
                platformLoggerProvider: platformLoggerProvider,
              };
              var installations = {
                app: app,
                getId: function () {
                  return getId(dependencies);
                },
                getToken: function (forceRefresh) {
                  return getToken(dependencies, forceRefresh);
                },
                delete: function () {
                  return deleteInstallation(dependencies);
                },
                onIdChange: function (callback) {
                  return onIdChange(dependencies, callback);
                },
              };
              return installations;
            },
            'PUBLIC' /* PUBLIC */
          )
        );
        instance.registerVersion(name, version);
      }
      registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default);

      //# sourceMappingURL=index.esm.js.map

      /***/
    },
    /* 13 */
    /***/ function (__unused_webpack_module, exports) {
      (function (global, factory) {
        true ? factory(exports) : 0;
      })(this, function (exports) {
        'use strict';

        function toArray(arr) {
          return Array.prototype.slice.call(arr);
        }

        function promisifyRequest(request) {
          return new Promise(function (resolve, reject) {
            request.onsuccess = function () {
              resolve(request.result);
            };

            request.onerror = function () {
              reject(request.error);
            };
          });
        }

        function promisifyRequestCall(obj, method, args) {
          var request;
          var p = new Promise(function (resolve, reject) {
            request = obj[method].apply(obj, args);
            promisifyRequest(request).then(resolve, reject);
          });

          p.request = request;
          return p;
        }

        function promisifyCursorRequestCall(obj, method, args) {
          var p = promisifyRequestCall(obj, method, args);
          return p.then(function (value) {
            if (!value) return;
            return new Cursor(value, p.request);
          });
        }

        function proxyProperties(ProxyClass, targetProp, properties) {
          properties.forEach(function (prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
              get: function () {
                return this[targetProp][prop];
              },
              set: function (val) {
                this[targetProp][prop] = val;
              },
            });
          });
        }

        function proxyRequestMethods(
          ProxyClass,
          targetProp,
          Constructor,
          properties
        ) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;
            ProxyClass.prototype[prop] = function () {
              return promisifyRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;
            ProxyClass.prototype[prop] = function () {
              return this[targetProp][prop].apply(this[targetProp], arguments);
            };
          });
        }

        function proxyCursorRequestMethods(
          ProxyClass,
          targetProp,
          Constructor,
          properties
        ) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;
            ProxyClass.prototype[prop] = function () {
              return promisifyCursorRequestCall(
                this[targetProp],
                prop,
                arguments
              );
            };
          });
        }

        function Index(index) {
          this._index = index;
        }

        proxyProperties(Index, '_index', [
          'name',
          'keyPath',
          'multiEntry',
          'unique',
        ]);

        proxyRequestMethods(Index, '_index', IDBIndex, [
          'get',
          'getKey',
          'getAll',
          'getAllKeys',
          'count',
        ]);

        proxyCursorRequestMethods(Index, '_index', IDBIndex, [
          'openCursor',
          'openKeyCursor',
        ]);

        function Cursor(cursor, request) {
          this._cursor = cursor;
          this._request = request;
        }

        proxyProperties(Cursor, '_cursor', [
          'direction',
          'key',
          'primaryKey',
          'value',
        ]);

        proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']);

        // proxy 'next' methods
        ['advance', 'continue', 'continuePrimaryKey'].forEach(function (
          methodName
        ) {
          if (!(methodName in IDBCursor.prototype)) return;
          Cursor.prototype[methodName] = function () {
            var cursor = this;
            var args = arguments;
            return Promise.resolve().then(function () {
              cursor._cursor[methodName].apply(cursor._cursor, args);
              return promisifyRequest(cursor._request).then(function (value) {
                if (!value) return;
                return new Cursor(value, cursor._request);
              });
            });
          };
        });

        function ObjectStore(store) {
          this._store = store;
        }

        ObjectStore.prototype.createIndex = function () {
          return new Index(
            this._store.createIndex.apply(this._store, arguments)
          );
        };

        ObjectStore.prototype.index = function () {
          return new Index(this._store.index.apply(this._store, arguments));
        };

        proxyProperties(ObjectStore, '_store', [
          'name',
          'keyPath',
          'indexNames',
          'autoIncrement',
        ]);

        proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
          'put',
          'add',
          'delete',
          'clear',
          'get',
          'getAll',
          'getKey',
          'getAllKeys',
          'count',
        ]);

        proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
          'openCursor',
          'openKeyCursor',
        ]);

        proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

        function Transaction(idbTransaction) {
          this._tx = idbTransaction;
          this.complete = new Promise(function (resolve, reject) {
            idbTransaction.oncomplete = function () {
              resolve();
            };
            idbTransaction.onerror = function () {
              reject(idbTransaction.error);
            };
            idbTransaction.onabort = function () {
              reject(idbTransaction.error);
            };
          });
        }

        Transaction.prototype.objectStore = function () {
          return new ObjectStore(
            this._tx.objectStore.apply(this._tx, arguments)
          );
        };

        proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);

        proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

        function UpgradeDB(db, oldVersion, transaction) {
          this._db = db;
          this.oldVersion = oldVersion;
          this.transaction = new Transaction(transaction);
        }

        UpgradeDB.prototype.createObjectStore = function () {
          return new ObjectStore(
            this._db.createObjectStore.apply(this._db, arguments)
          );
        };

        proxyProperties(UpgradeDB, '_db', [
          'name',
          'version',
          'objectStoreNames',
        ]);

        proxyMethods(UpgradeDB, '_db', IDBDatabase, [
          'deleteObjectStore',
          'close',
        ]);

        function DB(db) {
          this._db = db;
        }

        DB.prototype.transaction = function () {
          return new Transaction(
            this._db.transaction.apply(this._db, arguments)
          );
        };

        proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);

        proxyMethods(DB, '_db', IDBDatabase, ['close']);

        // Add cursor iterators
        // TODO: remove this once browsers do the right thing with promises
        ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
          [ObjectStore, Index].forEach(function (Constructor) {
            // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
            if (!(funcName in Constructor.prototype)) return;

            Constructor.prototype[
              funcName.replace('open', 'iterate')
            ] = function () {
              var args = toArray(arguments);
              var callback = args[args.length - 1];
              var nativeObject = this._store || this._index;
              var request = nativeObject[funcName].apply(
                nativeObject,
                args.slice(0, -1)
              );
              request.onsuccess = function () {
                callback(request.result);
              };
            };
          });
        });

        // polyfill getAll
        [Index, ObjectStore].forEach(function (Constructor) {
          if (Constructor.prototype.getAll) return;
          Constructor.prototype.getAll = function (query, count) {
            var instance = this;
            var items = [];

            return new Promise(function (resolve) {
              instance.iterateCursor(query, function (cursor) {
                if (!cursor) {
                  resolve(items);
                  return;
                }
                items.push(cursor.value);

                if (count !== undefined && items.length == count) {
                  resolve(items);
                  return;
                }
                cursor.continue();
              });
            });
          };
        });

        function openDb(name, version, upgradeCallback) {
          var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
          var request = p.request;

          if (request) {
            request.onupgradeneeded = function (event) {
              if (upgradeCallback) {
                upgradeCallback(
                  new UpgradeDB(
                    request.result,
                    event.oldVersion,
                    request.transaction
                  )
                );
              }
            };
          }

          return p.then(function (db) {
            return new DB(db);
          });
        }

        function deleteDb(name) {
          return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
        }

        exports.openDb = openDb;
        exports.deleteDb = deleteDb;

        Object.defineProperty(exports, '__esModule', { value: true });
      });

      /***/
    },
    /* 14 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ validateCheckboxInput: () =>
          /* binding */ validateCheckboxInput,
        /* harmony export */
      });
      function validateCheckboxInput(input) {
        return input === 'on' ? true : false;
      }

      /***/
    },
    /* 15 */
    /***/ (module) => {
      // Module
      var code =
        '<!DOCTYPE html>\n<link rel="preconnect" href="https://fonts.gstatic.com">\n<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">\n<!-- The core Firebase JS SDK is always required and must be listed first -->\n<script src="/__/firebase/8.1.2/firebase-app.js"></script>\n\n<!-- TODO: Add SDKs for Firebase products that you want to use\n     https://firebase.google.com/docs/web/setup#available-libraries -->\n<script src="/__/firebase/8.1.2/firebase-analytics.js"></script>\n\n<!-- Initialize Firebase -->\n<script src="/__/firebase/init.js"></script>\n<html>\n    <body>\n        <main>\n            <div class="container spacing flex flex-center column">\n                <h1>Gijs & James</h1>\n                <h2>are getting married...</h2>\n                <h3>Come and celebrate with us</h3>\n\n                <time datetime="2020-12-18">18th Decemeber</time>\n                <time>16:00 - late</time>\n                <a\n                    href="https://goo.gl/maps/nkPE6bxaerDQS1j6A"\n                    alt="directions">\n                    Bercylaan 71, 1031KP, Amsterdam\n                </a>\n                <p class="spacingVertical"> Please fill out the form below so we can keep track of numbers</p>\n                <h2 class="attendeeCount"></h2>\n                <form class="spacingVertical attendeeDetailsForm" name="attendeeDetailsForm">\n                    <fieldset class="flex column space-evenly">\n                        <legend>Add yourelf as an attendee</legend>\n\n                        <label for="name">Attendee Name</label>\n                        <input  type="text" name="name" alt="attendee name" placeholder="James Smith"  />\n\n                        <label for="attending">Tick the box if you are definitely attending</label>\n                        <input class="checkboxAttending" type="checkbox" name="attending" alt="attending guest"  />\n\n                        <label for="plusOne">Tick the box if you would like a plus one</label>\n                        <input class="checkboxPlusOne" type="checkbox" name="plusOne" alt="plus one"  />\n\n                        <label class="textFieldPlusOne visible" for="plusOneName">Plus one\'s name</label>\n                        <input class="textFieldPlusOne visible" type="text" name="plusOneName" placeholder="Samuel Smith" alt="plus one name"/>\n\n                        <input type="submit" name="submit"/>\n                    </fieldset>\n                </form>\n                <table>\n                    <caption>Guest list</caption>\n                    <tbody class="attendeeTable">\n                        <tr>\n                            <th scope="col">Name</th>\n                            <th scope="col">Attending</th>\n                            <th scope="col">Plus One</th>\n                            <th scope="col">Name of plus one</th>\n                            <th scope="col"></th>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </main>\n\n    </body>\n</html>';
      // Exports
      module.exports = code;

      /***/
    },
    /* 16 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        17
      );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        18
      );

      var options = {};

      options.insert = 'head';
      options.singleton = false;

      var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default,
        options
      );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__
          .default.locals || {};

      /***/
    },
    /* 17 */
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      'use strict';

      var isOldIE = (function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      })();

      var getTarget = (function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      })();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1,
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */

      var replaceText = (function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      })();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove
          ? ''
          : obj.media
          ? '@media '.concat(obj.media, ' {').concat(obj.css, '}')
          : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            ' */'
          );
        } // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap
            ) {
              return;
            }

            update((obj = newObj));
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };

      /***/
    },
    /* 18 */
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        19
      );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
      );
      // Imports

      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
        function (i) {
          return i[1];
        }
      );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        "/* resets */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%\n}\n\nbody {\n  background-color: #fffff4;\n  color: rgb(39, 39, 39);\n  font-family: 'Great Vibes', cursive;\n  font-size: 1.6em;\n  font-weight: 300;\n  letter-spacing: 0.01em;\n  line-height: 1.6;\n  scroll-behavior: none;\n}\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box\n}\n\n/* layout */\n\nmain{\n    padding: 2px;\n    margin:2px;\n    border: 5px solid black;\n    font-size: 2rem;\n}\n\n@media (min-width: 40rem) {\n main{\n  font-size: 3rem;\n  }\n}\n\n.container{\n    border: 3px solid black;\n    height:100%;\n}\n\n/* resets */\na {\n  color: rgb(88, 134, 231);\n  text-decoration: underline;\n\n}\n\na:hover {\n  color: #606c76\n}\n\nhr {\n  border-top: 0.1rem solid #f4f5f6;\n  border-width: 0;\n  margin-bottom: 3.5rem;\n  margin-top: 3rem\n}\n\np {\n  padding:0;\n  margin-top: 0;\n}\n\n/* text */\n\nh1,\nh2,\nh3\nh4\n{\n  font-weight: 500;\n  margin-bottom: 2rem;\n  margin-top: 0\n}\n\nh1 {\n  font-size: 5rem;\n  letter-spacing: 0.1rem;\n  line-height: 1.2\n}\n\nh2 {\n  font-size: 3.6rem;\n  letter-spacing: 0.1rem;\n  line-height: 1.25\n}\n\nh3 {\n  font-size: 3rem;\n  letter-spacing: 0.1rem;\n  line-height: 1.3\n}\nh4 {\n  font-size: 2.0rem;\n  letter-spacing: 0.1rem;\n  line-height: 1.3;\n  text-decoration: underline;\n}\n\n@media (min-width: 40rem) {\n  h1 {\n    font-size: 10rem\n  }\n\n  h2 {\n    font-size: 4.2rem\n  }\n\n  h3 {\n    font-size: 3.6rem\n  }\n\n  h4 {\n    font-size: 3.6rem\n  }\n}\n\n/* spacing */\n.spacingVertical{\n  padding: 10vh 0\n}\n.spacingHorizontal{\n  padding: 0 10vw;\n}\n.spacing {\n  padding: 10vw;\n}\n\n/* flex */\n\n.flex{\n  display: flex;\n}\n\n.column{\n flex-direction: column;\n}\n\n.flex-center{\n  justify-content: center;\n  align-items: center;\n}\n\n.space-evenly{\n  justify-content: space-evenly;\n\n}\n\n/* components */\nform{\n  width: 60%;\n\n}\nfieldset{\n    background:white;\n\n}\n\ninput{\n  margin: 2vh;\n}\n\ninput[type=submit]{\n  font-family: inherit;\n  font-size: 4rem;\n  background: transparent;\n  border: none;\n}\n\ninput[type=submit]:hover{\n  cursor: pointer;\n  text-decoration: underline 4px black solid;\n}\n\ninput[type=text] {\n  font-family: inherit;\n  background: transparent;\n  font-size: 2.5rem;\n  border: none;\n  border-bottom: 1px black solid;\n}\n\ncaption{\n  color: rgb(88, 134, 231);\n  text-decoration: underline;\n  font-size: 3.6rem;\n}\n\n.htmlTick{\n  color: rgb(83, 175, 83)\n}\n.htmlCross{\n  color: rgb(228, 84, 65)\n}\n\n\ntable{\n  width: 100%;\n}\nth{\n  text-decoration: underline;\n}\ntd{\n  text-align: center;\n}\n\n.removeAttendee {\n  color:  rgb(228, 84, 65);\n}\n.removeAttendee:hover {\n  cursor: pointer;\n}\n\n.visible{\n  display: none;\n}\n\n.highlightNumberRed {\n  color: rgb(228, 84, 65);\n}\n.highlightNumberOrange {\n  color: rgb(228, 185, 65);\n}\n.highlightNumberGreen{\n  color: rgb(83, 175, 83)\n}\n\n",
        '',
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

      /***/
    },
    /* 19 */
    /***/ (module) => {
      'use strict';

      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function (cssWithMappingToString) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item);

            if (item[2]) {
              return '@media '.concat(item[2], ' {').concat(content, '}');
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names

        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = ''.concat(mediaQuery, ' and ').concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      /***/
    },
    /* 20 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ createAttendee: () => /* binding */ createAttendee,
        /* harmony export */ readAttendees: () => /* binding */ readAttendees,
        /* harmony export */ updateAttendee: () => /* binding */ updateAttendee,
        /* harmony export */ removeAttendee: () => /* binding */ removeAttendee,
        /* harmony export */ renderPlusOneInputField: () =>
          /* binding */ renderPlusOneInputField,
        /* harmony export */
      });
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        3
      );
      /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
      );

      var config = function config(param) {
        return {
          url: ''
            .concat(
              'https://us-central1-wedding-invite-6f11a.cloudfunctions.net/webApi/api/v1/attendees',
              '/'
            )
            .concat(param ? param : ''),
        };
      }; //  API calls
      //  create a new attendee

      function createAttendee(_x) {
        return _createAttendee.apply(this, arguments);
      } //  get all attendees

      function _createAttendee() {
        _createAttendee = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(
            function _callee(data) {
              var _config, url, response;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        (_config = config()), (url = _config.url);
                        _context.next = 3;
                        return fetch(url, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data),
                        });

                      case 3:
                        response = _context.sent;
                        return _context.abrupt('return', response);

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee
              );
            }
          )
        );
        return _createAttendee.apply(this, arguments);
      }

      function readAttendees() {
        return _readAttendees.apply(this, arguments);
      } //  update an attendee

      function _readAttendees() {
        _readAttendees = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(
            function _callee2() {
              var _config2, url, response, res, totalCount;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        (_config2 = config()), (url = _config2.url);
                        _context2.next = 3;
                        return fetch(url, {
                          method: 'GET',
                        });

                      case 3:
                        response = _context2.sent;

                        if (!response.ok) {
                          _context2.next = 12;
                          break;
                        }

                        _context2.next = 7;
                        return response.json().then(function (attendee) {
                          return attendee;
                        });

                      case 7:
                        res = _context2.sent;
                        totalCount = 0;
                        res.forEach(function (_ref2) {
                          var data = _ref2.data;

                          if (data.plusOne && data.plusOne) {
                            totalCount += 1;
                          }

                          return (totalCount += 1);
                        });
                        renderAttendeesCount(totalCount);
                        renderAttendeesList(res);

                      case 12:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                },
                _callee2
              );
            }
          )
        );
        return _readAttendees.apply(this, arguments);
      }

      function updateAttendee(_x2, _x3) {
        return _updateAttendee.apply(this, arguments);
      } //  delete an attendees

      function _updateAttendee() {
        _updateAttendee = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(
            function _callee3(data, id) {
              var _config3, url, response;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(
                function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        (_config3 = config(id)), (url = _config3.url);
                        _context3.next = 3;
                        return fetch(url, {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data),
                        });

                      case 3:
                        response = _context3.sent;
                        return _context3.abrupt('return', response);

                      case 5:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                },
                _callee3
              );
            }
          )
        );
        return _updateAttendee.apply(this, arguments);
      }

      function removeAttendee(_x4) {
        return _removeAttendee.apply(this, arguments);
      }

      function _removeAttendee() {
        _removeAttendee = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(
            function _callee4(id) {
              var _config4, url, response;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(
                function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        console.log(id);
                        (_config4 = config(id)), (url = _config4.url);
                        _context4.next = 4;
                        return fetch(url, {
                          method: 'DELETE',
                        });

                      case 4:
                        response = _context4.sent;

                        if (!response.ok) {
                          _context4.next = 7;
                          break;
                        }

                        return _context4.abrupt('return', response);

                      case 7:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                },
                _callee4
              );
            }
          )
        );
        return _removeAttendee.apply(this, arguments);
      }

      function renderAttendeesList(attendees) {
        if (attendees.length < 1) return;
        else {
          var attendeTable = document.querySelector('.attendeeTable');
          var htmlTick = '<span class="htmlTick">&#10004</span>';
          var htmlCross = '<span class="htmlCross">&#10007;</span>';
          var attendeeRows = ''.concat(
            attendees
              .map(function (_ref) {
                var id = _ref.id,
                  data = _ref.data;
                return '<tr>\n            <td>'
                  .concat(data.name, '</td>\n            <td>')
                  .concat(
                    data.attending ? htmlTick : htmlCross,
                    '</td>\n            <td>'
                  )
                  .concat(
                    data.plusOne ? htmlTick : htmlCross,
                    '</td>\n            <td>'
                  )
                  .concat(
                    data.plusOneName,
                    '</td>\n            <td class="removeAttendee" name="'
                  )
                  .concat(
                    id,
                    '">\n              Remove attendee\n            </td>\n          </tr>'
                  );
              })
              .join('')
          );
          attendeTable.insertAdjacentHTML('beforeend', attendeeRows);
        }
      }

      function renderAttendeesCount() {
        var count =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : 15;
        var attendeeCount = document.querySelector('.attendeeCount');
        var color = '';
        if (count < 10) color = 'Green';
        else if (count < 20) color = 'Orange';
        else color = 'Red';
        var highlightNumber = '<span class="highlightNumber'
          .concat(color, '">')
          .concat(count, '</span>');
        attendeeCount.innerHTML = 'Currenly '.concat(
          highlightNumber,
          ' guests confirmed.'
        );
      }

      function renderPlusOneInputField(bool) {
        var textFieldPlusOne = document.querySelectorAll('.textFieldPlusOne');
        textFieldPlusOne.forEach(function (i) {
          return i.classList.toggle('visible');
        });
      }

      /***/
    },
    /******/
  ]; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId, // no module.loaded needed
      /******/ /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } /* webpack/runtime/compat get default export */
  /******/
  /************************************************************************/
  /******/ /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })(); /* webpack/runtime/define property getters */
  /******/
  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/global */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })(); // startup // Load entry module
  /******/
  /************************************************************************/
  /******/ /******/ /******/ __webpack_require__(0);
  /******/ // This entry module used 'exports' so it can't be inlined
  /******/
})();
