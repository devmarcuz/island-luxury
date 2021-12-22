import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmVjNGNlY2ZhYmE5MjMxY2NkOTcyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDY0OTUyMiwiZXhwIjoxNjM0OTA4NzIyfQ.boernoDrCghFp3qipzRS2fqxXfJvERH3_5Zq36Jw-sk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
