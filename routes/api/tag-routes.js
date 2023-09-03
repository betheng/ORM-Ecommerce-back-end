// Import modules
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint - GET all tags with assoc Products
router.get('/', async(req, res) => {
  try {
    const tags = await Tag.findAll({
      include: {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET single tag by ID with assoc Products
router.get('/:id', async(req, res) => {
  try {
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    });
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST to create new tag 
router.post('/', async(req, res) => {
  try {
    const newTag = await Tag.create({ tag_name: req.body.tag_name });
    res.json(newTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update tag by ID
router.put('/:id', async(req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updatedTag) {
      return res.status(404).json({ message: 'No tag found with this id' });
    }
    res.json(updatedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE tag by ID
router.delete('/:id', async(req, res) => {
  try {
    const deletedTag = await Tag.destroy({ where: { id: req.params.id } });
    if (!deletedTag) {
      return res.status(404).json({ message: 'No tag found with this id' });
    }
    res.json(deletedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;