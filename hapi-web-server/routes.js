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
        method : '*',
        path : '/{any*}',
        handler : (request, h) => {
            return 'Halaman tidak di temukan';
        },
    },
];

module.exports = routes;