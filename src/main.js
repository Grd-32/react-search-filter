import { useState } from "react";
import "./main.css"

export default function Main() {
    const list = [
        "lamborghini",
        "ferrari",
        "jaguar",
        "tesla",
        "honda",
        "chevrolet",
        "subaru",
        "benz"
    ];

    const [filterList, setFilterList] = useState(list)

    const handleSearch = (event) => {
        if (event.target.value === "") {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter(
            (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues)
}

    return (
        <div className="main">
            <div>
                search: <input name="query" type="text" onChange={handleSearch}/>
            </div>
            {FileList &&
                filterList.map((item, index) => (
                    <div key={index}>{item}</div>  //Display each item
                ))

            }
            </div>
    )
}