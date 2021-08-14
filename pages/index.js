import Head from "next/head";
import Image from "next/image";
// import * as FaIcons from "react-icons/fa";
import React, { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaFilePdf,
  FaGithubAlt,
} from "react-icons/fa";
import { API_URL } from "../config/index";
import Layout from "../components/Layout";
import Chip from "../components/Chip";
import Section from "../components/Section";
import Company from "../components/Company";
import CompanyProject from "../components/CompanyProject";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home({
  companies,
  educations,
  skills,
  btnLinkedIn,
  btnGithub,
  btnResume,
}) {
  const defaultChips = skills;
  const [chips, setChips] = useState(defaultChips);
  const [selected, setSelected] = useState("");

  const filterChips = (e) => {
    if (e.target.name === "") setChips(defaultChips);
    else setChips(defaultChips.filter((el) => el.category === e.target.name));

    setSelected(e.target.name);
  };

  console.log(btnResume);
  return (
    <Layout title="Randy Glasgow">
      <div className="mx-auto p-4 space-y-4" id="title">
        <h1 className="text-5xl sm:text-7xl font-sans text-center">
          Randy Glasgow
        </h1>
        <div className="max-w-max flex flex-row p-1 gap-4 rounded-md mx-auto">
          {btnLinkedIn && (
            <a
              href={btnLinkedIn.url}
              target="_blank"
              rel="noreferrer"
              className="text-4xl p-2 rounded-md shadow-up-sm active:shadow-down-sm hover:text-yellow-600 transition-all duration-200 select-none"
            >
              <FaLinkedin />
            </a>
          )}
          {btnGithub && (
            <a
              href={btnGithub.url}
              target="_blank"
              rel="noreferrer"
              className="text-4xl p-2 rounded-md shadow-up-sm active:shadow-down-sm hover:text-yellow-600 transition-all duration-200 select-none"
            >
              <FaGithub />
            </a>
          )}
          {btnResume && (
            <a
              href={`${btnResume?.resume?.url}`}
              download
              className="text-4xl p-2 rounded-md shadow-up-sm active:shadow-down-sm hover:text-yellow-600 transition-all duration-200 select-none"
            >
              <FaFilePdf />
            </a>
          )}
        </div>
      </div>

      <Section title="Skills & Tools">
        <div className="flex flex-row flex-wrap gap-2 text-lg">
          <a
            onClick={filterChips}
            name=""
            className={`select-none cursor-pointer hover:text-yellow-600 ${
              selected === "" && "text-yellow-600"
            }`}
          >
            #All
          </a>
          <a
            onClick={filterChips}
            name="#tool"
            className={`select-none cursor-pointer hover:text-yellow-600 ${
              selected === "#tool" && "text-yellow-600"
            }`}
          >
            #Tools
          </a>
          <a
            onClick={filterChips}
            name="#framework"
            className={`select-none cursor-pointer hover:text-yellow-600 ${
              selected === "#framework" && "text-yellow-600"
            }`}
          >
            #Frameworks
          </a>
          <a
            onClick={filterChips}
            name="#language"
            className={`select-none cursor-pointer hover:text-yellow-600 ${
              selected === "#language" && "text-yellow-600"
            }`}
          >
            #Languages
          </a>
        </div>
        <div className="text-3xl flex my-4 flex-wrap gap-4 justify-center md:justify-start">
          {chips?.map((skill, index) => (
            <Chip title={skill.title} icon={skill.icon} key={index} />
          ))}
        </div>
      </Section>

      <Section title="Experience">
        {companies?.map(({ employer, role, start, end, company_projects }) => (
          <Company
            employer={employer}
            role={role}
            start={start}
            end={end}
            key={employer}
          >
            {company_projects.map(({ bullets, description, title, url }) => (
              <CompanyProject
                title={title}
                description={description}
                bullets={bullets?.split("/")}
                url={url}
                key={title}
              />
            ))}
          </Company>
        ))}
      </Section>

      <Section title="Education">
        {educations.map(({ school, degree, concentration, end }) => (
          <Education
            school={school}
            degree={degree}
            concentration={concentration}
            end={end}
            key={school + degree}
          />
        ))}
      </Section>
      {/* 
      <Section title="Let's Connect">
        <Contact />
      </Section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  let res = await fetch(`${API_URL}/companies?_sort=order`);
  const companies = await res.json();

  res = await fetch(`${API_URL}/educations`);
  const educations = await res.json();

  res = await fetch(`${API_URL}/skills`);
  const skills = await res.json();

  res = await fetch(`${API_URL}/linkedin-button`);
  let btnLinkedIn;
  if (res.ok) btnLinkedIn = await res.json();
  else btnLinkedIn = null;

  res = await fetch(`${API_URL}/git-hub-button`);
  let btnGithub;
  if (res.ok) btnGithub = await res.json();
  else btnGithub = null;

  res = await fetch(`${API_URL}/resume-button`);
  let btnResume;
  if (res.ok) btnResume = await res.json();
  else btnResume = null;

  return {
    props: { companies, educations, skills, btnLinkedIn, btnGithub, btnResume },
    revalidate: 30,
  };
}
