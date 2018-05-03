var arr_test = ['butt', 'm', 'x', 'o', 'p'];
var x_test = 'x';
function remove_x(arr, x) {
for (var i = 0; i < arr.length -1; i++) {
    console.log(arr[i] + "**********")
    if(arr[i] == x) {
        arr.slice(arr[i])
    }
    return arr
}

}

console.log(remove_x(arr_test, x_test))
