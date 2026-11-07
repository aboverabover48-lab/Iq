import{r,ok}from"./_r.js";
export default async(q,s)=>{if(q.method!=="POST")return s.status(405).end();const b=q.body||{};
if(!ok(b.id)||!b.name||typeof b.img!=="string"||b.img.length>400000||!b.img.startsWith("data:image/"))return s.status(400).end();
if(await r("EXISTS","order:"+b.id))return s.status(409).end();
const d={name:String(b.name).slice(0,80),age:+b.age|0,iq:Math.min(140,Math.max(60,+b.iq|0)),right:+b.right|0,cat:b.cat||{},img:b.img,status:"pending",ts:Date.now()};
await r("SET","order:"+b.id,JSON.stringify(d));await r("SADD","orders",b.id);s.json({ok:1})};
