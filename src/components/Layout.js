export function Layout({ children }) {
  return (
    <div className="2xl:flex 2xl:justify-center">
      <div className="margin">
        <main>{children}</main>
      </div>
    </div>
  );
}
