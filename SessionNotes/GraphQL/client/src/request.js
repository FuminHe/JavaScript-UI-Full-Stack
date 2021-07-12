import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import gql from "graphql-tag";
const endpointURL = "http://localhost:9000/graphql";

// create a new client which allows cache capabilities
const client = new ApolloClient({
  link: new HttpLink({ uri: endpointURL }),
  cache: new InMemoryCache(),
});

export async function graphqlRequests(query, variables = {}) {
  const response = await fetch(endpointURL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const responseBody = await response.json();
  if (responseBody.errors) {
    const message = responseBody.errors.map((err) => err.message).join("\n");
    throw new Error(message);
  }
  return responseBody.data;
}

export async function loadJobs() {
  const query = gql`
    {
      jobs {
        id
        title
        company {
          id
          name
        }
      }
    }
  `;
  const { data } = await client.query({ query });
  // const { jobs } = await graphqlRequests(query);
  return data.jobs;
}

export async function loadCompany(id) {
  const query = gql`
    query CompanyQuery($id: ID!) {
      company(id: $id) {
        id
        name
        description
      }
    }
  `;
  const { data } = await client.query({
    query: query,
    variables: {
      id,
    },
  });
  // const { company } = await graphqlRequests(query, { id });
  return data.company;
}

export async function loadJob(id) {
  const query = gql`
    query JobQuery($id: ID!) {
      job(id: $id) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;

  const { data } = await client.query({
    query: query,
    variables: {
      id,
    },
  });
  // const { job } = await graphqlRequests(query, { id });
  return data.job;
}

export async function postJob(input) {
  const mutation = `
    mutation CreateJob($input: CreateJobInput) {
      job: createJob(input: $input) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;
  // const { data } = await client.query({
  //   mutation: mutation,
  //   variables: {
  //     input,
  //   },
  // });
  const { job } = await graphqlRequests(mutation, { input });
  return job;
}
