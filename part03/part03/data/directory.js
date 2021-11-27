(function(){
//Person
function Person(props){
    return(
        <div className="person">
            <h3>{props.person.name},{props.person.title}</h3>
            <p>
                <img src={props.person.img}
                     alt={props.person.title}/>
                     {props.person.bio}
            </p>
        </div>
    )
}

//People
function People(props){
    return (
        <div className = "result">
            {
                props.people.map(
                    (person) => {
                        return <Person key={person.id} person={person} />
                    }
                )
            }
        </div>
    )
}


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            people:window.All.people
        }
    }
    render(){
        return(
            <div className = 'list'>
                <h1>People</h1>
                <People people={this.state.people}/>
            </div>
        )
    }
}
    const root = document.getElementById('root')
    ReactDOM.render(
        <App />,root
    )
})()