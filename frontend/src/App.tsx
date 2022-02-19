//! From library
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Policy from "./views/policy/Policy";

//! Style
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       policy: {
    //         keyArgs: false,
    //         merge(existing = [], incoming) {
    //           return [...existing, ...incoming];
    //         },
    //       },
    //     },
    //   },
    // },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/:page" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
