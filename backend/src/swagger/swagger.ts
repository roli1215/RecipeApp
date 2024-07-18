const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Recipe App API',
        version: '1.0.0',
    },
    servers: [
        { url: 'http://localhost:3000' },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully.');
});
