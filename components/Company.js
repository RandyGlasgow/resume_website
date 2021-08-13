export default function Company({ employer, start, end, role, children }) {
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-3xl">{employer}</h3>
        <div className="text-lg font-thin">
          {start} to {end}
        </div>
      </div>
      <h4 className='text-center md:text-left'>{role}</h4>
      {children}
    </div>
  );
}
