// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import Home from './Home'

// // function App(){
//   return(
//     <>
//      <Header/>
//      <Footer/>
//      <Home/>
//     </>
//   );
// }
// export default App 
// import Card from './Card.jsx'
// function App(){
//    return(
//     <>
//     <Card name="jack" age="30" isEnrolled={true}/>
//     <Card name="sara" age="24" isEnrolled={true}/>
//     <Card name="john" age="45" isEnrolled={false}/>
//     <Card/>
    
//     </>

//    );
  
// }
// export default App

import Card1 from './Card1.jsx'
function App(){
  const data = [
    {
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      title: "Card 1",
      description: "This is the description for the first card."
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      title: "Card 2",
      description: "This is the description for the second card."
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      title: "Card 3",
      description: "This is the description for the third card."
    }
  ];

   return(
    <div className="card-list">
    {data.map((item, index) => (
      <Card1 
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    ))}
  </div>
 

   );

   
  
}
export default App