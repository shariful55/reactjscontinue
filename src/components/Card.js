
const todoTitle="Call family";
const todoDesc="Et stet est tempor sanctus stet at gubergren eirmod, rebum magna et amet takimata dolores justo. Duo ut sanctus at gubergren eirmod, rebum magna et amet takimata dolores justo. Duo ut sanctus at.";

const date=new Date();
const currentYear=date.getFullYear();
const currentMonth=date.getMonth();
const currentDay=date.getDate();
const myDate=currentDay+"/"+currentMonth+"/"+currentYear;


function Card(props){
  return <div class="card">
  <h1 class="cardTitle" >{props.todoTitle}</h1>
  <p class="cardDesc">{props.todoDesc}</p>
  <p class="cardFooter">{myDate}</p>
    <img src="./1.jpg"  height="100" width="400" alt="this is a image g"/>
  </div>
}

export default Card;