const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://at282844:9Fk5b5bbdnUvaU5b@cluster0.zoecuga.mongodb.net/Foodiepanda?retryWrites=true&w=majority';

const mongoDb = async () => {
    try {
      await mongoose.connect(mongo_uri, { useNewUrlParser: true });
  
      console.log('Connected successfully');
  
      const fetchData = await mongoose.connection.db.collection('fooditems');
      const fetchCat = await mongoose.connection.db.collection('Category');

      try {
        const data = await fetchData.find({}).toArray();
        console.log('Number of documents:', data.length);
        const dataCat = await fetchCat.find({}).toArray();
        console.log('Number of documents:', dataCat.length);
        global.fooditems=data;
        global.Category=dataCat;
        console.log(global.fooditems);
        console.log(global.Category);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };
  
  module.exports = mongoDb;
