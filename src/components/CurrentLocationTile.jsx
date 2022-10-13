import {useLocation} from "react-router-dom";

const CurrentLocationTile = () => {
    const location = useLocation();

    return (
        <div className="current-location">
            <p className="current-location__text"> (Внешний компонент) Вы находитесь на странице: {location.pathname}</p>
        </div>
    );
}

export default CurrentLocationTile;
