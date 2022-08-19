import allUsers from '../../api/users.json';

const ActiveUsers = () => {

    const activeUsers = allUsers.filter((user) => user.isActive);
    const inactiveUsers = allUsers.filter((user) => !user.isActive);
    
    return (<div>Active users will be shown here</div>)
};
    
export default ActiveUsers;