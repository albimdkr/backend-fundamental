// REQUEST BODY

// const http = require('http');
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');

//     response.statusCode = 200;
//     response.end('<h1>Success!</h1>');
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server it's running in http://${host}:${port}`);
// });

//=======================================

// const http = require('http');

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;

//     response.end('<h2>Hello Server!</h2>');
// };

// const server = http.createServer(requestListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host,() => {
//     console.log(`Server its run on ${host}:${port}`); 
// });

//=======================================

// const http = require('http');

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type','text/html');

//     response.statusCode = 200;
//     response.end('<h3>Hello Server!</h3>');
// };

// const server = http.createServer(requestListener);

// const port = 4500;
// const host = 'localhost';


// server.listen(port, host, () => {
//     console.log(`server run http://${host}:${port}`);
// });

//=======================================

// const http = require('http');

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;

//     const { method } = request;

//     if(method === 'GET'){
//         response.end("<h2>Hello, can i help you?</h2>");
//     }
    
//     if(method === 'POST'){
//         response.end("<h2>Oke, wait</h2>");
//     }

//     if(method === 'PUT'){
//         response.end("<h2>I can go again</h2>");
//     }

//     if(method === 'DELETE'){
//         response.end("<h2>Are you sure?</h2>");
//     }
// };

// const server = http.createServer(requestListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Your server coffee table in http://${host}:${port}`)
// });

// const http = require('http');

// const requireListener = (request, response) =>{
//     response.setHeader('Content-Type', 'text/html');

//     response.statusCode = 200;
//     const { method } = request;

//     if(method === 'GET'){
//         response.end('<h2>Hello from GET</h2>');
//     } else if(method === 'POST'){
//         response.end('<h2>Helo From POST</h2>')
//     } else if(method === 'PUT'){
//         response.end('<h2>Hello, From PUT</h2>');
//     } else if(method === 'DELETE'){
//         response.end('<h2>Hello, From DELETE</h2>')
//     } else {
//         response.end('<h2>Sorry not found!</h2>')
//     }
// };


// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });




// const http = require('http');

// const requireListener = (request, response) =>{
//     response.setHeader('Content-Type', 'text/html');

//     response.statusCode = 200;
//     const { method } = request;

//     if(method === 'GET'){
//         response.end('<h2>Hello from GET</h2>');
//     } else if(method === 'POST'){
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body);
//             response.end(`<h1>Hello, ${name}!</h1>`);
//         });
//     } 
// };

// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });



// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     const statusCode = 200;

//     const { method } = request;

//     if(method === 'GET'){
//         response.end('</h1>Hallo From GET<h1>');
//     }

//     if(method === 'POST'){
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body);
//             response.end(`<h1>Hallo From ${name}!</h1>`);
//         });
//     }
// }

// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Your Server Running on http://${host}:${port}`);
// });



// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     const statusCode = 200;

//     const { method } = request;
//     if (method === 'GET'){
//         response.end('<h1>Hallo From GET</h1>');
//     } else if (method === 'POST'){
//         let body = [];

//         request.on('data', (chunk)=> {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const {name} = JSON.parse(body);
//             response.end(`Hello My Name is ${name} from POST`);
//         });
//     };
// };

// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Your server run http://localhost${host}:${port}`);
// });


// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type','text/html');
//     const statusCode = 200;

//     const { method } = request;
//     if (method === 'GET'){
//         response.end('<h1>Hello GET</h1>');
//     };

//     if (method === 'POST'){
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body);
//             response.end(`<h1> Hallo I am ${name} from POST</h1>`);
//         });
//     };
// };

// const server = http.createServer(requireListener);
// const port = 5500;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Your server http://${host}:${port}`);
// });



// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     const statusCode = 200;

//     const { method } = request;
//     if(method === 'GET'){
//         response.end('<h1>Hello From GET</h1>');
//     }

//     if(method === 'POST'){
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body);
//             response.end(`<h1> Hello Iam ${name}</h1>`);
//         });
//     };
// };

// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen( port, host,() => {
//     console.log(`Your server run http://${host}:${port}`);
// });

// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     const statusCode = 200;

//     const { method } = request;
//     if(method === 'GET'){
//         response.end(`<h1> Hallo From GET</h1>`);
//     };

//     if(method === 'POST'){
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body);
//             response.end(`Hello Iam ${name} From POST`);
//         });
//     };
// };

// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server running https://${host}:${port}`);
// });

//
// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     const statusCode = 200;

//     const {method} = request;
//     if(method === 'GET'){
//         response.end(`<h1>Hallo From GET</h1>`);
//     };

//     if(method === 'POST'){
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const {name} = JSON.parse(body);
//             response.end(`Hello Iam ${name} FROM POST`);
//         });
//     };
// };

// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Your Server http://${host}:${port}`);
// });

//=======================================

//ROUTING REQUEST

// const http = require('http');
// const requireListener = (request, response) => {
//     response.setHeader('Content-Type', 'application/json');
//     response.setHeader('X-Powered-By', 'Nodejs');
//     // response.statusCode = 200;
    
//     const { method, url } = request;

//     if(url === '/'){
//         if( method === 'GET'){
//             response.statusCode = 200;
//             response.end( JSON.stringify({
//                 message : 'Home'
//             }));

//         } else if ( method === 'POST'){
//             let body = [];

//             request.on('data', (chunk) => {
//                 body.push(chunk);
//             });

//             request.on('end', () => {
//                 body = Buffer.concat(body).toString();
//                 const {name} = JSON.parse(body);
//                 response.statusCode = 200;
//                 response.end(JSON.stringify({
//                     message : `this is page home with ${method}`
//                 }));
//             });

//         } else {
//             response.statusCode = 400;
//             response.end( JSON.stringify({
//                 message : ` 400 : Page not found with ${method}`
//             }));
//         }

//     } else if (url === '/about'){
//         if( method === 'GET'){
//             response.statusCode = 200;
//             response.end( JSON.stringify({
//                 message : 'about',
//             }));
//         } else if ( method === 'POST'){
//             let body = [];

//             request.on('data', (chunk) => {
//                 body.push(chunk);
//             });

//             request.on('end', () => {
//                 body = Buffer.concat(body).toString();
//                 const {name} = JSON.parse(body);
//                 response.statusCode = 200;
//                 response.end(JSON.stringify({
//                     message : 'about GET',
//                 }));
//             });
//         } else {
//             response.statusCode = 400;
//             response.end(({
//                 message : `400 : Page not found with ${method}`
//             }));
//         };  
        
//     } else {
//         response.statusCode = 404;
//         response.end(JSON.stringify({
//             message : ' 404 : not found!'
//         }));
//     }
// };


// const server = http.createServer(requireListener);
// const port = 5000;
// const host = 'localhost';

// server.listen (port, host, () => {
//     console.log(`Your server running at http://${host}:${port}`);
// });

const http = require ('http');

const requireListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    const statusCode = 200;


    const { method, url } = request;
    if(url === '/'){
        if( method === 'GET'){
            response.statusCode = 200;
            response.end('<h1> Hallo From GET in HOME</h1>');
        }else if ( method === 'POST'){
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
    
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1> Hallo iam ${name}From POST in HOME</h1>`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>400 : Bad Request</h1>`);
        };
    } else if (url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(`<h1> hallo From GET in about</h1>`);
        } else if ( method === 'POST') {
            response.statusCode = 200;
            response.end(`<h1>Hallo From POST in about</h1>`);
        } else {
            response.statusCode = 400;
            response.end(`<h1>400 : Bad Request</h1>`);
        };
    } else {
        response.statusCode = 404;
        response.end(`404 : Not Found`);

    };
};
const server = http.createServer(requireListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Your Server its Running on http://${host}:${port}`);
});