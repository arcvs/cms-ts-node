import express from 'express';
import favicon from 'express-favicon';
import itemRoutesApi from '../components/articles/articles-api';
// import itemRoutesPage from './routes/itemRoutesPage';


import { mdlwrErrorHandler } from './mdlwrErrorHandler';



const app = express();

app.use(favicon(__dirname + '/../public/favicon.png'));
app.use(express.json());

// app.use(templateHandler);

// Routes
// app.use('/', itemRoutesPage);
app.use('/api/items', itemRoutesApi);

// Global error handler (should be after routes)
app.use(mdlwrErrorHandler);

export default app;

//.filter(file => file.endsWith(".js"))
