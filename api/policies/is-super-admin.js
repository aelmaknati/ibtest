module.exports=async function(req,res,proceed){return console.log("......................."),req.me?req.me.isSuperAdmin?proceed():res.forbidden():res.unauthorized()};