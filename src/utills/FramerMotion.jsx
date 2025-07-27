import { motion } from "framer-motion";
const motionStyle = {
  overflowY: "hidden",
};
function FramerMotion({ as = "div", motions = {}, children, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <div style={motionStyle}>
      <MotionTag {...motions} {...rest}>
        {children}
      </MotionTag>
    </div>
  );
}

export default FramerMotion;
