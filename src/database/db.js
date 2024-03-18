import mongoose from "mongoose"
const connectDatabase = () => {
  console.log("Wait connecting to the database");
  mongoose
    .connect(
      "mongodb+srv://adimar:adimar1999@mern.usrxkox.mongodb.net/?retryWrites=true&w=majority&appName=MERN",
      {
        /* useNewUrlParser: true, useUnifiedTopology: true*/
      }
    )
    .then(() => console.log("MongoDB Atlas connect"))
    .catch((error) =>
      console.log(`COULD NOT CONNECT TO DATABASE: ${error.message}`)
    );
};
export default connectDatabase;