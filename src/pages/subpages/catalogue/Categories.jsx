import React, { useState } from "react";
import DraggableTable from "../../../components/DraggableTable";
import Layout from "../../../layouts/Layout";

const Categories = () => {
  const columns = ['Category Name', 'Status', 'Item Count'];
  const columnMap = {
    'Category Name': 'categoryName',
    'Status': 'status',
    'Item Count': 'itemCount',
  };

  const initialData = [
    { id: 1, categoryName: 'Plumbing', status: 'Active', itemCount: 1 },
    { id: 2, categoryName: 'Lawyer', status: 'Inactive', itemCount: 3 },
    { id: 3, categoryName: 'Cleaning', status: 'Active', itemCount: 2 },
    { id: 4, categoryName: 'Electrician', status: 'Inactive', itemCount: 1 },
  ];

  const [data, setData] = useState(initialData);

  const handleReorder = (reorderedData) => {
    setData(reorderedData);
  };

  return (
    <Layout>
      <div className="p-6">
        <DraggableTable
          columns={columns}
          columnMap={columnMap} 
          data={data}
          onReorder={handleReorder}
          onNavigate="/add/addCategories"
          heading="Categories" 
        />
      </div>
    </Layout>
  );
};

export default Categories;
