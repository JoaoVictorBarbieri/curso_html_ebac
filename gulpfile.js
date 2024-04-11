function funcaoPadrao(callBack) {
    console.log('Executando via gulp')
    callBack();
} 

function dizOi (callBack){
    console.log("ola gulp")
    dizTchau();
    callBack();
}
function dizTchau() {
    console.log("Tchau Gulp");
}
exports.default = funcaoPadrao;
exports.dizOi = dizOi;