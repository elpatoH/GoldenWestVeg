import React from "react";

const products = [
    {
        name: "Green Onions Iced/Iceless",
        calendar: [1,1,1,1,1,1,1,1,1,1,1,1]
    },
    {
        name: "Beets",
        calendar: [1,1,4,4,4,4,4,4,4,4,4,4]
    },
    {
        name: "Chards",
        calendar: [4,4,4,4,3,3,3,3,3,4,4,4]
    },
    {
        name: "Cilantro",
        calendar: [4,4,4,4,4,4,4,4,4,4,4,4]
    },
    {
        name: "Italian Parsley",
        calendar: [4,4,4,4,4,3,3,3,3,4,4,4]
    },
    {
        name: "Parsley",
        calendar: [4,4,4,4,4,3,3,3,3,4,4,4]
    },
    {
        name: "Kale & Lacinato Kale",
        calendar: [4,4,4,4,3,3,3,3,3,4,4,4]
    },
    {
        name: "Leeks",
        calendar: [1,1,1,1,1,2,2,2,2,2,1,1]
    },
    {
        name: "Radish",
        calendar: [1,1,1,1,1,1,1,1,1,1,1,1]
    },
    {
        name: "Spinach",
        calendar: [1,1,1,1,2,2,2,2,2,1,1,1]
    },
    {
        name: "Cabbage",
        calendar: [3,3,3,3,3,3,3,3,3,3,3,3]
    },
    {
        name: "Celery",
        calendar: [3,3,3,3,3,3,2,2,2,3,3,3]
    },
    {
        name: "Romaine, Leaf Lettuce",
        calendar: [3,3,2,2,2,2,2,2,2,3,3,3]
    }

];

export default function Product() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Function to determine the class for each calendar box based on the value
    const getBoxClassUSA = (value) => {
      switch (value) {
        case 1:
            return "bg-gray-200";
        case 2:
            return "bg-gray-200";
        case 3:
            return "bg-green-500";
        case 4:
            return "bg-green-500";
      }
    };

    const getBoxClassMEX = (value) => {
        switch (value) {
          case 1:
            return "bg-green-500";
          case 2:
            return "bg-gray-200";
          case 3:
            return "bg-gray-200";
          case 4:
            return "bg-green-500";
        }
      };
  
    return (
      <div className="space-y-8 p-4">

        {/* Month Labels */}
        <div className="grid grid-cols-12 gap-2 mb-2">
              {months.map((month, index) => (
                <div key={index} className="text-center text-xs font-medium">
                  {month}
                </div>
              ))}
        </div>

        {products.map((product, index) => (
            <div key={index}>
                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
    
                {/* Product Calendar */}
                <div className="grid grid-cols-12 gap-2">
                    {product.calendar.map((value, monthIndex) => (
                        <div key={monthIndex}>
                        <div
                        key={monthIndex}
                        className={`h-6 w-6 rounded ${getBoxClassUSA(value)}`}
                        title={months[monthIndex]} // Add a tooltip showing the month
                        ></div>

                        <div
                        key={monthIndex}
                        className={`h-6 w-6 rounded ${getBoxClassMEX(value)}`}
                        title={months[monthIndex]} // Add a tooltip showing the month
                        ></div>

                        </div>
                    ))}
                </div>
            </div>
        ))}

      </div>
    );
  }