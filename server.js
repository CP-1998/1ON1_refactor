const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.mongoose.connect(db.url, {
    useNewUrlParse: true,
    useUnifiedTypology: true 
})
.then(() => {
    console.log('Connected to the database!');
})
.catch ((err) => {
    console.log('There was an error while connecting to the database :/', err);
    process.exit();
});

require('./app/routes/userDetails.routes.js')(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
