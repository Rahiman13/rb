import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Navbar from '../Navbar/Navbar';

const MyOrders = () => {
  const [aggregatedPurchases, setAggregatedPurchases] = useState([]);
  const [deletingPurchaseId, setDeletingPurchaseId] = useState(null);
  const [address, setAddress] = useState({
    street: '',
    landmark: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPurchases = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('Login to see your orders');
        return;
      }
      try {
        const response = await axios.get(`https://books-adda-backend.onrender.com/purchase/${userId}`);
        const purchases = response.data;

        // Aggregate purchases by book title
        const purchaseMap = purchases.reduce((acc, purchase) => {
          if (acc[purchase.bookTitle]) {
            acc[purchase.bookTitle].quantity += purchase.quantity;
            acc[purchase.bookTitle].totalPrice += purchase.totalPrice;
          } else {
            acc[purchase.bookTitle] = {
              ...purchase,
              quantity: purchase.quantity,
              totalPrice: purchase.totalPrice,
            };
          }
          return acc;
        }, {});

        setAggregatedPurchases(Object.values(purchaseMap));
      } catch (error) {
        console.error('Error fetching purchase data:', error);
      }
    };

    const fetchAddress = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return;
      }
      try {
        const response = await axios.get(`https://books-adda-backend.onrender.com/address/${userId}`);
        if (response.status === 200) {
          setAddresses(response.data);
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    fetchPurchases();
    fetchAddress();
  }, []);

  const MySwal = withReactContent(Swal);

  const handleDelete = async (purchaseId) => {
    try {
      // Show confirmation dialog using SweetAlert
      const result = await MySwal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this purchase!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      });

      if (result.isConfirmed) {
        // Make backend API call to delete purchase
        await axios.delete(`https://books-adda-backend.onrender.com/purchase/${purchaseId}`);

        // Update UI by filtering out the deleted purchase
        setAggregatedPurchases(aggregatedPurchases.filter(purchase => purchase._id !== purchaseId));

        MySwal.fire(
          'Deleted!',
          'Your purchase has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire(
          'Cancelled',
          'Your purchase is safe :)',
          'error'
        );
      }
    } catch (error) {
      console.error('Error deleting purchase:', error);
      MySwal.fire(
        'Error!',
        'An error occurred while deleting your purchase.',
        'error'
      );
    }
  };

  const handleCancelDelete = () => {
    setDeletingPurchaseId(null); // Reset deleting state
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Login to update your address');
      return;
    }
    try {
      let response;
      if (editingAddress) {
        response = await axios.put(`https://books-adda-backend.onrender.com/address/${editingAddress._id}`, { userId, ...address });
      } else {
        response = await axios.post(`https://books-adda-backend.onrender.com/address`, { userId, ...address });
      }

      if (response.status === 201 || response.status === 200) {
        setShowModal(false);
        setEditingAddress(null);
        setAddress({
          street: '',
          landmark: '',
          city: '',
          state: '',
          postalCode: '',
          country: ''
        });

        Swal.fire('Success', 'Address saved successfully', 'success');
        const fetchAddress = await axios.get(`https://books-adda-backend.onrender.com/address/${userId}`);
        setAddresses(fetchAddress.data);
      } else {
        Swal.fire('Error', 'Failed to save address', 'error');
      }
    } catch (error) {
      console.error('Error saving address:', error);
      Swal.fire('Error', 'An error occurred while saving your address', 'error');
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setAddress(address);
    setShowModal(true);
  };

  const handleAddAddress = () => {
    setEditingAddress(null);
    setAddress({
      street: '',
      landmark: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    });
    setShowModal(true);
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const result = await MySwal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this address!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      });

      if (result.isConfirmed) {
        await axios.delete(`https://books-adda-backend.onrender.com/address/${addressId}`);
        setAddresses(addresses.filter((addr) => addr._id !== addressId));

        MySwal.fire(
          'Deleted!',
          'Your address has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire(
          'Cancelled',
          'Your address is safe :)',
          'error'
        );
      }
    } catch (error) {
      console.error('Error deleting address:', error);
      MySwal.fire(
        'Error!',
        'An error occurred while deleting your address.',
        'error'
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 mt-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Orders & Addresses
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Address Section */}
            <div className="lg:w-1/3">
              <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Addresses</h2>
                  <button 
                    onClick={handleAddAddress} 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
                  >
                    Add New
                  </button>
                </div>

                <div className="space-y-4">
                  {addresses.length > 0 ? (
                    addresses.map((addr, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition duration-200">
                        <div className="space-y-2">
                          <p className="font-medium text-gray-800">{addr.street}</p>
                          <p className="text-gray-600 text-sm">{addr.landmark}</p>
                          <p className="text-gray-600 text-sm">
                            {addr.city}, {addr.state} {addr.postalCode}
                          </p>
                          <p className="text-gray-600 text-sm">{addr.country}</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button 
                            onClick={() => handleEditAddress(addr)} 
                            className="flex-1 bg-amber-500 text-white px-3 py-1.5 rounded-full text-sm hover:bg-amber-600 transition duration-200"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteAddress(addr._id)} 
                            className="flex-1 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm hover:bg-red-600 transition duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-4">No addresses found</p>
                  )}
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="lg:w-2/3">
              <div className="space-y-6">
                {aggregatedPurchases.map((purchase) => (
                  <div key={purchase._id} className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                    <div className="p-6 flex gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={purchase.bookimageUrl} 
                          alt={purchase.bookTitle} 
                          className="w-40 h-48 object-cover rounded-lg shadow-md hover:scale-105 transition duration-300" 
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">{purchase.bookTitle}</h2>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm text-gray-500">Purchase Date</p>
                            <p className="font-medium">{new Date(purchase.purchasedDate).toLocaleDateString()}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm text-gray-500">Quantity</p>
                            <p className="font-medium">{purchase.quantity} units</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3 col-span-2">
                            <p className="text-sm text-gray-500">Total Amount</p>
                            <p className="text-2xl font-bold text-blue-600">${purchase.totalPrice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Update with new styling */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </h2>
            <form onSubmit={handleSaveAddress} className="grid grid-cols-1 gap-4">
              <div className="">
                <div>
                  <label htmlFor="street" className="block text-gray-700 font-bold mb-2">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="landmark" className="block text-gray-700 font-bold mb-2">Landmark</label>
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    value={address.landmark}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">Pincode</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={address.country}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Save Address</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
