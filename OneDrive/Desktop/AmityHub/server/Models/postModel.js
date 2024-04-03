import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstName:{ type: String, required: true},
    lastName:{ type: String, required: true},
    profImg:{ type: String,required: true},
    desc: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
