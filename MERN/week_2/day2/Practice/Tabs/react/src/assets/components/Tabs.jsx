const Tabs = (props) => {
    const { tabsArray, selectTab, tabStyle } = props;

    // Using both inline style and css to demonstrate both usage syntax
    return (
        <div style={{ margin: "auto", width: "85%", textAlign: "left" }}>
            {
                tabsArray.map((tab, index) => (
                    <div key={index} 
                    className={`tab ${tabStyle(index)}`} 
                    onClick={(e) => selectTab(index)}>
                        {tab.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;