const Content = (props) => {
    const { tabsArray, currentTabIndex } = props;

    return (
        <div className="results">
            {tabsArray[currentTabIndex].content}
        </div>
    )
}

export default Content;