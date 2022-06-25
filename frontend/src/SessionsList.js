import {useState} from 'react'

const SessionsList = (props) => {

    const handleJoinSession = () => {
        console.log("Join")


    };
    const [running, setRunning] = useState([
        {title: "VS", prof: "Karl", body: "lorem ipsum...", id: 1},
        {title: "TI", prof: "Friedrich", body: "lorem ipsum...", id: 2},
        {title: "SWT", prof: "Hirschfeld", body: "lorem ipsum...", id: 3}
    ]);

    console.log(props)
    console.log(props.sessions)

    return ( 
    <div className="session-list">
    {props.sessions.map((ses) => (
       <div className="preview" key={ses.id}>
        <h3>Titel: {ses.title} </h3>
        <p> Prof: {ses.prof}</p>
        <button onClick={handleJoinSession}>Join Session</button>
        </div> 
        ))}
    </div> 
);
}
 
export default SessionsList;