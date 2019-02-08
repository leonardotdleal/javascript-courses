class NegociacoesView extends View {

  /* Não necessário pois assume o constructor da classe pai como padrão */
  // constructor(elemento) {
  //   super(elemento);
  // }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
          ${model.negociacoes.map(negociacao => `
            <tr>
              <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <td colspan="3">
          </td>
          <td>${model.negociacoes.reduce((total, n) => total + n.volume, 0)}</td>
        </tfoot>
      </table>`;
  }

}