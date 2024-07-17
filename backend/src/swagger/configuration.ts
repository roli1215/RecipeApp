import swaggerAutogen from 'swagger-autogen';

const options = {
      info: {
        title: 'Recipe App API',
        version: '1.0.0',
      },
      servers:[
        {url:'http://localhost:3000'}, 
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerformat: 'JWT',
            },
        },
        },
        security : [
            {
                bearerAuth: []
            }
]

    };
    
const specs = ['./routes/index.ts'];
swaggerAutogen({openapi: '3.0.0'})(specs, options);