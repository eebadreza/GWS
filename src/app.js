import express from 'express';
const app = express();
// import ejs from 'ejs';

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.json());
app.set('view engine', 'ejs');

const port = 9797;
app.listen(process.env.PORT || port, () => {
    console.log('server @9797');
});

app.get('/', (req, res) => {
    res.render('map');
});
