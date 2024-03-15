import mongoose,{Schema} from "mongoose";

const ownerOrderSchema= new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },

});

export const OwnerOrder = mongoose.model('order', ownerOrderSchema)