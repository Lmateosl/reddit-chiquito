import React, { useState } from "react";
import { Box, Grid, Skeleton} from "@mui/material";
import Img from "../components/Img";
import { tiempoDesde } from "../features/utilities";
import { getComments } from "../features/http/httpRequests";
import styles from "../../styles/Posts.module.css"

export default function Post({
    img,
    vid, 
    date, 
    comments, 
    votes, 
    author, 
    text, 
    idPost,
    isVideo
}) {
    const [commentsData, setCommentsData] = useState([]);
    const [commentsShow, setCommentsShow] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(true);

    const onClickHandler = async() => {
        if (commentsShow) {
            setCommentsShow(false);
        } else {
            setCommentsShow(true);
            setCommentsLoading(false);
            const data = await getComments(idPost)
            console.log(data);
            setCommentsData(data);
            setCommentsLoading(true);
        }
    }
    return(
        <Box 
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            p={1}
        >
            <Grid container spacing={2}>
                <Grid xs={2}>
                    <Box 
                        width="100%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        justifyItems="center"
                        marginBottom={1}
                        flexDirection="column"
                    >
                        <p style={{color: "green", marginBottom: 5}}>Votes</p>
                        <p style={{color: "green", marginTop: 5}}>{votes}</p>
                    </Box>
                </Grid>
                <Grid xs={10} sx={{padding: 5}}>
                    <h3>{text}</h3>
                    <div style={{width: "100%", borderBottom: "1px solid black", paddingBottom: 30}}>
                        {isVideo ? 
                            <div style={{width: "100%"}}>
                                <video width="80%" controls>
                                    <source src={vid} type="video/mp4" />
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            </div>
                            :
                            img && <Img src={img} text="Imagen of the post" width="80%"/>
                        }
                    </div>
                    <Grid container spacing={2} sx={{marginTop: 5}}>
                        <Grid xs={4} sx={{textAlign: "center"}}>
                            <p>{author}</p>
                        </Grid>
                        <Grid xs={4} sx={{textAlign: "center"}}>
                            <p>{date}</p>
                        </Grid>
                        <Grid xs={4} sx={{textAlign: "center", color: "blue"}}>
                            <p onClick={() => onClickHandler()}>comments {comments}</p>
                        </Grid>
                        {commentsShow  && 
                            <>
                                {commentsLoading ?
                                    <> 
                                    <h2 style={{textAlign: "left"}}>Comments</h2>
                                    {commentsData.map(comment => (
                                        <div className={styles.post}>
                                            <div style={{ padding: 10}}>
                                                <Grid container spacing={2} sx={{width: "93%", margin: "auto"}}>
                                                    <Grid xs={6} sx={{textAlign: "left"}}>
                                                        <p>{comment.author}</p>
                                                    </Grid>
                                                    <Grid xs={6} sx={{textAlign: "right"}}>
                                                        <p>{tiempoDesde(comment.created_utc)}</p>
                                                    </Grid>
                                                </Grid>
                                                <p>{comment.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                    </>
                                    :
                                    <div style={{width: "90%"}}>
                                        <Skeleton variant="rounded" width="100%" height={50} style={{marginBottom: 10}}/>
                                        <Skeleton variant="rounded" width="100%" height={50} />
                                    </div>
                                }
                            </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}