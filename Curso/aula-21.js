
const test1 = (callback) => {
    setTimeout(() => {
        console.log("Test 1 ");
    }, 200);
}

const test2 = (callback) => {
    setTimeout(() => {
        console.log("Test 2 ");
        funçãocallback();
    }, 600);
}


const test3 = (callback) => {
    setTimeout(() => {
        console.log("Test 3 ");
    }, 300);
}

const test4 = (callback) => {
    setTimeout(() => {
        console.log("Test 4 ");
    }, 1);
}

const funçãocallback = () => {
    console.log("Salvou Usuario");
}

test1();
console.log(1 + 1);
test2(funçãocallback);
test3();
console.log(2 + 2);
test4();
