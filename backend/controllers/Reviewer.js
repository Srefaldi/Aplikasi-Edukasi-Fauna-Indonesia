import ReviewerModel from "../models/ReviewerModel.js";

export const addReview = async (req, res) => {
    try {
      const { name, rating, review } = req.body;
  
      // Validate input data (you can add more validation as needed)
      if (!name || !rating || !review) {
        return res.status(400).json({ error: 'Incomplete data. Please provide name, rating, and review.' });
      }
  
      // Create a new review using the ReviewerModel
      const newReview = await ReviewerModel.create({
        name: name,
        rating: rating,
        review: review,
      });
  
      // Respond with the newly created review
      res.status(201).json(newReview);
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getAllReviews = async (req, res) => {
  try {
    // Fetch all reviews from the ReviewerModel
    const allReviews = await ReviewerModel.findAll();

    // Respond with the array of reviews
    res.status(200).json(allReviews);
  } catch (error) {
    console.error('Error fetching all reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getReviewById = async (req, res) => {
    try {
      const { reviewId } = req.params;
  
      // Fetch a review by its ID from the ReviewerModel
      const review = await ReviewerModel.findByPk(reviewId);
  
      // Check if the review with the given ID exists
      if (!review) {
        return res.status(404).json({ error: 'Review not found' });
      }
  
      // Respond with the review
      res.status(200).json(review);
    } catch (error) {
      console.error('Error fetching review by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const updateReviewById = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { name, rating, review } = req.body;

    // Fetch the review by its ID from the ReviewerModel
    const existingReview = await ReviewerModel.findByPk(reviewId);

    // Check if the review with the given ID exists
    if (!existingReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Update the review with the new data
    await existingReview.update({
      name: name || existingReview.name,
      rating: rating || existingReview.rating,
      review: review || existingReview.review,
    });

    // Fetch the updated review
    const updatedReview = await ReviewerModel.findByPk(reviewId);

    // Respond with the updated review
    res.status(200).json(updatedReview);
  } catch (error) {
    console.error('Error updating review by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteReviewById = async (req, res) => {
    try {
      const { reviewId } = req.params;
  
      // Fetch the review by its ID from the ReviewerModel
      const reviewToDelete = await ReviewerModel.findByPk(reviewId);
  
      // Check if the review with the given ID exists
      if (!reviewToDelete) {
        return res.status(404).json({ error: 'Review not found' });
      }
  
      // Delete the review from the database
      await reviewToDelete.destroy();
  
      // Respond with a success message
      res.status(200).json({ msg: 'Review deleted successfully' });
    } catch (error) {
      console.error('Error deleting review by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };