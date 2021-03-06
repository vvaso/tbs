import React , { Component } from 'react';
import { Materialize_AutoComplete } from '../assets/scripts';



class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }

  componentDidMount(){
    Materialize_AutoComplete();
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <section id="search" className="section section-search teal darken-1 white-text center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3>Search Destinations</h3>
              <div className="input-field">
                <input type="text" value={this.state.search} OnChnage={this.updateSearch} className="white grey-text autocomplete" id="autocomplete-input" placeholder="Santorini, Mykonos, etc..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export { Search };