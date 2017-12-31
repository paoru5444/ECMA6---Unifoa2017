class Calcula13oSalarioController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputDataAdmissao = $('#dataAdmissao');
        this._inputNome = $('#nome');
        this._inputFuncao = $('#funcao');
        this._inputSalario = $('#salario');
        this._lista13oSalario = new Lista13oSalario();
        this._decimoTerceiroView = new DecimoTerceiroView($('#decimoTerceiro'));
        this._decimoTerceiroView.update(this._lista13oSalario);

        this._mensagemDecimoTerceiro = new MensagemDecimoTerceiro();

        this._mensagemViewDecimoTerceiro = new MensagemViewDecimoTerceiro($('#mensagemView'));
        this._mensagemViewDecimoTerceiro.update(this._mensagemDecimoTerceiro);

    }

    adiciona(event) {
        //Remove a ação natural da tabela e impede que ela apague os dados antes da hora.
        event.preventDefault();

        //Chamando os métodos estáticos da classe DateHelper
        let textForDate = DateHelper13oSalario.textoParaData(this._inputDataAdmissao.value)
        let dateForText = DateHelper13oSalario.dataParaTexto(textForDate)

        //Instanciando a classe com as informações do 13º salario.
        let calcula13oSalario = new Calcula13oSalario(textForDate, this._inputNome.value, this._inputFuncao.value, this._inputSalario.value);

        //Adicionando as informações em um vetor e atualizando a tela para exibilas
        this._lista13oSalario.adiciona(calcula13oSalario);
        this._decimoTerceiroView.update(this._lista13oSalario);

        //Mensagem confirmando o sucesso da inserção
        this._mensagemDecimoTerceiro.texto = 'Decimo terceiro adicionado com sucesso';
        this._mensagemViewDecimoTerceiro.update(this._mensagemDecimoTerceiro);

        //Limpa os dados da tabela e retorna o ponteiro na primeira label
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDataAdmissao.value = '';
        this._inputNome.value = '';
        this._inputFuncao.value = '';
        this._inputSalario.value = '';
        this._inputDataAdmissao.focus();
    }
};