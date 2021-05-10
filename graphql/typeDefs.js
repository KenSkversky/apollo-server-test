const  {gql}  = require( "apollo-server");

const typeDefs = gql`
type Post {
    id: ID!
    name: String!
}
 type Query {
     posts: [Post]
 }
 `

 module.exports = typeDefs;
