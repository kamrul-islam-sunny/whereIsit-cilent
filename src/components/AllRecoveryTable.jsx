import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
const AllRecoveryTable = ({userRecoveryItem}) => {
    return (
        <div>
               <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
          <Table>
            <Thead className="bg-gray-100">
              <Tr>
                <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">
                  Title
                </Th>
                <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">
                  Post Type
                </Th>
                <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">
                  Location
                </Th>
                <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">
                  Date
                </Th>
                <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">
                  Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {userRecoveryItem.map((item) => (
                <Tr
                  key={item._id}
                  className="hover:bg-gray-50 mb-2 rounded-lg  lg:rounded-none"
                >
                  <Td className="px-4 py-2 text-base text-gray-800 ">
                    {item.title}
                  </Td>
                  <Td className="px-4 py-2 text-base text-gray-800">
                    {item.post_type}
                  </Td>
                  <Td className="px-4 py-2 text-base text-gray-800">
                    {item.location}
                  </Td>
                  <Td className="px-4 py-2 text-base text-gray-800">
                    {new Date(item.Date).toLocaleDateString("en-GB")}
                  </Td>
                  <Td className="px-4 py-2 text-base text-gray-800">
                    {item?.status}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
        </div>
    );
};

export default AllRecoveryTable;