import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Nav,
     NavItem,
     NavLink,
     Button,
     Table,
     Form
  } from 'reactstrap'

class BarPos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        beer_glass:0,
        wine_glass:0,
        beer_bottle:0,
        wine_bottle:0
    }
  }

  handleClickBeer = () =>{

      // If beer_glass % 4 == 0 then substract 1 from the inventory api
      // Create a hidden state reset
      let {beer_glass, beer_bottle} = this.state
      this.setState({beer_glass:beer_glass + 1})
      if (beer_glass === 4) {
          this.setState({beer_bottle:1})
      }
      else if (beer_glass % 4 === 0 && beer_glass > 4) {
          this.setState({beer_bottle: beer_bottle + 1})
      }
  }

  handleClickWine = () =>{
      let {wine_glass, wine_bottle} = this.state
      this.setState({wine_glass:wine_glass + 1})
      if (wine_glass % 4 === 0 && wine_glass !== 0) {
          this.setState({wine_bottle:wine_bottle + 1})
      }
  }

  render () {
      const {beer_glass,wine_glass,beer_bottle,wine_bottle} = this.state
    return (
      <React.Fragment>
      <div>
        <h4 className="d-flex flex-row justify-content-center mt-5">Bartender name goes here:</h4>
        <br></br>
        <div className="d-flex mx-auto">
            <div id='buttons-container' className="button-container align-content-left mt-5">
                 <Button id="pos-button" data-toggle='button' className="btn btn-lg btn-block mb-3 active"
                 onClick={this.handleClickBeer}
                 >Beer</Button>
                 <br></br>
                 <Button id="pos-button" data-toggle='button' className="btn btn-lg btn-block mb-3 active"
                 onClick={this.handleClickWine}
                 >Wine</Button>
             </div>
             <div className='Bill-container align-content-right w-50 mx-auto'>
             <Table className="pos-table table table-hover">
                <thead>
                    <tr>
                    <th scope="col" className='font-weight-bold text-dark'>Drink:</th>
                    <th scope="col" className='font-weight-bold text-dark'>Amount:</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    <tr>
                        <th className='font-weight-bold text-dark'>Beer</th>
                        <th>{beer_glass}</th>
                    </tr>
                    <tr>
                        <th className='font-weight-bold text-dark'>Wine</th>
                        <th>{wine_glass}</th>
                    </tr>
                    <tr>
                        <th className='font-weight-bold text-dark'>Total price</th>
                        <th className='font-weight-bold text-dark'>$12</th>
                    </tr>
                </tbody>
             </Table>
             <Form className='align-content-right'>
                <Button id='submit-button' className="btn btn-dark">Submit</Button>
             </Form>
             </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default BarPos
