import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ( exerciseVideos, name ) => {

  if(!exerciseVideos.length) return 'loading...'

  return (
    <Box
      sx={{ 
        marginTop: {
          lg: '200px', xs: '20px'
        }
      }}
      p="20px"
    >
      <Typography
        variant="h4"
        mb="33px"
      >
        Watch {name} exercise videos
      </Typography>
      <Stack
        justifyContent="fext-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { leg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-videos"
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blanck"
            rel="noreferrer"
          >
            <img src={item.video.thubmnails[0].url} alt={item.video.title} />
          </a> 
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos