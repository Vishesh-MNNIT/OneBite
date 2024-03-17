import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Ratings } from "../models/rating.model.js";
import { Item } from "../models/item.model.js";

const itemRating = async (req, res) => {
  console.log(req.body);
  const { id, rating, email } = req.body;
  const Rating = parseInt(rating);
  const items = await Item.findOne({ _id: id });
  // console.log(items);
  try {
    let item = await Ratings.findOne({ id: id });

    if (!item) {
      // If the item doesn't exist, create a new one
      item = await Ratings.create({
        id: id,
        count: 1,
        sum: rating,
        rating: Rating,
        userId: [email], // Initialize userId as an array with the first userId
      });

      items.count += 1;
      items.rating = (items.rating + Rating) / items.count;
      await items.save();
    } else {
      // If the item exists, check if userId already exists in the userId array
      if (item.userId.includes(email)) {
        return res.status(400).json({
          success: false,
          message: "You have already rated this item.",
        });
      }

      // If the item exists, update it

      item.count += 1;
      console.log(item.sum);
      item.sum += Rating;
      console.log(item.sum);
      item.rating = item.sum / item.count; // Update the rating
      items.rating = item.rating;
      items.count = items.count + 1;
      await items.save();
      // Push the new userId into the userId array
      item.userId.push(email);

      // Save the updated item
      await item.save();
    }

    return res.json({
      success: true,
      message: "Rating Done",
      item: item, // Optionally, return the updated item
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing the rating.",
      error: err.message,
    });
  }
};

export { itemRating };
