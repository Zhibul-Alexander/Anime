import { useEffect, useState } from "react";
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
    const getAnimeDebounced = debounce(getSearch, 1500) 

    const [value, setValue] = useState("")
    const [options, setOptions] = useState([])
    const navigate = useNavigate()

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
