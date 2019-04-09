const express = require("express");

const Router = express.Router;

const userApiRouter = Router();

const UserModel  = require('../models/user')
// Create
userApiRouter.post('/', (req,res) => {
    UserModel.create(
        req.body,
        (err, userCreated) => {
            if(err) res.send({success: 0, err})
            else res.send({success:1, data: userCreated});
        }
    )
});
// Read
userApiRouter.get('/', (req,res) =>{
    UserModel.find({ }, (err, docs) =>{
        if(err) console.log(err)
        else res.send(docs);
    });
});
// Read One
userApiRouter.get('/:id', (req,res) =>{
    userId = req.params.id
    UserModel.findById(userId, (err, doc) =>{
        if(err) console.log(err)
        else res.send(doc);
    });
});
// Update
userApiRouter.put('/:id', (req,res) =>{
    userId = req.params.id;
    UserModel.updateOne({_id:userId},{
        name: req.body.name,
        dob: req.body.dob,
        passwords: req.body.passwords,
        location: req.body.location,
        account: req.body.account,
        gender: req.body.gender,
    },(err) =>{
        if(err) console.log(err);
        else res.send("Updated")
    })
})
// Delete
userApiRouter.delete('/:id', (req,res) => {
    userId = req.params.id;
    UserModel.deleteOne({_id:userId},(err) =>{
        if (err) console.log(err);
        else res.send("Deleted")
        })
});
module.exports = userApiRouter;