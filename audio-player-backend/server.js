const express = require('express')
const app = express()
const shortid = require('shortid')
const port = process.argv[2] || 8080

const Larkrise = [{
    title: 'Lovely on the Water',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_01_-_Lovely_on_the_Water.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    about: '"Larkrise Revisited" is a remixed, remastered and partially rerecorded version of "Larkrise", an album I first released in 2012. I am a lifelong lover of British traditional music as well as modern updates to it by the likes of Richard Thompson and Sandy Denny. "The Old Miner" and "Bright Morning Star" are new bonus tracks recorded in February 2017. The latter is an Appalachian song also available in stirring renditions by Oysterband and The Young Tradition.',
    id: shortid.generate()
}, {
    title: 'Spencer the Rover',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_02_-_Spencer_the_Rover.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}, {
    title: 'Three Drunken Maidens',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_03_-_Three_Drunken_Maidens.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}, {
    title: 'Lord Franklin',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_04_-_Lord_Franklin.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}, {
    title: 'The Bold Poachers',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_05_-_The_Bold_Poachers.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}, {
    title: 'Peggy Gordon',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_06_-_Peggy_Gordon.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}, {
    title: 'Who Would True Valour See',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_07_-_Who_Would_True_Valour_See.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}, {
    title: 'Reynardine',
    src: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson_-_08_-_Reynardine.mp3',
    img: 'Allister_Thompson_Larkrise_Revisited/Allister_Thompson.jpg',
    artist: 'Allister Thompson',
    album: 'Larkrise Revisited',
    id: shortid.generate()
}]

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send(Larkrise)
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})