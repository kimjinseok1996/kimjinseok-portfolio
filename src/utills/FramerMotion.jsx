import { motion } from "framer-motion";
const motionStyle = {
  overflowY: "hidden",
};
function FramerMotion({
  as = "div",
  motions = {},
  children,
  overflowY = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  if (!overflowY)
    return (
      <MotionTag {...motions} {...rest}>
        {children}
      </MotionTag>
    );
  return (
    <div style={motionStyle}>
      <MotionTag {...motions} {...rest}>
        {children}
      </MotionTag>
    </div>
  );
}

export default FramerMotion;
