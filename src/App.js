
import React, { useEffect, useState } from "react";
import "./App.css";
import FormButton from "./Components/FormButton";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Table from "./Components/Table";
import axios from './axios'
import Pusher from "pusher-js";

function App() {
  const [StudentsDB, setStudentsDB] = useState([])
  useEffect(() => {
    axios.get('/')
    .then(response =>
      {
        setStudentsDB(response.data)
      })
   
  }, [StudentsDB])
  useEffect(() => {

    const pusher = new Pusher('e6ddd738963d174d7848', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('StudentsDB');
    channel.bind('inserted', function(data) {
      setStudentsDB([...StudentsDB,data])
    });
    
    return () => {
      channel.unbind_all();
      channel.unsubscribe() 
    }
  }, [StudentsDB])
  return (
    <div className="App">
      <Sidebar />
      <div className='Body'>
        <Header />
        <FormButton />
        <Table Data={StudentsDB} />
      </div>
    </div>
  );
}

export default App;
