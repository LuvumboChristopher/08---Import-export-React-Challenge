import React from 'react';

const Contact = props => {
  return (
    <div className="friend-item">
      {/* replace the values by a jsx expression */}
      <h3>Emmanuel</h3>
      <h4>myemmanuel@email.com</h4>
      <h4>123123</h4>
      {/* show the button only if isDeletable is true */}
      <button>Delete</button>
    </div>
  );
};

export default Contact