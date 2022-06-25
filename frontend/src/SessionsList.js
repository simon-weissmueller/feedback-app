

const SessionsList = (props) => {

    const handleJoinSession = () => {
        console.log("Join")


    };

    console.log(props)
    console.log(props.sessions)

    return ( 
    <div className="session-list">
    {props.sessions.map((ses) => (
       <div className="preview" key={ses.id}>
        <h3>Titel: {ses.lecture_name} </h3>
        <p> Prof: {ses.prof}</p>
        <button onClick={handleJoinSession}>Join Session</button>
        </div> 
        ))}
    </div> 
);
}
 
export default SessionsList;