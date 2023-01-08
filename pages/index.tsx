// import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, stagger, routerAnimation } from "../animations";

const Index = () => {
  const presentYear = new Date().getFullYear();
  const careerStatedYear = 2018;
  return (
    <motion.div
      className="flex flex-col px-6 pt-1"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Passionate developer having {presentYear - careerStatedYear} years of
        experience in web application development, Graduated from GITAM
        Hyderabad in Computer Science and Engineering Stream. I would like to
        highlight myself as Hardworking, Ambitious, and a Good Team leader who
        is always willing to take new learning and challenges. I have good
        knowledge of programming and software development and looking for
        opportunities in Front-End/Full-Stack development.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark700"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What do I offer
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map(({ Icon, title, about }) => (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark500 lg:col-span-1"
              key={title}
              variants={fadeInUp}
            >
              <ServiceCard Icon={Icon} title={title} about={about} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Index;
