import React from 'react';
import { Card, CardImg,  CardText, CardBody,
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
    }


   
    function RenderComments({comments})  {
          
              if(comments !== null)
              {
                const comm1 = comments.map((comm_) => {
                  const dd = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm_.date)));
                    return (
                        
                          <li key={comm_.id}>
                            <p>{comm_.comment}</p>            
                          <p> --{dd}</p>           
                          </li>   
                  
                            );
              });
      
              return (
               
                <div className="row" key={comments.id}>
                  <div className="col">
                    <h4> Comments </h4> 
                    <ul className = "list-unstyled">
                      {comm1}
                    </ul>
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
        

        return(
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
              </div>
         
              <div className="col-12 col-md-5 m-1">
                <RenderComments comments= {props.dish.comments} />
              </div>
            </div>
          </div>
        
        )
    }


export default DishDetail;