export default function Education({ school, degree, concentration, end }) {
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <h3 className="text-2xl text-center md:text-left">{school}</h3>
        <div className='text-center md:text-left'>{end}</div>
      </div>
      <div className='text-center md:text-left'>
        {degree} in {concentration}
      </div>
    </div>
  );
}
