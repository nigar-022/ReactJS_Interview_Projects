import { useState } from "react";
import "./App.css";
import Accordian from "./Components/Accordian/Accordian";
import { ContextApp } from "./Components/ContextExample";
import Login from "./Components/ContextExample2/Login";
import Profile from "./Components/ContextExample2/Profile";
import { UserContext } from "./Components/ContextExample2/UserContext";
import TableD from "./Components/DisplayTableFormat";
import ImageSlider from "./Components/ImageSlider";
import LoadMoreProducts from "./Components/LoadMoreProducts";
import DisplayDataTable from "./Components/MultipleApiDataDisplayInTable";
import ToDo from "./Components/ToDoList";
import TabsParent from "./Components/custom-tabs/tabs-parent";
import InfiniteScrollA from "./Components/infiniteScrollAPIData";
import InfiniteScroll from "./Components/infoniteScroll";
import StarRating from "./Components/starRating";
import ThemeApp from "./Components/ThemeContext/App";
import ToDoList from "./Components/ToDoListLearnerBucket";
import MapAndFilter from "./Components/MapAndFilter";
import Formss from "./Form";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <StarRating /> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={2} /> */}
      {/* 
      <LoadMoreProducts /> */}

      {/* <TabsParent /> */}

      {/* <InfiniteScroll /> */}

      {/* <InfiniteScrollA /> */}

      {/* <TableD /> */}

      {/* <DisplayDataTable /> */}

      {/* <ToDo /> */}

      {/* <ContextApp /> */}

      {/* <UserContext.Provider value={{ user, setUser }}>
        <Login />
        <Profile />
      </UserContext.Provider> */}

      {/* <h1 className="p4 bg-pink-600 text-3xl">Yayyyyyyyy</h1> */}

      {/* <ThemeApp /> */}

      {/* <ToDoList /> */}

      {/* <MapAndFilter /> */}

      <Formss />
    </div>
  );
}

export default App;
