import image from '../assets/img/Screen Shot 2022-04-15 at 18.40.47.png';

function Footer() {
  return (
    <>
    <footer class="bg-black white">
        <div class="container">
            <div class="row mb-0">
                <div class="col-12">
                    <h2>LEARN</h2>
                    <span class="lg-bar pull-left"></span>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-7">
                    <div class="row">
                        <div class="col-4">
                            <ul>
                                <li>About Us</li>
                                <li>Dictionary</li>
                                <li>Events</li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <ul>
                                <li>Health & Wellness</li>
                                <li>Sustainability</li>
                                <li>Facts & Myths</li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <ul>
                                <li>Producers</li>
                                <li>Recipes</li>
                                <li>Resource Library</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <img src={image} alt="temporal" class="img-fluid" />
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
