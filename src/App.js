import React, {useEffect, useState} from 'react';
import './App.css';
import Table from './Component/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Component/Header";
import fetchUsers from "./Component/FetchUsers";

export const App = () => {

    const [users, setUsers] = useState(() => window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : []);
    const [num, setNum] = useState(0);
    const [search, setSearch] = useState('');
    const [gender, setGender] = useState('');
    const [sort, setSort] = useState({key:'', asc:true });

    // Fetch user on CLick button
    const handleFetchClick = () => {
        fetchUsers(20).then(users => setUsers(users))
    };

    // Add users on click
    const handleFetchClickAdd = () => {
        fetchUsers(5).then((newUsers) => setUsers([...users, ...newUsers]));
    };

    // All the filter parameters
    const filteredUser = users
    // search users with a nav bar
        .filter(user => {
            return (
                user.firstName.toLowerCase().includes(search.toLowerCase())
                || user.phone.toLowerCase().includes(search.toLowerCase())
                || user.lastName.toLowerCase().includes(search.toLowerCase())
            )
        })
        // Order by gender
        .filter(
            user => {
                if (gender === '') {
                    return true
                }
                return user.gender === gender;
            }
        )
        // ALl the osrt section (name, email ,age)
        .sort((user1, user2) => {
            if (sort.key === '') {
                return 0
            }
            const valueUser1 = user1[sort.key];
            const valueUser2 = user2[sort.key];

            if(valueUser1 > valueUser2) {
                return sort.asc ? 1 : -1
            }
            return sort.asc ? -1 : 1
        });

    // Fetch users when open window or refresh web page
    // useEffect( async () => {
    //         fetchUsers(20).then(users => setUsers(users));
    //     },
    //     [num]);

    // Save in local storage
    useEffect(
        () => window.localStorage.setItem('users', JSON.stringify(users)),
        [users]
    );


    return (
            <div className="container-fluid">
                <div id="app">
                    <Header onFetchClick={handleFetchClick}
                            onFetchClickAdd={handleFetchClickAdd}
                    />

                    {/*This input search user name, phone or email when we write in the search bar*/}
                    <input style={{}} type="text" placeholder="Rechercher" onChange={e => setSearch(e.target.value)}/>
                    <br/>
                    <br/>
                    <div>
                        <ul>
                            <li>
                                Sort : {sort.key} {sort.key ? (sort.asc ? 'En montant' : 'En descendant') : ''}
                            </li>
                        </ul>
                        <p>GENRE :</p>
                        {/*SetOrder or setGender have value to onClick a state for exemple,
                        when we click on setGender('female'), the button show us only woman in the results
                        of the random user API*/}
                        <button className="btn btn-danger button" onClick={() => setGender('female')}>
                            <img src="https://img.icons8.com/material/24/000000/venus-symbol.png"/>
                        </button>
                        <button className="btn btn-danger button" onClick={() => setGender('male')}>
                            <img src="https://img.icons8.com/material/24/000000/mars-symbol.png"/>
                        </button>
                        <button className="btn btn-danger button" onClick={() => setGender('')}>
                            <img src="https://img.icons8.com/material/24/000000/couple-man-woman.png"/>
                        </button>
                    </div>
                    <br/>
                    <Table users={filteredUser} sort={sort} onSortChange={setSort}/>
                </div>
            </div>
    )
};