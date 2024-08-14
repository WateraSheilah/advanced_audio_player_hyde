import { hashPassword } from "./password";

export async function addStream({
  title,
  name,
  id,
  password,
  flussonic_user,
  flussonic_pass,
}) {
  const bearer = btoa(`hyde:An0ther12`);
  // const url = `${process.env.flussonic_url}${process.env.flussonic_endpoint}/${name}`;
  const url = `${process.env.flussonic_url}${process.env.flussonic_endpoint}/${name}`;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      title: name,
      disabled: false,
      static: true,
      inputs: [
        {
          url: "publish://",
          source_timeout: 20,
          timeout: 20,
          priority: 1,
          max_bitrate: 2000,
          latency: 200,
          streamid: id,
          prefer_codec: "h264",
        },
      ],
      source_timeout: 20,
      // password: hashedPassword,
      protocols: {
        whitelist: true,
        dash: false,
        hls: true,
        mss: false,
        rtmp: true,
        rtsp: false,
        m4f: false,
        m4s: false,
        mseld: false,
        srt: false,
        shoutcast: false,
        mp4: false,
        jpeg: false,
        api: true,
        webrtc: true,
        tshttp: false,
        mseld: true,
        player: true,
        rtsp: false,
      },
      pushes: [],
    }),

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  });

  const data = await response.json();
  return data;
}
