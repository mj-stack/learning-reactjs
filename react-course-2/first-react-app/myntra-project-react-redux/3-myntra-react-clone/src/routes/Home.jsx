import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item, i) => (
          <HomeItem key={i} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
