const {ApolloServer} = require("apollo-server") ;
const resolvers= require("./graphql/resolvers");
const typeDefs= require("./graphql/typeDefs");
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require( 'mongoose');

const { PORT, DB_URI, DB_NAME } = process.env;

const startServer = async() => {
    // DB
    await mongoose.connect( DB_URI,
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        );
        console.log( 'DB Connected - ', DB_NAME + ' instance');
    // Apollo
    const server = new ApolloServer({ typeDefs, resolvers });
    try {
        const { url } = await server.listen(PORT);
        console.log(`Apollo Server ready at ${url}`);
    } catch(err) {
        throw new Error(err);
    }
}


  startServer();
