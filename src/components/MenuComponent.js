rt React, { Component } from 'react';
import { Media } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        this.onDishSelect = this.onDishSelect.bind(this)
     
 

    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

     

   

    render() {
         const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1" key={dish.id}>
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" key={dish.id} src={dish.image} alt={dish.name} />
                  <CardImgOverlay >
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
   
      
     
        

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  
                    <DishDetail dish={this.state.selectedDish} />
                  
                
                  
                
                   
                </div>
            </div>
        );
    }
}

export default Menu;