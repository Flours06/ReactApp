import axios from "axios";

const fetchUsers = async (userCount) => {
    try {
        // we get data from the API, here its randomuser
        const {data: {results}} = await axios.get('https://randomuser.me/api/?results=' + userCount)

        // we map the results of the api in result. With that we can get all the results with the different var,
        // for example 'id' or 'gender'
        return results.map(result => ({
            id: result.login.uuid,
            firstName: result.name.first,
            lastName: result.name.last.toUpperCase(),
            phone: result.phone,
            email: result.email,
            age: result.dob.age,
            picture: result.picture.thumbnail,
            gender: result.gender,
            street: result.location.street,
            city: result.location.city,
            state: result.location.state,
            CP: result.location.postcode,
            birthday: result.dob.date,
            bigPicture: result.picture.large
        }))
    } catch (e) {
        console.error(e);
        return []
    }

};

export default fetchUsers;