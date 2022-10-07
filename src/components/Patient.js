const Patient = (props) => {

    console.log(props);

    return (

        <>
            
             <h1>PROFILE INFORMATION</h1>
             <h3> Name: { props.name } </h3>
             <h3> Age: { props.age} </h3>

             { props.children }
        
         </>

      );

}

export default Patient;