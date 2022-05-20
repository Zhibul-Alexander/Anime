import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {debounce} from "lodash";
import {getSearch} from "../../../api/index"

const Input = ({value, onChange, options = [], onOptionClick}) => {

    const changHandler = (event) => {
        onChange(event.target.value, event)
    }

    return (
        <div>
            <input type="text" value={value} onChange={changHandler} />
            <ul>
                {options.map((o) => (
                    <li key={o.id} onClick={() => onOptionClick(o)}>
                        {o.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const InputOriginal = () => {

    const [value, setValue] = useState("")
    const [options, setOptions] = useState([])
    const navigate = useNavigate()

    const getSearchValue = getSearch((e) => {e})
    const getAnimeDebounced = useCallback(debounce(getSearchValue, 1500), [])
    

    useEffect(() => {
    if (value.length > 2) {
        getAnimeDebounced(value).then(({data}) => {
        setOptions(data)
        })
    }
    }, [value])

    const onOptionClick = (o) => {
    navigate(`/anime/${o.id}`)
    }

    return (
        <Input value={value} onChange={setValue} options={options} onOptionClick={onOptionClick} />
    )
}


// const fetchAnimeDebounced = useDebounce((target, search) => { 
//     getAnimeSearch(target, search).then((r) => 
//       setAnimeData(r.data.slice(0, 10)) 
//     ); 
//   }, 1500); 
 
//   useEffect(() => { 
//     fetchAnimeDebounced(target, search); 
//   }, [value]);