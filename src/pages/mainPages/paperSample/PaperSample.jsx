// import bannerImg from "../../../assets/paper-banner.jpg";

const PageSample = () => {
  return (
    <div>
      <div className="max-w-7xl h-[200px] mx-auto">
        <div className="mt-10 max-w-7xl mx-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <div className="py-6">
            <h1 className="text-center text-3xl font-bold text-white">
              Paper Sample
            </h1>
            <p className="text-center text-xl py-6 text-white">
              At Viva Printing Press we provie and suggest you the best paper
              you should choose according to your budget.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="max-w-md mx-auto p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter shadow-2xl backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <form>
            <div className="space-y-4 text-gray-200 text-sm font-medium">
              <div>
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
                <label className="block" htmlFor="website">
                  Website
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type="text"
                  name="website"
                  placeholder="Website Url"
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

            <div className="flex justify-end mt-1">
              <button
                className="bg-gradient-to-r from-orange-600 via-orange-400 to-red-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageSample;
