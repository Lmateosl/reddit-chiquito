import React, { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Img from "../components/Img";
import src from '../../assets/imgs/logo.png';
import SearchBar from "../components/SearchBar";
import { useDispatch } from "react-redux";
import { searchPost } from "../features/postSlice";

export default function NavBar() {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const onTextHandler = ({target}) => {
        setSearchText(target.value);
    }

    const onClickHandler = async () => {
        console.log(searchText);
        dispatch(searchPost(searchText));
    }

    return (
        <Grid container spacing={0} sx={{height: "70px", boxShadow: "0px 5px 8px -2px #000000", backgroundColor: "white"}}>
            <Grid xs={4}>
                <Img src={src} text="Logo of reddit" width="25%"/>
            </Grid>
            <Grid xs={4}>
                <SearchBar onChangeHandler={onTextHandler} placeHolder="Search for a post..." onClickHandler={onClickHandler} buttonText="Search"/>
            </Grid>
            <Grid xs={4}>
                
            </Grid>
        </Grid>
    );
}