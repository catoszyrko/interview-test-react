import Article from './article/Article';
import image from '../assets/img/img-1.jpg';
import dataJson from "./dataJson/dataJson.json";


function Main() {
    const posts = dataJson;
    return (
    <>
    <section class="mt-4">
        <div class="container">
            <h1 class="head-line">Devoted to Cheese</h1>
            <div class="row">
                <div class="col-8 ml-2">
                    <h5 class="copy dark-grey">Learn how cheese products contribute to a well-balanced diet. Learn how cheese products contribute to a well-balanced diet. </h5>
                </div>
            </div>
            <div class="permalinks">
                <b class="light-grey">Learn More: </b>
                <ul>
                    <li><a href="podcast.php"><b>Podcasts</b></a></li>
                    <li><a href="podcast.php">Stories</a></li>
                </ul>
            </div>
        </div> 
    </section>
    <div class="container mt-4">
        <hr/>
    </div>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-6 box-image center">
                    <div class="card shadow ">
                        <figure class="border-cyan">
                            <div class="img-alt bg-cyan">Featured</div>
                            <img src={image} alt="" class="img-fluid vertical-center" />
                        </figure>
                        <span class="card-type mt-4"><b class="dark-grey">VIDEO</b> </span>
                        <span class="small-bar bg-cyan"></span>
                        <h4 class="card-title-lg">The five Best Pastas for Amazing Mac and Cheese</h4>
                    </div>
                </div>
                {
                    
                    posts.length ? (
                        
                        posts.map(s => <>{
                            <Article props={s}/>
                        }</>)
                    ) : (
                        console.log("no")
                    )
                }
                
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn centered bg-orange">
                        See More
                    </button>
                </div>
            </div>
        </div>
        

    </section>
    </>
    
    );
}

export default Main;
