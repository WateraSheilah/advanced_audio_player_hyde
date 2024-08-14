/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const nextConfig = (phase) => {
  // return {
  //   reactStrictMode: true,
  //   basePath: "",
  //   env: {
  //     flussonic_url:
  //       "https://media.hydeinnovations.com/streamer/api/v3/streams",
  //     flussonic_user: "hyde",
  //     flussonic_pass: "An0ther12",
  //     mongodb_domain: "127.0.0.1:27017",
  //     mongodb_url: "mongodb://",
  //     mongodb_user: "",
  //     mongodb_pass: "",
  //     mongodb_query_string: "replicaSet=rs0",
  //     mongodb_database: "h-streamer",
  //   },
  // };
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     reactStrictMode: true,
  //     basePath: "",
  //     env: {
  //       flussonic_domain: "s.hydeug.com",
  //       flussonic_srt_port: "20000",
  //       flussonic_rtmp_port: "1935",
  //       flussonic_url: "https://s.hydeug.com/",
  //       flussonic_endpoint: "streamer/api/v3/streams",
  //       flussonic_user: "hyde",
  //       flussonic_pass: "An0ther12",
  //       mongodb_domain: "127.0.0.1:27017",
  //       mongodb_url: "mongodb://",
  //       mongodb_user: "",
  //       mongodb_pass: "",
  //       mongodb_query_string: "replicaSet=rs0",
  //       mongodb_database: "h-streamer",
  //     },
  //   };
  // }
  return {
    reactStrictMode: true,
    basePath: "",
    env: {
      flussonic_domain: "streamer.hydeug.com",
      flussonic_srt_port: "20000",
      flussonic_rtmp_port: "1935",
      flussonic_url: "https://streamer.hydeug.com/",
      flussonic_endpoint: "streamer/api/v3/streams",
      flussonic_user: "hyde",
      flussonic_pass: "An0ther12",
      mongodb_domain: "db.hydeug.com:27017",
      mongodb_url: "mongodb://",
      mongodb_user: "",
      mongodb_pass: "",
      mongodb_query_string:
        "directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1?replicaSet=rs0",
      mongodb_database: "h-streamer",
    },
  };
  // return {
  //   reactStrictMode: true,
  //   basePath: "",
  //   env: {
  //     flussonic_domain: "s.hydeug.com",
  //     flussonic_srt_port: "20000",
  //     flussonic_rtmp_port: "1935",
  //     flussonic_url: "https://s.hydeug.com/",
  //     flussonic_endpoint: "streamer/api/v3/streams",
  //     flussonic_user: "hyde",
  //     flussonic_pass: "An0ther12",
  //     mongodb_domain: "hyde.9vshdl0.mongodb.net",
  //     mongodb_port: ":2117",
  //     mongodb_url: "mongodb+srv://",
  //     mongodb_user: "hyde:",
  //     mongodb_pass: "An0ther12@",
  //     mongodb_database: "h-streamer",
  //     mongodb_query_string: "retryWrites=true&w=majority",
  //   },
  // };
};

module.exports = nextConfig;
