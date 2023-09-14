const { default: mongoose } = require("mongoose")

const connectDb =  async()=>{
    try {
            await mongoose.connect(process.env.MONGODB_URI);

    }catch(err){
        throw new Error("connection failed")
    }
};

export default connectDb;