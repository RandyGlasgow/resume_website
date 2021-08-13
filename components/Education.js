export default function Education({ school, degree, concentration, end }) {
  return (
    <div className="my-8">
      <div className="flex flex-row justify-between">
        <h3 className="text-2xl">{school}</h3>
        <div>{end}</div>
      </div>
      <div>
        {degree} in {concentration}
      </div>
    </div>
  );
}
