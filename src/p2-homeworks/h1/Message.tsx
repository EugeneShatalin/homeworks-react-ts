import React from "react";
import s from "./Message.module.css";

type PropsMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsMessageType) {
    return (
        <div className={s.wrapper}>
            <div className={s.cloud}>
                <div className={s.name}>
                    {props.name}
                </div>

                <img src={props.avatar}  className={s.before}/>

                <div className={s.after}>

                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
