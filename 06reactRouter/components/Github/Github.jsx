import { useLoaderData } from "react-router-dom";

// import { useEffect } from "react";

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch("https://api.github.com/users/amankumr0")
    //         .then(resol => { console.log(resol.json()); return resol.json() })
    //         .then(data => console.log(data))
    //         .catch(e => console.log(e))
    // }, [])
    return (
        <div className=" h-full w-full justify-center mt-11 flex items-center">
            <div className="p-5 rounded-lg bg-gray-500 ">
                <h1>Github Follower : {data.followers}</h1>
                <img src={data.avatar_url} alt="avtar" className=" h-96" />
            </div>
        </div>
    );
}

export default Github;

export async function githubInfoLoader() {
    const data = await fetch("https://api.github.com/users/amankumr0");
    return data.json();
}
