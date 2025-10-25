import Douglas from "../../images/davido.jpg";
import ExperienceLagos from '../../images/experience.jpeg';

export const eventsData = [
  {
    id: 1,
    title: "5ive Tour",
    description:
      "From Afrobeat hits to global superstardom, Davido has electrified audiences worldwide with his infectious rhythms and charismatic performances.",
    image: Douglas,
    date: "2025-12-15",
    venue: "Godswill Akpabio Stadium",
    tickets: [
      { type: "Regular", price: 10000 },
      { type: "VIP", price: 1000000 },
      { type: "Student", price: 5000 },
    ],
  },
  {
    id: 2,
    title: "Experience Lagos",
    description:
      "Join us for an uplifting Gospel night in Lagos filled with praise, worship, and soul-stirring performances from top gospel artists.",
    image: ExperienceLagos,
    date: "2025-10-30",
    venue: "Eko Hotels & Suites, Victoria Island",
    tickets: [
      { type: "Regular", price: 4000 },
      { type: "VIP", price: 500000 },
      { type: "Student", price: 0 },
    ],
  },
];



