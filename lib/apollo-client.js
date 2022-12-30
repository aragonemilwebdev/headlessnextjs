import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://headlessnextjs.emilaragon.website/graphql",
    cache: new InMemoryCache(),
});

export default client;