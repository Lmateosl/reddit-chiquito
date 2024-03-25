import React from "react";
import { useDispatch } from "react-redux";
import styles from '../../styles/Categorie.module.css';
import { arraySubreddits } from "../features/utilities";
import { loadSubredit } from "../features/postSlice";

export default function Categorie() {
    const dispatch = useDispatch();
    const onClickSubreddit = (subreddits) => {
        dispatch(loadSubredit(subreddits));
    }
    return(
        <div className={styles.div}>
            <h2 className={styles.h2}>Subreddits:</h2>
            {arraySubreddits.map(subreddits => (
                <div className={styles.sub} onClick={() => onClickSubreddit(subreddits)}>
                    <p>{subreddits}</p>
                </div>
            ))}
        </div>
    )
}