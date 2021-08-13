import { useState } from "react";
import { API_URL } from "../config";

export default function Contact({ emailAddress }) {
  console.log(emailAddress);
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      to: "glasgowrandy@gmail.com",
      from: info.email,
      subject: info.subject,
      text: info.message,
    };

    const url = `${API_URL}/email`;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("done");
      alert("Message sent");
    }
  };

  return (
    <form className="my-8 space-y-4 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full md:w-1/2 sm:pr-1 py-1 md:py-0">
          <label className="tracking-widest" htmlFor="fname">
            First Name
          </label>
          <input
            className="outline-none bg-transparent shadow-down-sm px-4 py-2 rounded-md"
            value={info.fname}
            onChange={handleChange}
            placeholder="First Name"
            type="text"
            name="fname"
            id="fname"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 sm:pl-1 py-1 md:py-0">
          <label className="tracking-widest" htmlFor="lname">
            Last Name
          </label>
          <input
            className="outline-none bg-transparent shadow-down-sm px-4 py-2 rounded-md"
            placeholder="Last Name"
            value={info.lname}
            onChange={handleChange}
            type="text"
            name="lname"
            id="lname"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full md:w-1/2 sm:pr-1 py-1 md:py-0">
          <label className="tracking-widest" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none bg-transparent shadow-down-sm px-4 py-2 rounded-md"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 sm:pl-1 py-1 md:py-0">
          <label className="tracking-widest" htmlFor="subject">
            Subject
          </label>
          <input
            className="outline-none bg-transparent shadow-down-sm px-4 py-2 rounded-md"
            placeholder="Last Name"
            value={info.subject}
            onChange={handleChange}
            type="text"
            name="subject"
            id="subject"
          />
        </div>
      </div>
      <textarea
        className="outline-none w-full bg-transparent shadow-down-sm rounded-md p-4"
        name="message"
        value={info.message}
        onChange={handleChange}
        id=""
        rows="10"
        placeholder="Message..."
      />
      <a
        type="submit"
        value="Send"
        onClick={handleSubmit}
        className="bg-transparent px-4 shadow-up-sm hover:shadow-down-sm rounded-full cursor-pointer"
      >
        Send
      </a>
    </form>
  );
}

export async function getStaticProps() {}
