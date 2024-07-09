import withRole from '@/components/withRole';

const AdminPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-black">Admin Page</h1>
      <p>Welcome, admin!</p>
    </div>
  );
};

export default withRole(AdminPage, 'admin');
