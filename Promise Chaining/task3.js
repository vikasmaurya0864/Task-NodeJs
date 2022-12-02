let num = 20;
let abc = (num) => {
        let p1 = new Promise((resolve, reject) => {
                if (num > 10) {
                        resolve(num)
                }
                else {
                        reject(new Error("Error occured"))
                }
        })
        return p1
}
abc(num).then((num) => {
        console.log("the number is",num);
        return num * 2;
}).then((num) => {
        console.log("the num is",num);
        return num * 3;
}).then((num) => {
        console.log(`The final value is: ${num}`);
}).catch((err) => {
        console.log(err.message);
})
