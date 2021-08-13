export default function Section({ title, children }) {
  return (
    <div className="p-4">
      <h2 className="text-4xl sm:text-5xl font-sans tracking-widest">{title}</h2>
      {children}
    </div>
  );
}
