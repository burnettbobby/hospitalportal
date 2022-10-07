const Department = (props) =>{

    return (

       <>
                <br></br>
          <h1> DEPARTMENT DETAILS </h1>

           <h3> Dept Name: { props.dept} </h3>
           <h3> Doctor: { props.doctor} </h3>
           <h3> Nurse: { props.nurse} </h3>

         </>

 );

}

export default Department;