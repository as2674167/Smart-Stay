const mongoose = require("mongoose");
const initData = require("./data"); 
const Listing = require("../models/listing");
require('dotenv').config({ path: '../.env' });

const initDB = async () => {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log('Connected to MongoDB');

    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '6a02ffb7c6386695a3206177'}));
    await Listing.insertMany(initData.data);
    console.log("Data Inserted Successfully");

    await mongoose.disconnect();
}

initDB().catch(err => {
    console.log('Error:', err);
});