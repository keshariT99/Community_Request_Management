const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//Add requests 
router.post('/add', (req,res) =>{

    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"request saved successfully"
        });
    });
});

//get requets
router.get('/getall', (req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({ 
            success:true,
            existingPosts:posts
        });
    });
});


//get specific request
router.get("/:id",(req,res) =>{
    
    let requestId = req.params.id;

    Posts.findById(requestId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });

})


//update requests
router.put('/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete requests

router.delete('/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});


//search

{/*router.get("/search/:key" ,async(req,res) => {
    
    let result = await this.posts.find({
        "$or" : [
            {
                devisionID : { $regex : req.params.key}
            },
            {
                title : { $regex : req.params.key}
            }
        ]
    });
    res.send(result);
})*/}







module.exports = router;