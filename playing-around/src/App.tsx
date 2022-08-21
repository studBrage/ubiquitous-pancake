import React from "react";
import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { TextInputCard } from "./components/TextInputCard";

function App() {

  

  return (
    <div className="flex flex-col h-full">
      <Header/>
      <Section/>
      <div className='uppercase font-bold justify-start p-4'>
            <h1 className='text-8xl'>Brage</h1>
        </div>
    </div>
  );
}

export default App;
