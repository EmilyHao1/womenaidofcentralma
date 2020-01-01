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
        case '/about.html':
            sendFile(res, 'src/about.html')
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
        case '/css/icomoon.css':
            sendFile(res, 'css/icomoon.css', 'text/css')
            break
        case '/css/magnific-popup.css':
            sendFile(res, 'css/maginfic-popup.css', 'text/css')
            break
        case '/css/owl.carousel.min.css':
            sendFile(res, 'css/owl.carousel.min.css', 'text/css')
            break
        case '/css/owl.theme.default.min.css':
            sendFile(res, 'css/owl.theme.default.min.css', 'text/css')
            break
        case '/js/main.js':
            sendFile(res, 'js/main.js', 'text/javascript')
            break
        case '/js/modernizr-2.6.2.min.js':
            sendFile(res, 'js/modernizr-2.6.2.min.js', 'text/javascript')
            break
        case '/js/jquery.min.js':
            sendFile(res, 'js/jquery.min.js', 'text/javascript')
            break
        case '/js/jquery.easing.1.3.js':
            sendFile(res, 'js/jquery.easing.1.3.js', 'text/javascript')
            break
        case '/js/magnific-popup-options.js':
            sendFile(res, 'js/magnific-popup-options.js', 'text/javascript')
            break
        case '/js/bootstrap.min.js':
            sendFile(res, 'js/bootstrap.min.js', 'text/javascript')
            break
        case '/js/jquery.waypoints.min.js':
            sendFile(res, 'js/jquery.waypoints.min.js', 'text/javascript')
            break
        case '/js/owl.carousel.min.js':
            sendFile(res, 'js/owl.carousel.min.js', 'text/javascript')
            break
        case '/js/jquery.countTo.js':
            sendFile(res, 'js/jquery.countTo.js', 'text/javascript')
            break
        case '/js/jquery.magnific-popup.min.js':
            sendFile(res, 'js/jquery.magnific-popup.min.js', 'text/javascript')
            break
        case '/images/about.jpg':
            sendFile(res, 'images/about.jpg', 'image/jpg')
            break
        case '/images/about_narrow.jpg':
            sendFile(res, 'images/about_narrow.jpg', 'image/jpg')
            break
        case '/images/depressed.jpg':
            sendFile(res, 'images/depressed.jpg', 'image/jpg')
            break
        case '/images/depressedWomen.jpg':
            sendFile(res, 'images/depressedWomen.jpg', 'image/jpg')
            break
        case '/images/events.jpg':
            sendFile(res, 'images/events.jpg', 'image/jpg')
            break
        case '/images/events_narrow.jpg':
            sendFile(res, 'images/events_narrow.jpg', 'image/jpg')
            break
        case '/images/help.jpg':
            sendFile(res, 'images/help.jpg', 'image/jpg')
            break
        case '/images/help2.jpg':
            sendFile(res, 'images/help2.jpg', 'image/jpg')
            break
        case '/images/loader.jpg':
            sendFile(res, 'images/loader.jpg', 'image/jpg')
            break
        case '/images/new_profile.jpg':
            sendFile(res, 'images/new_profile.jpg', 'image/jpg')
            break
        case '/images/profile.jpg':
            sendFile(res, 'images/profile.jpg', 'image/jpg')
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