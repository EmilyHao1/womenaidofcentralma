var http = require('http')
    , fs   = require('fs')
    , url  = require('url')
    , port = 8080;

var server = http.createServer (function (req, res) {
    var uri = url.parse(req.url)

    switch( uri.pathname ) {
        case '/':
            sendFile(res, 'src/index.html')
            break
        case '/index.html':
            sendFile(res, 'src/index.html')
            break
        case '/contact.html':
            sendFile(res, 'src/contact.html')
            break
        case '/events.html':
            sendFile(res, 'src/events.html')
            break
        case '/HowToHelp.html':
            sendFile(res, 'src/HowToHelp.html')
            break
        case '/PastHelped.html':
            sendFile(res, 'src/PastHelped.html')
            break
        case '/RequestHelp.html':
            sendFile(res, 'src/RequestHelp.html')
            break
        case '/css/style.css':
            sendFile(res, 'css/style.css', 'text/css')
            break
        case '/css/animate.css':
            sendFile(res, 'css/animate.css', 'text/css')
            break
        case '/css/bootstrap.css':
            sendFile(res, 'css/bootstrap.css', 'text/css')
            break
        case '/css/flexslider.css':
            sendFile(res, 'css/flexslider.css', 'text/css')
            break
        case '/css/magnific-popup.css':
            sendFile(res, 'css/maginfic-popup.css', 'text/css')
            break
        case '/js/main.js':
            sendFile(res, 'js/main.js', 'text/javascript')
            break
        case '/js/modernizr-2.6.2.min.js':
            sendFile(res, 'js/modernizr-2.6.2.min.js', 'text/javascript')
            break

        case '/img/sleeping.jpg':
            sendFile(res, 'public/img/sleeping.jpg', 'image/jpg')
            break
        case '/img/sleepthumb.jpg':
            sendFile(res, 'public/img/sleepthumb.jpg')
            break
        case '/img/babysleeping.jpg':
            sendFile(res, 'public/img/babysleeping.jpg')
            break
        case '/img/catsleeping.jpg':
            sendFile(res, 'public/img/catsleeping.jpg')
            break
        case '/img/dogsleep2.jpg':
            sendFile(res, 'public/img/dogsleep2.jpg')
            break
        case '/img/dogsleeping.jpg':
            sendFile(res, 'public/img/dogsleeping.jpg')
            break
        case '/img/log-sleep.jpg':
            sendFile(res, 'public/img/log-sleep.jpg')
            break
        case '/img/yearner.jpg':
            sendFile(res, 'public/img/yearner.jpg')
            break
        case '/img/soldier.jpg':
            sendFile(res, 'public/img/soldier.jpg')
            break
        case '/img/freefaller.jpg':
            sendFile(res, 'public/img/freefaller.jpg')
            break
        case '/img/starfish.jpg':
            sendFile(res, 'public/img/starfish.jpg')
            break
        case '/img/fetal.jpg':
            sendFile(res, 'public/img/fetal.jpg')
            break
        case '/img/monster.jpg':
            sendFile(res, 'public/img/monster.jpg')
            break

        default:
            res.end('404 not found')
    }
})
server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, contentType) {
    contentType = contentType || 'text/html';

    fs.readFile(filename, function(error, content) {
        res.writeHead(200, {'Content-type': contentType})
        res.end(content, 'utf-8')
    })

}