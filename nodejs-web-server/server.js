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

const http = require('http');
const requireListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    
    const { method, url } = request;

    if(url === '/'){
        if( method === 'GET'){
            response.end(`<h1 style='text-align : center'>Home</h1>`);
        } else {
            response.end(`<h1 style='text-align : center'> 404 : Page Not Found With ${method}</h1>`);
        }

    } else if (url === '/about'){
        if( method === 'GET'){
            response.end(`<h1 style='text-align : center'>About From GET</h1>`);
        } else if ( method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1 style='text-align : center'>About ${name} From POST</h1>`);
            });
        } else {
            response.end(`<h1 style='text-align : center'> 404 : Page Not Found With ${method}</h1>`);
        }
        
    } else if (url === '/setting'){
        response.end(`<h1 style='text-align : center'>Setting</h1>`);
    } else {
        response.end(`<h1 style='text-align : center'> 404 : Page Not Found!</h1>`);
    }
};


const server = http.createServer(requireListener);
const port = 5000;
const host = 'localhost';

server.listen (port, host, () => {
    console.log(`Your server running at http://${host}:${port}`);
});





