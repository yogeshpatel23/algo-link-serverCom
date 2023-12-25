import { sha256 } from "js-sha256";

const baseUrl = "https://piconnect.flattrade.in/PiConnectTP";

export async function fvGetToken(key, code, secret) {
  let payload = {
    api_key: key,
    request_code: code,
    api_secret: sha256(`${key}${code}${secret}`),
  };
  try {
    const response = await fetch(
      "https://authapi.flattrade.in/trade/apitoken",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    if (response.status !== 200) throw new Error(await response.json());
    return await response.json();
  } catch (error) {
    console.log(`token errror`);
    console.log(error);
  }
}

export async function ftSearchScript(uid, stext, exch, token) {
  let payload = {
    uid,
    stext,
  };
  if (exch != "ALL") payload["exch"] = exch;
  return await postCall("/SearchScrip", payload, token);
}

async function postCall(path, data, token) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    body: `jData=${JSON.stringify(data)}&jKey=${token}`,
  });
  return await response.json();
}
