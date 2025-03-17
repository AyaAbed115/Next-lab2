const { default: mongoose } = require("mongoose");

export function dbConnection(){
    mongoose.connect(
        'mongodb+srv://ayaabed5005:Aa16072023@cluster0.gv1tc.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0'
    ).then(()=> 
        {
            console.log("connect successed");
        }
    ).catch((err)=> 
        {
            console.log("conncetion failed", err);
        }
    );
}