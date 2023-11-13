// not so good way to do it
// module.exports.somar = exports = function (a, b){
//     return a + b   
// }
// module.exports.multiplicar = exports = function (a, b){
//     return a * b   
// }

// better approach
module.exports = {

    somar: function (a, b) {
        return a + b
    },
    multiplicar: function (a, b) {
        return a * b
    }
}