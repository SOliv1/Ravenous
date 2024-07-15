import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
   
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
      //'Distance From': 'distance',//
      'Closest To Me': 'distance'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {	
    this.setState({ sortBy: sortByOption });	
    this.props.searchYelp(this.state.term, this.state.location, sortByOption);	
  }
		
//replaced "this.state.location" in searchYelp() argument with "document.getElementById('txtPlaces').value" so that Google Places Autocomplete selection is used as location.

  handleSearch(event) {
  this.props.searchYelp(this.state.term, document.getElementById('txtPlaces').value, this.state.sortBy);
  event.preventDefault();
  }


  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
  }

  handleClick(e) {
    if (e.keyCode === 13 && this.state.term && this.state.location) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();

    }

}

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <form>
          <div className="SearchBar-fields">
            <input
              placeholder="Search Businesses"
              onChange={this.handleTermChange} onKeyUp={this.handleKeyPress.bind(this)} />	
              <input id="txtPlaces" placeholder="Where would you like to eat?"  onKeyUp={this.handleKeyPress.bind(this)} 
            />
            <input placeholder="Where else would you like to go?" onChange={this.handleLocationChange} />
          </div>
         {<div class="SearchBar-submit" onClick={this.handleSearch}>
            <a>Let's Go</a>
          </div> }
          
        </form>
      </div>
    );
  }
}

export default SearchBar;