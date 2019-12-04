const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('../routes/examples.server.routes'),
    nodemailer = require("nodemailer");
    //formRouter = require('..routes/form.server.routes')

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    
    
    
    mongoose.connect(process.env.DB_URI || require('./config').db, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    
    
*/
    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    app.use('/api/example', exampleRouter);

    //app.use('api/form', )

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    app.post('/api/form', (req, res) => {
        console.log(req.body)
        const htmlEmail =`
        <h3>Customer's Contact Details</h3>
        <ul>
            <li>Name: ${req.body[0].name}</li>
            <li>Email: ${req.body[0].email}</li>
        </ul>
        <h3>Customer's Message</h3>
        <p>${req.body[0].message}</p>
        `

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: req.body[1],
                pass: req.body[2]
            }
        })

        var mailOptions = {
            from: req.body[0].email,
            to: req.body[1],
            subject: req.body[0].subject,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log('Email sent' + info.response)
            }
        })
    })

    app.post('/api/payment', (req, res) => {
        console.log(req.body)
    })

    return app
}

