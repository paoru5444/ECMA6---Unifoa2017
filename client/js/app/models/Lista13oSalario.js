class Lista13oSalario {
    //Criando lista com os dados digitados no formulário
    constructor() {
        this._decimo13oSalario = [];
    }

    adiciona(decimoTerceiro) {
        //Esse método adiciona no vetor
        this._decimo13oSalario.push(decimoTerceiro);
    }

    get decimoTerceiro() {
        //Esse método retorna os valores para o Controller
        return this._decimo13oSalario;
    }

}