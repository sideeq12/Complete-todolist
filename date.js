
exports.getDate = function (){
var Today = new Date();
var options = {
    weekday : 'long',
    day : "numeric",
    month : 'long'
};
return Today.toLocaleDateString('en-US', options)

}