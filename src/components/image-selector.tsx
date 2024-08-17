import React, { useEffect, useState } from "react";
import { fetchRandomImages } from "../service";
import { IApiResponseTypes } from "../types";

interface ImageSelectorProps {
  userName: string;
  onSelectImage: (url: string) => void;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({
  onSelectImage,
  userName,
}) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageData = await fetchRandomImages();
      setImages(imageData.map((img: IApiResponseTypes) => img.urls.regular));
    };
    loadImages();
  }, []);

  const handleSetImage = (url: string) => {
    if (userName === "") {
      alert("Please enter a username");
      return;
    }

    onSelectImage(url);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="Unsplash"
          className="cursor-pointer"
          onClick={() => handleSetImage(url)}
        />
      ))}
    </div>
  );
};

export default ImageSelector;
