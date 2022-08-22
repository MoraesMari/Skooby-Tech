const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const coursesRouter = require('./src/routes/coursesRouter');
const homeRouter = require('./src/routes/homeRouter');
const profileUserRouter = require('./src/routes/profileuserRouter');
const checkoutRouter = require('./src/routes/checkoutRouter');
const internalCourseRouter = require('./src/routes/internalCourseRouter')
const cadastroRouter = require('./src/routes/cadastroRouter');
const cartRouter = require('./src/routes/cartRouter');
const playcourseRouter = require('./src/routes/playcourseRouter');
const indexRouter = require('./src/routes/index');
const studentsRouter = require('./src/routes/studentsRouter'); 
const studentsValidator = require('./src/middlewares/studentsValidator');
const coursesValidator = require('./src/middlewares/coursesValidator');
const { appendFileSync } = require('fs');
const { application } = require('express');
const studentIsLogged = require('./src/middlewares/studentsValidator');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'src','views'));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/', studentsRouter);
app.use('/', coursesRouter);
app.use('/', internalCourseRouter);
app.use('/', homeRouter);
app.use('/', cadastroRouter);

app.use(studentIsLogged);
app.use('/', profileUserRouter);
app.use('/', checkoutRouter);
app.use('/', cartRouter);
app.use('/', playcourseRouter);



app.listen(3000, () => console.log('Aplicação iniciada em http://localhost:3000'));  
