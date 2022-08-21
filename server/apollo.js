// const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch')
// // const port = 8080;
// const resolvers = {
//   Query: {
//     hello: (_, args) => {
//       let value;
//       if (args.name) {
//         value = `Hello ${args.name}, nice to meet you!`
//       } else {
//         value = `Hello, nice to meet you!` 
//       }
//       return { value }
//     },
//     goodbye: (_, args) => {
//       let value;
//       if (args.name) {
//         value = `Goodbye ${args.name}, peace!`
//       } else {
//         value = `peace out!`
//       }
//       return { value }
//     }
//   }
// } 

// const typeDefs = gql`
//   type Hello {
//     value: String
//   }

//   type Goodbye {
//     value: String
//   }

//   type Query {
//     hello(name: String): Hello
//     goodbye(name: String): Goodbye   
//   }

//   type response {
//     status: String!
//     data: Data
//   }

//   type Data {
//     resultType: String
//     result: [Result]
//   }

//   type Result {
//     metric: Metric
//     values: [[Float,String]]
//   }
// `

// const server = new ApolloServer({
//   resolvers,
//   typeDefs,
// })

// const reqBody = `{
//     data: {
//       result
//     }
// }`
  // query: "query BytesInPerSec ($arg1: String) { hello (name: $arg1) { value },  }",
  // operationName: "BytesInPerSec",
  // variables: { "arg1": "Timothy" }

  // query: "query BytesInPerSec ($arg1: String) { hello (name: $arg1) { value } }",
  // operationName: "BytesInPerSec",

// {
//   "status": "success",
//   "data": {
//     "resultType": "matrix",
//     "result": [
//       {
//         "metric": {
//           "__name__": "kafka_server_broker_topic_metrics_bytesinpersec_rate",
//           "aggregate": "OneMinute",
//           "env": "cluster-demo",
//           "instance": "jmx-kafka:5556",
//           "job": "kafka",
//           "service": "kafka-broker"
//         },
//         "values": [
//           [ 1661021116.637, "0"],
//           [1661021146.64, "59.49625253268879"]
//         ]
//       },
//     ]
//   }
// }

// fetch("http://localhost:9090/api/v1/query?query=kafka_server_broker_topic_metrics_bytesinpersec_rate[5m]", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     query: `{
//       data {
//         result
//       }
//     }`
//   })
// })
// .then(res => res.json())
// .then(data => {
//   console.log('GraphQL fetch: ', data)
//   // console.log('result object', data.data.result)
// })
// .catch(err => {
//   console.log('Fetch error in graphQL: ', err)
// })


fetch("http://localhost:9090/api/v1/query", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(
    'query=kafka_server_broker_topic_metrics_bytesinpersec_rate[5m]'
  )
})
.then(res => res.json())
.then(data => {
  console.log('GraphQL fetch: ', data)
  // console.log('result object', data.data.result)
})
.catch(err => {
  console.log('Fetch error in graphQL: ', err)
})


// server.listen().then(({ url }) => {
//   console.log(` Server ready at ${url}`);
// });