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

app.post('/webhook/odoo-product-variant-update', (req, res) => {
    console.log('Received webhook data for product variant update from Odoo:', req.body);
    // Process the webhook data here (e.g., sync to Shopify)
    res.status(200).send('Webhook received');
});

app.post('/webhook/odoo-purchase-order-created', (req, res) => {
    console.log('Received webhook data for purchase order created from Odoo:', req.body);
    // Process the webhook data here (e.g., sync to Shopify)
    res.status(200).send('Webhook received');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;