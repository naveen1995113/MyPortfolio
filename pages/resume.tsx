import React from "react";
import StatusBar from "../components/StatusBar";
import { skills, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routerAnimation } from "../animations";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Education and Exp */}
      <div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">GITAM University (2013-2017)</p>
            <p className="my-3">
              I have pursed B.tech in Computer Science and Engineering from
              GITAM University, Hyderabad.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="my-2 text-xl font-bold">FrontEnd Developer</h5>
              <p className="font-semibold">Align Technology (Aug-2021)</p>
              <p className="my-3">
                I create UI for Customer Facing Apps, using REACTJS + TYPESCRIPT
                for an internal project application called Invisalign Doctor
                System.
              </p>
            </div>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Senior Software Developer
              </h5>
              <p className="font-semibold">
                Hexagon Capability Centre India (2017-2021)
              </p>
              <p className="my-3">
                Migration of desktop App called Smart3D to Web App, For which I
                used to create, modify and improve the User Interface of the
                functionality using REACTJS + HTML5 + BOOTSTRAP.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Lang and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Framework</h5>
          <div className="my-2">
            {skills.map(({ Icon, name, level }) => (
              // eslint-disable-next-line react/jsx-key
              <StatusBar Icon={Icon} name={name} level={level} key={name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map(({ Icon, name, level }) => (
              // eslint-disable-next-line react/jsx-key
              <StatusBar Icon={Icon} name={name} level={level} key={name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Resume;
