import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ScrollToTopRoute from "./ScrollToTopRoute";
import DefaultLayout from "./containers/DefaultLayout";

import Login from "./containers/Login";
import Blank from "./containers/Blank";
import Dashboard from "./containers/Dashboard";
import Products from "./containers/Products";
import ProductDetail from "./containers/ProductDetail";
import ProductDetailView from "./containers/ProductDetailView";
import Brewery from "./containers/Brewery";
import ProductsApprove from "./containers/ProductsApprove";
import RetailSales from "./containers/RetailSales";
import PendingLabels from "./containers/PendingLabels";
import Breweries from "./containers/Breweries";
import BreweryCreate from "./containers/BreweryCreate";
import BreweryManage from "./containers/BreweryManage";
import BreweriesManagement from "./containers/BreweriesManagement";
import "./App.css";

export const PrivateRoute = ({
  component: Component,
  containLayout,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <DefaultLayout {...props} isLoggedIn>
          <Component {...props} />
        </DefaultLayout>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export const UnAuthenticatedRoute = ({
  component: Component,
  isLoggedIn,
  containLayout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Redirect to={{ pathname: "/dashboard" }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export const BlankRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopRoute>
        <div className="App">
          <Switch>
            <UnAuthenticatedRoute
              exact
              path="/"
              component={Login}
              isLoggedIn={false}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/breweries/edit"
              component={Brewery}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/breweries/addproducts"
              component={Breweries}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/breweries/create"
              component={BreweryCreate}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/breweries"
              component={BreweryManage}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/breweries/management"
              component={BreweriesManagement}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/products"
              component={Products}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/products/create"
              component={ProductDetail}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/products/detail"
              component={ProductDetail}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/productview"
              component={ProductDetailView}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/pproducts"
              component={ProductsApprove}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/plabels"
              component={PendingLabels}
              isLoggedIn={true}
              containLayout={true}
            />
            <PrivateRoute
              exact
              path="/retailsales"
              component={RetailSales}
              isLoggedIn={true}
              containLayout={true}
            />

            <PrivateRoute
              exact
              path="/about"
              component={Dashboard}
              isLoggedIn={true}
              containLayout={true}
            />
            <BlankRoute component={Blank} />
          </Switch>
        </div>
      </ScrollToTopRoute>
    </BrowserRouter>
  );
}

export default App;
