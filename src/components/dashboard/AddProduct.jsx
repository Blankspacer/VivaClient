import useAxiosSecure from "@/hooks/useAxiosSecure";
import VivaForm from "../Forms/VivaForm";
import VivaInput from "../Forms/VivaInput";
import { useQuery } from "@tanstack/react-query";
import { transformCategory } from "@/helpers/transformCategory";
import VivaSelect from "../common/VivaSelect";
import { Button } from "../ui/button";
import { useState } from "react";
import SelectSize from "./SelectSize";
import SelectPaperStock from "./SelectPaperStock";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/api/categories");
      console.log(data.data);
      return data;
    },
  });

  let category;

  if (!isLoading) {
    category = transformCategory(data?.data);
  }

  const handleSubmit = (data) => {
    console.log(data);
  };

  const [selectedData, setSelectedData] = useState([]);

  const [paperData, setPaperData] = useState([]);

  console.log({ selectedData });
  console.log({ paperData });

  return (
    <div>
      <h1>Add Product</h1>

      <VivaForm onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 justify-center">
          <VivaInput name="name" label="Name" />
          <VivaInput name="basePrice" label="Base Price" type="number" />
          <VivaInput name="quantity" label="Minimum Quantity" type="number" />
          <VivaInput name="description" label="Description" />
          <VivaSelect options={category} name="category" disabled={isLoading} />
        </div>
        <div className="grid grid-cols-3 gap-6 justify-center">
          <SelectSize
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
          <SelectPaperStock paperData={paperData} setPaperData={setPaperData} />
        </div>

        <Button type="submit">Submit</Button>
      </VivaForm>
    </div>
  );
};

export default AddProduct;
