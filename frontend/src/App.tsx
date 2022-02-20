//! From library
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Policy from "./views/policy/Policy";

//! From local
import Landing from "./hoc/Landing";
import Navbar from "./components/navbar/Navbar";

//! Style
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({}),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
