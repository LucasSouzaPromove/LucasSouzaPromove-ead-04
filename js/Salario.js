class Salario {
    /**
     *
     * @param {number} pSalarioBruto
     */
    constructor(pSalarioBruto) {
      this._salarioBruto = undefined;
      this._validarNumero(pSalarioBruto);
      this._salarioBruto = pSalarioBruto;
  
      Object.freeze(this);
  
    }
  
    _validarNumero(numero) {
      if (((typeof numero !== 'number') || numero < 0))
        throw new Error('Digite apenas números naturais');
    }
  
    get descontoINSS() {
      let taxaINSS;
      if (this._salarioBruto <= 1693.72) {
        taxaINSS = 8;
      }
      else if (this._salarioBruto >= 1693.73 && this._salarioBruto <= 2822.90) {
        taxaINSS = 9;
  
      }
      else if (this._salarioBruto >= 2822.91) {
        taxaINSS = 11;
      }
      var desconto = (taxaINSS * this._salarioBruto) / 100;
      if (desconto > 621.04) {
        return 621.04;
      }
      else { return Number( desconto.toFixed(2)); }
  
    }

    get descontoIRPF() {
        let taxaIRPF;
        let parcelaIRPF;
        let salarioINSS = this._salarioBruto - this.descontoINSS;
    if (salarioINSS <= 1903.98){
        taxaIRPF = 0;
        parcelaIRPF = 0;
    }
    else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.85 ){
        taxaIRPF = 7.5;
        parcelaIRPF = 142.80;
    }
    else if (salarioINSS >= 2826.86 && salarioINSS <= 3751.05){
        taxaIRPF = 15;
        parcelaIRPF = 354.80;
    }
    else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68){
        taxaIRPF = 22.5;
        parcelaIRPF = 636.13;
    }
    else if (salarioINSS > 4664.68){
        taxaIRPF =27.5;
        parcelaIRPF = 869.36;
    }
    return Number( (((salarioINSS*taxaIRPF)/100)-parcelaIRPF).toFixed(2))
    }
    

    get totalDescontos() {
        return Number( (this.descontoINSS + this.descontoIRPF).toFixed(2))
    }

    get salarioLiquido() {
        return Number( (this._salarioBruto - this.totalDescontos).toFixed(2))
    }
  
  
  }