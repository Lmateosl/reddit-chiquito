import React from "react";
import styles from "../../styles/SearchBar.module.css";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

export default function SearchBar({onChangeHandler, placeHolder, onClickHandler, buttonText}) {
    return(
        <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
        >
            <div className={styles.div}>
                <Grid container spacing={2}>
                    <Grid xs={8}>
                        <input type="text" name="searchInput" onChange={onChangeHandler} placeholder={placeHolder} className={styles.input}/>
                    </Grid>
                    <Grid xs={4}>
                        <button onClick={onClickHandler} className={styles.button}>{buttonText}</button>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}