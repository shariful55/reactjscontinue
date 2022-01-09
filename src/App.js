import React from "react";  
import Card from "./components/Card";



function App(){
    return <div>
<h1 class="cool">To Do App </h1>
<Card todoTitle="Call FatherR" todoDesc="This is my Mother here okay man " myDate= '20/01/2022' />
<Card todoTitle="Call my Son here man " todoDesc="Keep it up man for your comfortable situation" />
<Card />
<Card />
    </div>
}
export default App;