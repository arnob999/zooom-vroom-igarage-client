import React from 'react';
import nullAvatar from "../../../../assets/avatarNull.webp"
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Loading from "../../../../component/Loading/Loading"
import VerificationBadge from "../../../../component/VerificationBadge/VerificationBadge"

const AllSeller = () => {
    const handleVerification = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/user/verification/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearrer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success("Seller Verified Successfully")
            })
    }
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5000/users/authorized/seller", {
                    headers: {
                        authorization: `bearrer ${localStorage.getItem('accessToken')}`
                    }
                })

                const data = await res.json();

                return data;
            }

            catch (err) {
                console.error(err)
            }

        }
    })


    const handleDeleteUser = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/user/delete/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearrer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success("Seller Deleted Successfully")
            })

    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto w-full mx-7">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sellers.map((seller, i) => <>
                            <tr key={seller._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={nullAvatar} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{seller.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {seller.email}
                                </td>
                                <td className='uppercase text-sm'>{seller.role}</td>
                                <td>
                                    {
                                        seller.verified === "true" ? <>
                                            <VerificationBadge />
                                        </> : <>
                                            <button onClick={() => { handleVerification(seller._id) }} className='btn btn-xs rounded-xl text-white bg-orange-600 hover:bg-orange-700'>Verify</button>
                                        </>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => { handleDeleteUser(seller._id) }} className="btn btn-ghost btn-xs bg-red-600 text-white hover:bg-red-700">Delete</button>
                                </td>
                            </tr>
                        </>)
                    }

                </tbody>



            </table>
        </div>
    );
};

export default AllSeller;