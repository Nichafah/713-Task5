
let count = 1;

const waitAndPrint = () => {
    setInterval(() => {

        const message = "Hello " + "world ".repeat(count).trim();
        console.log(message);
        count++;
    }, 3000);
};


waitAndPrint();

