import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const PhotoSagaEx = () => {
    const {photoReducer} = useSelector((state) => state)
    const dispatch = useDispatch()
    const data = photoReducer.photoList;
    return (
        <div>
            <ul>
                {data?.map((e, i) => <li key={i}>
                    <span>{e.title}</span>
                    <img src={e.url} alt="" height="100" width="100" />
                </li>)}
            </ul>
            <button onClick={()=> dispatch({type:"GET_PHOTO"})}>Get Photos</button>
        </div>
    )
}

export default PhotoSagaEx
