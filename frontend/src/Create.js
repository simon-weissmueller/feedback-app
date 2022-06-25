import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/create'
})

const Create = () => {

    let prof = ""
    let title = ""
    let multiple = false

    const handleSubmit = () => {
        console.log(prof)
        console.log(title)
        console.log(multiple)
    }

    return(
        <>
        <h1>Create a Session</h1>
        <form onSubmit={handleSubmit}> 
            <label>Professor</label>
            <input 
            type="text" 
            required
            onChange={(e) => prof = e.target.value}
             />
             <label>Veranstaltung</label>
            <input 
            type="text" 
            required
            onChange={(e) => title = e.target.value}
             />
             <label>Mehrfach abstimmen ermöglichen</label>
            <input 
            type="checkbox" 
            required
            onChange={(e) => (e.target.checked) ? multiple = true : multiple = false}
             />
             <button>Create Session</button>
            </form>

        </>
    );
}

export default Create;