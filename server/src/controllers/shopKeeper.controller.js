import { Item } from "../models/item.model.js";

const displayData = (req, res) => {
  res.send(global.shopKeeperInfo);
};

const getItems = async(req,res)=>{
   try{
     const topItems = await Item.aggregate([
    {
        $sort: { count: -1 } // Sort items by count in descending order
    },
    {
        $limit: 10 // Limit the result to 10 items
    }
   ]);
    res.json({
      success: true,
      topItems
    })
   }catch(error){
    res.send(404).json({
      success: false,
      message: error.message
    })
   }
}
const getRatedItems = async(req,res)=>{
   try{
     const topItems = await Item.aggregate([
    {
        $sort: { rating: -1 } // Sort items by count in descending order
    },
    {
        $limit: 10 // Limit the result to 10 items
    }
   ]);
    res.json({
      success: true,
      topItems
    })
   }catch(error){
    res.send(404).json({
      success: false,
      message: error.message
    })
   }
}

export { displayData,getItems,getRatedItems };
