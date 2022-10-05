import {useEffect, useState} from "react";

import "./Form.css"
import {useTelegram} from "../../hooks/useTelegram";

export const Form = () => {

    const [city, setCity] = useState("")
    const [department, setDepartment] = useState("")
    const [sex, setSex] = useState("")

    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Відправити дані"
        })
    }, [])

    useEffect(() => {
        if(!city || !department){
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
        }
    }, [city, department])

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeDepartment = (e) => {
        setDepartment(e.target.value)
    }
    const onChangeSex = (e) => {
        setSex(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введіть ваші дані</h3>
            <input className={"input"} type="text" placeholder={"Місто"} value={city} onChange={onChangeCity}/>
            <input className={"input"} type="text" placeholder={"Відділення"} value={department} onChange={onChangeDepartment}/>
            <select className={"select"} value={sex} onChange={onChangeSex}>
                <option value={"male"}>Чоловік</option>
                <option value={"female"}>Жінка</option>
            </select>
        </div>
    );
};

