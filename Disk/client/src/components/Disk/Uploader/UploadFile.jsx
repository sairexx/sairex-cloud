import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../../reducers/uploadReducer'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Uploader.css'

const UploadFile = ({file}) => {
    function LinearProgressWithLabel(props) {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="white">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }

    const dispatch = useDispatch()
    return (
        <div className = 'upload-file'>
            <div className="upload-file__header">
                <div className="upload-file__name">{file.name.slice(0,25) + "..."}</div>
               
                <button className="upload-file__remove" onClick = {() => dispatch(removeUploadFile(file.id))}></button>
            </div>
            <LinearProgressWithLabel value={file.progress} />
        </div>
    )
}

export default UploadFile