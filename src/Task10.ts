// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (const c of color) {
//     console.log(c);
// }
let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (const index in color) {
    console.log(`Index: ${index}, Value: ${color[index]}`);
}
