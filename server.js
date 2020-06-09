const express = require('express');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const users = require("./users");
const SECRETKEY = "3264128_TESODEV_3264128";
let app = express();
let port = process.env.PORT || 8090;
let contentPath = path.resolve(__dirname + '/dist');
let compiler;

if(process.env.NODE_ENV === 'development'){
    compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: false,
        publicPath: webpackConfig.output.publicPath,
        stats: true
    }));
    app.use(require("webpack-hot-middleware")(compiler));
}
else {
    app.get('*.js', function (req, res, next) {
        req.url = req.url + '.gz';
        res.set('Accept-Encoding', 'gzip');
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/javascript');
        next();
    });

    app.get('*.css', function (req, res, next) {
        req.url = req.url + '.gz';
        res.set('Accept-Encoding', 'gzip');
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/css');
        next();
    });
}

app.use( bodyParser.json() );
app.use(express.static(contentPath));

app.get('*', function (req, res) {
    if(process.env.NODE_ENV === 'development'){
        let filename = path.join(compiler.outputPath,'index.html');
        compiler.outputFileSystem.readFile(filename, function(err, result){
            if (err) {
                return next(err);
            }
            res.set('content-type','text/html');
            res.send(result);
            res.end();
            console.log("TESODEV vebpeyc designer loaded");
        });
    }
    else{
        let indexHtml = fs.readFileSync(path.join(contentPath, 'index.html'), 'utf8');
        console.log("TESODEV vebpeyc designer loaded");
        res.send(indexHtml)
    }
});

app.post('/login', function (req, res) {
    let {username, password} = req.body;
    let index = users.findIndex(u=>u.username===username&&u.password===password);
    if(index>-1){
        let authUser = {...users[index]};
        delete authUser.password;
        const token = jwt.sign(authUser, SECRETKEY);
        res.json({
            success: true,
            authUser,
            token
        })
    }
    else{
        res.json({
            success: false
        });
    }
});

app.post('/verifyToken', function (req, res) {
    let {token} = req.body;
    jwt.verify(token, SECRETKEY, function(err, decoded) {
        res.json({
            success: !err,
            authUser: decoded
        });
    });
});

app.listen(port, function () {
    console.log("TESODEV vue-app is listening on port " + port + "!");
});
