class FilaMemoria {
  private filas: { [idProduto: number]: { fila: Function[]; processando: boolean } };

  constructor() {
    this.filas = {};
  }

  private getFila(idProduto: number): { fila: Function[]; processando: boolean } {
    if (!this.filas[idProduto]) {
      this.filas[idProduto] = {
        fila: [],
        processando: false,
      };
    }
    return this.filas[idProduto];
  }

  public adicionar(idProduto: number, item: Function): void {
    const filaProduto = this.getFila(idProduto);
    filaProduto.fila.push(item);

    if (!filaProduto.processando) {
      this.processar(idProduto);
    }
  }

  private async processar(idProduto: number): Promise<void> {
    const filaProduto = this.getFila(idProduto);
    if (filaProduto.fila.length > 0) {
      filaProduto.processando = true;

      const item = filaProduto.fila.shift();

      try {
        if (item) {
          await item();
        }
      } catch (error) {
        console.error(`Erro ao processar a operação para o produto ${idProduto}:`, error);
      }

      this.processar(idProduto);
    } else {
      filaProduto.processando = false;
    }
  }
}

const filaMemoria = new FilaMemoria();
export default filaMemoria;
