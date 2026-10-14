export default function NotFound() {
  return (
    <div className="page" style={{ minHeight: "70vh", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <span className="logo big" role="img" aria-label="AK logo" />
      <h1>Page not found</h1>
      <a className="btn primary" href="/">
        Back to the homepage
      </a>
    </div>
  );
}
