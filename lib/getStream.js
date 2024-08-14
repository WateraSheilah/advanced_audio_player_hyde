export async function getStream(name) {
  const bearer = btoa(
    `${process.env.flussonic_user}:${process.env.flussonic_pass}`
  );
  const url = `${process.env.flussonic_url}${process.env.flussonic_endpoint}/${name}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  });

  const data = await response.json();
  return data;
}
