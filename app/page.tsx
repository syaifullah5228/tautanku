"use client";
import { useState } from "react";

export default function Home(){
  const [nama, setNama]=useState("");
  const [bio, setBio]=useState("");
  const [wa, setWa]=useState("");
  const [ig, setIg]=useState("");
  const [links, setLinks]=useState([{title:"", url:""}]);
  const [hasil, setHasil]=useState("");

  const bikin=()=>{
    if(!nama||!wa)return alert("Nama & WA wajib diisi!");
    const slug=nama.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const data={nama,bio,wa,ig,links:links.filter(l=>l.title&&l.url)};
    const all=JSON.parse(localStorage.getItem("tautanku_bio")||"{}");
    all[slug]=data;
    localStorage.setItem("tautanku_bio", JSON.stringify(all));
    setHasil(`${window.location.origin}/${slug}`);
  };

  const iS={background:"#262626",border:"1px solid #333",padding:12,borderRadius:8,color:"white",width:"100%"} as const;

  return(
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"white",padding:24}}>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <h1 style={{fontSize:32,fontWeight:800}}>Tautanku</h1>
        <p style={{opacity:.6,marginBottom:24}}>Bikin link bio lu</p>
        <div style={{background:"#171717",padding:20,borderRadius:16,display:"flex",flexDirection:"column",gap:12}}>
          <input value={nama} onChange={e=>setNama(e.target.value)} placeholder="Nama" style={iS}/>
          <input value={bio} onChange={e=>setBio(e.target.value)} placeholder="Bio" style={iS}/>
          <input value={wa} onChange={e=>setWa(e.target.value)} placeholder="WA 628..." style={iS}/>
          <input value={ig} onChange={e=>setIg(e.target.value)} placeholder="IG" style={iS}/>
          {links.map((l,i)=>(
            <div key={i} style={{display:"flex",gap:8}}>
              <input value={l.title} onChange={e=>{const n=[...links];n[i].title=e.target.value;setLinks(n)}} placeholder="Judul" style={iS}/>
              <input value={l.url} onChange={e=>{const n=[...links];n[i].url=e.target.value;setLinks(n)}} placeholder="https://" style={iS}/>
            </div>
          ))}
          <button onClick={()=>setLinks([...links,{title:"",url:""}])} style={{background:"#262626",padding:10,borderRadius:8}}> + Link</button>
          <button onClick={bikin} style={{background:"white",color:"black",padding:12,borderRadius:8,fontWeight:700}}>Bikin</button>
          {hasil&&<div style={{background:"#222",padding:12,borderRadius:8}}>Link: <a href={hasil} style={{color:"#4ade80"}}>{hasil}</a></div>}
        </div>
      </div>
    </main>
  )
}
