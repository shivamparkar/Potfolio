import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Admin Dashboard",
    img: "../../../public/admin.png",
    desc: "Responsive admin dashboard built with React, TypeScript, MUI, SCSS, and Recharts. Features theme toggling, nested routes, and deployment via GitHub Pages.",
    link: "https://shivamparkar.github.io/Admin/",
  },
  {
    id: 2,
    title: "Reservation UI",
    img: "../../../public/reservation.png",
    desc: "User-friendly reservation interface built with React 18, React Router DOM v7, Toastify, Axios, and Date Range picker. Includes context-based state and custom hooks.",
    link: "https://shivamparkar.github.io/Reservation-UI",
  },
  {
    id: 3,
    title: "Ping (Real-Time Chat)",
     img: "../../../public/ping2.png",
    desc: "Real-time chat app with WebSocket, Zustand, private/group chats, image sharing, WebRTC video calling, and live UI updates using custom hooks.",
    link: "https://ping-client-six.vercel.app/",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
