
import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <main>
          <BlogList searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default App;
