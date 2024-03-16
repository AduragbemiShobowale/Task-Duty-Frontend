import { useState, useEffect } from "react";

const Dropdown1 = ({ setTag, initialTag }) => {
  const [options, setOptions] = useState(["urgent", "important"]);
  const [selected, setSelected] = useState(initialTag || "urgent");
  const [isOpen, setIsOpen] = useState(false);

  // Update selected value when initialTag prop changes
  useEffect(() => {
    setSelected(initialTag || "urgent");
  }, [initialTag]);

  return (
    <div>
      <p
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected}
      </p>
      <div className="dave">
        {isOpen
          ? options.map((option) => {
              return (
                <p
                  onClick={() => {
                    setSelected(option);
                    setTag(option);
                    setIsOpen(false);
                  }}
                  key={option}
                >
                  {option}
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Dropdown1;
