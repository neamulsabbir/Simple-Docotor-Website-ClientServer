import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const Users = () => {
  const {data: users = [], refetch} = useQuery({
    queryKey:['userData'],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/userData")
      const data = await res.json()
      return data
    }
  })

  const handleMakeAdmin = (userInfo) => {
    const agree = window.confirm(`Are you sure you want to make a admin ${userInfo?.displayName}`)
    if(agree){
      fetch(`http://localhost:5000/userData/admin/${userInfo?._id}`,{
        method: "PUT",
      })
      .then(res => res.json())
      .then(data => {
        toast.success('Admin create successfully')
        refetch()
        // console.log(data)
      })
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            // {data?.length > 0 ?}
            <tr>
              <th>{index + 1}</th>
              <td>{data?.displayName}</td>
              <td>{data?.email}</td>
              <td>
                {
                  data?.role !== "admin" && 
                  <button
                  onClick={() => handleMakeAdmin(data)}
                  className="bg-cyan-600 p-2 rounded-lg text-white text-xs"
                >
                  Make Admin
                </button>
                }
              </td>
              <td>
                <button className="bg-red-600 p-2 rounded-lg text-white text-xs">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
