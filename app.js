const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('src'));
app.set('view engine', 'ejs');

// Static Files
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 9797;

app.get('/', (req, res) => {
    res.render('map');
});

app.listen(port, () => {
    console.log(`App listening @${port}`);
});
