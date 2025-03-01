"use client"; // Ensures client-side rendering in Next.js 13+

import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";

export type OptionType = { value: string; label: string };

interface SelectOptionsProps {
  options: OptionType[];
  setSelectValue: (value: OptionType | null) => void;
}

export default function SelectOptions({ options, setSelectValue }: SelectOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (newValue: SingleValue<OptionType>) => {
    setSelectedOption(newValue);
    setSelectValue(newValue);
  };

  if (!isMounted) return null; // Prevents hydration mismatch by skipping SSR rendering

  return (
    <div>
      <Select
        instanceId="custom-select" // Ensures consistent ID to prevent hydration errors
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: "#9da4b0",
            outline: state.isFocused ? "none" : undefined,
            boxShadow: state.isFocused ? "0 0 0 2px #9da4b0" : undefined,
          }),
          option: (provided, state) => ({
            ...provided,
            color: "#000",
            backgroundColor: state.isSelected ? "#ddd" : "#fff",
          }),
        }}
      />
    </div>
  );
}
