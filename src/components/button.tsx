import React from "react";

interface Props {
  onClick: () => void;
  label: string;
  variant: "outlined" | "contained";
}

export default function Button({ label, onClick, variant }: Props) {
  const getBtnStyles = () => {
    switch (variant) {
      case "contained":
        return "bg-red-600 text-white border-none hover:bg-red-700";
      case "outlined":
        return "bg-transparent text-red-400 border border-red-400";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-2 mt-4 text-base sm:text-sm ${getBtnStyles()}`}
    >
      {label}
    </button>
  );
}
