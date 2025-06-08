import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p> */}
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <motion.a href="#Portfolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button>WHAT I DO?</button>
          </motion.a>

        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            I build responsive and interactive UIs using React.js, SCSS, and Framer Motion. Focused on performance, UX, and clean code.
          </p>

        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend APIs</h2>
          <p>
            I create scalable and secure RESTful APIs using .NET Core, Entity Framework, SQL Server, and Node.js with strong authentication, validation, and error handling.
          </p>

        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Apps</h2>
          <p>
            From frontend to backend, I build and integrate complete applications with login systems, admin dashboards, and database connectivity.
          </p>

        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Deployment & Tools</h2>
          <p>
            I use Git, GitHub, Postman, and deploy projects on platforms like Vercel and Azure to bring apps from dev to production.
          </p>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
