import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    touched: boolean
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name, setNameCallback, addUser, error, totalUsers, touched,
        handleKeyPress
    } // деструктуризация пропсов
) => {
    const inputClass = error && touched ? s.error : s.input__field
    const titleClass = error && touched ? s.title__error : s.container__title
    return (
        <div className={s.container__main}>
            <div className={s.container__input}>
                <div className={titleClass}>Name</div>
                <input value={name} onChange={setNameCallback} className={inputClass}
                       placeholder='Uasya' onKeyDown={handleKeyPress}/>
                {error && touched && <div className={s.error__message}>{error}</div>}
            </div>
            <div className={s.user__counter}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
