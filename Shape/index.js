// const n = 5;
// let string = '';
// for(let i = 1; i <= n; i++) {
//     for(let j = 1; j <=n; j++) {
//         if(i + j > - (n/2) + 1 && (i <= j + (n/2)-2)){
//             string += ' ';
//         }
//         else{
//             string += '*';
//         }
//     }
//     string += '\n';
// }

// console.log(string);

// function printHollowDiamond(size) {
//     for (let i = 1; i <= size; i++) {
//         let row = '';
//         for(let j = 1; j <= size; j++){
//             if(i + j === Math.floor(size / 2) && (i - j === Math.floor(size / 2)) && (j - i === Math.floor(size / 2)) && (i + j === Math.floor(size / 2))){
//                 row += '@';
//             }
//             else{
//                 row += '*';
//             }
//         }
//         console.log(row);
//     }
// }
// printHollowDiamond(10);

function printHollowDDiamond(size) {
    for (let i = 1; i <= size; i++) {
        let row = '';
        for(let j = 1; j <= size; j++) {
            if(j - i === Math.floor(size / 2) - 2 || (i + j <= (size / 2) + 1)){
                row += '*';
            }
            else{
                row += '1';
            }
        }
        console.log(row);
    }
}
printHollowDDiamond(10);


// if(i + j <= (size / 2) + 1)




let n = 5; 
for (let i = 1; i <= n; i++) { 
	let str = ''
	for (let j = 1; j < 2 * n; ++j) { 
		if (i + j > n + 1 && (i > j - n + 1)) 
			str += ' '; 
		else
			str += '*'; 
        // if ( i + j < 2 * n/2 && (i < j - 2 * n - 1))
        //     str += ' ';
        // else
        //     str += '*';
	} 

	console.log(str); 
} 
// for (let i = n - 1; i >= 1; i--) { 
// 	let str = ''
// 	for (let j = 1; j < 2 * n; ++j) { 
// 		if (i + j > n + 1 && (i > j - n + 1)) 
// 			str += ' '; 
// 		else
// 			str += '*'; 
// 	} 

// 	console.log(str); 
// }





