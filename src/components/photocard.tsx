import React, { useEffect, useRef } from "react";
import Button from "./button";

interface PhotoCardProps {
  imageUrl: string;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageUrl,
  userName,
  setUserName,
  setSelectedImage,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = imageUrl;

      image.onload = () => {
        let width = 400;
        let height = 500;

        if (window.innerWidth <= 768) {
          width = 360;
          height = 300;
        }

        if (window.innerWidth <= 480) {
          width = 300;
          height = 280;
        }

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(image, 0, 0, width, height);

        ctx!.font = `${Math.floor(width / 13)}px Arial`;
        ctx!.fillStyle = "#FFFFFF";
        ctx!.textAlign = "center";
        ctx!.fillText("Thank You", width / 2, 50);

        ctx!.fillText(userName, width / 2, height - 30);
      };
    }
  }, [imageUrl, userName]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "thank you card.png";
      link.click();
    }
  };

  const handelGoBack = () => {
    setSelectedImage("");
    setUserName("");
  };

  return (
    <div className="flex justify-center items-center flex-col h-dvh">
      <canvas ref={canvasRef} className="mx-auto" />
      <div className="flex gap-2">
        <Button
          label="Download Image"
          variant="contained"
          onClick={downloadImage}
        />
        <Button
          label="Choose Another"
          variant="outlined"
          onClick={handelGoBack}
        />
      </div>
    </div>
  );
};

export default PhotoCard;
