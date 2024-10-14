import React from 'react';

const MusicPage = () => {
  return (
    <div>
      {/* Artist Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:mx-12 mx-4 mt-8">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="relative w-full rounded-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/400" 
              alt="Michael Jackson" 
              className="object-cover rounded-lg" 
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl lg:text-3xl font-bold">Michael Jackson</h2>
              <p className="text-sm lg:text-lg">27.852.501 monthly listeners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Section */}
      <div className="mt-12 lg:mx-12 mx-4">
        <h3 className="text-lg lg:text-2xl font-bold mb-4">Popular</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-sm lg:text-lg text-gray-300">
                <th>#</th>
                <th>Title</th>
                <th>Playing</th>
                <th>Time</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-lg">
              {/* Row 1 */}
              <tr className="bg-[#440000] hover:bg-[#640000] transition">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4 flex items-center space-x-2">
                  <img 
                    src="https://via.placeholder.com/40" 
                    alt="Billie Jean" 
                    className="w-10 h-10 object-cover rounded" 
                  />
                  <span>Billie Jean</span>
                </td>
                <td className="py-2 px-4">1.040.811.084</td>
                <td className="py-2 px-4">4:53</td>
                <td className="py-2 px-4">Thriller 25 Super...</td>
              </tr>
              {/* Row 2 */}
              <tr className="bg-[#640000] hover:bg-[#440000] transition">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4 flex items-center space-x-2">
                  <img 
                    src="https://via.placeholder.com/40" 
                    alt="Beat It" 
                    className="w-10 h-10 object-cover rounded" 
                  />
                  <span>Beat It</span>
                </td>
                <td className="py-2 px-4">643.786.045</td>
                <td className="py-2 px-4">4:18</td>
                <td className="py-2 px-4">Thriller 25 Super...</td>
              </tr>
              {/* More rows can be added similarly */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
