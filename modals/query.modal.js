import mongoose from "mongoose";
const querySchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User id is required"],
  },
  username: {
    type: String,
  },
  images: [
    {
      imgId: {
        type: String,
      },
      imgUrl: {
        type: String,
      },
      imgSize: {
        type: String,
      },
      uploadDate: {
        type: Date,
      },
    },
  ],
  storageRemaining: {
    type: Number,
    default: 100,
  },
  usageRemaining: {
    type: Number,
    default: 150,
  },
});

const Query = mongoose.model("Query", querySchema);
export default Query;
