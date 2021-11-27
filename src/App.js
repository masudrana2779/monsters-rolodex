import React, {Component} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchBox/searchBox.component";


class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
        // this.handleSearch = this.handleSearch.bind(this);
     }

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleSearch = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder={'Search Monsters'}
                           handelChange={this.handleSearch}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
