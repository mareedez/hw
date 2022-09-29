import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [touched, setTouched] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setTouched(true)
        setName(e.currentTarget.value.trim())
        if (e.currentTarget.value.trim()) {
            setError('')
        } else {
            setError('Name is required')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (name) {
                addUser()
            } else {
                setError('Name is required')
            }
        }
        if (e.key === 'Escape') {
            setName('')
            setError('')
        }
    }

    const addUser = () => {
        alert(`Hello, ${name}!`)
        addUserCallback(name)
        setName('')
        setTouched(false)
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            touched={touched}
            handleKeyPress={handleKeyPress}
        />
    )
}

export default GreetingContainer
