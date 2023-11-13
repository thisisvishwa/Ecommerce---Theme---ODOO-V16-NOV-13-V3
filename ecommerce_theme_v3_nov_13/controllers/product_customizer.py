```python
from odoo import http
from odoo.http import request

class ProductCustomizer(http.Controller):

    @http.route('/product_customizer/build_your_pc', type='json', auth='user')
    def build_your_pc(self, **kwargs):
        product_ids = kwargs.get('product_ids', [])
        products = request.env['product.product'].browse(product_ids)
        return {
            'products': [product.read()[0] for product in products]
        }

    @http.route('/product_customizer/check_compatibility', type='json', auth='user')
    def check_compatibility(self, **kwargs):
        product_ids = kwargs.get('product_ids', [])
        products = request.env['product.product'].browse(product_ids)
        compatibility = True
        for product in products:
            if not product.is_compatible:
                compatibility = False
                break
        return {
            'compatibility': compatibility
        }
```