import VivaForm from "@/components/Forms/VivaForm";
import VivaInput from "@/components/Forms/VivaInput";

const CheckoutPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8">
        <div className="mt-10 max-w-7xl mx-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <div className="py-6">
            <h1 className="text-center text-3xl font-bold text-white">
              Send Order Request
            </h1>
            <p className="text-center text-xl py-6 text-white">
              We are here to provide you all the details.Please fill up the form
              below and we will get back to you .
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="max-w-md mx-auto p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <VivaForm>
            <div className="space-y-4 text-gray-200 text-sm font-medium">
              <div>
                <VivaInput name="name" label="Name" />
                <label className="block" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label className="block" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
            </div>

            <div className="w-full mt-1">
              <button
                className="min-w-full bg-gradient-to-r from-blue-600 via-sky-400-400 to-blue-900 text-white px-4 py-2 font-bold rounded-md hover:opacity-50"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </VivaForm>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;