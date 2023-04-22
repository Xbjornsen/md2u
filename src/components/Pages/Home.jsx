import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for routing

const Card = ({ title, content, buttonText, linkTo }) => {
  return (
    <div className="flex-1 p-4 rounded-md shadow-md  transform hover:scale-105 transition duration-300 ease-in-out mb-4">
      <h1 className="text-3xl font-bold text-center mb-4 p-8">{title}</h1>
      <ul className="list-disc pl-4 text-left">
        {content.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-auto">
        <Link
          to={linkTo}
          className="px-6 py-3 mt-4 bg-blue-400 text-white rounded-full font-bold hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => {
  const cards = [
    {
      title: "Medical Certificate",
      content: [
        "Typical response time for reviewing requests is approximately one hour, on average.",
        "Sent to your mobile device through SMS and email for your convenience.",
        "Validated by a certified physician registered in Australia."
      ],
      buttonText: "Get Certificate",
      linkTo: "/certificate"
    },
    {
      title: "Prescription",
      content: [
        "New and repeat medication prescriptions",
        "Delivered to your phone via SMS and email",
        "Collect medication from your local pharmacy"
      ],
      buttonText: "Get Prescription",
      linkTo: "/prescription"
    },
    {
      title: "Medical Consultation",
      content: [
        "Speak with a registered Australian Health Practitioner",
        "Appointments available Today",
        "Open 7 days a week - 9am to 10pm AEST"
      ],
      buttonText: "Chat Now",
      linkTo: "/Consulation"
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-2">
      <div className="flex flex-col mb-8 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            linkTo={card.linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
