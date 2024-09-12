export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Home</h1>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <a href="/About">Page1</a>
        <a href="/page2">Page2</a>
      </div>
    </div>
  );
}
  