import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';                                                                                                                                                                                                                                                                                                                                    


function RenderDish({dish}) {
    if (dish != null)
        return(
            <div className="row">
              <div className="col">
                <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
              );
    else
        return(
            <div></div>
        );
};



function RenderComments({comments_array})  {
  // console.log({comments_array})

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  if(comments_array.length !== 0)
  {
    const comm1 = comments_array.map((comm_) => {
      const dd = new Date(comm_.date);
        return (
            <ul className = "list-unstyled" key={comm_.id}>
              <li>
                <p>{comm_.comment}</p>            
                <p> --{comm_.author}, { months[(dd).getMonth()-1]}  {(dd).getDate()},  {(dd).getFullYear()}</p>           
              </li>   
            </ul>
                );
  });

  return (
    
    <div className="row" key={comments_array.id}>
      <div className="col">
      <h4> Comments </h4> 
      {comm1}
      </div>
    </div>          
  )
  }
  else{
    return (      
      <div> </div>          
    )
  }
      
      
  }


const  DishDetail = (props) => {
  
// console.log(props.dish)
if (props.dish != null)
{
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          {/* {console.log(props.comments)} */}
            <RenderComments comments_array={props.comments} />
        </div>
    </div>
    </div>
);
}
}


export default DishDetail;