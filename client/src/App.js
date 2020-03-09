import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { SAY_HELLO } from "./queries";

const App = () => {
  const { data, loading } = useQuery(SAY_HELLO);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
