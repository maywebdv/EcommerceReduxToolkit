import React, { useEffect } from 'react'
import { getArticles } from '../../../features/articleSlice'
import { useDispatch } from 'react-redux'
import Affichearticle from './Affichearticle';
const Listarticles = () => {
 const dispatch=useDispatch()

 const loadarticles=async()=>{
  await dispatch(getArticles())
 }
 useEffect(()=>{
  loadarticles()
 },[dispatch]) 

  return (
    <div>
   <Affichearticle/>
    </div>
  )
}

export default Listarticles
