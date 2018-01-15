const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
require('./routes/users.routes')(app);

app.listen(app.get('port'), () => {
    console.log(`App running on http://localhost:${app.get('port')}`);
})

