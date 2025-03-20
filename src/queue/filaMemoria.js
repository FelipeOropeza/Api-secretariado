class FilaMemoria {
  constructor() {
    this.fila = [];
    this.processando = false;
  }

  adicionar(item) {
    this.fila.push(item);
    if (!this.processando) {
      this.processar();
    }
  }

  async processar() {
    if (this.fila.length > 0) {
      this.processando = true;

      const item = this.fila.shift();

      await item();

      this.processar();
    } else {
      this.processando = false;
    }
  }
}

const filaMemoria = new FilaMemoria();

export default filaMemoria;
