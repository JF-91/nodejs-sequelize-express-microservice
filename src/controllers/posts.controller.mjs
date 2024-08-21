import Post from "../models/post.model.mjs";

class PostController {
    static async createPost(req, res) {
        try {
            const { title, content, imageUrl, published, urlLink, urlName, secondUrlLink, secondUrlName } = req.body;
            const post = await Post.create({
                title,
                content,
                imageUrl,
                published,
                urlLink,
                urlName,
                secondUrlLink,
                secondUrlName,
            });
            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getAllPosts(req, res) {
        try {
            const posts = await Post.findAll();
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await Post.findByPk(id);
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async updatePost(req, res) {
        try {
            const { id } = req.params;
            const { title, content, imageUrl, published, urlLink, urlName, secondUrlLink, secondUrlName } = req.body;
            const post = await Post.findByPk(id);
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            await post.update({
                title,
                content,
                imageUrl,
                published,
                urlLink,
                urlName,
                secondUrlLink,
                secondUrlName,
            });
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async deletePost(req, res) {
        try {
            const { id } = req.params;
            const post = await Post.findByPk(id);
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            await post.destroy();
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default PostController;
