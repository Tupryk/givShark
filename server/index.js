const express = require("express")
const mongoose = require("mongoose")
const Shark = require("./Shark")
const User = require("./User")

const app = express();
app.use('/images', express.static('public/pics'));

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/ichsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err)
    else console.log("Succesfully connected to db!")
})

async function create_shark() {
    try {
        /*
        const shark = await Shark.create({
            name: "bob",
            science_name: "chandler",
            bio: "bruh",
            photo: "/images/nerd_shark.jpg",
            weight: {
                max: 69,
                min: 50
            },
            size: {
                max: 69,
                min: 50
            }
        })
        console.log(shark);
        const user = await User.create({
            name: "my_namee",
            email: "hello@kdjsakjdk.com",
            photo: "/images/nerd_shark.jpg",
            friends: ["63fa6bd56929e15ce79d2e22"],
            favouriteSharks: ["63fa6e3a05d1e35edbf3871e"],
        })
        */
        //const bruh = await User.deleteMany({})
        //const bruh = await User.where("name").equals("my_namee").populate("favouriteSharks")
        //console.log(bruh[0].favouriteSharks)
    } catch (e) {
        console.log(e.message)
    }
}
create_shark()

app.get("/api/sharks", (req, res) => {
    Shark.find({}, function(err, sharks) {
        sharks.addedProperty = "sharks"
        res.json(sharks)
    });
});

app.get('/api/sharks/:id', (req, res) => {
    const sharkId = req.params.id
    Shark.findById(sharkId, function(err, shark) {
        if(err) {
            console.log("shark not found")
            res.sendStatus(404);
        } else res.json(shark)
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
