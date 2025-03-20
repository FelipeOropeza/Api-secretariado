class FilaMemoria {
    constructor() {
      this.filas = {};
    }
  
    getFila(idProduto) {
      if (!this.filas[idProduto]) {
        this.filas[idProduto] = {
          fila: [],
          processando: false,
        };
      }
      return this.filas[idProduto];
    }
  
    adicionar(idProduto, item) {
      const filaProduto = this.getFila(idProduto);
      filaProduto.fila.push(item);
  
      if (!filaProduto.processando) {
        this.processar(idProduto);
      }
    }
  
    async processar(idProduto) {
      const filaProduto = this.getFila(idProduto);
      if (filaProduto.fila.length > 0) {
        filaProduto.processando = true;
  
        const item = filaProduto.fila.shift();
  
        try {
          await item();
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
  