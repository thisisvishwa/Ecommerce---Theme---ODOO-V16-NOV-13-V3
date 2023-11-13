```python
from odoo import models, fields

class User(models.Model):
    _inherit = 'res.users'

    loyalty_points = fields.Integer(string='Loyalty Points', default=0)
    badges = fields.Many2many('gamification.badge', string='Badges')
    order_history = fields.One2many('sale.order', 'user_id', string='Order History')
    wishlist = fields.Many2many('product.template', string='Wishlist')
    account_settings = fields.One2many('res.partner', 'user_id', string='Account Settings')

    def add_loyalty_points(self, points):
        self.loyalty_points += points

    def add_badge(self, badge):
        self.badges |= badge

    def add_to_wishlist(self, product):
        self.wishlist |= product

    def remove_from_wishlist(self, product):
        self.wishlist -= product
```