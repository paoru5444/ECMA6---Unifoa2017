class DecimoTerceiroView extends View {

      // método template com a função IIFE Immediately Invoked Function Expression - Função imediata - executada imediatamente após ser criada
   /* 
    _template(modelo) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA ADMISSÃO</th>
                    <th>NOME</th>
                    <th>FUNCAO</th>
                    <th>SALARIO</th>        
                    <th>1a PARCELA 13o SALARIO</th>  
                    <th>INSS</th>
                    <th>IRF</th>                
                    <th>2a PARCELA 13o SALARIO</th>                                        
                </tr>
            </thead>
            <tbody>
                ${modelo.decimoTerceiro.map((n) => {
                        return `
                            <tr>
                                <td>${DateHelper13oSalario.dataParaTexto(n.dataAdmissao)}</td>
                                <td>${n.nome}</td>
                                <td>${n.funcao}</td>
                                <td>${n.salario}</td>
                                <td>${n.primeiraParcela13oSalario}</td>
                                <td>${n.inss}</td>
                                <td>${n.irf}</td>
                                <td>${n.segundaParcela13oSalario}</td>                                                                                                                                                                                                                                
                            </tr>
                        `
               })}
            </tbody>
                
            <tfoot>

                <td colspan='3'></td>
                <td>
                    ${
                        (function() {
                            let total = 0;
                            modelo.decimoTerceiro.forEach(n => total += n.salario);
                            return total.toFixed(2);
                        })()
                    }
                  </td>
                <td>
                   ${
                        (function() {
                            let total = 0;
                            modelo.decimoTerceiro.forEach(n => total += n.primeiraParcela13oSalario);
                            return total.toFixed(2);
                        })()
                    }
               
                </td>
                <td colspan='2'></td>
                <td> 
                    ${
                        (function() {
                            let total = 0;
                            modelo.decimoTerceiro.forEach(n => total += n.segundaParcela13oSalario);
                            return total.toFixed(2);
                        })()
                    }</td>    

            </tfoot>
        </table>               
        `
    }
*/


// método template com a função reduce
_template(modelo) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA ADMISSÃO</th>
                    <th>NOME</th>
                    <th>FUNCAO</th>
                    <th>SALARIO</th>        
                    <th>1a PARCELA 13o SALARIO</th>  
                    <th>INSS</th>
                    <th>IRF</th>                
                    <th>2a PARCELA 13o SALARIO</th>                                        
                </tr>
            </thead>
            <tbody>
                ${modelo.decimoTerceiro.map((n) => {
                        return `
                            <tr>
                                <td>${DateHelper13oSalario.dataParaTexto(n.dataAdmissao)}</td>
                                <td>${n.nome}</td>
                                <td>${n.funcao}</td>
                                <td>${n.salario}</td>
                                <td>${n.primeiraParcela13oSalario}</td>
                                <td>${n.inss}</td>
                                <td>${n.irf}</td>
                                <td>${n.segundaParcela13oSalario}</td>                                                                                                                                                                                                                                
                            </tr>
                        `
               })}
            </tbody>
                
            <tfoot>

                <td colspan='3'></td>
                <td>
                    ${modelo.decimoTerceiro.reduce((total, n) => total += n.salario,0)}
                  </td>
                <td>
                   ${modelo.decimoTerceiro.reduce((total, n) => total += n.primeiraParcela13oSalario,0)}
                </td>
                <td colspan='2'></td>
                <td> 
                    ${modelo.decimoTerceiro.reduce((total, n) => total += n.segundaParcela13oSalario,0)}
                </td>    

            </tfoot>
        </table>               
        `
    }

}