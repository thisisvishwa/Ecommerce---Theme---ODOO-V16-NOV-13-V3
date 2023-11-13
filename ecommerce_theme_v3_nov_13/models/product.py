```python
from odoo import models, fields

class Product(models.Model):
    _name = 'ecommerce_theme_v3_nov_13.product'
    _description = 'Product Model for ecommerce_theme_v3_nov_13'

    name = fields.Char(string='Product Name', required=True)
    description = fields.Text(string='Product Description')
    price = fields.Float(string='Product Price', required=True)
    category_id = fields.Many2one('ecommerce_theme_v3_nov_13.category', string='Category')
    image = fields.Binary(string='Product Image')
    specifications = fields.Text(string='Product Specifications')
    reviews_ids = fields.One2many('ecommerce_theme_v3_nov_13.review', 'product_id', string='Reviews')
    rating = fields.Float(compute='_compute_rating', string='Average Rating')

    def _compute_rating(self):
        for record in self:
            total_stars = sum(review.stars for review in record.reviews_ids)
            record.rating = total_stars / len(record.reviews_ids) if record.reviews_ids else 0
```