"use client";
import React, { useEffect, useState } from "react";
import styles from "./seed.module.css";
import { useEnv } from "./useEnv";

interface SeedProps {
  index: number;
}

const Seed = (props: SeedProps) => {
  const [input, setInput] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  const getSeedName = () => {
    return useEnv(props.index);
  };
  const validate = () => {
    if (input.toLowerCase() === getSeedName()) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (validate()) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [input]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  return (
    <>
      <h3>Seed {props.index + 1}</h3>{" "}
      <div className={styles.seed}>
        <input value={input} onChange={onChange} />
        {valid ? (
          <img
            src="https://www.freeiconspng.com/uploads/checkmark-png-image-7.png"
            style={{ width: "12px", height: "12px" }}
          />
        ) : <div style={{width:"12px", height:"12px"}}/>}
      </div>
    </>
  );
};

export default Seed;
