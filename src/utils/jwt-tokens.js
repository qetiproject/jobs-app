import jsonwebtoken from "jsonwebtoken";

export const JSON_WEB_TOKEN_SECRET = "my-super-secret";

export function createAccessToken(payload) {
  return jsonwebtoken.sign(payload, JSON_WEB_TOKEN_SECRET, {
    expiresIn: "1d",
  });
}
