import React from "react";
import Box from '@mui/material/Box';

export default function Img({src, text, width}) {
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
            <img src={src} alt={text} style={{borderRadius: '20px'}} width={width}/>
        </Box>
    );
}