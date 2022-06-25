import SessionsList from './SessionsList';
import {useState} from 'react'



const Home = () => {

    const [running, setRunning] = useState([
        {title: "VS", prof: "Karl", body: "lorem ipsum...", id: 1},
        {title: "TI", prof: "Friedrich", body: "lorem ipsum...", id: 2},
        {title: "SWT", prof: "Hirschfeld", body: "lorem ipsum...", id: 3}
    ]);



    return (
    <>
    <div>
        <h1>Welcome to FeedbackApp</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae doloremque odit, repellendus corporis dolores? Fuga cumque, modi, neque excepturi delectus impedit minus obcaecati ipsum, quae eligendi aspernatur voluptatum dicta.</p>
        <h2>Running Sessions:</h2>
        <SessionsList sessions={running}/>
    </div>
    </> 
     );
}
 
export default Home;
