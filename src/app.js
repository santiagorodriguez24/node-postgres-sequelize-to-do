import express from 'express';
import morgan from 'morgan';
import projectsRoutes from './routes/projectsRoutes';
import tasksRoutes from './routes/tasksRoutes';

const app = express();

// Middlewares
// morgan sirve para ver en consola la las peticiones que van llegando
app.use(morgan('dev'));
// para que el servidor entienda datos en formato json
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);

export default app;