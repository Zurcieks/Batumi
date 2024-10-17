import { FaCamera, FaChartLine, FaBuilding, FaHandHoldingUsd, FaPaintBrush, FaHome } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center py-5  mb-12 ml-7">
      <hr className="my-12 border-t-2 border-gray-300 mx-auto w-full opacity-75" />
      <h2 className="text-4xl font-bold text-gray-800 mb-8">What do we offer?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Property Management</h3>
              <p className="text-gray-600">Comprehensive property management in Batumi, including rental and administration.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaHandHoldingUsd className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Selling and Buying Real Estate</h3>
              <p className="text-gray-600">Safe and efficient process of buying or selling a property on the Batumi market.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaChartLine className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Real Estate Market Analysis</h3>
              <p className="text-gray-600">Reliable analyses of market trends to support your investment decisions.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaHome className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Investment Consultancy</h3>
              <p className="text-gray-600">Professional advice on choosing the best properties for investment in Batumi.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPaintBrush className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Home Staging</h3>
              <p className="text-gray-600">Increase the attractiveness of your property before selling or renting it through professional home staging.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaCamera className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Real Estate Photography</h3>
              <p className="text-gray-600">Professional photo shoots to make your property stand out in the market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
