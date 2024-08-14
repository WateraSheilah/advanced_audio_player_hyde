export async function addTarget(name, targets) {
  const bearer = btoa(
    `${process.env.flussonic_user}:${process.env.flussonic_pass}`
  );
  const url = `${process.env.flussonic_url}${process.env.flussonic_endpoint}/${name}`;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      pushes: targets,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  });

  const data = await response.json();

  return data;
}

// {
//     url: "rtmps://live-api-s.facebook.com:443/rtmp/FB-6792928577450154-0-Abz0_OTxNBD3hLs9",
//     video_format: "pal",
//     disabled: false,
//     bitrate: 1000,
//     retry_limit: 20,
//     retry_timeout: 20,
//     timeout: 1,
//     volume: 1.0,
//   },
//   {
//     url: "rtmps://live-s.facebook.com:443/rtmp/FB-6792928577450154-0-Abz0_OTxNBD3hLs9",
//     video_format: "pal",
//     disabled: true,
//     bitrate: 1000,
//     retry_limit: 20,
//     retry_timeout: 20,
//     timeout: 1,
//     volume: 1.0,
//   },
//   {
//     url: "rtmps://live-s.facebook.com:443/rtmp/FB-6792928577450154-0-Abz0_OTxNBD3hLs9",
//     video_format: "pal",
//     disabled: true,
//     bitrate: 1000,
//     retry_limit: 20,
//     retry_timeout: 20,
//     timeout: 1,
//     volume: 1.0,
//   },
