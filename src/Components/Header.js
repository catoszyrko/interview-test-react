import logo from '../assets/img/CheeseWorld.png';

function Header() {
  return (
    <header class="shadow">
        <nav class="page-header">
            <img src={logo} alt="" class="brand"/>
            <ul class="sm-none">
                <li><a href="health.php">Health & Wellness</a></li>
                <li><a href="health.php">Sustainability</a></li>
                <li><a href="health.php">Facts & Myths</a></li>
                <li><a href="health.php">Producers</a></li>
                <li><a href="health.php">Recipes</a></li>
            </ul>
            <div class="pull-right sm-none">
                <form action="" class="sm-none">
                    <input type="text" class="input-form search" />
                </form>
            </div>
        </nav>  
    </header>
  );
}

export default Header;
