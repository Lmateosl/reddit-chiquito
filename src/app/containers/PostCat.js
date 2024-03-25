import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubredit } from "../features/postSlice";
import Posts from "../components/Posts";
import Categorie from "./Categorie";
import { Grid, Skeleton } from "@mui/material";

export default function PostCat() {
    const dispatch = useDispatch();
    const { hasError, isLoading, posts } = useSelector((state) => state.posts);
    
    useEffect(() => {
        dispatch(loadSubredit('dog'));
    }, [dispatch]);


    if (hasError) {
       return <h3>It was an error geting the posts...</h3>;
    }

    return(
        <div style={{padding: '40px 10px', width:"90%", margin: "auto"}}>
            <Grid container spacing={2}>
                <Grid xs={8}>
                    {isLoading ? 
                    <div style={{width: "80%", margin: "40"}}>
                        <Skeleton variant="rounded" width="100%" height={200} style={{marginBottom: 20}}/>
                        <Skeleton variant="rounded" width="100%" height={200} />
                    </div>
                    :
                    <Posts posts={posts} />
                    }
                </Grid>
                <Grid xs={4}>
                    <Categorie />
                </Grid>
            </Grid>
        </div>
    );
}