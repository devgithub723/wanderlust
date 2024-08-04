const mongoose=require('mongoose');
const initdata=require('./data');
const listing=require('../models/listing');

const mongoURL='mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{
    console.log('Connect the DataBase');
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(mongoURL);
}
const initDb= async()=>{
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"66afcf9111ef07b98c91d011"}));
    await listing.insertMany(initdata.data);
    console.log('data was initialised');
}
initDb();