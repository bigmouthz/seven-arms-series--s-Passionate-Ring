QUnit.module('GroupByUntil');

var Observable = Rx.Observable,
    TestScheduler = Rx.TestScheduler,
    SerialDisposable = Rx.SerialDisposable,
    onNext = Rx.ReactiveTest.onNext,
    onError = Rx.ReactiveTest.onError,
    onCompleted = Rx.ReactiveTest.onCompleted,
    subscribe = Rx.ReactiveTest.subscribe,
    created = Rx.ReactiveTest.created,
    subscribed = Rx.ReactiveTest.subscribed,
    disposed = Rx.ReactiveTest.disposed;

String.prototype.reverse = function () {
    var result, i, len;
    result = '';
    len = this.length;
    for (i = len - 1; i >= 0; i--) {
        result += this.charAt(i);
    }

    return result;
};

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    };
}

function length (obj) {
    var key, result, value;
    result = 0;
    for (key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        value = obj[key];
        result++;
    }
    return result;
}

test('GroupByUntil_WithKeyComparer', function () {
    var keyInvoked, results, scheduler, xs;
    scheduler = new TestScheduler();
    keyInvoked = 0;
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithCreate(function () {
        return xs.groupByUntil(function (x) {
            keyInvoked++;
            return x.toLowerCase().trim();
        }, function (x) {
            return x;
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    });
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"), onNext(360, "qux"), onNext(470, "foo"), onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
    equal(12, keyInvoked);
});

test('GroupByUntil_Outer_Complete', function () {
    var eleInvoked, keyInvoked, results, scheduler, xs;
    scheduler = new TestScheduler();
    keyInvoked = 0;
    eleInvoked = 0;
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithCreate(function () {
        return xs.groupByUntil(function (x) {
            keyInvoked++;
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    });
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"), onNext(360, "qux"), onNext(470, "foo"), onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
    equal(12, keyInvoked);
    equal(12, eleInvoked);
});

test('GroupByUntil_Outer_Error', function () {
    var eleInvoked, ex, keyInvoked, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    keyInvoked = 0;
    eleInvoked = 0;
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onError(570, ex), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithCreate(function () {
        return xs.groupByUntil(function (x) {
            keyInvoked++;
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    });
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"), onNext(360, "qux"), onNext(470, "foo"), onError(570, ex));
    xs.subscriptions.assertEqual(subscribe(200, 570));
    equal(12, keyInvoked);
    equal(12, eleInvoked);
});

test('GroupByUntil_Outer_Dispose', function () {
    var eleInvoked, keyInvoked, results, scheduler, xs;
    scheduler = new TestScheduler();
    keyInvoked = 0;
    eleInvoked = 0;
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithDispose(function () {
        return xs.groupByUntil(function (x) {
            keyInvoked++;
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    }, 355);
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"));
    xs.subscriptions.assertEqual(subscribe(200, 355));
    equal(5, keyInvoked);
    equal(5, eleInvoked);
});

test('GroupByUntil_Outer_KeyThrow', function () {
    var eleInvoked, ex, keyInvoked, results, scheduler, xs;
    scheduler = new TestScheduler();
    ex = 'ex';
    keyInvoked = 0;
    eleInvoked = 0;
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithCreate(function () {
        return xs.groupByUntil(function (x) {
            keyInvoked++;
            if (keyInvoked === 10) {
                throw ex;
            }
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    });
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"), onNext(360, "qux"), onNext(470, "foo"), onError(480, ex));
    xs.subscriptions.assertEqual(subscribe(200, 480));
    equal(10, keyInvoked);
    equal(9, eleInvoked);
});

test('GroupByUntil_Outer_EleThrow', function () {
    var eleInvoked, ex, keyInvoked, results, scheduler, xs;
    scheduler = new TestScheduler();
    ex = 'ex';
    keyInvoked = 0;
    eleInvoked = 0;
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithCreate(function () {
        return xs.groupByUntil(function (x) {
            keyInvoked++;
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            if (eleInvoked === 10) {
                throw ex;
            }
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    });
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"), onNext(360, "qux"), onNext(470, "foo"), onError(480, ex));
    xs.subscriptions.assertEqual(subscribe(200, 480));
    equal(10, keyInvoked);
    equal(10, eleInvoked);
});

test('GroupByUntil_Inner_Complete', function () {
    var innerSubscriptions, inners, outer, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    inners = {};
    innerSubscriptions = {};
    results = {};
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        outerSubscription = outer.subscribe(function (group) {
            var result;
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            scheduler.scheduleRelative(100, function () {
                innerSubscriptions[group.key] = group.subscribe(result);
            });
        });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(390, "rab   "), onCompleted(420));
    results["baz"].messages.assertEqual(onNext(480, "  zab"), onCompleted(510));
    results["qux"].messages.assertEqual(onCompleted(570));
    results["foo"].messages.assertEqual(onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
});

test('GroupByUntil_Inner_Complete_All', function () {
    var innerSubscriptions, inners, outer, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    outer = null;
    outerSubscription = null;
    inners = {};
    innerSubscriptions = {};
    results = {};
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"), onNext(390, "rab   "), onNext(420, "  RAB "), onCompleted(420));
    results["baz"].messages.assertEqual(onNext(350, "   zaB "), onNext(480, "  zab"), onNext(510, " ZAb "), onCompleted(510));
    results["qux"].messages.assertEqual(onNext(360, " xuq  "), onCompleted(570));
    results["foo"].messages.assertEqual(onNext(470, " OOF"), onNext(530, "    oOf    "), onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
});

test('GroupByUntil_Inner_Error', function () {
    var ex1, innerSubscriptions, inners, outer, outerSubscription, results, scheduler, xs;
    ex1 = 'ex1';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onError(570, ex1), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    inners = {};
    innerSubscriptions = {};
    results = {};
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            scheduler.scheduleRelative(100, function () {
                innerSubscriptions[group.key] = group.subscribe(result);
            });
        }, function (e) { });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(390, "rab   "), onCompleted(420));
    results["baz"].messages.assertEqual(onNext(480, "  zab"), onCompleted(510));
    results["qux"].messages.assertEqual(onError(570, ex1));
    results["foo"].messages.assertEqual(onError(570, ex1));
    xs.subscriptions.assertEqual(subscribe(200, 570));
});

test('GroupByUntil_Inner_Dispose', function () {
    var innerSubscriptions, inners, outer, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    outer = null;
    outerSubscription = null;
    inners = {};
    innerSubscriptions = {};
    results = {};
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        });
    });
    scheduler.scheduleAbsolute(400, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"), onNext(390, "rab   "));
    results["baz"].messages.assertEqual(onNext(350, "   zaB "));
    results["qux"].messages.assertEqual(onNext(360, " xuq  "));
    results["foo"].messages.assertEqual(onNext(220, "oof  "), onNext(240, " OoF "), onNext(310, " Oof"), onCompleted(310));
    xs.subscriptions.assertEqual(subscribe(200, 400));
});

test('GroupByUntil_Inner_KeyThrow', function () {
    var ex, innerSubscriptions, inners, keyInvoked, outer, outerSubscription, results, scheduler, xs;
    ex = 'ex';
    keyInvoked = 0;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    outer = null;
    outerSubscription = null;
    inners = {};
    innerSubscriptions = {};
    results = {};
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            keyInvoked++;
            if (keyInvoked === 6) {
                throw ex;
            }
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        }, function (e) { });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.start();
    equal(3, length(inners));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"), onError(360, ex));
    results["baz"].messages.assertEqual(onNext(350, "   zaB "), onError(360, ex));
    results["foo"].messages.assertEqual(onNext(220, "oof  "), onNext(240, " OoF "), onNext(310, " Oof"), onCompleted(310));
    xs.subscriptions.assertEqual(subscribe(200, 360));
});

test('GroupByUntil_Inner_EleThrow', function () {
    var eleInvoked, ex, innerSubscriptions, inners, outer, outerSubscription, results, scheduler, xs;
    ex = 'ex';
    eleInvoked = 0;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    outer = null;
    outerSubscription = null;
    inners = {};
    innerSubscriptions = {};
    results = {};
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            if (eleInvoked === 6) {
                throw ex;
            }
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        }, function (e) { });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"), onError(360, ex));
    results["baz"].messages.assertEqual(onNext(350, "   zaB "), onError(360, ex));
    results["qux"].messages.assertEqual(onError(360, ex));
    results["foo"].messages.assertEqual(onNext(220, "oof  "), onNext(240, " OoF "), onNext(310, " Oof"), onCompleted(310));
    xs.subscriptions.assertEqual(subscribe(200, 360));
});

test('GroupByUntil_Outer_Independence', function () {
    var innerSubscriptions, inners, outer, outerResults, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    inners = {};
    innerSubscriptions = {};
    results = {};
    outerResults = scheduler.createObserver();
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            outerResults.onNext(group.key);
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        }, function (e) {
            outerResults.onError(e);
        }, function () {
            outerResults.onCompleted();
        });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.scheduleAbsolute(320, function () {
        outerSubscription.dispose();
    });
    scheduler.start();
    equal(2, length(inners));
    outerResults.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"));
    results["foo"].messages.assertEqual(onNext(220, "oof  "), onNext(240, " OoF "), onNext(310, " Oof"), onCompleted(310));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"), onNext(390, "rab   "), onNext(420, "  RAB "), onCompleted(420));
    xs.subscriptions.assertEqual(subscribe(200, 420));
});

test('GroupByUntil_Inner_Independence', function () {
    var innerSubscriptions, inners, outer, outerResults, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    outer = null;
    outerSubscription = null;
    inners = {};
    innerSubscriptions = {};
    results = {};
    outerResults = scheduler.createObserver();
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            outerResults.onNext(group.key);
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        }, function (e) {
            outerResults.onError(e);
        }, function () {
            outerResults.onCompleted();
        });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.scheduleAbsolute(320, function () {
        innerSubscriptions["foo"].dispose();
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"), onNext(390, "rab   "), onNext(420, "  RAB "), onCompleted(420));
    results["baz"].messages.assertEqual(onNext(350, "   zaB "), onNext(480, "  zab"), onNext(510, " ZAb "), onCompleted(510));
    results["qux"].messages.assertEqual(onNext(360, " xuq  "), onCompleted(570));
    results["foo"].messages.assertEqual(onNext(470, " OOF"), onNext(530, "    oOf    "), onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
});

test('GroupByUntil_Inner_Multiple_Independence', function () {
    var innerSubscriptions, inners, outer, outerResults, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    outer = null;
    outerSubscription = null;
    inners = {};
    innerSubscriptions = {};
    results = {};
    outerResults = scheduler.createObserver();
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            var result;
            outerResults.onNext(group.key);
            result = scheduler.createObserver();
            inners[group.key] = group;
            results[group.key] = result;
            innerSubscriptions[group.key] = group.subscribe(result);
        }, function (e) {
            return outerResults.onError(e);
        }, function () {
            return outerResults.onCompleted();
        });
    });
    scheduler.scheduleAbsolute(disposed, function () {
        var key, value;
        outerSubscription.dispose();
        for (key in innerSubscriptions) {
            value = innerSubscriptions[key];
            value.dispose();
        }
    });
    scheduler.scheduleAbsolute(320, function () {
        innerSubscriptions["foo"].dispose();
    });
    scheduler.scheduleAbsolute(280, function () {
        innerSubscriptions["bar"].dispose();
    });
    scheduler.scheduleAbsolute(355, function () {
        innerSubscriptions["baz"].dispose();
    });
    scheduler.scheduleAbsolute(400, function () {
        innerSubscriptions["qux"].dispose();
    });
    scheduler.start();
    equal(4, length(inners));
    results["bar"].messages.assertEqual(onNext(270, "  Rab"));
    results["baz"].messages.assertEqual(onNext(350, "   zaB "));
    results["qux"].messages.assertEqual(onNext(360, " xuq  "));
    results["foo"].messages.assertEqual(onNext(470, " OOF"), onNext(530, "    oOf    "), onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
});

test('GroupByUntil_Inner_Escape_Complete', function () {
    var inner, innerSubscription, outer, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(220, "  foo"), onNext(240, " FoO "), onNext(310, "foO "), onNext(470, "FOO "), onNext(530, "    fOo    "), onCompleted(570));
    outer = null;
    outerSubscription = null;
    inner = null;
    innerSubscription = null;
    results = scheduler.createObserver();
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        outerSubscription = outer.subscribe(function (group) {
            return inner = group;
        });
    });
    scheduler.scheduleAbsolute(600, function () {
        innerSubscription = inner.subscribe(results);
    });
    scheduler.scheduleAbsolute(disposed, function () {
        outerSubscription.dispose();
        innerSubscription.dispose();
    });
    scheduler.start();
    xs.subscriptions.assertEqual(subscribe(200, 570));
    results.messages.assertEqual(onCompleted(600));
});

test('GroupByUntil_Inner_Escape_Error', function () {
    var ex, inner, innerSubscription, outer, outerSubscription, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(220, "  foo"), onNext(240, " FoO "), onNext(310, "foO "), onNext(470, "FOO "), onNext(530, "    fOo    "), onError(570, ex));
    outer = null;
    outerSubscription = null;
    inner = null;
    innerSubscription = null;
    results = scheduler.createObserver();
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        return outerSubscription = outer.subscribe(function (group) {
            inner = group;
        }, function (e) { });
    });
    scheduler.scheduleAbsolute(600, function () {
        innerSubscription = inner.subscribe(results);
    });
    scheduler.scheduleAbsolute(disposed, function () {
        outerSubscription.dispose();
        innerSubscription.dispose();
    });
    scheduler.start();
    xs.subscriptions.assertEqual(subscribe(200, 570));
    results.messages.assertEqual(onError(600, ex));
});

test('GroupByUntil_Inner_Escape_Dispose', function () {
    var inner, innerSubscription, outer, outerSubscription, results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(220, "  foo"), onNext(240, " FoO "), onNext(310, "foO "), onNext(470, "FOO "), onNext(530, "    fOo    "), onError(570, 'ex'));
    results = scheduler.createObserver();
    scheduler.scheduleAbsolute(created, function () {
        return outer = xs.groupByUntil(function (x) {
            return x.toLowerCase().trim();
        }, function (x) {
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        });
    });
    scheduler.scheduleAbsolute(subscribed, function () {
        outerSubscription = outer.subscribe(function (group) {
            inner = group;
        });
    });
    scheduler.scheduleAbsolute(290, function () {
        outerSubscription.dispose();
    });
    scheduler.scheduleAbsolute(600, function () {
        innerSubscription = inner.subscribe(results);
    });
    scheduler.scheduleAbsolute(disposed, function () {
        outerSubscription.dispose();
    });
    scheduler.start();
    xs.subscriptions.assertEqual(subscribe(200, 290));
    results.messages.assertEqual();
});

test('GroupByUntil_Default', function () {
    var eleInvoked, keyInvoked, results, scheduler, xs;
    keyInvoked = 0;
    eleInvoked = 0;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(90, "error"), onNext(110, "error"), onNext(130, "error"), onNext(220, "  foo"), onNext(240, " FoO "), onNext(270, "baR  "), onNext(310, "foO "), onNext(350, " Baz   "), onNext(360, "  qux "), onNext(390, "   bar"), onNext(420, " BAR  "), onNext(470, "FOO "), onNext(480, "baz  "), onNext(510, " bAZ "), onNext(530, "    fOo    "), onCompleted(570), onNext(580, "error"), onCompleted(600), onError(650, 'ex'));
    results = scheduler.startWithCreate(function () {
        var outer;
        return outer = xs.groupByUntil(function (x) {
            keyInvoked++;
            return x.toLowerCase().trim();
        }, function (x) {
            eleInvoked++;
            return x.reverse();
        }, function (g) {
            return g.skip(2);
        }).select(function (x) {
            return x.key;
        });
    });
    results.messages.assertEqual(onNext(220, "foo"), onNext(270, "bar"), onNext(350, "baz"), onNext(360, "qux"), onNext(470, "foo"), onCompleted(570));
    xs.subscriptions.assertEqual(subscribe(200, 570));
    equal(12, keyInvoked);
    equal(12, eleInvoked);
});

test('GroupByUntil_DurationSelector_Throws', function () {
    var ex, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(210, "foo"));
    results = scheduler.startWithCreate(function () {
        var outer;
        return outer = xs.groupByUntil(function (x) {
            return x;
        }, function (x) {
            return x;
        }, function (g) {
            throw ex;
        });
    });
    results.messages.assertEqual(onError(210, ex));
    xs.subscriptions.assertEqual(subscribe(200, 210));
});