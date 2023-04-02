import {useState, useEffect} from "react";

export default function Question(){
    const [randomCategory, setRandomCategory] = useState(null);
    const [randomQuest, setRandomQuest] = useState(null);
    const [randomAns, setRandomAns] = useState(null);
    const [Revealed, setRevealed] = useState(false);

useEffect(() => {
    const getQuest = async () => {
        let response = await fetch(
            "https://opentdb.com/api.php?amount=1&type=boolean"
        );
        let data = await response.json();
        setRandomQuest(data.results[0].question);
        setRandomAns(data.results[0].correct_answer);
        setRandomCategory(data.results[0].category);
    }
    getQuest(); //run the async function we just defined
},[])  //empty square bracket is an empty dependency array

//handler function
function handleRevealed(){
    setRevealed(true)
}

//conditional rendering
let answer= <div></div>;
if (Revealed){
    answer = <div><em>{randomAns}</em></div>;
}

    return(
            
        <div>
        <h2>Today's question</h2>
        <div>{randomCategory}</div>
        <h3>{randomQuest}</h3>
        <div>{randomAns}</div>
        <button type="button" onClick={handleRevealed}  >Reveal answer</button>
        {answer}
        </div>
    );
}