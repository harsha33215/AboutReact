import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please Select a Topic</p>;
  if(selectedTopic){
    tabContent =  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                clickSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                clickSelect("jsx");
              }}
            >
              Jsx
            </TabButton>
            <TabButton
              onSelect={() => {
                clickSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                clickSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
