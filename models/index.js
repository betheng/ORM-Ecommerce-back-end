// Import each model
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define 1:M relationship between Product and Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Define 1:M relationship between Category and Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Define 1:M relationship between Product and Tag- through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Define 1:M relationship between Tag and Product- through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Export all models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
