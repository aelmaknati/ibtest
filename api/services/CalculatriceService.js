module.exports = {

  additionner : function(a , b){
    return a + b;
  },

  soustraire : function(a , b ) {
    return a - b;
  },

  diviser : function(a , b) {
    if (b === 0){
      throw new Error("Divide by 0 is not allowed");
    }
    return a / b
  },
  multiplier : function(a , b)  {
    return a * b
  },

  pourcentage : function(a , b)  {
    let result = this.multiplier(b , a);
    result = this.diviser(result , 100);
    return result
  },

  puissance : function(a , b){
    let result = a;
    for (let i = 0 ; i < b - 1 ; i++){
      result = this.multiplier(result , a);
    }
    return result;
  }






}
