import React, { useState } from "react";

function FallbackImage({ src, alt, className }) {
  const [error, setError] = useState(false);

  return error ? (
    <div className={`img-fallback ${className}`}>
      Image Unavailable
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

export default FallbackImage;
