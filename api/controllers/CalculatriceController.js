module.exports = {

  additionner : function(req , res){
    let val1 = Number(req.body.val1);
    let val2 = Number(req.body.val2);
    let result = CalculatriceService.additionner(val1, val2);
    res.view("pages/calculatrice/calculatrice" , { result : result , layout : null });
  }


}
