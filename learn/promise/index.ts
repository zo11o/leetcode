const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class MyPromise {

    public currentState: string;

    public value: any;

    public resolvedCallbacks: Array<Function> = [];

    public rejectedCallbacks: Array<Function> = [];

    constructor(fn) {
        this.currentState = PENDING;
        this.value = null;
        try {
            if ( typeof fn === 'function' ) {
                fn(this.resolve.bind(this), this.reject.bind(this))
            } else {
                throw "传出入的参数不为函数";
            }
        } catch (error) {
            this.reject(error);
        }
    }

    /**
     * 回调成功
     * @param value
     */
    resolve (value: any) {
        let _self = this;
        if (value instanceof MyPromise) {
            return value.then(_self.resolve, _self.reject)
        }

        setTimeout(() => {
            if (this.currentState === PENDING) {
                this.currentState = RESOLVED;
                this.value = value;
                this.resolvedCallbacks.forEach(cb => cb());
            }
        }, 0);
    }

    /**
     * 回调失败
     * @param reason
     */
    reject (reason: any) {
        setTimeout(() => {
            if (this.currentState === PENDING) {
                this.currentState = REJECTED;
                this.value = reason;
                this.rejectedCallbacks.forEach(cb => cb());
            }
        }, 0);
    }

    then (onResolved, onRejected?) {
        let self = this;
        let promise2;
        onResolved = typeof onResolved === 'function' ? onResolved : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : r => console.log(r);

        if (this.currentState === RESOLVED) {
            return (promise2 = new MyPromise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        var x = onResolved(this.value);
                        self.resolutionProcedure(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
            }))
        }

        if (this.currentState === REJECTED) {
            return (promise2 = new MyPromise((resolve, reject) => {
                try {
                    var x = onResolved(self.value)
                    self.resolutionProcedure(promise2, x, resolve, reject);
                } catch (reason) {
                    reject(reason)
                }
            }))
        }

        if (this.currentState === PENDING) {
            return (promise2 = new MyPromise((resolve, reject) => {
                this.resolvedCallbacks.push(function() {
                    try {
                        var x = onResolved(self.value)
                        self.resolutionProcedure(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })

                this.rejectedCallbacks.push(() => {
                    try {
                        var x = onRejected(self.value);
                        self.resolutionProcedure(promise2, x, resolve, reject);
                    } catch (r) {
                        reject(r)
                    }
                })
            }))
        }
    }

    resolutionProcedure(promise2, x, resolve, reject) {
        let self = this;
        if (promise2 === x) {
            return reject(new TypeError('Error'));
        }

        if (x instanceof MyPromise) {
            if (x.currentState === PENDING) {
                x.then((value) => {
                    self.resolutionProcedure(promise2, value, resolve, reject);
                }, reject)
            } else {
                x.then(resolve, reject)
            }
            return;
        }

        let called = false;

        if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            try {
                let then = x.then;

                if (typeof then === 'function') {
                    then.call(x, y => {
                        if (called) return;
                        called = true;
                        self.resolutionProcedure(promise2, y, resolve, reject);
                    }, e => {
                        resolve(e)
                    })
                } else {
                    resolve(x);
                }
            } catch (e) {
                if (called) return;
                called = true;
                reject(e);
            }
        } else {
            resolve(x)
        }
    }
}

var promise1 =function() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(22)
        }, 1000);
    })
}

promise1()
    .then(json => console.log(json))
