import { useState } from "react";
import { Button } from "./ui/button";

const ContactPage = () => {
  const [selectedFood, setSelectedFood] = useState("");
  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-4 bg-white border-b">
        <h2 className="text-xl font-semibold text-gray-800">Contacts</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-600">Your contacts will appear here</p>
      </div>
      {!selectedFood && (
        <div className="flex space-x-2">
          <Button onClick={() => setSelectedFood("elly-clutch")}>
            Elly Clutch
          </Button>
          <Button onClick={() => setSelectedFood("leya-desantis")}>
            Leya Desantis
          </Button>
        </div>
      )}
      {selectedFood && (
        <div className="flex space-x-2">
          <p>{selectedFood}</p>
          <Button onClick={() => setSelectedFood("")}>Clear</Button>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
