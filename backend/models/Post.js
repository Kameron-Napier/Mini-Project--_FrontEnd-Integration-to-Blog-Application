import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    userId: String, 
});

export default mongoose.model('Post', postSchema);
