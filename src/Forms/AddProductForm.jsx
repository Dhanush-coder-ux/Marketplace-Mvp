import GradientButton from '@/Components/GradientButton'
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"; 
import Title from '@/Components/Title';

const AddProductForm = () => {
    const [ formData, setFormData ] = useState({
        product_code: "",
        name: "",
        price: "",
        stock: ""
    });

   
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form Submitted:", formData);
       
    };

  

    return (
        <div>
             <Title>Inventory / Add Product</Title>
            <div className="max-w-2xl mx-auto p-4">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md mt-4">
            
                    <div>
                        <Label htmlFor="product_code" className={"lable"}>
                            Product Code
                        </Label>
                        <input
                            id="product_code"
                            value={formData.product_code}
                            onChange={handleChange}
                            placeholder="Enter product code (e.g., P-123)"
                            className={"input"}
                        />
                    </div>

                
                    <div>
                        <Label htmlFor="name" className={"lable"}>
                            Product Name
                        </Label>
                        <input
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className={"input"}
                        />
                    </div>

                    <div>
                        <Label htmlFor="price" className={"lable"}>
                            Price
                        </Label>
                        <input
                            id="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price (e.g., 99.99)"
                            className={"input"}
                        />
                    </div>

                
                    <div>
                        <Label htmlFor="stock" className={"lable"}>
                            Stock Quantity
                        </Label>
                        <input
                            id="stock"
                            type="number"
                            value={formData.stock}
                            onChange={handleChange}
                            placeholder="Enter available quantity"
                            className={"input"}
                        />
                    </div>

                
                    <GradientButton
                        type="submit"
                        className="w-full" 
                    >
                        Add Product
                    </GradientButton>
                </form>
            </div>
        </div>
    )
}

export default AddProductForm