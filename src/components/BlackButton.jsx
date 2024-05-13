import React from "react";
import styles from "@/styles/BlackButton.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";

export default function BlackButton({ onClick, buttonName }) {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.blackButton} onClick={handleButtonClick}>
      {buttonName}
    </button>
  );
}
