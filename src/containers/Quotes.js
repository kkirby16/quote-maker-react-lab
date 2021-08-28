import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote } from "../actions/quotes";
import { upvoteQuote } from "../actions/quotes";
import { downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote) => {
                <QuoteCard
                  removeQuote={this.props.removeQuote}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
                  key={quote.id}
                  quote={quote}
                />;
              })}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
  };
};

//probably should have mapStateToProps and also probably needs mapDispatchToProps or getting actions from actions/quotes.js
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
