import Chip from "./Chip";
import { FaGlobe } from "react-icons/fa";

export default function CompanyProject({ title, description, bullets, url }) {
  return (
    <div className="pl-2 my-4">
      <div className="group flex flex-col md:flex-row md:items-center md:justify-between lg:items-center lg:justify-between">
        <h4 className="text-2xl flex-shrink-0">{title}</h4>
        {url && url !== "" && (
          <>
            <div className="hidden md:block group-hover:border-yellow-600 border-t-2 border-dashed border-gray-400 w-full mx-2 transition-colors duration-300 ease-in-out"></div>
            <div className="border-transparent border group-hover:text-yellow-600 transition-colors duration-700 my-2 max-w-max shadow-up-sm hover:shadow-down-sm active:shadow-down rounded-full px-2 py-1 cursor-pointer select-none">
              <a
                className="flex flex-row items-center gap-2 "
                target="_blank"
                rel="noreferrer"
                href={url}
              >
                <FaGlobe /> Explore
              </a>
            </div>
          </>
        )}
      </div>
      <div className="text-lg">{description}</div>
      {!bullets ||
        (bullets !== "" && (
          <ul className="pl-6 list-inside list-disc text-lg">
            {bullets?.map((bullet, index) => {
              if (bullet === "") return null;
              return (
                <div className="flex flex-row" key={index}>
                  <li className="list-disc" />
                  {bullet}
                </div>
              );
            })}
          </ul>
        ))}
    </div>
  );
}
