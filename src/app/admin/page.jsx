import Content from "./content";
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const Admin = () => {
  return (
    <div className="flex flex-1 h-screen">
      <Content />
    </div>
  );
};

export default Admin;
