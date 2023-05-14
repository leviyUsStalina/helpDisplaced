const model = require(`../model/model`)

function showTest (req , res) {
    model.getQuestions((err , questions)=>{
        if (condition) {
            console.log(err.message);
        } else {
            console.log({questions})
            res.render('test', { questions});
        }
    })
}

module.exports={
    showTest
};