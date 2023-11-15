const mongoose = require('mongoose');

mongoose.connect('mongodb://', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const shoeSchema = new mongoose.Schema({
  imageUrl: String,
  link: String,
  name: String,
});

const ShoeModel = mongoose.model('Shoe', shoeSchema);

ShoeModel.find({}, (err, data) => {
  if (err) throw err;
  
});

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormDataModel = mongoose.model('FormData', formDataSchema);

const formData = {
  name: 'Shoe shoe', // 
  email: 'aannsq23@gmail.com',
  message: 'goo',
};

const newFormData = new FormDataModel(formData);

newFormData.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Form data saved successfully');
  }
});
