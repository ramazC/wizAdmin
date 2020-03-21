import React from "react";
import { withRouter } from "react-router";
import Modal from "react-modal";
import Pagination from "react-js-pagination";

import FilterItem from "../../components/FilterItem";
import BreweryCard from "../../components/BreweryCard";
import { IconArrowLeft, IconArrowRight } from "../../components/Icon";

import "./styles.scss";

Modal.setAppElement("#root");

class BreweryManage extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    //    const {} = this.state;
    return (
      <div className="breweryManage">
        <p>Manage your Kura</p>
        <div className="breweryManage__search">
          <div className="breweryManage__search__filter">
            <FilterItem />
            <div className="breweryManage__search__filter__button">Search</div>
          </div>
          <p onClick={() => this.props.history.push("/breweries/create")}>
            + Add brewery
          </p>
        </div>
        <div className="breweryManage__body">
          {Array(15)
            .fill(1)
            .map((el, i) => (
              <BreweryCard key={i} />
            ))}
        </div>
        <div className="breweryManage__pagination">
          <Pagination
            activePage={this.state.activePage}
            prevPageText={<IconArrowLeft />}
            nextPageText={<IconArrowRight />}
            hideFirstLastPages={true}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={pageNumber => this.handlePageChange(pageNumber)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(BreweryManage);
