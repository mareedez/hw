import React from 'react'
import classes from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={classes.message__container}>
            <div className={classes.avatar__container}>
                <img className={classes.avatar__image} src={props.avatar} alt="avatar"/>
            </div>
            <div className={classes.message__body}>
                <div className={classes.message__name}>
                    {props.name}
                </div>
                <div className={classes.message__text}>
                    {props.message}
                </div>
                <div className={classes.message__time}>
                    {props.time}
                </div>
                <div className={classes.message__arrow}> </div>
                <div className={classes.message__arrow__shadow}> </div>
            </div>
        </div>
    )
}

export default Message
