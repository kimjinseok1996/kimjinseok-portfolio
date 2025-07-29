import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonComponent = ({
  width = "100%",
  height = "100%",
  circle = false,
}) => {
  return <Skeleton width={width} height={height} circle={circle} />;
};
