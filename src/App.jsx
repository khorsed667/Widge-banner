import GalleryWidget from "./component/GalleryWidget";
import TabbedWidget from "./component/TabbedWidget";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left half empty */}
      <div className="hidden md:block md:w-1/2"></div>

      {/* Right half with widgets */}
      <div className="w-full md:w-1/2 p-2 mt-5">
        <TabbedWidget></TabbedWidget>
        <div className="mt-8">
          <GalleryWidget></GalleryWidget>
        </div>
      </div>
    </div>
  );
}

export default App;
