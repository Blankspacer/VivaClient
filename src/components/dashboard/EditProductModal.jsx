/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import VivaModal from "../common/VivaModal";
import toast from "react-hot-toast";
import VivaForm from "../Forms/VivaForm";
import VivaInput from "../Forms/VivaInput";
import useAuth from "@/hooks/useAuth";
import { useState } from "react"; // Add this import

const EditProductModal = ({ data, refetch }) => {
  const { editProducts } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage state here

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (submitData) => {
    console.log(submitData);

    const convertedData = submitData?.pricingTiers?.map((item) => ({
      minQuantity: Number(item.minQuantity),
      unitPrice: Number(item.unitPrice),
      id: item.id,
    }));

    submitData.pricingTiers = convertedData;
    submitData.basePrice = Number(submitData.basePrice);
    submitData.rating = Number(submitData.rating);
    console.log(submitData);
    const res = await editProducts(data._id, submitData);
    console.log(res);
    if (res.success) {
      toast.success("Product Updated Successfully");
      refetch();
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="text-blue-600 hover:text-blue-900"
      >
        <FaEdit className="w-5 h-5" />
      </button>
      <VivaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`Edit ${data?.name}`}
      >
        {data && (
          <div className="space-y-4">
            <VivaForm onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-6 justify-center">
                <VivaInput
                  name="name"
                  defaultValue={data.name}
                  placeholder={data.name}
                  label="Name"
                  addLabel={true}
                />
                <VivaInput
                  name="basePrice"
                  label="Base Price"
                  type="text"
                  defaultValue={data?.basePrice}
                  placeholder={data?.basePrice}
                  addLabel={true}
                />
                <VivaInput
                  name="description"
                  label="Description"
                  defaultValue={data?.description}
                  placeholder={data?.description}
                  addLabel={true}
                />
                <VivaInput
                  name="rating"
                  label="Ratings"
                  type="text"
                  defaultValue={data?.rating}
                  placeholder={data?.rating}
                  addLabel={true}
                />
              </div>

              <div>
                <h1 className="my-4 font-bold">Pricing Tiers</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {data?.pricingTiers.length > 0 &&
                    data?.pricingTiers.map((tier, index) => (
                      <div key={tier._id} className="flex gap-4">
                        <VivaInput
                          name={`pricingTiers[${index}].minQuantity`}
                          label="Quantity"
                          type="text"
                          defaultValue={tier?.minQuantity}
                          placeholder={tier?.minQuantity}
                          addLabel={true}
                        />
                        <VivaInput
                          name={`pricingTiers[${index}].unitPrice`}
                          label="Unit Price"
                          type="text"
                          defaultValue={tier?.unitPrice}
                          placeholder={tier?.unitPrice}
                          addLabel={true}
                        />
                        <VivaInput
                          hidden={true}
                          name={`pricingTiers[${index}].id`}
                          defaultValue={tier?._id}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="block flex justify-center items-center">
                <button
                  type="submit"
                  className="px-4 py-2 mt-6 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            </VivaForm>
          </div>
        )}
      </VivaModal>
    </>
  );
};

export default EditProductModal;
