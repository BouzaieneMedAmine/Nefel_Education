import './App.css';
import { useState } from 'react';
import Tabs from './assets/components/Tabs';
import Content from './assets/components/Content';

function App() {
  
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  
  // create an array of items that will have a label and a content property.
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" },
  ];

  const selectTab = (index) => {
    setCurrentTabIndex(index);
  }

  // conditionally styling the tabs with classes in CSS
  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  return (
    <div className="App">
      <Tabs
        tabsArray={tabsArray}
        selectTab={selectTab}
        tabStyle={tabStyle}
      />
      <Content 
        tabsArray={tabsArray} 
        currentTabIndex={currentTabIndex} 
        />
    </div>
  );
}

export default App;