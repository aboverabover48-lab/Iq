const U=process.env.UPSTASH_REDIS_REST_URL||process.env.KV_REST_API_URL,K=process.env.UPSTASH_REDIS_REST_TOKEN||process.env.KV_REST_API_TOKEN;
export const r=async(...c)=>(await(await fetch(U,{method:"POST",headers:{Authorization:"Bearer "+K},body:JSON.stringify(c)})).json()).result;
export const ok=id=>/^o[a-z0-9]{6,30}$/.test(id||"");
