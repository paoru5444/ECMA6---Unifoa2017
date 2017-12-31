class Calcula13oSalario {
    constructor(dataAdmissao, nome, funcao, salario) {

        this._dataAdmissao = new Date(dataAdmissao.getTime());
        this._nome = nome;
        this._funcao = funcao;
        this._salario = salario;

    }

    get dataAdmissao() {

        return new Date(this._dataAdmissao.getTime());
    }

    get nome() {

        return this._nome;
    }

    get funcao() {

        return this._funcao;
    }

    get salario() {
        //Transformando tipagem de string para numérico
        return parseFloat(this._salario);
    }

    get primeiraParcela13oSalario() {

        return parseFloat((this._salario / 2).toFixed(2));
    }

    get inss() {

        if (this._salario <= 1659.38) {
            return parseFloat((this._salario * 8 / 100).toFixed(2));
        } else if (this._salario > 1659.38 && this._salario < 2765.66) {
            return parseFloat((this._salario * 9 / 100).toFixed(2));
        } else if (this._salario >= 2765.67 && this._salario < 5531.31) {
            return parseFloat((this._salario * 11 / 100).toFixed(2));
        } else {
            return 608.44;
        }
    }

    get irf() {

        if (this._salario <= 1999.18) {
            return 0;
        } else if (this._salario >= 1999.19 && this._salario < 2967.98) {
            return parseFloat(((this._salario * 7.5 / 100) - 149.94).toFixed(2));
        } else if (this._salario >= 2967.99 && this._salario < 3938.60) {
            return parseFloat(((this._salario * 15 / 100) - 372.54).toFixed(2));
        } else if (this._salario >= 3938.61 && this._salario < 4897.91) {
            return parseFloat(((this._salario * 22.5 / 100) - 667.944).toFixed(2));
        } else {
            return parseFloat(((this._salario * 27.5 / 100) - 912.83).toFixed(2));
        }
    }

    get segundaParcela13oSalario() {

        return parseFloat((this._salario - this.primeiraParcela13oSalario - this.inss - this.irf).toFixed(2));
    }


}