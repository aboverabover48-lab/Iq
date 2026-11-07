import{r,ok}from"./_r.js";
export default async(q,s)=>{const id=q.query.id;if(!ok(id))return s.status(400).end();const v=await r("GET","order:"+id);
if(!v)return s.json({status:"none"});const d=JSON.parse(v);if(d.status!=="approved")return s.json({status:"pending"});delete d.img;s.json(d)};
