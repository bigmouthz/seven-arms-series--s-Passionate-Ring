QUnit.module('RepeatProto');

var Observable = Rx.Observable,
    TestScheduler = Rx.TestScheduler,
    onNext = Rx.ReactiveTest.onNext,
    onError = Rx.ReactiveTest.onError,
    onCompleted = Rx.ReactiveTest.onCompleted,
    subscribe = Rx.ReactiveTest.subscribe,
    created = Rx.ReactiveTest.created,
    subscribed = Rx.ReactiveTest.subscribed,
    disposed = Rx.ReactiveTest.disposed;

test('Repeat_Observable_Basic', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createColdObservable(
                        onNext(100, 1),
                        onNext(150, 2),
                        onNext(200, 3),
                        onCompleted(250));
    results = scheduler.startWithCreate(function () {
        return xs.repeat();
    });
    results.messages.assertEqual(
                        onNext(300, 1),
                        onNext(350, 2),
                        onNext(400, 3),
                        onNext(550, 1),
                        onNext(600, 2),
                        onNext(650, 3),
                        onNext(800, 1),
                        onNext(850, 2),
                        onNext(900, 3));
    xs.subscriptions.assertEqual(
                        subscribe(200, 450),
                        subscribe(450, 700),
                        subscribe(700, 950),
                        subscribe(950, 1000));
});

test('Repeat_Observable_Infinite', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createColdObservable(onNext(100, 1), onNext(150, 2), onNext(200, 3));
    results = scheduler.startWithCreate(function () {
        return xs.repeat();
    });
    results.messages.assertEqual(onNext(300, 1), onNext(350, 2), onNext(400, 3));
    return xs.subscriptions.assertEqual(subscribe(200, 1000));
});

test('Repeat_Observable_Error', function () {
    var ex, results, scheduler, xs;
    scheduler = new TestScheduler();
    ex = 'ex';
    xs = scheduler.createColdObservable(onNext(100, 1), onNext(150, 2), onNext(200, 3), onError(250, ex));
    results = scheduler.startWithCreate(function () {
        return xs.repeat();
    });
    results.messages.assertEqual(onNext(300, 1), onNext(350, 2), onNext(400, 3), onError(450, ex));
    return xs.subscriptions.assertEqual(subscribe(200, 450));
});

test('Repeat_Observable_Throws', function () {
    var d, scheduler1, scheduler2, scheduler3, xs, xss, ys, zs;
    scheduler1 = new TestScheduler();
    xs = Observable.returnValue(1, scheduler1).repeat();
    xs.subscribe(function (x) {
        throw 'ex';
    });
    raises(function () {
        return scheduler1.start();
    });
    scheduler2 = new TestScheduler();
    ys = Observable.throwException('ex', scheduler2).repeat();
    ys.subscribe(function (x) { }, function (ex) {
        throw 'ex';
    });
    raises(function () {
        return scheduler2.start();
    });
    scheduler3 = new TestScheduler();
    zs = Observable.returnValue(1, scheduler3).repeat();
    d = zs.subscribe(function (x) { }, function (ex) { }, function () {
        throw 'ex';
    });
    scheduler3.scheduleAbsolute(210, function () {
        return d.dispose();
    });
    scheduler3.start();
    xss = Observable.create(function (o) {
        throw 'ex';
    }).repeat();
    raises(function () {
        return xss.subscribe();
    });
});

test('Repeat_Observable_RepeatCount_Basic', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createColdObservable(onNext(5, 1), onNext(10, 2), onNext(15, 3), onCompleted(20));
    results = scheduler.startWithCreate(function () {
        return xs.repeat(3);
    });
    results.messages.assertEqual(onNext(205, 1), onNext(210, 2), onNext(215, 3), onNext(225, 1), onNext(230, 2), onNext(235, 3), onNext(245, 1), onNext(250, 2), onNext(255, 3), onCompleted(260));
    xs.subscriptions.assertEqual(subscribe(200, 220), subscribe(220, 240), subscribe(240, 260));
});

test('Repeat_Observable_RepeatCount_Dispose', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createColdObservable(onNext(5, 1), onNext(10, 2), onNext(15, 3), onCompleted(20));
    results = scheduler.startWithDispose(function () {
        return xs.repeat(3);
    }, 231);
    results.messages.assertEqual(onNext(205, 1), onNext(210, 2), onNext(215, 3), onNext(225, 1), onNext(230, 2));
    return xs.subscriptions.assertEqual(subscribe(200, 220), subscribe(220, 231));
});

test('Repeat_Observable_RepeatCount_Infinite', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createColdObservable(onNext(100, 1), onNext(150, 2), onNext(200, 3));
    results = scheduler.startWithCreate(function () {
        return xs.repeat(3);
    });
    results.messages.assertEqual(onNext(300, 1), onNext(350, 2), onNext(400, 3));
    return xs.subscriptions.assertEqual(subscribe(200, 1000));
});

test('Repeat_Observable_RepeatCount_Error', function () {
    var ex, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createColdObservable(onNext(100, 1), onNext(150, 2), onNext(200, 3), onError(250, ex));
    results = scheduler.startWithCreate(function () {
        return xs.repeat(3);
    });
    results.messages.assertEqual(onNext(300, 1), onNext(350, 2), onNext(400, 3), onError(450, ex));
    return xs.subscriptions.assertEqual(subscribe(200, 450));
});

test('Repeat_Observable_RepeatCount_Throws', function () {
    var d, scheduler1, scheduler2, scheduler3, xs, xss, ys, zs;
    scheduler1 = new TestScheduler();
    xs = Observable.returnValue(1, scheduler1).repeat(3);
    xs.subscribe(function (x) {
        throw 'ex';
    });
    raises(function () {
        return scheduler1.start();
    });
    scheduler2 = new TestScheduler();
    ys = Observable.throwException('ex1', scheduler2).repeat(3);
    ys.subscribe(function () { }, function (ex) {
        throw 'ex2';
    });
    raises(function () {
        return scheduler2.start();
    });
    scheduler3 = new TestScheduler();
    zs = Observable.returnValue(1, scheduler3).repeat(100);
    d = zs.subscribe(function () { }, function (ex) { }, function () {
        throw 'ex3';
    });
    scheduler3.scheduleAbsolute(10, function () {
        return d.dispose();
    });
    scheduler3.start();
    xss = Observable.create(function (o) {
        throw 'ex4';
    }).repeat(3);
    raises(function () {
        return xss.subscribe();
    });
});