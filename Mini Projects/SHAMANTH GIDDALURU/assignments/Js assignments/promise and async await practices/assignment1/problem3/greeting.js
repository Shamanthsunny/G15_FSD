function createGreetingPromise(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, 3000);
    });
}

const promise1 = createGreetingPromise("Alice");
const promise2 = createGreetingPromise("Bob");
const promise3 = createGreetingPromise("Charlie");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("Promise.all resolved:", results);
    })
    .catch((error) => {
        console.error("Promise.all rejected:", error);
    });

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("Promise.any resolved:", result);
    })
    .catch((error) => {
        console.error("Promise.any rejected:", error);
    });

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log("Promise.allSettled:", results);
});

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("Promise.race resolved:", result);
    })
    .catch((error) => {
        console.error("Promise.race rejected:", error);
    });
