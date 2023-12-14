"use client";
import React, { useEffect, useState } from "react";
import styles from "./seed.module.css";
import { GetEnv } from "./GetEnv";
import useSWR from "swr";

interface SeedProps {
  index: number;
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Seed = (props: SeedProps) => {
  const [input, setInput] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const {data, error, isLoading} = useSWR(`/api/validator?id=${props.index}&answer=${input}`, fetcher)

  const validate = () => {
    return data.valid;
  };

  useEffect(() => {
    if (data) {
    if (validate()) {
      setValid(true);
    } else {
      setValid(false);
    }
}
  }, [data]);

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
