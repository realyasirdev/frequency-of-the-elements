let my_list = [10,10,10,10,20,20,20,20,40,40,50,50,30];

let result = {};

for (let i = 0; i < my_list.length; i++) {

    let num = my_list[i];

    if (result[num]) {
        result[num] = result[num] + 1;
    } else {
        result[num] = 1;
    }

}

console.log(result);