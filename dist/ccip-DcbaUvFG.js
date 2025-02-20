import { i as h, I as m, B as p, g as w, s as g, d as E, c as O, a as b, e as x, H as y, b as M } from "./main-SvLAwke-.js";
function R(r, a) {
  if (!h(r, { strict: !1 }))
    throw new m({ address: r });
  if (!h(a, { strict: !1 }))
    throw new m({ address: a });
  return r.toLowerCase() === a.toLowerCase();
}
class S extends p {
  constructor({ callbackSelector: a, cause: t, data: n, extraData: i, sender: d, urls: s }) {
    var c;
    super(t.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: t,
      metaMessages: [
        ...t.metaMessages || [],
        (c = t.metaMessages) != null && c.length ? "" : [],
        "Offchain Gateway Call:",
        s && [
          "  Gateway URL(s):",
          ...s.map((f) => `    ${w(f)}`)
        ],
        `  Sender: ${d}`,
        `  Data: ${n}`,
        `  Callback selector: ${a}`,
        `  Extra data: ${i}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class $ extends p {
  constructor({ result: a, url: t }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${w(t)}`,
        `Response: ${g(a)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class A extends p {
  constructor({ sender: a, to: t }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${t}`,
        `OffchainLookup sender address: ${a}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const D = "0x556f1830", C = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function G(r, { blockNumber: a, blockTag: t, data: n, to: i }) {
  const { args: d } = E({
    data: n,
    abi: [C]
  }), [s, c, f, u, o] = d, { ccipRead: e } = r, k = e && typeof (e == null ? void 0 : e.request) == "function" ? e.request : T;
  try {
    if (!R(i, s))
      throw new A({ sender: s, to: i });
    const l = await k({ data: f, sender: s, urls: c }), { data: L } = await O(r, {
      blockNumber: a,
      blockTag: t,
      data: b([
        u,
        x([{ type: "bytes" }, { type: "bytes" }], [l, o])
      ]),
      to: i
    });
    return L;
  } catch (l) {
    throw new S({
      callbackSelector: u,
      cause: l,
      data: n,
      extraData: o,
      sender: s,
      urls: c
    });
  }
}
async function T({ data: r, sender: a, urls: t }) {
  var i;
  let n = new Error("An unknown error occurred.");
  for (let d = 0; d < t.length; d++) {
    const s = t[d], c = s.includes("{data}") ? "GET" : "POST", f = c === "POST" ? { data: r, sender: a } : void 0, u = c === "POST" ? { "Content-Type": "application/json" } : {};
    try {
      const o = await fetch(s.replace("{sender}", a).replace("{data}", r), {
        body: JSON.stringify(f),
        headers: u,
        method: c
      });
      let e;
      if ((i = o.headers.get("Content-Type")) != null && i.startsWith("application/json") ? e = (await o.json()).data : e = await o.text(), !o.ok) {
        n = new y({
          body: f,
          details: e != null && e.error ? g(e.error) : o.statusText,
          headers: o.headers,
          status: o.status,
          url: s
        });
        continue;
      }
      if (!M(e)) {
        n = new $({
          result: e,
          url: s
        });
        continue;
      }
      return e;
    } catch (o) {
      n = new y({
        body: f,
        details: o.message,
        url: s
      });
    }
  }
  throw n;
}
export {
  T as ccipRequest,
  G as offchainLookup,
  C as offchainLookupAbiItem,
  D as offchainLookupSignature
};
