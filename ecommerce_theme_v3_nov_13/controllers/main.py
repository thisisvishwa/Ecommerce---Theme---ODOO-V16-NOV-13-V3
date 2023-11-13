```python
from odoo import http
from odoo.http import request

class MainController(http.Controller):

    @http.route('/homepage', type='http', auth='public', website=True)
    def render_homepage(self):
        return request.render('ecommerce_theme_v3_nov_13.homepage')

    @http.route('/product/<model("product.template"):product>', type='http', auth='public', website=True)
    def render_product_detail(self, product):
        return request.render('ecommerce_theme_v3_nov_13.product_detail', {'product': product})

    @http.route('/category/<model("product.category"):category>', type='http', auth='public', website=True)
    def render_category_page(self, category):
        return request.render('ecommerce_theme_v3_nov_13.category_page', {'category': category})

    @http.route('/user/account', type='http', auth='user', website=True)
    def render_user_account(self):
        return request.render('ecommerce_theme_v3_nov_13.user_account')

    @http.route('/error', type='http', auth='public', website=True)
    def render_error_page(self):
        return request.render('ecommerce_theme_v3_nov_13.error_pages')
```