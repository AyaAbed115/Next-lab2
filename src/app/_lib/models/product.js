const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    desc:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    img:{
        type: String,
        require: true
    }
})

export const productModel = mongoose.models.Product || mongoose.model("Product", productSchema);

