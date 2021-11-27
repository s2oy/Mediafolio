(function(){
    //Person
    function Person(props){
        return(
            <div className="person">
                <h3>{props.person.name},{props.person.title}</h3>
                <p>
                    <img src={props.person.img}
                         alt={props.person.name} />
                    {props.person.bio}
                </p>
            </div>
        )
    }

    //People
    function People(props){
        return(
            <div className="result">
                {props.people.map((person)=>{
                    {return <Person key={person.id} person={person} />}
                })}
            </div>
        )
    }

    //class
    class App extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                people:window.All.people
            }
        }
        render(){
            return(
                <div className="list">
                    <h1>People</h1>
                    <People people={this.state.people}/>
                </div>
            )
        }
    }
    //export
    const root = document.getElementById('root');
    ReactDOM.render(
        <App/>,root
    )
})()

//함수식이기때문에 뒤에 ()을 무조건적으로 붙여주어야한다.