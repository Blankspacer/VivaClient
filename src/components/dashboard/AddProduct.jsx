/* eslint-disable no-unused-vars */
import useAxiosSecure from "@/hooks/useAxiosSecure";
import VivaForm from "../Forms/VivaForm";
import VivaInput from "../Forms/VivaInput";
import { useQuery } from "@tanstack/react-query";
import { transformCategory } from "@/helpers/transformCategory";
import VivaSelect from "../common/VivaSelect";
import { Button } from "../ui/button";
import { useState } from "react";
import MultipleImage from "../common/MultipleImage";

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
  const [previewImages, setPreviewImages] = useState([]);

  console.log({ previewImages });
  //   console.log({ paperData });

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

          <VivaInput name="ratings" label="Ratings" type="number" />
        </div>
        {/* <div className="grid grid-cols-3 gap-6 justify-center">
          <SelectSize
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
          <SelectPaperStock paperData={paperData} setPaperData={setPaperData} />
        </div> */}

        <div>
          <h1 className="my-4 font-bold">Pricing Tiers</h1>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
            <VivaInput
              name="pricingTiers[0].minQuantity"
              label="Quantity"
              placeholder="Minimum Quantity"
              type="number"
            />
            <VivaInput
              name="pricingTiers[0].unitPrice"
              label="Unit Price"
              type="number"
            />
            <VivaInput
              name="pricingTiers[1].minQuantity"
              label="Quantity"
              type="number"
            />
            <VivaInput
              name="pricingTiers[1].unitPrice"
              label="Unit Price"
              type="number"
            />
            <VivaInput
              name="pricingTiers[2].minQuantity"
              label="Quantity"
              type="number"
            />
            <VivaInput
              name="pricingTiers[2].unitPrice"
              label="Unit Price"
              type="number"
            />
            <VivaInput
              name="pricingTiers[3].minQuantity"
              label="Quantity"
              type="number"
            />
            <VivaInput
              name="pricingTiers[3].unitPrice"
              label="Unit Price"
              type="number"
            />
          </div>
        </div>

        <div>
          <MultipleImage
            previewImages={previewImages}
            setPreviewImages={setPreviewImages}
          />
        </div>
        <div className="block flex justify-center items-center">
          <Button type="submit">Submit</Button>
        </div>
      </VivaForm>
    </div>
  );
};

export default AddProduct;
