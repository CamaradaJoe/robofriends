import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary';



const App = () =>{       
    const [robots, setRobot] = useState([]);
    const [searchField, setSearchField] = useState('');
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setRobot(users));
    },[]);

    const onSearchChange = (e) => {  
        setSearchField(e.target.value);
    }
    
    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if(!robots.length){
        return <h1 className='f1 tc'>Loading...</h1>
    }else{
        return(
            < div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobot}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        ); 
    }
        
    
};




//Component using Class and state
// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             robots:[],
//             searchField: ''
//         };
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(users => this.setState({robots :users}));
//     }

//     onSearchChange = (e) => {  
//         this.setState({searchField: e.target.value});
//     }

//     render(){
//         const {robots, searchField} = this.state;
//         const filteredRobot = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchField.toLowerCase())
//         });
//         if(!robots.length){
//             return <h1 className='f1 tc'>Loading...</h1>
//         }else{
//             return(
//                 <div className='tc'>
//                     <h1 className='f1'>Robofriends</h1>
//                     <Searchbox searchChange={this.onSearchChange}/>
//                     <Scroll>
//                         <ErrorBoundary>
//                             <CardList robots={filteredRobot}/>
//                         </ErrorBoundary>
//                     </Scroll>
//                 </div>
//             ); 
//         }
//     }
// }

export default App; 