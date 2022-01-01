const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')
const connectDatabase = require('./config/database');
const userRoutes = require('./routes/UserRoutes');
const projectRoutes = require('./routes/ProjectRoutes');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDatabase();

app.use('/api', userRoutes);
app.use('/api', projectRoutes);

// deployment
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is Running!');
    })

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
        console.log(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running');
})