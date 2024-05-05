import React, { useState, useEffect } from "react";

function InfiniteScrollA() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  console.log(page);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        const newData = await response.json();
        setItems((prevItems) => [...prevItems, ...newData]);
        if (newData.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    if (hasMore && !loading) {
      fetchData();
    }
  }, [page]); // Fetch new data when page state changes

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 30
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Adding scroll event listener when component mounts

  return (
    <div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {!loading && hasMore && <div>Scroll down to load more</div>}
      {!hasMore && <div>No more items to load</div>}
    </div>
  );
}

export default InfiniteScrollA;
