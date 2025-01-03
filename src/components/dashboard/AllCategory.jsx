/* eslint-disable no-unused-vars */
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Loading from "../ui/Loading";

// Styled components for the table
const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: gray;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
`;

const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => (props.edit ? "#28a745" : "#dc3545")};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

const AllCategory = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/api/categories");
      console.log(data.data[0].name);
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const handleEdit = (id) => {
    console.log(`Edit category with id: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete category with id: ${id}`);
    // Add your delete logic here
  };

  return (
    <TableWrapper>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {data?.data?.map((category) => (
            <TableRow key={category._id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <ActionButton edit onClick={() => handleEdit(category._id)}>
                  Edit
                </ActionButton>
                <ActionButton onClick={() => handleDelete(category._id)}>
                  Delete
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default AllCategory;
