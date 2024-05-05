import { useState, useEffect } from "react";

export default function InfiniteScroll() {
  const [count, setCount] = useState(50);
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  let element = [];

  for (let i = 0; i < count; i++) {
    element.push(<div>{i + 1}</div>);
  }

  return <div>{element}</div>;
}
