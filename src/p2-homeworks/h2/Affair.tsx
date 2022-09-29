import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const statusClass = props.affair.priority === 'high' ? classes.item__high :
        props.affair.priority === 'middle' ? classes.item__middle :
            classes.item__low;

    return (
        <div className={classes.container__item}>
            <div className={statusClass}></div>
            {props.affair.name}
            <span className={classes.button__delete} onClick={deleteCallback}>✕</span>
        </div>
    )
}

export default Affair
