import React from "react";

function NewExercise({ children, msg }) {
  return (
    <div className="mt-8 mb-8 border-b-gray-800 border-b-8">
      <h2 className="bg-gray-800 text-white text-xl p-4 text-center">{msg}</h2>
      <div className="lg:flex lg:justify-center p-8">{children}</div>
    </div>
  );
}

export default NewExercise;
