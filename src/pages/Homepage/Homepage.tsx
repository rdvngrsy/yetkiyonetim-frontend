import React from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 relative z-0 w-full mx-auto flex h-screen">
        <div className="flex flex-col justify-center items-center w-full space-y-12">
          <h1 className="text-7xl font-bold text-gray-800">
            Hoşgeldiniz!
          </h1>
          <p className="text-2xl  text-gray-600">
            Sol tarafta bulunan menüden yetki atama, yetki kaldırma ve yetki kontrolü gibi işlemlerinizi gerçekleştirebilirsiniz.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Homepage;
