import { dbConnection } from "@/app/_lib/dbConnection";

const { productModel } = require("@/app/_lib/models/product");
dbConnection();

export async function GET(){
    const req = await productModel.find();
    return new Response(JSON.stringify(req))
}

// import { dbConnect } from "@/app/_lib/dbConnection";

// const { userModel } = require("@/app/_lib/models/user");

// dbConnect();
// export async function GET() {
//     const req =await userModel.find();
//     return new Response(JSON.stringify(req))
// }