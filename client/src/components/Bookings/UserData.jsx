// import React from "react";


// function UserData({user}){
//     console.log(user);
//     if (!user) {
//         // If users data is not available, display a loading message or a placeholder
//         return <div>Nothing booked yet</div>;
//       }
    
//     return(
//         <>
//             {
//             user.map((curr_user) => {
//                 const {Crop, Land, Yeild, Price} = curr_user;

//                 return(
//                     <tr>
//                         <td id="table_element">{Crop}</td>
//                         <td id="table_element">{Land}</td>
//                         <td id="table_element">{Yeild}</td>
//                         <td id="table_element">{Price}</td>   

//                     </tr>
//                 );
//             })
//             }
//         </>
//     );
// }

// export default UserData;




import React from "react";

function UserData({ users }) {
//   console.log(`users = ${users}`);
  if (!users || users.length === 0) {
    // If users data is not available or empty, display a loading message or a placeholder
    return <div>Nothing booked yet</div>;
  }

  return (
    <>
      {users.map((curr_user, index) => {
        const { crop, land, yeild, price } = curr_user;
        {/* console.log(`crop = ${crop}, land = ${land}, yeild = ${yeild}, price = ${price}`); */}

        return (
          <tr key={index}>
            <td id="table_element">{crop}</td>
            <td id="table_element">{land}</td>
            <td id="table_element">{yeild}</td>
            <td id="table_element">{price}</td>
          </tr>
        );
      })}
    </>
  );
}

export default UserData;
