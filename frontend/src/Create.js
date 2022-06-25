import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/create'
})

const Create = () => {

    const handleCreate = () => {
        console.log("create")
    }

    return(
        <>
        <h1>Create a Session</h1>
        <button onClick={handleCreate}>Create Session</button>
        </>
    );
}

export default Create;