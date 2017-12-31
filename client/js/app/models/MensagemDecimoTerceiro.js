class MensagemDecimoTerceiro {

    constructor() {
        //Variável inplicita decçarada a partir do this, sendo privada indicada pelo _
        this._texto;
    }

    get texto() {
        //Retorna a mensagem para o Controller
        return this._texto;
    }

    set texto(texto) {
        //Esse setter recebe a mensagem passada como parâmetro e adiciona na variável _texto.
        this._texto = texto;
    }
}