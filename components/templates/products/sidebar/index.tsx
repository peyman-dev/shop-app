import Filters from "./components/filters";

const Sidebar = ({ className = "" }: { className?: string }) => {
  return (
    <aside className={`space-y-5 ${className}`}>
      <Filters />
    </aside>
  );
};

export default Sidebar;
