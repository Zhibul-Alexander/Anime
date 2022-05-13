import React from "react";
import {Route, Routes} from "react-router-dom"
import { Header } from "./header";
import { Item } from "./Item";
import styles from "./Items/styles.module.css";
import { Items } from "./Items";

export function App() {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Items/>}/>
        </Routes>
        <Routes>
          <Route path="/anime/:id" element={<Item />}/>
        </Routes>
      </div>
    </div>
  )
}