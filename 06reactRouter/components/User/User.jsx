import { useParams } from "react-router-dom";
const User = () => {
    const { userId } = useParams();
    return (
        <div className="w-full h-screen bg-gray-600 text-white text-3xl font-bold flex items-center justify-center">
            User : {userId}
        </div>
    );
}

export default User;
