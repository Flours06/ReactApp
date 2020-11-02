import React from "react";
import Row from "./Row";
import IconSort from "./IconSort";

// Table of users
const Table = ({users, sort, onSortChange}) => {

    const getSortOrder = (key) => {
        if (sort.key !== key) {
            return ''
        }
        return sort.asc ? 'asc' : 'desc'
    };
    const handleSortChange = (key) => {
        onSortChange(oldSort => {
            if  (oldSort.key !== key) {
                return { key, asc: true }
            }
            if (oldSort.asc) {
                return {key, asc: false}
            }
            return {key: '', asc: true}
        })
    };

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Photo</th>
                <th onClick={() => handleSortChange('lastName')}>
                    Prénom nom
                    <IconSort state={getSortOrder('lastName')}/>
                </th>
                <th onClick={() => handleSortChange('email')}>
                    Email
                    <IconSort state={getSortOrder('email')}/>
                </th>
                <th>Tel</th>
                <th onClick={() => handleSortChange('age')}>
                    Age
                    <IconSort state={getSortOrder('age')}/>
                </th>
                <th>
                    Genre
                </th>
            </tr>
            </thead>
            <tbody>
            {/*
        we map the results of the API in any Row.
        Like that, each row have all the data we want.
        */}
            {users.map(user => <Row user={user} key={user.id}/>)}
            </tbody>
        </table>
    )};

export default Table;