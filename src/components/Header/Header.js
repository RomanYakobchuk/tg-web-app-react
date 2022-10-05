import {Button} from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

export const Header = () => {
    const {user, onClose} =useTelegram()
    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрити</Button>
            <span className={"username"}>{user?.username}</span>
        </div>
    );
};

