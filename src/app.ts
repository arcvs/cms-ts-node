import express from 'express';
import apiRoutes from './routes/apiRoutes';
import pageRoutes from './routes/pageRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/', pageRoutes);
// app.use('/api/items', apiRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;

//.filter(file => file.endsWith(".js"))
