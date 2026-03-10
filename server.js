import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Shopify Odoo Integration!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;