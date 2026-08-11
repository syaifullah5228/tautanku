"use client";
import { useState } from "react";
export default function Home(){
  const [nama,setNama]=useState("");
  const [bio,setBio]=useState("");
  const [wa,setWa]=useState("");
  const [ig,setIg]=useState("");
  const [links,setLinks]=useState([{title:"",url:""}]);
  const [hasil,setHasil]=useState("");
  const bikin=()=>{
    if(!nama||!wa)return alert("Nama & WA wajib diisi oon!");
    const slug=nama.toLowerCase().replace(/[^a-z0-9]/g,"");
    const data={nama,bio,wa,ig,links:links.filter(l=>l.title&&l.url)};
    const all=JSON.parse(localStorage.getItem("tautanku_bio")||"{}");
    all[slug]=data;
    localStorage.setItem("tautanku_bio",JSON.stringify(all));
    setHasil(`${window.location.origin}/${slug}`);
  };
  return(
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"white",padding:20,fontFamily:"sans-serif",maxWidth:500,margin:"0 auto"}}>
      <h1 style={{fontSize:32,fontWeight:800}}>tautanku<span style={{color:"#22c55e"}}>.bio</span></h1>
      <p style={{opacity:0.6,marginBottom:20}}>Bikin web bio link 10 detik.</p>
      <div style={{background:"#171717",padding:16,borderRadius:14,border:"1px solid #262626"}}>
        <input value={nama} onChange={e=>setNama(e.target.value)} placeholder="Username (contoh: syaiful)" style={{width:"100%",background:"#0a0a0a",border:"1px solid #333",borderRadius:8,padding:"12px 14px",color:"white",outline:"none",fontSize:14,marginTop:10}}/>
        <input value={bio} onChange={e=>setBio(e.target.value)} placeholder="Bio (Jualan Parfum Cirebon)" style={{width:"100%",background:"#0a0a0a",border:"1px solid #333",borderRadius:8,padding:"12px 14px",color:"white",outline:"none",fontSize:14,marginTop:10}}/>
        <input value={wa} onChange={e=>setWa(e.target.value)} placeholder="No WA 628xxxx" style={{width:"100%",background:"#0a0a0a",border:"1px solid #333",borderRadius:8,padding:"12px 14px",color:"white",outline:"none",fontSize:14,marginTop:10}}/>
        <input value={ig} onChange={e=>setIg(e.target.value)} placeholder="IG username" style={{width:"100%",background:"#0a0a0a",border:"1px solid #333",borderRadius:8,padding:"12px 14px",color:"white",outline:"none",fontSize:14,marginTop:10}}/>
        {links.map((l,i)=><div key={i} style={{display:"flex",gap:8,marginTop:10}}><input value={l.title} onChange={e=>{const n=[...links];n[i].title=e.target.value;setLinks(n)}} placeholder="Judul" style={{width:"100%",background:"#0a0a0a",border:"1px solid #333",borderRadius:8,padding:"12px 14px",color:"white",outline:"none",fontSize:14,flex:1}}/><input value={l.url} onChange={e=>{const n=[...links];n[i].url=e.target.value;setLinks(n)}} placeholder="https://" style={{width:"100%",background:"#0a0a0a",border:"1px solid #333",borderRadius:8,padding:"12px 14px",color:"white",outline:"none",fontSize:14,flex:1}}/></div>)}
        <button onClick={()=>setLinks([...links,{title:"",url:""}])} style={{marginTop:10,fontSize:13,opacity:0.7,background:"none",border:"1px dashed #333",color:"white",padding:"6px 10px",borderRadius:6,width:"100%"}}>+ Tombol</button>
        <button onClick={bikin} style={{width:"100%",marginTop:16,background:"#22c55e",color:"black",fontWeight:800,padding:14,borderRadius:10,border:"none"}}>Bikin Web Ku</button>
        {hasil&&<div style={{marginTop:16,background:"#0a0a0a",border:"1px solid #22c55e",padding:12,borderRadius:10}}><p style={{fontSize:12,opacity:0.6}}>Jadi! Link lu:</p><p style={{color:"#22c55e",fontWeight:700,wordBreak:"break-all"}}>{hasil}</p><button onClick={()=>{navigator.clipboard.writeText(hasil);alert("ke-copy!")}} style={{marginTop:8,background:"white",color:"black",padding:"6px 12px",borderRadius:6,border:"none",fontWeight:700}}>Copy</button></div>}
      </div>
    </main>
  );
}
