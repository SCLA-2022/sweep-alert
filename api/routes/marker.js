const router = require("express").Router();
const User = require("../models/Users");
const Marker = require("../models/Markers");

//Add marker
router.post("/add", async (req,res) => {
    try{
        const newMarker = new Marker({
            username: req.body.username,
            address: req.body.address,
            lat: req.body.lat,
            long: req.body.long});
            const marker = await newMarker.save();
            res.status(200).json(marker);
    } catch(err){
        res.status(500).json(err);
    }
});

//Update marker
router.put("/:id", async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        if (marker.username == req.body.username) {
            try {
                const updatedMarker = await Marker.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatedMarker);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your own markers");
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        if (marker.username === req.body.username) {
            try {
                await marker.delete();
                res.status(200).json("Marker has been deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your marker")
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

//Get post
router.get("/:id", async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        res.status(200).json(marker);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let markers;
        if (username) {
            markers = await Marker.find({ username });
        } else {
            markers = await Marker.find();
        }
        res.status(200).json(markers);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;