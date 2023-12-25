import { sha256 } from "js-sha256";

const baseUrl = "https://api.shoonya.com/NorenWClientTP/";
export const wsUrl = "wss://api.shoonya.com/NorenWSTP/";

export async function fvGetToken(uid, password, otp, vc, key) {
  let payload = {
    apkversion: "1.0.0",
    uid: uid,
    pwd: sha256(password),
    factor2: otp,
    vc: vc,
    appkey: sha256(`${uid}|${key}`),
    imei: "abc1234",
    source: "API",
  };

  const res = await fetch("https://api.shoonya.com/NorenWClientTP/QuickAuth", {
    method: "POST",
    body: `jData=${JSON.stringify(payload)}`,
  });
  return await res.json();
}

export async function fvSearchScript(uid, stext, exch, token) {
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
