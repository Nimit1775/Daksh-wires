import { useEffect } from 'react';

const usePreloadImage = (imageSrc) => {
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
  }, [imageSrc]);
};

export default usePreloadImage;
