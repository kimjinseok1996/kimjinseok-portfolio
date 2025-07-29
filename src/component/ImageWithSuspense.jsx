import { useImageLoader } from "../custom-hooks/useImageLoader";
import { SkeletonComponent } from "./SkeletonComponent";

export const ImageWithSuspense = ({
  src,
  alt = "",
  width = "100%",
  height = "100%",
}) => {
  const loaded = useImageLoader(src);

  if (!loaded) {
    return <SkeletonComponent height={"320px"} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
      }}
    />
  );
};
