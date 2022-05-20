import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getItem} from "../../api"

export const Item = () => {
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getItem(id).then(({data}) => {
      setData(data)
    })
}, [])

    return (
        <div>
            <h2>Title:{data.title}</h2>
            <div>Source: {data.source}</div>
            <div>Year: {data.year}</div>
            <div>Score: {data.score}</div> 
            <div>Rank: {data.rank}</div>
            <img src={data.images?.jpg.image_url} alt="" />
            <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011">Website</a>
        </div>
    )

}
