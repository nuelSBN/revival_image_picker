import React, { useState } from "react";
import ImageSelector from "./components/image-selector";
import PhotoCard from "./components/photocard";

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  return (
    <div className="container mx-auto p-4 w-full flex justify-center items-center">
      {!selectedImage ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center py-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-4 p-2 border w-[250px]"
            />
          </div>
          <h1 className="text-center text-2xl mb-4">Choose an Image</h1>
          <ImageSelector onSelectImage={setSelectedImage} userName={userName} />
        </div>
      ) : (
        <PhotoCard
          imageUrl={selectedImage}
          userName={userName}
          setUserName={setUserName}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default App;
