const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return 'Homepage';
        },
    },

    {
        method : '*',
        path : '/',
        handler : (request, h) => {
            return 'Halaman tidak tersedia';
        },
    },

    {
        method : 'GET',
        path : '/about',
        handler : (request, h) => {
            return 'About page';
        },
    },

    {
        method : 'GET',
        path : '/hello/{name?}',
        handler : (request, h) => {
            const {name = "not found!"} = request.params;
            const { lang } = request.query;

            if( lang === 'id'){
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
    },

    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) => {
            return 'Halaman tidak di temukan';
        },
    },
];

module.exports = routes;