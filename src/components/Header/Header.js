import {Button} from "../Button/Button";

export const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }
    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрити</Button>
            <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
        </div>
    );
};

