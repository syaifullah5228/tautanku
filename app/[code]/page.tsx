"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function Redirect() {
  const params = useParams();
  const code = params?.code as string;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tautanku") || "[]");
    const found = data.find((d: any) => d.code === code);
    if (found) {
      window.location.href = found.long;
    }
  }, [code]);

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <p>Mengarahkan...</p>
      <p style={{ fontSize: 13, opacity: 0.5, marginTop: 10 }}>Kode: {code}</p>
    </main>
  );
}
