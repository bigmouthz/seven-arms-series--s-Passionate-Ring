QUnit.module('WindowWithTime');

var Observable = Rx.Observable,
    TestScheduler = Rx.TestScheduler,
    onNext = Rx.ReactiveTest.onNext,
    onError = Rx.ReactiveTest.onError,
    onCompleted = Rx.ReactiveTest.onCompleted,
    subscribe = Rx.ReactiveTest.subscribe;

test('Window_Time_Basic', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(150, 1), onNext(210, 2), onNext(240, 3), onNext(270, 4), onNext(320, 5), onNext(360, 6), onNext(390, 7), onNext(410, 8), onNext(460, 9), onNext(470, 10), onCompleted(490));
    results = scheduler.startWithCreate(function () {
        return xs.windowWithTime(100, scheduler).select(function (ys, i) {
            return ys.select(function (y) {
                return i + ' ' + y;
            }).concat(Rx.Observable.returnValue(i + ' end'));
        }).mergeObservable();
    });
    results.messages.assertEqual(onNext(210, "0 2"), onNext(240, "0 3"), onNext(270, "0 4"), onNext(300, "0 end"), onNext(320, "1 5"), onNext(360, "1 6"), onNext(390, "1 7"), onNext(400, "1 end"), onNext(410, "2 8"), onNext(460, "2 9"), onNext(470, "2 10"), onNext(490, "2 end"), onCompleted(490));
    xs.subscriptions.assertEqual(subscribe(200, 490));
});

test('Window_Time_Basic_Both', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(150, 1), onNext(210, 2), onNext(240, 3), onNext(270, 4), onNext(320, 5), onNext(360, 6), onNext(390, 7), onNext(410, 8), onNext(460, 9), onNext(470, 10), onCompleted(490));
    results = scheduler.startWithCreate(function () {
        return xs.windowWithTime(100, 50, scheduler).select(function (ys, i) {
            return ys.select(function (y) {
                return i + " " + y;
            }).concat(Rx.Observable.returnValue(i + " end"));
        }).mergeObservable();
    });
    results.messages.assertEqual(onNext(210, "0 2"), onNext(240, "0 3"), onNext(270, "0 4"), onNext(270, "1 4"), onNext(300, "0 end"), onNext(320, "1 5"), onNext(320, "2 5"), onNext(350, "1 end"), onNext(360, "2 6"), onNext(360, "3 6"), onNext(390, "2 7"), onNext(390, "3 7"), onNext(400, "2 end"), onNext(410, "3 8"), onNext(410, "4 8"), onNext(450, "3 end"), onNext(460, "4 9"), onNext(460, "5 9"), onNext(470, "4 10"), onNext(470, "5 10"), onNext(490, "4 end"), onNext(490, "5 end"), onCompleted(490));
    xs.subscriptions.assertEqual(subscribe(200, 490));
});

test('WindowWithTime_Basic', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(100, 1), onNext(210, 2), onNext(240, 3), onNext(280, 4), onNext(320, 5), onNext(350, 6), onNext(380, 7), onNext(420, 8), onNext(470, 9), onCompleted(600));
    results = scheduler.startWithCreate(function () {
        return xs.windowWithTime(100, 70, scheduler).select(function (w, i) {
            return w.select(function (x) {
                return i.toString() + " " + x.toString();
            });
        }).mergeObservable();
    });
    results.messages.assertEqual(onNext(210, "0 2"), onNext(240, "0 3"), onNext(280, "0 4"), onNext(280, "1 4"), onNext(320, "1 5"), onNext(350, "1 6"), onNext(350, "2 6"), onNext(380, "2 7"), onNext(420, "2 8"), onNext(420, "3 8"), onNext(470, "3 9"), onCompleted(600));
    xs.subscriptions.assertEqual(subscribe(200, 600));
});

test('WindowWithTime_Error', function () {
    var ex, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(100, 1), onNext(210, 2), onNext(240, 3), onNext(280, 4), onNext(320, 5), onNext(350, 6), onNext(380, 7), onNext(420, 8), onNext(470, 9), onError(600, ex));
    results = scheduler.startWithCreate(function () {
        return xs.windowWithTime(100, 70, scheduler).select(function (w, i) {
            return w.select(function (x) {
                return i.toString() + " " + x.toString();
            });
        }).mergeObservable();
    });
    results.messages.assertEqual(onNext(210, "0 2"), onNext(240, "0 3"), onNext(280, "0 4"), onNext(280, "1 4"), onNext(320, "1 5"), onNext(350, "1 6"), onNext(350, "2 6"), onNext(380, "2 7"), onNext(420, "2 8"), onNext(420, "3 8"), onNext(470, "3 9"), onError(600, ex));
    xs.subscriptions.assertEqual(subscribe(200, 600));
});

test('WindowWithTime_Disposed', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(100, 1), onNext(210, 2), onNext(240, 3), onNext(280, 4), onNext(320, 5), onNext(350, 6), onNext(380, 7), onNext(420, 8), onNext(470, 9), onCompleted(600));
    results = scheduler.startWithDispose(function () {
        return xs.windowWithTime(100, 70, scheduler).select(function (w, i) {
            return w.select(function (x) {
                return i.toString() + " " + x.toString();
            });
        }).mergeObservable();
    }, 370);
    results.messages.assertEqual(onNext(210, "0 2"), onNext(240, "0 3"), onNext(280, "0 4"), onNext(280, "1 4"), onNext(320, "1 5"), onNext(350, "1 6"), onNext(350, "2 6"));
    xs.subscriptions.assertEqual(subscribe(200, 370));
});

test('WindowWithTime_Basic_Same', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(100, 1), onNext(210, 2), onNext(240, 3), onNext(280, 4), onNext(320, 5), onNext(350, 6), onNext(380, 7), onNext(420, 8), onNext(470, 9), onCompleted(600));
    results = scheduler.startWithCreate(function () {
        return xs.windowWithTime(100, scheduler).select(function (w, i) {
            return w.select(function (x) {
                return i.toString() + " " + x.toString();
            });
        }).mergeObservable();
    });
    results.messages.assertEqual(onNext(210, "0 2"), onNext(240, "0 3"), onNext(280, "0 4"), onNext(320, "1 5"), onNext(350, "1 6"), onNext(380, "1 7"), onNext(420, "2 8"), onNext(470, "2 9"), onCompleted(600));
    xs.subscriptions.assertEqual(subscribe(200, 600));
});