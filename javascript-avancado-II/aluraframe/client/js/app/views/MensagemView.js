class MensagemView extends View {

  /* Não necessário pois assume o constructor da classe pai como padrão */
  // constructor(elemento) {
  //   super(elemento);
  // }

  template(model) {
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }

}