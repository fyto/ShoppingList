const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let items = [];
let months = [];

app.get('/', (req, res) => 
{    
    res.send('Servidor de prueba');
});

app.get('/items', async (req, res) => 
{
    await open();
    res.json(items);
});

app.get('/months', async (req, res) => 
{
    await openMonth();
    res.json(months);
});

app.get('/items/:id', (req, res) => 
{
    res.send(`${req.params.id}`);
});

app.put('/items/:id', async (req, res) => 
{
    const id = req.params.id;
    await open();
    const index = items.findIndex(item => item.id === id);
    items[index].completed = !items[index].completed;
    await save();
    res.json(items[index]);
});

app.delete('/items/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    items = items.filter(item => item.id !== id);
    await save();
    res.json(items);
});

app.post('/items', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    items.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save()
{
    const res = await writeFile('data.json', JSON.stringify(items), 'utf-8');
}

async function open()
{
    const res = await readFile('data.json', 'utf-8');
    items = JSON.parse(res);
}

async function openMonth()
{   
    const res = await readFile('data.json', 'utf-8');
  
    items = JSON.parse(res);
}

app.listen(3000, () => 
{
    console.log('servidor iniciado...');
});