import useAuth from "@/hooks/useAuth";
import VivaForm from "../Forms/VivaForm";
import VivaInput from "../Forms/VivaInput";
import { Button } from "../ui/button";

const AddCategory = () => {
  const { addCategory } = useAuth();
  const handleCategory = (data) => {
    console.log(data);
    const res = addCategory(data);

    console.log({ res });
  };
  return (
    <div>
      <h1 className="text-center">Add Category</h1>
      <div>
        <VivaForm
          onSubmit={handleCategory}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <VivaInput className="w-[50%]" name="name" label="Category" />
          <Button className="block" type="submit">
            Submit
          </Button>
        </VivaForm>
      </div>
    </div>
  );
};

export default AddCategory;
