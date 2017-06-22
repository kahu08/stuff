<template>
    <div>
        <div class="newsletter">
            <div class="container">
                <div class="col-md-6 w3agile_newsletter_left">
                    <h2>Newsletter</h2>
                    <p>For the latest offers and products, Be the first to know.</p>
                </div>
                <div class="col-md-6 w3agile_newsletter_right">
                    <form action="#" method="post">
                        <input type="email" name="Email" value="Email" onfocus="this.value = '';"
                               onblur="if (this.value == '') {this.value = 'Email';}" required="">
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <footer class="footer-distributed">

            <div class="footer-right">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <a href="index.html">Home</a>
                    ·
                    <a href="Hair.html">Hair and Beauty</a>
                    ·
                    <a href="accessories.html">Accessories</a>
                    ·
                    <a href="kids.html">Kiddy Stuff</a>
                    ·


                    <a href="contact.html">Contact</a>
                </p>

                <p>Girlstuff &copy; 2017. All Rights Reserved</p>
            </div>

        </footer>
    </div>
</template>

<script>
export default {
  name: 'g-footer'
}
</script>
