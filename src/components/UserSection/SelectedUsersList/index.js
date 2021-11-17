import React from 'react';

const SelectedUsersList = (props) => {
  const {users} = props;
  const selectedUsers = users.filter((user)=>user.isSelected);
  
  const renderUsers = ({id, fname}) =><span key={id}>{fname} </span>;  
  return (
    <div>
      {selectedUsers.map(renderUsers)}
    </div>
  );
}

export default SelectedUsersList;
