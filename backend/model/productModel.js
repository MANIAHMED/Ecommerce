const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Product name']
  },

  description: {
    type: String,
    required: [true, "please Enter Product Description"]
  },

  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxlength: [8, "Proce Cannot Exceed 8 Charaters"]
  },

  ratings: {
    type: Number,
    default: 0
  },

  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
    }
  ],

  category: {
    type: String,
    required: [true, "Pleae Enter Product Category"],
  },

  Stock: {
    type: Number,
    required: [true, "Pleae Enter Product Stock"],
    maxlength: [4, "Stock length dont exceed"],
    default: 1
  },

  numofReviews: {
    type: Number,
    default: 0
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],

  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('Product', productSchema);