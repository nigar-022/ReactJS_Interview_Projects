import Tabs from ".";
import "./tabs.css";

function RandomComponent() {
  return <h3>This is some random content</h3>;
}

export default function TabsParent() {
  const tabs = [
    {
      lable: "Tab 1",
      content: "This is content for Tab 1",
    },
    {
      lable: "Tab 2",
      content: "This is content for Tab 2",
    },
    {
      lable: "Tab 3",
      content: "This is content for Tab 3",
    },
    {
      lable: "Tab 4",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
