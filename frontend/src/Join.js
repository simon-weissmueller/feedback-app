import axios from "axios";
import {useState} from 'react'
import SessionsList from './SessionsList';


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/list'
})

const Join = () => {

    const [sessions, setSessions] = useState([])

    const handleShow = () => {
        api.get('').then(res => {
            setSessions(res.data)
            console.log(sessions.title)
        })

    }

    return(
        <>
        <h1>Join a Session</h1>
        <button onClick={handleShow}> Show Sessions </button>
        <SessionsList sessions={sessions}></SessionsList>
        </>
    );
}

export default Join;