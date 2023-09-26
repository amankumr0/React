
const Card = ({ ...objs }) => {
    const btntxt = objs.btntxt || "Button";
    const imgLink = objs.imgLink;
    const yoyo = objs.yoyo;
    const bac = objs.bac;
    const klj = objs.klj
    return (
        <>
            <div className="w-[300px] rounded-md border">{klj}
                <img
                    src={imgLink}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                    <h1 className="text-lg font-semibold">About Macbook</h1>
                    <p className="mt-3 text-sm text-gray-600">
                        {yoyo || "Nothing came"} {bac} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <button
                        type="button"
                        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        {btntxt}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;
