document.write(`
<nav class="navbar navbar-expand-lg bg-body-terciary bg-dark" data-bs-theme="dark" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="images/logo.jpg" alt="ATECDATA" height="70">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="navbarNav">
                <div class="offcanvas-header">
                    <h1>Links</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">
                                <i class="fa-solid fa-house"></i>
                                <span class="navLink">
                                    Home
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacts.html">
                                <i class="fa-solid fa-phone"></i>
                                <span class="navLink">
                                    Contact Us
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">
                                <i class="fa-sharp fa-solid fa-users"></i>
                                <span class="navLink">
                                    About Us
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin.html">
                                <i class="fa-solid fa-screwdriver-wrench"></i>
                                <span class="navLink">
                                    Admin
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
 `);
