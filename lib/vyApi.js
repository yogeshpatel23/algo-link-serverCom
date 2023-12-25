import { fvSearchScript } from "./finvasiaApi";
import { ftSearchScript } from "./flattradeApi";

export async function vySearchScript(broker, uid, stext, exch, token) {
  const data = { stat: "Not_ok" };
  let res;

  try {
    switch (broker) {
      case "finvasia":
        res = await fvSearchScript(uid, stext, exch, token);
        if (res.stat !== "Ok") {
          data["emsg"] = res.emsg;
        } else {
          data.stat = res.stat;
          data["values"] = res.values;
        }
        break;
      case "flattrade":
        res = await ftSearchScript(uid, stext, exch, token);
        if (res.stat !== "Ok") {
          data["emsg"] = res.emsg;
        } else {
          data.stat = res.stat;
          data["values"] = res.values;
        }
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}
