import hibiscusJuice from "../assets/3d-designs/Hibiscus Juice.png";
import pineappleJuice from "../assets/3d-designs/Pineapple Juice.png";
import efbPerfume from "../assets/3d-designs/EFB-Perfume.png";
import chainWine from "../assets/3d-designs/chanin-wine.png";
import bubbleDeodorant from "../assets/3d-designs/Bubble-Deodorant.png";
import waterBottle from "../assets/3d-designs/EFB-water-bottle.jpg";
import douxPerfume from "../assets/3d-designs/Daux -Perfume.jpg";
import coke from "../assets/3d-designs/Coke.png";
import coffee from "../assets/3d-designs/coffee.png";

type WebProject = {
  title: string;
  url: string;
  description: string;
  iframeSrc: string;
}[];

type DesignProject = {
  title: string;
  imageSrc: string;
}[];

const webProjects: WebProject = [
  {
    title: "HealthLink",
    iframeSrc: "https://healthlink01.netlify.app/",
    url: "https://healthlink01.netlify.app/",
    description:
      "A MERN stack healthcare platform that connects patients with verified medical specialists. Features an admin dashboard for reviewing and approving specialist applications based on submitted certifications and credentials. Patients can browse and connect with approved specialists through a clean, responsive user interface.",
  },
  {
    title: "JE-Adverts",
    iframeSrc: "https://je-advertss.netlify.app/",
    url: "https://je-advertss.netlify.app/",
    description:
      "A MERN stack advertisement management platform focused on cosmetic products. Features role-based authentication for vendors and users, allowing vendors to create, edit, and delete their own adverts with image uploads. Users can browse all adverts, search and filter by category, price, or keywords, and view detailed advert pages. Includes responsive design and a vendor dashboard for advert management.",
  },
  {
    title: "React E-Commerce Store",
    iframeSrc: "https://fir-test-15d52.web.app/",
    url: "https://fir-test-15d52.web.app/",
    description:
      "A responsive e-commerce platform built with React and Firebase. Users can sign up, log in, and shop seamlessly, while admins manage products — including adding, editing, and deleting items.",
  },
  {
    title: "Customizable Task Manager",
    iframeSrc: "https://task-list-v3.netlify.app/",
    url: "https://task-list-v3.netlify.app/",
    description:
      "A feature-rich task manager built with React and PWA functionality. Users can add/edit/delete tasks, toggle themes, and update their username for a personalized experience.",
  },
  {
    title: "Themed Calculator",
    iframeSrc: "https://kalkulata.netlify.app/",
    url: "https://kalkulata.netlify.app/",
    description:
      "A sleek, responsive calculator using vanilla HTML, CSS, and JS. Includes multiple themes for a personalized look while handling basic calculations.",
  },
];

const designProjects: DesignProject = [
  { title: "Hibiscus Juice", imageSrc: hibiscusJuice },
  { title: "Pineapple Juice", imageSrc: pineappleJuice },
  { title: "EFB Doux Perfume", imageSrc: efbPerfume },
  { title: "Chain Wine", imageSrc: chainWine },
  { title: "Bubble Deodorant", imageSrc: bubbleDeodorant },
  { title: "Water Bottle", imageSrc: waterBottle },
  { title: "Doux Perfume", imageSrc: douxPerfume },
  { title: "CokaCola", imageSrc: coke },
  { title: "Coffee", imageSrc: coffee },
];

export { webProjects, designProjects };
