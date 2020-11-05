<template>
    <div>
        <div class="project-heading">
            <h2><span>Features</span></h2>
        </div>
        <div v-for="(card, index) in cards" :key="index">
                <FeatureCard :cardSet="card"/>
        </div>
    </div>
</template>

<script>
    import FeatureCard from './FeatureCard';
    export default {
        name: 'Feature',
        components: {
            FeatureCard
        },
        data: function () {
            return {
               cards: [
                   //    card start
                   {
                       image: 'box.svg', 
                       header: 'Products Management', 
                
                       link: '#',
                       cardFlow: 'reverse-container',
                        ListText1:[
                        {
                            text: 'Sell physical products, services or digital products',
                        },
                        {
                            text: 'Description & attributes of products',
                        },
                        {
                            text: 'Unlimited product search filters',
                        },
                        {
                            text: 'Product Reviews',
                        },
                        {
                            text: 'You may also like (Similar) products section',
                        },
                        {
                            text: 'Recenyly viewed products section',
                        },
                       
                    ],
                     ListText2:[
                        {
                            text: 'Unlimited product variants (color, size etc), categories and collections',
                        },
                        {
                            text: 'Inventory Management',
                        },
                        {
                            text: 'Retail and Selling price',
                        },
                       {
                            text: 'Wishlist, Cart',
                        },
                        {
                            text: 'Items on sale section',
                        },
                        {
                            text: 'Grouped similar products with different color options',
                        },
                    ]
                    }, 
                     //    card start
                   {
                       image: 'factory.svg', 
                       header: 'Order Management', 
                
                       link: '#',
                       cardFlow: '',
                        ListText1:[
                        {
                            text: 'Single Page Checkout',
                        },
                        {
                            text: 'Product update on the order page',
                        },
                        {
                            text: 'Email + SMS notifications to admin, customer and vendors',
                        },
                        {
                            text: 'Custom OrderID',
                        },
                    ],
                     ListText2:[
                        {
                            text: 'Guest Checkout',
                        },
                       {
                            text: 'Order Tracking',
                        },
                        {
                            text: 'Re­Order',
                        },
                        {
                            text: 'Orders integration with Flipkart, Amazon, eBay, Snapdeal and physical store',
                        },
                    ]
                    },
                     //    card start
                   {
                       image: 'shopping-cart.svg', 
                       header: 'Shopping Cart', 
                
                       link: '#',
                       cardFlow: 'reverse-container',
                        ListText1:[
                        {
                            text: 'Auto sync shopping cart across devices (Desktop, mobile)',
                        },
                        {
                            text: 'Abandoned Cart Recovery',
                        },
                       
                    ],
                     ListText2:[
                        
                        {
                            text: 'Realtime shopping cart qty and price update and sync with database',
                        },
                        {
                            text: 'Move to wishlist option from cart',
                        },
                    ]
                    }, 
                     //    card start
                   {
                       image: 'web.svg', 
                       header: 'SEO Ready Sites', 
                
                       link: '#',
                       cardFlow: '',
                        ListText1:[
                        {
                            text: 'SEO optimized platform for faster & efficient SERP ranking',
                        },
                        {
                            text: 'Unique product page URLs and image ALT tags',
                        },
                        {
                            text: 'Default and editable page title, meta details and keywords field',
                        },
                        
                    ],
                     ListText2:[
                        {
                            text: 'Inbuilt features to automate and simplify digital marketing',
                        },
                       {
                            text: 'Page optimization with title and meta details per product, collection and category',
                        },
                        {
                            text: 'Automatically generated XML sitemap and robots.txt',
                        },
                        
                    ]
                    },
                     //    card start
                   {
                       image: 'seo.svg', 
                       header: 'Performance and Analytics Tools', 
                
                       link: '#',
                       cardFlow: 'reverse-container',
                        ListText1:[
                        {
                            text: 'Top customers report',
                        },
                        {
                            text: 'Top selling brands report',
                        },
                        {
                            text: 'Find missing image against products',
                        },
                        {
                            text: 'Integration with Google Analytics',
                        },
                        
                    ],
                     ListText2:[
                        {
                            text: 'Top selling products report',
                        },
                        {
                            text: 'Top selling categories report',
                        },
                        {
                            text: 'Out of stock alert',
                        },
                       {
                            text: 'Reports export functionality for strategy and planning',
                        },
                        
                    ]
                    }, 
                     //    card start
                   {
                       image: 'secure-payment.svg', 
                       header: 'Security & Hosting', 
                
                       link: '#',
                       cardFlow: '',
                        
                    },
                     //    card start
                   {
                       image: 'devloperimg.png', 
                       header: 'Developer Tools', 
                
                       link: '#',
                       cardFlow: 'reverse-container',
                        ListText1:[
                        {
                            text: 'Mobile first website design',
                        },
                        {
                            text: 'HTML/CSS Editing',
                        },
                        {
                            text: 'Support for Multi­Lingual Themes',
                        },
                        {
                            text: 'Editable Email & Invoice Templates',
                        },
                        
                    ],
                     ListText2:[
                        {
                            text: 'Cross­device & Cross-browser compatibility',
                        },
                        {
                            text: 'Unlimited Static Pages',
                        },
                        {
                            text: 'Customizable Navigation',
                        },
                       {
                            text: 'Sliders & Banners',
                        },
                        
                    ]
                    }, 
                     //    card start
                   {
                       image: 'payment.svg', 
                       header: 'Payment Gateways', 
                
                       link: '#',
                       cardFlow: '',
                        ListText1:[
                        {
                            text: 'Support for multiple payment gateways',
                        },
                        {
                            text: 'SSL certified and secure payment gateways',
                        },
                        {
                            text: 'Multiple payment options- Debit Card, Credit Card, Netbanking, Prepaid/Postpaid Wallets',
                        },
                       
                    ],
                     ListText2:[
                        {
                            text: 'Integrations with over 15 gateways including PayU, PayPal, Paytm, Instamojo, Razorpay and more.',
                        },
                       {
                            text: 'Offline payments & Cash on Delivery',
                        },
                        
                    ]
                    },
                    //    card start
                   {
                       image: 'techonology.svg', 
                       header: 'Technology, Hosting & Security', 
                
                       link: '#',
                       cardFlow: 'reverse-container',
                        ListText1:[
                        {
                            text: 'Google-backed Progressive Web Apps(PWA)',
                        },
                        {
                            text: '99.99% uptime',
                        },
                        {
                            text: 'Microsoft Azure, AWS and Google Cloud hosting',
                        },
                        {
                            text: 'Automatic 301 redirects',
                        },
                        {
                            text: 'HTML easily parsed by search spiders',
                        },
                    ],
                     ListText2:[
                        {
                            text: 'FREE SSL',
                        },
                        {
                            text: 'Horizontally and vertically scalable platform',
                        },
                        {
                            text: 'Custom URLs for product, category, collection, blog etc.',
                        },
                       {
                            text: 'Correct use of robots.txt file',
                        },
                        
                    ]
                    }, 
                     //    card start
                   {
                       image: 'online-shop.svg', 
                       header: 'Mobile Commerce Advantage', 
                
                       link: '#',
                       cardFlow: '',
                        ListText1:[
                        {
                            text: 'Mobile Ready Store Front',
                        },
                        {
                            text: 'Mobile Application for Store Management (mobile apps page)',
                        },
                        {
                            text: 'Customized mobile app',
                        },
                        {
                            text: 'Integration with popular mobile apps like Whatsapp',
                        },
                       
                    ],
                     ListText2:[
                        {
                            text: 'Mobile Apps',
                        },
                       {
                            text: 'SMS notifications',
                        },
                         {
                            text: 'Device-based content and design',
                        },
                       {
                            text: 'Track mobile visitors',
                        },
                    ]
                    },
               ]
               
            }
        },
    }
</script>

<style scoped>
.project-heading {
    margin-bottom: 4rem;
    margin-top: 2rem;
}

.project-heading h2 {
    text-align: center;
    font-size: 44px;
    font-weight: 700;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
}
 .project-heading h2 span {
    background-image: linear-gradient(90deg, #fa709a 0, #fee140);
    background-repeat: no-repeat;
    background-size: 100% .2em;
    background-position: 0 100%;
    transition: background-size .25s ease-in;
    text-decoration: none;
    padding-bottom: 3px;
}
</style>