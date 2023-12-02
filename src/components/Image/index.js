import { forwardRef, useState } from "react";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      // defaultAvt = images.defaultAvataSong,
      ...props
    },
    ref
  ) => {
    const [url, setUrl] = useState(src);
    // if (typeof url === "object" || typeof url === "undefined") {
    //   setUrl(defaultAvt);
    // }
    return (
      <img
        ref={ref}
        className={className}
        src={url}
        alt={alt}
        // onError={() => setUrl(defaultAvt)}
        {...props}
      />
    );
  }
);

export default Image;
