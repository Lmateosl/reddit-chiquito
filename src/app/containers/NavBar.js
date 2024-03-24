import React, { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Img from "../components/Img";
import src from '../../assets/imgs/logo.png';
import SearchBar from "../components/SearchBar";

export default function NavBar() {
    const [searchText, setSearchText] = useState('');

    const onTextHandler = ({target}) => {
        console.log(target.value);
        setSearchText(target.value);
    }

    const onClickHandler = () => {
        console.log(searchText);
    }

    return (
            <Grid container spacing={0} sx={{height: "100px", boxShadow: "0px 5px 8px -2px #000000"}}>
                <Grid xs={4}>
                    <Img src={src} text="Logo of reddit" width="30%"/>
                </Grid>
                <Grid xs={4}>
                    <SearchBar onChangeHandler={onTextHandler} placeHolder="Search for a post..." onClickHandler={onClickHandler} buttonText="Search"/>
                </Grid>
                <Grid xs={4}>
                    
                </Grid>
            </Grid>
    );
}