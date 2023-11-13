```python
from odoo import http
from odoo.http import request

class ErrorController(http.Controller):

    @http.route('/404', type='http', auth='public', website=True)
    def error_404(self):
        return request.render('ecommerce_theme_v3_nov_13.404')

    @http.route('/500', type='http', auth='public', website=True)
    def error_500(self):
        return request.render('ecommerce_theme_v3_nov_13.500')
```