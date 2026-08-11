use client";
import { useState } from "react";

export default function Home() {
  const [nama, setNama] = useState("");
  const [bio, setBio] = useState("");
  const [wa, setWa] = useState("");
  const [ig, setIg] = useState("");
  const [links, setLinks] = useState([{ title: "", url: "" }]);
  const [hasil, setHasil] = useState("");

  const bikin = () => {
    if (!nama || !wa) return alert("Nama & WA wajib diisi!");
    
    const slug = nama.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const data = { nama, bio, wa, ig, links: links.filter(l => l.title && l.url) };
    
    const all = JSON.parse(localStorage.getItem("tautanku_bio") || "{}");
    all[slug] = data;
    localStorage.setItem("tautanku_bio", JSON.stringify(all));
    
    setHasil(`${window.location.origin}/${slug}`);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800
