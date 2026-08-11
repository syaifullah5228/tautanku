"use client";
import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");
  const [loading, setLoading] = useState(false);

  const pendekin = () => {
    if (!url) return;
    setLoading(true);
    const code = Math.random().toString(36).substring(2, 7);
    const domain = window.location.origin;
    setTimeout(() => {
      setShort(`${domain}/${code}`);
      setLoading(false);
      const history = JSON.parse(localStorage.getItem("tautanku") || "[]");
      history.unshift({ long: url, short: `${domain}/${code}`, code });
      localStorage.setItem("tautanku", JSON.stringify(history.slice(0, 10)));
    }, 600);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 8 }}>tautanku<span style={{ color: "#22c55e" }}>.link</span></h1>
      <p style={{ opacity: 0.6, marginBottom: 40 }}>Pemendek tautan tercepat, gratis, tanpa ribet.</p>
      
      <div style={{ background: "#171717", border: "1px solid #262626", borderRadius: 16, padding: 20, width: "100%", maxWidth: 560 }}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Tempel tautan panjangmu disini..."
          style={{ width: "100%", background: "#0a0a0a", border: "1px solid #333", borderRadius: 10, padding: "14px 16px", color: "white", outline: "none", fontSize: 16 }}
        />
        <button
          onClick={pendekin}
          style={{ width: "100%", marginTop: 12, background: "#22c55e", color: "black", fontWeight: 700, borderRadius: 10, padding: 14, border: "none", fontSize: 16, cursor: "pointer" }}
        >
          {loading ? "Memendekkan..." : "Pendekin Sekarang →"}
        </button>
        {short && (
          <div style={{ marginTop: 16, background: "#0a0a0a", border: "1px dashed #22c55e", borderRadius: 10, padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#22c55e", fontWeight: 600 }}>{short}</span>
            <button onClick={() => navigator.clipboard.writeText(short)} style={{ background: "white", color: "black", borderRadius: 6, padding: "6px 12px", border: "none", fontWeight: 600, fontSize: 13 }}>Copy</button>
          </div>
        )}
      </div>
      <p style={{ marginTop: 30, fontSize: 13, opacity: 0.4 }}>Versi 1.0 - Dibuat oleh syaifullah5228</p>
    </main>
  );
}
