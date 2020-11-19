const date = new Date("Mon Nov 16 2020 11:12:59 GMT-0500 (Eastern Standard Time)").toString()

export const INITIAL_STATE = [{
    key: "9d489bb6-b282-4b2e-8df7-0fd5c3454425",
    name: "My First Sourdough",
    dateCreated: date,
    ingredients: [{
        key: "d1a34c29-26d0-4971-b1be-17b4c36c4918",
        amount: 1,
        ingredient: {
            cupsToGrams: 241,
            name: "Starter - 100%",
            type: "starter",
        },
        unit: {
            name: "Tablespoon",
            toBase: 0.0625,
            type: "volume"
        }
    },
    {
        key: "d1a34c29-26d0-4971-b1be-17b4c36c4918",
        ingredient: {
            name: "Starter - 100%",
            cupsToGrams: 241,
            type: "starter"
        },
        amount: 1,
        unit: {
            name: "Tablespoon",
            toBase: 0.0625,
            type: "volume"
        }
    },
    {
        key: "4876c34f-0d14-4542-84d5-d03efff401ba",
        ingredient: {
            name: "Bread Flour",
            cupsToGrams: 120,
            type: "flour"
        },
        amount: 75,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    },
    {
        key: "3d40a5c9-75a9-47a1-813e-a01aca63c182",
        ingredient: {
            name: "Water",
            cupsToGrams: 237,
            type: "liquid"
        },
        amount: 75,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    },
    {
        key: "d0f0358a-3894-4811-8371-c38d8516875d",
        ingredient: {
            name: "Water",
            cupsToGrams: 237,
            type: "liquid"
        },
        amount: 525,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    },
    {
        key: "ab499ce3-66d3-497d-95a6-d41b261d3819",
        ingredient: {
            name: "Fine Salt",
            cupsToGrams: 273,
            type: "salt"
        },
        amount: 1,
        unit: {
            name: "Tablespoon",
            toBase: 0.0625,
            type: "volume"
        }
    },
    {
        key: "809a4464-22ff-40bc-beed-cdeb99c73368",
        ingredient: {
            name: "Bread Flour",
            cupsToGrams: 120,
            type: "flour"
        },
        amount: 700,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    }
    ],
    notes: "How to Make Sourdough Bread | Kitchn",
    link: "https://www.thekitchn.com/how-to-make-sourdough-bread-224367",
    imageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1392,h_1740/k%2FPhoto%2FRecipes%2F2020-01-How-to-Sourdough-Bread%2F98652-beautiful-finished-bread-LEAD_How-to-make-sourdough-bread"
}];