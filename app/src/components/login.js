import React, { useState } from 'react'
import axios from 'axios'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { useForm, Controller } from "react-hook-form";

const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const [user, setUser] = useState({
        email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onBlur, value } }) => (
                    <TextInput
                        // style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChangeInput}
                        value={value}
                    />
                )}
                name="Email"
                defaultValue={user.email}
            />

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        // style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChangeInput}
                        value={value}
                    />
                )}
                name="Password"
                defaultValue={user.password}
            />

            <Button title="Submit" onPress={handleSubmit(loginSubmit)} />
        </View>
    )
}

export default Login
