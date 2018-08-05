const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// code=4/MgBqtqXIQrpQJaYPFgVIOQG0qrBnXccprDuUbLCW7Z4xhcZenzTiukhW-PihaUjfB5Nyng7JppCqglBpWEDQJkk#
