import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

type filterButtonType = 'all' | 'high' | 'middle' | 'low'

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (e: any) => { //no idea how to fix this any
        props.setFilter('all')
        setActive(e.target.id);
    }
    const setHigh = (e: any) => {
        props.setFilter('high')
        setActive(e.target.id);
    }
    const setMiddle = (e: any) => {
        props.setFilter('middle')
        setActive(e.target.id);
    }
    const setLow = (e: any) => {
        props.setFilter('low')
        setActive(e.target.id);
    }

    const [active, setActive] = useState<filterButtonType>("all");

    return (
        <div>
            <div className={classes.container__items}>
                {mappedAffairs}
            </div>
            <div className={classes.container__buttons}>
                <span className={active === "all" ? classes.button__active : classes.button__filter} onClick={setAll}
                      id={'all'}>ALL</span>
                <span className={active === "high" ? classes.button__active : classes.button__filter} onClick={setHigh}
                      id={'high'}>HIGH</span>
                <span className={active === "middle" ? classes.button__active : classes.button__filter}
                      onClick={setMiddle} id={'middle'}>MIDDLE</span>
                <span className={active === "low" ? classes.button__active : classes.button__filter} onClick={setLow}
                      id={'low'}>LOW</span>
            </div>
        </div>
    )
}

export default Affairs
