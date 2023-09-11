const express = require('express');
const router = express.Router();

// Routes
const productRouter = require('./product.route');
const sellerRouter = require('./seller.route');
const organizationRouter = require('./organization.route');

const routes = [
    {
        path: '/product',
        router: productRouter
    },
    {
        path: '/seller',
        router: sellerRouter
    },
    {
        path: "/organization",
        router: organizationRouter
    }
]


routes.forEach((route) => {
    router.use(route.path,route.router);
})

module.exports = router;