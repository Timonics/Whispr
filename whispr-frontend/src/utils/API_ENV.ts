const env = "development";

let api: string;
if (env === "development") {
  api = "http://localhost:5002/api/v1";
} else {
  api = "";
}

export { api };
