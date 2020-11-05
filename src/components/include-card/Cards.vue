<template>
    <section class="included-main" :class="set">
        <div class="icluded-container" >
            <div class="includ-head">
                <h2>WHAT’S INCLUDED</h2>
                <p>Get 100+ premium features out of the box with litekart's integrated onetime pricing</p>
            </div>
            <div class="includ-cards">
                <div v-for="(card, index) in cards" :key="index">
                    <CardBox :boxes="card"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardBox from '../include-card/CardBox';
    export default {
        name: 'Cards',
         props: {
          set: String,
        },
        components: {
            CardBox,
        },
         data: function () {
            return {
               cards: [
                   {
                       image: 'facets.svg',
                       heading: 'The Next Generation of Commerce',
                       text: 'Our platform allows users to get started selling within minutes. Featuring a complete e-commerce store designed for products and services with tons of free and exciting features.',
                   },
                   {
                       image: 'search-solid.svg',
                       heading: 'Powerfull search',
                       text: 'Leveraging the power of elastic search technology, we achieve the exact match of the searched product, giving user the ease to use and enlightment.',
                   },
                    {
                       image: 'facets.svg',
                       heading: 'Facets',
                       text: 'Facets helps to filter the search results further in the product listing/search/category page to narrow down the results. Facets can be based upon price range, brand, size, category, colors, key features.',
                   },
                   {
                       image: 'product-details.svg',
                       heading: 'Product details',
                       text: 'The Customers can click on a particular product and navigate to the product page to view complete display of the product, along with descriptions, offers and discounts that are applied to that product, and so on.',
                   },
                   {
                       image: 'wishlist.svg',
                       heading: 'Wishlist',
                       text: 'Customers have option to add a product to Wishlist for later purchase',
                   },
                   {
                       image: 'SEO.svg',
                       heading: 'SEO',
                       text: '100% Search Engine Friendly URLs, Google SiteMap support.',
                   },
                   {
                       image: 'marketing-promotions.svg',
                       heading: 'Marketing & Promotions',
                       text: 'Catalog Promotional Pricing by percentage or fixed amount with ability to restrict to stores, categories, Products',
                   },
                   {
                       image: 'catalogue-browsing.svg',
                       heading: 'Catalogue Browsing',
                       text: 'Multiple images for products, options for extensive reviews, wishlists and much more.',
                   },
                   {
                       image: 'catlog-managment.svg',
                       heading: 'Catalog Management',
                       text: 'Inventory management, batch import and export of products, additional product attributes.',
                   },
                   {
                       image: 'customer-accounts.svg',
                       heading: 'Customer Accounts',
                       text: 'Order status and history, e-mail for products in the wishlist.',
                   },
                   {
                       image: 'analytic-reporting.svg',
                       heading: 'Analytics & Reporting',
                       text: 'The script is integrated with Google Analytics and offers many different reports.',
                   },
                   {
                       image: 'customer-check.svg',
                       heading: 'Customer Service',
                       text: `'Enhanced features for customers' accounts, Contact Us form, comprehensive order tracking and history, customizable order e-mails.'`,
                   },
                   {
                       image: 'shipping-options.svg',
                       heading: 'Shipping Options',
                       text: 'Option of free shipping, standard shipping, cart total based shipping',
                   },
                   {
                       image: 'order-managment.svg',
                       heading: 'Order Management',
                       text: 'Create orders through admin area, create multiple invoices shipments and credit memos, call center order creation option.',
                   },
                   {
                       image: 'network-wired-solid.svg',
                       heading: 'PWA for eCommerce',
                       text: 'The future of mobile apps is here',
                   },
                   {
                       image: 'platform-agnostic.svg',
                       heading: 'Platform agnostic',
                       text: 'With all major modules separated, we have the power of choosing any API, any Store Front, any No-SQL database, any image processing service, any API',
                   },
                   {
                       image: 'banner.svg',
                       heading: 'Banners',
                       text: '',
                   },
                   {
                       image: 'product-search.svg',
                       heading: 'Product Search',
                       text: 'With help of elastic seach, the searching speed is improves by 5x',
                   },
                   {
                       image: 'category-list.svg',
                       heading: 'Category Listing',
                       text: 'Along with seach functionality, users have an option to browse products based on categories',
                   },
                   {
                       image: 'product-details.svg',
                       heading: 'Product Detail Page',
                       text: 'Product details page is high SEO capable + has ability for html content + features + highlights + discounted pricing',
                   },
                    {
                       image: 'javascript.svg',
                       heading: 'Javascript Cart',
                       text: 'Add to cart is realtime with interation animations',
                   },
                    {
                       image: 'payment-gateway.svg',
                       heading: 'Payment Gateways',
                       text: 'Integrate any payment gateway into the API with little customizations',
                   },
                    {
                       image: 'single-page.svg',
                       heading: 'Single Page Checkout',
                       text: 'Cart Summary, Address Input, Payment options all in a single page',
                   },
                    {
                       image: 'guest-checkout.svg',
                       heading: 'Guest Checkout',
                       text: 'Option to checkout without even login',
                   },
                    {
                       image: 'authendication.svg',
                       heading: 'Authentication & Authorization',
                       text: 'We have both phone + email based authentication as well as authorization architecture with hierarchy',
                   },
                    {
                       image: 'manage-products.svg',
                       heading: 'Manage Products',
                       text: 'Product details + stock can be managed by store manager',
                   },
                    {
                       image: 'email.svg',
                       heading: 'Email Notifications',
                       text: 'There is an option to send email notifications with order details',
                   },
                    {
                       image: 'settings.svg',
                       heading: 'Settings',
                       text: 'Through Store Admin settings store information can be controlled',
                   },
                    {
                       image: 'printable-invoice.svg',
                       heading: 'Printable Invoice',
                       text: 'Every order generates an invoice which is temlate based',
                   },
                    {
                       image: 'related-products.svg',
                       heading: 'Related Products',
                       text: 'An API endpoint for products based on 1 referenced product',
                   },
                    {
                       image: 'dashboard.svg',
                       heading: 'Dashboards & Analytics',
                       text: 'Store Dashboard which is accesed by admin have option for customizable reports',
                   },
                    {
                       image: 'chart-line-solid.svg',
                       heading: 'Sales Management',
                       text: 'Orders processing dashboard with complete details about that order + Option to create order from Admin Panel',
                   },
                    {
                       image: 'user-roles.svg',
                       heading: 'Customers Management',
                       text: 'Customer details can be viewed, edited, exported',
                   },
                    {
                       image: 'file-image-solid.svg',
                       heading: 'CDN',
                       text: 'All static assets are served over CDN for faster content delivery',
                   },
                   {
                       image: 'file-image-regular.svg',
                       heading: 'Image Optimizations',
                       text: 'All images are optimized on the fly with microservice based image optimizations',
                   },
                    {
                       image: 'lazy-loading.svg',
                       heading: 'Lazy Loading',
                       text: 'Listing page images are lazy loaded to present a instant loading experience',
                   },
                   {
                       image: 'folder-open-solid.svg',
                       heading: 'Page Preloading',
                       text: 'Preloader are enable automatically whenever there is a network response delay',
                   },
                    {
                       image: 'animation.svg',
                       heading: 'Animations',
                       text: 'Store front and Store admin has some user interation animation which ads to user experience',
                   },
                   {
                       image: 'multilevel-categories.svg',
                       heading: 'Multi Level Categories',
                       text: 'We can nest categories upto 4 levels',
                   },
                    {
                       image: 'megamenu.svg',
                       heading: 'Megamenu',
                       text: 'Megamenu can be enalbed for a store with multi level category',
                   },
                   {
                       image: 'cms-page.svg',
                       heading: 'CMS Pages',
                       text: 'You can create unlimited number of static pages for the eCommerce store',
                   },
                    {
                       image: 'banners.svg',
                       heading: 'Banners',
                       text: 'Store banners can be uploaded directly from admin panel. There are 5 types of banners available for store front',
                   },
                   {
                       image: 'size-chart.svg',
                       heading: 'Sizechart',
                       text: 'Sizechart can be uploaded against a particular product or category or brand',
                   },
                    {
                       image: 'brand-managment.svg',
                       heading: 'Brand Management',
                       text: 'There is a master repository for brands. Store manager has option to attach brand to a product',
                   },
                   {
                       image: 'email-tamplets.svg',
                       heading: 'Email Templates',
                       text: 'Email Templates are completely customizable from store admin panel',
                   },
                    {
                       image: 'invoice-through-emails.svg',
                       heading: 'Auto send invoice through emails',
                       text: 'There is an option to automatically email invoice whenever an order is placed, or invoice is requested by user',
                   },
                   {
                       image: 'ratings-review.svg',
                       heading: 'Ratings & Reviews',
                       text: 'Rating and Reviews have moderation option too',
                   },
                    {
                       image: 'promotions.svg',
                       heading: 'Promotions (Cart & Product)',
                       text: 'There are both Cart and Product promotions options',
                   },
                   {
                       image: 'wishlist.svg',
                       heading: 'Wishlist',
                       text: 'Wishlist can be enalbed if a store admin wish so',
                   },
                    {
                       image: 'product-option-based-price.svg',
                       heading: 'Product Option Based Price',
                       text: 'In certain cases product price varies based on size, hence this requirement is already taken care of',
                   },
                   {
                       image: 'multiple-delivery-address.svg',
                       heading: 'Multiple Delivery Address',
                       text: 'All users address are stored and during checkout it is presented for selection',
                   },
                    {
                       image: 'social-login.svg',
                       heading: 'Social login',
                       text: 'Litekart has an option of Social login using Google, Facebook, Twitter, Github',
                   },
                   {
                       image: 'server-rendered.svg',
                       heading: 'Server rendered (Univarsal)',
                       text: 'The complete website is server rendered. Hence we get great speed, low memory requirement, high SEO score',
                   },
                    {
                       image: 'report-analytics.svg',
                       heading: 'Reports & Analytics',
                       text: 'Sales Report, Abandoned Cart, Best Purchased Products, Product Reviews',
                   },
                   {
                       image: 'abadonned-carts.svg',
                       heading: 'Abandonned Carts',
                       text: 'We keep all cart activity in a database, may that be not loggedin users, later we can send promotional emails using this data',
                   },
                    {
                       image: 'sort-alpha-up-alt-solid.svg',
                       heading: 'Featured Products',
                       text: 'Store manager has an option to feature a product at home page to push sell',
                   },
                   {
                       image: 'recently-viewed.svg',
                       heading: 'Recently Viewed Products',
                       text: 'This sections displays the product browsing history of a customer',
                   },
                    {
                       image: 'related-products.svg',
                       heading: 'Related Products',
                       text: 'When an customer browse a product, the system selects similar product and displays it bellow that products details',
                   },
                   {
                       image: 'best-viewed-products.svg',
                       heading: 'Best Viewed Products Report',
                       text: 'We keep track of each product views. This report selects products for which customers shown interest the most',
                   },
                    {
                       image: 'ssl.svg',
                       heading: 'SSL',
                       text: 'Easily deploy SSL certificates for your store adding more security and customer confidence',
                   },
                   {
                       image: 'sms-mails.svg',
                       heading: 'SMS & Email Notifications for orders',
                       text: 'Both SMS and Email options are fully configurable, you can create your own SMS and Email templates',
                   },
                    {
                       image: 'contact-us.svg',
                       heading: 'Contact Us form',
                       text: 'The Litekart has inbuild contact us form which collects user queries into system for later review',
                   },
                   {
                       image: 'import-export.svg',
                       heading: 'Import and Export of catalog',
                       text: 'Users, Orders, Catalog can be imported into the database and the export option helps to easily take out and study the performance of a group of products',
                   },
                    {
                       image: 'banner.svg',
                       heading: 'Simple, Configurable (e.g. size, color, etc.) and Grouped Products',
                       text: 'A product can be Simple product, without variations or with combinations like different sizes. There is also an option to group products based on color',
                   },
                   {
                       image: 'reviews-moderation.svg',
                       heading: 'Reviews Moderation',
                       text: 'Reviews and Ratings has option for direct publish or publish after moderation',
                   },
                    {
                       image: 'multiple-images.svg',
                       heading: 'Multiple Images Per Product',
                       text: 'You can upload multiple image against a single product + Option to upload different image for each variant/option',
                   },
                   {
                       image: 'inventory-managment.svg',
                       heading: 'Inventory Managemen',
                       text: 'Stock is automatically updated on item receipt and when order is placed',
                   },
                    {
                       image: 'product-sharing.svg',
                       heading: 'Product sharing option',
                       text: 'From product details page, it can be directly shared through social websites',
                   },
                   {
                       image: 'socila-media.svg',
                       heading: 'Social media optimized',
                       text: '',
                   },
                    {
                       image: 'layer-fatched (1).svg',
                       heading: 'Layered / Faceted Navigation for filtering of products in categories',
                       text: 'Along with powerful seach option, the search results can be further narrowed down using facets',
                   },
                   {
                       image: 'breadcrumbs.svg',
                       heading: 'Breadcrumbs',
                       text: 'Automated breadcrumbs for all pages',
                   },
                    {
                       image: 'product-moderation.svg',
                       heading: 'Product moderation',
                       text: 'Option to publish products after moderation by Store Manager',
                   },
                   {
                       image: 'infinite-scroll.svg',
                       heading: 'Infinite scroll',
                       text: 'For home page and product listing page there is option to enable infinite scrolling',
                   },
                    {
                       image: 'cart-sync.svg',
                       heading: 'Cart sync across devices',
                       text: 'The items added into cart are automatically synced acroll all logged in devices of the user',
                   },
                   {
                       image: 'instant-search.svg',
                       heading: 'Instant search',
                       text: 'Search suggestions / instant search Using power of elastic search',
                   },
                    {
                       image: 'morden-js.svg',
                       heading: 'Modern JS Stack',
                       text: 'Using VueJS, Nuxt, Svelte, Sapper, NodeJS, MongoDB, Webpack, Express',
                   },
                   {
                       image: 'replace-your.svg',
                       heading: 'Replace your frontend without backend changes',
                       text: 'Attach any store front without changing the server architecture',
                   },
                    {
                       image: 'bulletproof.svg',
                       heading: 'Bulletproof infrastructure for seasonal traffic peaks like Black Friday',
                       text: 'With Horizontal scaling capability handle any traffic surge. The architecture will take care of it gracefully',
                   },
                   {
                       image: 'cloud-hosting.svg',
                       heading: 'Cloud hosting',
                       text: 'Leverage the power of speed, scalability and availability',
                   },
                    {
                       image: 'automated-backups.svg',
                       heading: 'Automated backups',
                       text: 'Backups are automatically generated everyday giving you peace of mind',
                   },
                   {
                       image: 'cdn.svg',
                       heading: 'static assets served from CDN',
                       text: 'Using CDN through out the world static assets are served with a greater speed',
                   },
                    {
                       image: 'unlimited-products.svg',
                       heading: 'Unlimited product variants (color, size etc)',
                       text: 'You can attach unlimited number of products, product variants, product features',
                   },
                   {
                       image: 'unlimited-products (2).svg',
                       heading: 'Unlimited product search filters',
                       text: 'Product search results can be narrowed down further using any number of filters',
                   },
                    {
                       image: 'search-terms.svg',
                       heading: 'Search terms report',
                       text: 'We keep track of all search terms of user for analytics purpose',
                   },
                   {
                       image: 'retail-and-selling.svg',
                       heading: 'Retail and Selling price',
                       text: 'There is 3 pricing options - Maximum Retail Price, Selling Price',
                   },
                    {
                       image: 'customer-order-id.svg',
                       heading: 'Custom OrderID',
                       text: 'Order ID prefix can be choosen from API settings',
                   },
                   {
                       image: 'inbuilt-editable.svg',
                       heading: 'Inbuilt editable fields for keywords, meta title and description',
                       text: 'Each page, product, category, brand has editable keywords, meta title and description fields',
                   },
                    {
                       image: 'seo-optimized.svg',
                       heading: 'SEO optimized themes for better brand presence',
                       text: 'Store front has been specially crafted with SEO in mind',
                   },
                   {
                       image: 'most-advanceed.svg',
                       heading: 'Most advanced technology stack',
                       text: 'With continuous software update we keep Litekart as par with latest technology enhancement and is free for lifetime',
                   },
                    {
                       image: 'low-stock.svg',
                       heading: 'Low Stock Report',
                       text: 'Store Manager will get notification of safety stock level',
                   },
                   {
                       image: 'view-edit-create.svg',
                       heading: 'View, edit, create and fulfill orders from admin panel',
                       text: 'Order can be created and fulfilled from admin panel',
                   },
                    {
                       image: 'call-center.svg',
                       heading: 'Call Center (phone) order creation',
                       text: '',
                   },
                   {
                       image: 'user-roles.svg',
                       heading: 'User roles for better store administration',
                       text: 'Hierarchy based user roles keeps the abstraction level',
                   },
                    {
                       image: 'web-service.svg',
                       heading: 'Web Services API for easy integration with any third-party application',
                       text: 'ReST architecture of litekart integrates easily with third-party plugins',
                   },
                   {
                       image: 'fully-customizable.svg',
                       heading: 'Fully customizable design using templates',
                       text: '',
                   },
                    {
                       image: 'content-managment.svg',
                       heading: 'Content Management System for Informational Pages',
                       text: 'HTML/CSS based static pages can be created from Admin Panel by Store Manager',
                   },
                    {
                       image: 'google.svg',
                       heading: 'Google and Fb analytics and pixel integration',
                       text: 'Google analytics, facebook pixel can be integrated with just proving the ID',
                   },
                    {
                       image: 'auto-generated.svg',
                       heading: 'Auto Generate Google Site Map',
                       text: 'Google sitemap is automatically generated everyday midnight through a cron job at server',
                   },
                   {
                       image: 'meta-info.svg',
                       heading: 'Meta-information for products and categories',
                       text: 'As a basic SEO requirement meta product and category information is enabled as per latest SEO standard which can be directly controlled from admin panel',
                   },
                    {
                       image: 'integrated.svg',
                       heading: 'Integrated with Google Analytics',
                       text: 'Google Analytics can be configured from Admin panel',
                   },
               ]
            }
         }
         }
</script>

<style scoped>
.included-main {
    padding: 0.5rem;
    background-color: #f7fafc;
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

.included-main .icluded-container {
    width: 880px;
}

.included-main .icluded-container .includ-head h2 {
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
    font-weight: 700;
    font-size: 2.25rem;
    margin-top: 0;
    margin-bottom: .5rem;
    text-align: center;
}

.included-main .icluded-container .includ-head p {
    letter-spacing: .1em;
    text-align: center;
    color: #1a202c;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.8;
    font-weight: 400;
}

.included-main .icluded-container .includ-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
}
.included-main .icluded-container .includ-cards>div{
    width: 40%;
    margin: 15px;
    padding: 2rem 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    border: 1px solid #e2e8f0;
}

.big-cards{
    background-color:unset;

}
.big-cards .icluded-container {
    width: 100%;
}
</style>