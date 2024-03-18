const db = require('../db');
class PostController {
    async createPost(req,res){
        const {title,content,userId} = req.body;
        const newPost = await db.query(
            `INSERT INTO post (title, content,userId) values ($1,$2,$3) RETURNING *`,
            );
            res.json(newPost.rows[0]);
    }
    async getPostByUser(req,res) {
    }
}
module.exports = new PostController();