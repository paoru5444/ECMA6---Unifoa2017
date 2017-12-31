class DateHelper13oSalario {
    //Classe com metodos estáticos com uma mensagem de erro quando eles são instânciados.
    constructor() {
        throw new Error('A classe DateHelper não pode ser instanciada, por possuir métodos estáticos');
    }

    static textoParaData(texto) {
        return new Date(...texto
            .split('-')
            .map((n, indice) => n - indice % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }
}