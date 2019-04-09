const express = require("express");

const Router = express.Router;

const commentApiRouter = Router();

const CommentModel = require('../models/comment')
// Create
commentApiRouter.post('/', (req,res) => {
    const {userId, content} = req.body;
    CommentModel.create(
        {userId, content},
        (err, contentCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: contentCreated});
        }
    )
});
// Read
commentApiRouter.get('/', (req,res) =>{
    CommentModel.find({ }, (err,docs) =>{
        if(err) console.log(err)
        else res.send(docs)
    })
});
// Read One
commentApiRouter.get('/:id', (req,res) =>{
    commentId = req.params.id;
    CommentModel.find({_id:commentId}, (err,doc) =>{
        if(err) console.log(err)
        else res.send(doc)
    })
});
// Update
commentApiRouter.put('/:id', (req,res) => {
    commentId = req.params.id;
    query = {
        content: req.body.content,
        imageId: req.body.imageId,
    }
    console.log(query);
    CommentModel.updateOne({_id:commentId}, query,  (err)=>{
        if(err) console.log(err);
        else res.send("Updated")
    })
});
// Delete
commentApiRouter.delete('/:id', (req,res) => {
    commentId = req.params.id;
    CommentModel.deleteOne({_id:commentId},(err) =>{
            if (err) console.log(err);
            else res.send("Deleted")
        }
    )
});
module.exports = commentApiRouter;