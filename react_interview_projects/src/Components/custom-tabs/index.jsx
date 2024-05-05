import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div
            onClick={() => handleClick(index)}
            key={tab.lable}
            className={`label-container ${
              currentTabIndex === index ? "active" : ""
            }`}
          >
            <span className="label">{tab.lable}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
