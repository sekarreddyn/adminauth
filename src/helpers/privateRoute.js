import React from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../components/Layout/Header";
import { Layout } from "antd";

const { Content } = Layout;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <Header />
            <Content>
              <Component key={props.match.params.type} {...props} />
            </Content>
          </Layout>
        </Layout>
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
    }
  />
);
export default PrivateRoute;
