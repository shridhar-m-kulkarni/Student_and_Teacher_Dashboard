import SideBar from "../components/SideBar";
import MainBar from "../components/MainBar";
import { MyProvider } from "../components/MyContext";

const MainPage = () => {
  return (
    <MyProvider>
      <div className="flex min-h-screen">
        <SideBar />
        <div className="flex-1 min-w-0">
          <MainBar />
        </div>
      </div>
    </MyProvider>
  );
};

export default MainPage;