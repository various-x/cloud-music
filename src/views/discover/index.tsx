import { Outlet } from "react-router-dom";

const Discover: React.FC = () => {
    return (
        <div>
          我的发现
            <Outlet />
        </div>
    )
}
export default Discover;