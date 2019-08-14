var PENDING = 'pending';
var RESOLVED = 'resolved';
var REJECTED = 'rejected';
var MyPromise = /** @class */ (function () {
    function MyPromise(fn) {
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
        this.currentState = PENDING;
        this.value = null;
        try {
            if (typeof fn === 'function') {
                fn(this.resolve.bind(this), this.reject.bind(this));
            }
            else {
                throw "传出入的参数不为函数";
            }
        }
        catch (error) {
            this.reject(error);
        }
    }
    /**
     * 回调成功
     * @param value
     */
    MyPromise.prototype.resolve = function (value) {
        var _this = this;
        var _self = this;
        if (value instanceof MyPromise) {
            return value.then(_self.resolve, _self.reject);
        }
        setTimeout(function () {
            if (_this.currentState === PENDING) {
                _this.currentState = RESOLVED;
                _this.value = value;
                _this.resolvedCallbacks.forEach(function (cb) { return cb(); });
            }
        }, 0);
    };
    /**
     * 回调失败
     * @param reason
     */
    MyPromise.prototype.reject = function (reason) {
        var _this = this;
        setTimeout(function () {
            if (_this.currentState === PENDING) {
                _this.currentState = REJECTED;
                _this.value = reason;
                _this.rejectedCallbacks.forEach(function (cb) { return cb(); });
            }
        }, 0);
    };
    MyPromise.prototype.then = function (onResolved, onRejected) {
        var _this = this;
        var self = this;
        var promise2;
        onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v; };
        onRejected = typeof onRejected === 'function' ? onRejected : function (r) { return console.log(r); };
        if (this.currentState === RESOLVED) {
            return (promise2 = new MyPromise(function (resolve, reject) {
                setTimeout(function () {
                    try {
                        var x = onResolved(_this.value);
                        self.resolutionProcedure(promise2, x, resolve, reject);
                    }
                    catch (reason) {
                        reject(reason);
                    }
                }, 0);
            }));
        }
        if (this.currentState === REJECTED) {
            return (promise2 = new MyPromise(function (resolve, reject) {
                try {
                    var x = onResolved(self.value);
                    self.resolutionProcedure(promise2, x, resolve, reject);
                }
                catch (reason) {
                    reject(reason);
                }
            }));
        }
        if (this.currentState === PENDING) {
            return (promise2 = new MyPromise(function (resolve, reject) {
                _this.resolvedCallbacks.push(function () {
                    try {
                        var x = onResolved(self.value);
                        self.resolutionProcedure(promise2, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                _this.rejectedCallbacks.push(function () {
                    try {
                        var x = onRejected(self.value);
                        self.resolutionProcedure(promise2, x, resolve, reject);
                    }
                    catch (r) {
                        reject(r);
                    }
                });
            }));
        }
    };
    MyPromise.prototype.resolutionProcedure = function (promise2, x, resolve, reject) {
        var self = this;
        if (promise2 === x) {
            return reject(new TypeError('Error'));
        }
        if (x instanceof MyPromise) {
            if (x.currentState === PENDING) {
                x.then(function (value) {
                    self.resolutionProcedure(promise2, value, resolve, reject);
                }, reject);
            }
            else {
                x.then(resolve, reject);
            }
            return;
        }
        var called = false;
        if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            try {
                var then = x.then;
                if (typeof then === 'function') {
                    then.call(x, function (y) {
                        if (called)
                            return;
                        called = true;
                        self.resolutionProcedure(promise2, y, resolve, reject);
                    }, function (e) {
                        resolve(e);
                    });
                }
                else {
                    resolve(x);
                }
            }
            catch (e) {
                if (called)
                    return;
                called = true;
                reject(e);
            }
        }
        else {
            resolve(x);
        }
    };
    return MyPromise;
}());
var promise1 = function () {
    return new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve(22);
        }, 1000);
    });
};
promise1().then(function (json) { return console.log(json); });
