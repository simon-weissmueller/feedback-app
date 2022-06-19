import {useState} from 'react'

const SessionsList = () => {

    const [running, setRunning] = useState([
        {title: "VS", prof: "Karl", body: "lorem ipsum...", id: 1},
        {title: "TI", prof: "Friedrich", body: "lorem ipsum...", id: 2},
        {title: "SWT", prof: "Hirschfeld", body: "lorem ipsum...", id: 3}
    ]);

    return ( 
    <div className="session-list">
    {running.map((ses) => (
       <div className="preview" key={ses.id}>
        <h3>Titel: {ses.title} </h3>
        <p> Prof: {ses.prof}</p>
        </div> 
        ))}
    </div> 
);
}
 
export default SessionsList;