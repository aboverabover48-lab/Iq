import{r,ok}from"./_r.js";
export default async(q,s)=>{if(!process.env.ADMIN_PASS||q.headers["x-pass"]!==process.env.ADMIN_PASS)return s.status(401).end();
if(q.method==="POST"){for(const id of(q.body?.ids||[]))if(ok(id)){const v=await r("GET","order:"+id);if(v){const d=JSON.parse(v);d.status="approved";await r("SET","order:"+id,JSON.stringify(d))}}return s.json({ok:1})}
const ids=await r("SMEMBERS","orders")||[];const out=[];for(const id of ids){const v=await r("GET","order:"+id);if(v)out.push({id,...JSON.parse(v)})}
out.sort((a,b)=>b.ts-a.ts);s.json(out)};
