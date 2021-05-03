import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {Button, Grid, Input, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid
                container
                justify="center"
                style={{margin: "10px"}}
            >
                <TextField
                    variant="outlined"
                    value={name}
                    onChange={setNameCallback}
                    label="Enter your name"
                    error={!!error}
                    helperText={error}
                />
            </Grid>
            <Grid
                container
                justify="center"
                style={{margin: "10px"}}
            >
                <Button
                    variant="contained"
                    onClick={addUser}
                    startIcon={<SaveIcon/>}
                    className={s.padding}
                >
                    Save name
                </Button>
            </Grid>
            <Grid
                container
                justify="center"
                style={{margin: "10px"}}
            >
                <span className={s.someClass}>{totalUsers}</span>
            </Grid>
        </Grid>
    )
}

export default Greeting
