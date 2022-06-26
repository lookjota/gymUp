
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

import Details from '../components/Details'
import ExercisesVideos from '../components/ExercisesVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {

  const [ exerciseDetail, setExerciseDetail ] = useState({})
  const [ exerciseVideos, setExerciseVideos ] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await 
        fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)

        setExerciseDetail(exerciseDetailData)

        const exerciseVideosData = await 
          fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions)
          setExerciseVideos(exerciseVideosData)
    }
    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Details
        exerciseDetail={ exerciseDetail }
      />
      <ExercisesVideos 
        exerciseVideos={exerciseVideos} 
        name={exerciseDetail.name} 
      />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail