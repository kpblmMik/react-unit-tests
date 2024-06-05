import { useEffect, useState } from "react";

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setData(data);
        }

        fetchData();
    }, []);

    if (!data || data.length === 0) {
        return (<div data-testid="data-selector" ><p>Loading ...</p></div>)
    } else {
        return (
            <div data-testid="data-selector">
                <ul data-testid="data-list">
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        );
    }

}
export default Data;