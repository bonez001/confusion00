import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
                                                                                                                                                                                                                                                                                                                                                                          


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
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  if(comments_array != null)
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
  
console.log(props.dish)
  return(
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish  dish={props.dish}/>
      </div>

      <div className="col-12 col-md-5 m-1">
        
        <RenderComments comments_array={props.dish.comments}/>
      </div>
    
````</div>
  
  )
}


export default DishDetail;