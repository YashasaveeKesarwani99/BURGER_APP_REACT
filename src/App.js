import React from "react";
import "./styles.css";
import Layout from "../Components/Layouts/layout";
import BurgerBuilder from "../Containers/BurgerBuilder/burgerBuilder";

export default function App() {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}
