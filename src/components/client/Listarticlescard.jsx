import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setPage, setLimit, setSearchTerm, getArticlesPagination} from
"../../features/articleSlice";
import Pagination from '../admin/articles/pagination';
import Affichearticlecard from './Affichearticlecard';
const Listarticlescard = () => {
 const dispatch=useDispatch()
 const {page,limit,searchTerm} = useSelector((state)=>state.storearticles);

 const loadarticles=async()=>{
  await dispatch(getArticlesPagination())
 }
 useEffect(()=>{
  loadarticles()
 },[dispatch,page,limit,searchTerm]) 

 const handleLimitChange = (event) => {
  dispatch(setLimit(parseInt(event.target.value, 10)));
  dispatch(setPage(1)); // Réinitialiser la page lorsque le nombre d'éléments par page change
  };
  return (
    <div>
   <Affichearticlecard/>
    <div style={{ "display": "flex", "justifyContent": "right"}}>
    <div className="limit-selector-container">

    <label>
    Afficher &nbsp;
    <select
      value={limit}
      onChange={(event) => {handleLimitChange(event)}}
    >
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={20}>20</option>
    <option value={100}>100</option>
    </select>
    </label>
    </div>
    <Pagination />
    </div>
    </div>
  )
}

export default Listarticlescard