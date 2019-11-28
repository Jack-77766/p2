var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    dotenv   = require('dotenv')

dotenv.config();

// var DATABASE_URL = process.env.DATABASE_URL;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.DATABASE_URL, 
     { useNewUrlParser: true, useUnifiedTopology: true  },
     (err) => {
         if(err) {
            console.log(err);

         }
    console.log("Connected to DB");
});


app.get('/', (req, res) => {
    res.render('index');
});




app.listen(3000, 'localhost', () => {
    console.log("App Started");
});