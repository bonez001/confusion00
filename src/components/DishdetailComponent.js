import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
                                                                                                                                                                                                                                                                                                                                                                             
class DishDetail  extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.renderDish = this.renderDish.bind(this)
        this.renderComments = this.renderComments.bind(this)
      
    }    

    renderDish(dish) {
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


   
    renderComments(comments_array) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
              if(comments_array != null)
              {
                const comm1 = comments_array.comments.map((comm_) => {
                  const dd = new Date(comm_.date);
                    return (
                        
                          <li key={comm_.id}>
                            <p>{comm_.comment}</p>            
                          <p> --{comm_.author}, { months [(dd).getMonth()-1]}  {(dd).getDate()},  {(dd).getFullYear()}</p>           
                          </li>   
                  
                            );
              });
      
              return (
               
                <div className="row" key={comments_array.id}>
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
    

    render() {
        

        return(
          <div className="row">
          <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
          </div>
         
          <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish)}
          </div>
          
      </div>
        
        )
    }
}

export default DishDetail;