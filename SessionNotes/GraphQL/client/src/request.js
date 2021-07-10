const endpointURL = "http://localhost:9000/graphql";

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
  const query = `
  {
    jobs{
      id
      title
      company{
        id
        name
      }
    }
  }
`;
  const { jobs } = await graphqlRequests(query);
  return jobs;
}

export async function loadCompany(id) {
  const query = `query CompanyQuery($id:ID!){
                    company(id:$id){
                      id
                      name
                      description
                    }
                  }`;

  const { company } = await graphqlRequests(query, { id });
  return company;
}

export async function loadJob(id) {
  const query = `query JobQuery($id:ID!){
                    job(id:$id){
                      id
                      title
                      company{
                        id
                        name
                      }
                      description
                    }
                  }`;

  const { job } = await graphqlRequests(query, { id });
  return job;
}
