import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        { name: "Aarav Sharma", email: "aarav.sharma@mail.com", id: 9876543210, website: "aaravsharma.com", industry: "IT", status: "Active", remark: "Good client" },
        { name: "Saanvi Verma", email: "saanvi.verma@mail.com", id: 9812345678, website: "saanviverma.com", industry: "Healthcare", status: "Inactive", remark: "Pending follow-up" },
        { name: "Vihaan Iyer", email: "vihaan.iyer@mail.com", id: 9901234567, website: "vihaaniyer.com", industry: "Finance", status: "Active", remark: "New customer" },
        { name: "Ananya Rao", email: "ananya.rao@mail.com", id: 9823456789, website: "ananyarao.com", industry: "Education", status: "Active", remark: "Loyal client" },
        { name: "Kabir Joshi", email: "kabir.joshi@mail.com", id: 9856781234, website: "kabirjoshi.com", industry: "Real Estate", status: "Inactive", remark: "Not responding" },
        { name: "Ishaan Gupta", email: "ishaan.gupta@mail.com", id: 9789012345, website: "ishaangupta.com", industry: "IT", status: "Active", remark: "Interested in services" },
        { name: "Myra Mehta", email: "myra.mehta@mail.com", id: 9890123456, website: "myramehta.com", industry: "Retail", status: "Active", remark: "Regular customer" },
        { name: "Reyansh Reddy", email: "reyansh.reddy@mail.com", id: 9776543210, website: "reyanshreddy.com", industry: "Hospitality", status: "Inactive", remark: "Slow response" },
        { name: "Aadhya Nair", email: "aadhya.nair@mail.com", id: 9765432109, website: "aadhyanair.com", industry: "Media", status: "Active", remark: "Upcoming deal" },
        { name: "Advait Bhat", email: "advait.bhat@mail.com", id: 9754321098, website: "advaitbhat.com", industry: "Automobile", status: "Active", remark: "First-time customer" },
        { name: "Tara Kulkarni", email: "tara.kulkarni@mail.com", id: 9743210987, website: "tarakulkarni.com", industry: "Finance", status: "Inactive", remark: "Follow-up needed" },
        { name: "Rudra Sharma", email: "rudra.sharma@mail.com", id: 9732109876, website: "rudrasharma.com", industry: "IT", status: "Active", remark: "Potential lead" },
        { name: "Pihu Das", email: "pihu.das@mail.com", id: 9721098765, website: "pihudas.com", industry: "Healthcare", status: "Active", remark: "Satisfied client" },
        { name: "Yuvan Chatterjee", email: "yuvan.chatterjee@mail.com", id: 9710987654, website: "yuvanchatterjee.com", industry: "Retail", status: "Inactive", remark: "Lost interest" },
        { name: "Sanvi Patil", email: "sanvi.patil@mail.com", id: 9709876543, website: "sanvipatil.com", industry: "Education", status: "Active", remark: "Wants more details" },
        { name: "Rohan Malhotra", email: "rohan.malhotra@mail.com", id: 9698765432, website: "rohanmalhotra.com", industry: "IT", status: "Active", remark: "Good rapport" },
        { name: "Aarohi Saxena", email: "aarohi.saxena@mail.com", id: 9687654321, website: "aarohisaxena.com", industry: "Media", status: "Inactive", remark: "Might return" },
        { name: "Dhruv Bajpai", email: "dhruv.bajpai@mail.com", id: 9676543210, website: "dhruvbajpai.com", industry: "Automobile", status: "Active", remark: "New inquiry" },
        { name: "Kiara Kapoor", email: "kiara.kapoor@mail.com", id: 9665432109, website: "kiarakapoor.com", industry: "Fashion", status: "Active", remark: "Loyal customer" },
        { name: "Neel Dixit", email: "neel.dixit@mail.com", id: 9654321098, website: "neeldixit.com", industry: "Finance", status: "Inactive", remark: "Delayed payment" }
    ],
};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTableData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setTableData } = tableSlice.actions;
export default tableSlice.reducer;
