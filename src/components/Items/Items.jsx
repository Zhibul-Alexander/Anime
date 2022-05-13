import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ItemsAC} from "../../store"
import { ItemsSelectors } from "../../store";
import {Loader} from "../common"
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Items() {
  const items = useSelector(ItemsSelectors.getItems)
  const isItemsLoading = useSelector(ItemsSelectors.isLoading)
  const isItemsError = useSelector(ItemsSelectors.isError);
  const isItemsLoaded = useSelector(ItemsSelectors.isLoaded);

  const dispatch = useDispatch();
  const getItems = () => dispatch(ItemsAC.fetchItems());

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div>
      {isItemsLoading && <Loader />}
      {isItemsError && <span>Повторите запрос позже</span>}
      {isItemsLoaded && (
            items.map(({title, mal_id, images, title_synonyms}) => (
              <div >
                <div key={mal_id} className={styles.card}>
                  <div className={styles.cardCircle}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <p class={styles.cardText}>Title_synonyms: {title_synonyms}</p>
                    <img src={images.jpg.image_url} className={styles.cardImages} alt="" />
                    <Link to={`anime/${mal_id}`} className={styles.cardLink} >Read more</Link>
                  </div>
                </div>
              </div>
            )))}
    </div>
  )
}
